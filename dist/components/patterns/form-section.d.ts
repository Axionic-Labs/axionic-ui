import type { ReactNode } from 'react';
export interface FormSectionProps {
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    children: ReactNode;
    tone?: 'default' | 'subtle' | 'accent';
    className?: string;
}
export declare function FormSection({ title, description, actions, children, tone, className, }: FormSectionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-section.d.ts.map