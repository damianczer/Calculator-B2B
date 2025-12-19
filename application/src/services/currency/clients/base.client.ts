import { API_CONFIG } from '../../../constants/currency';
import { APIError } from '../../../types/currency';

export async function fetchWithTimeout(
    url: string,
    timeout = API_CONFIG.REQUEST_TIMEOUT
): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error && error.name === 'AbortError') {
            throw new APIError('Request timeout');
        }
        throw error;
    }
}

export function getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
}
