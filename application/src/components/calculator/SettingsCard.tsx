import { memo, useCallback, useMemo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import { CheckboxField } from '../common/FormField';
import { CustomDropdown } from '../common/CustomDropdown';
import { useTaxForms, useZUSTypes } from '../../hooks/useCalculatorOptions';
import type { CalculatorSettings } from '../../hooks/useB2BCalculator';
import { SettingsIcon } from '../common/icons';

interface SettingsCardProps {
    settings: CalculatorSettings;
    setSettings: React.Dispatch<React.SetStateAction<CalculatorSettings>>;
}

const SettingsCard: FC<SettingsCardProps> = memo(({ settings, setSettings }) => {
    const { t } = useTranslation();
    const taxForms = useTaxForms();
    const zusTypes = useZUSTypes();

    const updateSetting = useCallback(<K extends keyof CalculatorSettings>(
        key: K,
        value: CalculatorSettings[K]
    ) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    }, [setSettings]);

    const currentTaxForm = useMemo(() =>
        taxForms.find(form => form.value === settings.taxForm),
        [taxForms, settings.taxForm]
    );

    const currentZUSType = useMemo(() =>
        zusTypes.find(type => type.value === settings.zusType),
        [zusTypes, settings.zusType]
    );

    const isStartupRelief = settings.zusType === 'startup';
    const isLumpSum = settings.taxForm === 'lumpSum';

    const voluntarySicknessLabel = isStartupRelief
        ? `${t('calculator.settings.voluntarySickness')} ${t('calculator.settings.voluntarySicknessNotAllowed')}`
        : t('calculator.settings.voluntarySickness');

    return (
        <Card>
            <CardHeader
                title={t('calculator.settings.title')}
                subtitle={t('calculator.settings.subtitle')}
                icon={<SettingsIcon />}
            />
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
                <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                        {t('calculator.settings.taxForm')}
                    </label>
                    <CustomDropdown
                        value={currentTaxForm?.label || ''}
                        onChange={(label) => {
                            const selected = taxForms.find(form => form.label === label);
                            if (selected) updateSetting('taxForm', selected.value);
                        }}
                        options={taxForms.map(opt => ({ code: opt.label }))}
                        className="w-full px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600
                         rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600
                         dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900
                         text-slate-900 dark:text-slate-100"
                    />
                </div>

                {isLumpSum && (
                    <div>
                        <CustomDropdown
                            value={settings.lumpSumRate}
                            onChange={(value) => updateSetting('lumpSumRate', value)}
                            options={[
                                { code: '2', name: t('calculator.settings.lumpSumRates.2') },
                                { code: '3', name: t('calculator.settings.lumpSumRates.3') },
                                { code: '5.5', name: t('calculator.settings.lumpSumRates.5.5') },
                                { code: '8.5', name: t('calculator.settings.lumpSumRates.8.5') },
                                { code: '10', name: t('calculator.settings.lumpSumRates.10') },
                                { code: '12', name: t('calculator.settings.lumpSumRates.12') },
                                { code: '12.5', name: t('calculator.settings.lumpSumRates.12.5') },
                                { code: '14', name: t('calculator.settings.lumpSumRates.14') },
                                { code: '15', name: t('calculator.settings.lumpSumRates.15') },
                                { code: '17', name: t('calculator.settings.lumpSumRates.17') }
                            ]}
                            className="w-full px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600
                            rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1
                            focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white
                            dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                            label={t('calculator.settings.lumpSumRate')}
                        />
                    </div>
                )}

                <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                        {t('calculator.settings.zus')}
                    </label>
                    <CustomDropdown
                        value={currentZUSType?.label || ''}
                        onChange={(label) => {
                            const selected = zusTypes.find(type => type.label === label);
                            if (selected) updateSetting('zusType', selected.value);
                        }}
                        options={zusTypes.map(opt => ({ code: opt.label }))}
                        className="w-full px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600
                         rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600
                          dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900
                           text-slate-900 dark:text-slate-100"
                    />
                </div>

                <div className="space-y-1.5">
                    <CheckboxField
                        label={voluntarySicknessLabel}
                        checked={settings.voluntarySickness}
                        onChange={(e) => updateSetting('voluntarySickness', e.target.checked)}
                        disabled={isStartupRelief}
                    />
                    <CheckboxField
                        label={t('calculator.settings.saveForVacation')}
                        checked={settings.saveForVacation}
                        onChange={(e) => updateSetting('saveForVacation', e.target.checked)}
                    />
                    <CheckboxField
                        label={t('calculator.settings.jointSettlement')}
                        checked={settings.jointSettlement}
                        onChange={(e) => updateSetting('jointSettlement', e.target.checked)}
                    />
                    <CheckboxField
                        label={t('calculator.settings.ipBox')}
                        checked={settings.ipBox}
                        onChange={(e) => updateSetting('ipBox', e.target.checked)}
                    />
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-slate-700 space-y-2">
                    <div className="p-3 bg-gray-50 dark:bg-slate-900 rounded border border-gray-300
                     dark:border-slate-700">
                        <CheckboxField
                            label={`${t('calculator.settings.pit0')} (${t('calculator.settings.pit0Limit')})`}
                            checked={settings.pit0}
                            onChange={(e) => updateSetting('pit0', e.target.checked)}
                        />
                        <p className="mt-2 text-xs text-gray-600 dark:text-slate-400 leading-relaxed">
                            {t('calculator.settings.pit0Description')}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
});

SettingsCard.displayName = 'SettingsCard';

export default SettingsCard;
