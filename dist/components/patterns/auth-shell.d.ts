import type { ReactNode } from 'react';
export interface AuthShellProps {
    eyebrow?: ReactNode;
    brand?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    featureList?: ReactNode;
    formTitle: ReactNode;
    formDescription?: ReactNode;
    formBanner?: ReactNode;
    children: ReactNode;
    className?: string;
}
export declare function AuthShell({ eyebrow, brand, title, description, featureList, formTitle, formDescription, formBanner, children, className, }: AuthShellProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=auth-shell.d.ts.map