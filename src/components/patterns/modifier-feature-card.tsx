'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import * as Card from '../ui/card';
import type { ModifierCardFact } from './modifier-card';
import { activateOnEnterOrSpace, type PatternTone } from './shared';

export interface ModifierFeatureCardProps {
	icon?: ReactNode;
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	badges?: ReactNode;
	highlightLabel?: ReactNode;
	highlightValue: ReactNode;
	highlightNote?: ReactNode;
	facts?: ModifierCardFact[];
	footer?: ReactNode;
	tone?: PatternTone;
	selected?: boolean;
	onClick?: () => void;
	className?: string;
}

const styles = {
	root: css({
		position: 'relative',
		overflow: 'hidden',
		borderWidth: '0',
		borderColor: 'transparent',
		borderRadius: '2xl',
		bg: 'app.surface',
		boxShadow: '{shadows.float}',
		transitionProperty: 'transform, box-shadow, background-color',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_before: {
			content: '""',
			position: 'absolute',
			inset: '0',
			pointerEvents: 'none',
			background:
				'radial-gradient(circle at top right, rgba(62, 131, 138, 0.16), transparent 42%), linear-gradient(145deg, rgba(62, 131, 138, 0.14) 0%, rgba(62, 131, 138, 0.05) 45%, transparent 78%)',
		},
		_dark: {
			_before: {
				background:
					'radial-gradient(circle at top right, rgba(163, 221, 226, 0.18), transparent 44%), linear-gradient(145deg, rgba(163, 221, 226, 0.16) 0%, rgba(163, 221, 226, 0.06) 45%, transparent 78%)',
			},
		},
	}),
	rootWheat: css({
		_before: {
			background:
				'radial-gradient(circle at top right, rgba(176, 134, 72, 0.16), transparent 42%), linear-gradient(145deg, rgba(176, 134, 72, 0.14) 0%, rgba(176, 134, 72, 0.05) 45%, transparent 78%)',
		},
		_dark: {
			_before: {
				background:
					'radial-gradient(circle at top right, rgba(223, 190, 127, 0.18), transparent 44%), linear-gradient(145deg, rgba(223, 190, 127, 0.16) 0%, rgba(223, 190, 127, 0.06) 45%, transparent 78%)',
			},
		},
	}),
	interactive: css({
		cursor: 'pointer',
		userSelect: 'none',
		outline: 'none',
		_hover: {
			transform: 'translateY(-1px)',
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
		bg: 'app.surface.raised',
		boxShadow: '{shadows.float}',
		_hover: {
			bg: 'app.surface.raised',
			boxShadow: '{shadows.float}',
		},
	}),
	body: css({
		position: 'relative',
		zIndex: '1',
		display: 'grid',
		gap: '4.5',
		paddingX: '5',
		paddingY: '5',
		minHeight: '15rem',
	}),
	header: css({
		display: 'grid',
		gridTemplateColumns: {
			base: 'minmax(0, 1fr)',
			md: 'minmax(0, 1fr) auto',
		},
		gap: '4',
		alignItems: 'start',
	}),
	copy: css({
		display: 'grid',
		gap: '2',
		minWidth: '0',
	}),
	titleRow: css({
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
		bg: 'rgba(45, 100, 97, 0.1)',
		color: 'app.accent',
		boxShadow: 'none',
		_dark: {
			bg: 'rgba(163, 221, 226, 0.12)',
			boxShadow: 'none',
		},
	}),
	iconWrapWheat: css({
		bg: 'rgba(164, 121, 60, 0.1)',
		color: 'app.text',
		_dark: {
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
		textStyle: 'sectionTitle',
		color: 'app.text',
		lineHeight: '1.2',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		lineHeight: '1.6',
		maxW: '32rem',
	}),
	badges: css({
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: '1.5',
	}),
	highlight: css({
		display: 'grid',
		gap: '1.5',
		alignContent: 'start',
		paddingX: '4',
		paddingY: '3.5',
		borderRadius: '2xl',
		bg: 'color-mix(in srgb, var(--colors-app-surface) 64%, rgba(45, 100, 97, 0.09) 36%)',
		boxShadow: 'none',
		minW: { base: 'auto', md: '13rem' },
		_dark: {
			bg: 'color-mix(in srgb, var(--colors-app-surface) 78%, rgba(163, 221, 226, 0.12) 22%)',
			boxShadow: 'none',
		},
	}),
	highlightWheat: css({
		bg: 'color-mix(in srgb, var(--colors-app-surface) 64%, rgba(176, 134, 72, 0.1) 36%)',
		_dark: {
			bg: 'color-mix(in srgb, var(--colors-app-surface) 78%, rgba(223, 190, 127, 0.12) 22%)',
		},
	}),
	highlightLabel: css({
		textStyle: 'caption',
		fontWeight: '700',
		textTransform: 'uppercase',
		letterSpacing: '0.14em',
		color: 'app.text.subtle',
	}),
	highlightValue: css({
		textStyle: 'metricValue',
		letterSpacing: '-0.04em',
		color: 'app.text',
		lineHeight: '1',
	}),
	highlightNote: css({
		textStyle: 'caption',
		color: 'app.text.muted',
		lineHeight: '1.55',
	}),
	facts: css({
		display: 'grid',
		gridTemplateColumns: {
			base: '1fr',
			sm: 'repeat(2, minmax(0, 1fr))',
		},
		gap: '2.5',
	}),
	fact: css({
		display: 'grid',
		gap: '1',
		paddingX: '3.5',
		paddingY: '3',
		borderRadius: 'xl',
		bg: 'color-mix(in srgb, var(--colors-app-canvas-subtle) 82%, var(--colors-app-surface) 18%)',
		_dark: {
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
		lineHeight: '1.5',
		overflowWrap: 'anywhere',
	}),
	factValueMono: css({
		fontFamily: 'mono',
	}),
	footer: css({
		marginTop: 'auto',
		paddingTop: '3',
		color: 'app.text.muted',
	}),
};

export function ModifierFeatureCard({
	icon,
	eyebrow,
	title,
	description,
	badges,
	highlightLabel,
	highlightValue,
	highlightNote,
	facts,
	footer,
	tone = 'teal',
	selected,
	onClick,
	className,
}: ModifierFeatureCardProps) {
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
				onKeyDown={(event) => activateOnEnterOrSpace(event, onClick)}
				role={interactive ? 'button' : undefined}
				tabIndex={interactive ? 0 : undefined}
				aria-pressed={interactive && selected !== undefined ? selected : undefined}
			>
				<div className={styles.header}>
					<div className={styles.copy}>
						<div className={styles.titleRow}>
							{icon ? (
								<div className={cx(styles.iconWrap, tone === 'wheat' && styles.iconWrapWheat)}>
									{icon}
								</div>
							) : null}
							<div className={styles.copy}>
								{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
								<div className={styles.title}>{title}</div>
							</div>
						</div>
						{description ? <div className={styles.description}>{description}</div> : null}
						{badges ? <div className={styles.badges}>{badges}</div> : null}
					</div>
					<div className={cx(styles.highlight, tone === 'wheat' && styles.highlightWheat)}>
						{highlightLabel ? <div className={styles.highlightLabel}>{highlightLabel}</div> : null}
						<div className={styles.highlightValue}>{highlightValue}</div>
						{highlightNote ? <div className={styles.highlightNote}>{highlightNote}</div> : null}
					</div>
				</div>

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
