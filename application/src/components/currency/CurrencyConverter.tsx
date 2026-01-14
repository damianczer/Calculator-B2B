import { memo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExchangeRate } from '../../types/currency';
import Card from '../common/Card';
import { CustomDropdown } from '../common/CustomDropdown';
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter';
import { SwapIcon } from '../common/icons';
import { sanitizeNumberInput } from '../../utils/validation';
import {
    CURRENCY_INPUT_CLASSES,
    CURRENCY_DROPDOWN_CLASSES,
    CURRENCY_SWAP_BUTTON_CLASSES,
    CURRENCY_RESULT_CONTAINER_CLASSES,
    CURRENCY_RESULT_VALUE_CLASSES,
    CURRENCY_CONVERTER_HEADER_CLASSES,
    CURRENCY_CONVERTER_TITLE_CLASSES,
} from '../../constants/styles';

interface CurrencyConverterProps {
    rates: ExchangeRate[];
}

export const CurrencyConverter = memo<CurrencyConverterProps>(({ rates }) => {
    const { t } = useTranslation();
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const {
        amount,
        fromCurrency,
        toCurrency,
        result,
        allCurrencies,
        setAmount,
        setFromCurrency,
        setToCurrency,
        swapCurrencies,
    } = useCurrencyConverter({ rates });

    const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitized = sanitizeNumberInput(e.target.value);
        setAmount(sanitized);
    }, [setAmount]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
        }
    }, []);

    return (
        <Card>
            <div className={CURRENCY_CONVERTER_HEADER_CLASSES}>
                <h2 className={CURRENCY_CONVERTER_TITLE_CLASSES}>
                    {t('currencies.converter.title')}
                </h2>
            </div>
            <div className="px-6 pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr,auto,1fr] gap-3 pb-4">
                    <div>
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            onKeyDown={handleKeyDown}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={CURRENCY_INPUT_CLASSES}
                            placeholder={isFocused ? '' : '0.00'}
                            step="0.01"
                            min="0"
                        />
                    </div>
                    <div>
                        <CustomDropdown
                            value={fromCurrency}
                            onChange={setFromCurrency}
                            options={allCurrencies}
                            className={CURRENCY_DROPDOWN_CLASSES}
                        />
                    </div>
                    <div className="flex items-center justify-center h-[50px]">
                        <button
                            onClick={swapCurrencies}
                            className={CURRENCY_SWAP_BUTTON_CLASSES}
                            title={t('currencies.converter.swap')}
                            aria-label={t('currencies.converter.swap')}
                            type="button"
                        >
                            <SwapIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                        </button>
                    </div>
                    <div>
                        <CustomDropdown
                            value={toCurrency}
                            onChange={setToCurrency}
                            options={allCurrencies}
                            className={CURRENCY_DROPDOWN_CLASSES}
                        />
                    </div>
                    <div>
                        <div className={CURRENCY_RESULT_CONTAINER_CLASSES}>
                            <div className={CURRENCY_RESULT_VALUE_CLASSES}>
                                {result.toFixed(4)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
});

CurrencyConverter.displayName = 'CurrencyConverter';

