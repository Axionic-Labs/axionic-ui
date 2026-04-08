'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface StepCardProps {
	step: number;
	title: string;
	description?: string;
	children?: ReactNode;
	endSlot?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '4',
		bg: 'rgba(255, 255, 255, 0.88)',
		borderWidth: '1px',
		borderColor: 'app.border',
		boxShadow: '{shadows.whisper}',
		rounded: '2xl',
		p: '5',
	}),
	number: css({
		w: '8',
		h: '8',
		rounded: 'xl',
		bg: 'rgba(45, 100, 97, 0.08)',
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
		paddingRight: '2',
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
	endSlot: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'app.text.subtle',
		flexShrink: 0,
	}),
};

export function StepCard({
	step,
	title,
	description,
	children,
	endSlot,
	className,
}: StepCardProps) {
	return (
		<div className={cx(styles.root, className)}>
			<div
				className={css({ display: 'flex', alignItems: 'center', gap: '4', minWidth: 0, flex: '1' })}
			>
				<div className={styles.number}>{step}</div>
				<div className={styles.content}>
					<div className={styles.title}>{title}</div>
					{description && <div className={styles.description}>{description}</div>}
					{children}
				</div>
			</div>
			{endSlot && <div className={styles.endSlot}>{endSlot}</div>}
		</div>
	);
}
