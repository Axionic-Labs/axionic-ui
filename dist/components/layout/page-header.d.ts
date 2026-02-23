import type { ReactNode } from 'react';
export interface PageHeaderProps {
    title: string;
    subtitle?: string;
    badge?: ReactNode;
    action?: ReactNode;
    className?: string;
}
export declare function PageHeader({ title, subtitle, badge, action, className }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=page-header.d.ts.map