import type { ReactNode } from 'react';
export interface ValueFieldProps {
    label?: ReactNode;
    description?: ReactNode;
    value: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
    mono?: boolean;
    tone?: 'default' | 'muted';
    className?: string;
}
export declare function ValueField({ label, description, value, icon, actions, mono, tone, className, }: ValueFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=value-field.d.ts.map