import * as React from 'react';
import { cn } from '../utils';

const variantStyles = {
	wheat: {
		backgroundColor: 'rgba(230, 182, 133, 0.15)',
		color: 'var(--color-accent-gold)',
	},
	teal: {
		backgroundColor: 'var(--color-badge-teal)',
		color: 'var(--color-teal-500)',
	},
	success: {
		backgroundColor: 'var(--color-badge-success)',
		color: 'var(--color-success)',
	},
	error: {
		backgroundColor: 'rgba(220, 38, 38, 0.08)',
		color: 'var(--color-error)',
	},
	muted: {
		backgroundColor: 'var(--color-page-bg-alt)',
		color: 'var(--color-teal-500)',
	},
} as const;

const sizeMap = {
	sm: 'w-8 h-8',
	md: 'w-10 h-10',
	lg: 'w-12 h-12',
} as const;

/**
 * Colored icon in a rounded background. Used in stat cards, action cards, etc.
 * @param icon - Icon element to render
 * @param variant - Color scheme: 'wheat' | 'teal' | 'success' | 'error' | 'muted'
 * @param size - Badge size: 'sm' | 'md' | 'lg'
 */
function IconBadge({
	icon,
	variant = 'wheat',
	size = 'md',
	className,
	...props
}: Omit<React.ComponentProps<'span'>, 'children'> & {
	icon: React.ReactNode;
	variant?: keyof typeof variantStyles;
	size?: 'sm' | 'md' | 'lg';
}) {
	return (
		<span
			className={cn(
				'inline-flex items-center justify-center rounded-lg',
				sizeMap[size],
				className,
			)}
			style={variantStyles[variant]}
			{...props}
		>
			{icon}
		</span>
	);
}

export { IconBadge };
