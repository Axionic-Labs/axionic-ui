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
	showDescriptions?: boolean;
	showSectionTitles?: boolean;
	variant?: 'default' | 'shell';
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
		gap: '4',
	}),
	brand: css({
		display: 'flex',
		alignItems: 'center',
		gap: '3',
	}),
	sections: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5.5',
		flex: '1',
	}),
	sectionsShell: css({
		gap: '4',
	}),
	section: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '2',
	}),
	sectionTitle: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
		paddingX: '3.5',
	}),
	list: css({
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		gap: '3.5',
		padding: '0',
		margin: '0',
	}),
	listShell: css({
		gap: '2',
	}),
	item: css({
		appearance: 'none',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr) auto',
		alignItems: 'center',
		gap: '4',
		paddingX: '5',
		paddingY: '4',
		borderRadius: '2xl',
		color: 'app.text.muted',
		bg: 'transparent',
		textAlign: 'left',
		textDecoration: 'none',
		transitionProperty: 'background-color, color, box-shadow',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_hover: {
			bg: 'color-mix(in srgb, var(--colors-app-surface) 68%, transparent)',
			color: 'app.text',
			'& [data-sidebar-icon]': {
				color: 'app.accent',
			},
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
	itemShell: css({
		paddingX: '3.5',
		paddingY: '2.5',
		borderRadius: 'lg',
	}),
	itemActive: css({
		bg: 'color-mix(in srgb, var(--colors-app-accent-soft) 58%, var(--colors-app-surface) 42%)',
		color: 'app.text',
	}),
	itemIcon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '5.5',
		color: 'app.text.subtle',
		transition: 'color 180ms ease',
	}),
	itemText: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
	}),
	itemLabel: css({
		textStyle: 'sidebarLabel',
		color: 'currentColor',
	}),
	itemLabelShell: css({
		color: 'inherit',
	}),
	itemDescription: css({
		textStyle: 'small',
		color: 'app.text.subtle',
		lineHeight: '1.45',
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
		minWidth: '6.5',
		height: '6.5',
		paddingX: '2',
		borderRadius: 'full',
		bg: 'app.surface',
		color: 'app.text',
		textStyle: 'caption',
	}),
	footer: css({
		paddingTop: '5',
	}),
};

function SidebarNavEntry({
	item,
	renderItem,
	showDescriptions,
	variant,
}: {
	item: SidebarNavItem;
	renderItem?: SidebarNavProps['renderItem'];
	showDescriptions: boolean;
	variant: NonNullable<SidebarNavProps['variant']>;
}) {
	const content = (
		<>
			{item.icon && (
				<span className={styles.itemIcon} data-sidebar-icon="">
					{item.icon}
				</span>
			)}
			<span className={styles.itemText}>
				<span className={cx(styles.itemLabel, variant === 'shell' && styles.itemLabelShell)}>
					{item.label}
				</span>
				{showDescriptions && item.description && (
					<span className={styles.itemDescription}>{item.description}</span>
				)}
			</span>
			<span className={styles.itemEnd}>
				{item.badge && <span className={styles.badge}>{item.badge}</span>}
				{item.endSlot}
			</span>
		</>
	);

	const className = cx(
		styles.item,
		variant === 'shell' && styles.itemShell,
		item.active && styles.itemActive,
	);
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

export function SidebarNav({
	brand,
	sections,
	footer,
	showDescriptions = true,
	showSectionTitles = true,
	variant = 'default',
	renderItem,
	className,
}: SidebarNavProps) {
	return (
		<nav className={cx(styles.root, className)} aria-label="Sidebar Navigation">
			{brand && <div className={styles.brand}>{brand}</div>}
			<div className={cx(styles.sections, variant === 'shell' && styles.sectionsShell)}>
				{sections.map((section, index) => (
					<section key={section.title ?? index} className={styles.section}>
						{showSectionTitles && section.title && (
							<p className={styles.sectionTitle}>{section.title}</p>
						)}
						<ul className={cx(styles.list, variant === 'shell' && styles.listShell)}>
							{section.items.map((item, itemIndex) => (
								<li key={item.id ?? item.href ?? `${item.label}-${itemIndex}`}>
									<SidebarNavEntry
										item={item}
										renderItem={renderItem}
										showDescriptions={showDescriptions}
										variant={variant}
									/>
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
