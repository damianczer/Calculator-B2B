import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../common/Modal';
import PITDetails from './PITDetails';
import VATDetails from './VATDetails';
import ZUSDetails from './ZUSDetails';
import HealthDetails from './HealthDetails';
import type { DetailedBreakdown } from '../../../types/calculator';

type BreakdownType = 'pit' | 'vat' | 'zus' | 'health' | null;

interface BreakdownModalProps {
    type: BreakdownType;
    onClose: () => void;
    data: DetailedBreakdown[keyof DetailedBreakdown] | null;
}

const BreakdownModal: FC<BreakdownModalProps> = memo(({ type, onClose, data }) => {
    const { t } = useTranslation();

    const getTitle = () => {
        if (!type) return '';
        return t(`calculator.results.breakdown.${type}.title`);
    };

    return (
        <Modal isOpen={!!type} onClose={onClose} title={getTitle()}>
            {type === 'pit' && data && <PITDetails data={data as DetailedBreakdown['pit']} />}
            {type === 'vat' && data && <VATDetails data={data as DetailedBreakdown['vat']} />}
            {type === 'zus' && data && <ZUSDetails data={data as DetailedBreakdown['zus']} />}
            {type === 'health' && data && <HealthDetails data={data as DetailedBreakdown['health']} />}
        </Modal>
    );
});

BreakdownModal.displayName = 'BreakdownModal';

export default BreakdownModal;
