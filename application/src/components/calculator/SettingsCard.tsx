import type { FC } from 'react';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import { SelectField, CheckboxField } from '../common/FormField';
import type { TaxForm, ZUSType } from '../../types/calculator';

const TAX_FORMS: TaxForm[] = ['Skala podatkowa', 'Podatek liniowy 19%', 'Ryczałt'];
const ZUS_TYPES: ZUSType[] = ['Pełny ZUS', 'Mały ZUS+', 'Ulga na start'];

const SettingsCard: FC = () => {
    return (
        <Card>
            <CardHeader title="Ustawienia" subtitle="Podatki, ZUS, ulgi" />
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
                <SelectField
                    id="tax-form"
                    label="Forma opodatkowania"
                    options={TAX_FORMS}
                />

                <SelectField
                    id="zus-type"
                    label="ZUS"
                    options={ZUS_TYPES}
                />

                <div className="space-y-1.5">
                    <CheckboxField label="Dobrowolne chorobowe" />
                    <CheckboxField label="Odłóż na urlop" />
                    <CheckboxField label="Rozliczenie wspólne" />
                    <CheckboxField label="IP BOX" />
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-slate-900 rounded text-xs border border-gray-300 dark:border-slate-700">
                        <span className="font-medium text-gray-700 dark:text-slate-300">Ulga na powrót</span>
                        <span className="text-gray-500 dark:text-slate-500">(85k)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-slate-900 rounded text-xs border border-gray-300 dark:border-slate-700">
                        <span className="font-medium text-gray-700 dark:text-slate-300">PIT 0</span>
                        <span className="text-gray-500 dark:text-slate-500">(soon)</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SettingsCard;
