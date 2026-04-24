import type { ReactNode } from 'react';
import type { PatternDensity } from './shared';
export interface SectionPanelProps {
    eyebrow?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    variant?: 'default' | 'muted' | 'flat' | 'workspace';
    density?: PatternDensity;
    className?: string;
}
export declare function SectionPanel({ eyebrow, title, description, meta, actions, children, footer, variant, density, className, }: SectionPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=section-panel.d.ts.map