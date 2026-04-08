import type { ReactNode } from 'react';
export interface SecondaryNavItem {
    id?: string;
    label: string;
    icon?: ReactNode;
    badge?: ReactNode;
    href?: string;
    active?: boolean;
    onClick?: () => void;
}
export interface SecondaryNavProps {
    items: SecondaryNavItem[];
    trailing?: ReactNode;
    className?: string;
}
export declare function SecondaryNav({ items, trailing, className }: SecondaryNavProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=secondary-nav.d.ts.map