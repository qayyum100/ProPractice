export type SoundProfile = 'mechanical' | 'clicky' | 'tactile' | 'typewriter' | 'bubble'

class SoundFX {
  private ctx: AudioContext | null = null
  private enabled: boolean = true
  private volume: number = 0.5
  private profile: SoundProfile = 'mechanical'
  private noiseBuffer: AudioBuffer | null = null
  private isUnlocked: boolean = false

  constructor() {
    if (typeof window !== 'undefined') {
      // Pre-bind unlock on first user gesture anywhere
      const unlockAudio = () => {
        this.unlock()
        window.removeEventListener('pointerdown', unlockAudio)
        window.removeEventListener('keydown', unlockAudio)
        window.removeEventListener('touchstart', unlockAudio)
      }
      window.addEventListener('pointerdown', unlockAudio, { passive: true })
      window.addEventListener('keydown', unlockAudio, { passive: true })
      window.addEventListener('touchstart', unlockAudio, { passive: true })
    }
  }

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
        this.createNoiseBuffer()
      }
    }
  }

  public unlock() {
    this.init()
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().then(() => {
        this.isUnlocked = true
      }).catch(() => {})
    } else if (this.ctx) {
      this.isUnlocked = true
    }
  }

  private createNoiseBuffer() {
    if (!this.ctx) return
    const bufferSize = this.ctx.sampleRate * 0.1 // 100ms of noise
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
    const output = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1
    }
    this.noiseBuffer = buffer
  }

  public setEnabled(val: boolean) {
    this.enabled = val
  }

  public isEnabled(): boolean {
    return this.enabled
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val))
  }

  public getVolume(): number {
    return this.volume
  }

  public setProfile(profile: SoundProfile) {
    this.profile = profile
  }

  public getProfile(): SoundProfile {
    return this.profile
  }

  /**
   * Play an authentic, layered mechanical keystroke sound.
   * Modulates frequency, transient attack, and body resonance based on key type (Space, Enter, Backspace, Char).
   */
  public playKeyClick(key?: string) {
    if (!this.enabled || this.volume <= 0) return

    try {
      this.init()
      if (!this.ctx) return
      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      const now = this.ctx.currentTime
      const isSpace = key === ' ' || key === 'Space'
      const isEnter = key === 'Enter'
      const isBackspace = key === 'Backspace'

      switch (this.profile) {
        case 'clicky':
          this.playClickySwitch(now, isSpace, isEnter, isBackspace)
          break
        case 'tactile':
          this.playTactileSwitch(now, isSpace, isEnter, isBackspace)
          break
        case 'typewriter':
          this.playTypewriterStrike(now, isSpace, isEnter, isBackspace)
          break
        case 'bubble':
          this.playBubblePop(now, isSpace, isEnter, isBackspace)
          break
        case 'mechanical':
        default:
          this.playMechanicalThock(now, isSpace, isEnter, isBackspace)
          break
      }
    } catch {
      // Guard against audio context restriction
    }
  }

  /**
   * Deep, creamy lubed mechanical switch "Thock" (Linear/Holy Panda style)
   */
  private playMechanicalThock(now: number, isSpace: boolean, isEnter: boolean, isBackspace: boolean) {
    if (!this.ctx) return

    const masterGain = this.ctx.createGain()
    masterGain.gain.setValueAtTime(this.volume * 0.9, now)
    masterGain.connect(this.ctx.destination)

    // 1. Transient click / plastic tap (high-pass noise burst)
    if (this.noiseBuffer) {
      const noiseSource = this.ctx.createBufferSource()
      noiseSource.buffer = this.noiseBuffer

      const noiseFilter = this.ctx.createBiquadFilter()
      noiseFilter.type = 'bandpass'
      noiseFilter.frequency.setValueAtTime(isSpace ? 1800 : isBackspace ? 3200 : 2600 + (Math.random() * 400 - 200), now)
      noiseFilter.Q.setValueAtTime(2.2, now)

      const noiseGain = this.ctx.createGain()
      noiseGain.gain.setValueAtTime(0.22, now)
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.016)

      noiseSource.connect(noiseFilter)
      noiseFilter.connect(noiseGain)
      noiseGain.connect(masterGain)

      noiseSource.start(now)
      noiseSource.stop(now + 0.02)
    }

    // 2. Body bottom-out thock (damped low-frequency resonance)
    const baseFreq = isSpace
      ? 155 + Math.random() * 15
      : isEnter
      ? 195 + Math.random() * 20
      : isBackspace
      ? 290 + Math.random() * 30
      : 240 + Math.random() * 40 - 20 // Jitter per keystroke

    const osc = this.ctx.createOscillator()
    const oscGain = this.ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(baseFreq * 1.5, now)
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, now + 0.038)

    const oscDuration = isSpace ? 0.055 : 0.038
    oscGain.gain.setValueAtTime(isSpace ? 0.28 : 0.20, now)
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + oscDuration)

    osc.connect(oscGain)
    oscGain.connect(masterGain)

    osc.start(now)
    osc.stop(now + oscDuration)
  }

  /**
   * Crisp, sharp Clicky mechanical switch (Cherry MX Blue / Box White style)
   */
  private playClickySwitch(now: number, isSpace: boolean, isEnter: boolean, isBackspace: boolean) {
    if (!this.ctx) return

    const masterGain = this.ctx.createGain()
    masterGain.gain.setValueAtTime(this.volume * 0.85, now)
    masterGain.connect(this.ctx.destination)

    // Sharp metallic click transient
    const clickOsc = this.ctx.createOscillator()
    const clickGain = this.ctx.createGain()
    clickOsc.type = 'sine'
    const clickFreq = isSpace ? 2800 : isBackspace ? 4200 : 3600 + Math.random() * 300
    clickOsc.frequency.setValueAtTime(clickFreq, now)
    clickOsc.frequency.exponentialRampToValueAtTime(600, now + 0.012)

    clickGain.gain.setValueAtTime(0.35, now)
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.014)

    clickOsc.connect(clickGain)
    clickGain.connect(masterGain)
    clickOsc.start(now)
    clickOsc.stop(now + 0.015)

    // Base thump
    const baseOsc = this.ctx.createOscillator()
    const baseGain = this.ctx.createGain()
    baseOsc.type = 'triangle'
    const baseFreq = isSpace ? 180 : isEnter ? 220 : 310 + Math.random() * 30
    baseOsc.frequency.setValueAtTime(baseFreq, now)
    baseOsc.frequency.exponentialRampToValueAtTime(90, now + 0.03)

    baseGain.gain.setValueAtTime(0.18, now)
    baseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.032)

    baseOsc.connect(baseGain)
    baseGain.connect(masterGain)
    baseOsc.start(now)
    baseOsc.stop(now + 0.035)
  }

  /**
   * Tactile switch (Cherry MX Brown style)
   */
  private playTactileSwitch(now: number, isSpace: boolean, isEnter: boolean, isBackspace: boolean) {
    if (!this.ctx) return

    const masterGain = this.ctx.createGain()
    masterGain.gain.setValueAtTime(this.volume * 0.8, now)
    masterGain.connect(this.ctx.destination)

    const osc = this.ctx.createOscillator()
    const oscGain = this.ctx.createGain()

    osc.type = 'sine'
    const baseFreq = isSpace ? 210 : isEnter ? 260 : isBackspace ? 340 : 280 + (Math.random() * 30 - 15)
    osc.frequency.setValueAtTime(baseFreq * 1.8, now)
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, now + 0.035)

    oscGain.gain.setValueAtTime(0.22, now)
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035)

    osc.connect(oscGain)
    oscGain.connect(masterGain)
    osc.start(now)
    osc.stop(now + 0.038)
  }

  /**
   * Vintage Typewriter Strike
   */
  private playTypewriterStrike(now: number, isSpace: boolean, isEnter: boolean, isBackspace: boolean) {
    if (!this.ctx) return

    const masterGain = this.ctx.createGain()
    masterGain.gain.setValueAtTime(this.volume * 0.85, now)
    masterGain.connect(this.ctx.destination)

    // Metallic ring
    const osc = this.ctx.createOscillator()
    const oscGain = this.ctx.createGain()
    osc.type = 'triangle'
    const freq = isEnter ? 1200 : isSpace ? 480 : 880 + Math.random() * 120
    osc.frequency.setValueAtTime(freq, now)
    osc.frequency.exponentialRampToValueAtTime(freq * 0.3, now + 0.05)

    oscGain.gain.setValueAtTime(0.25, now)
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)

    osc.connect(oscGain)
    oscGain.connect(masterGain)
    osc.start(now)
    osc.stop(now + 0.055)
  }

  /**
   * Gentle bubble water droplet pop
   */
  private playBubblePop(now: number, isSpace: boolean, isEnter: boolean, isBackspace: boolean) {
    if (!this.ctx) return

    const masterGain = this.ctx.createGain()
    masterGain.gain.setValueAtTime(this.volume * 0.8, now)
    masterGain.connect(this.ctx.destination)

    const osc = this.ctx.createOscillator()
    const oscGain = this.ctx.createGain()
    osc.type = 'sine'
    const startFreq = isSpace ? 320 : isEnter ? 380 : isBackspace ? 700 : 500 + Math.random() * 160
    osc.frequency.setValueAtTime(startFreq, now)
    osc.frequency.exponentialRampToValueAtTime(startFreq * 2.2, now + 0.03)

    oscGain.gain.setValueAtTime(0.24, now)
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035)

    osc.connect(oscGain)
    oscGain.connect(masterGain)
    osc.start(now)
    osc.stop(now + 0.038)
  }

  /**
   * Subtle, distinct tactile error feedback
   */
  public playErrorSound() {
    if (!this.enabled || this.volume <= 0) return
    try {
      this.init()
      if (!this.ctx) return
      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      const now = this.ctx.currentTime
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(140, now)
      osc.frequency.setValueAtTime(110, now + 0.04)

      // Soft low-pass filter to keep error sound non-jarring
      const filter = this.ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(450, now)

      gain.gain.setValueAtTime(this.volume * 0.18, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start(now)
      osc.stop(now + 0.07)
    } catch {
      // Audio context restriction guard
    }
  }

  /**
   * Level up / Achievement fanfare
   */
  public playSuccessFanfare() {
    if (!this.enabled || this.volume <= 0) return
    try {
      this.init()
      if (!this.ctx) return
      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      const notes = [523.25, 659.25, 783.99, 1046.5] // C Major arpeggio
      notes.forEach((freq, idx) => {
        if (!this.ctx) return
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'sine'
        const noteStart = this.ctx.currentTime + idx * 0.07
        osc.frequency.setValueAtTime(freq, noteStart)

        gain.gain.setValueAtTime(this.volume * 0.22, noteStart)
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.28)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(noteStart)
        osc.stop(noteStart + 0.28)
      })
    } catch {
      // Audio context restriction guard
    }
  }
}

export const soundFx = new SoundFX()
