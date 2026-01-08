import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_LINKS } from '../../constants/app';
import { ROUTES } from '../../constants/routes';
import { HEADER_CLASSES } from '../../constants/styles';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { SunIcon, MoonIcon, CalculatorIcon } from '../common/icons';
import type { HeaderProps } from '../../types/components';

const Header = memo<HeaderProps>(() => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <header className={HEADER_CLASSES}>
            <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
                <div className="hidden md:flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <h1 className="text-2xl font-bold tracking-tight font-sans whitespace-nowrap flex items-center gap-2">
                            <CalculatorIcon className="w-7 h-7 text-white" />
                            <span className="text-white">
                                Calculator
                            </span>
                            {' '}
                            <span className="text-blue-100">B2B</span>
                        </h1>
                        <span className="text-blue-200 text-lg -mb-0.5">|</span>
                        <Link
                            to={ROUTES.GUIDE}
                            className="text-lg font-medium text-blue-50 hover:text-white transition-colors -mb-0.5"
                        >
                            {t('header.guide')}
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <nav className="flex items-center" aria-label="Main navigation">
                            <div className="inline-flex bg-white/10 rounded-lg p-1 gap-1">
                                {NAVIGATION_LINKS.map((link, index) => (
                                    <React.Fragment key={link.path}>
                                        <Link
                                            to={link.path}
                                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 
                                                ${location.pathname === link.path
                                                    ? 'bg-white/70 text-blue-700 shadow-sm'
                                                    : 'text-blue-50 hover:text-white hover:bg-white/20'
                                                }`}
                                        >
                                            {t(link.labelKey)}
                                        </Link>
                                        {index < NAVIGATION_LINKS.length - 1 && !NAVIGATION_LINKS.some(l => l.path === location.pathname)
                                            && (
                                                <div className="w-px h-6 bg-white/20 self-center" />
                                            )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </nav>

                        <button
                            onClick={toggleLanguage}
                            className="h-10 w-10 flex items-center justify-center font-medium text-sm rounded-lg bg-white/10 text-blue-50 hover:text-white hover:bg-white/20 transition-all"
                            aria-label="Toggle language"
                        >
                            {language === 'pl' ? 'EN' : 'PL'}
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/10 text-blue-50 hover:text-white hover:bg-white/20 transition-all"
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

                <div className="md:hidden py-3 space-y-3">
                    <div className="flex items-center justify-between pl-2">
                        <div className="flex items-center gap-2">
                            <h1 className="text-lg font-bold tracking-tight font-sans whitespace-nowrap flex items-center gap-1.5">
                                <CalculatorIcon className="w-5 h-5 text-white" />
                                <span className="text-white">Calculator</span>
                                {' '}
                                <span className="text-blue-100">B2B</span>
                            </h1>
                            <span className="text-blue-200 text-sm">|</span>
                            <Link
                                to={ROUTES.GUIDE}
                                className="text-sm font-medium text-blue-50 hover:text-white transition-colors"
                            >
                                {t('header.guide')}
                            </Link>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleLanguage}
                                className="h-9 w-9 flex items-center justify-center font-medium text-xs rounded-lg bg-white/10 text-blue-50 hover:text-white hover:bg-white/20 transition-all"
                                aria-label="Toggle language"
                            >
                                {language === 'pl' ? 'EN' : 'PL'}
                            </button>

                            <button
                                onClick={toggleTheme}
                                className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 text-blue-50 hover:text-white hover:bg-white/20 transition-all"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? (
                                    <MoonIcon className="w-4 h-4" />
                                ) : (
                                    <SunIcon className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    <nav className="flex items-center" aria-label="Main navigation">
                        <div className="inline-flex bg-white/10 rounded-lg p-1 gap-1 w-full items-center">
                            {NAVIGATION_LINKS.map((link, index) => (
                                <React.Fragment key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`flex-1 px-2 py-1.5 text-xs font-medium rounded-md transition-all duration-200 text-center
                                            ${location.pathname === link.path
                                                ? 'bg-white/70 text-blue-700 shadow-sm'
                                                : 'text-blue-50 hover:text-white hover:bg-white/20'
                                            }`}
                                    >
                                        {t(link.labelKey)}
                                    </Link>
                                    {index < NAVIGATION_LINKS.length - 1 && !NAVIGATION_LINKS.some(l => l.path === location.pathname) && (
                                        <div className="w-px h-6 bg-white/20" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;
