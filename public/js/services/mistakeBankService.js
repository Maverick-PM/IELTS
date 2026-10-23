// Candidate Analytics & Mistake Bank Service
// Persists candidate mistakes across Reading & Listening, provides mistake review decks, and computes official Band Readiness trajectory

export class MistakeBankService {
  constructor() {
    this.storageKey = 'ielts_mistake_bank';
  }

  getMistakes(filter = {}) {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(this.storageKey);
      let list = raw ? JSON.parse(raw) : [];

      if (filter.activeOnly) {
        list = list.filter(m => !m.isMastered);
      }
      if (filter.testType) {
        list = list.filter(m => m.testType === filter.testType);
      }
      if (filter.category) {
        list = list.filter(m => m.category === filter.category);
      }

      return list;
    } catch (e) {
      return [];
    }
  }

  saveMistakes(list) {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    } catch (e) {
      console.warn('Mistake bank save note:', e);
    }
  }

  recordMistake(item) {
    const list = this.getMistakes();
    const existingIndex = list.findIndex(m => 
      m.testType === item.testType && 
      m.testTitle === item.testTitle && 
      m.questionNumber === item.questionNumber
    );

    let recordedItem;

    if (existingIndex >= 0) {
      // Update existing
      recordedItem = list[existingIndex];
      recordedItem.candidateAnswer = item.candidateAnswer || recordedItem.candidateAnswer;
      recordedItem.correctAnswer = item.correctAnswer || recordedItem.correctAnswer;
      recordedItem.explanation = item.explanation || recordedItem.explanation;
      recordedItem.timesEncountered = (recordedItem.timesEncountered || 1) + 1;
      recordedItem.lastEncountered = Date.now();
      recordedItem.isMastered = false; // Re-opened if missed again
      list[existingIndex] = recordedItem;
    } else {
      // Create new
      recordedItem = {
        id: 'mb_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        testType: item.testType,
        testTitle: item.testTitle || 'Academic Test',
        questionNumber: item.questionNumber,
        questionText: item.questionText || '',
        candidateAnswer: item.candidateAnswer || '',
        correctAnswer: item.correctAnswer || '',
        explanation: item.explanation || '',
        category: item.category || 'General Question',
        timesEncountered: 1,
        isMastered: false,
        lastEncountered: Date.now()
      };
      list.unshift(recordedItem);
    }

    this.saveMistakes(list);
    return recordedItem;
  }

  markMastered(id) {
    const list = this.getMistakes();
    const item = list.find(m => m.id === id);
    if (item) {
      item.isMastered = true;
      item.masteredAt = Date.now();
      this.saveMistakes(list);
    }
    return item;
  }

  clearAll() {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(this.storageKey);
  }

  roundIELTSBand(rawScore) {
    const floor = Math.floor(rawScore);
    const fraction = rawScore - floor;
    if (fraction < 0.25) {
      return floor;
    } else if (fraction >= 0.25 && fraction < 0.75) {
      return floor + 0.5;
    } else {
      return floor + 1.0;
    }
  }

  calculateReadiness(history = {}) {
    const skills = ['reading', 'listening', 'writing', 'speaking'];
    const averages = {};

    let totalAvg = 0;
    let countedSkills = 0;
    let lowestScore = 99;
    let bottleneckModule = 'writing';

    skills.forEach(skill => {
      const arr = history[skill] || [];
      if (arr.length > 0) {
        const sum = arr.reduce((a, b) => a + b, 0);
        const avg = sum / arr.length;
        averages[skill] = Math.round(avg * 10) / 10;
        totalAvg += avg;
        countedSkills += 1;

        if (avg < lowestScore) {
          lowestScore = avg;
          bottleneckModule = skill;
        }
      } else {
        averages[skill] = null;
      }
    });

    const rawComposite = countedSkills > 0 ? (totalAvg / countedSkills) : 6.0;
    const overallBand = this.roundIELTSBand(rawComposite);

    const moduleNames = {
      reading: 'Reading',
      listening: 'Listening',
      writing: 'Writing',
      speaking: 'Speaking'
    };

    let advice = `Your estimated overall band is ${overallBand.toFixed(1)}.`;
    if (bottleneckModule) {
      advice += ` Your primary bottleneck is ${moduleNames[bottleneckModule]} (${(averages[bottleneckModule] || 0).toFixed(1)}). Focus drills on ${moduleNames[bottleneckModule]} to unlock Band ${Math.min(9, overallBand + 0.5).toFixed(1)}.`;
    }

    return {
      overallBand,
      rawComposite: Math.round(rawComposite * 100) / 100,
      moduleAverages: averages,
      bottleneckModule,
      advice
    };
  }
}
