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
		bg: 'app.surface',
		borderWidth: '1px',
		borderColor: 'app.border',
		boxShadow: '{shadows.whisper}',
		rounded: 'l3',
		p: '5',
	}),
	number: css({
		w: '10',
		h: '10',
		rounded: 'l2',
		bg: 'app.accent.soft',
		color: 'app.accent',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textStyle: 'label',
		flexShrink: 0,
		fontWeight: '700',
	}),
	content: css({
		flex: 1,
		minW: 0,
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		mt: '1.5',
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
