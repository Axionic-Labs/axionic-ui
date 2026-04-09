import type { ReactNode } from 'react';
type CreditPillTone = 'default' | 'accent' | 'success' | 'warning' | 'starter' | 'pro';
export interface CreditPillProps {
    label?: string;
    value: ReactNode;
    detail?: ReactNode;
    icon?: ReactNode;
    tone?: CreditPillTone;
    layout?: 'inline' | 'stacked';
    className?: string;
}
export declare function CreditPill({ label, value, detail, icon, tone, layout, className, }: CreditPillProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=credit-pill.d.ts.map