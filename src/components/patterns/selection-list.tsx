'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SelectionListItem {
	value: string;
	label: ReactNode;
	description?: ReactNode;
	icon?: ReactNode;
	endSlot?: ReactNode;
	disabled?: boolean;
}

export interface SelectionListProps {
	items: SelectionListItem[];
	value: string | null;
	onValueChange: (value: string) => void;
	density?: 'default' | 'compact';
	chrome?: 'default' | 'soft';
	layout?: 'cards' | 'stacked';
	className?: string;
}

const styles = {
	root: css({
		display: 'grid',
		gap: '2',
	}),
	rootStacked: css({
		gap: '1',
	}),
	item: css({
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '3',
		padding: '4',
		borderRadius: 'l3',
		bg: 'app.surface.muted',
		textAlign: 'left',
		cursor: 'pointer',
		transition: 'all 160ms ease',
		_hover: {
			bg: 'app.surface',
		},
		_disabled: {
			opacity: '0.55',
			cursor: 'not-allowed',
		},
	}),
	itemCompact: css({
		paddingX: '3.5',
		paddingY: '3',
		gap: '2.5',
	}),
	itemSoft: css({
		boxShadow: 'none',
	}),
	itemStacked: css({
		borderRadius: 'xl',
		boxShadow: 'none',
		bg: 'transparent',
		paddingX: '4',
		paddingY: '3.5',
		_hover: {
			bg: 'app.canvas.subtle',
		},
	}),
	itemSelected: css({
		bg: 'color-mix(in srgb, var(--colors-app-accent-alt-soft) 78%, var(--colors-app-surface) 22%)',
		boxShadow: '{shadows.whisper}',
		_hover: {
			bg: 'color-mix(in srgb, var(--colors-app-accent-alt-soft) 78%, var(--colors-app-surface) 22%)',
			boxShadow: '{shadows.whisper}',
		},
		_dark: {
			bg: 'color-mix(in srgb, var(--colors-app-accent-alt-border) 20%, var(--colors-app-surface) 80%)',
			boxShadow: '{shadows.whisper}',
			_hover: {
				bg: 'color-mix(in srgb, var(--colors-app-accent-alt-border) 20%, var(--colors-app-surface) 80%)',
				boxShadow: '{shadows.whisper}',
			},
		},
	}),
	itemSelectedSoft: css({
		boxShadow: 'none',
	}),
	itemSelectedStacked: css({
		bg: 'color-mix(in srgb, var(--colors-app-accent-alt-soft) 82%, var(--colors-app-surface) 18%)',
		boxShadow: 'none',
		_hover: {
			bg: 'color-mix(in srgb, var(--colors-app-accent-alt-soft) 82%, var(--colors-app-surface) 18%)',
			boxShadow: 'none',
		},
		_dark: {
			bg: 'color-mix(in srgb, var(--colors-app-accent-alt-border) 24%, var(--colors-app-surface-muted) 76%)',
			boxShadow: 'none',
			_hover: {
				bg: 'color-mix(in srgb, var(--colors-app-accent-alt-border) 24%, var(--colors-app-surface-muted) 76%)',
				boxShadow: 'none',
			},
		},
	}),
	body: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '3',
		minWidth: 0,
		flex: '1 1 auto',
	}),
	icon: css({
		boxSize: '8',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 'xl',
		bg: 'app.surface',
		color: 'app.accent',
		flexShrink: 0,
	}),
	iconCompact: css({
		boxSize: '7',
		rounded: 'lg',
	}),
	iconSoft: css({
		borderWidth: '0',
		bg: 'app.surface.muted',
	}),
	iconStacked: css({
		borderWidth: '0',
		bg: 'transparent',
	}),
	iconStackedSoft: css({
		borderWidth: '0',
		bg: 'transparent',
		color: 'app.text.subtle',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1',
		minWidth: 0,
	}),
	label: css({
		textStyle: 'small',
		fontWeight: '600',
		color: 'app.text',
	}),
	labelCompact: css({
		fontWeight: '700',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	endSlot: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
		color: 'app.text.subtle',
		flexShrink: 0,
	}),
};

export function SelectionList({
	items,
	value,
	onValueChange,
	density = 'default',
	chrome = 'soft',
	layout = 'cards',
	className,
}: SelectionListProps) {
	const compact = density === 'compact';
	const softChrome = chrome === 'soft';
	const stackedLayout = layout === 'stacked';

	return (
		<div className={cx(styles.root, stackedLayout && styles.rootStacked, className)}>
			{items.map((item) => {
				const selected = item.value === value;
				return (
					<button
						key={item.value}
						type="button"
						disabled={item.disabled}
						onClick={() => onValueChange(item.value)}
						className={cx(
							styles.item,
							compact && styles.itemCompact,
							softChrome && styles.itemSoft,
							stackedLayout && styles.itemStacked,
							selected && styles.itemSelected,
							selected && softChrome && styles.itemSelectedSoft,
							selected && stackedLayout && styles.itemSelectedStacked,
						)}
					>
						<div className={styles.body}>
							{item.icon && (
								<span
									className={cx(
										styles.icon,
										compact && styles.iconCompact,
										softChrome && styles.iconSoft,
										stackedLayout && styles.iconStacked,
										stackedLayout && softChrome && styles.iconStackedSoft,
									)}
								>
									{item.icon}
								</span>
							)}
							<div className={styles.copy}>
								<div className={cx(styles.label, compact && styles.labelCompact)}>{item.label}</div>
								{item.description && <div className={styles.description}>{item.description}</div>}
							</div>
						</div>
						{item.endSlot && <div className={styles.endSlot}>{item.endSlot}</div>}
					</button>
				);
			})}
		</div>
	);
}
