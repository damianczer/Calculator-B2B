import { useState, useEffect, useCallback } from 'react';
import { fetchMultipleRates, fetchCryptoRates, fetchGoldPrice } from '../services/currency/currency.service';
import type { ExchangeRate } from '../types/currency';
import type { CachedRatesData, UseCurrencyRatesReturn } from '../types/currency';
import { loadFromCache, saveToCache } from '../utils/cache';
import { CURRENCY_CONFIG } from '../constants/currency';

export const useCurrencyRates = (): UseCurrencyRatesReturn => {
    const [rates, setRates] = useState<ExchangeRate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

    const loadRates = useCallback(async (forceRefresh = false) => {
        if (!forceRefresh) {
            const cached = loadFromCache<CachedRatesData>(CURRENCY_CONFIG.CACHE_KEY, CURRENCY_CONFIG.CACHE_TTL);
            if (cached) {
                setRates(cached.rates);
                setLastUpdate(new Date(cached.timestamp));
                setLoading(false);
                return;
            }
        }

        try {
            setLoading(true);
            setError(null);

            const [fiatRates, cryptoRates, goldPrice] = await Promise.all([
                fetchMultipleRates([...CURRENCY_CONFIG.SUPPORTED_CURRENCIES]),
                fetchCryptoRates(),
                fetchGoldPrice(),
            ]);

            const allRates = [...fiatRates, ...cryptoRates, goldPrice];
            const allHaveErrors = allRates.every(rate => rate.error);

            if (allHaveErrors) {
                setError('Failed to load any exchange rates');
            } else {
                const now = Date.now();
                setRates(allRates);
                setLastUpdate(new Date(now));
                saveToCache<CachedRatesData>(CURRENCY_CONFIG.CACHE_KEY, { rates: allRates, timestamp: now });
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to load exchange rates';
            setError(errorMessage);
            console.error('Failed to load exchange rates:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    const refresh = useCallback(async () => {
        await loadRates(true);
    }, [loadRates]);

    useEffect(() => {
        loadRates();

        const interval = setInterval(() => loadRates(), CURRENCY_CONFIG.REFRESH_INTERVAL);

        return () => clearInterval(interval);
    }, [loadRates]);

    return {
        rates,
        loading,
        error,
        lastUpdate,
        refresh,
    };
};
