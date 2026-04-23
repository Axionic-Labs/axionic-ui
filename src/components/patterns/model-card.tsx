'use client';

import type { KeyboardEvent, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface ModelCardFact {
	label: ReactNode;
	value: ReactNode;
}

export interface ModelCardStatus {
	label: ReactNode;
	tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
}

export interface ModelCardProps {
	icon: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	status: ModelCardStatus;
	meta?: ReactNode;
	facts?: ModelCardFact[];
	progress?: {
		value: number;
		label?: ReactNode;
		ariaLabel?: string;
	};
	footer?: ReactNode;
	selected?: boolean;
	onClick?: () => void;
	className?: string;
	titleAdornment?: ReactNode;
}

export interface ModelCtaCardProps {
	icon: ReactNode;
	title: ReactNode;
	subtitle?: ReactNode;
	action: ReactNode;
	onClick?: () => void;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
		p: '4',
		rounded: 'md',
		borderWidth: '0',
		borderColor: 'transparent',
		bg: 'app.surface',
		boxShadow: 'whisper',
		transitionProperty: 'border-color, background-color, box-shadow, transform',
		transitionDuration: '160ms',
		transitionTimingFunction: 'ease',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
		minH: 0,
		flex: '1',
	}),
	interactive: css({
		cursor: 'pointer',
		userSelect: 'none',
		outline: 'none',
		_hover: {
			bg: 'app.surface.raised',
			boxShadow: 'panel',
			transform: 'translateY(-2px)',
		},
		_focusVisible: {
			outline: '2px solid',
			outlineColor: 'app.accent',
			outlineOffset: '2px',
		},
	}),
	selected: css({
		bg: 'color-mix(in srgb, var(--colors-app-accent-soft) 34%, var(--colors-app-surface) 66%)',
		boxShadow: 'float',
	}),
	iconRow: css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '3',
	}),
	adornment: css({
		marginLeft: 'auto',
		display: 'inline-flex',
		alignItems: 'center',
	}),
	ctaRoot: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		p: '5',
		rounded: 'md',
		borderWidth: '0',
		borderStyle: 'solid',
		borderColor: 'transparent',
		bg: 'app.canvas.subtle',
		minH: '200px',
		transitionProperty: 'border-color, background-color, box-shadow',
		transitionDuration: '160ms',
		transitionTimingFunction: 'ease',
		boxShadow: 'whisper',
	}),
	ctaBody: css({
		appearance: 'none',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '3',
		flex: '1',
		width: 'full',
		minH: 0,
		p: '0',
		borderWidth: '0',
		bg: 'transparent',
		textAlign: 'center',
		cursor: 'pointer',
		userSelect: 'none',
		transitionProperty: 'background-color, box-shadow, transform',
		transitionDuration: '160ms',
		transitionTimingFunction: 'ease',
		_hover: {
			bg: 'app.accent.soft',
			boxShadow: 'panel',
			transform: 'translateY(-2px)',
		},
		_focusVisible: {
			outline: '2px solid',
			outlineColor: 'app.accent',
			outlineOffset: '2px',
		},
	}),
	ctaBodyStatic: css({
		cursor: 'default',
		_hover: {
			bg: 'transparent',
			boxShadow: 'none',
			transform: 'none',
		},
	}),
	ctaIcon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '44px',
		rounded: 'lg',
		bg: 'app.accent.soft',
		color: 'app.accent',
	}),
	ctaTitle: css({
		fontSize: 'sm',
		fontWeight: '600',
		color: 'app.text',
	}),
	ctaSubtitle: css({
		fontSize: 'xs',
		color: 'app.text.muted',
		maxW: '18rem',
	}),
	iconFrame: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
		minWidth: 0,
	}),
	titleRow: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		flexWrap: 'wrap',
		minWidth: 0,
	}),
	title: css({
		fontSize: 'sm',
		fontWeight: '600',
		color: 'app.text',
		lineHeight: '1.3',
		minWidth: 0,
	}),
	description: css({
		fontSize: 'xs',
		color: 'app.text.muted',
		lineHeight: '1.4',
		minWidth: 0,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	}),
	statusRow: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2.5',
		flexWrap: 'wrap',
	}),
	statusPill: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '1.5',
		fontSize: '10px',
		fontWeight: '600',
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
	}),
	statusDot: css({
		boxSize: '2',
		rounded: 'full',
		flexShrink: 0,
	}),
	statusNeutral: css({ color: 'app.text.muted' }),
	statusAccent: css({ color: 'app.accent' }),
	statusSuccess: css({ color: 'fg.success' }),
	statusWarning: css({ color: 'fg.warning' }),
	statusDanger: css({ color: 'fg.error' }),
	statusDotNeutral: css({ bg: 'app.text.subtle' }),
	statusDotAccent: css({ bg: 'app.accent' }),
	statusDotSuccess: css({ bg: 'fg.success' }),
	statusDotWarning: css({ bg: 'fg.warning' }),
	statusDotDanger: css({ bg: 'fg.error' }),
	statusPulse: css({
		animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
	}),
	meta: css({
		fontSize: '11px',
		color: 'app.text.subtle',
		fontWeight: '400',
	}),
	facts: css({
		display: 'grid',
		gap: '0',
		rounded: 'lg',
		bg: 'app.canvas.subtle',
		overflow: 'hidden',
	}),
	fact: css({
		display: 'grid',
		gap: '0.5',
		px: '2.5',
		py: '2',
		minW: 0,
	}),
	factLabel: css({
		fontSize: '9px',
		fontWeight: '600',
		color: 'app.text.subtle',
		textTransform: 'uppercase',
		letterSpacing: '0.06em',
	}),
	factValue: css({
		fontSize: 'xs',
		fontWeight: '500',
		color: 'app.text',
		lineHeight: '1.3',
		minWidth: 0,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	}),
	progress: css({
		display: 'grid',
		gap: '2',
		rounded: 'xl',
		bg: 'app.canvas.subtle',
		p: '4',
	}),
	progressHeader: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '2',
	}),
	progressLabel: css({
		fontSize: '10px',
		fontWeight: '700',
		color: 'app.text.subtle',
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
	}),
	progressValue: css({
		fontSize: '10px',
		fontWeight: '700',
		color: 'app.text',
	}),
	progressTrack: css({
		h: '2',
		rounded: 'full',
		bg: 'app.surface.muted',
		overflow: 'hidden',
	}),
	progressBar: css({
		h: 'full',
		rounded: 'full',
		bg: 'app.accent',
		transition: 'width 180ms ease',
	}),
	footer: css({
		display: 'flex',
		alignItems: 'stretch',
		gap: '2',
		mt: 'auto',
		pt: '2.5',
		'& > *': {
			flex: '1',
			minH: '7',
			h: '7',
			py: '1',
			px: '2',
			fontSize: 'xs',
		},
	}),
};

