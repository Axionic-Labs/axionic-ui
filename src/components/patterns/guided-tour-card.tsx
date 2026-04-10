'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface GuidedTourCardProps {
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		width: '20rem',
		maxWidth: 'calc(100vw - 2rem)',
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		padding: '5',
		borderRadius: 'xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		background: 'app.surface',
		boxShadow: '{shadows.float}',
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.accent',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'body-sm',
		color: 'app.text.muted',
		lineHeight: '1.6',
	}),
	meta: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '2.5',
		flexWrap: 'wrap',
	}),
};

export function GuidedTourCard({
	eyebrow,
	title,
	description,
	meta,
	actions,
	className,
}: GuidedTourCardProps) {
	return (
		<section className={cx(styles.root, className)}>
			{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
			<div className={styles.title}>{title}</div>
			{description && <div className={styles.description}>{description}</div>}
			{meta && <div className={styles.meta}>{meta}</div>}
			{actions && <div className={styles.actions}>{actions}</div>}
		</section>
	);
}
