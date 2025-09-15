"use client"

import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

import en from "@/../public/locales/en/common.json"
import vi from "@/../public/locales/vi/common.json"

if (!i18n.isInitialized) {
    i18n.use(HttpApi)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                en: { common: en },
                vi: { common: vi }
            },
            fallbackLng: "en",
            supportedLngs: ["en", "vi"],
            ns: ["common"],
            defaultNS: "common",
            backend: {
                loadPath: "/locales/{{lng}}/{{ns}}.json"
            },
            detection: {
                order: ["path", "cookie", "htmlTag"],
                caches: ["cookie"]
            }
        })
}

export default i18n
