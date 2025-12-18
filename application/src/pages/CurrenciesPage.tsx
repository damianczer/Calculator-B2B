import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ComingSoonPage from '../components/common/ComingSoonPage';
import { CurrencyIcon } from '../components/common/icons';

const CurrenciesPage = memo(() => {
    const { t } = useTranslation();

    return (
        <ComingSoonPage
            title={t('pages.currencies.title')}
            description={t('pages.currencies.description')}
            icon={<CurrencyIcon className="w-10 h-10 text-slate-400" />}
        />
    );
});

CurrenciesPage.displayName = 'CurrenciesPage';

export default CurrenciesPage;
