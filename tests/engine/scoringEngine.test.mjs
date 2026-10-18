import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateEssay } from '../../public/js/engine/scoringEngine.js';
import { TASK_1_PROMPTS } from '../../public/js/data/task1Prompts.js';
import { TASK_2_PROMPTS } from '../../public/js/data/task2Prompts.js';

describe('Offline IELTS Scoring Engine', () => {
  it('gracefully handles very short essays (< 50 words) with diagnostic warnings and low band', () => {
    const prompt = TASK_2_PROMPTS[0];
    const shortText = 'This is an essay about automation. I think automation is good but bad for some jobs.';
    const result = evaluateEssay(shortText, prompt, 'task2');
    
    assert.ok(result.scores.overall <= 4.0, `Overall score ${result.scores.overall} should be <= 4.0`);
    assert.ok(result.scores.tr <= 4.0, `TR score ${result.scores.tr} should be <= 4.0`);
    assert.ok(result.wordCount < 50, 'Word count should reflect actual text');
    assert.ok(result.feedback.areasToImprove.some(f => f.toLowerCase().includes('word count')), 'Must warn about word count');
  });

  it('enforces official Task 1 rubric: caps Task Achievement if overview is missing', () => {
    const prompt = TASK_1_PROMPTS[0];
    // Over 150 words but strictly listing data without any overview statement
    const noOverviewText = `The bar chart provides detailed numerical data regarding renewable energy generation and fossil fuel consumption across four distinct industrialized nations between 2010 and 2024, measured in Terawatt-hours. 

In Germany, renewable energy generation in 2010 stood at 180 TWh and climbed markedly to 390 TWh in 2024, whereas fossil fuels decreased from 420 TWh to 270 TWh during the exact same timeframe. In the United Kingdom, renewable generation commenced at 140 TWh and subsequently rose to 350 TWh, while fossil fuels dropped from 450 TWh down to 210 TWh. 

Regarding Japan, renewable generation was recorded at 130 TWh in 2010 and increased moderately to 210 TWh in 2024, compared to fossil fuels which stood at 430 TWh and 380 TWh respectively. Finally, in Canada, renewable generation was documented at 280 TWh and 410 TWh, whereas fossil fuels were 310 TWh and 240 TWh across the evaluated years. These statistics provide specific numeric readings recorded during the 14-year experimental period.`;
    
    const result = evaluateEssay(noOverviewText, prompt, 'task1');
    assert.ok(result.wordCount >= 150, `Word count ${result.wordCount} should be >= 150`);
    assert.ok(result.scores.tr <= 5.5, `Task 1 without overview should cap TA at 5.5, got ${result.scores.tr}`);
    assert.ok(result.feedback.areasToImprove.some(f => f.toLowerCase().includes('overview')), 'Must note missing overview');
  });

  it('scores Band 7.5+ for a well-structured Academic Task 2 essay with strong AWL vocabulary', () => {
    const prompt = TASK_2_PROMPTS[0];
    const strongEssay = `It is often asserted that rapid advancements in artificial intelligence and industrial automation will inevitably trigger widespread technological unemployment across the global economy. While critics contend that robotic mechanization displaces manual livelihoods, I firmly believe that these technological innovations generate substantial new economic opportunities when coupled with adaptive government policies.

To begin with, contemporary industrial history clearly demonstrates that technological innovation fundamentally transforms labor markets rather than simply depleting them. For instance, the advent of computerized personal computing eliminated traditional clerical typists; however, it simultaneously generated millions of highly compensated software engineering, network administration, and cybersecurity professions worldwide. Furthermore, empirical economic research confirms that automated machinery enhances operational productivity, thereby reducing production expenditure and stimulating aggregate consumer demand across adjacent commercial sectors.

In addition to expanding technological fields, automation relieves human laborers from hazardous, repetitive occupations, enabling a structural transition toward intellectual and creative industries. Autonomous systems currently conduct high-risk mining extraction, chemical synthesis, and monotonous assembly line fabrication with superior precision. Consequently, employees can redirect their professional energy toward strategic management, creative design, and personalized healthcare, fields that require intrinsic human empathy and complex problem-solving abilities that machines cannot replicate.

On the other hand, the transition toward an automated enterprise presents legitimate socioeconomic challenges that require structured policy intervention. Specifically, lower-skilled workers face heightened redundancy risks if vocational retraining programs remain inaccessible. Consequently, policymakers must allocate comprehensive educational resources to facilitate workforce transition. Establishing proactive reskilling initiatives ensures that vulnerable demographics acquire indispensable technical proficiencies demanded by contemporary industry.

In conclusion, although automation undoubtedly disrupts outdated occupational structures, its capacity to stimulate macroeconomic growth and generate innovative careers far outweighs its transitional drawbacks. Therefore, investing in educational adaptation allows society to maximize these technological advantages effectively.`;

    const result = evaluateEssay(strongEssay, prompt, 'task2');
    assert.ok(result.wordCount >= 250, `Word count ${result.wordCount} must exceed 250`);
    assert.ok(result.scores.overall >= 7.5, `Overall band should be >= 7.5, got ${result.scores.overall}`);
    assert.ok(result.scores.tr >= 7.5, `TR should be >= 7.5, got ${result.scores.tr}`);
    assert.ok(result.scores.cc >= 7.0, `CC should be >= 7.0, got ${result.scores.cc}`);
    assert.ok(result.scores.lr >= 7.5, `LR should be >= 7.5, got ${result.scores.lr}`);
    assert.ok(result.scores.gra >= 7.0, `GRA should be >= 7.0, got ${result.scores.gra}`);
    assert.ok(result.metrics.awlCount >= 15, 'Should identify at least 15 AWL terms');
  });

  it('correctly rounds composite scores per IELTS 0.25 / 0.75 rounding convention', () => {
    const prompt = TASK_2_PROMPTS[0];
    const result = evaluateEssay('Sample text', prompt, 'task2');
    const validBands = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0];
    assert.ok(validBands.includes(result.scores.overall), 'Overall score must be a valid IELTS 0.5 band increment');
  });
});
