'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface EmptyStateProps {
	icon?: ReactNode;
	title: string;
	description?: string;
	action?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		py: '16',
		px: '6',
	}),
	iconWrap: css({
		w: '14',
		h: '14',
		rounded: 'full',
		bg: 'colorPalette.2',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'colorPalette.9',
		mb: '4',
	}),
	title: css({
		textStyle: 'h3',
		color: 'fg.default',
	}),
	description: css({
		textStyle: 'body',
		color: 'fg.muted',
		mt: '2',
		maxW: 'md',
	}),
	action: css({
		mt: '6',
	}),
};

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
	return (
		<div className={cx(styles.root, className)}>
			{icon && <div className={styles.iconWrap}>{icon}</div>}
			<h3 className={styles.title}>{title}</h3>
			{description && <p className={styles.description}>{description}</p>}
			{action && <div className={styles.action}>{action}</div>}
		</div>
	);
}
