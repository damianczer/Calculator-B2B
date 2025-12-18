import { createContext, useState, useCallback, type FC, type ReactNode } from 'react';
import { getTheme, setTheme as saveTheme } from '../utils/cookies';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getTheme);
    const [isLoading, setIsLoading] = useState(false);

    const toggleTheme = useCallback(() => {
        setIsLoading(true);

        const newTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(newTheme);
        saveTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');

        setTimeout(() => setIsLoading(false), 400);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isLoading }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
