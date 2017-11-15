// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import i18n from './i18n/i18n';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App @changeLocale="value => changeLocale(value)" :default-locale="locale"/>',
  components: { App },
  methods: {
    changeLocale: (locale) => {
      i18n.locale = locale;
    },
  },
  data() {
    return {
      locale: i18n.locale,
    };
  },
});
