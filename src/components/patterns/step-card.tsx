'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface StepCardProps {
	step: number;
	title: string;
	description?: string;
	children?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		gap: '4',
	}),
	number: css({
		w: '8',
		h: '8',
		rounded: 'full',
		bg: 'colorPalette.9',
		color: 'colorPalette.fg',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textStyle: 'label',
		flexShrink: 0,
	}),
	content: css({
		flex: 1,
		minW: 0,
	}),
	title: css({
		textStyle: 'label',
		color: 'fg.default',
	}),
	description: css({
		textStyle: 'small',
		color: 'fg.muted',
		mt: '1',
	}),
};

export function StepCard({ step, title, description, children, className }: StepCardProps) {
	return (
		<div className={cx(styles.root, className)}>
			<div className={styles.number}>{step}</div>
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				{description && <div className={styles.description}>{description}</div>}
				{children}
			</div>
		</div>
	);
}
