import type { ReactNode } from 'react';
import type { ModifierCardFact } from './modifier-card';
import { type PatternTone } from './shared';
export interface ModifierFeatureCardProps {
    icon?: ReactNode;
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    badges?: ReactNode;
    highlightLabel?: ReactNode;
    highlightValue: ReactNode;
    highlightNote?: ReactNode;
    facts?: ModifierCardFact[];
    footer?: ReactNode;
    tone?: PatternTone;
    selected?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare function ModifierFeatureCard({ icon, eyebrow, title, description, badges, highlightLabel, highlightValue, highlightNote, facts, footer, tone, selected, onClick, className, }: ModifierFeatureCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modifier-feature-card.d.ts.map