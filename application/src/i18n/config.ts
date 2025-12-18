import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage } from '../utils/cookies';
import en from '../locales/en.json';
import pl from '../locales/pl.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            pl: { translation: pl }
        },
        lng: getLanguage(),
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
