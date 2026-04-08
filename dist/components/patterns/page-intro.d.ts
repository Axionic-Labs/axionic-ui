import type { ReactNode } from 'react';
export interface PageIntroProps {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    className?: string;
}
export declare function PageIntro({ eyebrow, title, description, meta, actions, children, className, }: PageIntroProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=page-intro.d.ts.map