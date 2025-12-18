import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import type { ComingSoonPageProps } from '../../types/components';

const ComingSoonPage: FC<ComingSoonPageProps> = memo(({ title, description, icon }) => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-full flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-12 text-center border
                 border-slate-200 dark:border-slate-700">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100
                     dark:bg-slate-700 rounded-full mb-6">
                        {icon}
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        {title}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-2">
                        {description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700
                     dark:text-slate-300 rounded-full text-sm font-medium mt-4">
                        {t('common.comingSoon')}
                    </div>
                </div>
            </div>
        </div>
    );
});

ComingSoonPage.displayName = 'ComingSoonPage';

export default ComingSoonPage;