function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, onClick?: () => void) {
	if (!onClick || isNestedInteractiveTarget(event.target, event.currentTarget)) return;
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onClick();
	}
}

function isNestedInteractiveTarget(target: EventTarget | null, currentTarget: HTMLDivElement) {
	if (!(target instanceof HTMLElement)) {
		return false;
	}

	const interactiveTarget = target.closest(
		'button, a, input, textarea, select, summary, [role="button"], [role="link"]',
	);

	return Boolean(interactiveTarget && interactiveTarget !== currentTarget);
}

function getStatusToneClass(tone: ModelCardStatus['tone']) {
	switch (tone) {
		case 'accent':
			return styles.statusAccent;
		case 'success':
			return styles.statusSuccess;
		case 'warning':
			return styles.statusWarning;
		case 'danger':
			return styles.statusDanger;
		default:
			return styles.statusNeutral;
	}
}

function getStatusDotClass(tone: ModelCardStatus['tone']) {
	switch (tone) {
		case 'accent':
			return styles.statusDotAccent;
		case 'success':
			return styles.statusDotSuccess;
		case 'warning':
			return styles.statusDotWarning;
		case 'danger':
			return styles.statusDotDanger;
		default:
			return styles.statusDotNeutral;
	}
}

function clampProgress(value: number) {
	return Math.max(0, Math.min(100, value));
}

