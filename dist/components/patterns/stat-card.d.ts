import type { ReactNode } from 'react';
export interface StatCardProps {
    title: string;
    value: string | number;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
    icon?: ReactNode;
    /** Override icon wrapper background color (CSS value) */
    iconBg?: string;
    /** Override icon wrapper foreground color (CSS value) */
    iconColor?: string;
    /** Optional badge text displayed beside the change indicator */
    badge?: string;
    /** Badge text color (CSS value) */
    badgeColor?: string;
    /** Badge background color (CSS value) */
    badgeBg?: string;
    className?: string;
}
export declare function StatCard({ title, value, change, changeType, icon, iconBg, iconColor, badge, badgeColor, badgeBg, className, }: StatCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=stat-card.d.ts.map