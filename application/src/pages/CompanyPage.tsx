import { memo } from 'react';
import ComingSoonPage from '../components/common/ComingSoonPage';
import { BuildingIcon } from '../components/common/icons';

const CompanyPage = memo(() => {
    return (
        <ComingSoonPage
            title="Kalkulator Spółka"
            description="Narzędzie do obliczania rozliczeń dla spółki"
            icon={<BuildingIcon className="w-10 h-10 text-slate-400" />}
        />
    );
});

CompanyPage.displayName = 'CompanyPage';

export default CompanyPage;
