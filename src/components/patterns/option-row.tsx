'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface OptionRowProps {
	title: ReactNode;
	description?: ReactNode;
	leading?: ReactNode;
	trailing?: ReactNode;
	selected?: boolean;
	onClick?: () => void;
	disabled?: boolean;
	chrome?: 'default' | 'soft';
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '4',
		paddingX: '4',
		paddingY: '3.5',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		minWidth: 0,
		transitionProperty: 'background-color, border-color, box-shadow, color',
		transitionDuration: '160ms',
		transitionTimingFunction: 'ease',
	}),
	rootSoft: css({
		borderWidth: '0',
		boxShadow: 'none',
		bg: 'app.surface.muted',
	}),
	interactive: css({
		cursor: 'pointer',
		userSelect: 'none',
		_hover: {
			borderColor: 'app.border.strong',
			bg: 'app.surface',
		},
		_focusVisible: {
			outline: '2px solid',
			outlineColor: 'app.accent',
			outlineOffset: '2px',
		},
	}),
	selected: css({
		borderColor: 'app.border.strong',
		bg: 'app.accent.soft',
	}),
	selectedSoft: css({
		bg: 'app.accent.soft',
	}),
	disabled: css({
		opacity: '0.55',
		cursor: 'not-allowed',
	}),
	lead: css({
		display: 'flex',
		alignItems: 'center',
		gap: '3',
		minWidth: 0,
		flex: '1 1 auto',
	}),
	leading: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
		minWidth: 0,
	}),
	title: css({
		textStyle: 'small',
		fontWeight: '600',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	trailing: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
		flexShrink: 0,
	}),
};

export function OptionRow({
	title,
	description,
	leading,
	trailing,
	selected = false,
	onClick,
	disabled = false,
	chrome = 'default',
	className,
}: OptionRowProps) {
	const interactive = Boolean(onClick) && !disabled;
	const content = (
		<>
			<div className={styles.lead}>
				{leading && <div className={styles.leading}>{leading}</div>}
				<div className={styles.copy}>
					<div className={styles.title}>{title}</div>
					{description && <div className={styles.description}>{description}</div>}
				</div>
			</div>
			{trailing && <div className={styles.trailing}>{trailing}</div>}
		</>
	);

	if (interactive) {
		return (
			<button
				type="button"
				className={cx(
					styles.root,
					chrome === 'soft' && styles.rootSoft,
					styles.interactive,
					selected && (chrome === 'soft' ? styles.selectedSoft : styles.selected),
					className,
				)}
				onClick={onClick}
			>
				{content}
			</button>
		);
	}

	return (
		<div
			className={cx(
				styles.root,
				chrome === 'soft' && styles.rootSoft,
				selected && (chrome === 'soft' ? styles.selectedSoft : styles.selected),
				disabled && styles.disabled,
				className,
			)}
			aria-disabled={disabled || undefined}
		>
			{content}
		</div>
	);
}
