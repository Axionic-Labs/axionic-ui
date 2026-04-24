import type { ReactNode } from 'react';
export interface SecondaryNavItem {
    id?: string;
    label: string;
    icon?: ReactNode;
    badge?: ReactNode;
    href?: string;
    active?: boolean;
    onClick?: () => void;
    dataTourId?: string;
}
export interface SecondaryNavProps {
    items: SecondaryNavItem[];
    trailing?: ReactNode;
    variant?: 'pill' | 'toolbar';
    className?: string;
}
export declare function SecondaryNav({ items, trailing, variant, className }: SecondaryNavProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=secondary-nav.d.ts.map