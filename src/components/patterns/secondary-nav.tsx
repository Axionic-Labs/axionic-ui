'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SecondaryNavItem {
	id?: string;
	label: string;
	icon?: ReactNode;
	badge?: ReactNode;
	href?: string;
	active?: boolean;
	onClick?: () => void;
}

export interface SecondaryNavProps {
	items: SecondaryNavItem[];
	trailing?: ReactNode;
	variant?: 'pill' | 'toolbar';
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '3',
		width: '100%',
	}),
	list: css({
		listStyle: 'none',
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		padding: '0',
		margin: '0',
		overflowX: 'auto',
	}),
	item: css({
		appearance: 'none',
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
		minHeight: '10',
		paddingX: '3.5',
		borderRadius: 'full',
		borderWidth: '1px',
		borderColor: 'transparent',
		color: 'app.text.muted',
		bg: 'transparent',
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		transitionProperty: 'background-color, border-color, color',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_hover: {
			bg: 'app.surface',
			borderColor: 'app.border',
			color: 'app.text',
		},
	}),
	itemActive: css({
		bg: 'app.surface',
		borderColor: 'app.border',
		color: 'app.text',
		boxShadow: '{shadows.panel}',
	}),
	label: css({
		textStyle: 'toolbarLabel',
	}),
	badge: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '6',
		height: '6',
		paddingX: '2',
		borderRadius: 'full',
		bg: 'app.surface.muted',
		textStyle: 'caption',
		color: 'app.text',
	}),
	trailing: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
	}),
	toolbarList: css({
		gap: '5',
	}),
	toolbarItem: css({
		minHeight: 'auto',
		paddingX: '0',
		paddingY: '2',
		borderRadius: '0',
		borderWidth: '0',
		color: 'app.text.subtle',
		_hover: {
			bg: 'transparent',
			color: 'app.text',
		},
	}),
	toolbarItemActive: css({
		bg: 'transparent',
		borderColor: 'transparent',
		color: 'app.text',
		boxShadow: 'inset 0 -2px 0 0 rgba(45, 100, 97, 0.9)',
	}),
};

function SecondaryNavEntry({
	item,
	variant,
}: {
	item: SecondaryNavItem;
	variant: NonNullable<SecondaryNavProps['variant']>;
}) {
	const content = (
		<>
			{item.icon}
			<span className={styles.label}>{item.label}</span>
			{item.badge && <span className={styles.badge}>{item.badge}</span>}
		</>
	);

	const className = cx(
		styles.item,
		variant === 'toolbar' && styles.toolbarItem,
		item.active && styles.itemActive,
		item.active && variant === 'toolbar' && styles.toolbarItemActive,
	);

	if (item.href) {
		return (
			<a className={className} href={item.href} aria-current={item.active ? 'page' : undefined}>
				{content}
			</a>
		);
	}

	return (
		<button type="button" className={className} onClick={item.onClick}>
			{content}
		</button>
	);
}

export function SecondaryNav({ items, trailing, variant = 'pill', className }: SecondaryNavProps) {
	return (
		<div className={cx(styles.root, className)}>
			<ul className={cx(styles.list, variant === 'toolbar' && styles.toolbarList)}>
				{items.map((item) => (
					<li key={item.id ?? item.href ?? item.label}>
						<SecondaryNavEntry item={item} variant={variant} />
					</li>
				))}
			</ul>
			{trailing && <div className={styles.trailing}>{trailing}</div>}
		</div>
	);
}
