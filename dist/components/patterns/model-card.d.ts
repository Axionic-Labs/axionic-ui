import type { ReactNode } from 'react';
export interface ModelCardFact {
    label: ReactNode;
    value: ReactNode;
}
export interface ModelCardStatus {
    label: ReactNode;
    tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
}
export interface ModelCardProps {
    icon: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    status: ModelCardStatus;
    meta?: ReactNode;
    facts?: ModelCardFact[];
    progress?: {
        value: number;
        label?: ReactNode;
        ariaLabel?: string;
    };
    footer?: ReactNode;
    selected?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare function ModelCard({ icon, title, description, status, meta, facts, progress, footer, selected, onClick, className, }: ModelCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=model-card.d.ts.map