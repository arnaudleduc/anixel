import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translateEN from "./src/locales/en/translation.json";
import translateFR from "./src/locales/fr/translation.json";

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    languages: ["en", "fr"],
    resources: {
      en: {
        translation: translateEN,
      },
      fr: {
        translation: translateFR,
      },
    },
    debug: false,
  });

export default i18n;
