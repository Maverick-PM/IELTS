import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateReadingTest, normalizeAnswer } from '../../public/js/engine/readingEngine.js';
import { ACADEMIC_READING_TESTS, rawToReadingBand } from '../../public/js/data/readingTests.js';

describe('Offline Reading Scoring Engine', () => {
  it('correctly maps raw scores to IELTS Academic Reading Band scores', () => {
    assert.equal(rawToReadingBand(40), 9.0);
    assert.equal(rawToReadingBand(39), 9.0);
    assert.equal(rawToReadingBand(37), 8.5);
    assert.equal(rawToReadingBand(35), 8.0);
    assert.equal(rawToReadingBand(33), 7.5);
    assert.equal(rawToReadingBand(30), 7.0);
    assert.equal(rawToReadingBand(23), 6.0);
    assert.equal(rawToReadingBand(15), 5.0);
    assert.equal(rawToReadingBand(5), 3.5);
  });

  it('normalizes answers with case-insensitivity and punctuation removal', () => {
    assert.equal(normalizeAnswer('  True. '), 'true');
    assert.equal(normalizeAnswer('PHONIC LIPS!'), 'phonic lips');
    assert.equal(normalizeAnswer('35°C'), '35°c');
  });

  it('evaluates a full 40-question reading test accurately with feedback', () => {
    const test = ACADEMIC_READING_TESTS[0];
    const userAnswers = {};

    // Simulate 35 correct answers
    let count = 0;
    test.passages.forEach(p => {
      p.questions.forEach(q => {
        if (count < 35) {
          userAnswers[q.id] = q.answer;
          count++;
        }
      });
    });

    const result = evaluateReadingTest(test, userAnswers);
    assert.equal(result.rawScore, 35);
    assert.equal(result.totalQuestions, 40);
    assert.equal(result.band, 8.0);
    assert.ok(result.strengths.length > 0);
  });
});
