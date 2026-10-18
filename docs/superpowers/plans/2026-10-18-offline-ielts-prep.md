# Offline IELTS Academic Practice & Review System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 100% offline, mobile-first Progressive Web App (PWA) tailored for the Infinix Hot 70 smartphone that enables IELTS Academic candidates to practice Task 1 and Task 2 under timed or guided conditions, receiving instant deterministic Band 1.0–9.0 scoring and diagnostic feedback across all four official IELTS criteria.

**Architecture:** A single-page client-side React + TypeScript application packaged with Vite and a Service Worker for complete offline operation. Evaluates essay submissions in-browser using a deterministic linguistic scoring engine (AWL dictionary matching, transitional device analysis, sentence complexity metrics, and overview/thesis detection) and persists essay history in IndexedDB.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Vitest, Canvas/SVG for Task 1 charts, IndexedDB (`idb-keyval`), and `vite-plugin-pwa`.

**Spec:** `docs/superpowers/specs/2026-10-18-offline-ielts-prep-design.md`

## Global Constraints
- Target device: Infinix Hot 70 (Android / Chrome mobile viewport 375px–440px).
- Zero external server network calls during practice, drafting, or scoring.
- UI styling must adhere strictly to user design tokens: semantic classes (`bg-background`, `text-foreground`, `border-border/40`), 8px spatial grid, zero emoji clutter, Lucide SVG icons.
- All code and project files reside inside `C:\Users\USER\Desktop\Antigravity_Workspace\ielts-offline-prep`.

## Review Focus
- Extremely short essays (< 50 words) should fail gracefully with diagnostic warnings rather than crashing the scoring engine.
- Essays pasted with irregular spacing, excessive line breaks, or unusual unicode characters must be normalized before tokenization.
- Accidental app switches or mobile browser reloads must not erase in-progress drafts.
- Task 1 essays lacking an overview paragraph must correctly cap the Task Achievement score per official IELTS rubric.
- Service worker caching must reliably serve the app shell and prompt bank when completely disconnected from the internet.

---

### Task 1: Project Scaffolding, PWA Setup & Test Framework

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Test: `tests/setup.test.ts`

**Interfaces:**
- Produces: Base React + TypeScript development and testing harness with Tailwind CSS and Vitest test runner.

- [ ] **Step 1: Write initial sanity test**
```typescript
// tests/setup.test.ts
import { describe, it, expect } from 'vitest';

describe('Project Environment', () => {
  it('runs vitest properly in Node environment', () => {
    expect(true).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails (before setup)**
Run: `npx vitest run tests/setup.test.ts`
Expected: FAIL (missing dependencies / config)

- [ ] **Step 3: Scaffold project files, install dependencies and configure Vite/Tailwind**
Initialize `package.json`, install `react`, `react-dom`, `lucide-react`, `idb-keyval`, `vite`, `typescript`, `tailwindcss`, `vitest`, and configure `vite.config.ts` with PWA plugin.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/setup.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: scaffold project with vite, tailwind, pwa, and vitest"
```

---

### Task 2: Offline Prompt Bank & Linguistic Dictionaries

**Files:**
- Create: `src/types/ielts.ts`
- Create: `src/data/task1Prompts.ts`
- Create: `src/data/task2Prompts.ts`
- Create: `src/data/academicWordList.ts`
- Create: `src/data/cohesiveDevices.ts`
- Test: `tests/data/promptBank.test.ts`

**Interfaces:**
- Consumes: Type definitions for IELTS tasks, prompts, and criteria.
- Produces:
  - `TASK_1_PROMPTS`: Array of Task 1 prompts with SVG chart descriptions.
  - `TASK_2_PROMPTS`: Array of Task 2 essay prompts categorized by question type.
  - `ACADEMIC_WORD_LIST`: Set of 570+ AWL word stems.
  - `COHESIVE_DEVICES`: Mapped categories of transitional phrases (addition, contrast, result, condition, sequence, summary).

