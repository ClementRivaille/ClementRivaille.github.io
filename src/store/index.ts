import Page from "@/utils/pages";
import { ActionContext, ActionTree, createStore, MutationTree } from "vuex";

export interface StoreData {
  wave: boolean;
  page: Page;
}

enum MutationsType {
  setWave = "setWave",
  setPage = "setPage",
}

const mutations: MutationTree<StoreData> = {
  [MutationsType.setWave]: (state, value: boolean) => {
    state.wave = value;
  },
  [MutationsType.setPage]: (state, value: Page) => {
    state.page = value;
  },
};

export interface Actions {
  setWave: (
    context: ActionContext<StoreData, StoreData>,
    value: boolean
  ) => void;
  setPage: (contect: ActionContext<StoreData, StoreData>, value: Page) => void;
}
const actions: Actions = {
  setWave: (store, value: boolean) => {
    store.commit(MutationsType.setWave, !!value);
  },
  setPage: (store, value) => {
    store.commit(MutationsType.setPage, value);
  },
};

export default createStore<StoreData>({
  state: {
    wave: false,
    page: Page.Home,
  },
  mutations,
  actions: { ...actions } as ActionTree<StoreData, StoreData>,
  modules: {},
});
