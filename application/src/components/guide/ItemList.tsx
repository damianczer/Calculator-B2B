import { memo, type ReactNode } from 'react';
import { GUIDE_STYLES } from '../../constants/styles';
import type { ListItem, IconType } from '../../types/guide';

interface ItemListProps {
    items: ListItem[];
    iconType?: IconType;
}

const ICONS: Record<IconType, ReactNode> = {
    check: <span className={GUIDE_STYLES.checkmark}>✓</span>,
    cross: <span className={GUIDE_STYLES.cross}>✗</span>,
    bullet: <span className={GUIDE_STYLES.bullet}>•</span>,
    none: null,
} as const;

export const ItemList = memo<ItemListProps>(({ items, iconType = 'bullet' }) => (
    <ul className={GUIDE_STYLES.list}>
        {items.map((item, index) => (
            <li key={index} className={GUIDE_STYLES.listItem}>
                {item.icon || ICONS[iconType]}
                <span className={GUIDE_STYLES.listText}>{item.text}</span>
            </li>
        ))}
    </ul>
));

ItemList.displayName = 'ItemList';
