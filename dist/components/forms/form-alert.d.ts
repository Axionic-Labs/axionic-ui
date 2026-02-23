import type { ReactNode } from 'react';
export interface FormAlertProps {
    children: ReactNode;
    className?: string;
}
/**
 * Form-level error alert, typically shown at the top of a form.
 *
 * @example
 * ```tsx
 * {formError && <FormAlert>{formError}</FormAlert>}
 * ```
 */
export declare function FormAlert({ children, className }: FormAlertProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-alert.d.ts.map