import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { SpeakingFluencyEngine } from '../public/js/engine/speakingFluencyEngine.js';

describe('Speaking Part 2 Exam Pressure & Fluency Engine', () => {
  let engine;

  beforeEach(() => {
    engine = new SpeakingFluencyEngine();
  });

  it('correctly calculates Words Per Minute (WPM) and official fluency cadence tiers', () => {
    // 140 words in 60 seconds -> 140 WPM (Optimal Band 7.5-9.0)
    const optimal = engine.calculateWPM(140, 60);
    assert.equal(optimal.wpm, 140);
    assert.equal(optimal.tier, 'optimal');
    assert.match(optimal.label, /Fluent/);

    // 90 words in 60 seconds -> 90 WPM (Slow / Hesitant)
    const slow = engine.calculateWPM(90, 60);
    assert.equal(slow.wpm, 90);
    assert.equal(slow.tier, 'slow');
    assert.match(slow.label, /Below Band 6/);

    // 180 words in 60 seconds -> 180 WPM (Rushed)
    const fast = engine.calculateWPM(180, 60);
    assert.equal(fast.wpm, 180);
    assert.equal(fast.tier, 'fast');
  });

  it('accurately identifies and tallies common spoken filler words', () => {
    const speech = "Well, um, I think that technology is, you know, basically changing how we live, uh, because people are like constantly connected.";
    const analysis = engine.detectFillers(speech);

    assert.equal(analysis.totalCount, 5);
    assert.equal(analysis.breakdown['um'], 1);
    assert.equal(analysis.breakdown['uh'], 1);
    assert.equal(analysis.breakdown['you know'], 1);
    assert.equal(analysis.breakdown['basically'], 1);
    assert.equal(analysis.breakdown['like'], 1);
  });

  it('manages Part 2 60-second preparation countdown logic', () => {
    assert.equal(engine.prepRemainingSeconds, 60);
    
    // Simulate tick down
    engine.tickPrep();
    assert.equal(engine.prepRemainingSeconds, 59);

    engine.resetPrep();
    assert.equal(engine.prepRemainingSeconds, 60);
  });
});
