import { createContext, useState, useCallback, type FC, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage, setLanguage as saveLanguage } from '../utils/cookies';

export type Language = 'pl' | 'en';

interface LanguageContextValue {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguageState] = useState<Language>(getLanguage);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        i18n.changeLanguage(lang);
        saveLanguage(lang);
    }, [i18n]);

    const toggleLanguage = useCallback(() => {
        const newLang: Language = language === 'pl' ? 'en' : 'pl';
        setLanguage(newLang);
    }, [language, setLanguage]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext };
