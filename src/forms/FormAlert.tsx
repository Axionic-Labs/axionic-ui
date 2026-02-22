import type { ReactNode } from 'react';
import { cn } from '../utils';

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
function FormAlert({ icon, className, children }: FormAlertProps) {
	return (
		<div
			role="alert"
			className={cn('p-4 rounded-lg flex items-start gap-3', className)}
			style={{
				backgroundColor: 'rgba(220, 38, 38, 0.06)',
				border: '1px solid rgba(220, 38, 38, 0.2)',
			}}
		>
			{icon && (
				<span className="shrink-0 mt-0.5" style={{ color: 'var(--color-error)' }}>
					{icon}
				</span>
			)}
			<p className="text-sm" style={{ color: 'var(--color-error)' }}>
				{children}
			</p>
		</div>
	);
}

export { FormAlert };
export type { FormAlertProps };
