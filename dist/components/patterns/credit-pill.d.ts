import type { ReactNode } from 'react';
type CreditPillTone = 'default' | 'accent' | 'success' | 'warning';
export interface CreditPillProps {
    label?: string;
    value: ReactNode;
    detail?: ReactNode;
    icon?: ReactNode;
    tone?: CreditPillTone;
    className?: string;
}
export declare function CreditPill({ label, value, detail, icon, tone, className, }: CreditPillProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=credit-pill.d.ts.map