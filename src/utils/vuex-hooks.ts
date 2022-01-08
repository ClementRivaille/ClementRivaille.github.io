import { Actions, StoreData } from "@/store";
import { useStore } from "vuex";

export function useAction<A extends keyof Actions>(action: A) {
  const store = useStore<StoreData>();

  return (payload?: Parameters<Actions[A]>[1]) =>
    store.dispatch(`${action}`, payload) as ReturnType<Actions[A]>;
}
