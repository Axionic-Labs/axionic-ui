'use client';

import { AlertCircle } from 'lucide-react';
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
	bg: 'bg.error',
	borderWidth: '1px',
	borderColor: 'border.error',
	color: 'fg.error',
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
			<AlertCircle size={16} aria-label="Alert" style={{ flexShrink: 0, marginTop: '2px' }} />
			<div>{children}</div>
		</div>
	);
}
