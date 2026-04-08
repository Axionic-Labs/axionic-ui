import type { ReactNode } from 'react';
export interface SettingsSectionNavItem {
    id?: string;
    label: string;
    icon?: ReactNode;
    description?: ReactNode;
    active?: boolean;
    onClick?: () => void;
}
export interface SettingsSectionNavProps {
    title?: ReactNode;
    items: SettingsSectionNavItem[];
    footer?: ReactNode;
    className?: string;
}
export declare function SettingsSectionNav({ title, items, footer, className }: SettingsSectionNavProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=settings-section-nav.d.ts.map