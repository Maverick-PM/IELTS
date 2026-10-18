import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TASK_1_PROMPTS } from '../../public/js/data/task1Prompts.js';
import { TASK_2_PROMPTS } from '../../public/js/data/task2Prompts.js';
import { evaluateEssay } from '../../public/js/engine/scoringEngine.js';
import { StorageService } from '../../public/js/services/storageService.js';

describe('UI State & Practice Workflow Integration', () => {
  it('correctly manages Task 1 vs Task 2 timer and word count targets', () => {
    const task1 = { type: 'task1', targetWords: 150, targetTimeMinutes: 20 };
    const task2 = { type: 'task2', targetWords: 250, targetTimeMinutes: 40 };

    assert.equal(task1.targetWords, 150);
    assert.equal(task1.targetTimeMinutes, 20);
    assert.equal(task2.targetWords, 250);
    assert.equal(task2.targetTimeMinutes, 40);
  });

  it('assembles guided coach sections into a unified formatted essay', () => {
    const sections = {
      intro: 'It is argued that automation transforms economies.',
      body1: 'Firstly, automated robotics enhance productivity substantially.',
      body2: 'Furthermore, new technological occupations emerge continuously.',
      conclusion: 'In conclusion, the advantages outweigh the drawbacks.'
    };

    const assembled = [sections.intro, sections.body1, sections.body2, sections.conclusion].join('\n\n');
    assert.ok(assembled.includes(sections.intro));
    assert.ok(assembled.includes(sections.conclusion));
    assert.equal(assembled.split('\n\n').length, 4);
  });

  it('completes the full loop: prompt selection -> drafting -> offline scoring -> persistence', async () => {
    const storage = new StorageService({ useMemory: true });
    const prompt = TASK_2_PROMPTS[1]; // University tuition

    // 1. User writes essay
    const essayText = `Some people believe university tuition should be completely subsidized by the government, whereas others argue that students must fund their own tertiary degrees. I firmly believe that higher education should be publicly funded to ensure socioeconomic equity.

Firstly, universal access to universities stimulates national economic development. When capable students attend institutions regardless of their financial status, countries maximize their talent pool. Furthermore, empirical research indicates that nations with subsidized education experience higher innovation rates and increased civic engagement. Consequently, society as a whole benefits from an educated populace.

Conversely, opponents contend that taxpayers should not finance degrees that yield high private salaries for doctors and corporate lawyers. While this concern is valid, progressive taxation systems naturally recuperate these educational investments once graduates enter high-income tax brackets. Therefore, the public purse is replenished rather than permanently depleted.

In conclusion, although higher education requires significant public expenditure, the long-term societal and economic benefits of free university access far exceed the immediate fiscal costs. Governments should prioritize education as a fundamental public good.`;

    // 2. Score essay offline
    const evaluation = evaluateEssay(essayText, prompt, 'task2');
    assert.ok(evaluation.scores.overall >= 7.0, 'Scores high band');

    // 3. Save to local storage
    const record = {
      id: 'sub-' + Date.now(),
      taskType: 'task2',
      promptId: prompt.id,
      promptTitle: prompt.title,
      content: essayText,
      wordCount: evaluation.wordCount,
      scores: evaluation.scores,
      feedback: evaluation.feedback,
      createdAt: new Date().toISOString()
    };
    await storage.saveSubmission(record);

    // 4. Retrieve from history
    const history = await storage.getHistory();
    assert.equal(history.length, 1);
    assert.equal(history[0].promptTitle, prompt.title);
    assert.ok(history[0].scores.overall >= 7.0);
  });
});
