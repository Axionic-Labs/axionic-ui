import type { ReactNode } from 'react';
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
    tone?: 'teal' | 'wheat';
    density?: 'default' | 'compact';
    onClick?: () => void;
    className?: string;
}
export declare function ModifierCard({ icon, eyebrow, title, description, badges, facts, footer, selected, tone, density, onClick, className, }: ModifierCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modifier-card.d.ts.map