import { StoreData } from "@/store";
import { Sequence, Transport } from "tone";
import { inject, provide, Ref, ref } from "vue";
import { useStore } from "vuex";
import Instruments from "./instruments";
import Signal, { Callback } from "./signal";
import { useAction } from "./vuex-hooks";
import { start as startTone } from "tone";

enum Provided {
  instruments = "instruments",
  signal = "signal",
  loop = "loop",
  active = "active",
}

export enum Events {
  beat = "beat",
  rhodes = "rhodes",
  synth = "synth",
  clarinet = "clarinet",
  drums = "drums",
}

export function useConductorProvider() {
  const instruments = new Instruments();
  const signal = new Signal<Events>();

  Transport.bpm.value = 110;
  const loop = new Sequence(
    () => {
      instruments.playBass();
      signal.emit(Events.beat);
    },
    [0],
    "4n"
  );

  const active = ref(false);

  provide(Provided.instruments, instruments);
  provide(Provided.signal, signal);
  provide(Provided.loop, loop);
  provide(Provided.active, active);

  Transport.start();

  return {
    instruments,
    signal,
    loop,
    active,
  };
}

export function useInstruments() {
  return inject<Instruments>(Provided.instruments);
}

export function useSubscribe(event: Events, callback: Callback) {
  const signal = inject<Signal<Events>>(Provided.signal);
  signal?.subscribe(event, callback);

  return () => {
    signal?.unsubscribe(event, callback);
  };
}

export function useConductor() {
  const instruments = useInstruments();
  const signal = inject<Signal<Events>>(Provided.signal);
  const loop = inject<Sequence>(Provided.loop);
  const active = inject<Ref<boolean>>(Provided.active);
  const setWave = useAction("setWave");
  const { state } = useStore<StoreData>();

  return {
    playRhodes: () => {
      instruments?.playRhodes();
      signal?.emit(Events.rhodes);
    },
    playClarinet: () => {
      instruments?.playClarinet();
      signal?.emit(Events.clarinet);
    },
    playSynth: () => {
      instruments?.playSynth();
      signal?.emit(Events.synth);
    },
    playDrums: () => {
      instruments?.playDrums();
      signal?.emit(Events.drums);
    },
    toggleWaveEffect: () => {
      instruments?.setEffect(!state.wave);
      setWave(!state.wave);
    },
    start: async () => {
      await instruments?.load();
      startTone();
      instruments?.setMute(false);
      loop?.start();
      if (active !== undefined) {
        active.value = true;
      }
    },
    stop: () => {
      loop?.stop();
      instruments?.setMute(true);
      if (active !== undefined) {
        active.value = false;
      }
    },
    isPlaying: active,
  };
}
