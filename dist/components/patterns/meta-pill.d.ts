import type { ReactNode } from 'react';
export interface MetaPillProps {
    children: ReactNode;
    tone?: 'default' | 'accent' | 'success' | 'warning' | 'danger';
    className?: string;
}
export declare function MetaPill({ children, tone, className }: MetaPillProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=meta-pill.d.ts.map