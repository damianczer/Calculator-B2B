import type { FC } from 'react';
import type { ButtonProps } from '../../types/components';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../../constants/styles';

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'font-semibold rounded transition-all duration-200 flex items-center justify-center gap-1.5';
    const widthStyles = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${widthStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
