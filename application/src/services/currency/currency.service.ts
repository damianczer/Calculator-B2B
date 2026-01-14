import { NBPClient } from './clients/nbp.client';
import { CoinGeckoClient } from './clients/coingecko.client';
import type { ExchangeRate } from '../../types/currency';
import { retryWithBackoff, logError } from '../../utils/errorHandling';

class CurrencyService {
    private readonly nbpClient = new NBPClient();
    private readonly coinGeckoClient = new CoinGeckoClient();

    async fetchExchangeRate(currencyCode: string): Promise<ExchangeRate> {
        return retryWithBackoff(
            () => this.nbpClient.fetchExchangeRate(currencyCode),
            3,
            1000
        ).catch(error => {
            logError('CurrencyService.fetchExchangeRate', error);
            throw error;
        });
    }

    async fetchMultipleRates(currencyCodes: string[]): Promise<ExchangeRate[]> {
        const results = await Promise.allSettled(
            currencyCodes.map(code => retryWithBackoff(
                () => this.nbpClient.fetchExchangeRate(code),
                2,
                1000
            ))
        );

        return results.map((result, index) => {
            if (result.status === 'fulfilled') {
                return result.value;
            }

            const code = currencyCodes[index];
            logError(`CurrencyService.fetchMultipleRates[${code}]`, result.reason);

            return {
                code,
                currency: code,
                rate: 0,
                date: new Date().toISOString().split('T')[0],
                table: 'error',
                type: 'fiat' as const,
                error: result.reason?.message || 'Failed to fetch rate',
            };
        });
    }

    async fetchCryptoRates(): Promise<ExchangeRate[]> {
        return retryWithBackoff(
            () => this.coinGeckoClient.fetchCryptoRates(),
            3,
            2000
        ).catch(error => {
            logError('CurrencyService.fetchCryptoRates', error);
            throw error;
        });
    }

    async fetchGoldPrice(): Promise<ExchangeRate> {
        return retryWithBackoff(
            () => this.nbpClient.fetchGoldPrice(),
            3,
            1000
        ).catch(error => {
            logError('CurrencyService.fetchGoldPrice', error);
            throw error;
        });
    }

    async fetchAllRates(currencyCodes: string[]): Promise<{
        fiatRates: ExchangeRate[];
        cryptoRates: ExchangeRate[];
        goldPrice: ExchangeRate;
    }> {
        const [fiatRates, cryptoRates, goldPrice] = await Promise.all([
            this.fetchMultipleRates(currencyCodes),
            this.fetchCryptoRates(),
            this.fetchGoldPrice(),
        ]);

        return { fiatRates, cryptoRates, goldPrice };
    }
}

const currencyService = new CurrencyService();

export const fetchExchangeRate = (currencyCode: string) =>
    currencyService.fetchExchangeRate(currencyCode);

export const fetchMultipleRates = (currencyCodes: string[]) =>
    currencyService.fetchMultipleRates(currencyCodes);

export const fetchCryptoRates = () =>
    currencyService.fetchCryptoRates();

export const fetchGoldPrice = () =>
    currencyService.fetchGoldPrice();

export const fetchAllRates = (currencyCodes: string[]) =>
    currencyService.fetchAllRates(currencyCodes);
