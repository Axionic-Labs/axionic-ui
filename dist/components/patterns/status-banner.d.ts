import type { ReactNode } from 'react';
type StatusBannerTone = 'info' | 'success' | 'warning' | 'error';
export interface StatusBannerProps {
    title: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
    tone?: StatusBannerTone;
    className?: string;
}
export declare function StatusBanner({ title, description, icon, actions, tone, className, }: StatusBannerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=status-banner.d.ts.map