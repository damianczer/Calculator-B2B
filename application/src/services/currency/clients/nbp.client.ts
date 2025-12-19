import { API_CONFIG, COMMODITY_CONFIG } from '../../../constants/currency';
import { APIError, type ExchangeRate, type NBPResponse } from '../../../types/currency';
import { fetchWithTimeout, getCurrentDate } from './base.client';

export class NBPClient {
    private readonly baseUrl = API_CONFIG.NBP_BASE_URL;

    async fetchExchangeRate(currencyCode: string): Promise<ExchangeRate> {
        try {
            const url = `${this.baseUrl}/exchangerates/rates/a/${currencyCode}/?format=json`;
            const response = await fetchWithTimeout(url);

            if (!response.ok) {
                throw new APIError(
                    `Failed to fetch exchange rate for ${currencyCode}`,
                    response.status
                );
            }

            const data: NBPResponse = await response.json();
            const latestRate = data.rates[0];

            if (!latestRate || typeof latestRate.mid !== 'number') {
                throw new APIError(`Invalid data received for ${currencyCode}`);
            }

            return {
                code: data.code,
                currency: data.currency,
                rate: latestRate.mid,
                date: latestRate.effectiveDate,
                table: data.table,
                type: 'fiat',
            };
        } catch (error) {
            console.error(`Error fetching exchange rate for ${currencyCode}:`, error);
            throw error instanceof APIError
                ? error
                : new APIError(`Failed to fetch ${currencyCode}`);
        }
    }

    async fetchGoldPrice(): Promise<ExchangeRate> {
        try {
            const url = `${this.baseUrl}/cenyzlota/?format=json`;
            const response = await fetchWithTimeout(url);

            if (!response.ok) {
                throw new APIError('Failed to fetch gold price', response.status);
            }

            const data: Array<{ data: string; cena: number }> = await response.json();
            const latestGold = data[0];

            if (!latestGold || typeof latestGold.cena !== 'number') {
                throw new APIError('Invalid gold price data received');
            }

            return {
                code: COMMODITY_CONFIG.GOLD.code,
                currency: COMMODITY_CONFIG.GOLD.name,
                name: COMMODITY_CONFIG.GOLD.name,
                rate: latestGold.cena,
                date: latestGold.data,
                table: 'gold',
                type: 'commodity',
            };
        } catch (error) {
            console.error('Error fetching gold price:', error);
            return {
                code: COMMODITY_CONFIG.GOLD.code,
                currency: COMMODITY_CONFIG.GOLD.name,
                name: COMMODITY_CONFIG.GOLD.name,
                rate: 0,
                date: getCurrentDate(),
                table: 'gold',
                type: 'commodity',
                error: error instanceof APIError
                    ? error.message
                    : 'Failed to fetch gold price',
            };
        }
    }
}
