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
	titleClassName?: string;
	descriptionClassName?: string;
	copyClassName?: string;
}

const styles = {
	root: css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', lg: 'minmax(0, 1fr) auto' },
		gap: '4',
		padding: { base: '5', md: '5.5' },
		borderRadius: 'l3',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
	}),
	rootAccent: css({
		position: 'relative',
		overflow: 'hidden',
		borderWidth: '1px',
		borderColor:
			'color-mix(in srgb, var(--colors-app-accent-alt-border) 58%, var(--colors-app-border) 42%)',
		bg: 'linear-gradient(145deg, color-mix(in srgb, var(--colors-app-accent-soft) 74%, var(--colors-app-surface) 26%) 0%, color-mix(in srgb, var(--colors-app-accent-alt-soft) 88%, var(--colors-app-surface) 12%) 100%)',
		boxShadow: '{shadows.panel}',
		_dark: {
			borderColor: 'rgba(163, 221, 226, 0.22)',
			bg: 'linear-gradient(145deg, rgba(18, 45, 48, 0.98) 0%, rgba(15, 35, 38, 0.98) 100%)',
		},
		_before: {
			content: '""',
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			height: '3px',
			background:
				'linear-gradient(90deg, var(--colors-app-accent) 0%, var(--colors-app-accent-alt) 100%)',
			_dark: {
				background:
					'linear-gradient(90deg, rgba(163, 221, 226, 0.92) 0%, rgba(235, 188, 111, 0.92) 100%)',
			},
		},
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '2.5',
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	eyebrowAccent: css({
		color: {
			_light: 'app.accentAlt.text',
			_dark: '{colors.wheat.11}',
		},
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	titleAccent: css({
		color: 'app.text',
	}),
	description: css({
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '2xl',
		lineHeight: '1.6',
	}),
	descriptionAccent: css({
		color: {
			_light: 'app.text.muted',
			_dark: 'app.text.subtle',
		},
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
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
	titleClassName,
	descriptionClassName,
	copyClassName,
}: SupportPanelProps) {
	return (
		<section className={cx(styles.root, tone === 'accent' && styles.rootAccent, className)}>
			<div className={cx(styles.copy, copyClassName)}>
				{eyebrow && (
					<div className={cx(styles.eyebrow, tone === 'accent' && styles.eyebrowAccent)}>
						{eyebrow}
					</div>
				)}
				<div className={cx(styles.title, tone === 'accent' && styles.titleAccent, titleClassName)}>
					{title}
				</div>
				{description && (
					<div
						className={cx(
							styles.description,
							tone === 'accent' && styles.descriptionAccent,
							descriptionClassName,
						)}
					>
						{description}
					</div>
				)}
				{actions && <div className={styles.actions}>{actions}</div>}
			</div>
			{aside && <div className={styles.aside}>{aside}</div>}
		</section>
	);
}
