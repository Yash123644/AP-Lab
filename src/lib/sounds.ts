/**
 * Audio synthesis helper using the Web Audio API.
 * This does not require downloading external audio files, works offline,
 * and executes with zero loading latency.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    // @ts-ignore
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return audioCtx;
}

export function playSuccessSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const now = ctx.currentTime;
  
  // First note: 523.25 Hz (C5)
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = "sine";
  osc1.frequency.setValueAtTime(523.25, now);
  
  gain1.gain.setValueAtTime(0.15, now);
  gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
  
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  
  osc1.start(now);
  osc1.stop(now + 0.08);

  // Second note: 659.25 Hz (E5) after 0.08s
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(659.25, now + 0.08);
  
  gain2.gain.setValueAtTime(0.15, now + 0.08);
  gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
  
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  
  osc2.start(now + 0.08);
  osc2.stop(now + 0.25);
}

export function playLevelUpRiser() {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const now = ctx.currentTime;
  const duration = 1.8;

  // Primary rising oscillator
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(80, now);
  osc.frequency.exponentialRampToValueAtTime(650, now + duration);

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(100, now);
  filter.frequency.exponentialRampToValueAtTime(1200, now + duration);
  filter.Q.setValueAtTime(3.0, now);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + duration);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration);
}

export function playLevelUpImpact() {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const now = ctx.currentTime;

  // 1. Sub Bass Drop Impact
  const subOsc = ctx.createOscillator();
  const subGain = ctx.createGain();
  
  subOsc.type = "sine";
  subOsc.frequency.setValueAtTime(130, now);
  subOsc.frequency.linearRampToValueAtTime(40, now + 0.8);
  
  subGain.gain.setValueAtTime(0.25, now);
  subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
  
  subOsc.connect(subGain);
  subGain.connect(ctx.destination);
  subOsc.start(now);
  subOsc.stop(now + 0.8);

  // 2. High Golden Chime Chord (C6, E6, G6, C7)
  const freqs = [1046.50, 1318.51, 1567.98, 2093.00];
  freqs.forEach((freq, i) => {
    // Add micro-delays for strum/sparkle effect
    const time = now + i * 0.03;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, time);
    
    // Add vibrato/sparkle
    const vibrato = ctx.createOscillator();
    const vibratoGain = ctx.createGain();
    vibrato.frequency.value = 12; // 12Hz sparkle wail
    vibratoGain.gain.value = 6;
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);
    
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 2.5); // long decay
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    vibrato.start(time);
    vibrato.stop(time + 2.5);
    osc.start(time);
    osc.stop(time + 2.5);
  });
}

export function playLevelUpSound() {
  playLevelUpRiser();
  setTimeout(() => {
    playLevelUpImpact();
  }, 1800);
}

export function playFailureSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const now = ctx.currentTime;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = "triangle";
  
  // Frequency slides down from 160Hz to 110Hz
  osc.frequency.setValueAtTime(160, now);
  osc.frequency.linearRampToValueAtTime(110, now + 0.35);
  
  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(now);
  osc.stop(now + 0.35);
}
