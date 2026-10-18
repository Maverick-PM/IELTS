# Offline IELTS Academic Practice & Review System - Design Document

## 1. Intent and the Why
The user is preparing for the **IELTS Academic** exam, targeting top band scores (Band 8.0–9.0). Unreliable network connectivity (such as recent ISP downtime) severely interrupted their practice schedule, preventing them from hitting their daily goal of 6 writing task essays.

They need a self-contained, 100% offline application tailored for their mobile phone (**Infinix Hot 70**, running Android / Chrome) that replicates the core practice and evaluation loop: selecting an official IELTS prompt, writing under timed or guided conditions, and receiving instant band scoring and diagnostic feedback across the four official IELTS evaluation criteria without sending any requests to external servers.

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
- **100% Offline Capability**: Runs entirely on the device without requiring an internet connection after initial installation/caching via Progressive Web App (PWA) standards.
- **IELTS Academic Writing Support**:
  - **Task 1**: Visual data reports (bar charts, line graphs, tables, pie charts rendered as responsive offline SVGs) with a 150-word minimum and 20-minute timer.
  - **Task 2**: Academic discursive/argumentative essays with a 250-word minimum and 40-minute timer.
- **Dual Practice Modes**:
  - *Exam Simulator Mode*: Strict timed conditions, distraction-free text editor, live word counter with minimum-length indicators, and post-submission examiner report.
  - *Guided Coach Mode*: Section-by-section breakdown (Intro, Body 1, Body 2, Conclusion) with live offline counters for academic vocabulary, linking words, and paragraph balance.
- **On-Device Scoring & Diagnostic Review Engine**:
  - Client-side deterministic evaluation algorithms scoring the four official IELTS criteria on a 1.0–9.0 band scale (in 0.5 increments):
    1. *Task Achievement (Task 1) / Task Response (Task 2)*: Word count compliance, overview paragraph detection (Task 1), thesis and conclusion alignment (Task 2), prompt keyword coverage.
    2. *Coherence & Cohesion (CC)*: Paragraph distribution, transition/cohesive device density and diversity, penalty for overused or repetitive linkers.
    3. *Lexical Resource (LR)*: Type-Token Ratio (vocabulary diversity), detection of Academic Word List (AWL) and CEFR C1/C2 band-boosting vocabulary, detection of repetitive informal phrasing with academic upgrade suggestions.
    4. *Grammatical Range & Accuracy (GRA)*: Sentence length variation, complex sentence indicators (subordination, passive voice, relative clauses, conditionals), punctuation and run-on flags.
- **Local Persistence & History**:
  - All written essays, prompts, timestamps, and feedback reports are stored locally in the browser's IndexedDB / LocalStorage.
  - Allows reviewing past essays, comparing versions, and tracking band score progression offline.
- **Mobile-First UX for Infinix Hot 70**:
  - Responsive, touch-friendly UI conforming to modern mobile design standards (8px spatial grid, semantic design tokens, clean typography, zero emoji clutter, Lucide SVG icons).

### Non-Goals
- Cloud user account synchronization or multi-device login (all data remains locally on the device).
- Real-time cloud audio/speaking assessment or listening audio streaming in this initial release (focused on Writing first).
- Heavy multi-gigabyte neural language model downloads that could freeze mobile memory or deplete battery life on mid-range Android devices.

### Anti-Goals
- Do not require any active internet connection or API keys to score essays.
- Do not produce arbitrary random scores; every band deduction or praise must be backed by concrete linguistic heuristics and clear explanations.
- Do not wipe user essay drafts on accidental page refreshes or app switches.

---

## 3. Constraints & Target Environment
- **Primary Device**: Infinix Hot 70 (Android smartphone with Chrome browser).
- **Form Factor**: Mobile screen (375px–440px viewport width) with virtual software keyboard support (inputs must remain visible while typing).
- **Storage & Runtime**: Runs inside standard browser sandbox with Service Worker caching and IndexedDB storage.
- **Design Tokens**: Standard shadcn/Tailwind design tokens (`bg-background`, `text-foreground`, `border-border/40`, subtle elevation, Lucide icons, no emojis).

---

## 4. Architectural Decisions & Specifications

### 4.1 Delivery & Packaging: Progressive Web App (PWA)
- Single-page application with a `manifest.json` and a lightweight Service Worker (`sw.js`).
- Pre-caches all app shell assets (HTML, CSS, JS, icon sets, offline prompt banks, vocabulary lists).
- User installs the app via Chrome's "Add to Home screen" / "Install App" menu on their Infinix Hot 70.

### 4.2 Offline Prompt Bank
- Embedded JSON library of curated IELTS Academic prompts:
  - **20+ Task 1 Prompts**: Line graphs, bar charts, pie charts, and tables rendered cleanly via inline SVGs with key data highlights and sample overview structures.
  - **30+ Task 2 Prompts**: Categorized by essay type (Opinion / Agree or Disagree, Discussion of Both Views, Problem & Solution, Advantages & Disadvantages).

### 4.3 Client-Side Scoring Engine Architecture
1. **Text Normalizer & Tokenizer**:
   - Extracts paragraphs, sentences, words, and punctuation.
   - Computes total words, total sentences, mean sentence length, and paragraph count.
2. **Academic Lexicon Analyzer**:
   - Contains a compiled offline dictionary of the Academic Word List (AWL, 570 word families) and common C1/C2 descriptors.
   - Computes Academic Vocabulary Density = (AWL Words / Total Words) * 100%.
   - Computes Type-Token Ratio (TTR) with length adjustment.
3. **Cohesion & Transition Analyzer**:
   - Tracks 6 categories of cohesive devices: Addition (*furthermore, moreover*), Contrast (*however, conversely*), Result (*consequently, therefore*), Exemplification (*for instance*), Sequencing (*initially, subsequently*), Concluding (*to summarize*).
   - Verifies appropriate distribution across paragraphs.
4. **Task Structure & Overview Detector**:
   - For Task 1: Scans for an overview indicator paragraph (*overall, it is clear that, in summary*) and data comparison keywords.
   - For Task 2: Analyzes introduction for stance indicators (*this essay argues, I firmly believe*) and conclusion coherence.
5. **Score Aggregator**:
   - Maps raw metric values to IELTS 1–9 band descriptors using calibrated official rubric thresholds.
   - Calculates overall band = rounded average of the 4 sub-scores (standard IELTS 0.25/0.75 rounding rules).

### 4.4 Local Data Storage
- Local IndexedDB storage stores essay records:
  - `id`: UUID string.
  - `taskType`: "task1" | "task2".
  - `promptId`: string.
  - `promptText`: string.
  - `content`: string (user's written response).
  - `wordCount`: integer.
  - `timeSpentSeconds`: integer.
  - `createdAt`: ISO timestamp.
  - `scores`: `{ overall: number, tr: number, cc: number, lr: number, gra: number }`.
  - `feedback`: `{ strengths: string[], areasToImprove: string[], suggestions: string[] }`.

---

## 5. What is Left to the Builder
- Choice of client-side build tooling (e.g. lightweight Vite + React / TypeScript or vanilla modern JS with Tailwind).
- Exact visual rendering of Task 1 SVG chart graphics.
- Fine-tuning of regex patterns and keyword dictionaries for the offline scoring engine.
- Implementation of the Service Worker cache manifest and offline install prompt.
