import { memo, useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDownIcon } from './icons';

interface CustomDropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: Array<{ code: string; name?: string; currency?: string }>;
    className?: string;
    label?: string;
}

export const CustomDropdown = memo(({ value, onChange, options, className = '', label }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const selectedOption = options.find(opt => opt.code === value);
    const updatePosition = useCallback(() => {
        if (listRef.current && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            listRef.current.style.top = `${rect.bottom + window.scrollY}px`;
            listRef.current.style.left = `${rect.left + window.scrollX}px`;
            listRef.current.style.width = `${rect.width}px`;
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            updatePosition();
        }
    }, [isOpen, updatePosition]);

    useEffect(() => {
        if (!isOpen) return;

        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true);

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [isOpen, updatePosition]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                listRef.current && !listRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setHighlightedIndex(-1);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    setIsOpen(false);
                    setHighlightedIndex(-1);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    setHighlightedIndex(prev =>
                        prev < options.length - 1 ? prev + 1 : prev
                    );
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (highlightedIndex >= 0) {
                        onChange(options[highlightedIndex].code);
                        setIsOpen(false);
                        setHighlightedIndex(-1);
                    }
                    break;
                case 'Home':
                    e.preventDefault();
                    setHighlightedIndex(0);
                    break;
                case 'End':
                    e.preventDefault();
                    setHighlightedIndex(options.length - 1);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, highlightedIndex, options, onChange]);

    useEffect(() => {
        if (highlightedIndex >= 0 && listRef.current) {
            const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement;
            if (highlightedElement) {
                highlightedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }
    }, [highlightedIndex]);

    const handleSelect = (code: string) => {
        onChange(code);
        setIsOpen(false);
        setHighlightedIndex(-1);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            const currentIndex = options.findIndex(opt => opt.code === value);
            setHighlightedIndex(currentIndex);
        }
    };

    return (
        <div ref={dropdownRef} className="relative">
            {label && (
                <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                    {label}
                </label>
            )}
            <button
                ref={buttonRef}
                type="button"
                onClick={toggleDropdown}
                className={`${className} relative cursor-pointer`}
                aria-haspopup="listbox"
                {...(isOpen && { 'aria-expanded': 'true' })}
            >
                <span className="block">{selectedOption?.code || value}{(label === 'VAT' || label === 'Stawka ryczałtu') ? '%' : ''}{selectedOption?.name ? ` (${selectedOption.name})` : ''}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                </span>
            </button>
            {isOpen && createPortal(
                <div
                    ref={listRef}
                    className="fixed z-[9999] bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 
                    rounded-lg max-h-60 overflow-hidden shadow-lg"
                    role="listbox"
                    aria-label={label}
                >
                    <div className="max-h-60 overflow-y-auto">
                        {options.map((option, index) => {
                            const isSelected = option.code === value;
                            return (
                                <div
                                    key={option.code}
                                    onClick={() => handleSelect(option.code)}
                                    className={`px-3 py-2 cursor-pointer transition-colors text-sm text-center
                                    ${isSelected
                                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                                            : 'text-slate-900 dark:text-slate-100'
                                        }
                                    ${highlightedIndex === index
                                            ? 'bg-blue-50 dark:bg-blue-950'
                                            : 'hover:bg-gray-100 dark:hover:bg-slate-700'
                                        }
                                `}
                                    role="option"
                                    {...(isSelected && { 'aria-selected': 'true' })}
                                >
                                    {option.code}{(label === 'VAT' || label === 'Stawka ryczałtu') ? '%' : ''}{option.name ? ` (${option.name})` : ''}
                                </div>
                            );
                        })}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
});

CustomDropdown.displayName = 'CustomDropdown';
