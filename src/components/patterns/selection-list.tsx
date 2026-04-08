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
	className?: string;
}

const styles = {
	root: css({
		display: 'grid',
		gap: '2',
	}),
	item: css({
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '3',
		padding: '4',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		textAlign: 'left',
		cursor: 'pointer',
		transition: 'all 160ms ease',
		_hover: {
			borderColor: 'app.border.strong',
			bg: 'app.surface',
		},
		_disabled: {
			opacity: '0.55',
			cursor: 'not-allowed',
		},
	}),
	itemSelected: css({
		bg: 'app.accent.soft',
		borderColor: 'app.border.strong',
		boxShadow: 'inset 3px 0 0 0 var(--colors-app-accent)',
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
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		color: 'app.accent',
		flexShrink: 0,
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

export function SelectionList({ items, value, onValueChange, className }: SelectionListProps) {
	return (
		<div className={cx(styles.root, className)}>
			{items.map((item) => {
				const selected = item.value === value;
				return (
					<button
						key={item.value}
						type="button"
						disabled={item.disabled}
						onClick={() => onValueChange(item.value)}
						className={cx(styles.item, selected && styles.itemSelected)}
					>
						<div className={styles.body}>
							{item.icon && <span className={styles.icon}>{item.icon}</span>}
							<div className={styles.copy}>
								<div className={styles.label}>{item.label}</div>
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
