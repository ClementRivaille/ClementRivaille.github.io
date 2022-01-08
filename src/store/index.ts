import { ActionContext, ActionTree, createStore } from "vuex";

export interface StoreData {
  active: true;
}

export interface Actions {
  activate: (
    context: ActionContext<StoreData, StoreData>,
    value: boolean
  ) => void;
}
const actions: Actions = {
  activate: (store, value: boolean) => {
    store.commit("TEST", value);
  },
};

export default createStore<StoreData>({
  state: {
    active: true,
  },
  mutations: {},
  actions: { ...actions } as ActionTree<StoreData, StoreData>,
  modules: {},
});
