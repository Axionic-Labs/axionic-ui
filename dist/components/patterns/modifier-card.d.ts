import type { ReactNode } from 'react';
import { type PatternDensity, type PatternTone } from './shared';
export interface ModifierCardFact {
    label: ReactNode;
    value: ReactNode;
    mono?: boolean;
}
export interface ModifierCardProps {
    icon?: ReactNode;
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    badges?: ReactNode;
    facts?: ModifierCardFact[];
    footer?: ReactNode;
    selected?: boolean;
    tone?: PatternTone;
    density?: PatternDensity;
    onClick?: () => void;
    className?: string;
}
export declare function ModifierCard({ icon, eyebrow, title, description, badges, facts, footer, selected, tone, density, onClick, className, }: ModifierCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modifier-card.d.ts.map