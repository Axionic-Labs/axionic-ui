'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface StatCardProps {
	title: string;
	value: string | number;
	change?: string;
	changeType?: 'positive' | 'negative' | 'neutral';
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
		display: 'flex',
		alignItems: 'flex-start',
		gap: '4',
	}),
	iconWrap: css({
		flexShrink: 0,
		w: '10',
		h: '10',
		rounded: 'l2',
		bg: 'colorPalette.2',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'colorPalette.9',
	}),
	content: css({
		flex: 1,
		minW: 0,
	}),
	title: css({
		textStyle: 'caption',
		color: 'fg.muted',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
	}),
	value: css({
		textStyle: 'h2',
		color: 'fg.default',
		mt: '1',
	}),
	change: css({
		textStyle: 'small',
		mt: '1',
	}),
};

export function StatCard({ title, value, change, changeType = 'neutral', icon, className }: StatCardProps) {
	const changeColor =
		changeType === 'positive'
			? css({ color: '{colors.green.11}' })
			: changeType === 'negative'
				? css({ color: '{colors.red.11}' })
				: css({ color: 'fg.muted' });

	return (
		<div className={cx(styles.root, className)}>
			{icon && <div className={styles.iconWrap}>{icon}</div>}
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<div className={styles.value}>{value}</div>
				{change && <div className={cx(styles.change, changeColor)}>{change}</div>}
			</div>
		</div>
	);
}
