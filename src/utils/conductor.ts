import { Sequence, Transport } from "tone";
import { inject, provide } from "vue";
import Instruments from "./instruments";
import Signal, { Callback } from "./signal";

enum Provided {
  instruments = "instruments",
  signal = "signal",
  loop = "loop",
}

export enum Events {
  beat = "beat",
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

  provide(Provided.instruments, instruments);
  provide(Provided.signal, signal);
  provide(Provided.loop, loop);

  Transport.start();

  return {
    instruments,
    signal,
    loop,
  };
}

export function useInstruments() {
  return inject<Instruments>(Provided.instruments);
}

export function startLoop() {
  const loop = inject<Sequence>(Provided.loop);
  loop?.start();
}

export function PauseLoop() {
  const loop = inject<Sequence>(Provided.loop);
  loop?.stop();
}

export function useSubscribe(event: Events, callback: Callback) {
  const signal = inject<Signal<Events>>(Provided.signal);
  signal?.subscribe(event, callback);

  return () => {
    signal?.unsubscribe(event, callback);
  };
}
