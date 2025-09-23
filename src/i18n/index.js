import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import esCommon from "./locales/es/common.json";

const resources = {
    en: { common: enCommon },
    es: { common: esCommon },
};

const detectionOptions = {
    order: ["querystring", "localStorage", "navigator"],
    lookupQuerystring: "lng",
    caches: ["localStorage"],
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        supportedLngs: ["en", "es"],
        defaultNS: "common",
        interpolation: {
            escapeValue: false,
        },
        detection: detectionOptions,
        returnEmptyString: false,
    });

export default i18n;