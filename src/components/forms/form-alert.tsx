'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface FormAlertProps {
	children: ReactNode;
	className?: string;
}

const base = css({
	display: 'flex',
	alignItems: 'flex-start',
	gap: '3',
	px: '4',
	py: '3',
	rounded: 'l2',
	bg: 'red.a2',
	borderWidth: '1px',
	borderColor: 'red.a5',
	color: 'red.11',
	textStyle: 'small',
});

/**
 * Form-level error alert, typically shown at the top of a form.
 *
 * @example
 * ```tsx
 * {formError && <FormAlert>{formError}</FormAlert>}
 * ```
 */
export function FormAlert({ children, className }: FormAlertProps) {
	return (
		<div role="alert" className={cx(base, className)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{ flexShrink: 0, marginTop: '2px' }}
			>
				<circle cx="12" cy="12" r="10" />
				<line x1="12" y1="8" x2="12" y2="12" />
				<line x1="12" y1="16" x2="12.01" y2="16" />
			</svg>
			<div>{children}</div>
		</div>
	);
}
