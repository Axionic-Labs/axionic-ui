'use client';

import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface PickerFieldProps {
	title: ReactNode;
	description?: ReactNode;
	leading?: ReactNode;
	badge?: ReactNode;
	open: boolean;
	onToggle: () => void;
	disabled?: boolean;
	panelLabel?: ReactNode;
	panel?: ReactNode;
	minWidth?: string;
	size?: 'md' | 'sm';
	className?: string;
}

const styles = {
	root: css({
		position: 'relative',
	}),
	trigger: css({
		width: '100%',
		minHeight: '3.5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '3',
		paddingX: '4',
		paddingY: '3',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		cursor: 'pointer',
		textAlign: 'left',
		transitionProperty: 'background-color, border-color, color',
		transitionDuration: '160ms',
		transitionTimingFunction: 'ease',
		_hover: {
			borderColor: 'app.border.strong',
			bg: 'app.surface.raised',
		},
		_focusVisible: {
			outline: '2px solid',
			outlineColor: 'app.accent',
			outlineOffset: '2px',
		},
		_disabled: {
			opacity: '0.55',
			cursor: 'not-allowed',
		},
	}),
	triggerSm: css({
		minHeight: '3rem',
		paddingX: '3.5',
		paddingY: '2.5',
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
		color: 'app.accent',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
		minWidth: 0,
	}),
	titleRow: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		minWidth: 0,
	}),
	title: css({
		textStyle: 'small',
		fontWeight: '600',
		color: 'app.text',
		minWidth: 0,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	}),
	titleSm: css({
		fontWeight: '700',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		minWidth: 0,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	}),
	chevron: css({
		color: 'app.text.subtle',
		flexShrink: 0,
		transition: 'transform 160ms ease',
	}),
	chevronOpen: css({
		transform: 'rotate(180deg)',
	}),
	panel: css({
		position: 'absolute',
		top: 'calc(100% + 0.5rem)',
		left: '0',
		right: '0',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.float}',
		overflow: 'hidden',
		zIndex: '50',
	}),
	panelLabel: css({
		paddingX: '4',
		paddingY: '2.5',
		borderBottomWidth: '1px',
		borderColor: 'app.border',
		textStyle: 'caption',
		color: 'app.text.subtle',
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
	}),
	panelBody: css({
		maxHeight: '18rem',
		overflowY: 'auto',
	}),
};

export function PickerField({
	title,
	description,
	leading,
	badge,
	open,
	onToggle,
	disabled = false,
	panelLabel,
	panel,
	minWidth,
	size = 'md',
	className,
}: PickerFieldProps) {
	const compact = size === 'sm';

	return (
		<div className={cx(styles.root, className)} style={minWidth ? { minWidth } : undefined}>
			<button
				type="button"
				onClick={onToggle}
				disabled={disabled}
				className={cx(styles.trigger, compact && styles.triggerSm)}
				aria-expanded={open}
			>
				<div className={styles.lead}>
					{leading && <div className={styles.leading}>{leading}</div>}
					<div className={styles.copy}>
						<div className={styles.titleRow}>
							<div className={cx(styles.title, compact && styles.titleSm)}>{title}</div>
							{badge}
						</div>
						{description && <div className={styles.description}>{description}</div>}
					</div>
				</div>
				<ChevronDown size={16} className={cx(styles.chevron, open && styles.chevronOpen)} />
			</button>
			{open && panel && (
				<div className={styles.panel}>
					{panelLabel && <div className={styles.panelLabel}>{panelLabel}</div>}
					<div className={styles.panelBody}>{panel}</div>
				</div>
			)}
		</div>
	);
}
