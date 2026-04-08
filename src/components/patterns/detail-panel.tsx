'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface DetailPanelProps {
	eyebrow?: ReactNode;
	title?: ReactNode;
	description?: ReactNode;
	icon?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		padding: { base: '5', md: '6' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
	}),
	header: css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '4',
	}),
	headerCopy: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '3.5',
		minWidth: 0,
	}),
	iconWrap: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '10',
		borderRadius: 'xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		color: 'app.accent',
		flexShrink: 0,
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
		minWidth: 0,
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
		textStyle: 'small',
		color: 'app.text.muted',
	}),
	meta: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2',
		color: 'app.text.subtle',
		textStyle: 'caption',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		minWidth: 0,
		color: 'app.text.muted',
	}),
	footer: css({
		paddingTop: '4',
		borderTopWidth: '1px',
		borderColor: 'app.border',
		color: 'app.text.muted',
	}),
};

export function DetailPanel({
	eyebrow,
	title,
	description,
	icon,
	meta,
	actions,
	children,
	footer,
	className,
}: DetailPanelProps) {
	return (
		<section className={cx(styles.root, className)}>
			{(eyebrow || title || description || icon || meta || actions) && (
				<div className={styles.header}>
					<div className={styles.headerCopy}>
						{icon && <div className={styles.iconWrap}>{icon}</div>}
						<div className={styles.copy}>
							{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
							{title && <div className={styles.title}>{title}</div>}
							{description && <div className={styles.description}>{description}</div>}
							{meta && <div className={styles.meta}>{meta}</div>}
						</div>
					</div>
					{actions && <div className={styles.actions}>{actions}</div>}
				</div>
			)}
			{children && <div className={styles.body}>{children}</div>}
			{footer && <div className={styles.footer}>{footer}</div>}
		</section>
	);
}
