import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_LINKS } from '../../constants/app';
import { ROUTES } from '../../constants/routes';
import { HEADER_CLASSES, HEADER_BUTTON_BASE } from '../../constants/styles';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { SunIcon, MoonIcon } from '../common/icons';
import type { HeaderProps } from '../../types/components';

const Header = memo<HeaderProps>(() => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <header className={HEADER_CLASSES}>
            <div className="flex h-16 items-center justify-between mx-auto max-w-[1600px] px-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight font-sans">
                        <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100
                         dark:to-slate-400 bg-clip-text text-transparent">
                            Calculator
                        </span>
                        {' '}
                        <span className="text-slate-400 dark:text-slate-500">B2B</span>
                    </h1>
                    <span className="text-slate-300 dark:text-slate-600 text-lg -mb-0.5">|</span>
                    <Link
                        to={ROUTES.GUIDE}
                        className="text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900
                         dark:hover:text-slate-100 transition-colors -mb-0.5"
                    >
                        {t('header.guide')}
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center" aria-label="Main navigation">
                        <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1">
                            {NAVIGATION_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 
                                        ${location.pathname === link.path
                                            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                                        }`}
                                >
                                    {t(link.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <button
                        onClick={toggleLanguage}
                        className={`${HEADER_BUTTON_BASE} w-10 h-10 flex items-center justify-center font-medium text-sm`}
                        aria-label="Toggle language"
                    >
                        {language === 'pl' ? 'EN' : 'PL'}
                    </button>

                    <button
                        onClick={toggleTheme}
                        className={`${HEADER_BUTTON_BASE} w-10 h-10 flex items-center justify-center`}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="w-5 h-5" />
                        ) : (
                            <SunIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;
