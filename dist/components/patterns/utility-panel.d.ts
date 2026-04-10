import type { ReactNode } from 'react';
export interface UtilityPanelProps {
    title: ReactNode;
    subtitle?: ReactNode;
    icon?: ReactNode;
    controls?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    draggable?: boolean;
    className?: string;
}
export declare function UtilityPanel({ title, subtitle, icon, controls, children, footer, draggable, className, }: UtilityPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=utility-panel.d.ts.map