- [ ] **Step 1: Write the failing tests for prompt bank and dictionaries**
```typescript
// tests/data/promptBank.test.ts
import { describe, it, expect } from 'vitest';
import { TASK_1_PROMPTS } from '../../src/data/task1Prompts';
import { TASK_2_PROMPTS } from '../../src/data/task2Prompts';
import { ACADEMIC_WORD_LIST } from '../../src/data/academicWordList';
import { COHESIVE_DEVICES } from '../../src/data/cohesiveDevices';

describe('Prompt Bank & Dictionaries', () => {
  it('contains at least 10 Task 1 academic prompts with valid SVG definitions', () => {
    expect(TASK_1_PROMPTS.length).toBeGreaterThanOrEqual(10);
    expect(TASK_1_PROMPTS[0]).toHaveProperty('chartSvg');
  });

  it('contains at least 15 Task 2 academic essay prompts', () => {
    expect(TASK_2_PROMPTS.length).toBeGreaterThanOrEqual(15);
    expect(TASK_2_PROMPTS[0]).toHaveProperty('category');
  });

  it('contains Academic Word List entries and cohesive device groupings', () => {
    expect(ACADEMIC_WORD_LIST.has('analyze')).toBe(true);
    expect(COHESIVE_DEVICES.contrast).toContain('however');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/data/promptBank.test.ts`
Expected: FAIL (modules not found)

- [ ] **Step 3: Implement IELTS data types, prompt banks, AWL, and cohesive devices**
Create `src/types/ielts.ts` defining `IELTSPrompt`, `TaskType`, `BandScores`, and `EssayEvaluation`. Populate curated Task 1 visual prompts with inline SVG charts and Task 2 prompts covering all essay types.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/data/promptBank.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/types/ src/data/ tests/data/
git commit -m "feat: add curated offline prompt bank and linguistic dictionaries"
```

---

### Task 3: Client-Side Deterministic Scoring Engine

**Files:**
- Create: `src/engine/tokenizer.ts`
- Create: `src/engine/taskAchievement.ts`
- Create: `src/engine/coherenceCohesion.ts`
- Create: `src/engine/lexicalResource.ts`
- Create: `src/engine/grammaticalRange.ts`
- Create: `src/engine/scoringEngine.ts`
- Test: `tests/engine/scoringEngine.test.ts`

**Interfaces:**
- Consumes: Prompt types and linguistic dictionaries from Task 2.
- Produces:
  - `evaluateEssay(text: string, prompt: IELTSPrompt): EssayEvaluation`
  - Returns overall band (1.0–9.0 in 0.5 steps) + 4 sub-scores + structured feedback arrays.

- [ ] **Step 1: Write the failing tests for scoring engine**
```typescript
// tests/engine/scoringEngine.test.ts
import { describe, it, expect } from 'vitest';
import { evaluateEssay } from '../../src/engine/scoringEngine';
import { TASK_2_PROMPTS } from '../../src/data/task2Prompts';

