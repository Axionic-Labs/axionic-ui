import type { ReactNode } from 'react';
export interface EntityCardProps {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    selected?: boolean;
    accent?: 'teal' | 'wheat';
    density?: 'default' | 'compact';
    onClick?: () => void;
    className?: string;
}
export declare function EntityCard({ icon, title, description, meta, actions, children, footer, selected, accent, density, onClick, className, }: EntityCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=entity-card.d.ts.map