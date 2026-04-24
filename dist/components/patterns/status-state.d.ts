import type { ReactNode } from 'react';
export interface StatusStateProps {
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    eyebrow?: ReactNode;
    tone?: 'default' | 'error' | 'warning' | 'loading';
    icon?: ReactNode;
    layout?: 'page' | 'section';
    className?: string;
    panelClassName?: string;
}
export declare function StatusState({ title, description, actions, eyebrow, tone, icon, layout, className, panelClassName, }: StatusStateProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=status-state.d.ts.map