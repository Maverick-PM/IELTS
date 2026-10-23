// CD-IELTS Authentic Exam Engine
// Handles Official British Council / IDP CD-IELTS Mode, Keyboard Shortcuts, and Passage Text Highlighting

export class CDIeltsEngine {
  constructor() {
    this.storageKeyPrefix = 'ielts_highlights_';
    this.modeKey = 'ielts_cd_mode';
    this.shortcuts = {
      onNext: null,
      onPrev: null,
      onHighlight: null
    };
    this.activePassageId = null;
    this.highlightTooltip = null;
  }

  isCDModeActive() {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem(this.modeKey) === 'true';
  }

  setCDMode(active) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.modeKey, active ? 'true' : 'false');
    }
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('cd-ielts-active', !!active);
    }
    return !!active;
  }

  addHighlight(passageId, highlight) {
    const list = this.getHighlights(passageId);
    list.push({
      id: 'hl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      text: highlight.text || '',
      startOffset: highlight.startOffset || 0,
      endOffset: highlight.endOffset || 0,
      color: highlight.color || '#fef08a',
      timestamp: Date.now()
    });
    this.saveHighlights(passageId, list);
    return list;
  }

  getHighlights(passageId) {
    if (typeof localStorage === 'undefined' || !passageId) return [];
    try {
      const raw = localStorage.getItem(this.storageKeyPrefix + passageId);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  saveHighlights(passageId, list) {
    if (typeof localStorage === 'undefined' || !passageId) return;
    try {
      localStorage.setItem(this.storageKeyPrefix + passageId, JSON.stringify(list));
    } catch (e) {
      console.warn('Highlight save notice:', e);
    }
  }

  clearHighlights(passageId) {
    if (typeof localStorage === 'undefined' || !passageId) return;
    localStorage.removeItem(this.storageKeyPrefix + passageId);
  }

  bindShortcuts(callbacks) {
    this.shortcuts = { ...this.shortcuts, ...callbacks };
  }

  handleKeyDown(e) {
    if (!e) return;
    const tag = e.target && e.target.tagName ? e.target.tagName.toUpperCase() : '';
    // Do not intercept hotkeys if candidate is typing in form inputs or contenteditables
    if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) {
      return;
    }

    if (e.altKey) {
      const key = (e.key || '').toLowerCase();
      if (key === 'n') {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (this.shortcuts.onNext) this.shortcuts.onNext();
      } else if (key === 'p') {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (this.shortcuts.onPrev) this.shortcuts.onPrev();
      } else if (key === 'h') {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (this.shortcuts.onHighlight) this.shortcuts.onHighlight();
      }
    }
  }

  // DOM Integration for Highlighting Passages
  initSelectionListener(passageContainerEl, getPassageIdFn) {
    if (typeof document === 'undefined' || !passageContainerEl) return;

    passageContainerEl.addEventListener('mouseup', () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.toString().trim().length === 0) {
        this.hideTooltip();
        return;
      }

      const selectedText = selection.toString().trim();
      const passageId = typeof getPassageIdFn === 'function' ? getPassageIdFn() : this.activePassageId;
      if (!passageId) return;

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      this.showTooltip(rect, () => {
        this.addHighlight(passageId, {
          text: selectedText,
          startOffset: range.startOffset,
          endOffset: range.endOffset,
          color: '#fef08a'
        });
        this.renderSelectionHighlight(range);
        this.hideTooltip();
        selection.removeAllRanges();
      });
    });

    document.addEventListener('mousedown', (e) => {
      if (this.highlightTooltip && !this.highlightTooltip.contains(e.target)) {
        this.hideTooltip();
      }
    });
  }

  showTooltip(rect, onHighlightClick) {
    if (typeof document === 'undefined') return;
    this.hideTooltip();

    const tip = document.createElement('div');
    tip.className = 'cd-highlight-tooltip';
    tip.style.position = 'fixed';
    tip.style.left = `${rect.left + rect.width / 2 - 40}px`;
    tip.style.top = `${rect.top - 36}px`;
    tip.style.zIndex = '9999';
    tip.innerHTML = `<button type="button" class="btn-highlight-act">🖍️ Highlight</button>`;

    const btn = tip.querySelector('.btn-highlight-act');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      onHighlightClick();
    });

    document.body.appendChild(tip);
    this.highlightTooltip = tip;
  }

  hideTooltip() {
    if (this.highlightTooltip && this.highlightTooltip.parentNode) {
      this.highlightTooltip.parentNode.removeChild(this.highlightTooltip);
    }
    this.highlightTooltip = null;
  }

  renderSelectionHighlight(range) {
    if (typeof document === 'undefined' || !range) return;
    try {
      const mark = document.createElement('mark');
      mark.className = 'cd-ielts-hl';
      mark.style.backgroundColor = '#fef08a';
      mark.style.color = '#111827';
      mark.style.padding = '1px 2px';
      mark.style.borderRadius = '2px';
      range.surroundContents(mark);
    } catch (e) {
      // In case selection spans across element boundaries
    }
  }
}
