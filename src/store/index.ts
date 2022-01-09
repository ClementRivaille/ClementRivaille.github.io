import { ActionContext, ActionTree, createStore, MutationTree } from "vuex";

export interface StoreData {
  wave: boolean;
}

enum MutationsType {
  setWave = "setWave",
}

const mutations: MutationTree<StoreData> = {
  [MutationsType.setWave]: (state, value: boolean) => {
    state.wave = value;
  },
};

export interface Actions {
  setWave: (
    context: ActionContext<StoreData, StoreData>,
    value: boolean
  ) => void;
}
const actions: Actions = {
  setWave: (store, value: boolean) => {
    store.commit(MutationsType.setWave, !!value);
  },
};

export default createStore<StoreData>({
  state: {
    wave: false,
  },
  mutations,
  actions: { ...actions } as ActionTree<StoreData, StoreData>,
  modules: {},
});
