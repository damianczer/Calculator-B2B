import { useState, useMemo, useCallback } from 'react';
import type { Currency, UseCurrencyConverterProps, UseCurrencyConverterReturn } from '../types/currency';

export const useCurrencyConverter = ({
    rates,
    defaultFromCurrency = 'PLN',
    defaultToCurrency = 'USD',
}: UseCurrencyConverterProps): UseCurrencyConverterReturn => {
    const [amount, setAmount] = useState<string>('');
    const [fromCurrency, setFromCurrency] = useState<string>(defaultFromCurrency);
    const [toCurrency, setToCurrency] = useState<string>(defaultToCurrency);

    const allCurrencies = useMemo<Currency[]>(() => [
        { code: 'PLN', name: 'Polski złoty', currency: 'Polski złoty', rate: 1 },
        ...rates,
    ], [rates]);

    const isValidAmount = useMemo(() => {
        const num = Number(amount);
        return amount !== '' && !isNaN(num) && num >= 0;
    }, [amount]);

    const result = useMemo(() => {
        if (!isValidAmount) return 0;

        const numAmount = Number(amount);
        const fromRate = allCurrencies.find(c => c.code === fromCurrency)?.rate ?? 1;
        const toRate = allCurrencies.find(c => c.code === toCurrency)?.rate ?? 1;
        const inPLN = fromCurrency === 'PLN' ? numAmount : numAmount * fromRate;
        const convertedResult = toCurrency === 'PLN' ? inPLN : inPLN / toRate;

        return convertedResult;
    }, [amount, fromCurrency, toCurrency, allCurrencies, isValidAmount]);

    const swapCurrencies = useCallback(() => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }, [fromCurrency, toCurrency]);

    return {
        amount,
        fromCurrency,
        toCurrency,
        result,
        allCurrencies,
        setAmount,
        setFromCurrency,
        setToCurrency,
        swapCurrencies,
        isValidAmount,
    };
};
