// IELTS Academic Listening Offline Audio Player & Scoring Engine
// Features client-side SpeechSynthesis playback and official Band score evaluation

import { rawToListeningBand } from '../data/listeningTests.js';
import { normalizeAnswer } from './readingEngine.js';

export class OfflineAudioPlayer {
  constructor(options = {}) {
    this.dialogue = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.utterance = null;
    this.onProgress = options.onProgress || (() => {});
    this.onStateChange = options.onStateChange || (() => {});
    this.rate = options.rate || 0.95; // Slightly measured exam pace
  }

  loadDialogue(dialogue) {
    this.stop();
    this.dialogue = dialogue;
    this.currentIndex = 0;
  }

  play() {
    if (!('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis API not available offline in this browser.');
      return;
    }

    if (this.isPaused) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.isPlaying = true;
      this.onStateChange({ isPlaying: true, isPaused: false });
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;
    this.onStateChange({ isPlaying: true, isPaused: false });
    this.speakCurrentLine();
  }

  speakCurrentLine() {
    if (!this.isPlaying || this.currentIndex >= this.dialogue.length) {
      this.stop();
      return;
    }

    const item = this.dialogue[this.currentIndex];
    const textToSpeak = `${item.speaker} says: ${item.text}`;
    
    this.utterance = new SpeechSynthesisUtterance(textToSpeak);
    this.utterance.rate = this.rate;
    this.utterance.lang = 'en-GB';

    this.onProgress({
      currentIndex: this.currentIndex,
      totalLines: this.dialogue.length,
      currentLine: item
    });

    this.utterance.onend = () => {
      this.currentIndex++;
      // Natural 800ms conversational pause between turns
      setTimeout(() => {
        if (this.isPlaying) {
          this.speakCurrentLine();
        }
      }, 750);
    };

    this.utterance.onerror = (e) => {
      console.log('Audio playback notice:', e);
      this.currentIndex++;
      if (this.isPlaying) this.speakCurrentLine();
    };

    window.speechSynthesis.speak(this.utterance);
  }

  pause() {
    if ('speechSynthesis' in window && this.isPlaying) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.isPlaying = false;
      this.onStateChange({ isPlaying: false, isPaused: true });
    }
  }

  stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.currentIndex = 0;
    this.onStateChange({ isPlaying: false, isPaused: false });
  }
}

export function evaluateListeningTest(test, userAnswers = {}) {
  let rawScore = 0;
  const questionResults = [];

  let allQuestions = [];
  test.sections.forEach(sec => {
    allQuestions = allQuestions.concat(sec.questions);
  });

  const totalQuestions = allQuestions.length;

  for (const q of allQuestions) {
    const rawUserAns = userAnswers[q.id] || '';
    const cleanUser = normalizeAnswer(rawUserAns);
    const cleanCorrect = normalizeAnswer(q.answer);

    let isCorrect = false;

    if (cleanUser.length > 0) {
      if (cleanUser === cleanCorrect) {
        isCorrect = true;
      } else if (Array.isArray(q.acceptableAnswers)) {
        isCorrect = q.acceptableAnswers.some(acc => normalizeAnswer(acc) === cleanUser);
      }
    }

    if (isCorrect) {
      rawScore++;
    }

    questionResults.push({
      id: q.id,
      number: q.number,
      type: q.type,
      prompt: q.prompt,
      userAnswer: rawUserAns,
      correctAnswer: q.answer,
      isCorrect,
      explanation: q.explanation
    });
  }

  const band = rawToListeningBand(rawScore);

  const strengths = [];
  const areasToImprove = [];

  if (band >= 8.0) {
    strengths.push('Exceptional acoustic discernment and note-taking accuracy across all 4 sections.');
  } else if (band >= 6.5) {
    strengths.push('Strong grasp of general information; refine spelling of proper nouns and technical terms.');
  } else {
    areasToImprove.push('Practice listening for signpost words (however, on the other hand, in fact) where speakers self-correct.');
  }

  return {
    rawScore,
    totalQuestions,
    band,
    questionResults,
    strengths,
    areasToImprove
  };
}
