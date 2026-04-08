'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SectionPanelProps {
	eyebrow?: ReactNode;
	title?: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	variant?: 'default' | 'muted';
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		overflow: 'hidden',
	}),
	default: css({
		bg: 'app.surface',
	}),
	muted: css({
		bg: 'app.surface.muted',
	}),
	header: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '4',
		paddingX: { base: '4.5', md: '5.5' },
		paddingY: { base: '4.5', md: '5' },
	}),
	headerBorder: css({
		borderBottomWidth: '1px',
		borderColor: 'app.border',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '2',
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
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '3xl',
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
		gap: '3',
	}),
	body: css({
		paddingX: { base: '4.5', md: '5.5' },
		paddingY: { base: '4.5', md: '5.5' },
	}),
	footer: css({
		paddingX: { base: '5', md: '6' },
		paddingY: '4',
		borderTopWidth: '1px',
		borderColor: 'app.border',
		color: 'app.text.muted',
	}),
};

export function SectionPanel({
	eyebrow,
	title,
	description,
	meta,
	actions,
	children,
	footer,
	variant = 'default',
	className,
}: SectionPanelProps) {
	const hasHeader = Boolean(eyebrow || title || description || meta || actions);
	const hasBody = children !== undefined && children !== null;
	const hasFooter = footer !== undefined && footer !== null;

	return (
		<section className={cx(styles.root, styles[variant], className)}>
			{hasHeader && (
				<div className={cx(styles.header, (hasBody || hasFooter) && styles.headerBorder)}>
					<div className={styles.copy}>
						{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
						{title && <div className={styles.title}>{title}</div>}
						{description && <div className={styles.description}>{description}</div>}
						{meta && <div className={styles.meta}>{meta}</div>}
					</div>
					{actions && <div className={styles.actions}>{actions}</div>}
				</div>
			)}
			{hasBody && <div className={styles.body}>{children}</div>}
			{hasFooter && <div className={styles.footer}>{footer}</div>}
		</section>
	);
}
