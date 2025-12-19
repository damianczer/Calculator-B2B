import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CurrencyCard } from '../components/currency/CurrencyCard';
import { CurrencyConverter } from '../components/currency/CurrencyConverter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useCurrencyRates } from '../hooks/useCurrencyRates';

const CurrenciesPage = memo(() => {
    const { t } = useTranslation();
    const { rates, loading, error, lastUpdate, refresh } = useCurrencyRates();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
                    <button
                        onClick={refresh}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        aria-label={t('currencies.retry')}
                    >
                        {t('currencies.retry')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-slate-50 dark:bg-slate-950">
            <div className="max-w-[1600px] mx-auto w-full flex flex-col h-full">
                <div className="min-h-full flex flex-col border-x border-slate-200 dark:border-slate-800
                 bg-white dark:bg-slate-900 overflow-y-auto">
                    <div className="px-4 lg:px-8 py-6 space-y-6 my-auto">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                            <div className="text-center lg:text-left">
                                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    {t('currencies.title')}
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {t('currencies.description')}
                                </p>
                            </div>
                            <button
                                onClick={refresh}
                                disabled={loading}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                                transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm 
                                font-medium whitespace-nowrap"
                                aria-label={t('currencies.refresh')}
                            >
                                {t('currencies.refresh')}
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {rates.map(rate => (
                                <CurrencyCard key={rate.code} rate={rate} lastUpdate={lastUpdate} />
                            ))}
                        </div>
                        <div className="text-center py-4">
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                {t('currencies.converterDescription.title')}
                            </h2>
                            <p className="text-base text-slate-600 dark:text-slate-400">
                                {t('currencies.converterDescription.subtitle')}
                            </p>
                        </div>
                        <CurrencyConverter rates={rates} />
                    </div>
                </div>
            </div>
        </div>
    );
});

CurrenciesPage.displayName = 'CurrenciesPage';

export default CurrenciesPage;

