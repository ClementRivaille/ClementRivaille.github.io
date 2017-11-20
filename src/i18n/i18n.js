import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en.json';
import fr from './fr.json';

Vue.use(VueI18n);

const locale = localStorage.getItem('lang') ||
  ((navigator.language === 'en' || navigator.language === 'fr') ? navigator.language : 'en');

export default new VueI18n({
  locale,
  messages: {
    en,
    fr,
  },
  dateTimeFormats: {
    en: {
      short: { year: 'numeric', month: 'short' },
    },
    fr: {
      short: { year: 'numeric', month: 'short' },
    },
  },
});
