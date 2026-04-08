import type { ReactNode } from 'react';
export interface SecretFieldProps {
    label?: ReactNode;
    description?: ReactNode;
    value: ReactNode;
    revealed?: boolean;
    onToggleReveal?: () => void;
    onCopy?: () => void;
    copied?: boolean;
    actions?: ReactNode;
    className?: string;
}
export declare function SecretField({ label, description, value, revealed, onToggleReveal, onCopy, copied, actions, className, }: SecretFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=secret-field.d.ts.map