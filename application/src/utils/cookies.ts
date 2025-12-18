import { APP_CONFIG } from '../constants/config';
import type { Theme } from '../contexts/ThemeContext';
import type { Language } from '../contexts/LanguageContext';

interface Settings {
    theme: Theme;
    language: Language;
}

const DEFAULTS: Settings = {
    theme: APP_CONFIG.DEFAULT_THEME as Theme,
    language: APP_CONFIG.DEFAULT_LANGUAGE as Language
};

const parseSettings = (): Settings => {
    const match = document.cookie.match(new RegExp(`(^| )${APP_CONFIG.COOKIE_NAME}=([^;]+)`));

    if (!match) return { ...DEFAULTS };

    try {
        const data = JSON.parse(match[2]);
        return {
            theme: data.t === 'dark' ? 'dark' : DEFAULTS.theme,
            language: data.l === 'en' ? 'en' : DEFAULTS.language
        };
    } catch {
        return { ...DEFAULTS };
    }
};

const settings = parseSettings();

const saveSettings = (): void => {
    const value = JSON.stringify({ t: settings.theme, l: settings.language });
    document.cookie = `${APP_CONFIG.COOKIE_NAME}=${value}; path=/; max-age=${APP_CONFIG.COOKIE_MAX_AGE}; SameSite=Lax`;
};

export const getTheme = (): Theme => settings.theme;

export const getLanguage = (): Language => settings.language;

export const setTheme = (theme: Theme): void => {
    settings.theme = theme;
    saveSettings();
};

export const setLanguage = (language: Language): void => {
    settings.language = language;
    saveSettings();
};
