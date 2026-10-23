// Speaking Part 2 Exam Pressure & Fluency Engine
// Handles Part 2 60s Prep Countdown, Web Speech API speech-to-text, live Words Per Minute (WPM), and filler word detection

export class SpeakingFluencyEngine {
  constructor() {
    this.prepRemainingSeconds = 60;
    this.prepTimerId = null;
    this.recognition = null;
    this.isRecognizing = false;
    this.transcript = '';
    this.fillerWords = [
      'um',
      'uh',
      'er',
      'like',
      'you know',
      'basically',
      'actually',
      'literally'
    ];
  }

  calculateWPM(wordCount, activeSeconds) {
    if (!activeSeconds || activeSeconds <= 0 || !wordCount || wordCount <= 0) {
      return { wpm: 0, tier: 'insufficient', label: 'Awaiting speech...' };
    }
    const minutes = activeSeconds / 60;
    const wpm = Math.round(wordCount / minutes);

    let tier = 'optimal';
    let label = 'Fluent - Band 7.5 to 9.0 Cadence';

    if (wpm < 110) {
      tier = 'slow';
      label = 'Hesitant - Below Band 6 Cadence';
    } else if (wpm < 125) {
      tier = 'moderate';
      label = 'Deliberate - Band 6.5 Cadence';
    } else if (wpm > 155) {
      tier = 'fast';
      label = 'Rushed - Monitor Articulation & Clarity';
    }

    return { wpm, tier, label };
  }

  detectFillers(transcriptText) {
    if (!transcriptText || typeof transcriptText !== 'string') {
      return { totalCount: 0, breakdown: {} };
    }

    const text = transcriptText.toLowerCase();
    const breakdown = {};
    let totalCount = 0;

    for (const filler of this.fillerWords) {
      // Regex with word boundaries
      const regex = new RegExp(`\\b${filler}\\b`, 'gi');
      const matches = text.match(regex);
      if (matches && matches.length > 0) {
        breakdown[filler] = matches.length;
        totalCount += matches.length;
      }
    }

    return { totalCount, breakdown };
  }

  tickPrep() {
    if (this.prepRemainingSeconds > 0) {
      this.prepRemainingSeconds -= 1;
    }
    return this.prepRemainingSeconds;
  }

  resetPrep() {
    this.stopPrepTimer();
    this.prepRemainingSeconds = 60;
    return this.prepRemainingSeconds;
  }

  startPrepTimer(onTick, onComplete) {
    this.resetPrep();
    this.prepTimerId = setInterval(() => {
      const remaining = this.tickPrep();
      if (typeof onTick === 'function') onTick(remaining);

      if (remaining <= 0) {
        this.stopPrepTimer();
        if (typeof onComplete === 'function') onComplete();
      }
    }, 1000);
  }

  stopPrepTimer() {
    if (this.prepTimerId) {
      clearInterval(this.prepTimerId);
      this.prepTimerId = null;
    }
  }

  // Web Speech API Integration for Live Speech Transcription
  initSpeechRecognition(onResult, onError) {
    if (typeof window === 'undefined') return null;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.log('SpeechRecognition API not supported on this browser engine; using audio recording fallback.');
      return null;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event) => {
        let fullTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          fullTranscript += event.results[i][0].transcript + ' ';
        }
        this.transcript = fullTranscript.trim();
        const words = this.transcript.split(/\s+/).filter(w => w.length > 0);
        const fillers = this.detectFillers(this.transcript);

        if (typeof onResult === 'function') {
          onResult({
            transcript: this.transcript,
            wordCount: words.length,
            fillers
          });
        }
      };

      this.recognition.onerror = (err) => {
        if (typeof onError === 'function') onError(err);
      };

      return this.recognition;
    } catch (e) {
      console.warn('SpeechRecognition initialization note:', e);
      return null;
    }
  }

  startRecognition() {
    if (this.recognition && !this.isRecognizing) {
      try {
        this.transcript = '';
        this.recognition.start();
        this.isRecognizing = true;
      } catch (e) {
        console.warn('Recognition start notice:', e);
      }
    }
  }

  stopRecognition() {
    if (this.recognition && this.isRecognizing) {
      try {
        this.recognition.stop();
        this.isRecognizing = false;
      } catch (e) {
        // Safe ignore
      }
    }
  }
}