describe('Offline IELTS Scoring Engine', () => {
  it('penalizes essays under 250 words for Task 2', () => {
    const prompt = TASK_2_PROMPTS[0];
    const shortText = 'This is a very short essay that does not meet the word requirement.';
    const result = evaluateEssay(shortText, prompt);
    expect(result.scores.tr).toBeLessThanOrEqual(5.0);
    expect(result.feedback.areasToImprove.some(f => f.includes('word count'))).toBe(true);
  });

  it('rewards academic vocabulary and cohesive devices with higher bands', () => {
    const prompt = TASK_2_PROMPTS[0];
    const strongEssay = `It is often argued that technological advancements have significantly altered human interactions. While some individuals contend that digital communication isolates people, I firmly believe that it fosters global connectivity when utilized judiciously.

Firstly, contemporary digital platforms enable instantaneous communication across geographical boundaries. Furthermore, empirical research demonstrates that collaborative tools enhance workplace productivity. Consequently, modern society benefits substantially from these technological developments.

In conclusion, although face-to-face interactions remain essential, technological innovation undoubtedly provides substantial societal advantages. Therefore, adopting a balanced approach ensures optimal outcomes.`;
    const result = evaluateEssay(strongEssay, prompt);
    expect(result.scores.overall).toBeGreaterThanOrEqual(7.0);
    expect(result.scores.lr).toBeGreaterThanOrEqual(7.0);
    expect(result.scores.cc).toBeGreaterThanOrEqual(7.0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/engine/scoringEngine.test.ts`
Expected: FAIL (evaluateEssay not defined)

- [ ] **Step 3: Implement tokenizer, sub-score evaluators, and composite scoring engine**
Implement regex-based tokenizer, AWL density calculation, Type-Token Ratio, paragraph transition density, complex sentence detector, and official IELTS 0.25/0.75 score rounding.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/engine/scoringEngine.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/engine/ tests/engine/
git commit -m "feat: implement offline deterministic IELTS scoring engine"
```

---

### Task 4: Local Storage, Auto-Save & History Service

**Files:**
- Create: `src/services/storageService.ts`
- Test: `tests/services/storageService.test.ts`

**Interfaces:**
- Consumes: `idb-keyval` or native IndexedDB for local offline persistence.
- Produces:
  - `saveDraft(promptId: string, text: string): Promise<void>`
  - `getDraft(promptId: string): Promise<string | null>`
  - `saveSubmission(record: EssayRecord): Promise<void>`
  - `getHistory(): Promise<EssayRecord[]>`

- [ ] **Step 1: Write the failing tests for storage service**
```typescript
// tests/services/storageService.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { saveDraft, getDraft, saveSubmission, getHistory } from '../../src/services/storageService';

describe('Offline Storage Service', () => {
  beforeEach(async () => {
    localStorage.clear();
  });

  it('saves and retrieves draft text offline', async () => {
    await saveDraft('task2-01', 'Draft content in progress...');
    const draft = await getDraft('task2-01');
    expect(draft).toBe('Draft content in progress...');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/services/storageService.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement storage service with IndexedDB and localStorage fallback**
Implement durable draft autosaving (debounced on keyup) and full submission history storage.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/services/storageService.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/services/ tests/services/
git commit -m "feat: implement local draft autosave and essay history storage"
```

---

### Task 5: Mobile Practice Interface (Exam Simulator & Guided Coach)

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/PromptViewer.tsx`
- Create: `src/components/ExamTimer.tsx`
- Create: `src/components/WordCounter.tsx`
- Create: `src/components/ExamEditor.tsx`
- Create: `src/components/GuidedCoachEditor.tsx`
- Create: `src/components/PracticeWorkspace.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `TASK_1_PROMPTS`, `TASK_2_PROMPTS`, `storageService`.
- Produces: Mobile-optimized writing workspace supporting both Exam Simulator and Guided Coach modes with responsive chart rendering.

- [ ] **Step 1: Write test for practice workspace component**
```typescript
// tests/components/PracticeWorkspace.test.tsx
import { describe, it, expect } from 'vitest';
// test basic render and timer toggle
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/components/PracticeWorkspace.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement Mobile Practice Workspace with strict 8px layout rhythm**
Build the mobile header with countdown timer, word counter badge, Task 1/2 switcher, SVG prompt display, and tabbed Guided Coach editor.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/components/PracticeWorkspace.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/ tests/components/
git commit -m "feat: add mobile practice workspace with exam simulator and guided coach"
```

---

### Task 6: Diagnostic Feedback Modal & Performance Analytics

**Files:**
- Create: `src/components/ScoreReportModal.tsx`
- Create: `src/components/SubScoreBadge.tsx`
- Create: `src/components/HistoryDrawer.tsx`
- Modify: `src/components/PracticeWorkspace.tsx`

**Interfaces:**
- Consumes: `evaluateEssay` from Task 3 and `saveSubmission` from Task 4.
- Produces: Instant score breakdown modal with Band badge, 4 criteria progress meters, sentence rewrites, and essay history list.

- [ ] **Step 1: Write test for ScoreReportModal**
```typescript
// tests/components/ScoreReportModal.test.tsx
import { describe, it, expect } from 'vitest';
// verify that band scores and feedback bullets render properly
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/components/ScoreReportModal.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement ScoreReportModal and HistoryDrawer**
Create visual score card displaying overall band, criteria breakdown (TR, CC, LR, GRA), highlighted strengths, weaknesses, and academic vocabulary recommendations.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/components/ScoreReportModal.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/components/ tests/components/
git commit -m "feat: implement diagnostic score report and essay history viewer"
```

---

### Task 7: PWA Caching & Offline End-to-End Verification

**Files:**
- Modify: `vite.config.ts` (Service Worker caching strategy)
- Create: `public/manifest.json`
- Create: `public/sw.js` (or Vite PWA service worker)
- Create: `public/icons/` (app icons)
- Create: `README.md` (instructions for phone setup and home screen installation)

**Interfaces:**
- Produces: Fully functional offline build deployable to local Wi-Fi or phone storage.

- [ ] **Step 1: Build the production bundle**
Run: `npm run build`
Expected: Successful build in `dist/` with zero TypeScript errors.

- [ ] **Step 2: Verify all unit tests pass**
Run: `npx vitest run`
Expected: All tests pass (100% test suite green).

- [ ] **Step 3: Test local production preview with service worker**
Run: `npx vite preview --host 0.0.0.0 --port 4173`
Expected: App serves on local network, registers service worker, and caches all assets.

- [ ] **Step 4: Commit and finalize**
```bash
git add .
git commit -m "feat: complete offline PWA setup and verification"
```
