import { TASK_1_PROMPTS } from './data/task1Prompts.js';
import { TASK_2_PROMPTS } from './data/task2Prompts.js';
import { ACADEMIC_WORD_LIST } from './data/academicWordList.js';
import { COHESIVE_DEVICES } from './data/cohesiveDevices.js';
import { evaluateEssay } from './engine/scoringEngine.js';
import { tokenize } from './engine/tokenizer.js';
import { storageService } from './services/storageService.js';

// Band descriptor labels per official IELTS scale
const BAND_DESCRIPTORS = {
  9: 'Expert User',
  8.5: 'Very Good User (High)',
  8: 'Very Good User',
  7.5: 'Good User (High)',
  7: 'Good User',
  6.5: 'Competent User (High)',
  6: 'Competent User',
  5.5: 'Modest User (High)',
  5: 'Modest User',
  4.5: 'Limited User',
  4: 'Limited User',
  3.5: 'Extremely Limited',
  3: 'Extremely Limited'
};

class IELTSApp {
  constructor() {
    this.currentTask = 'task2'; // 'task1' | 'task2'
    this.currentMode = 'simulator'; // 'simulator' | 'coach'
    this.currentPrompt = null;
    
    // Timer state
    this.timerSeconds = 40 * 60;
    this.timerRunning = false;
    this.timerInterval = null;

    // Guided coach sections state
    this.coachSection = 'intro';
    this.coachSections = {
      intro: '',
      body1: '',
      body2: '',
      conclusion: ''
    };

    this.initElements();
    this.initEvents();
    this.loadPrompts();
    this.initServiceWorker();
  }

  initElements() {
    // Header controls
    this.btnTask1 = document.getElementById('btn-task1');
    this.btnTask2 = document.getElementById('btn-task2');
    this.btnSimulator = document.getElementById('btn-simulator');
    this.btnCoach = document.getElementById('btn-coach');

    // Timer & Metrics
    this.timerDisplay = document.getElementById('timer-display');
    this.timerToggleBtn = document.getElementById('timer-toggle-btn');
    this.timerPlayIcon = document.getElementById('timer-play-icon');
    this.timerResetBtn = document.getElementById('timer-reset-btn');
    this.wordCountNum = document.getElementById('word-count-num');
    this.wordTargetLabel = document.getElementById('word-target-label');
    this.wordStatusBadge = document.getElementById('word-status-badge');

    // Prompt elements
    this.promptSelect = document.getElementById('prompt-select');
    this.promptCategoryBadge = document.getElementById('prompt-category-badge');
    this.promptTitle = document.getElementById('prompt-title');
    this.promptText = document.getElementById('prompt-text');
    this.task1ChartContainer = document.getElementById('task1-chart-container');

    // Editors
    this.simulatorContainer = document.getElementById('simulator-container');
    this.coachContainer = document.getElementById('coach-container');
    this.essayInput = document.getElementById('essay-input');
    this.coachSectionInput = document.getElementById('coach-section-input');
    this.coachTabs = document.getElementById('coach-tabs');
    this.coachAwlCount = document.getElementById('coach-awl-count');
    this.coachCohesiveCount = document.getElementById('coach-cohesive-count');
    this.coachTipBox = document.getElementById('coach-tip-box');

    // Action buttons
    this.btnSubmit = document.getElementById('btn-submit');
    this.btnHistoryToggle = document.getElementById('btn-history-toggle');

    // Modals
    this.scoreModal = document.getElementById('score-modal');
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.modalDoneBtn = document.getElementById('modal-done-btn');
    this.historyModal = document.getElementById('history-modal');
    this.historyCloseBtn = document.getElementById('history-close-btn');
    this.historyList = document.getElementById('history-list');

    // Modal score elements
    this.modalOverallBand = document.getElementById('modal-overall-band');
    this.modalBandDescriptor = document.getElementById('modal-band-descriptor');
    this.subscoreTrVal = document.getElementById('subscore-tr-val');
    this.subscoreTrBar = document.getElementById('subscore-tr-bar');
    this.subscoreCcVal = document.getElementById('subscore-cc-val');
    this.subscoreCcBar = document.getElementById('subscore-cc-bar');
    this.subscoreLrVal = document.getElementById('subscore-lr-val');
    this.subscoreLrBar = document.getElementById('subscore-lr-bar');
    this.subscoreGraVal = document.getElementById('subscore-gra-val');
    this.subscoreGraBar = document.getElementById('subscore-gra-bar');
    this.modalStrengthsList = document.getElementById('modal-strengths-list');
    this.modalAreasList = document.getElementById('modal-areas-list');
    this.modalUpgradesList = document.getElementById('modal-upgrades-list');
  }

