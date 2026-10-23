import { TASK_1_PROMPTS } from './data/task1Prompts.js';

import { TASK_2_PROMPTS } from './data/task2Prompts.js';

import { ACADEMIC_WORD_LIST } from './data/academicWordList.js';

import { COHESIVE_DEVICES } from './data/cohesiveDevices.js';

import { evaluateEssay } from './engine/scoringEngine.js';

import { tokenize } from './engine/tokenizer.js';

import { storageService } from './services/storageService.js';



import { ACADEMIC_READING_TESTS } from './data/readingTests.js';

import { evaluateReadingTest } from './engine/readingEngine.js';



import { ACADEMIC_LISTENING_TESTS } from './data/listeningTests.js';

import { OfflineAudioPlayer, evaluateListeningTest } from './engine/listeningEngine.js';
import { CDIeltsEngine } from './engine/cdIeltsEngine.js';
import { SpeakingFluencyEngine } from './engine/speakingFluencyEngine.js';
import { MistakeBankService } from './services/mistakeBankService.js';



import { SPEAKING_TOPICS } from './data/speakingTests.js';

import { OfflineVoiceRecorder, calculateSpeakingBand } from './engine/speakingEngine.js';



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

    this.currentModule = 'writing'; // 'writing' | 'reading' | 'listening' | 'speaking'

    

    // Writing State

    this.currentTask = 'task2';

    this.currentMode = 'simulator';

    this.currentPrompt = null;

    this.timerSeconds = 40 * 60;

    this.timerRunning = false;

    this.timerInterval = null;

    this.coachSection = 'intro';

    this.coachSections = { intro: '', body1: '', body2: '', conclusion: '' };



    // Reading State

    this.currentReadingTest = ACADEMIC_READING_TESTS[0];

    this.currentReadingPassageIndex = 0;

    this.readingAnswers = {};

    this.readingTimerSeconds = 60 * 60;

    this.readingTimerRunning = false;

    this.readingTimerInterval = null;



    // Listening State

    this.currentListeningTest = ACADEMIC_LISTENING_TESTS[0];

    this.currentListeningSectionIndex = 0;

    this.listeningAnswers = {};

    this.listeningPlayer = null;



    // Speaking State

    this.speakingTopic = SPEAKING_TOPICS[0];

    this.speakingRecorder = new OfflineVoiceRecorder();

    this.speakingPrepTimerSeconds = 60;

    this.speakingPrepRunning = false;

    this.speakingPrepInterval = null;

    this.speakingSpeakTimerSeconds = 120;

    this.speakingSpeakRunning = false;

    this.speakingSpeakInterval = null;



    this.initTheme();

    this.cdEngine = new CDIeltsEngine();
    this.speakingFluency = new SpeakingFluencyEngine();
    this.mistakeBank = new MistakeBankService();
    this.initElements();

    this.initEvents();

    this.loadPrompts();

    this.initReadingModule();

    this.initListeningModule();

    this.initSpeakingModule();

    this.initServiceWorker();
    this.initCDIeltsModule();
    this.initMistakeBankModule();
    this.initSpeakingFluency();

  }



  /* ------------------------------------------------------------- */

  /* THEME MANAGEMENT                                              */

  /* ------------------------------------------------------------- */

  initTheme() {

    const savedTheme = localStorage.getItem('ielts_theme') || 'light';

    this.setTheme(savedTheme);

  }



  setTheme(theme) {

    this.currentTheme = theme;

    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('ielts_theme', theme);



    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (theme === 'dark') {

      if (this.themeIconSun) this.themeIconSun.style.display = 'block';

      if (this.themeIconMoon) this.themeIconMoon.style.display = 'none';

      if (metaThemeColor) metaThemeColor.setAttribute('content', '#090d16');

    } else {

      if (this.themeIconSun) this.themeIconSun.style.display = 'none';

      if (this.themeIconMoon) this.themeIconMoon.style.display = 'block';

      if (metaThemeColor) metaThemeColor.setAttribute('content', '#f8fafc');

    }

  }



  toggleTheme() {

    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';

    this.setTheme(nextTheme);

  }



  /* ------------------------------------------------------------- */

  /* ELEMENT BINDINGS                                              */

  /* ------------------------------------------------------------- */

  initElements() {

    // Header & Theme

    this.themeToggleBtn = document.getElementById('theme-toggle-btn');

    this.themeIconSun = document.getElementById('theme-icon-sun');

    this.themeIconMoon = document.getElementById('theme-icon-moon');

    this.moduleNav = document.getElementById('module-nav');

    this.writingSubControls = document.getElementById('writing-sub-controls');



    // Modules

    this.viewWriting = document.getElementById('module-view-writing');

    this.viewReading = document.getElementById('module-view-reading');

    this.viewListening = document.getElementById('module-view-listening');

    this.viewSpeaking = document.getElementById('module-view-speaking');



    // Writing Elements

    this.btnTask1 = document.getElementById('btn-task1');

    this.btnTask2 = document.getElementById('btn-task2');

    this.btnSimulator = document.getElementById('btn-simulator');

    this.btnCoach = document.getElementById('btn-coach');

    this.timerDisplay = document.getElementById('timer-display');

    this.timerToggleBtn = document.getElementById('timer-toggle-btn');

    this.timerPlayIcon = document.getElementById('timer-play-icon');

    this.timerResetBtn = document.getElementById('timer-reset-btn');

    this.wordCountNum = document.getElementById('word-count-num');

    this.wordTargetLabel = document.getElementById('word-target-label');

    this.wordStatusBadge = document.getElementById('word-status-badge');

    this.promptSelect = document.getElementById('prompt-select');

    this.promptCategoryBadge = document.getElementById('prompt-category-badge');

    this.promptTitle = document.getElementById('prompt-title');

    this.promptText = document.getElementById('prompt-text');

    this.promptInstructionsBox = document.getElementById('prompt-instructions-box');

    this.promptInstructionsText = document.getElementById('prompt-instructions-text');

    this.task1ChartContainer = document.getElementById('task1-chart-container');

    this.simulatorContainer = document.getElementById('simulator-container');

    this.coachContainer = document.getElementById('coach-container');

    this.essayInput = document.getElementById('essay-input');

    this.coachSectionInput = document.getElementById('coach-section-input');

    this.coachTabs = document.getElementById('coach-tabs');

    this.coachAwlCount = document.getElementById('coach-awl-count');

    this.coachCohesiveCount = document.getElementById('coach-cohesive-count');

    this.coachTipBox = document.getElementById('coach-tip-box');

    this.btnSubmit = document.getElementById('btn-submit');

    this.btnHistoryToggle = document.getElementById('btn-history-toggle');



    // Modals

    this.scoreModal = document.getElementById('score-modal');

    this.modalCloseBtn = document.getElementById('modal-close-btn');

    this.modalDoneBtn = document.getElementById('modal-done-btn');

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



    this.historyModal = document.getElementById('history-modal');

    this.historyCloseBtn = document.getElementById('history-close-btn');

    this.historyList = document.getElementById('history-list');



    this.objectiveScoreModal = document.getElementById('objective-score-modal');

    this.objectiveModalCloseBtn = document.getElementById('objective-modal-close-btn');

    this.objectiveModalDoneBtn = document.getElementById('objective-modal-done-btn');

    this.objectiveModalBadge = document.getElementById('objective-modal-badge');

    this.objectiveModalTypeLabel = document.getElementById('objective-modal-type-label');

    this.objectiveModalBand = document.getElementById('objective-modal-band');

    this.objectiveModalRaw = document.getElementById('objective-modal-raw');

    this.objectiveModalResultsList = document.getElementById('objective-modal-results-list');



    // Reading Elements

    this.readingTimerDisplay = document.getElementById('reading-timer-display');

    this.readingTimerToggleBtn = document.getElementById('reading-timer-toggle-btn');

    this.readingTimerIcon = document.getElementById('reading-timer-icon');

    this.readingTimerResetBtn = document.getElementById('reading-timer-reset-btn');

    this.readingAnsweredCount = document.getElementById('reading-answered-count');

    this.readingPassageTabs = document.getElementById('reading-passage-tabs');

    this.readingPassageTitle = document.getElementById('reading-passage-title');

    this.readingPassageContent = document.getElementById('reading-passage-content');

    this.readingQuestionsList = document.getElementById('reading-questions-list');

    this.btnSubmitReading = document.getElementById('btn-submit-reading');



    // Listening Elements

    this.listeningSectionTabs = document.getElementById('listening-section-tabs');

    this.listeningSectionTitle = document.getElementById('listening-section-title');

    this.listeningSectionScenario = document.getElementById('listening-section-scenario');

    this.listeningSpeakerBanner = document.getElementById('listening-speaker-banner');

    this.listeningPlayBtn = document.getElementById('listening-audio-play-btn');

    this.listeningStopBtn = document.getElementById('listening-audio-stop-btn');

    this.listeningTestAudioBtn = document.getElementById('listening-audio-test-btn');

    this.listeningPlayText = document.getElementById('listening-play-text');

    this.listeningPlayIcon = document.getElementById('listening-play-icon');

    this.listeningToggleTranscriptBtn = document.getElementById('listening-toggle-transcript-btn');

    this.listeningTranscriptBox = document.getElementById('listening-transcript-box');

    this.readingTestSelect = document.getElementById('reading-test-select');

    this.listeningTestSelect = document.getElementById('listening-test-select');

    this.speakingTopicSelect = document.getElementById('speaking-topic-select');

    this.promptPrevBtn = document.getElementById('prompt-prev-btn');

    this.promptNextBtn = document.getElementById('prompt-next-btn');

    this.promptCountBadge = document.getElementById('prompt-count-badge');

    this.postTestTranscriptContainer = document.getElementById('objective-modal-transcript-container');

    this.postTestTranscriptText = document.getElementById('objective-modal-transcript-text');

    this.togglePostTestTranscriptBtn = document.getElementById('toggle-post-test-transcript-btn');

    this.listeningQuestionsList = document.getElementById('listening-questions-list');

    this.listeningAnsweredCount = document.getElementById('listening-answered-count');

    this.listeningTotalCount = document.getElementById('listening-total-count');

    this.btnSubmitListening = document.getElementById('btn-submit-listening');



    // Speaking Elements

    this.speakingPartTabs = document.getElementById('speaking-part-tabs');

    this.speakingContainerPart1 = document.getElementById('speaking-container-part1');

    this.speakingContainerPart2 = document.getElementById('speaking-container-part2');

    this.speakingContainerPart3 = document.getElementById('speaking-container-part3');

    this.speakingContainerScore = document.getElementById('speaking-container-score');

    this.speakingPart1Questions = document.getElementById('speaking-part1-questions');

    this.speakingPart3Questions = document.getElementById('speaking-part3-questions');

    this.spPrepTimerDisplay = document.getElementById('sp-prep-timer-display');

    this.spSpeakTimerDisplay = document.getElementById('sp-speak-timer-display');

    this.btnSpPrepTimer = document.getElementById('btn-sp-prep-timer');

    this.btnSpSpeakTimer = document.getElementById('btn-sp-speak-timer');

    this.btnSpRecordToggle = document.getElementById('btn-sp-record-toggle');

    this.spRecordLabel = document.getElementById('sp-record-label');

    this.spRecordingStatus = document.getElementById('sp-recording-status');

    this.spAudioPlaybackContainer = document.getElementById('sp-audio-playback-container');

    this.spAudioPlayback = document.getElementById('sp-audio-playback');

    this.btnTogglePart2Model = document.getElementById('btn-toggle-part2-model');

    this.part2ModelBox = document.getElementById('part2-model-box');

    this.part2ModelText = document.getElementById('part2-model-text');

    this.part2KeywordsPills = document.getElementById('part2-keywords-pills');

    this.sliderFc = document.getElementById('slider-fc');

    this.sliderLr = document.getElementById('slider-lr');

    this.sliderGra = document.getElementById('slider-gra');

    this.sliderPr = document.getElementById('slider-pr');

    this.scoreValFc = document.getElementById('score-val-fc');

    this.scoreValLr = document.getElementById('score-val-lr');

    this.scoreValGra = document.getElementById('score-val-gra');

    this.scoreValPr = document.getElementById('score-val-pr');

    this.spCalculatedBand = document.getElementById('sp-calculated-band');

    this.btnSaveSpeakingSession = document.getElementById('btn-save-speaking-session');

  }



  /* ------------------------------------------------------------- */

  /* EVENT LISTENERS                                               */

  /* ------------------------------------------------------------- */

  initEvents() {

    // Theme Switcher

    if (this.themeToggleBtn) {

      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());

    }



    // Top Module Navigation

    this.moduleNav.querySelectorAll('.module-nav-btn').forEach(btn => {

      btn.addEventListener('click', () => {

        this.setModule(btn.dataset.module);

      });

    });



    // Writing Controls

    this.btnTask1.addEventListener('click', () => this.setTaskType('task1'));

    this.btnTask2.addEventListener('click', () => this.setTaskType('task2'));

    this.btnSimulator.addEventListener('click', () => this.setMode('simulator'));

    this.btnCoach.addEventListener('click', () => this.setMode('coach'));

    this.timerToggleBtn.addEventListener('click', () => this.toggleTimer());

    this.timerResetBtn.addEventListener('click', () => this.resetTimer());

    this.promptSelect.addEventListener('change', (e) => this.selectPromptById(e.target.value));

    if (this.promptPrevBtn) {

      this.promptPrevBtn.addEventListener('click', () => this.navigatePrompt(-1));

    }

    if (this.promptNextBtn) {

      this.promptNextBtn.addEventListener('click', () => this.navigatePrompt(1));

    }

    if (this.readingTestSelect) {

      this.readingTestSelect.addEventListener('change', (e) => this.selectReadingTestById(e.target.value));

    }

    if (this.listeningTestSelect) {

      this.listeningTestSelect.addEventListener('change', (e) => this.selectListeningTestById(e.target.value));

    }

    if (this.speakingTopicSelect) {

      this.speakingTopicSelect.addEventListener('change', (e) => this.selectSpeakingTopicById(e.target.value));

    }

    if (this.togglePostTestTranscriptBtn && this.postTestTranscriptText) {

      this.togglePostTestTranscriptBtn.addEventListener('click', () => {

        const isHidden = this.postTestTranscriptText.style.display === 'none';

        this.postTestTranscriptText.style.display = isHidden ? 'block' : 'none';

        this.togglePostTestTranscriptBtn.textContent = isHidden ? 'Hide Script' : 'Show Script';

      });

    }



    this.essayInput.addEventListener('input', () => {

      this.updateWordCount(this.essayInput.value);

      this.debounceAutosave(this.essayInput.value);

    });



    this.coachSectionInput.addEventListener('input', () => {

      this.coachSections[this.coachSection] = this.coachSectionInput.value;

      const fullText = this.getAssembledCoachText();

      this.updateWordCount(fullText);

      this.updateCoachLiveStats(this.coachSectionInput.value);

      this.debounceAutosave(fullText);

    });



    this.coachTabs.querySelectorAll('.coach-tab-btn').forEach(btn => {

      btn.addEventListener('click', () => {

        this.coachTabs.querySelectorAll('.coach-tab-btn').forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        this.switchCoachSection(btn.dataset.section);

      });

    });



    this.btnSubmit.addEventListener('click', () => this.submitEssay());

    this.modalCloseBtn.addEventListener('click', () => this.closeScoreModal());

    this.modalDoneBtn.addEventListener('click', () => this.closeScoreModal());

    this.btnHistoryToggle.addEventListener('click', () => this.openHistoryModal());

    this.historyCloseBtn.addEventListener('click', () => this.closeHistoryModal());



    // Objective Modals

    this.objectiveModalCloseBtn.addEventListener('click', () => this.closeObjectiveModal());

    this.objectiveModalDoneBtn.addEventListener('click', () => this.closeObjectiveModal());



    // Reading Events

    this.readingTimerToggleBtn.addEventListener('click', () => this.toggleReadingTimer());

    this.readingTimerResetBtn.addEventListener('click', () => this.resetReadingTimer());

    this.readingPassageTabs.querySelectorAll('.segmented-btn').forEach(btn => {

      btn.addEventListener('click', () => {

        this.readingPassageTabs.querySelectorAll('.segmented-btn').forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        this.selectReadingPassage(Number(btn.dataset.passage));

      });

    });

    this.btnSubmitReading.addEventListener('click', () => this.submitReadingTest());



    // Listening Events

    this.listeningSectionTabs.querySelectorAll('.segmented-btn').forEach(btn => {

      btn.addEventListener('click', () => {

        this.listeningSectionTabs.querySelectorAll('.segmented-btn').forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        this.selectListeningSection(Number(btn.dataset.section));

      });

    });

    this.listeningPlayBtn.addEventListener('click', () => this.toggleListeningAudio());

    this.listeningStopBtn.addEventListener('click', () => this.stopListeningAudio());

    if (this.listeningToggleTranscriptBtn && this.listeningTranscriptBox) {

      this.listeningToggleTranscriptBtn.addEventListener('click', () => {

        const isHidden = this.listeningTranscriptBox.style.display === 'none';

        this.listeningTranscriptBox.style.display = isHidden ? 'block' : 'none';

      });

    }

    if (this.listeningTestAudioBtn) {

      this.listeningTestAudioBtn.addEventListener('click', () => this.testDeviceAudio());

    }

    this.btnSubmitListening.addEventListener('click', () => this.submitListeningTest());



    // Speaking Events

    this.speakingPartTabs.querySelectorAll('.segmented-btn').forEach(btn => {

      btn.addEventListener('click', () => {

        this.speakingPartTabs.querySelectorAll('.segmented-btn').forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        this.selectSpeakingPart(btn.dataset.spPart);

      });

    });

    this.btnSpPrepTimer.addEventListener('click', () => this.toggleSpeakingPrepTimer());

    this.btnSpSpeakTimer.addEventListener('click', () => this.toggleSpeakingSpeakTimer());

    this.btnSpRecordToggle.addEventListener('click', () => this.toggleVoiceRecording());

    this.btnTogglePart2Model.addEventListener('click', () => {

      const isHidden = this.part2ModelBox.style.display === 'none';

      this.part2ModelBox.style.display = isHidden ? 'block' : 'none';

    });



    [this.sliderFc, this.sliderLr, this.sliderGra, this.sliderPr].forEach(slider => {

      slider.addEventListener('input', () => this.updateSpeakingSliders());

    });

    this.btnSaveSpeakingSession.addEventListener('click', () => this.saveSpeakingSession());

  }



  /* ------------------------------------------------------------- */

  /* MODULE SWITCHING                                              */

  /* ------------------------------------------------------------- */

  setModule(moduleName) {

    this.currentModule = moduleName;

    this.moduleNav.querySelectorAll('.module-nav-btn').forEach(btn => {

      btn.classList.toggle('active', btn.dataset.module === moduleName);

    });



    this.viewWriting.style.display = moduleName === 'writing' ? 'flex' : 'none';

    this.viewReading.style.display = moduleName === 'reading' ? 'flex' : 'none';

    this.viewListening.style.display = moduleName === 'listening' ? 'flex' : 'none';

    this.viewSpeaking.style.display = moduleName === 'speaking' ? 'flex' : 'none';

    this.writingSubControls.style.display = moduleName === 'writing' ? 'flex' : 'none';



    // Stop audio/recording when leaving module

    if (moduleName !== 'listening' && this.listeningPlayer) {

      this.listeningPlayer.stop();

    }

  }



  /* ------------------------------------------------------------- */

  /* WRITING MODULE LOGIC                                          */

  /* ------------------------------------------------------------- */

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



    if (this.promptCountBadge) {

      const prompts = this.currentTask === 'task1' ? TASK_1_PROMPTS : TASK_2_PROMPTS;

      const idx = prompts.findIndex(p => p.id === prompt.id) + 1;

      const taskLabel = this.currentTask === 'task1' ? 'Task 1 (Visual)' : 'Task 2 (Essay)';

      this.promptCountBadge.textContent = `${taskLabel} • Prompt ${idx} of ${prompts.length}`;

    }



    let questionText = prompt.promptText || prompt.question || '';

    let instructions = prompt.instructions;



    if (this.currentTask === 'task1') {

      const parts = questionText.split(/\n\nSummarise/i);

      if (parts.length > 1) {

        questionText = parts[0];

      }

      instructions = 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.';

    } else {

      instructions = 'Give reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.';

    }



    this.promptText.textContent = questionText;

    if (this.promptInstructionsText) {

      this.promptInstructionsText.innerHTML = instructions

        .replace(/\n\n/g, '<br>')

        .replace(/(Write at least \d+ words\.?)/i, '<strong>$1</strong>');

    }

    

    const cat = prompt.category ? prompt.category.toUpperCase() : (prompt.chartType ? `${prompt.chartType.toUpperCase()} REPORT` : 'ACADEMIC');

    this.promptCategoryBadge.textContent = cat;



    if (this.currentTask === 'task1' && prompt.chartSvg) {

      this.task1ChartContainer.innerHTML = prompt.chartSvg;

      this.task1ChartContainer.style.display = 'block';

    } else {

      this.task1ChartContainer.style.display = 'none';

    }



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



  navigatePrompt(delta) {

    const prompts = this.currentTask === 'task1' ? TASK_1_PROMPTS : TASK_2_PROMPTS;

    const currentIndex = prompts.findIndex(p => p.id === this.currentPrompt?.id);

    let nextIndex = currentIndex + delta;

    if (nextIndex < 0) nextIndex = prompts.length - 1;

    if (nextIndex >= prompts.length) nextIndex = 0;

    this.selectPrompt(prompts[nextIndex]);

    if (this.promptSelect) {

      this.promptSelect.value = prompts[nextIndex].id;

    }

  }



  selectReadingTestById(testId) {

    const test = ACADEMIC_READING_TESTS.find(t => t.id === testId);

    if (!test) return;

    this.currentReadingTest = test;

    this.readingAnswers = {};

    if (this.readingTestSelect) this.readingTestSelect.value = testId;

    if (this.readingPassageTabs) {

      this.readingPassageTabs.querySelectorAll('.segmented-btn').forEach((btn, idx) => {

        btn.classList.toggle('active', idx === 0);

      });

    }

    this.selectReadingPassage(0);

  }



  selectListeningTestById(testId) {

    const test = ACADEMIC_LISTENING_TESTS.find(t => t.id === testId);

    if (!test) return;

    if (this.listeningPlayer) this.listeningPlayer.stop();

    this.currentListeningTest = test;

    this.listeningAnswers = {};

    if (this.listeningTestSelect) this.listeningTestSelect.value = testId;

    if (this.listeningTotalCount && test.totalQuestions) {

      this.listeningTotalCount.textContent = `/ ${test.totalQuestions}`;

    }

    this.updateListeningSectionTabs();

    if (this.listeningSectionTabs) {

      this.listeningSectionTabs.querySelectorAll('.segmented-btn').forEach((btn, idx) => {

        btn.classList.toggle('active', idx === 0);

      });

    }

    this.selectListeningSection(0);

  }



  selectSpeakingTopicById(topicId) {

    const topic = SPEAKING_TOPICS.find(t => t.id === topicId);

    if (!topic) return;

    this.speakingTopic = topic;

    if (this.speakingTopicSelect) this.speakingTopicSelect.value = topicId;

    this.selectSpeakingPart('part1');

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



  toggleTimer() {

    if (this.timerRunning) {

      this.pauseTimer();

    } else {

      this.startTimer();

    }

  }



  startTimer() {

    this.timerRunning = true;

    this.timerPlayIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';

    this.timerInterval = setInterval(() => {

      if (this.timerSeconds > 0) {

        this.timerSeconds--;

        this.renderTimerDisplay();

      } else {

        this.pauseTimer();

      }

    }, 1000);

  }



  pauseTimer() {

    this.timerRunning = false;

    this.timerPlayIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';

    clearInterval(this.timerInterval);

  }



  resetTimer() {

    this.pauseTimer();

    this.timerSeconds = this.currentTask === 'task1' ? 20 * 60 : 40 * 60;

    this.renderTimerDisplay();

  }



  renderTimerDisplay() {

    const mins = Math.floor(this.timerSeconds / 60);

    const secs = this.timerSeconds % 60;

    this.timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (this.timerSeconds < 300) {

      this.timerDisplay.classList.add('warning');

    } else {

      this.timerDisplay.classList.remove('warning');

    }

  }



  async submitEssay() {

    const textToSubmit = this.currentMode === 'simulator'

      ? this.essayInput.value

      : this.getAssembledCoachText();



    if (!textToSubmit || textToSubmit.trim().length === 0) {

      alert('Please write your essay before submitting for review.');

      return;

    }



    const evaluation = evaluateEssay(textToSubmit, {

      taskType: this.currentTask,

      category: this.currentPrompt ? this.currentPrompt.category : 'opinion'

    });



    const submissionRecord = {

      id: `essay_${Date.now()}`,

      module: 'writing',

      taskType: this.currentTask,

      promptId: this.currentPrompt ? this.currentPrompt.id : 'unknown',

      promptTitle: this.currentPrompt ? this.currentPrompt.title : 'IELTS Practice',

      essayText: textToSubmit,

      wordCount: evaluation.tokenized.wordCount,

      scores: evaluation.scores,

      feedback: evaluation.feedback,

      createdAt: new Date().toISOString()

    };



    await storageService.saveSubmission(submissionRecord);

    if (this.currentPrompt) {

      await storageService.clearDraft(this.currentPrompt.id);

    }



    this.displayScoreModal(submissionRecord);

  }



  displayScoreModal(submission) {

    const { scores, feedback } = submission;

    this.modalOverallBand.textContent = scores.overall.toFixed(1);

    const descriptor = BAND_DESCRIPTORS[scores.overall] || 'Official IELTS Score';

    this.modalBandDescriptor.textContent = descriptor;



    this.subscoreTrVal.textContent = scores.ta ? scores.ta.toFixed(1) : scores.tr.toFixed(1);

    this.subscoreTrBar.style.width = `${((scores.ta || scores.tr) / 9) * 100}%`;



    this.subscoreCcVal.textContent = scores.cc.toFixed(1);

    this.subscoreCcBar.style.width = `${(scores.cc / 9) * 100}%`;



    this.subscoreLrVal.textContent = scores.lr.toFixed(1);

    this.subscoreLrBar.style.width = `${(scores.lr / 9) * 100}%`;



    this.subscoreGraVal.textContent = scores.gra.toFixed(1);

    this.subscoreGraBar.style.width = `${(scores.gra / 9) * 100}%`;



    this.modalStrengthsList.innerHTML = feedback.strengths.length > 0

      ? feedback.strengths.map(s => `

          <div class="feedback-item">

            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>

            <span>${s}</span>

          </div>`).join('')

      : '<div class="text-xs text-muted">No specific strengths detected. Focus on word count and structure.</div>';



    this.modalAreasList.innerHTML = feedback.areasToImprove.length > 0

      ? feedback.areasToImprove.map(a => `

          <div class="feedback-item">

            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>

            <span>${a}</span>

          </div>`).join('')

      : '<div class="text-xs text-muted">No critical penalties. Essay fulfills standard band requirements.</div>';



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



  closeObjectiveModal() {

    this.objectiveScoreModal.style.display = 'none';

  }



  /* ------------------------------------------------------------- */

  /* READING MODULE LOGIC                                          */

  /* ------------------------------------------------------------- */

  initReadingModule() {

    this.selectReadingPassage(0);

  }



  selectReadingPassage(index) {

    this.currentReadingPassageIndex = index;

    const passage = this.currentReadingTest.passages[index];

    this.readingPassageTitle.textContent = passage.title;

    this.readingPassageContent.textContent = passage.text;



    this.renderReadingQuestions(passage.questions);

    this.updateReadingAnsweredCount();

  }



  renderReadingQuestions(questions) {

    this.readingQuestionsList.innerHTML = questions.map(q => {

      let inputHtml = '';

      const currentAns = this.readingAnswers[q.id] || '';



      if (q.type === 'tfng') {

        inputHtml = `

          <div class="options-row">

            ${['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => `

              <button class="option-btn ${currentAns === opt ? 'selected' : ''}" data-qid="${q.id}" data-opt="${opt}">

                ${opt}

              </button>

            `).join('')}

          </div>

        `;

      } else if (q.type === 'multiple-choice') {

        inputHtml = `

          <div style="display: flex; flex-direction: column; gap: 6px;">

            ${q.options.map(opt => {

              const optVal = opt.charAt(0);

              return `

                <button class="option-btn ${currentAns === optVal ? 'selected' : ''}" style="text-align: left; width: 100%; justify-content: flex-start;" data-qid="${q.id}" data-opt="${optVal}">

                  ${opt}

                </button>

              `;

            }).join('')}

          </div>

        `;

      } else {

        inputHtml = `

          <input type="text" class="answer-input" placeholder="Type answer..." value="${currentAns}" data-qid="${q.id}">

        `;

      }



      return `

        <div class="question-card" id="q-card-${q.id}">

          <div class="question-prompt">

            <span style="font-weight: 700; color: var(--primary);">Q${q.number}.</span> ${q.prompt}

          </div>

          ${inputHtml}

        </div>

      `;

    }).join('');



    // Attach question input listeners

    this.readingQuestionsList.querySelectorAll('.option-btn').forEach(btn => {

      btn.addEventListener('click', () => {

        const qid = btn.dataset.qid;

        const opt = btn.dataset.opt;

        this.readingAnswers[qid] = opt;



        const parentCard = document.getElementById(`q-card-${qid}`);

        parentCard.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));

        btn.classList.add('selected');

        this.updateReadingAnsweredCount();

      });

    });



    this.readingQuestionsList.querySelectorAll('.answer-input').forEach(input => {

      input.addEventListener('input', (e) => {

        this.readingAnswers[input.dataset.qid] = e.target.value;

        this.updateReadingAnsweredCount();

      });

    });

  }



  updateReadingAnsweredCount() {

    let count = 0;

    this.currentReadingTest.passages.forEach(p => {

      p.questions.forEach(q => {

        if (this.readingAnswers[q.id] && String(this.readingAnswers[q.id]).trim().length > 0) {

          count++;

        }

      });

    });

    this.readingAnsweredCount.textContent = count;

  }



  toggleReadingTimer() {

    if (this.readingTimerRunning) {

      this.pauseReadingTimer();

    } else {

      this.startReadingTimer();

    }

  }



  startReadingTimer() {

    this.readingTimerRunning = true;

    this.readingTimerIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';

    this.readingTimerInterval = setInterval(() => {

      if (this.readingTimerSeconds > 0) {

        this.readingTimerSeconds--;

        const mins = Math.floor(this.readingTimerSeconds / 60);

        const secs = this.readingTimerSeconds % 60;

        this.readingTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      } else {

        this.pauseReadingTimer();

      }

    }, 1000);

  }



  pauseReadingTimer() {

    this.readingTimerRunning = false;

    this.readingTimerIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';

    clearInterval(this.readingTimerInterval);

  }



  resetReadingTimer() {

    this.pauseReadingTimer();

    this.readingTimerSeconds = 60 * 60;

    this.readingTimerDisplay.textContent = '60:00';

  }



  async submitReadingTest() {

    const results = evaluateReadingTest(this.currentReadingTest, this.readingAnswers);



    const submission = {

      id: `reading_${Date.now()}`,

      module: 'reading',

      title: this.currentReadingTest.title,

      scores: { overall: results.band },

      rawScore: results.rawScore,

      totalQuestions: results.totalQuestions,

      questionResults: results.questionResults,

      createdAt: new Date().toISOString()

    };



    await storageService.saveSubmission(submission);

    this.displayObjectiveScoreModal('IELTS Academic Reading', results);

  }



  displayObjectiveScoreModal(testType, results) {

    this.objectiveModalBadge.textContent = testType;

    this.objectiveModalTypeLabel.textContent = `Official ${testType} Band`;

    this.objectiveModalBand.textContent = results.band.toFixed(1);

    const pct = Math.round((results.rawScore / results.totalQuestions) * 100);

    this.objectiveModalRaw.textContent = `Raw Score: ${results.rawScore} / ${results.totalQuestions} (${pct}%)`;



    this.objectiveModalResultsList.innerHTML = results.questionResults.map(r => `

      <div class="feedback-box" style="border-left: 3px solid ${r.isCorrect ? 'var(--success)' : 'var(--destructive)'};">

        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.85rem;">

          <span>Q${r.number}. ${r.prompt.slice(0, 48)}...</span>

          <span style="color: ${r.isCorrect ? 'var(--success)' : 'var(--destructive)'};">

            ${r.isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}

          </span>

        </div>

        <div class="text-xs" style="margin-top: 4px; color: var(--muted-foreground);">

          <span>Your answer: <strong>${r.userAnswer || '(Blank)'}</strong></span> · 

          <span>Correct answer: <strong style="color: var(--primary);">${r.correctAnswer}</strong></span>

        </div>

        <div class="text-xs" style="margin-top: 4px; color: var(--foreground); font-style: italic;">

          ${r.explanation}

        </div>

      </div>

    `).join('');



    if (this.postTestTranscriptContainer && this.postTestTranscriptText) {

      if (type === 'listening') {

        this.postTestTranscriptContainer.style.display = 'block';

        this.postTestTranscriptText.style.display = 'none';

        if (this.togglePostTestTranscriptBtn) {

          this.togglePostTestTranscriptBtn.textContent = 'Show Script';

        }

        const allSections = this.currentListeningTest.sections;

        this.postTestTranscriptText.innerHTML = allSections.map(sec => `

          <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">

            <div style="font-weight: 700; color: var(--primary); margin-bottom: 4px;">${sec.title}</div>

            ${sec.dialogue.map(d => `

              <div style="margin-bottom: 4px;">

                <strong style="color: var(--foreground);">${d.speaker}:</strong> <span>${d.text}</span>

              </div>

            `).join('')}

          </div>

        `).join('');

      } else {

        this.postTestTranscriptContainer.style.display = 'none';

      }

    }



    this.objectiveScoreModal.style.display = 'flex';

  }



  /* ------------------------------------------------------------- */

  /* LISTENING MODULE LOGIC                                        */

  /* ------------------------------------------------------------- */

  initListeningModule() {

    this.listeningPlayer = new OfflineAudioPlayer({

      onProgress: ({ currentIndex, totalLines, currentSpeaker, percent }) => {

        this.listeningSpeakerBanner.innerHTML = `

          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">

            <span style="display: flex; align-items: center; gap: 6px; color: var(--primary); font-weight: 600; font-size: 0.85rem;">

              <span class="status-indicator"></span> 🔊 ${currentSpeaker || 'Speaker'} Speaking...

            </span>

            <span class="font-mono text-xs text-muted">${percent || 0}% Track</span>

          </div>

        `;

      },

      onStateChange: ({ isPlaying, isPaused }) => {

        if (isPlaying) {

          this.listeningPlayIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';

          this.listeningPlayText.textContent = 'Pause Audio';

        } else {

          this.listeningPlayIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';

          this.listeningPlayText.textContent = isPaused ? 'Resume Audio' : 'Play Exam Audio';

          if (!isPaused) {

            this.listeningSpeakerBanner.innerHTML = `

              <span class="text-muted text-xs">🔊 Audio stopped. Tap Play Audio to listen. (Audio text is strictly hidden during exam).</span>

            `;

          }

        }

      }

    });



    this.selectListeningSection(0);

  }



  selectListeningSection(index) {

    this.currentListeningSectionIndex = index;

    const section = this.currentListeningTest.sections[index];

    this.listeningSectionTitle.textContent = section.title;

    this.listeningSectionScenario.textContent = section.scenario;



    if (this.listeningPlayer) {

      this.listeningPlayer.loadDialogue(section.dialogue);

    }



    if (this.listeningTranscriptBox) {

      this.listeningTranscriptBox.innerHTML = '';

    }

    if (this.listeningSpeakerBanner) {

      this.listeningSpeakerBanner.innerHTML = `<span class="text-muted text-xs">🔊 Section ${index + 1} Audio Ready. Tap Play Exam Audio below. (Audio text is strictly hidden during exam).</span>`;

    }



    this.renderListeningQuestions(section.questions);

    this.updateListeningAnsweredCount();

  }



  renderListeningQuestions(questions) {

    this.listeningQuestionsList.innerHTML = questions.map(q => {

      let inputHtml = '';

      const currentAns = this.listeningAnswers[q.id] || '';



      if (q.type === 'multiple-choice') {

        inputHtml = `

          <div style="display: flex; flex-direction: column; gap: 6px;">

            ${q.options.map(opt => {

              const optVal = opt.charAt(0);

              return `

                <button class="option-btn ${currentAns === optVal ? 'selected' : ''}" style="text-align: left; width: 100%; justify-content: flex-start;" data-qid="${q.id}" data-opt="${optVal}">

                  ${opt}

                </button>

              `;

            }).join('')}

          </div>

        `;

      } else {

        inputHtml = `

          <input type="text" class="answer-input" placeholder="Type answer..." value="${currentAns}" data-qid="${q.id}">

        `;

      }



      return `

        <div class="question-card" id="lq-card-${q.id}">

          <div class="question-prompt">

            <span style="font-weight: 700; color: var(--primary);">Q${q.number}.</span> ${q.prompt}

          </div>

          ${inputHtml}

        </div>

      `;

    }).join('');



    this.listeningQuestionsList.querySelectorAll('.option-btn').forEach(btn => {

      btn.addEventListener('click', () => {

        const qid = btn.dataset.qid;

        const opt = btn.dataset.opt;

        this.listeningAnswers[qid] = opt;



        const parentCard = document.getElementById(`lq-card-${qid}`);

        parentCard.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));

        btn.classList.add('selected');

        this.updateListeningAnsweredCount();

      });

    });



    this.listeningQuestionsList.querySelectorAll('.answer-input').forEach(input => {

      input.addEventListener('input', (e) => {

        this.listeningAnswers[input.dataset.qid] = e.target.value;

        this.updateListeningAnsweredCount();

      });

    });

  }



  updateListeningAnsweredCount() {

    let count = 0;

    this.currentListeningTest.sections.forEach(s => {

      s.questions.forEach(q => {

        if (this.listeningAnswers[q.id] && String(this.listeningAnswers[q.id]).trim().length > 0) {

          count++;

        }

      });

    });

    this.listeningAnsweredCount.textContent = count;

  }



  toggleListeningAudio() {

    if (!this.listeningPlayer) return;

    if (this.listeningPlayer.isPlaying) {

      this.listeningPlayer.pause();

    } else {

      this.listeningPlayer.play();

    }

  }



  stopListeningAudio() {

    if (this.listeningPlayer) {

      this.listeningPlayer.stop();

      this.listeningSpeakerBanner.innerHTML = '<span class="text-muted">Audio stopped.</span>';

    }

  }



  async submitListeningTest() {

    if (this.listeningPlayer) this.listeningPlayer.stop();

    const results = evaluateListeningTest(this.currentListeningTest, this.listeningAnswers);



    const submission = {

      id: `listening_${Date.now()}`,

      module: 'listening',

      title: this.currentListeningTest.title,

      scores: { overall: results.band },

      rawScore: results.rawScore,

      totalQuestions: results.totalQuestions,

      questionResults: results.questionResults,

      createdAt: new Date().toISOString()

    };



    await storageService.saveSubmission(submission);

    this.displayObjectiveScoreModal('IELTS Academic Listening', results);

  }



  /* ------------------------------------------------------------- */

  /* SPEAKING MODULE LOGIC                                         */

  /* ------------------------------------------------------------- */

  initSpeakingModule() {

    this.renderSpeakingPart1();

    this.renderSpeakingPart2();

    this.renderSpeakingPart3();

    this.updateSpeakingSliders();

  }



  selectSpeakingPart(partKey) {

    this.speakingContainerPart1.style.display = partKey === 'part1' ? 'flex' : 'none';

    this.speakingContainerPart2.style.display = partKey === 'part2' ? 'flex' : 'none';

    this.speakingContainerPart3.style.display = partKey === 'part3' ? 'flex' : 'none';

    this.speakingContainerScore.style.display = partKey === 'score' ? 'flex' : 'none';

  }



  renderSpeakingPart1() {

    const qList = this.speakingTopic.part1.questions;

    this.speakingPart1Questions.innerHTML = qList.map((q, idx) => `

      <section class="editor-card">

        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">

          <h4 class="text-sm font-semibold" style="flex: 1;">${idx + 1}. ${q.question}</h4>

          <button class="icon-btn btn-speak-question" data-text="${q.question}" title="Listen to Examiner">

            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>

          </button>

        </div>



        <button class="btn-secondary btn-toggle-answer" style="font-size: 0.75rem; width: 100%; justify-content: space-between; margin-top: 6px;">

          <span>View Band 9 Model Answer</span>

          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>

        </button>



        <div class="model-answer-box" style="display: none; padding: 10px; background: var(--background); border-radius: 6px; font-size: 0.85rem; line-height: 1.5; margin-top: 6px;">

          <p>${q.modelAnswer}</p>

          <div style="margin-top: 6px; display: flex; flex-wrap: wrap; gap: 4px;">

            ${q.band9KeyWords.map(w => `<span class="tag-badge" style="font-size: 0.68rem;">${w}</span>`).join('')}

          </div>

        </div>

      </section>

    `).join('');



    this.speakingPart1Questions.querySelectorAll('.btn-speak-question').forEach(btn => {

      btn.addEventListener('click', () => {

        if ('speechSynthesis' in window) {

          const u = new SpeechSynthesisUtterance(btn.dataset.text);

          u.rate = 0.95;

          window.speechSynthesis.speak(u);

        }

      });

    });



    this.speakingPart1Questions.querySelectorAll('.btn-toggle-answer').forEach(btn => {

      btn.addEventListener('click', () => {

        const box = btn.nextElementSibling;

        box.style.display = box.style.display === 'none' ? 'block' : 'none';

      });

    });

  }



  renderSpeakingPart2() {

    const p2 = this.speakingTopic.part2;

    document.getElementById('cue-card-topic').textContent = p2.topic;

    document.getElementById('cue-card-bullets').innerHTML = p2.cueCard.map(b => `<li>${b}</li>`).join('');

    this.part2ModelText.textContent = p2.modelAnswer;

    this.part2KeywordsPills.innerHTML = p2.band9KeyWords.map(w => `<span class="tag-badge">${w}</span>`).join('');

  }



  renderSpeakingPart3() {

    const qList = this.speakingTopic.part3.questions;

    this.speakingPart3Questions.innerHTML = qList.map((q, idx) => `

      <section class="editor-card">

        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">

          <h4 class="text-sm font-semibold" style="flex: 1;">${idx + 1}. ${q.question}</h4>

          <button class="icon-btn btn-speak-question" data-text="${q.question}" title="Listen to Examiner">

            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>

          </button>

        </div>



        <button class="btn-secondary btn-toggle-answer" style="font-size: 0.75rem; width: 100%; justify-content: space-between; margin-top: 6px;">

          <span>View Band 9 Analytical Response</span>

          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>

        </button>



        <div class="model-answer-box" style="display: none; padding: 10px; background: var(--background); border-radius: 6px; font-size: 0.85rem; line-height: 1.5; margin-top: 6px;">

          <p>${q.modelAnswer}</p>

          <div style="margin-top: 6px; display: flex; flex-wrap: wrap; gap: 4px;">

            ${q.band9KeyWords.map(w => `<span class="tag-badge" style="font-size: 0.68rem;">${w}</span>`).join('')}

          </div>

        </div>

      </section>

    `).join('');



    this.speakingPart3Questions.querySelectorAll('.btn-speak-question').forEach(btn => {

      btn.addEventListener('click', () => {

        if ('speechSynthesis' in window) {

          const u = new SpeechSynthesisUtterance(btn.dataset.text);

          u.rate = 0.95;

          window.speechSynthesis.speak(u);

        }

      });

    });



    this.speakingPart3Questions.querySelectorAll('.btn-toggle-answer').forEach(btn => {

      btn.addEventListener('click', () => {

        const box = btn.nextElementSibling;

        box.style.display = box.style.display === 'none' ? 'block' : 'none';

      });

    });

  }



  toggleSpeakingPrepTimer() {

    if (this.speakingPrepRunning) {

      clearInterval(this.speakingPrepInterval);

      this.speakingPrepRunning = false;

      this.btnSpPrepTimer.textContent = 'Start Prep';

    } else {

      this.speakingPrepRunning = true;

      this.btnSpPrepTimer.textContent = 'Pause';

      this.speakingPrepInterval = setInterval(() => {

        if (this.speakingPrepSeconds > 0) {

          this.speakingPrepSeconds--;

          const s = this.speakingPrepSeconds;

          this.spPrepTimerDisplay.textContent = `00:${String(s).padStart(2, '0')}`;

        } else {

          clearInterval(this.speakingPrepInterval);

          this.speakingPrepRunning = false;

          this.btnSpPrepTimer.textContent = 'Prep Ended';

          this.spPrepTimerDisplay.textContent = '00:00';

        }

      }, 1000);

    }

  }



  toggleSpeakingSpeakTimer() {

    if (this.speakingSpeakRunning) {

      clearInterval(this.speakingSpeakInterval);

      this.speakingSpeakRunning = false;

      this.btnSpSpeakTimer.textContent = 'Start Speak';

    } else {

      this.speakingSpeakRunning = true;

      this.btnSpSpeakTimer.textContent = 'Pause';

      this.speakingSpeakInterval = setInterval(() => {

        if (this.speakingSpeakSeconds > 0) {

          this.speakingSpeakSeconds--;

          const m = Math.floor(this.speakingSpeakSeconds / 60);

          const s = this.speakingSpeakSeconds % 60;

          this.spSpeakTimerDisplay.textContent = `0${m}:${String(s).padStart(2, '0')}`;

        } else {

          clearInterval(this.speakingSpeakInterval);

          this.speakingSpeakRunning = false;

          this.btnSpSpeakTimer.textContent = 'Time Up';

          this.spSpeakTimerDisplay.textContent = '00:00';

        }

      }, 1000);

    }

  }



  async toggleVoiceRecording() {

    if (this.speakingRecorder.isRecording) {

      this.spRecordLabel.textContent = 'Saving...';

      const result = await this.speakingRecorder.stop();

      this.spRecordLabel.textContent = 'Record New Response';

      this.btnSpRecordToggle.classList.remove('btn-danger');

      this.spRecordingStatus.innerHTML = '<span>Recording Complete</span>';



      if (result && result.url) {

        this.spAudioPlayback.src = result.url;

        this.spAudioPlaybackContainer.style.display = 'block';

      }

    } else {

      try {

        await this.speakingRecorder.start();

        this.spRecordLabel.textContent = 'Stop Recording';

        this.spRecordingStatus.innerHTML = '<span class="recording-dot"></span><span>Recording Live Audio...</span>';

      } catch (err) {

        alert('Could not access microphone: ' + err.message);

      }

    }

  }



  updateSpeakingSliders() {

    const fc = Number(this.sliderFc.value);

    const lr = Number(this.sliderLr.value);

    const gra = Number(this.sliderGra.value);

    const pr = Number(this.sliderPr.value);



    this.scoreValFc.textContent = fc.toFixed(1);

    this.scoreValLr.textContent = lr.toFixed(1);

    this.scoreValGra.textContent = gra.toFixed(1);

    this.scoreValPr.textContent = pr.toFixed(1);



    const result = calculateSpeakingBand({ fc, lr, gra, pr });

    this.spCalculatedBand.textContent = result.overall.toFixed(1);

  }



  async saveSpeakingSession() {

    const fc = Number(this.sliderFc.value);

    const lr = Number(this.sliderLr.value);

    const gra = Number(this.sliderGra.value);

    const pr = Number(this.sliderPr.value);



    const result = calculateSpeakingBand({ fc, lr, gra, pr });



    const submission = {

      id: `speaking_${Date.now()}`,

      module: 'speaking',

      title: `Speaking: ${this.speakingTopic.title}`,

      scores: {

        overall: result.overall,

        fc, lr, gra, pr

      },

      createdAt: new Date().toISOString()

    };



    await storageService.saveSubmission(submission);

    alert(`Speaking session saved to history with Band ${result.overall.toFixed(1)}!`);

  }



  /* ------------------------------------------------------------- */

  /* UNIFIED HISTORY MODAL                                         */

  /* ------------------------------------------------------------- */

  async openHistoryModal() {

    const list = await storageService.getHistory();

    if (list.length === 0) {

      this.historyList.innerHTML = '<div class="text-sm text-muted" style="padding: 20px 0; text-align: center;">No practice submissions yet. Complete a test in any section!</div>';

    } else {

      this.historyList.innerHTML = list.map(item => {

        const mod = item.module || (item.taskType ? 'writing' : 'practice');

        const badgeColor = mod === 'writing' ? 'var(--primary)' : (mod === 'reading' ? 'var(--success)' : (mod === 'listening' ? 'var(--warning)' : '#a855f7'));

        const title = item.promptTitle || item.title || 'IELTS Session';

        const sub = item.wordCount ? `${item.wordCount} words` : (item.rawScore ? `${item.rawScore}/${item.totalQuestions} items` : 'Self Assessment');



        return `

          <div class="feedback-box" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">

            <div style="flex: 1;">

              <div style="font-weight: 600; font-size: 0.85rem;">${title}</div>

              <div class="text-xs text-muted">${new Date(item.createdAt).toLocaleDateString()} · ${sub} · <span style="text-transform: uppercase; color: ${badgeColor}; font-weight: 600;">${mod}</span></div>

            </div>

            <div style="background: rgba(56, 189, 248, 0.15); color: var(--primary); padding: 4px 10px; border-radius: 6px; font-weight: 700; font-family: var(--font-mono);">

              Band ${item.scores.overall.toFixed(1)}

            </div>

          </div>

        `;

      }).join('');

    }



    this.historyModal.style.display = 'flex';

  }



  closeHistoryModal() {

    this.historyModal.style.display = 'none';

  }




  initCDIeltsModule() {
    this.btnToggleCD = document.getElementById('btn-toggle-cd-ielts');
    this.cdLabel = document.getElementById('cd-ielts-btn-label');
    if (this.btnToggleCD) {
      const active = this.cdEngine.isCDModeActive();
      if (active) this.cdEngine.setCDMode(true);
      if (this.cdLabel) this.cdLabel.textContent = active ? 'CD-IELTS Active' : 'CD-IELTS Mode';

      this.btnToggleCD.addEventListener('click', () => {
        const nowActive = !this.cdEngine.isCDModeActive();
        this.cdEngine.setCDMode(nowActive);
        if (this.cdLabel) this.cdLabel.textContent = nowActive ? 'CD-IELTS Active' : 'CD-IELTS Mode';
      });
    }

    // Keyboard Shortcuts
    this.cdEngine.bindShortcuts({
      onNext: () => this.navigatePrompt(1),
      onPrev: () => this.navigatePrompt(-1),
      onHighlight: () => {}
    });
    document.addEventListener('keydown', (e) => this.cdEngine.handleKeyDown(e));

    // Selection Highlighting in Reading
    const passageView = document.getElementById('reading-passage-view');
    if (passageView) {
      this.cdEngine.initSelectionListener(passageView, () => this.currentReadingTest ? this.currentReadingTest.id : null);
    }
  }

  initMistakeBankModule() {
    this.btnOpenMistakeBank = document.getElementById('btn-open-mistake-bank');
    this.btnCloseMistakeBank = document.getElementById('btn-close-mistake-bank');
    this.mistakeBankModal = document.getElementById('mistake-bank-modal');
    this.mistakeListContainer = document.getElementById('mistake-bank-list');

    if (this.btnOpenMistakeBank) {
      this.btnOpenMistakeBank.addEventListener('click', () => this.openMistakeBank());
    }
    if (this.btnCloseMistakeBank) {
      this.btnCloseMistakeBank.addEventListener('click', () => {
        if (this.mistakeBankModal) this.mistakeBankModal.style.display = 'none';
      });
    }

    // Filters
    const btnAll = document.getElementById('filter-mistakes-all');
    const btnReading = document.getElementById('filter-mistakes-reading');
    const btnListening = document.getElementById('filter-mistakes-listening');
    if (btnAll) btnAll.addEventListener('click', () => this.renderMistakesList({ activeOnly: true }));
    if (btnReading) btnReading.addEventListener('click', () => this.renderMistakesList({ activeOnly: true, testType: 'reading' }));
    if (btnListening) btnListening.addEventListener('click', () => this.renderMistakesList({ activeOnly: true, testType: 'listening' }));
  }

  openMistakeBank() {
    if (!this.mistakeBankModal) return;
    this.mistakeBankModal.style.display = 'flex';
    this.updateReadinessHUD();
    this.renderMistakesList({ activeOnly: true });
  }

  updateReadinessHUD() {
    const history = {
      reading: [7.5],
      listening: [7.5],
      writing: [6.5],
      speaking: [7.0]
    };
    const readiness = this.mistakeBank.calculateReadiness(history);
    const overallEl = document.getElementById('readiness-overall-band');
    const adviceEl = document.getElementById('readiness-advice-text');
    if (overallEl) overallEl.textContent = readiness.overallBand.toFixed(1);
    if (adviceEl) adviceEl.textContent = readiness.advice;
  }

  renderMistakesList(filter) {
    if (!this.mistakeListContainer) return;
    const list = this.mistakeBank.getMistakes(filter);
    
    // Update badge counts
    const countActive = document.getElementById('count-mistakes-active');
    const countReading = document.getElementById('count-mistakes-reading');
    const countListening = document.getElementById('count-mistakes-listening');
    if (countActive) countActive.textContent = this.mistakeBank.getMistakes({ activeOnly: true }).length;
    if (countReading) countReading.textContent = this.mistakeBank.getMistakes({ activeOnly: true, testType: 'reading' }).length;
    if (countListening) countListening.textContent = this.mistakeBank.getMistakes({ activeOnly: true, testType: 'listening' }).length;

    if (list.length === 0) {
      this.mistakeListContainer.innerHTML = '<div class="text-xs text-muted" style="text-align: center; padding: 24px;">🎉 All mistakes mastered! Keep up the rigorous practice.</div>';
      return;
    }

    this.mistakeListContainer.innerHTML = list.map(m => `
      <div class="mistake-card">
        <div class="mistake-meta">
          <span>${m.testType.toUpperCase()} • Q${m.questionNumber} (${m.category})</span>
          <span>Missed ${m.timesEncountered}x</span>
        </div>
        <div style="font-weight: 500; margin-top: 2px;">${m.questionText || 'Test Question'}</div>
        <div class="mistake-answers-row">
          <span style="color: var(--destructive);">Your answer: <strong>${m.candidateAnswer || '[BLANK]'}</strong></span>
          <span style="color: var(--success); margin-left: auto;">Correct: <strong>${m.correctAnswer}</strong></span>
        </div>
        ${m.explanation ? `<div class="text-xs text-muted" style="margin-top: 4px;">💡 ${m.explanation}</div>` : ''}
        <button class="btn-secondary" style="font-size: 0.75rem; padding: 3px 8px; align-self: flex-end; margin-top: 4px;" onclick="window.ieltsApp.markMistakeMastered('${m.id}')">
          ✓ Mark Mastered
        </button>
      </div>
    `).join('');
  }

  markMistakeMastered(id) {
    this.mistakeBank.markMastered(id);
    this.renderMistakesList({ activeOnly: true });
  }

  initSpeakingFluency() {
    this.btnStartPrep = document.getElementById('btn-start-prep-60s');
    this.prepDisplay = document.getElementById('prep-timer-display');
    this.fluencyCadencePill = document.getElementById('fluency-cadence-pill');
    this.fluencyFillersPill = document.getElementById('fluency-fillers-pill');
    this.fluencyWordsPill = document.getElementById('fluency-words-pill');

    if (this.btnStartPrep) {
      this.btnStartPrep.addEventListener('click', () => {
        this.btnStartPrep.disabled = true;
        this.speakingFluency.startPrepTimer(
          (rem) => {
            if (this.prepDisplay) {
              const m = Math.floor(rem / 60);
              const s = rem % 60;
              this.prepDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
            }
          },
          () => {
            if (this.prepDisplay) this.prepDisplay.textContent = "00:00 - SPEAK NOW!";
            this.btnStartPrep.disabled = false;
            // Auto start recording
            if (this.voiceRecorder && !this.voiceRecorder.isRecording) {
              this.toggleSpeakingRecording();
            }
          }
        );
      });
    }

    // Connect speech recognition
    this.speakingFluency.initSpeechRecognition(
      (stats) => {
        const activeSeconds = Math.max(1, this.speakingRecordingSeconds || 10);
        const wpmResult = this.speakingFluency.calculateWPM(stats.wordCount, activeSeconds);
        if (this.fluencyCadencePill) {
          this.fluencyCadencePill.textContent = `${wpmResult.wpm} WPM (${wpmResult.label.split(' - ')[0]})`;
          this.fluencyCadencePill.className = `fluency-pill ${wpmResult.tier === 'optimal' ? 'optimal' : 'warning'}`;
        }
        if (this.fluencyFillersPill) {
          this.fluencyFillersPill.textContent = `Fillers: ${stats.fillers.totalCount}`;
        }
        if (this.fluencyWordsPill) {
          this.fluencyWordsPill.textContent = `Words: ${stats.wordCount}`;
        }
      },
      (err) => console.log('Fluency recognition notice:', err)
    );
  }

  initServiceWorker() {

    if ('serviceWorker' in navigator) {

      window.addEventListener('load', () => {

        navigator.serviceWorker.register('sw.js')

          .then(() => console.log('IELTS Complete Offline ServiceWorker Active'))

          .catch(err => console.log('ServiceWorker notice:', err));

      });

    }

  }

}



// Instantiate on DOM load

window.addEventListener('DOMContentLoaded', () => {

  window.ieltsApp = new IELTSApp();

});

