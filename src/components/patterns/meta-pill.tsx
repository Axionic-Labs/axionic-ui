'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface MetaPillProps {
	children: ReactNode;
	tone?: 'default' | 'accent' | 'success' | 'warning' | 'danger';
	className?: string;
}

const styles = {
	base: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '1.5',
		minHeight: '8',
		paddingX: '3',
		paddingY: '1.5',
		borderRadius: 'full',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		color: 'app.text.muted',
		textStyle: 'caption',
	}),
	accent: css({
		bg: 'app.accent.soft',
		borderColor: 'transparent',
		color: 'app.accent',
	}),
	success: css({
		bg: 'bg.success',
		borderColor: 'transparent',
		color: 'fg.success',
	}),
	warning: css({
		bg: 'bg.warning',
		borderColor: 'transparent',
		color: 'fg.warning',
	}),
	danger: css({
		bg: 'bg.error',
		borderColor: 'transparent',
		color: 'fg.error',
	}),
};

export function MetaPill({ children, tone = 'default', className }: MetaPillProps) {
	return (
		<span
			className={cx(
				styles.base,
				tone === 'accent' && styles.accent,
				tone === 'success' && styles.success,
				tone === 'warning' && styles.warning,
				tone === 'danger' && styles.danger,
				className,
			)}
		>
			{children}
		</span>
	);
}
