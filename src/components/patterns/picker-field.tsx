'use client';

import { ChevronDown } from 'lucide-react';
import { type ReactNode, useEffect, useRef } from 'react';
import { css, cx } from 'styled-system/css';

export interface PickerFieldProps {
	title: ReactNode;
	description?: ReactNode;
	leading?: ReactNode;
	badge?: ReactNode;
	open: boolean;
	onToggle: () => void;
	onClose?: () => void;
	disabled?: boolean;
	panelLabel?: ReactNode;
	panel?: ReactNode;
	minWidth?: string;
	size?: 'md' | 'sm';
	chrome?: 'default' | 'soft';
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
		borderWidth: '0',
		borderColor: 'transparent',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
		cursor: 'pointer',
		textAlign: 'left',
		transitionProperty: 'background-color, border-color, color, box-shadow',
		transitionDuration: '160ms',
		transitionTimingFunction: 'ease',
		_hover: {
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
	triggerSoft: css({
		borderWidth: '0',
		bg: 'app.surface.muted',
		boxShadow: 'none',
		_hover: {
			bg: 'app.surface',
		},
	}),
	triggerOpen: css({
		bg: 'app.surface.raised',
		borderBottomLeftRadius: '0',
		borderBottomRightRadius: '0',
	}),
	triggerOpenSoft: css({
		bg: 'app.surface',
		borderBottomLeftRadius: '0',
		borderBottomRightRadius: '0',
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
		top: '100%',
		left: '0',
		right: '0',
		borderRadius: 'l3',
		borderWidth: '0',
		borderColor: 'transparent',
		bg: 'app.surface',
		boxShadow: '{shadows.float}',
		overflow: 'hidden',
		zIndex: '50',
	}),
	panelSoft: css({
		borderWidth: '0',
		bg: 'app.surface.muted',
		boxShadow: '{shadows.panel}',
	}),
	panelConnected: css({
		borderTopLeftRadius: '0',
		borderTopRightRadius: '0',
		borderWidth: '0',
	}),
	panelLabel: css({
		paddingX: '4',
		paddingY: '2.5',
		textStyle: 'caption',
		color: 'app.text.subtle',
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
		bg: 'app.canvas.subtle',
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
	onClose,
	disabled = false,
	panelLabel,
	panel,
	minWidth,
	size = 'md',
	chrome = 'default',
	className,
}: PickerFieldProps) {
	const compact = size === 'sm';
	const softChrome = chrome === 'soft';
	const rootRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!open) {
			return;
		}

		const close = onClose ?? onToggle;
		const handleOutsideInteraction = (event: PointerEvent | FocusEvent) => {
			const root = rootRef.current;
			const target = event.target;
			if (!root || !(target instanceof Node) || root.contains(target)) {
				return;
			}
			close();
		};

		document.addEventListener('pointerdown', handleOutsideInteraction, true);
		document.addEventListener('focusin', handleOutsideInteraction, true);

		return () => {
			document.removeEventListener('pointerdown', handleOutsideInteraction, true);
			document.removeEventListener('focusin', handleOutsideInteraction, true);
		};
	}, [onClose, onToggle, open]);

	return (
		<div
			ref={rootRef}
			className={cx(styles.root, className)}
			style={minWidth ? { minWidth } : undefined}
		>
			<button
				type="button"
				onClick={onToggle}
				disabled={disabled}
				className={cx(
					styles.trigger,
					compact && styles.triggerSm,
					softChrome && styles.triggerSoft,
					open && styles.triggerOpen,
					open && softChrome && styles.triggerOpenSoft,
				)}
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
				<div className={cx(styles.panel, softChrome && styles.panelSoft, styles.panelConnected)}>
					{panelLabel && <div className={styles.panelLabel}>{panelLabel}</div>}
					<div className={styles.panelBody}>{panel}</div>
				</div>
			)}
		</div>
	);
}
