import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExchangeRate } from '../../types/currency';
import { formatCurrencyRate, formatDate, formatTime } from '../../utils/format';
import {
    CURRENCY_CARD_CONTAINER_CLASSES,
    CURRENCY_CARD_CODE_CLASSES,
    CURRENCY_CARD_NAME_CLASSES,
    CURRENCY_CARD_RATE_CLASSES,
    CURRENCY_CARD_BASE_CLASSES,
    CURRENCY_CARD_ERROR_CLASSES,
    CURRENCY_CARD_ERROR_TEXT_CLASSES,
    CURRENCY_CARD_DIVIDER_CLASSES,
    CURRENCY_CARD_INFO_CLASSES,
    CURRENCY_CARD_INFO_VALUE_CLASSES,
} from '../../constants/styles';

interface CurrencyCardProps {
    rate: ExchangeRate;
    lastUpdate: Date;
}

export const CurrencyCard = memo<CurrencyCardProps>(({ rate, lastUpdate }) => {
    const { t, i18n } = useTranslation();
    const currencyName = i18n.exists(`currencies.names.${rate.code}`)
        ? t(`currencies.names.${rate.code}`)
        : rate.currency;
    const locale = i18n.language === 'pl' ? 'pl-PL' : 'en-US';

    return (
        <article className={CURRENCY_CARD_CONTAINER_CLASSES}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className={CURRENCY_CARD_CODE_CLASSES}>
                        {rate.code}
                    </h3>
                    <p className={CURRENCY_CARD_NAME_CLASSES}>
                        {currencyName}
                    </p>
                </div>
                <div className="text-right">
                    {rate.error ? (
                        <div className={CURRENCY_CARD_ERROR_CLASSES} title={rate.error}>
                            Error
                        </div>
                    ) : (
                        <>
                            <div className={CURRENCY_CARD_RATE_CLASSES}
                                aria-label={t('currencies.card.rateLabel', { rate: formatCurrencyRate(rate.rate) })}>
                                {formatCurrencyRate(rate.rate)}
                            </div>
                            <div className={CURRENCY_CARD_BASE_CLASSES}
                                aria-label={t('currencies.card.baseCurrency')}>
                                PLN
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={CURRENCY_CARD_DIVIDER_CLASSES}>
                {rate.error ? (
                    <div className={CURRENCY_CARD_ERROR_TEXT_CLASSES}>
                        {rate.error}
                    </div>
                ) : (
                    <>
                        <div className={CURRENCY_CARD_INFO_CLASSES}>
                            <span>{t('currencies.card.rateDate')}</span>
                            <time dateTime={rate.date} className={CURRENCY_CARD_INFO_VALUE_CLASSES}>{formatDate(rate.date, locale)}</time>
                        </div>
                        <div className={`${CURRENCY_CARD_INFO_CLASSES} mt-1`}>
                            <span>{t('currencies.card.lastUpdate')}</span>
                            <time dateTime={lastUpdate.toISOString()} className={CURRENCY_CARD_INFO_VALUE_CLASSES}>
                                {formatTime(lastUpdate, locale)}
                            </time>
                        </div>
                    </>
                )}
            </div>
        </article>
    );
});

CurrencyCard.displayName = 'CurrencyCard';
