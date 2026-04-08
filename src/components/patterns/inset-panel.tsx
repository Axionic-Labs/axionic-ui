'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface InsetPanelProps {
	children: ReactNode;
	tone?: 'default' | 'accent';
	className?: string;
}

const styles = {
	base: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		padding: '4',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
	}),
	accent: css({
		bg: 'app.accent.soft',
		borderColor: 'transparent',
	}),
};

export function InsetPanel({ children, tone = 'default', className }: InsetPanelProps) {
	return (
		<div className={cx(styles.base, tone === 'accent' && styles.accent, className)}>{children}</div>
	);
}
