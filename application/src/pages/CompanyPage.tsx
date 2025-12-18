import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ComingSoonPage from '../components/common/ComingSoonPage';
import { BuildingIcon } from '../components/common/icons';

const CompanyPage = memo(() => {
    const { t } = useTranslation();

    return (
        <ComingSoonPage
            title={t('pages.company.title')}
            description={t('pages.company.description')}
            icon={<BuildingIcon className="w-10 h-10 text-slate-400" />}
        />
    );
});

CompanyPage.displayName = 'CompanyPage';

export default CompanyPage;
