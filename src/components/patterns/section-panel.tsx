'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import type { PatternDensity } from './shared';

export interface SectionPanelProps {
	eyebrow?: ReactNode;
	title?: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	variant?: 'default' | 'muted' | 'flat' | 'workspace';
	density?: PatternDensity;
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
		boxShadow: '{shadows.whisper}',
	}),
	workspace: css({
		bg: 'app.surface',
		borderRadius: '2xl',
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
	headerWorkspace: css({
		alignItems: 'center',
		gap: '3',
		paddingX: { base: '4.5', md: '5' },
		paddingY: { base: '3.5', md: '3.75' },
		bg: 'app.canvas.subtle',
		_dark: {
			bg: 'color-mix(in srgb, var(--colors-app-accent-soft) 24%, var(--colors-app-surface-muted) 76%)',
		},
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
	eyebrowWorkspace: css({
		textStyle: 'caption',
		fontWeight: '700',
		textTransform: 'uppercase',
		letterSpacing: '0.18em',
		color: 'app.text.muted',
		_dark: {
			color: 'app.text.subtle',
		},
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	titleCompact: css({
		textStyle: 'small',
		fontWeight: '700',
	}),
	titleWorkspace: css({
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
	descriptionWorkspace: css({
		textStyle: 'caption',
		lineHeight: '1.5',
		maxWidth: 'none',
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
	bodyWorkspace: css({
		gap: '4.5',
		paddingX: { base: '4.5', md: '5' },
		paddingY: { base: '4.5', md: '5' },
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
	footerWorkspace: css({
		paddingX: { base: '4.5', md: '5' },
		paddingY: { base: '3.75', md: '4' },
		bg: 'app.canvas.subtle',
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
	const workspace = variant === 'workspace';

	return (
		<section className={cx(styles.root, styles[variant], className)}>
			{hasHeader && (
				<div
					className={cx(
						styles.header,
						compact && styles.headerCompact,
						workspace && styles.headerWorkspace,
					)}
				>
					<div className={cx(styles.copy, compact && styles.copyCompact)}>
						{eyebrow && (
							<div
								className={cx(
									styles.eyebrow,
									compact && styles.eyebrowCompact,
									workspace && styles.eyebrowWorkspace,
								)}
							>
								{eyebrow}
							</div>
						)}
						{title && (
							<div
								className={cx(
									styles.title,
									compact && styles.titleCompact,
									workspace && styles.titleWorkspace,
								)}
							>
								{title}
							</div>
						)}
						{description && (
							<div
								className={cx(
									styles.description,
									compact && styles.descriptionCompact,
									workspace && styles.descriptionWorkspace,
								)}
							>
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
			{hasBody && (
				<div
					className={cx(
						styles.body,
						compact && styles.bodyCompact,
						workspace && styles.bodyWorkspace,
					)}
				>
					{children}
				</div>
			)}
			{hasFooter && (
				<div
					className={cx(
						styles.footer,
						compact && styles.footerCompact,
						workspace && styles.footerWorkspace,
					)}
				>
					{footer}
				</div>
			)}
		</section>
	);
}