  initEvents() {
    // Task Type Switcher
    this.btnTask1.addEventListener('click', () => this.setTaskType('task1'));
    this.btnTask2.addEventListener('click', () => this.setTaskType('task2'));

    // Mode Switcher
    this.btnSimulator.addEventListener('click', () => this.setMode('simulator'));
    this.btnCoach.addEventListener('click', () => this.setMode('coach'));

    // Timer Controls
    this.timerToggleBtn.addEventListener('click', () => this.toggleTimer());
    this.timerResetBtn.addEventListener('click', () => this.resetTimer());

    // Prompt Selection
    this.promptSelect.addEventListener('change', (e) => this.selectPromptById(e.target.value));

    // Simulator input listener (word count + autosave)
    this.essayInput.addEventListener('input', () => {
      this.updateWordCount(this.essayInput.value);
      this.debounceAutosave(this.essayInput.value);
    });

    // Coach input listener
    this.coachSectionInput.addEventListener('input', () => {
      this.coachSections[this.coachSection] = this.coachSectionInput.value;
      const fullText = this.getAssembledCoachText();
      this.updateWordCount(fullText);
      this.updateCoachLiveStats(this.coachSectionInput.value);
      this.debounceAutosave(fullText);
    });

    // Coach tab switcher
    this.coachTabs.querySelectorAll('.coach-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.coachTabs.querySelectorAll('.coach-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.switchCoachSection(btn.dataset.section);
      });
    });

    // Submit for review
    this.btnSubmit.addEventListener('click', () => this.submitEssay());

    // Modals
    this.modalCloseBtn.addEventListener('click', () => this.closeScoreModal());
    this.modalDoneBtn.addEventListener('click', () => this.closeScoreModal());
    this.btnHistoryToggle.addEventListener('click', () => this.openHistoryModal());
    this.historyCloseBtn.addEventListener('click', () => this.closeHistoryModal());
  }

  setTaskType(type) {
    if (this.currentTask === type) return;
    this.currentTask = type;

    if (type === 'task1') {
      this.btnTask1.classList.add('active');
      this.btnTask2.classList.remove('active');
      this.wordTargetLabel.textContent = '/ 150';
      this.timerSeconds = 20 * 60;
      this.task1ChartContainer.style.display = 'block';
      document.getElementById('subscore-tr-label').textContent = 'Task Achievement';
    } else {
      this.btnTask2.classList.add('active');
      this.btnTask1.classList.remove('active');
      this.wordTargetLabel.textContent = '/ 250';
      this.timerSeconds = 40 * 60;
      this.task1ChartContainer.style.display = 'none';
      document.getElementById('subscore-tr-label').textContent = 'Task Response';
    }

    this.resetTimer();
    this.loadPrompts();
  }

  setMode(mode) {
    if (this.currentMode === mode) return;
    
    // Bidirectional sync
    if (mode === 'simulator') {
      const assembled = this.getAssembledCoachText();
      if (assembled.trim().length > 0) {
        this.essayInput.value = assembled;
      }
      this.btnSimulator.classList.add('active');
      this.btnCoach.classList.remove('active');
      this.simulatorContainer.style.display = 'block';
      this.coachContainer.style.display = 'none';
      this.updateWordCount(this.essayInput.value);
    } else {
      if (this.essayInput.value.trim().length > 0) {
        this.distributeDraftToCoach(this.essayInput.value);
      }
      this.btnCoach.classList.add('active');
      this.btnSimulator.classList.remove('active');
      this.simulatorContainer.style.display = 'none';
      this.coachContainer.style.display = 'flex';
      this.switchCoachSection(this.coachSection);
    }
    this.currentMode = mode;
  }

  loadPrompts() {
    const prompts = this.currentTask === 'task1' ? TASK_1_PROMPTS : TASK_2_PROMPTS;
    this.promptSelect.innerHTML = '';

    prompts.forEach((prompt, index) => {
      const opt = document.createElement('option');
      opt.value = prompt.id;
      opt.textContent = `${index + 1}. ${prompt.title.slice(0, 24)}...`;
      this.promptSelect.appendChild(opt);
    });

    this.selectPrompt(prompts[0]);
  }

  selectPromptById(id) {
    const prompts = this.currentTask === 'task1' ? TASK_1_PROMPTS : TASK_2_PROMPTS;
    const found = prompts.find(p => p.id === id) || prompts[0];
    this.selectPrompt(found);
  }

  async selectPrompt(prompt) {
    this.currentPrompt = prompt;
    this.promptTitle.textContent = prompt.title;
    this.promptText.textContent = prompt.promptText || prompt.question;
    
    const cat = prompt.category ? prompt.category.toUpperCase() : (prompt.chartType ? `${prompt.chartType.toUpperCase()} REPORT` : 'ACADEMIC');
    this.promptCategoryBadge.textContent = cat;

    if (this.currentTask === 'task1' && prompt.chartSvg) {
      this.task1ChartContainer.innerHTML = prompt.chartSvg;
      this.task1ChartContainer.style.display = 'block';
    } else {
      this.task1ChartContainer.style.display = 'none';
    }

    // Load saved draft if exists
    const savedDraft = await storageService.getDraft(prompt.id);
    if (savedDraft) {
      this.essayInput.value = savedDraft;
      this.distributeDraftToCoach(savedDraft);
      this.updateWordCount(savedDraft);
    } else {
      this.essayInput.value = '';
      this.clearCoachSections();
      this.updateWordCount('');
    }
  }

  switchCoachSection(sectionKey) {
    this.coachSection = sectionKey;
    this.coachSectionInput.value = this.coachSections[sectionKey] || '';
    
    const tips = {
      intro: 'Tip: Paraphrase the prompt and clearly present your stance or overall direction.',
      body1: 'Tip: State a distinct main point, provide concrete evidence/examples, and elaborate.',
      body2: 'Tip: Present a complementary or contrasting perspective with clear transitional links.',
      conclusion: 'Tip: Synthesize your arguments and restate your final position without adding new points.'
    };
    this.coachTipBox.textContent = tips[sectionKey] || '';
    this.updateCoachLiveStats(this.coachSectionInput.value);
  }

  getAssembledCoachText() {
    return [
      this.coachSections.intro,
      this.coachSections.body1,
      this.coachSections.body2,
      this.coachSections.conclusion
    ].filter(s => s.trim().length > 0).join('\n\n');
  }

  distributeDraftToCoach(fullText) {
    const paragraphs = fullText.split(/\n\s*\n+/).filter(p => p.trim().length > 0);
    this.coachSections.intro = paragraphs[0] || '';
    this.coachSections.body1 = paragraphs[1] || '';
    this.coachSections.body2 = paragraphs[2] || '';
    this.coachSections.conclusion = paragraphs.slice(3).join('\n\n') || '';
    this.coachSectionInput.value = this.coachSections[this.coachSection] || '';
  }

  clearCoachSections() {
    this.coachSections = { intro: '', body1: '', body2: '', conclusion: '' };
    this.coachSectionInput.value = '';
  }

  updateWordCount(text) {
    const tokenized = tokenize(text);
    const count = tokenized.wordCount;
    this.wordCountNum.textContent = count;

    const minWords = this.currentTask === 'task1' ? 150 : 250;
    if (count >= minWords) {
      this.wordStatusBadge.textContent = 'Target Met';
      this.wordStatusBadge.style.background = 'rgba(16, 185, 129, 0.12)';
      this.wordStatusBadge.style.color = 'var(--success)';
      this.wordStatusBadge.style.borderColor = 'rgba(16, 185, 129, 0.2)';
    } else {
      this.wordStatusBadge.textContent = `${minWords - count} to minimum`;
      this.wordStatusBadge.style.background = 'rgba(244, 63, 94, 0.12)';
      this.wordStatusBadge.style.color = 'var(--destructive)';
      this.wordStatusBadge.style.borderColor = 'rgba(244, 63, 94, 0.2)';
    }
  }

  updateCoachLiveStats(text) {
    const tokenized = tokenize(text);
    let awlCount = 0;
    for (const w of tokenized.words) {
      if (ACADEMIC_WORD_LIST.has(w)) awlCount++;
    }

    let cohesiveCount = 0;
    const lower = text.toLowerCase();
    for (const group of Object.values(COHESIVE_DEVICES)) {
      for (const dev of group) {
        if (lower.includes(dev)) cohesiveCount++;
      }
    }

    this.coachAwlCount.textContent = `${awlCount} terms`;
    this.coachCohesiveCount.textContent = `${cohesiveCount} linkers`;
  }

  debounceAutosave(text) {
    if (this._saveTimer) clearTimeout(this._saveTimer);
    const targetPromptId = this.currentPrompt?.id;
    if (!targetPromptId) return;
    this._saveTimer = setTimeout(() => {
      storageService.saveDraft(targetPromptId, text);
    }, 500);
  }

  // Timer Methods
  toggleTimer() {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.timerRunning = true;
    this.timerPlayIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        this.renderTimer();
      } else {
        this.pauseTimer();
        alert('Time is up! Review and submit your essay.');
      }
    }, 1000);
  }

  pauseTimer() {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.timerPlayIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
  }

  resetTimer() {
    this.pauseTimer();
    this.timerSeconds = (this.currentTask === 'task1' ? 20 : 40) * 60;
    this.renderTimer();
  }

  renderTimer() {
    const mins = Math.floor(this.timerSeconds / 60);
    const secs = this.timerSeconds % 60;
    this.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (this.timerSeconds <= 300) {
      this.timerDisplay.classList.add('warning');
    } else {
      this.timerDisplay.classList.remove('warning');
    }
  }

  // Evaluation & Modal Handling
  async submitEssay() {
    const text = this.currentMode === 'simulator' 
      ? this.essayInput.value 
      : this.getAssembledCoachText();

    if (!text || text.trim().length === 0) {
      alert('Please write or paste your essay before requesting a band review.');
      return;
    }

    const evaluation = evaluateEssay(text, this.currentPrompt, this.currentTask);

    // Save submission record
    const record = {
      id: 'essay-' + Date.now(),
      taskType: this.currentTask,
      promptId: this.currentPrompt.id,
      promptTitle: this.currentPrompt.title,
      content: text,
      wordCount: evaluation.wordCount,
      scores: evaluation.scores,
      feedback: evaluation.feedback,
      createdAt: new Date().toISOString()
    };
    await storageService.saveSubmission(record);
    await storageService.clearDraft(this.currentPrompt.id);

    this.displayScoreModal(evaluation);
  }

  displayScoreModal(evaluation) {
    const { scores, feedback } = evaluation;
    this.modalOverallBand.textContent = scores.overall.toFixed(1);
    this.modalBandDescriptor.textContent = BAND_DESCRIPTORS[scores.overall] || 'Official IELTS Band';

    // Subscores
    this.subscoreTrVal.textContent = scores.tr.toFixed(1);
    this.subscoreTrBar.style.width = `${(scores.tr / 9) * 100}%`;

    this.subscoreCcVal.textContent = scores.cc.toFixed(1);
    this.subscoreCcBar.style.width = `${(scores.cc / 9) * 100}%`;

    this.subscoreLrVal.textContent = scores.lr.toFixed(1);
    this.subscoreLrBar.style.width = `${(scores.lr / 9) * 100}%`;

    this.subscoreGraVal.textContent = scores.gra.toFixed(1);
    this.subscoreGraBar.style.width = `${(scores.gra / 9) * 100}%`;

    // Strengths
    this.modalStrengthsList.innerHTML = feedback.strengths.length > 0
      ? feedback.strengths.map(s => `
          <div class="feedback-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${s}</span>
          </div>`).join('')
      : '<div class="text-xs text-muted">No specific strengths detected. Focus on word count and structure.</div>';

    // Areas to Improve
    this.modalAreasList.innerHTML = feedback.areasToImprove.length > 0
      ? feedback.areasToImprove.map(a => `
          <div class="feedback-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>${a}</span>
          </div>`).join('')
      : '<div class="text-xs text-muted">No critical penalties. Essay fulfills standard band requirements.</div>';

    // Vocabulary Upgrades
    if (feedback.suggestedUpgrades && feedback.suggestedUpgrades.length > 0) {
      document.getElementById('modal-upgrades-section').style.display = 'block';
      this.modalUpgradesList.innerHTML = feedback.suggestedUpgrades.map(u => `
        <div class="feedback-item" style="justify-content: space-between;">
          <span>Replace <em>"${u.basic}"</em> with:</span>
          <span style="color: var(--primary); font-weight: 500;">${u.replacements.join(', ')}</span>
        </div>`).join('');
    } else {
      document.getElementById('modal-upgrades-section').style.display = 'none';
    }

    this.scoreModal.style.display = 'flex';
  }

  closeScoreModal() {
    this.scoreModal.style.display = 'none';
  }

  async openHistoryModal() {
    const list = await storageService.getHistory();
    if (list.length === 0) {
      this.historyList.innerHTML = '<div class="text-sm text-muted" style="padding: 20px 0; text-align: center;">No completed essays yet. Write and submit your first essay!</div>';
    } else {
      this.historyList.innerHTML = list.map(item => `
        <div class="feedback-box" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;" data-id="${item.id}">
          <div style="flex: 1; cursor: pointer;" class="history-item-info">
            <div style="font-weight: 600; font-size: 0.85rem;">${item.promptTitle || 'IELTS Practice'}</div>
            <div class="text-xs text-muted">${new Date(item.createdAt).toLocaleDateString()} · ${item.wordCount} words · ${item.taskType ? item.taskType.toUpperCase() : 'TASK 2'}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="background: rgba(56, 189, 248, 0.15); color: var(--primary); padding: 4px 10px; border-radius: 6px; font-weight: 700; font-family: var(--font-mono); cursor: pointer;" class="history-item-band">
              Band ${item.scores.overall.toFixed(1)}
            </div>
            <button class="secondary-btn btn-load-history" style="padding: 4px 10px; font-size: 0.75rem;" title="Load into editor">
              Load
            </button>
          </div>
        </div>`).join('');

      // Add click listeners
      this.historyList.querySelectorAll('.feedback-box').forEach(card => {
        const found = list.find(l => l.id === card.dataset.id);
        if (!found) return;

        const infoArea = card.querySelector('.history-item-info');
        const bandPill = card.querySelector('.history-item-band');
        const showScore = () => {
          this.closeHistoryModal();
          this.displayScoreModal(found);
        };
        if (infoArea) infoArea.addEventListener('click', showScore);
        if (bandPill) bandPill.addEventListener('click', showScore);

        const loadBtn = card.querySelector('.btn-load-history');
        if (loadBtn) {
          loadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (found.taskType && found.taskType !== this.currentTask) {
              this.setTask(found.taskType);
            }
            if (found.promptId) {
              this.selectPromptById(found.promptId);
            }
            this.essayInput.value = found.essayText || '';
            this.distributeDraftToCoach(found.essayText || '');
            this.updateWordCount(found.essayText || '');
            this.closeHistoryModal();
          });
        }
      });
    }

    this.historyModal.style.display = 'flex';
  }

  closeHistoryModal() {
    this.historyModal.style.display = 'none';
  }

  initServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
          .then(() => console.log('IELTS Offline ServiceWorker Active'))
          .catch(err => console.log('ServiceWorker registration skipped:', err));
      });
    }
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.ieltsApp = new IELTSApp();
});
