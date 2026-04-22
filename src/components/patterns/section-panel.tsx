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
	variant?: 'default' | 'muted' | 'flat';
	density?: 'default' | 'compact';
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 'l3',
		boxShadow: '{shadows.whisper}',
		overflow: 'hidden',
	}),
	default: css({
		bg: 'app.surface',
	}),
	muted: css({
		bg: 'app.surface.muted',
	}),
	flat: css({
		bg: 'app.surface',
		borderWidth: '1px',
		borderColor: 'app.border',
		boxShadow: '{shadows.whisper}',
	}),
	header: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '4',
		paddingX: { base: '5.5', md: '6.5' },
		paddingY: { base: '5', md: '5.5' },
	}),
	headerCompact: css({
		gap: '3',
		paddingX: { base: '4', md: '4.5' },
		paddingY: { base: '4', md: '4.5' },
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '2',
		minWidth: 0,
	}),
	copyCompact: css({
		gap: '1',
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	eyebrowCompact: css({
		letterSpacing: '0.18em',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	titleCompact: css({
		textStyle: 'small',
		fontWeight: '700',
	}),
	description: css({
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '3xl',
		lineHeight: '1.65',
	}),
	descriptionCompact: css({
		textStyle: 'caption',
		lineHeight: '1.45',
		maxWidth: '2xl',
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
	actionsCompact: css({
		gap: '2',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4.5',
		paddingX: { base: '5.5', md: '6.5' },
		paddingY: { base: '5.5', md: '6' },
	}),
	bodyCompact: css({
		gap: '3',
		paddingX: { base: '4', md: '4.5' },
		paddingY: { base: '4', md: '4.5' },
	}),
	footer: css({
		paddingX: { base: '5.5', md: '6.5' },
		paddingY: '5',
		bg: 'app.surface.muted',
		color: 'app.text.muted',
	}),
	footerCompact: css({
		paddingX: { base: '4', md: '4.5' },
		paddingY: '4',
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
	density = 'default',
	className,
}: SectionPanelProps) {
	const hasHeader = Boolean(eyebrow || title || description || meta || actions);
	const hasBody = children !== undefined && children !== null;
	const hasFooter = footer !== undefined && footer !== null;
	const compact = density === 'compact';

	return (
		<section className={cx(styles.root, styles[variant], className)}>
			{hasHeader && (
				<div className={cx(styles.header, compact && styles.headerCompact)}>
					<div className={cx(styles.copy, compact && styles.copyCompact)}>
						{eyebrow && (
							<div className={cx(styles.eyebrow, compact && styles.eyebrowCompact)}>{eyebrow}</div>
						)}
						{title && (
							<div className={cx(styles.title, compact && styles.titleCompact)}>{title}</div>
						)}
						{description && (
							<div className={cx(styles.description, compact && styles.descriptionCompact)}>
								{description}
							</div>
						)}
						{meta && <div className={styles.meta}>{meta}</div>}
					</div>
					{actions && (
						<div className={cx(styles.actions, compact && styles.actionsCompact)}>{actions}</div>
					)}
				</div>
			)}
			{hasBody && <div className={cx(styles.body, compact && styles.bodyCompact)}>{children}</div>}
			{hasFooter && (
				<div className={cx(styles.footer, compact && styles.footerCompact)}>{footer}</div>
			)}
		</section>
	);
}
