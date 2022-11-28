import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./assets/transitions.scss";
import i18n from "./i18n";
import store from "./store";
import { routes } from '@/utils/pages'

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

createApp(App).use(store).use(i18n).use(router).mount("#app");
