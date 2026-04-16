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
	numberClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
}

const styles = {
	root: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '3.5',
		bg: 'app.surface',
		borderWidth: '1px',
		borderColor: 'app.border',
		rounded: 'l3',
		p: '4',
		boxShadow: '{shadows.whisper}',
	}),
	number: css({
		w: '7.5',
		h: '7.5',
		rounded: 'xl',
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
		paddingRight: '2',
	}),
	title: css({
		textStyle: 'toolbarLabel',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.muted',
		mt: '1.25',
		lineHeight: '1.55',
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
	numberClassName,
	titleClassName,
	descriptionClassName,
}: StepCardProps) {
	return (
		<div className={cx(styles.root, className)}>
			<div
				className={css({ display: 'flex', alignItems: 'center', gap: '4', minWidth: 0, flex: '1' })}
			>
				<div className={cx(styles.number, numberClassName)}>{step}</div>
				<div className={styles.content}>
					<div className={cx(styles.title, titleClassName)}>{title}</div>
					{description && (
						<div className={cx(styles.description, descriptionClassName)}>{description}</div>
					)}
					{children}
				</div>
			</div>
			{endSlot && <div className={styles.endSlot}>{endSlot}</div>}
		</div>
	);
}
