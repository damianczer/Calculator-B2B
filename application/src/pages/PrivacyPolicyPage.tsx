import { memo } from 'react';
import LegalPage from '../components/common/LegalPage';

const PrivacyPolicyPage = memo(() => {
    return <LegalPage translationKey="privacy" sectionsCount={3} />;
});

PrivacyPolicyPage.displayName = 'PrivacyPolicyPage';

export default PrivacyPolicyPage;
