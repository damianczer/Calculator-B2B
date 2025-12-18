import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import { SelectField, CheckboxField } from '../common/FormField';
import { useTaxForms, useZUSTypes } from '../../hooks/useCalculatorOptions';

const SettingsCard: FC = () => {
    const { t } = useTranslation();
    const taxForms = useTaxForms();
    const zusTypes = useZUSTypes();

    return (
        <Card>
            <CardHeader title={t('calculator.settings.title')} subtitle={t('calculator.settings.subtitle')} />
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
                <SelectField
                    id="tax-form"
                    label={t('calculator.settings.taxForm')}
                    options={taxForms.map(opt => opt.label)}
                />

                <SelectField
                    id="zus-type"
                    label={t('calculator.settings.zus')}
                    options={zusTypes.map(opt => opt.label)}
                />

                <div className="space-y-1.5">
                    <CheckboxField label={t('calculator.settings.voluntarySickness')} />
                    <CheckboxField label={t('calculator.settings.saveForVacation')} />
                    <CheckboxField label={t('calculator.settings.jointSettlement')} />
                    <CheckboxField label={t('calculator.settings.ipBox')} />
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50
                     dark:bg-slate-900 rounded text-xs border border-gray-300 dark:border-slate-700">
                        <span className="font-medium text-gray-700 dark:text-slate-300">
                            {t('calculator.settings.returnRelief')}</span>
                        <span className="text-gray-500 dark:text-slate-500">(85k)

                        </span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-slate-900 
                    rounded text-xs border border-gray-300 dark:border-slate-700">
                        <span className="font-medium text-gray-700 dark:text-slate-300">
                            {t('calculator.settings.pit0')}</span>
                        <span className="text-gray-500 dark:text-slate-500">(soon)
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SettingsCard;
