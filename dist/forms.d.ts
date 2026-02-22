import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

/**
 * Props for the FormAlert component.
 * @param icon - Optional icon element displayed to the left
 * @param className - Additional CSS classes
 * @param children - Alert message content
 */
interface FormAlertProps {
    icon?: ReactNode;
    className?: string;
    children: ReactNode;
}
/**
 * Prominent alert with icon and border for general form errors.
 * Matches the error alert pattern used in WaitSection and other forms.
 *
 * @example
 * ```tsx
 * import { AlertCircle } from 'lucide-react';
 *
 * <FormAlert icon={<AlertCircle size={18} />}>
 *   {errors.general}
 * </FormAlert>
 * ```
 */
declare function FormAlert({ icon, className, children }: FormAlertProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the FormField component.
 * @param label - Text label displayed above the input
 * @param htmlFor - ID of the associated input element
 * @param error - Validation error message to display below the input
 * @param className - Additional CSS classes for the wrapper
 * @param children - Input element(s) to render inside the field
 */
interface FormFieldProps {
    label: string;
    htmlFor?: string;
    error?: string;
    className?: string;
    children: ReactNode;
}
/**
 * Wrapper for Label + Input + optional error message.
 * Matches the `space-y-1.5` field layout used across Axionic forms.
 *
 * @example
 * ```tsx
 * <FormField label="Email" htmlFor="email" error={errors.email}>
 *   <Input id="email" type="email" aria-invalid={!!errors.email} />
 * </FormField>
 * ```
 */
declare function FormField({ label, htmlFor, error, className, children }: FormFieldProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the FormMessage component.
 * @param variant - Visual style: error (red), success (green), info (teal), or warning (amber)
 * @param className - Additional CSS classes
 * @param children - Message content
 */
interface FormMessageProps {
    variant?: 'error' | 'success' | 'info' | 'warning';
    className?: string;
    children: ReactNode;
}
/**
 * Inline feedback banner for form-level messages.
 * Renders a colored rounded div with appropriate ARIA role.
 *
 * @example
 * ```tsx
 * {error && <FormMessage variant="error">{error}</FormMessage>}
 * {success && <FormMessage variant="success">{success}</FormMessage>}
 * ```
 */
declare function FormMessage({ variant, className, children }: FormMessageProps): react_jsx_runtime.JSX.Element;

export { FormAlert, type FormAlertProps, FormField, type FormFieldProps, FormMessage, type FormMessageProps };
