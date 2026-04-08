import type { ReactNode } from 'react';
export interface SidebarNavItem {
    id?: string;
    label: string;
    description?: string;
    icon?: ReactNode;
    href?: string;
    active?: boolean;
    badge?: ReactNode;
    endSlot?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
export interface SidebarNavSection {
    title?: string;
    items: SidebarNavItem[];
}
export interface SidebarNavProps {
    brand?: ReactNode;
    sections: SidebarNavSection[];
    footer?: ReactNode;
    renderItem?: (options: {
        item: SidebarNavItem;
        className: string;
        content: ReactNode;
        ariaCurrent?: 'page';
    }) => ReactNode;
    className?: string;
}
export declare function SidebarNav({ brand, sections, footer, renderItem, className }: SidebarNavProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=sidebar-nav.d.ts.map