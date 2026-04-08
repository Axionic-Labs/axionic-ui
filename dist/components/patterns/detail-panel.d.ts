import type { ReactNode } from 'react';
export interface DetailPanelProps {
    eyebrow?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    className?: string;
}
export declare function DetailPanel({ eyebrow, title, description, icon, meta, actions, children, footer, className, }: DetailPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=detail-panel.d.ts.map