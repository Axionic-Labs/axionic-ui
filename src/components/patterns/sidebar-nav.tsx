'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SidebarNavItem {
	id?: string;
	label: string;
	description?: string;
	icon?: ReactNode;
	href?: string;
	active?: boolean;
	badge?: ReactNode;
	endSlot?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}

export interface SidebarNavSection {
	title?: string;
	items: SidebarNavItem[];
}

export interface SidebarNavProps {
	brand?: ReactNode;
	sections: SidebarNavSection[];
	footer?: ReactNode;
	renderItem?: (options: {
		item: SidebarNavItem;
		className: string;
		content: ReactNode;
		ariaCurrent?: 'page';
	}) => ReactNode;
	className?: string;
}

const styles = {
	root: css({
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: '6',
	}),
	brand: css({
		display: 'flex',
		alignItems: 'center',
		gap: '3',
	}),
	sections: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
		flex: '1',
	}),
	section: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '2',
	}),
	sectionTitle: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
		paddingX: '3',
	}),
	list: css({
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
		padding: '0',
		margin: '0',
	}),
	item: css({
		appearance: 'none',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr) auto',
		alignItems: 'center',
		gap: '3',
		paddingX: '3',
		paddingY: '3',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'transparent',
		color: 'app.text.muted',
		bg: 'transparent',
		textAlign: 'left',
		textDecoration: 'none',
		transitionProperty: 'background-color, border-color, color, box-shadow, transform',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_hover: {
			bg: 'app.surface',
			borderColor: 'app.border',
			color: 'app.text',
		},
		_focusVisible: {
			outline: '2px solid',
			outlineColor: 'colorPalette.8',
			outlineOffset: '2px',
		},
		_disabled: {
			opacity: '0.5',
			cursor: 'not-allowed',
		},
	}),
	itemActive: css({
		bg: 'app.nav.active',
		borderColor: 'app.border',
		color: 'app.text',
		boxShadow: '{shadows.panel}',
	}),
	itemIcon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '9',
		borderRadius: 'l2',
		bg: 'app.surface',
		color: 'app.accent',
	}),
	itemText: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
	}),
	itemLabel: css({
		textStyle: 'toolbarLabel',
		color: 'currentColor',
	}),
	itemDescription: css({
		textStyle: 'small',
		color: 'app.text.subtle',
	}),
	itemEnd: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
	}),
	badge: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '6',
		height: '6',
		paddingX: '2',
		borderRadius: 'full',
		bg: 'app.surface',
		borderWidth: '1px',
		borderColor: 'app.border',
		color: 'app.text',
		textStyle: 'caption',
	}),
	footer: css({
		paddingTop: '4',
		borderTopWidth: '1px',
		borderColor: 'app.border',
	}),
};

function SidebarNavEntry({
	item,
	renderItem,
}: {
	item: SidebarNavItem;
	renderItem?: SidebarNavProps['renderItem'];
}) {
	const content = (
		<>
			{item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
			<span className={styles.itemText}>
				<span className={styles.itemLabel}>{item.label}</span>
				{item.description && <span className={styles.itemDescription}>{item.description}</span>}
			</span>
			<span className={styles.itemEnd}>
				{item.badge && <span className={styles.badge}>{item.badge}</span>}
				{item.endSlot}
			</span>
		</>
	);

	const className = cx(styles.item, item.active && styles.itemActive);
	const ariaCurrent = item.active ? 'page' : undefined;

	if (renderItem) {
		return renderItem({ item, className, content, ariaCurrent });
	}

	if (item.href) {
		return (
			<a
				className={className}
				href={item.href}
				aria-current={ariaCurrent}
				aria-disabled={item.disabled || undefined}
				onClick={(event) => {
					if (item.disabled) {
						event.preventDefault();
						return;
					}
					item.onClick?.();
				}}
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
			disabled={item.disabled}
			aria-current={ariaCurrent}
		>
			{content}
		</button>
	);
}

export function SidebarNav({ brand, sections, footer, renderItem, className }: SidebarNavProps) {
	return (
		<nav className={cx(styles.root, className)} aria-label="Sidebar Navigation">
			{brand && <div className={styles.brand}>{brand}</div>}
			<div className={styles.sections}>
				{sections.map((section, index) => (
					<section key={section.title ?? index} className={styles.section}>
						{section.title && <p className={styles.sectionTitle}>{section.title}</p>}
						<ul className={styles.list}>
							{section.items.map((item, itemIndex) => (
								<li key={item.id ?? item.href ?? `${item.label}-${itemIndex}`}>
									<SidebarNavEntry item={item} renderItem={renderItem} />
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
			{footer && <div className={styles.footer}>{footer}</div>}
		</nav>
	);
}
