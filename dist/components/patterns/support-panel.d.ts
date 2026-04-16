import type { ReactNode } from 'react';
export interface SupportPanelProps {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    aside?: ReactNode;
    tone?: 'muted' | 'accent';
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    copyClassName?: string;
}
export declare function SupportPanel({ eyebrow, title, description, actions, aside, tone, className, titleClassName, descriptionClassName, copyClassName, }: SupportPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=support-panel.d.ts.map