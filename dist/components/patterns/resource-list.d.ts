import type { ReactNode } from 'react';
export interface ResourceListItem {
    id?: string;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
    href?: string;
}
export interface ResourceListProps {
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    items: ResourceListItem[];
    dividers?: boolean;
    className?: string;
}
export declare function ResourceList({ title, description, actions, items, dividers, className, }: ResourceListProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=resource-list.d.ts.map