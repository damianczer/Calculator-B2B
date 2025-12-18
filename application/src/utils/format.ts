export const formatCurrency = (amount: number | undefined): string => {
    if (amount === undefined || amount === null || isNaN(amount)) {
        return '0.00 zł';
    }
    return `${amount.toFixed(2)} zł`;
};

export const formatPercentage = (value: number): string => {
    return `${value}%`;
};
