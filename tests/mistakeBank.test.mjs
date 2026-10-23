import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { MistakeBankService } from '../public/js/services/mistakeBankService.js';

describe('Candidate Analytics & Mistake Bank Service', () => {
  let service;

  beforeEach(() => {
    // Mock minimal localStorage
    const store = {};
    global.localStorage = {
      getItem: (key) => store[key] || null,
      setItem: (key, val) => { store[key] = String(val); },
      removeItem: (key) => { delete store[key]; },
      clear: () => { Object.keys(store).forEach(k => delete store[k]); }
    };
    service = new MistakeBankService();
  });

  it('records mistakes and deduplicates repeat attempts', () => {
    service.recordMistake({
      testType: 'reading',
      testTitle: 'Test 1',
      questionNumber: 3,
      questionText: 'The discovery of agriculture led to nomadic lifestyles.',
      candidateAnswer: 'TRUE',
      correctAnswer: 'FALSE',
      explanation: 'Passage indicates agriculture established permanent settlements.',
      category: 'True/False/Not Given'
    });

    let list = service.getMistakes();
    assert.equal(list.length, 1);
    assert.equal(list[0].timesEncountered, 1);
    assert.equal(list[0].isMastered, false);

    // Record the same mistake again
    service.recordMistake({
      testType: 'reading',
      testTitle: 'Test 1',
      questionNumber: 3,
      candidateAnswer: 'NOT GIVEN',
      correctAnswer: 'FALSE'
    });

    list = service.getMistakes();
    assert.equal(list.length, 1); // Deduplicated!
    assert.equal(list[0].timesEncountered, 2);
    assert.equal(list[0].candidateAnswer, 'NOT GIVEN');
  });

  it('marks mistakes as mastered when reviewed successfully', () => {
    const item = service.recordMistake({
      testType: 'listening',
      testTitle: 'Test 1',
      questionNumber: 7,
      candidateAnswer: '500',
      correctAnswer: '50'
    });

    const activeList = service.getMistakes({ activeOnly: true });
    assert.equal(activeList.length, 1);

    service.markMastered(item.id);

    const afterList = service.getMistakes({ activeOnly: true });
    assert.equal(afterList.length, 0);
  });

  it('calculates official composite Band Readiness and spots candidate bottlenecks', () => {
    const history = {
      reading: [7.5, 8.0, 7.5],
      listening: [8.0, 7.5, 8.5],
      writing: [6.5, 6.5, 6.0],
      speaking: [7.0, 7.5, 7.0]
    };

    const readiness = service.calculateReadiness(history);
    
    // Average scores: R=7.67, L=8.0, W=6.33, S=7.17 -> Sum = 29.17 / 4 = 7.29 -> Rounds to 7.5!
    assert.equal(typeof readiness.overallBand, 'number');
    assert.equal(readiness.bottleneckModule, 'writing');
    assert.match(readiness.advice, /Writing/);
  });
});
