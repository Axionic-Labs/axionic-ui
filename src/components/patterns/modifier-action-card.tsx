'use client';

import type { KeyboardEvent, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import * as Card from '../ui/card';

export interface ModifierActionCardProps {
	icon?: ReactNode;
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	actionLabel?: ReactNode;
	helper?: ReactNode;
	tone?: 'teal' | 'wheat';
	selected?: boolean;
	onClick?: () => void;
	className?: string;
}

const styles = {
	root: css({
		position: 'relative',
		overflow: 'hidden',
		borderWidth: '1px',
		borderStyle: 'dashed',
		borderColor: 'rgba(45, 100, 97, 0.24)',
		borderRadius: '2xl',
		bg: 'color-mix(in srgb, var(--colors-app-surface) 72%, rgba(45, 100, 97, 0.06) 28%)',
		boxShadow: '{shadows.whisper}',
		transitionProperty: 'transform, box-shadow, border-color, background-color',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_before: {
			content: '""',
			position: 'absolute',
			insetX: '0',
			top: '0',
			height: '18',
			pointerEvents: 'none',
			background:
				'linear-gradient(180deg, rgba(62, 131, 138, 0.12) 0%, rgba(62, 131, 138, 0.02) 100%)',
		},
		_dark: {
			borderColor: 'rgba(163, 221, 226, 0.24)',
			bg: 'color-mix(in srgb, var(--colors-app-surface) 82%, rgba(163, 221, 226, 0.08) 18%)',
			_before: {
				background:
					'linear-gradient(180deg, rgba(163, 221, 226, 0.14) 0%, rgba(163, 221, 226, 0.03) 100%)',
			},
		},
	}),
	rootWheat: css({
		borderColor: 'rgba(164, 121, 60, 0.24)',
		bg: 'color-mix(in srgb, var(--colors-app-surface) 72%, rgba(176, 134, 72, 0.06) 28%)',
		_before: {
			background:
				'linear-gradient(180deg, rgba(176, 134, 72, 0.12) 0%, rgba(176, 134, 72, 0.02) 100%)',
		},
		_dark: {
			borderColor: 'rgba(223, 190, 127, 0.24)',
			bg: 'color-mix(in srgb, var(--colors-app-surface) 82%, rgba(223, 190, 127, 0.08) 18%)',
			_before: {
				background:
					'linear-gradient(180deg, rgba(223, 190, 127, 0.14) 0%, rgba(223, 190, 127, 0.03) 100%)',
			},
		},
	}),
	selected: css({
		borderStyle: 'solid',
		borderColor: 'app.accent',
		boxShadow: '0 0 0 1px var(--colors-app-accent), var(--shadows-panel)',
	}),
	interactive: css({
		cursor: 'pointer',
		userSelect: 'none',
		outline: 'none',
		_hover: {
			transform: 'translateY(-1px)',
			borderColor: 'app.border.strong',
			boxShadow: '{shadows.panel}',
			bg: 'app.surface.muted',
		},
	}),
	body: css({
		position: 'relative',
		zIndex: '1',
		display: 'grid',
		gap: '3.5',
		alignContent: 'start',
		paddingX: '4.5',
		paddingY: '4.5',
		minHeight: '13.5rem',
	}),
	iconWrap: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '11',
		borderRadius: '2xl',
		borderWidth: '1px',
		borderColor: 'rgba(45, 100, 97, 0.14)',
		bg: 'rgba(45, 100, 97, 0.08)',
		color: 'app.accent',
		boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45)',
		_dark: {
			borderColor: 'rgba(163, 221, 226, 0.22)',
			bg: 'rgba(163, 221, 226, 0.12)',
			boxShadow: 'none',
		},
	}),
	iconWrapWheat: css({
		borderColor: 'rgba(164, 121, 60, 0.18)',
		bg: 'rgba(164, 121, 60, 0.1)',
		color: 'app.text',
		_dark: {
			borderColor: 'rgba(223, 190, 127, 0.22)',
			bg: 'rgba(223, 190, 127, 0.12)',
		},
	}),
	eyebrow: css({
		textStyle: 'caption',
		fontWeight: '700',
		textTransform: 'uppercase',
		letterSpacing: '0.16em',
		color: 'app.text.subtle',
	}),
	title: css({
		textStyle: 'small',
		fontWeight: '700',
		color: 'app.text',
		lineHeight: '1.35',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.muted',
		lineHeight: '1.6',
	}),
	actionRow: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '2.5',
		marginTop: 'auto',
		paddingTop: '3',
		borderTopWidth: '1px',
		borderColor: 'rgba(45, 100, 97, 0.14)',
		color: 'app.accentAlt.text',
		_dark: {
			borderColor: 'rgba(163, 221, 226, 0.18)',
		},
	}),
	actionLabel: css({
		textStyle: 'caption',
		fontWeight: '700',
		letterSpacing: '0.04em',
	}),
	helper: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		justifySelf: 'start',
	}),
};

function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, onClick?: () => void) {
	if (!onClick) return;
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onClick();
	}
}

export function ModifierActionCard({
	icon,
	eyebrow,
	title,
	description,
	actionLabel = 'Open',
	helper,
	tone = 'teal',
	selected = false,
	onClick,
	className,
}: ModifierActionCardProps) {
	const interactive = Boolean(onClick);

	return (
		<Card.Root
			className={cx(
				styles.root,
				tone === 'wheat' && styles.rootWheat,
				selected && styles.selected,
				interactive && styles.interactive,
				className,
			)}
		>
			<Card.Body
				className={styles.body}
				onClick={onClick}
				onKeyDown={(event) => handleKeyDown(event, onClick)}
				role={interactive ? 'button' : undefined}
				tabIndex={interactive ? 0 : undefined}
			>
				{icon ? (
					<div className={cx(styles.iconWrap, tone === 'wheat' && styles.iconWrapWheat)}>
						{icon}
					</div>
				) : null}
				{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
				<div className={styles.title}>{title}</div>
				{description ? <div className={styles.description}>{description}</div> : null}
				{helper ? <div className={styles.helper}>{helper}</div> : null}
				<div className={styles.actionRow}>
					<span className={styles.actionLabel}>{actionLabel}</span>
					<span aria-hidden="true">-&gt;</span>
				</div>
			</Card.Body>
		</Card.Root>
	);
}
