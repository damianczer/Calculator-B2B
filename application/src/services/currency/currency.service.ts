import { NBPClient } from './clients/nbp.client';
import { CoinGeckoClient } from './clients/coingecko.client';
import type { ExchangeRate } from '../../types/currency';

class CurrencyService {
    private readonly nbpClient = new NBPClient();
    private readonly coinGeckoClient = new CoinGeckoClient();

    async fetchExchangeRate(currencyCode: string): Promise<ExchangeRate> {
        return this.nbpClient.fetchExchangeRate(currencyCode);
    }

    async fetchMultipleRates(currencyCodes: string[]): Promise<ExchangeRate[]> {
        const results = await Promise.allSettled(
            currencyCodes.map(code => this.nbpClient.fetchExchangeRate(code))
        );

        return results.map((result, index) => {
            if (result.status === 'fulfilled') {
                return result.value;
            }

            const code = currencyCodes[index];
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
        return this.coinGeckoClient.fetchCryptoRates();
    }

    async fetchGoldPrice(): Promise<ExchangeRate> {
        return this.nbpClient.fetchGoldPrice();
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
