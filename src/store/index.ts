import { PlayableInstrument } from "@/utils/instruments";
import {
  ActionContext,
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
} from "vuex";

export enum Unlockable {
  rhodes = "rhodes",
  synth = "synth",
  clarinet = "clarinet",
  drum = "drum",
  wave = "wave",
}

export interface StoreData {
  wave: boolean;
  unlocked: Unlockable[];
  new: Unlockable[];
  initMute: boolean | null;
}

enum MutationsType {
  setWave = "setWave",
  unlock = "unlock",
  removeNew = "removeNew",
  setInitMute = "setInitMute",
}

const mutations: MutationTree<StoreData> = {
  [MutationsType.setWave]: (state, value: boolean) => {
    state.wave = value;
  },
  [MutationsType.unlock]: (state, value: Unlockable) => {
    state.unlocked = [...new Set([...state.unlocked, value])];
    if (state.unlocked.length === Object.keys(PlayableInstrument).length) {
      state.unlocked.push(Unlockable.wave);
    }
  },
  [MutationsType.removeNew]: (state, value: Unlockable) => {
    state.new = state.new.filter((unlocked) => unlocked !== value);
  },
  [MutationsType.setInitMute]: (state, value: boolean) => {
    state.initMute = value;
  },
};

export interface Actions {
  setWave: (
    context: ActionContext<StoreData, StoreData>,
    value: boolean
  ) => void;
  unlock: (
    context: ActionContext<StoreData, StoreData>,
    value: Unlockable
  ) => void;
  playWith: (
    context: ActionContext<StoreData, StoreData>,
    value: Unlockable
  ) => void;
  selectInitMute: (
    context: ActionContext<StoreData, StoreData>,
    value: boolean
  ) => void;
}
const actions: Actions = {
  setWave: (store, value: boolean) => {
    store.commit(MutationsType.setWave, !!value);
  },
  unlock: (store, value) => store.commit(MutationsType.unlock, value),
  playWith: (store, value) => store.commit(MutationsType.removeNew, value),
  selectInitMute: (store, value) =>
    store.commit(MutationsType.setInitMute, value),
};

export interface Getters {
  isUnlocked: (state: StoreData) => (instrument: Unlockable) => boolean;
  isNew: (state: StoreData) => (instrument: Unlockable) => boolean;
}

const getters: GetterTree<StoreData, StoreData> & Getters = {
  isUnlocked: (state) => (instrument: Unlockable) =>
    state.unlocked.includes(instrument),
  isNew: (state) => (instrument: Unlockable) => state.new.includes(instrument),
};

export default createStore<StoreData>({
  state: {
    wave: false,
    unlocked: [],
    new: Object.keys(Unlockable) as Unlockable[],
    initMute: null,
  },
  mutations,
  actions: { ...actions } as ActionTree<StoreData, StoreData>,
  getters,
  modules: {},
});
