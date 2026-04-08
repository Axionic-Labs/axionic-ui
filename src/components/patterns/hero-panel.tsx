'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface HeroPanelProps {
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	media?: ReactNode;
	footer?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', xl: 'minmax(0, 1.25fr) minmax(18rem, 0.75fr)' },
		gap: '6',
		padding: { base: '6', md: '7', xl: '8' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		minWidth: 0,
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	title: css({
		textStyle: 'h1',
		color: 'app.text',
		maxWidth: '16ch',
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
	footer: css({
		paddingTop: '4',
		borderTopWidth: '1px',
		borderColor: 'app.border',
		color: 'app.text.muted',
	}),
	media: css({
		minHeight: '15rem',
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'stretch',
		padding: { base: '4', md: '5' },
		borderRadius: 'l3',
		bg: 'app.surface.muted',
		borderWidth: '1px',
		borderColor: 'app.border',
		boxShadow: '{shadows.panel}',
	}),
};

export function HeroPanel({
	eyebrow,
	title,
	description,
	actions,
	media,
	footer,
	className,
}: HeroPanelProps) {
	return (
		<section className={cx(styles.root, className)}>
			<div className={styles.copy}>
				{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
				<div className={styles.title}>{title}</div>
				{description && <div className={styles.description}>{description}</div>}
				{actions && <div className={styles.actions}>{actions}</div>}
				{footer && <div className={styles.footer}>{footer}</div>}
			</div>
			{media && <div className={styles.media}>{media}</div>}
		</section>
	);
}
