import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ComingSoonPage from '../components/common/ComingSoonPage';
import { ClockIcon } from '../components/common/icons';

const UOPPage = memo(() => {
    const { t } = useTranslation();

    return (
        <ComingSoonPage
            title={t('pages.uop.title')}
            description={t('pages.uop.description')}
            icon={<ClockIcon className="w-10 h-10 text-slate-400" />}
        />
    );
});

UOPPage.displayName = 'UOPPage';

export default UOPPage;
