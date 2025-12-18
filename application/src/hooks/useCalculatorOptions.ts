import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TaxForm, ZUSType } from '../types/calculator';

export const useTaxForms = () => {
    const { t } = useTranslation();

    return useMemo(() => [
        { value: TaxForm.TAX_SCALE, label: t('taxForms.taxScale') },
        { value: TaxForm.FLAT_19, label: t('taxForms.flat19') },
        { value: TaxForm.LUMP_SUM, label: t('taxForms.lumpSum') }
    ], [t]);
};

export const useZUSTypes = () => {
    const { t } = useTranslation();

    return useMemo(() => [
        { value: ZUSType.FULL, label: t('zusTypes.full') },
        { value: ZUSType.SMALL, label: t('zusTypes.small') },
        { value: ZUSType.STARTUP, label: t('zusTypes.startup') }
    ], [t]);
};
