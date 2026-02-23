'use client';

import type { ReactNode } from 'react';
import * as Field from '../ui/field';

export interface FormFieldProps extends Field.RootProps {
	/** Field label text */
	label: string;
	/** Error message to display below the input */
	error?: string;
	/** Helper text shown below the input when there is no error */
	helperText?: string;
	/** Whether the field is required */
	required?: boolean;
	/** The form control element(s) */
	children: ReactNode;
}

/**
 * Convenience wrapper composing Field.Root + Field.Label + Field.ErrorText + Field.HelperText.
 *
 * @example
 * ```tsx
 * <FormField label="Email" error={errors.email} required>
 *   <Input type="email" />
 * </FormField>
 * ```
 */
export function FormField({
	label,
	error,
	helperText,
	required,
	children,
	...rootProps
}: FormFieldProps) {
	return (
		<Field.Root invalid={!!error} required={required} {...rootProps}>
			<Field.Label>
				{label}
				{required && <Field.RequiredIndicator />}
			</Field.Label>
			{children}
			{error ? (
				<Field.ErrorText>{error}</Field.ErrorText>
			) : helperText ? (
				<Field.HelperText>{helperText}</Field.HelperText>
			) : null}
		</Field.Root>
	);
}
