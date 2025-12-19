interface CacheData<T> {
    data: T;
    timestamp: number;
}

export const loadFromCache = <T>(key: string, ttl: number): T | null => {
    try {
        const cached = localStorage.getItem(key);
        if (!cached) return null;

        const cacheData: CacheData<T> = JSON.parse(cached);
        const now = Date.now();

        if (now - cacheData.timestamp < ttl) {
            return cacheData.data;
        }

        localStorage.removeItem(key);
        return null;
    } catch (error) {
        console.error('Error reading cache:', error);
        return null;
    }
};

export const saveToCache = <T>(key: string, data: T): void => {
    try {
        const cacheData: CacheData<T> = {
            data,
            timestamp: Date.now()
        };
        localStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error saving to cache:', error);
    }
};

export const clearCache = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
};