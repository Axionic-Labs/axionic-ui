import type { ReactNode } from 'react';
export interface AppShellProps {
    sidebar?: ReactNode;
    toolbar?: ReactNode;
    children: ReactNode;
    aside?: ReactNode;
    className?: string;
    bodyClassName?: string;
    mainClassName?: string;
    asideClassName?: string;
}
export declare function AppShell({ sidebar, toolbar, children, aside, className, bodyClassName, mainClassName, asideClassName, }: AppShellProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=app-shell.d.ts.map