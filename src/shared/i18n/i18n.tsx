import en from "@/shared/i18n/locales/en.json";
import es from "@/shared/i18n/locales/es.json";
import { initReactI18next } from "react-i18next";

import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
