import type { ReactNode } from 'react';
import { cn } from '../utils';

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

const variantStyles: Record<
	NonNullable<FormMessageProps['variant']>,
	{ backgroundColor: string; color: string }
> = {
	error: {
		backgroundColor: 'rgba(220, 38, 38, 0.08)',
		color: 'var(--color-error)',
	},
	success: {
		backgroundColor: 'rgba(34, 197, 94, 0.08)',
		color: 'var(--color-success)',
	},
	info: {
		backgroundColor: 'var(--color-badge-teal)',
		color: 'var(--color-teal-700)',
	},
	warning: {
		backgroundColor: 'var(--color-badge-warning)',
		color: 'var(--color-warning)',
	},
};

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
function FormMessage({ variant = 'error', className, children }: FormMessageProps) {
	const styles = variantStyles[variant];
	return (
		<div
			role={variant === 'error' ? 'alert' : 'status'}
			className={cn('px-4 py-3 rounded-lg text-sm', className)}
			style={styles}
		>
			{children}
		</div>
	);
}

export { FormMessage };
export type { FormMessageProps };
