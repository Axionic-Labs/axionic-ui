import type { ReactNode } from 'react';
import { type PatternTone } from './shared';
export interface ModifierActionCardProps {
    icon?: ReactNode;
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actionLabel?: ReactNode;
    helper?: ReactNode;
    tone?: PatternTone;
    selected?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare function ModifierActionCard({ icon, eyebrow, title, description, actionLabel, helper, tone, selected, onClick, className, }: ModifierActionCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modifier-action-card.d.ts.map