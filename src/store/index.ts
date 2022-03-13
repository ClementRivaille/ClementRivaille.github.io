import { PlayableInstrument } from "@/utils/instruments";
import Page from "@/utils/pages";
import {
  ActionContext,
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
} from "vuex";

export enum Unlockable {
  rhodes,
  synth,
  clarinet,
  drum,
  wave,
}

export interface StoreData {
  wave: boolean;
  page: Page;
  unlocked: Unlockable[];
}

enum MutationsType {
  setWave = "setWave",
  setPage = "setPage",
  unlock = "unlock",
}

const mutations: MutationTree<StoreData> = {
  [MutationsType.setWave]: (state, value: boolean) => {
    state.wave = value;
  },
  [MutationsType.setPage]: (state, value: Page) => {
    state.page = value;
  },
  [MutationsType.unlock]: (state, value: Unlockable) => {
    state.unlocked = [...new Set([...state.unlocked, value])];
    if (state.unlocked.length === Object.keys(PlayableInstrument).length) {
      state.unlocked.push(Unlockable.wave);
    }
  },
};

export interface Actions {
  setWave: (
    context: ActionContext<StoreData, StoreData>,
    value: boolean
  ) => void;
  setPage: (contect: ActionContext<StoreData, StoreData>, value: Page) => void;
  unlock: (
    context: ActionContext<StoreData, StoreData>,
    value: Unlockable
  ) => void;
}
const actions: Actions = {
  setWave: (store, value: boolean) => {
    store.commit(MutationsType.setWave, !!value);
  },
  setPage: (store, value) => {
    store.commit(MutationsType.setPage, value);
  },
  unlock: (store, value) => store.commit(MutationsType.unlock, value),
};

export interface Getters {
  isUnlocked: (state: StoreData) => (instrument: Unlockable) => boolean;
}

const getters: GetterTree<StoreData, StoreData> & Getters = {
  isUnlocked: (state) => (instrument: Unlockable) =>
    state.unlocked.includes(instrument),
};

export default createStore<StoreData>({
  state: {
    wave: false,
    page: Page.Home,
    unlocked: [],
  },
  mutations,
  actions: { ...actions } as ActionTree<StoreData, StoreData>,
  getters,
  modules: {},
});
