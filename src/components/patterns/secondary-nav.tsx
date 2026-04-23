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
	dataTourId?: string;
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
		flexWrap: 'wrap',
		gap: '2',
		padding: '0',
		margin: '0',
	}),
	item: css({
		appearance: 'none',
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
		minHeight: '8',
		paddingX: '5',
		paddingY: '2',
		borderRadius: 'xl',
		borderWidth: '0',
		color: 'app.text.muted',
		bg: 'app.canvas.subtle',
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		transitionProperty: 'background-color, border-color, color',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_hover: {
			bg: 'app.surface.muted',
			color: 'app.text',
		},
	}),
	itemActive: css({
		bg: 'app.nav.active',
		color: 'app.text',
		_hover: {
			bg: 'app.nav.active',
			color: 'app.text',
		},
	}),
	label: css({
		textStyle: 'caption',
		fontWeight: '700',
		letterSpacing: '0.01em',
	}),
	badge: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '6',
		height: '6',
		paddingX: '2',
		borderRadius: 'full',
		bg: 'rgba(255, 255, 255, 0.18)',
		textStyle: 'caption',
		color: 'currentColor',
		_dark: {
			bg: 'rgba(227, 253, 255, 0.12)',
		},
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
		bg: 'transparent',
		color: 'app.text.subtle',
		_hover: {
			bg: 'transparent',
			color: 'app.text',
		},
	}),
	toolbarItemActive: css({
		bg: 'app.surface.muted',
		borderRadius: 'xl',
		paddingX: '3',
		color: 'app.text',
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
		item.active && variant !== 'toolbar' && styles.itemActive,
		item.active && variant === 'toolbar' && styles.toolbarItemActive,
	);

	if (item.href) {
		return (
			<a
				className={className}
				href={item.href}
				aria-current={item.active ? 'page' : undefined}
				data-tour-id={item.dataTourId}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			type="button"
			className={className}
			onClick={item.onClick}
			data-tour-id={item.dataTourId}
		>
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
