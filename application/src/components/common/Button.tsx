import { memo, useMemo } from 'react';
import type { FC } from 'react';
import type { ButtonProps } from '../../types/components';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../../constants/styles';

const Button: FC<ButtonProps> = memo(({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    className = '',
    disabled = false,
    ...props
}) => {
    const buttonClassName = useMemo(() => {
        const baseStyles = 'font-semibold rounded transition-all duration-200 flex items-center justify-center gap-1.5';
        const widthStyles = fullWidth ? 'w-full' : '';
        const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

        return `${baseStyles} ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${widthStyles} ${disabledStyles} ${className}`;
    }, [variant, size, fullWidth, disabled, className]);

    return (
        <button
            className={buttonClassName}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