export function ModelCard({
	icon,
	title,
	description,
	status,
	meta,
	facts = [],
	progress,
	footer,
	selected = false,
	onClick,
	className,
	titleAdornment,
}: ModelCardProps) {
	const factColumns = facts.length <= 1 ? 1 : 2;
	const normalizedProgress = progress ? clampProgress(progress.value) : null;
	const pulseDot = status.tone === 'accent';

	const cardContent = (
		<>
			<div className={styles.iconRow}>
				<div className={styles.iconFrame}>{icon}</div>
				{titleAdornment ? <div className={styles.adornment}>{titleAdornment}</div> : null}
			</div>

			<div className={styles.copy}>
				<div className={styles.titleRow}>
					<div className={styles.title}>{title}</div>
				</div>
				{description ? <div className={styles.description}>{description}</div> : null}
				<div className={styles.statusRow}>
					<span className={cx(styles.statusPill, getStatusToneClass(status.tone))}>
						<span
							className={cx(
								styles.statusDot,
								getStatusDotClass(status.tone),
								pulseDot && styles.statusPulse,
							)}
						/>
						{status.label}
					</span>
					{meta ? <span className={styles.meta}>{meta}</span> : null}
				</div>
			</div>

			{facts.length > 0 ? (
				<div
					className={styles.facts}
					style={{
						gridTemplateColumns: factColumns === 1 ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))',
					}}
				>
					{facts.map((fact, index) => (
						<div key={`${String(fact.label)}-${index}`} className={styles.fact}>
							<div className={styles.factLabel}>{fact.label}</div>
							<div className={styles.factValue}>{fact.value}</div>
						</div>
					))}
				</div>
			) : null}

			{normalizedProgress !== null ? (
				<div className={styles.progress}>
					<div className={styles.progressHeader}>
						<span className={styles.progressLabel}>Progress</span>
						<span className={styles.progressValue}>{normalizedProgress}%</span>
					</div>
					<div
						className={styles.progressTrack}
						role="progressbar"
						aria-valuemin={0}
						aria-valuemax={100}
						aria-valuenow={normalizedProgress}
						aria-label={
							progress?.ariaLabel ??
							(typeof progress?.label === 'string' ? progress.label : undefined)
						}
					>
						<div className={styles.progressBar} style={{ width: `${normalizedProgress}%` }} />
					</div>
					{progress?.label ? (
						<div className={css({ textStyle: 'caption', color: 'app.text.muted' })}>
							{progress.label}
						</div>
					) : null}
				</div>
			) : null}
		</>
	);

	if (onClick) {
		return (
			<div className={cx(styles.root, selected && styles.selected, className)}>
				<div
					className={cx(styles.body, styles.interactive)}
					onClick={onClick}
					onKeyDown={(event) => handleKeyDown(event, onClick)}
					role="button"
					tabIndex={0}
				>
					{cardContent}
				</div>
				{footer ? <div className={styles.footer}>{footer}</div> : null}
			</div>
		);
	}

	return (
		<div className={cx(styles.root, selected && styles.selected, className)}>
			<div className={styles.body}>{cardContent}</div>
			{footer ? <div className={styles.footer}>{footer}</div> : null}
		</div>
	);
}

export function ModelCtaCard({
	icon,
	title,
	subtitle,
	action,
	onClick,
	className,
}: ModelCtaCardProps) {
	const content = (
		<>
			<div className={styles.ctaIcon}>{icon}</div>
			<div className={styles.ctaTitle}>{title}</div>
			{subtitle ? <div className={styles.ctaSubtitle}>{subtitle}</div> : null}
		</>
	);

	return (
		<div className={cx(styles.ctaRoot, className)}>
			{onClick ? (
				<button type="button" className={styles.ctaBody} onClick={onClick}>
					{content}
				</button>
			) : (
				<div className={cx(styles.ctaBody, styles.ctaBodyStatic)}>{content}</div>
			)}
			{action}
		</div>
	);
}
