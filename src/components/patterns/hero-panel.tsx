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
		gridTemplateColumns: { base: '1fr', xl: 'minmax(0, 1.05fr) minmax(20rem, 0.95fr)' },
		gap: '0',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
		overflow: 'hidden',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		minWidth: 0,
		padding: { base: '5', md: '6', xl: '7' },
	}),
	eyebrow: css({
		display: 'inline-flex',
		alignItems: 'center',
		width: 'fit-content',
		paddingX: '3',
		paddingY: '1.5',
		borderRadius: 'full',
		bg: 'app.accent.soft',
		color: 'app.accent',
		textStyle: 'eyebrow',
	}),
	title: css({
		textStyle: 'h1',
		color: 'app.text',
		maxWidth: '16ch',
	}),
	description: css({
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '28rem',
		lineHeight: '1.65',
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
		minHeight: '100%',
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'stretch',
		padding: { base: '4.5', md: '5' },
		bg: 'linear-gradient(180deg, #f3f4f4 0%, #ecefee 100%)',
		borderLeftWidth: { base: '0', xl: '1px' },
		borderTopWidth: { base: '1px', xl: '0' },
		borderColor: 'app.border',
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
