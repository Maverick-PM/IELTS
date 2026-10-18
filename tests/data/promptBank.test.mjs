import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TASK_1_PROMPTS } from '../../public/js/data/task1Prompts.js';
import { TASK_2_PROMPTS } from '../../public/js/data/task2Prompts.js';
import { ACADEMIC_WORD_LIST } from '../../public/js/data/academicWordList.js';
import { COHESIVE_DEVICES } from '../../public/js/data/cohesiveDevices.js';

describe('Prompt Bank & Dictionaries', () => {
  it('contains at least 10 Task 1 academic prompts with valid SVG definitions', () => {
    assert.ok(TASK_1_PROMPTS.length >= 10, 'Must have at least 10 Task 1 prompts');
    assert.ok(TASK_1_PROMPTS[0].chartSvg, 'Task 1 prompt must have chartSvg');
    assert.ok(TASK_1_PROMPTS[0].title, 'Task 1 prompt must have title');
    assert.ok(TASK_1_PROMPTS[0].keyFeatures, 'Task 1 prompt must have keyFeatures');
  });

  it('contains at least 15 Task 2 academic essay prompts across 4 question categories', () => {
    assert.ok(TASK_2_PROMPTS.length >= 15, 'Must have at least 15 Task 2 prompts');
    assert.ok(TASK_2_PROMPTS[0].category, 'Task 2 prompt must have category');
    assert.ok(TASK_2_PROMPTS[0].question, 'Task 2 prompt must have question');
    const categories = new Set(TASK_2_PROMPTS.map(p => p.category));
    assert.ok(categories.has('opinion'), 'Must have opinion essays');
    assert.ok(categories.has('discussion'), 'Must have discussion essays');
    assert.ok(categories.has('problem-solution'), 'Must have problem-solution essays');
  });

  it('contains comprehensive Academic Word List stems and categorized cohesive devices', () => {
    assert.ok(ACADEMIC_WORD_LIST.has('analyze'), 'AWL must include analyze');
    assert.ok(ACADEMIC_WORD_LIST.has('significant'), 'AWL must include significant');
    assert.ok(ACADEMIC_WORD_LIST.has('indicate'), 'AWL must include indicate');
    assert.ok(ACADEMIC_WORD_LIST.size >= 500, 'AWL must have at least 500 words');

    assert.ok(Array.isArray(COHESIVE_DEVICES.contrast), 'Must have contrast devices');
    assert.ok(COHESIVE_DEVICES.contrast.includes('however'), 'Must include however');
    assert.ok(COHESIVE_DEVICES.addition.includes('furthermore'), 'Must include furthermore');
    assert.ok(COHESIVE_DEVICES.result.includes('consequently'), 'Must include consequently');
  });
});
