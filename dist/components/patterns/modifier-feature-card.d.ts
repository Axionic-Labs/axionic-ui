import type { ReactNode } from 'react';
import type { ModifierCardFact } from './modifier-card';
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
    tone?: 'teal' | 'wheat';
    onClick?: () => void;
    className?: string;
}
export declare function ModifierFeatureCard({ icon, eyebrow, title, description, badges, highlightLabel, highlightValue, highlightNote, facts, footer, tone, onClick, className, }: ModifierFeatureCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modifier-feature-card.d.ts.map