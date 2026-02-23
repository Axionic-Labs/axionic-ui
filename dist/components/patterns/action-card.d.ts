import type { ReactNode } from 'react';
export interface ActionCardProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare function ActionCard({ title, description, icon, onClick, className }: ActionCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=action-card.d.ts.map