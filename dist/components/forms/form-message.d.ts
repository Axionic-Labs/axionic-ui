import type { ReactNode } from 'react';
type MessageVariant = 'error' | 'success' | 'warning' | 'info';
export interface FormMessageProps {
    variant: MessageVariant;
    children: ReactNode;
    className?: string;
}
/**
 * Inline status message for form feedback.
 *
 * @example
 * ```tsx
 * <FormMessage variant="error">Invalid email address</FormMessage>
 * <FormMessage variant="success">Changes saved</FormMessage>
 * ```
 */
export declare function FormMessage({ variant, children, className }: FormMessageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=form-message.d.ts.map