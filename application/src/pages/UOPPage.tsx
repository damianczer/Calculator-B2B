import { memo } from 'react';
import ComingSoonPage from '../components/common/ComingSoonPage';
import { ClockIcon } from '../components/common/icons';

const UOPPage = memo(() => {
    return (
        <ComingSoonPage
            title="Kalkulator UOP"
            description="Narzędzie do obliczania wynagrodzenia dla umowy o pracę"
            icon={<ClockIcon className="w-10 h-10 text-slate-400" />}
        />
    );
});

UOPPage.displayName = 'UOPPage';

export default UOPPage;
