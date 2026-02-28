import type { ReactNode } from 'react';
export interface ActionCardProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    /** Override icon wrapper background color (CSS value) */
    iconBg?: string;
    /** Override icon wrapper foreground color (CSS value) */
    iconColor?: string;
    onClick?: () => void;
    className?: string;
}
export declare function ActionCard({ title, description, icon, iconBg, iconColor, onClick, className, }: ActionCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=action-card.d.ts.map