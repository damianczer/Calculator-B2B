import { memo } from 'react';
import LegalPage from '../components/common/LegalPage';

const TermsOfServicePage = memo(() => {
    return <LegalPage translationKey="terms" sectionsCount={3} />;
});

TermsOfServicePage.displayName = 'TermsOfServicePage';

export default TermsOfServicePage;
