import { Store } from "vuex";

declare module "@vue/runtime-core" {
  import { ComponentCustomProperties } from "vue";
  // Declare your own store states.
  interface State {
    count: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
