import { API_CONFIG, CRYPTO_CURRENCIES } from '../../../constants/currency';
import type { ExchangeRate, CoinGeckoResponse, CryptoConfig } from '../../../types/currency';
import { fetchWithTimeout, getCurrentDate } from './base.client';

export class CoinGeckoClient {
    private readonly baseUrl = API_CONFIG.COINGECKO_BASE_URL;

    async fetchCryptoRates(): Promise<ExchangeRate[]> {
        try {
            const ids = CRYPTO_CURRENCIES.map(c => c.id).join(',');
            const url = `${this.baseUrl}/simple/price?ids=${ids}&vs_currencies=pln`;
            const response = await fetchWithTimeout(url);

            if (!response.ok) {
                console.warn(`CoinGecko API returned ${response.status}`);
                return this.createErrorPlaceholders();
            }

            const data: CoinGeckoResponse = await response.json();
            const currentDate = getCurrentDate();

            return CRYPTO_CURRENCIES.map(crypto =>
                this.transformCryptoData(crypto, data, currentDate)
            );
        } catch (error) {
            console.warn('Error fetching crypto rates:', error);
            return this.createErrorPlaceholders();
        }
    }

    private transformCryptoData(
        crypto: CryptoConfig,
        data: CoinGeckoResponse,
        date: string
    ): ExchangeRate {
        const rate = data[crypto.id]?.pln;

        if (rate) {
            return {
                code: crypto.code,
                currency: crypto.name,
                name: crypto.name,
                rate,
                date,
                table: 'crypto',
                type: 'crypto',
            };
        }

        return {
            code: crypto.code,
            currency: crypto.name,
            name: crypto.name,
            rate: 0,
            date,
            table: 'crypto',
            type: 'crypto',
            error: 'Data not available',
        };
    }

    private createErrorPlaceholders(): ExchangeRate[] {
        const currentDate = getCurrentDate();
        return CRYPTO_CURRENCIES.map(crypto => ({
            code: crypto.code,
            currency: crypto.name,
            name: crypto.name,
            rate: 0,
            date: currentDate,
            table: 'crypto',
            type: 'crypto' as const,
            error: 'Failed to fetch rate',
        }));
    }
}
