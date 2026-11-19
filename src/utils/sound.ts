class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted = false;

  public setMuted(muted: boolean) {
    this.muted = muted;
  }

  public isMuted(): boolean {
    return this.muted;
  }

  private getContext(): AudioContext | null {
    if (this.muted) return null;
    if (typeof window === 'undefined') return null;
    try {
      if (!this.ctx) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return null;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        void this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  /** Soft emerald confirmation chime for safe NFC boarding */
  public playSafeNfc() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    this.tone(ctx, 880, now, 0.11, 0.08, 'sine');
    this.tone(ctx, 1318.5, now + 0.09, 0.18, 0.09, 'triangle');
  }

  /** Warm double-validated harmonic chime for safe exit + verified tutor */
  public playTutorVerified() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    this.tone(ctx, 783.99, now, 0.1, 0.07, 'sine');
    this.tone(ctx, 1046.5, now + 0.09, 0.12, 0.08, 'sine');
    this.tone(ctx, 1567.98, now + 0.19, 0.24, 0.09, 'triangle');
  }

  /** Urgent short warning pulse for unauthorized stop alert (Scenario 3) */
  public playUnauthorizedAlert() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const start = now + i * 0.22;
      this.tone(ctx, 720, start, 0.09, 0.1, 'sawtooth');
      this.tone(ctx, 540, start + 0.09, 0.09, 0.09, 'sawtooth');
    }
  }

  /**
   * Scenario 4 (Protocolo Violeta):
   * Deliberately plays ZERO sound in the bus cabin to protect the victim
   * and avoid alerting the aggressor.
   */
  public playSilentProtocol() {
    // Intencionalmente silencioso en cabina — Protocolo Violeta
  }

  private tone(
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    peakGain: number,
    type: OscillatorType
  ) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(peakGain, startTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
  }
}

export const soundEngine = new SoundEngine();
