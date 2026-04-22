'use client';

import type { KeyboardEvent, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import * as Card from '../ui/card';

export interface ModifierCardFact {
	label: ReactNode;
	value: ReactNode;
	mono?: boolean;
}

export interface ModifierCardProps {
	icon?: ReactNode;
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	badges?: ReactNode;
	facts?: ModifierCardFact[];
	footer?: ReactNode;
	selected?: boolean;
	tone?: 'teal' | 'wheat';
	onClick?: () => void;
	className?: string;
}

const styles = {
	root: css({
		position: 'relative',
		overflow: 'hidden',
		borderWidth: '1px',
		borderColor: 'app.border',
		borderRadius: '2xl',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
		transitionProperty: 'transform, box-shadow, border-color, background-color',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_before: {
			content: '""',
			position: 'absolute',
			insetX: '0',
			top: '0',
			height: '20',
			pointerEvents: 'none',
			background:
				'linear-gradient(135deg, rgba(62, 131, 138, 0.18) 0%, rgba(62, 131, 138, 0.06) 48%, transparent 84%)',
		},
		_dark: {
			borderColor: 'app.border.strong',
			_before: {
				background:
					'linear-gradient(135deg, rgba(163, 221, 226, 0.2) 0%, rgba(163, 221, 226, 0.08) 48%, transparent 84%)',
			},
		},
	}),
	rootWheat: css({
		_before: {
			background:
				'linear-gradient(135deg, rgba(176, 134, 72, 0.18) 0%, rgba(176, 134, 72, 0.06) 48%, transparent 84%)',
		},
		_dark: {
			_before: {
				background:
					'linear-gradient(135deg, rgba(223, 190, 127, 0.2) 0%, rgba(223, 190, 127, 0.08) 48%, transparent 84%)',
			},
		},
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
	focusable: css({
		outline: 'none',
		_focusVisible: {
			boxShadow: '0 0 0 2px var(--colors-app-accent)',
		},
	}),
	selected: css({
		borderColor: 'app.accent',
		boxShadow: '0 0 0 1px var(--colors-app-accent), var(--shadows-panel)',
		_hover: {
			borderColor: 'app.accent',
			boxShadow: '0 0 0 1px var(--colors-app-accent), var(--shadows-panel)',
		},
	}),
	body: css({
		position: 'relative',
		zIndex: '1',
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		paddingX: '4.5',
		paddingY: '4.5',
		minHeight: '13.5rem',
	}),
	header: css({
		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr)',
		gap: '3.5',
		alignItems: 'start',
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
	copy: css({
		display: 'grid',
		gap: '1.5',
		minWidth: '0',
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
		lineHeight: '1.55',
	}),
	badges: css({
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: '1.5',
	}),
	facts: css({
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		gap: '2',
	}),
	fact: css({
		display: 'grid',
		gap: '1',
		paddingX: '3',
		paddingY: '2.5',
		borderRadius: 'xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'color-mix(in srgb, var(--colors-app-canvas-subtle) 82%, var(--colors-app-surface) 18%)',
		_dark: {
			borderColor: 'app.border.strong',
			bg: 'color-mix(in srgb, var(--colors-app-surface-muted) 76%, var(--colors-app-surface) 24%)',
		},
	}),
	factLabel: css({
		textStyle: 'caption',
		fontWeight: '700',
		textTransform: 'uppercase',
		letterSpacing: '0.14em',
		color: 'app.text.subtle',
	}),
	factValue: css({
		textStyle: 'caption',
		color: 'app.text',
		lineHeight: '1.45',
		overflowWrap: 'anywhere',
	}),
	factValueMono: css({
		fontFamily: 'mono',
	}),
	footer: css({
		marginTop: 'auto',
		paddingTop: '3',
		borderTopWidth: '1px',
		borderColor: 'app.border',
		color: 'app.text.muted',
		_dark: {
			borderColor: 'app.border.strong',
		},
	}),
};

function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, onClick?: () => void) {
	if (!onClick) return;
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onClick();
	}
}

export function ModifierCard({
	icon,
	eyebrow,
	title,
	description,
	badges,
	facts,
	footer,
	selected,
	tone = 'teal',
	onClick,
	className,
}: ModifierCardProps) {
	const interactive = Boolean(onClick);

	return (
		<Card.Root
			className={cx(
				styles.root,
				tone === 'wheat' && styles.rootWheat,
				interactive && styles.interactive,
				selected && styles.selected,
				className,
			)}
		>
			<Card.Body
				className={cx(styles.body, interactive && styles.focusable)}
				onClick={onClick}
				onKeyDown={(event) => handleKeyDown(event, onClick)}
				role={interactive ? 'button' : undefined}
				tabIndex={interactive ? 0 : undefined}
				aria-pressed={interactive && selected !== undefined ? selected : undefined}
			>
				<div className={styles.header}>
					{icon ? (
						<div className={cx(styles.iconWrap, tone === 'wheat' && styles.iconWrapWheat)}>
							{icon}
						</div>
					) : null}
					<div className={styles.copy}>
						{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
						<div className={styles.title}>{title}</div>
						{description ? <div className={styles.description}>{description}</div> : null}
					</div>
				</div>

				{badges ? <div className={styles.badges}>{badges}</div> : null}

				{facts?.length ? (
					<div className={styles.facts}>
						{facts.map((fact, index) => (
							<div key={index} className={styles.fact}>
								<div className={styles.factLabel}>{fact.label}</div>
								<div className={cx(styles.factValue, fact.mono && styles.factValueMono)}>
									{fact.value}
								</div>
							</div>
						))}
					</div>
				) : null}

				{footer ? <div className={styles.footer}>{footer}</div> : null}
			</Card.Body>
		</Card.Root>
	);
}
