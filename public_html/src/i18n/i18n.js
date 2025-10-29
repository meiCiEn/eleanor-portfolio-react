import i18n from 'i18next';
import initReactI18next from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
.use(Backend) // load translations from documents
.use(LanguageDetector) // detect browser language
.use(initReactI18next) // link i18next with React
.init({
    fallbackLng: 'en', // default language if can't find translation
    debug: true,
    interpolation: {
        escapeValue: false, 
    },
    // Configuration for loading JSON translation files
    backend: {
        loadPath: '/{{lng}}.json',

    },
    
});

export default i18n;