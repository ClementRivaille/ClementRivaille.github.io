import { useInstruments } from "./conductor";
import { PlayableInstrument } from "./instruments";

export function yieldTimeout(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/**
 * Play several notes of a given instrument
 */
export function useJingle(instrument: PlayableInstrument) {
  const instruments = useInstruments();

  return async function playJingle(amount: number, delays: number[]) {
    if (!instruments) return;
    let delayIdx = 0;
    for (let i = 0; i < amount; i++) {
      if (instrument === PlayableInstrument.drum) instruments.playDrums();
      if (instrument === PlayableInstrument.clarinet)
        instruments.playClarinet();
      if (instrument === PlayableInstrument.synth) instruments.playSynth();
      if (instrument === PlayableInstrument.rhodes) instruments.playRhodes();

      await yieldTimeout(delays[delayIdx] || 0);
      delayIdx = (delayIdx + 1) % delays.length;
    }
  };
}
