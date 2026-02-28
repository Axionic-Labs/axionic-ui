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
		bg: 'bg.error',
		color: 'fg.error',
		borderWidth: '1px',
		borderColor: 'border.error',
	}),
	success: css({
		bg: 'bg.success',
		color: 'fg.success',
		borderWidth: '1px',
		borderColor: 'border.success',
	}),
	warning: css({
		bg: 'bg.warning',
		color: 'fg.warning',
		borderWidth: '1px',
		borderColor: 'border.warning',
	}),
	info: css({
		bg: 'bg.info',
		color: 'fg.info',
		borderWidth: '1px',
		borderColor: 'border.info',
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
