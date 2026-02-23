import type { ReactNode } from 'react';
import * as Field from '~/components/ui/field';
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
export declare function FormField({ label, error, helperText, required, children, ...rootProps }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-field.d.ts.map