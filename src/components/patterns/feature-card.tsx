'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface FeatureCardProps {
	title: string;
	description: string;
	icon?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		bg: 'bg.default',
		borderWidth: '1px',
		borderColor: 'border.muted',
		rounded: 'l3',
		p: '6',
		transition: 'border-color 0.2s ease',
		_hover: { borderColor: 'colorPalette.7' },
	}),
	iconWrap: css({
		w: '10',
		h: '10',
		rounded: 'l2',
		bg: 'colorPalette.2',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'colorPalette.9',
		mb: '4',
	}),
	title: css({
		textStyle: 'label',
		color: 'fg.default',
		mb: '2',
	}),
	description: css({
		textStyle: 'small',
		color: 'fg.muted',
	}),
};

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
	return (
		<div className={cx(styles.root, className)}>
			{icon && <div className={styles.iconWrap}>{icon}</div>}
			<div className={styles.title}>{title}</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
}
