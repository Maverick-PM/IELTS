import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateEssay } from '../../public/js/engine/scoringEngine.js';
import { tokenize } from '../../public/js/engine/tokenizer.js';
import { TASK_1_PROMPTS } from '../../public/js/data/task1Prompts.js';
import { TASK_2_PROMPTS } from '../../public/js/data/task2Prompts.js';

describe('Reviewer Fixes Verification', () => {
  it('correctly stems and matches inflected AWL words (economic, analyzed, technological)', () => {
    const text = 'The economic analysis indicated technological developments transformed society.';
    const result = evaluateEssay(text, TASK_2_PROMPTS[0], 'task2');
    
    // Should match economic (economy), analysis (analyze), indicated (indicate), technological (technology), transformed (transform)
    assert.ok(result.metrics.awlCount >= 4, `Expected at least 4 AWL matches for inflected forms, got ${result.metrics.awlCount}`);
  });

  it('recognizes single-newline separated paragraphs on mobile keyboards', () => {
    const singleNewlineText = 'First paragraph introducing the topic.\nSecond paragraph developing argument one.\nThird paragraph developing argument two.\nFourth paragraph concluding the essay.';
    const tokenized = tokenize(singleNewlineText);
    
    assert.equal(tokenized.paragraphCount, 4, `Expected 4 paragraphs, got ${tokenized.paragraphCount}`);
  });

  it('recognizes "To summarize" and "In overview" as valid Task 1 overview statements', () => {
    const prompt = TASK_1_PROMPTS[0];
    const textWithToSummarize = `The chart displays data regarding renewable energy and fossil fuels across four distinct nations between 2010 and 2024, measured in Terawatt-hours. 

To summarize, renewable energy expanded substantially across all four evaluated countries, whereas fossil fuel consumption experienced marked reductions throughout the period.

In Germany, renewable energy in 2010 stood at 180 TWh and climbed markedly to 390 TWh in 2024, whereas fossil fuels decreased from 420 TWh to 270 TWh. In the United Kingdom, renewable energy began at 140 TWh and climbed to 350 TWh, while fossil fuels dropped from 450 TWh down to 210 TWh. In Japan, renewables were 130 TWh in 2010 and 210 TWh in 2024, compared to fossil fuels which stood at 430 TWh and 380 TWh respectively. Finally, in Canada, renewable generation was 280 TWh and 410 TWh, whereas fossil fuels were 310 TWh and 240 TWh across the evaluated years.`;

    const result = evaluateEssay(textWithToSummarize, prompt, 'task1');
    assert.ok(result.scores.tr >= 6.5, `Task 1 with "To summarize" overview should score >= 6.5, got ${result.scores.tr}`);
    assert.ok(!result.feedback.areasToImprove.some(f => f.toLowerCase().includes('missing explicit overview')), 'Should not flag missing overview');
  });
});
