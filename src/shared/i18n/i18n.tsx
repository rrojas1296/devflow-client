import en from "@/shared/i18n/locales/en.json";
import es from "@/shared/i18n/locales/es.json";
import pt from "@/shared/i18n/locales/pt.json";
import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import { I18N_LANG_KEY } from "./i18n-keys";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
  },
  lng: localStorage.getItem(I18N_LANG_KEY) || "en",
  fallbackLng: "en",
});

export default i18n;
