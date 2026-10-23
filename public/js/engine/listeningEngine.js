// IELTS Academic Listening Offline Audio Player & Scoring Engine
// Features dual-accent Cambridge voice selection, Web Audio hardware unlock, and official Band evaluation

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
    this.rate = options.rate || 0.92; // Natural exam cadence
    
    // Web Audio Context for audio pipeline unlock & chime
    this.audioCtx = null;
    this.keepAliveTimer = null;
    
    // Voice cache
    this.voices = [];
    this.speakerVoiceMap = new Map();
    this.initVoices();
  }

  initVoices() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        this.voices = window.speechSynthesis.getVoices() || [];
        window.speechSynthesis.onvoiceschanged = () => {
          this.voices = window.speechSynthesis.getVoices() || [];
          this.speakerVoiceMap.clear();
        };
      } catch (e) {
        console.warn('SpeechSynthesis init error:', e);
      }
    }
  }

  // Plays a subtle 150ms melodic chime using Web Audio API to unlock mobile audio pipeline
  unlockAudioHardware() {
    if (typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioCtx();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, this.audioCtx.currentTime); // E5 note
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.15);
    } catch (e) {
      // Non-critical hardware unlock catch
    }
  }

  getVoiceForSpeaker(speakerName = '') {
    if (this.speakerVoiceMap.has(speakerName)) {
      const cached = this.speakerVoiceMap.get(speakerName);
      if (cached && cached.voice) return cached;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const live = window.speechSynthesis.getVoices() || [];
      if (live.length > 0) this.voices = live;
    }

    const nameLower = (speakerName || '').toLowerCase();
    const isFemale = nameLower.includes('sarah') || nameLower.includes('emma') || nameLower.includes('lucy') || 
                     nameLower.includes('chloe') || nameLower.includes('dr. elena') || nameLower.includes('elena') ||
                     nameLower.includes('woman') || nameLower.includes('librarian') || nameLower.includes('receptionist') ||
                     nameLower.includes('dr. beatrice') || nameLower.includes('beatrice') || nameLower.includes('ms.');

    const gbVoices = this.voices.filter(v => v.lang && (v.lang.startsWith('en-GB') || v.lang.startsWith('en_GB')));
    const auVoices = this.voices.filter(v => v.lang && (v.lang.startsWith('en-AU') || v.lang.startsWith('en_AU')));
    const usVoices = this.voices.filter(v => v.lang && (v.lang.startsWith('en-US') || v.lang.startsWith('en_US')));
    const anyEnVoices = this.voices.filter(v => v.lang && v.lang.startsWith('en'));

    // Preference: British, Australian, US, any English, or system default
    const englishCandidates = [...gbVoices, ...auVoices, ...usVoices, ...anyEnVoices];

    let selectedVoice = null;
    if (englishCandidates.length > 0) {
      if (isFemale) {
        selectedVoice = englishCandidates.find(v => {
          const n = (v.name || '').toLowerCase();
          return n.includes('female') || n.includes('hazel') || n.includes('susan') || 
                 n.includes('zira') || n.includes('victoria') || n.includes('sonia') ||
                 n.includes('samantha') || n.includes('karen') || n.includes('catherine') ||
                 n.includes('stephanie') || n.includes('fiona');
        }) || englishCandidates[0];
      } else {
        selectedVoice = englishCandidates.find(v => {
          const n = (v.name || '').toLowerCase();
          return n.includes('male') || n.includes('george') || n.includes('oliver') || 
                 n.includes('david') || n.includes('james') || n.includes('daniel') ||
                 n.includes('tom') || n.includes('guy') || n.includes('richard');
        }) || englishCandidates[englishCandidates.length - 1];
      }
    } else if (this.voices.length > 0) {
      selectedVoice = this.voices[0];
    }

    const voiceConfig = {
      voice: selectedVoice,
      pitch: isFemale ? 1.05 : 0.95,
      rate: this.rate,
      lang: selectedVoice ? selectedVoice.lang : (typeof navigator !== 'undefined' ? (navigator.language || 'en-US') : 'en-US')
    };

    if (selectedVoice) {
      this.speakerVoiceMap.set(speakerName, voiceConfig);
    }
    return voiceConfig;
  }

  loadDialogue(dialogue) {
    this.stop();
    this.dialogue = dialogue || [];
    this.currentIndex = 0;
    this.speakerVoiceMap.clear();
  }

  startKeepAlive() {
    this.stopKeepAlive();
    this.keepAliveTimer = setInterval(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.isPlaying && !this.isPaused) {
        try {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        } catch (e) {}
      }
    }, 9000);
  }

  stopKeepAlive() {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
  }

  play() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis API not available offline in this browser.');
      return;
    }

    // 1. Unlock hardware audio output immediately on tap
    this.unlockAudioHardware();

    if (this.isPaused) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.isPlaying = true;
      this.startKeepAlive();
      this.onStateChange({ isPlaying: true, isPaused: false });
      return;
    }

    // 2. Clear any stuck synthesis state and resume
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();

    this.isPlaying = true;
    this.isPaused = false;
    this.startKeepAlive();
    this.onStateChange({ isPlaying: true, isPaused: false });
    this.speakCurrentLine();
  }

  speakCurrentLine() {
    if (!this.isPlaying || this.currentIndex >= this.dialogue.length) {
      this.stop();
      return;
    }

    const item = this.dialogue[this.currentIndex];
    const textToSpeak = item.text;

    // Wake synthesis context
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    this.utterance = new SpeechSynthesisUtterance(textToSpeak);
    // Bind to window to prevent Chrome Garbage Collection mid-speech
    window.__ieltsActiveUtterance = this.utterance;

    const voiceConfig = this.getVoiceForSpeaker(item.speaker);
    if (voiceConfig.voice) {
      this.utterance.voice = voiceConfig.voice;
      this.utterance.lang = voiceConfig.voice.lang;
    } else {
      this.utterance.lang = voiceConfig.lang || 'en-US';
    }
    this.utterance.pitch = voiceConfig.pitch || 1.0;
    this.utterance.rate = voiceConfig.rate || 0.92;
    this.utterance.volume = 1.0; // Enforce maximum volume

    // Report exam progress WITHOUT revealing dialogue transcript subtitles
    this.onProgress({
      currentIndex: this.currentIndex,
      totalLines: this.dialogue.length,
      currentSpeaker: item.speaker,
      percent: Math.round(((this.currentIndex + 1) / this.dialogue.length) * 100),
      voiceName: voiceConfig.voice ? voiceConfig.voice.name : 'System Voice'
    });

    this.utterance.onend = () => {
      this.currentIndex++;
      setTimeout(() => {
        if (this.isPlaying) {
          this.speakCurrentLine();
        }
      }, 750);
    };

    this.utterance.onerror = (e) => {
      console.log('Audio playback notice:', e);
      if (!this.isPlaying || this.isPaused || e.error === 'interrupted' || e.error === 'canceled') {
        return;
      }
      this.currentIndex++;
      setTimeout(() => {
        if (this.isPlaying) {
          this.speakCurrentLine();
        }
      }, 500);
    };

    try {
      window.speechSynthesis.speak(this.utterance);
      // Secondary resume call for mobile WebKit & Android Chrome
      window.speechSynthesis.resume();
    } catch (err) {
      console.error('SpeechSynthesis.speak failed:', err);
    }
  }

  pause() {
    this.stopKeepAlive();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.isPlaying) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.isPlaying = false;
      this.onStateChange({ isPlaying: false, isPaused: true });
    }
  }

  stop() {
    this.stopKeepAlive();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
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

  const band = rawToListeningBand(rawScore, totalQuestions);

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
