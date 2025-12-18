import { memo, useMemo } from 'react';
import { APP_NAME, SOCIAL_LINKS } from '../../constants/app';

const Footer = memo(() => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
            <div className="w-full py-4 flex justify-center">
                <div className="flex items-center gap-6">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Copyright © {currentYear} {APP_NAME}. All rights reserved.
                    </p>
                    <span className="text-slate-300 dark:text-slate-700 text-sm">|</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Author:</span>
                        <a
                            href={SOCIAL_LINKS.author.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-900 dark:text-slate-100 font-medium transition-colors hover:text-green-600 dark:hover:text-green-500"
                            aria-label={SOCIAL_LINKS.author.label}
                        >
                            {SOCIAL_LINKS.author.label}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
