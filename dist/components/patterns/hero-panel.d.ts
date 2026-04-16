import type { ReactNode } from 'react';
export interface HeroPanelProps {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    media?: ReactNode;
    footer?: ReactNode;
    className?: string;
    copyClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    mediaClassName?: string;
}
export declare function HeroPanel({ eyebrow, title, description, actions, media, footer, className, copyClassName, titleClassName, descriptionClassName, mediaClassName, }: HeroPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=hero-panel.d.ts.map