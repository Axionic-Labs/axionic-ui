import type { ReactNode } from 'react';
export interface StatCardProps {
    title: string;
    value: string | number;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
    icon?: ReactNode;
    className?: string;
}
export declare function StatCard({ title, value, change, changeType, icon, className }: StatCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=stat-card.d.ts.map