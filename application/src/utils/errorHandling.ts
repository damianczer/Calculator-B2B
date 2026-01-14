export const retryWithBackoff = async <T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    initialDelay: number = 1000,
    maxDelay: number = 10000
): Promise<T> => {
    let lastError: Error;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;

            if (attempt === maxRetries) {
                break;
            }

            const delay = Math.min(initialDelay * Math.pow(2, attempt), maxDelay);
            const jitter = Math.random() * 0.3 * delay;
            const totalDelay = delay + jitter;

            console.warn(`Attempt ${attempt + 1} failed, retrying in ${Math.round(totalDelay)}ms...`, error);

            await new Promise(resolve => setTimeout(resolve, totalDelay));
        }
    }

    throw lastError!;
};

export const isNetworkError = (error: unknown): boolean => {
    if (error instanceof TypeError) {
        return error.message.includes('fetch') || error.message.includes('network');
    }

    if (error && typeof error === 'object' && 'message' in error) {
        const message = (error as { message: string }).message.toLowerCase();
        return message.includes('network') ||
            message.includes('fetch') ||
            message.includes('timeout') ||
            message.includes('cors');
    }

    return false;
};

export const formatErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
        return error.message;
    }

    if (typeof error === 'string') {
        return error;
    }

    return 'An unexpected error occurred';
};

export const logError = (context: string, error: unknown): void => {
    console.error(`[${context}]`, error);
};
