import { Reverb, Sampler, Vibrato, Players, Gain, getContext } from "tone";
import { Scale } from "@tonaljs/tonal";

const probabilities = {
  scale: [
    {
      keys: [0, 7],
      value: 0.25,
    },
    {
      keys: [2],
      value: 0.25,
    },
    {
      keys: [4],
      value: 0.2,
    },
    {
      keys: [3],
      value: 0.15,
    },
    {
      keys: [1, 5, 6],
    },
  ],
  melody: [
    {
      keys: [0, 7],
      value: 0.15,
    },
    {
      keys: [2],
      value: 0.2,
    },
    {
      keys: [4],
      value: 0.2,
    },
    {
      keys: [1],
      value: 0.2,
    },
    {
      keys: [3, 5, 6],
    },
  ],
  solo: [
    {
      keys: [0, 7],
      value: 0.15,
    },
    {
      keys: [2],
      value: 0.15,
    },
    {
      keys: [4],
      value: 0.25,
    },
    {
      keys: [3, 5],
      value: 0.25,
    },
    {
      keys: [1, 6],
    },
  ],
};

function getRandomNote(instrument: keyof typeof probabilities) {
  const dice = Math.random();
  let score = 0,
    index = 0;
  let result;
  while (!result) {
    const note = probabilities[instrument][index];
    score += note.value || 1;
    if (dice <= score) {
      result = note;
      break;
    }
    index += 1;
  }
  return result.keys[Math.floor(Math.random() * result.keys.length)];
}

function buildScaleNotes(scale: string[], octave = 4, cPos = 7) {
  return [...scale].map(
    (note, index) => `${note}${index < cPos ? octave : octave + 1}`
  );
}

export enum PlayableInstrument {
  rhodes = "rhodes",
  clarinet = "clarinet",
  synth = "synth",
  drum = "drum",
}

export default class Instruments {
  private bassNotes: string[] = [];
  private rhodesNotes: string[] = [];
  private clarinetNotes: string[] = [];
  private synthNotes: string[] = [];
  private drumsSounds: string[] = [];

  private effect: Vibrato | undefined;
  private master: Gain;

  private bass?: Sampler;
  private rhodes?: Sampler;
  private synth?: Sampler;
  private clarinet?: Sampler;
  private drums?: Players;

  private loading: Promise<void>;

