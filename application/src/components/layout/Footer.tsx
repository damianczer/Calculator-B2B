import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_NAME, SOCIAL_LINKS } from '../../constants/app';
import { ROUTES } from '../../constants/routes';

const Footer = memo(() => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const { t } = useTranslation();

    return (
        <footer className="mt-auto bg-white dark:bg-slate-900 transition-colors shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
            <div className="w-full py-3 sm:py-4 lg:py-6 flex justify-center px-4">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        {t('footer.copyright', { year: currentYear, appName: APP_NAME })}
                    </p>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700 text-sm">|</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600 dark:text-slate-400">{t('footer.author')}</span>
                        <a
                            href={SOCIAL_LINKS.author.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 dark:text-blue-400 font-medium transition-colors
                             hover:text-blue-500 dark:hover:text-blue-300"
                            aria-label={SOCIAL_LINKS.author.label}
                        >
                            {SOCIAL_LINKS.author.label}
                        </a>
                    </div>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700 text-sm">|</span>
                    <div className="flex items-center gap-4">
                        <Link
                            to={ROUTES.TERMS}
                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 
                            dark:hover:text-blue-400 transition-colors"
                        >
                            {t('footer.terms')}
                        </Link>
                        <Link
                            to={ROUTES.PRIVACY}
                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 
                            dark:hover:text-blue-400 transition-colors"
                        >
                            {t('footer.privacy')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
