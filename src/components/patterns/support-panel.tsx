'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SupportPanelProps {
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	aside?: ReactNode;
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
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '2xl',
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
	className,
}: SupportPanelProps) {
	return (
		<section className={cx(styles.root, className)}>
			<div className={styles.copy}>
				{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
				<div className={styles.title}>{title}</div>
				{description && <div className={styles.description}>{description}</div>}
				{actions && <div className={styles.actions}>{actions}</div>}
			</div>
			{aside && <div className={styles.aside}>{aside}</div>}
		</section>
	);
}
