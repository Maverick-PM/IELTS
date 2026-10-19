import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateListeningTest } from '../../public/js/engine/listeningEngine.js';
import { ACADEMIC_LISTENING_TESTS, rawToListeningBand } from '../../public/js/data/listeningTests.js';

describe('Offline Listening Scoring Engine', () => {
  it('correctly maps raw scores to IELTS Academic Listening Band scores', () => {
    assert.equal(rawToListeningBand(40), 9.0);
    assert.equal(rawToListeningBand(39), 9.0);
    assert.equal(rawToListeningBand(37), 8.5);
    assert.equal(rawToListeningBand(35), 8.0);
    assert.equal(rawToListeningBand(32), 7.5);
    assert.equal(rawToListeningBand(30), 7.0);
    assert.equal(rawToListeningBand(26), 6.5);
    assert.equal(rawToListeningBand(23), 6.0);
  });

  it('evaluates listening test answers including acceptable synonyms and spellings', () => {
    const test = ACADEMIC_LISTENING_TESTS[0];
    const userAnswers = {
      lq1: 'jenkins',
      lq2: 'EJ 84920', // Acceptable spacing
      lq3: 'environmental',
      lq4: 'Westgate',
      lq5: '£185', // Acceptable with currency symbol
      lq6: '18', // Acceptable date format
      lq7: 'letter',
      lq8: 'A',
      lq9: 'B',
      lq10: 'B'
    };

    const result = evaluateListeningTest(test, userAnswers);
    assert.equal(result.rawScore, 10);
    assert.ok(result.questionResults[0].isCorrect);
    assert.ok(result.questionResults[1].isCorrect);
    assert.ok(result.questionResults[4].isCorrect);
  });
});
