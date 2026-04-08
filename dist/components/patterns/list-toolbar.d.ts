import type { ReactNode } from 'react';
export interface ListToolbarProps {
    search?: ReactNode;
    filters?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    variant?: 'panel' | 'inline';
    className?: string;
}
export declare function ListToolbar({ search, filters, meta, actions, variant, className, }: ListToolbarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=list-toolbar.d.ts.map