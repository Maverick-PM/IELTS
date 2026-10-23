# IELTS Academic Exam-Readiness Upgrades Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the offline IELTS Academic suite into an authentic British Council / IDP CD-IELTS test simulator featuring official desktop layout with passage highlighting, Speaking Part 2 real-time fluency & filler analytics, and an offline Mistake Bank with rolling Band Readiness tracking.

**Architecture:** Modular vanilla ES6 architecture with IndexedDB persistence, ServiceWorker offline caching, Web Speech API speech-to-text fluency meter, and non-destructive CD-IELTS view toggle. Bundled via esbuild into a standalone flat PWA.

**Tech Stack:** Vanilla JavaScript (ES Modules), HTML5, CSS3, Web Speech API (`webkitSpeechRecognition`), Web Audio API, IndexedDB (`idb-keyval` pattern), Node test runner (`node:test`), esbuild.

**Spec:** `C:\Users\USER\Desktop\Antigravity_Workspace\ielts-offline-prep\docs\superpowers\specs\2026-10-18-offline-ielts-prep-design.md`

## Global Constraints
- **Zero External Runtime Dependencies**: Must work 100% offline without network requests or external CDN scripts.
- **Strict Anti-Deletion**: Never delete user files permanently; use safe Recycle Bin APIs.
- **Official IELTS Rubrics**: Scoring must strictly adhere to the official 0.25/0.75 composite rounding rules.
- **Multi-Site Deployment**: Automatically deployed to both `ielts-fffc8.web.app` and `ieltsmd.web.app`.

## Review Focus
1. Text highlighting in reading passages must serialize clean DOM ranges so annotations survive test switching.
2. `webkitSpeechRecognition` must gracefully fall back to pure audio recording on browsers without speech recognition support.
3. Speaking WPM calculation must exclude pause silence intervals to prevent artificially deflating speech cadence.
4. Mistake Bank must deduplicate question entries when candidates re-attempt identical tests.
5. CD-IELTS keyboard shortcuts (`Alt+N`, `Alt+P`) must not interfere with native browser hotkeys or form inputs.

---

## Tasks

### Task 1: CD-IELTS Authentic Exam Mode (Desktop Simulation & Highlighting)
**Files:**
- Create: `public/js/engine/cdIeltsEngine.js`
- Modify: `public/css/app.css`
- Modify: `public/index.html`
- Modify: `public/js/app.js`
- Test: `tests/cdIelts.test.mjs`

- [ ] **Step 1: Write Unit Test for CD-IELTS Engine**
  - Verify mode toggle state, highlight serialization format, and keyboard shortcut dispatchers.
  - Command: `node --test tests/cdIelts.test.mjs` (must fail initially).

- [ ] **Step 2: Implement `cdIeltsEngine.js`**
  - Text selection detector with popover: `[ Highlight ]` (yellow background) and `[ Clear ]`.
  - Save highlighted offsets per reading passage in localStorage/IndexedDB.
  - Keyboard shortcut listeners: `Alt + N` (Next section/question), `Alt + P` (Previous), `Alt + H` (Highlight selection).

- [ ] **Step 3: Add CD-IELTS Theme CSS**
  - Official high-contrast theme: candidate banner header (Candidate Name, Number, Test Time), split reading pane with scrollable passage and questions.
  - Header toggle button: `💻 CD-IELTS Mode`.

- [ ] **Step 4: Wire into `app.js` & `index.html`**
  - Attach toggle to UI header and initialize highlight listeners on passage view.

- [ ] **Step 5: Verify Tests Pass**
  - Command: `npm test`

---

### Task 2: Speaking Part 2 Exam Pressure & Real-Time Fluency Meter
**Files:**
- Create: `public/js/engine/speakingFluencyEngine.js`
- Modify: `public/index.html`
- Modify: `public/js/app.js`
- Test: `tests/speakingFluency.test.mjs`

- [ ] **Step 1: Write Unit Test for Fluency Engine**
  - Verify WPM calculation: `(words / durationMinutes)` within active speech windows.
  - Verify filler word detection for: `"um"`, `"uh"`, `"like"`, `"you know"`, `"basically"`, `"actually"`.
  - Command: `node --test tests/speakingFluency.test.mjs` (must fail initially).

- [ ] **Step 2: Implement `speakingFluencyEngine.js`**
  - 60-second prep countdown timer with audio chime.
  - Digital scratchpad with 4 bullet prompts (Who, Where/When, What/Why, Personal feelings).
  - Automatic transition to 2:00 recording session.
  - `webkitSpeechRecognition` listener to stream transcript, count words, compute live WPM, and tally filler words.
  - Graceful fallback for non-Chrome environments (preserves audio recording without crashing).

- [ ] **Step 3: Update Speaking UI in `index.html`**
  - Add Part 2 60s Prep Card with Scratchpad.
  - Add live Fluency HUD: `Cadence: 135 WPM (Band 8 Optimal)`, `Fillers: 2`, `Pauses: 1`.

- [ ] **Step 4: Wire into `app.js`**
  - Connect Part 2 cue cards to prep timer and link speech recognition output to the fluency meter.

- [ ] **Step 5: Verify Tests Pass**
  - Command: `npm test`

---

### Task 3: Candidate Analytics & Personal Mistake Bank
**Files:**
- Create: `public/js/services/mistakeBankService.js`
- Modify: `public/index.html`
- Modify: `public/js/app.js`
- Test: `tests/mistakeBank.test.mjs`

- [ ] **Step 1: Write Unit Test for Mistake Bank**
  - Test logging incorrect reading/listening questions.
  - Test deduplication, mastery status, and rolling Band calculation.
  - Command: `node --test tests/mistakeBank.test.mjs` (must fail initially).

- [ ] **Step 2: Implement `mistakeBankService.js`**
  - IndexedDB storage for candidate errors across Reading and Listening.
  - Methods: `recordMistake(testType, qIndex, qText, candidateAns, correctAns, rationale)`, `getMistakes()`, `markMastered(id)`, `calculateReadiness()`.

- [ ] **Step 3: Update `app.js` Submission Handlers**
  - When candidate submits Reading or Listening test, auto-log incorrect answers into the Mistake Bank.
  - Calculate rolling estimated Overall Band Score from the latest 5 test scores across all 4 skills.

- [ ] **Step 4: Add Mistake Bank & Readiness UI in `index.html`**
  - Add "Readiness & Mistake Bank" tab/modal.
  - Display rolling band breakdown, filter by question type (e.g. True/False/Not Given, Matching Headings), and "Drill Missed Questions" button.

- [ ] **Step 5: Verify Tests Pass**
  - Command: `npm test`

---

### Task 4: Rebundle & Auto-Deploy via VS Code Git Hook
**Files:**
- Modify: `public/bundle.js`
- Modify: `public/index.html`
- Modify: `IELTS_Offline_Flat_Package/index.html`

- [ ] **Step 1: Bundle with esbuild**
  - Run: `npx esbuild public/js/app.js --bundle --minify --outfile=public/bundle.js`
  - Run flat package generator: `python make_flat_pwa_package.py`

- [ ] **Step 2: Commit & Verify Auto-Deploy Hook**
  - Run git commit to trigger `.git/hooks/post-commit`.
  - Verify output shows successful deploy to both `ielts-fffc8` and `ieltsmd`.

- [ ] **Step 3: Live Verification with Headless Chrome**
  - Run CDP audit on `https://ieltsmd.web.app` to confirm CD-IELTS mode toggle, 60s prep scratchpad, and Mistake Bank are active.
