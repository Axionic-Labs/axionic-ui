import type { ReactNode } from 'react';
export interface ActivityTableColumn {
    key: string;
    label: ReactNode;
    width?: string;
    align?: 'start' | 'center' | 'end';
}
export interface ActivityTableRow {
    id: string;
    cells: Record<string, ReactNode>;
    onClick?: () => void;
}
export interface ActivityTableProps {
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    columns: ActivityTableColumn[];
    rows: ActivityTableRow[];
    emptyState?: ReactNode;
    className?: string;
}
export declare function ActivityTable({ title, description, actions, columns, rows, emptyState, className, }: ActivityTableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=activity-table.d.ts.map