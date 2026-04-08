'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SupportPanelProps {
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	aside?: ReactNode;
	tone?: 'muted' | 'accent';
	className?: string;
}

const styles = {
	root: css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', lg: 'minmax(0, 1fr) auto' },
		gap: '5',
		padding: { base: '5', md: '6' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		boxShadow: '{shadows.panel}',
	}),
	rootAccent: css({
		bg: 'app.accent',
		borderColor: 'transparent',
		boxShadow: 'none',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	eyebrowAccent: css({
		color: 'rgba(248, 249, 249, 0.72)',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	titleAccent: css({
		color: 'app.text.inverse',
	}),
	description: css({
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '2xl',
	}),
	descriptionAccent: css({
		color: 'rgba(248, 249, 249, 0.76)',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '3',
	}),
	aside: css({
		display: 'flex',
		alignItems: { base: 'flex-start', lg: 'center' },
		justifyContent: { base: 'flex-start', lg: 'flex-end' },
	}),
};

export function SupportPanel({
	eyebrow,
	title,
	description,
	actions,
	aside,
	tone = 'muted',
	className,
}: SupportPanelProps) {
	return (
		<section className={cx(styles.root, tone === 'accent' && styles.rootAccent, className)}>
			<div className={styles.copy}>
				{eyebrow && (
					<div className={cx(styles.eyebrow, tone === 'accent' && styles.eyebrowAccent)}>
						{eyebrow}
					</div>
				)}
				<div className={cx(styles.title, tone === 'accent' && styles.titleAccent)}>{title}</div>
				{description && (
					<div className={cx(styles.description, tone === 'accent' && styles.descriptionAccent)}>
						{description}
					</div>
				)}
				{actions && <div className={styles.actions}>{actions}</div>}
			</div>
			{aside && <div className={styles.aside}>{aside}</div>}
		</section>
	);
}