  constructor() {
    const scale = Scale.get("G mixolydian");

    this.bassNotes = buildScaleNotes(scale.notes, 1, 3);
    this.bassNotes.push(`${scale.tonic}2`);

    this.rhodesNotes = [
      ...buildScaleNotes(scale.notes, 2, 3),
      ...buildScaleNotes(scale.notes, 3, 3),
      ...buildScaleNotes(scale.notes, 4, 3),
    ];

    this.clarinetNotes = [
      ...buildScaleNotes(scale.notes, 3, 3),
      ...buildScaleNotes(scale.notes, 4, 3),
      ...buildScaleNotes(scale.notes, 5, 3),
    ];

    this.synthNotes = [
      ...buildScaleNotes(scale.notes, 4, 3),
      ...buildScaleNotes(scale.notes, 5, 3),
    ];

    this.drumsSounds = [
      "kick",
      "hat",
      "hit",
      "kick2",
      "ride",
      "snare",
      "tom",
      "ride2",
      "snare2",
      "snareRoll",
      "tom2",
      "tribKick",
      "tribKick2",
      "tribRims",
      "tribRims2",
    ];

    const promises = [];

    this.effect = new Vibrato(4.5, 0.5).toDestination();
    this.master = new Gain().toDestination();

    promises.push(
      new Promise<void>((resolve) => {
        const bassReverb = new Reverb({
          decay: 1,
          wet: 0.3,
        }).connect(this.master);
        this.bass = new Sampler(
          {
            Ab1: "Ab1.ogg",
            Ab2: "Ab2.ogg",
            B1: "B1.ogg",
            C1: "C1.ogg",
            D1: "D1.ogg",
            D2: "D2.ogg",
            F1: "F1.ogg",
          },
          {
            baseUrl: "./instruments/bass/",
            onload: resolve,
            volume: 4,
          }
        ).connect(bassReverb);
        bassReverb.generate();
      })
    );

    promises.push(
      new Promise<void>((resolve) => {
        const rhodesReverb = new Reverb({
          decay: 1,
          wet: 0.2,
        }).connect(this.master);
        this.rhodes = new Sampler(
          {
            B3: "3_B_3.wav",
            D3: "3_D_3.wav",
            G3: "3_G_3.wav",
            B4: "4_B_3.wav",
            D4: "4_D_3.wav",
            F4: "4_F_3.wav",
          },
          {
            baseUrl: "./instruments/rhodes/",
            onload: resolve,
            volume: -6,
          }
        ).connect(rhodesReverb);
        rhodesReverb.generate();
      })
    );

    promises.push(
      new Promise<void>((resolve) => {
        const clarinetReverb = new Reverb({
          decay: 4,
          wet: 0.5,
        }).connect(this.master);
        this.clarinet = new Sampler(
          {
            Bb3: "Bb3.wav",
            Bb4: "Bb4.wav",
            Bb5: "Bb5.wav",
            D3: "D3.wav",
            D4: "D4.wav",
            D5: "D5.wav",
            F3: "F3.wav",
            F4: "F4.wav",
            F5: "F5.wav",
          },
          {
            release: 4,
            baseUrl: "./instruments/clarinet/",
            onload: resolve,
            volume: -4,
          }
        ).connect(clarinetReverb);
        clarinetReverb.generate();
      })
    );

    promises.push(
      new Promise<void>((resolve) => {
        const synthReverb = new Reverb({
          decay: 5,
          wet: 0.5,
        }).connect(this.master);
        this.synth = new Sampler(
          {
            B4: "B4.ogg",
            D5: "D5.ogg",
            F5: "F5.ogg",
            G4: "G4.ogg",
          },
          {
            baseUrl: "./instruments/synth/",
            onload: resolve,
            volume: 8,
          }
        ).connect(synthReverb);
        synthReverb.generate();
      })
    );

    promises.push(
      new Promise<void>((resolve) => {
        const drumReverb = new Reverb({
          decay: 5,
          wet: 0.5,
        }).connect(this.master);
        this.drums = new Players(
          {
            kick: "./instruments/drums/Kick04.wav",
            hat: "./instruments/drums/Kit_Hat02.wav",
            hit: "./instruments/drums/Kit_Hit_07.wav",
            kick2: "./instruments/drums/Kit_Kick.wav",
            ride: "./instruments/drums/Kit_Ride_01.wav",
            snare: "./instruments/drums/Kit_Snare04.wav",
            tom: "./instruments/drums/Kit_Tom01.wav",
            ride2: "./instruments/drums/Ride10.wav",
            snare2: "./instruments/drums/Snare03.wav",
            snareRoll: "./instruments/drums/Snare_Roll03.wav",
            tom2: "./instruments/drums/Tom01.wav",
            tribKick: "./instruments/drums/Tribal-Kick-28.wav",
            tribKick2: "./instruments/drums/Tribal-Kick-40.wav",
            tribRims: "./instruments/drums/Tribal-Rims-22.wav",
            tribRims2: "./instruments/drums/Tribal-Rims-28.wav",
          },
          {
            onload: resolve,
            volume: 6,
          }
        ).connect(drumReverb);
        drumReverb.generate();
      })
    );

    this.loading = Promise.all(promises).then();
  }

  load() {
    return this.loading;
  }

  playBass() {
    if (!this.bass || !this.bass.loaded) return;
    this.bass.releaseAll();
    const note = this.bassNotes[getRandomNote("scale")];
    this.bass.triggerAttackRelease(note, "4n");
  }

  playClarinet() {
    if (!this.clarinet || !this.clarinet.loaded) return;
    const note =
      this.clarinetNotes[getRandomNote("solo") + (Math.random() > 0.5 ? 7 : 0)];
    this.clarinet.triggerAttackRelease(note, 1);
  }

  playSynth() {
    if (!this.synth || !this.synth.loaded) return;
    this.synth.releaseAll();
    const note = this.synthNotes[getRandomNote("melody")];
    this.synth.triggerAttack(note);
  }

  playRhodes() {
    if (!this.rhodes || !this.rhodes.loaded) return;
    const nbNotes = 2 + (Math.random() > 0.5 ? 1 : 0);
    const base =
      [0, 2, 4][Math.floor(Math.random() * 3)] + (Math.random() > 0.5 ? 7 : 0);
    const notes = [this.rhodesNotes[base]];

    while (notes.length < nbNotes) {
      const note =
        this.rhodesNotes[
          getRandomNote("melody") + (Math.random() > 0.5 ? 7 : 0)
        ];
      if (notes.indexOf(note) === -1) notes.push(note);
    }

    this.rhodes.releaseAll();
    for (const note of notes) {
      this.rhodes.triggerAttack(note);
    }
  }

  playDrums() {
    if (!this.drums || !this.drums.loaded) return;
    const sound =
      this.drumsSounds[Math.floor(Math.random() * this.drumsSounds.length)];
    this.drums.player(sound).start();
  }

  setEffect(active: boolean) {
    if (!this.effect) return;
    this.master.disconnect();
    if (active) this.master.connect(this.effect);
    else this.master.toDestination();
  }

  release() {
    if (!this.rhodes || !this.synth) return;
    this.rhodes.releaseAll();
    this.synth.releaseAll();
  }

  setMute(value: boolean) {
    this.master.gain.setValueAtTime(value ? 0 : 1, getContext().currentTime);
  }
}
