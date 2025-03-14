import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Languagedetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import uzTranslation from './locales/uz.json'
import ruTranslation from './locales/ru.json'
import enTranslation from './locales/en.json'
i18next.use(initReactI18next).use(Languagedetector).use(Backend).init({
    resources: {
        uz: { translation: uzTranslation },
        ru: { translation: ruTranslation },
        en: { translation: enTranslation },
    },
    fallbackLng: 'uz',
    interpolation: { escapeValue: false }
})
export default i18next