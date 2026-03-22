'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface AccentLabelProps {
	/** Label text */
	children: ReactNode;
	/** Color variant for the left accent bar */
	variant?: 'teal' | 'wheat';
	/** Additional CSS classes */
	className?: string;
}

const base = css({
	display: 'block',
	fontSize: 'xs',
	fontWeight: 'semibold',
	textTransform: 'uppercase',
	letterSpacing: 'wider',
	pl: '2',
	borderLeftWidth: '2px',
});

const variants = {
	teal: css({
		color: 'colorPalette.11',
		borderLeftColor: 'colorPalette.7',
	}),
	wheat: css({
		color: 'colorPalette.11',
		borderLeftColor: 'colorPalette.7',
	}),
};

/**
 * Uppercase label with a colored left accent bar. Used for sub-section
 * headings within cards (e.g., "TRAINING MODE", "DATA GENERATION").
 *
 * @example
 * ```tsx
 * <AccentLabel variant="teal">Training Mode</AccentLabel>
 * ```
 */
export function AccentLabel({ children, variant = 'teal', className }: AccentLabelProps) {
	return <label className={cx(base, variants[variant], className)}>{children}</label>;
}
