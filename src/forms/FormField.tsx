import type { ReactNode } from 'react';
import { Label } from '../primitives/label';
import { cn } from '../utils';

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
function FormField({ label, htmlFor, error, className, children }: FormFieldProps) {
	return (
		<div className={cn('space-y-1.5', className)}>
			<Label htmlFor={htmlFor}>{label}</Label>
			{children}
			{error && (
				<p className="text-xs mt-1" style={{ color: 'var(--color-error)' }}>
					{error}
				</p>
			)}
		</div>
	);
}

export { FormField };
export type { FormFieldProps };
