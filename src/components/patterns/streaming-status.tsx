'use client';

import type { MouseEvent, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface StreamingStep {
	key: string;
	label: string;
}

export interface StreamingStatusProps {
	/** Current operation status label */
	status: string;
	/** Progress percentage (0-100) */
	progress?: number;
	/** Optional step indicators */
	steps?: StreamingStep[];
	/** Key of the currently active step */
	currentStep?: string;
	/** Error message to display */
	error?: string;
	/** Status message below the progress bar */
	message?: string;
	/** Compact single-line mode */
	compact?: boolean;
	/** Renders an abort button when provided */
	onAbort?: (e: MouseEvent<HTMLButtonElement>) => void;
	/** Icon element displayed in the active state (e.g. spinner) */
	activeIcon?: ReactNode;
	/** Icon element displayed in the complete state */
	completeIcon?: ReactNode;
	/** Icon element displayed in the error state */
	errorIcon?: ReactNode;
	/** Whether the operation is complete */
	isComplete?: boolean;
	className?: string;
}

const styles = {
	root: css({
		bg: 'bg.default',
		borderWidth: '1px',
		borderColor: 'border.muted',
		rounded: 'l3',
		p: '4',
	}),
	compactRoot: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		textStyle: 'sm',
	}),
	header: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		mb: '3',
	}),
	headerLeft: css({
		display: 'flex',
		alignItems: 'center',
		gap: '3',
	}),
	statusLabel: css({
		textStyle: 'sm',
		fontWeight: 'medium',
		color: 'fg.default',
	}),
	statusLabelError: css({
		color: '{colors.red.11}',
	}),
	progressHint: css({
		textStyle: 'xs',
		color: 'fg.muted',
	}),
	trackWrap: css({
		mb: '3',
	}),
	track: css({
		h: '2',
		bg: 'border.muted',
		rounded: 'full',
		overflow: 'hidden',
	}),
	range: css({
		h: 'full',
		bg: 'colorPalette.9',
		transition: 'width 0.3s ease-out',
		rounded: 'full',
	}),
	errorBox: css({
		p: '3',
		bg: '{colors.red.2}',
		borderWidth: '1px',
		borderColor: '{colors.red.6}',
		rounded: 'l2',
		display: 'flex',
		alignItems: 'flex-start',
		gap: '2',
	}),
	errorText: css({
		textStyle: 'sm',
		color: '{colors.red.11}',
	}),
	successBox: css({
		p: '3',
		bg: '{colors.green.2}',
		borderWidth: '1px',
		borderColor: '{colors.green.6}',
		rounded: 'l2',
		display: 'flex',
		alignItems: 'center',
		gap: '2',
	}),
	successText: css({
		textStyle: 'sm',
		color: '{colors.green.11}',
	}),
	stepsGrid: css({
		mt: '4',
		display: 'grid',
		gap: '2',
	}),
	step: css({
		textAlign: 'center',
		p: '2',
		rounded: 'l2',
		borderWidth: '1px',
		transition: 'all 0.15s',
		textStyle: 'xs',
	}),
	stepActive: css({
		bg: 'colorPalette.2',
		borderColor: 'colorPalette.6',
		color: 'colorPalette.11',
	}),
	stepDone: css({
		bg: '{colors.green.2}',
		borderColor: '{colors.green.6}',
		color: '{colors.green.11}',
	}),
	stepPending: css({
		bg: 'gray.subtle.bg',
		borderColor: 'border.muted',
		color: 'fg.muted',
	}),
	abortButton: css({
		appearance: 'none',
		border: 'none',
		bg: 'transparent',
		cursor: 'pointer',
		p: '2',
		rounded: 'l2',
		color: 'fg.muted',
		transition: 'all 0.15s',
		_hover: {
			bg: 'gray.subtle.bg',
			color: 'fg.default',
		},
	}),
	iconWrap: css({
		flexShrink: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),
};

/**
 * Displays progress for async/streaming operations with step indicators,
 * error/success states, and an optional abort button.
 *
 * @example
 * ```tsx
 * <StreamingStatus
 *   status="Generating"
 *   progress={45}
 *   message="Generating output tokens..."
 *   steps={[
 *     { key: 'load', label: 'Loading' },
 *     { key: 'gen', label: 'Generating' },
 *   ]}
 *   currentStep="gen"
 *   onAbort={() => controller.abort()}
 * />
 * ```
 */
export function StreamingStatus({
	status,
	progress,
	steps,
	currentStep,
	error,
	message,
	compact = false,
	onAbort,
	activeIcon,
	completeIcon,
	errorIcon,
	isComplete = false,
	className,
}: StreamingStatusProps) {
	const isActive = !isComplete && !error;
	const hasProgress = typeof progress === 'number';

	if (compact) {
		return (
			<div className={cx(styles.compactRoot, className)}>
				{isActive && activeIcon && <span className={styles.iconWrap}>{activeIcon}</span>}
				{isComplete && completeIcon && <span className={styles.iconWrap}>{completeIcon}</span>}
				{error && errorIcon && <span className={styles.iconWrap}>{errorIcon}</span>}
				<span className={cx(styles.statusLabel, error ? styles.statusLabelError : undefined)}>
					{message || status}
				</span>
				{isActive && hasProgress && <span className={styles.progressHint}>({progress}%)</span>}
				{onAbort && isActive && (
					<button
						type="button"
						onClick={onAbort}
						className={styles.abortButton}
						title="Abort operation"
					>
						&times;
					</button>
				)}
			</div>
		);
	}

	const stepKeys = steps?.map((s) => s.key) ?? [];
	const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;

	return (
		<div className={cx(styles.root, className)}>
			{/* Header */}
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					{isActive && activeIcon && <span className={styles.iconWrap}>{activeIcon}</span>}
					{isComplete && completeIcon && <span className={styles.iconWrap}>{completeIcon}</span>}
					{error && errorIcon && <span className={styles.iconWrap}>{errorIcon}</span>}
					<div>
						<div className={cx(styles.statusLabel, error ? styles.statusLabelError : undefined)}>
							{message || status}
						</div>
						{isActive && hasProgress && (
							<div className={styles.progressHint}>{progress}% complete</div>
						)}
					</div>
				</div>
				{onAbort && isActive && (
					<button
						type="button"
						onClick={onAbort}
						className={styles.abortButton}
						title="Abort operation"
					>
						&times;
					</button>
				)}
			</div>

			{/* Progress Bar */}
			{isActive && hasProgress && (
				<div className={styles.trackWrap}>
					<div className={styles.track}>
						<div className={styles.range} style={{ width: `${progress}%` }} />
					</div>
				</div>
			)}

			{/* Error */}
			{error && (
				<div className={styles.errorBox}>
					{errorIcon && <span className={styles.iconWrap}>{errorIcon}</span>}
					<span className={styles.errorText}>{error}</span>
				</div>
			)}

			{/* Complete */}
			{isComplete && !error && (
				<div className={styles.successBox}>
					{completeIcon && <span className={styles.iconWrap}>{completeIcon}</span>}
					<span className={styles.successText}>Operation completed successfully</span>
				</div>
			)}

			{/* Step indicators */}
			{steps && steps.length > 0 && isActive && (
				<div
					className={styles.stepsGrid}
					style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
				>
					{steps.map((step, idx) => {
						const isCurrent = step.key === currentStep;
						const isDone = currentIdx >= 0 && idx < currentIdx;
						return (
							<div
								key={step.key}
								className={cx(
									styles.step,
									isCurrent ? styles.stepActive : isDone ? styles.stepDone : styles.stepPending,
								)}
							>
								{step.label}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
