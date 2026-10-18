import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { StorageService } from '../../public/js/services/storageService.js';

describe('Offline Storage Service', () => {
  let storage;

  beforeEach(() => {
    storage = new StorageService({ useMemory: true });
  });

  it('saves and retrieves essay draft by prompt ID', async () => {
    await storage.saveDraft('task2-01', 'In-progress argument regarding automation...');
    const retrieved = await storage.getDraft('task2-01');
    assert.equal(retrieved, 'In-progress argument regarding automation...');
  });

  it('clears draft after successful submission', async () => {
    await storage.saveDraft('task2-01', 'Some content');
    await storage.clearDraft('task2-01');
    const retrieved = await storage.getDraft('task2-01');
    assert.equal(retrieved, null);
  });

  it('saves and retrieves past essay submissions with timestamps and scores', async () => {
    const record = {
      id: 'essay-123',
      taskType: 'task2',
      promptId: 'task2-01',
      promptTitle: 'Automation & Workplace Employment',
      content: 'Full essay content here...',
      wordCount: 285,
      timeSpentSeconds: 2150,
      scores: { overall: 7.5, tr: 7.5, cc: 7.0, lr: 8.0, gra: 7.5 },
      createdAt: new Date().toISOString()
    };

    await storage.saveSubmission(record);
    const history = await storage.getHistory();

    assert.equal(history.length, 1);
    assert.equal(history[0].id, 'essay-123');
    assert.equal(history[0].scores.overall, 7.5);
  });
});
