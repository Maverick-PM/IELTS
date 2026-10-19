// IELTS Academic Speaking Offline Engine
// Provides in-browser voice recording, prep & speaking timers, and 4-criteria self-score calculation

export class OfflineVoiceRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.audioBlob = null;
    this.audioUrl = null;
    this.isRecording = false;
  }

  async start() {
    this.audioChunks = [];
    this.audioBlob = null;
    this.audioUrl = null;

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('Microphone audio recording not supported in this browser.');
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.audioChunks.push(event.data);
      }
    };

    this.mediaRecorder.start();
    this.isRecording = true;
  }

  stop() {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || !this.isRecording) {
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.audioUrl = URL.createObjectURL(this.audioBlob);
        this.isRecording = false;

        // Stop all audio tracks to release microphone
        this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
        resolve({
          blob: this.audioBlob,
          url: this.audioUrl
        });
      };

      this.mediaRecorder.stop();
    });
  }
}

export function calculateSpeakingBand(subscores = {}) {
  const fc = Number(subscores.fc) || 6.0;
  const lr = Number(subscores.lr) || 6.0;
  const gra = Number(subscores.gra) || 6.0;
  const pr = Number(subscores.pr) || 6.0;

  const average = (fc + lr + gra + pr) / 4;
  
  // Official IELTS 0.25 / 0.75 rounding
  const floor = Math.floor(average);
  const remainder = average - floor;

  let overall;
  if (remainder < 0.25) {
    overall = floor;
  } else if (remainder < 0.75) {
    overall = floor + 0.5;
  } else {
    overall = floor + 1.0;
  }

  overall = Math.max(1.0, Math.min(9.0, overall));

  return {
    overall,
    subscores: { fc, lr, gra, pr }
  };
}
