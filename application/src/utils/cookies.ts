const THEME_KEY = 'theme';

export const getTheme = (): 'light' | 'dark' => {
    return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
};

export const setTheme = (theme: 'light' | 'dark'): void => {
    localStorage.setItem(THEME_KEY, theme);
};
