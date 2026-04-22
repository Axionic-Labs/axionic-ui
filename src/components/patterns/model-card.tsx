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
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		minH: '18rem',
		p: '8',
		rounded: '3xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: 'whisper',
		transitionProperty: 'border-color, background-color, box-shadow, transform',
		transitionDuration: '160ms',
		transitionTimingFunction: 'ease',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
		minH: 0,
		flex: '1',
	}),
	interactive: css({
		cursor: 'pointer',
		userSelect: 'none',
		outline: 'none',
		_hover: {
			borderColor: 'app.border.strong',
			boxShadow: 'panel',
			transform: 'translateY(-1px)',
		},
		_focusVisible: {
			outline: '2px solid',
			outlineColor: 'app.accent',
			outlineOffset: '2px',
		},
	}),
	selected: css({
		borderColor: 'app.accentAlt.border',
		boxShadow: '0 0 0 1px var(--colors-app-accent-alt-border)',
	}),
	header: css({
		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr)',
		gap: '4',
		alignItems: 'start',
	}),
	iconFrame: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '3.5rem',
		rounded: '2xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.canvas.subtle',
		color: 'app.accent',
		flexShrink: 0,
	}),
	copy: css({
		display: 'grid',
		gap: '1.5',
		minWidth: 0,
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
		minWidth: 0,
		lineHeight: '1.2',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		lineHeight: '1.6',
		minH: '3rem',
	}),
	metaRow: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		flexWrap: 'wrap',
	}),
	status: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '1.5',
		rounded: 'full',
		px: '2.5',
		py: '1',
		textStyle: 'caption',
		fontWeight: '700',
		borderWidth: '1px',
	}),
	statusNeutral: css({
		borderColor: 'app.border',
		bg: 'app.canvas.subtle',
		color: 'app.text',
	}),
	statusAccent: css({
		borderColor: 'app.accentAlt.border',
		bg: 'app.accentAlt.soft',
		color: 'app.accentAlt.text',
	}),
	statusSuccess: css({
		borderColor: 'transparent',
		bg: 'bg.success',
		color: 'fg.success',
	}),
	statusWarning: css({
		borderColor: 'transparent',
		bg: 'bg.warning',
		color: 'fg.warning',
	}),
	statusDanger: css({
		borderColor: 'transparent',
		bg: 'bg.error',
		color: 'fg.error',
	}),
	meta: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	facts: css({
		display: 'grid',
		gap: '0',
		rounded: '2xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.canvas.subtle',
		overflow: 'hidden',
	}),
	fact: css({
		display: 'grid',
		gap: '0.75',
		p: '4',
		minW: 0,
	}),
	factTopBorder: css({
		borderTopWidth: '1px',
		borderTopColor: 'app.border',
	}),
	factLeftBorder: css({
		borderLeftWidth: '1px',
		borderLeftColor: 'app.border',
	}),
	factLabel: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
	}),
	factValue: css({
		textStyle: 'small',
		color: 'app.text',
		fontWeight: '600',
		lineHeight: '1.45',
		minWidth: 0,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	}),
	progress: css({
		display: 'grid',
		gap: '1.5',
	}),
	progressLabel: css({
		textStyle: 'caption',
		color: 'app.text.muted',
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
		alignItems: 'center',
		gap: '2',
		flexWrap: 'wrap',
		pt: '4',
		borderTopWidth: '1px',
		borderTopColor: 'app.border',
	}),
};

function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, onClick?: () => void) {
	if (!onClick) return;
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onClick();
	}
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
}: ModelCardProps) {
	const factColumns = facts.length <= 1 ? 1 : 2;
	const normalizedProgress = progress ? clampProgress(progress.value) : null;
	const cardContent = (
		<>
			<div className={styles.header}>
				<div className={styles.iconFrame}>{icon}</div>
				<div className={styles.copy}>
					<div className={styles.title}>{title}</div>
					{description ? <div className={styles.description}>{description}</div> : null}
					<div className={styles.metaRow}>
						<span className={cx(styles.status, getStatusToneClass(status.tone))}>
							{status.label}
						</span>
						{meta ? <span className={styles.meta}>{meta}</span> : null}
					</div>
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
						<div
							key={`${String(fact.label)}-${index}`}
							className={cx(
								styles.fact,
								index >= factColumns && styles.factTopBorder,
								factColumns > 1 && index % factColumns !== 0 && styles.factLeftBorder,
							)}
						>
							<div className={styles.factLabel}>{fact.label}</div>
							<div className={styles.factValue}>{fact.value}</div>
						</div>
					))}
				</div>
			) : null}

			{normalizedProgress !== null ? (
				<div className={styles.progress}>
					{progress?.label ? <div className={styles.progressLabel}>{progress.label}</div> : null}
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
