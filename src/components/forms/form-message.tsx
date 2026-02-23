'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

type MessageVariant = 'error' | 'success' | 'warning' | 'info';

export interface FormMessageProps {
	variant: MessageVariant;
	children: ReactNode;
	className?: string;
}

const base = css({
	display: 'flex',
	alignItems: 'center',
	gap: '2',
	px: '3',
	py: '2',
	rounded: 'l2',
	textStyle: 'small',
});

const variants: Record<MessageVariant, string> = {
	error: css({
		bg: 'red.a2',
		color: 'red.11',
		borderWidth: '1px',
		borderColor: 'red.a5',
	}),
	success: css({
		bg: 'green.a2',
		color: 'green.11',
		borderWidth: '1px',
		borderColor: 'green.a5',
	}),
	warning: css({
		bg: 'yellow.a2',
		color: 'yellow.11',
		borderWidth: '1px',
		borderColor: 'yellow.a5',
	}),
	info: css({
		bg: 'blue.a2',
		color: 'blue.11',
		borderWidth: '1px',
		borderColor: 'blue.a5',
	}),
};

/**
 * Inline status message for form feedback.
 *
 * @example
 * ```tsx
 * <FormMessage variant="error">Invalid email address</FormMessage>
 * <FormMessage variant="success">Changes saved</FormMessage>
 * ```
 */
export function FormMessage({ variant, children, className }: FormMessageProps) {
	return (
		<div
			role={variant === 'error' ? 'alert' : 'status'}
			className={cx(base, variants[variant], className)}
		>
			{children}
		</div>
	);
}
