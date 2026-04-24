import type { ReactNode } from 'react';
import { type PatternDensity, type PatternTone } from './shared';
export interface EntityCardProps {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    selected?: boolean;
    accent?: PatternTone;
    density?: PatternDensity;
    variant?: 'default' | 'flat';
    onClick?: () => void;
    className?: string;
}
export declare function EntityCard({ icon, title, description, meta, actions, children, footer, selected, accent, density, variant, onClick, className, }: EntityCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=entity-card.d.ts.map