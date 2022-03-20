import { createI18n } from "vue-i18n";
import en from "./en.json";
import fr from "./fr.json";

function getLocale() {
  if (/fr/.test(navigator.language)) {
    return "fr";
  }
  return "en";
}

type MessageSchema = typeof en;

export default createI18n({
  locale: getLocale(),
  messages: {
    en,
    fr,
  },
  datetimeFormats: {
    en: {
      // short: { year: "numeric", month: "short" },
    },
    fr: {
      short: { year: "numeric", month: "short" },
    },
  },
  legacy: false,
});
