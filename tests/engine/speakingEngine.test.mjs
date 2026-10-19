import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateSpeakingBand } from '../../public/js/engine/speakingEngine.js';
import { SPEAKING_TOPICS } from '../../public/js/data/speakingTests.js';

describe('Offline Speaking Scoring Engine', () => {
  it('correctly calculates overall speaking band with official 0.25/0.75 rounding', () => {
    // 7.5 + 7.5 + 7.0 + 7.5 = 29.5 / 4 = 7.375 -> rounds up to 7.5
    const res1 = calculateSpeakingBand({ fc: 7.5, lr: 7.5, gra: 7.0, pr: 7.5 });
    assert.equal(res1.overall, 7.5);

    // 8.0 + 8.0 + 8.5 + 8.5 = 33 / 4 = 8.25 -> rounds up to 8.5
    const res2 = calculateSpeakingBand({ fc: 8.0, lr: 8.0, gra: 8.5, pr: 8.5 });
    assert.equal(res2.overall, 8.5);

    // 6.0 + 6.0 + 6.0 + 6.0 = 24 / 4 = 6.0
    const res3 = calculateSpeakingBand({ fc: 6.0, lr: 6.0, gra: 6.0, pr: 6.0 });
    assert.equal(res3.overall, 6.0);
  });

  it('contains valid Part 1, Part 2, and Part 3 prompts with Model Answers', () => {
    const topic = SPEAKING_TOPICS[0];
    assert.ok(topic.part1.questions.length >= 3);
    assert.ok(topic.part1.questions[0].modelAnswer);
    assert.ok(topic.part2.cueCard.length >= 4);
    assert.ok(topic.part2.modelAnswer);
    assert.ok(topic.part3.questions.length >= 3);
  });
});
