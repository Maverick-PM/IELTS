import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { CDIeltsEngine } from '../public/js/engine/cdIeltsEngine.js';

describe('CD-IELTS Authentic Exam Engine', () => {
  let engine;

  beforeEach(() => {
    // Mock minimal localStorage
    const store = {};
    global.localStorage = {
      getItem: (key) => store[key] || null,
      setItem: (key, val) => { store[key] = String(val); },
      removeItem: (key) => { delete store[key]; },
      clear: () => { Object.keys(store).forEach(k => delete store[k]); }
    };
    engine = new CDIeltsEngine();
  });

  it('correctly toggles CD-IELTS Exam Mode and persists state', () => {
    assert.equal(engine.isCDModeActive(), false);
    
    const active = engine.setCDMode(true);
    assert.equal(active, true);
    assert.equal(engine.isCDModeActive(), true);
    assert.equal(global.localStorage.getItem('ielts_cd_mode'), 'true');

    engine.setCDMode(false);
    assert.equal(engine.isCDModeActive(), false);
    assert.equal(global.localStorage.getItem('ielts_cd_mode'), 'false');
  });

  it('serializes and retrieves text highlights per reading passage', () => {
    const passageId = 'academic_reading_t1_p1';
    
    engine.addHighlight(passageId, {
      text: 'The advent of agricultural surplus',
      startOffset: 120,
      endOffset: 154,
      color: '#fef08a' // soft official yellow
    });

    const highlights = engine.getHighlights(passageId);
    assert.equal(highlights.length, 1);
    assert.equal(highlights[0].text, 'The advent of agricultural surplus');
    assert.equal(highlights[0].startOffset, 120);

    engine.clearHighlights(passageId);
    assert.equal(engine.getHighlights(passageId).length, 0);
  });

  it('evaluates keyboard shortcuts and ignores typing in form inputs', () => {
    let nextCalled = false;
    let prevCalled = false;
    let highlightCalled = false;

    engine.bindShortcuts({
      onNext: () => { nextCalled = true; },
      onPrev: () => { prevCalled = true; },
      onHighlight: () => { highlightCalled = true; }
    });

    // Valid Alt+N
    const altNEvent = { altKey: true, key: 'n', target: { tagName: 'DIV' }, preventDefault: () => {} };
    engine.handleKeyDown(altNEvent);
    assert.equal(nextCalled, true);

    // Valid Alt+P
    const altPEvent = { altKey: true, key: 'p', target: { tagName: 'DIV' }, preventDefault: () => {} };
    engine.handleKeyDown(altPEvent);
    assert.equal(prevCalled, true);

    // Ignored when typing inside textarea
    nextCalled = false;
    const inputAltNEvent = { altKey: true, key: 'n', target: { tagName: 'TEXTAREA' }, preventDefault: () => {} };
    engine.handleKeyDown(inputAltNEvent);
    assert.equal(nextCalled, false);
  });
});
