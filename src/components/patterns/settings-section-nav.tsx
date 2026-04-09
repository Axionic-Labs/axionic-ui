'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SettingsSectionNavItem {
	id?: string;
	label: string;
	icon?: ReactNode;
	description?: ReactNode;
	active?: boolean;
	onClick?: () => void;
}

export interface SettingsSectionNavProps {
	title?: ReactNode;
	items: SettingsSectionNavItem[];
	footer?: ReactNode;
	layout?: 'sidebar' | 'tabs';
	showIcons?: boolean;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		padding: { base: '4', md: '5' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
		paddingX: '1',
	}),
	list: css({
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
		padding: 0,
		margin: 0,
	}),
	item: css({
		appearance: 'none',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr)',
		alignItems: 'center',
		gap: '3',
		paddingX: '3',
		paddingY: '3',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'transparent',
		bg: 'transparent',
		color: 'app.text.muted',
		textAlign: 'left',
		transitionProperty: 'background-color, border-color, color, box-shadow',
		transitionDuration: '180ms',
		transitionTimingFunction: 'ease',
		_hover: {
			bg: 'app.surface.muted',
			borderColor: 'app.border',
			color: 'app.text',
		},
	}),
	itemActive: css({
		bg: 'app.nav.active',
		borderColor: 'app.border',
		color: 'app.text',
		boxShadow: '{shadows.panel}',
	}),
	icon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '9',
		borderRadius: 'l2',
		bg: 'app.surface.muted',
		color: 'app.accent',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
		minWidth: 0,
	}),
	label: css({
		textStyle: 'toolbarLabel',
		color: 'currentColor',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.subtle',
	}),
	footer: css({
		paddingTop: '3',
		borderTopWidth: '1px',
		borderColor: 'app.border',
	}),
	rootTabs: css({
		padding: '0',
		borderWidth: '0',
		bg: 'transparent',
		boxShadow: 'none',
		gap: '0',
	}),
	listTabs: css({
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: '2',
	}),
	itemTabs: css({
		width: 'auto',
		gridTemplateColumns: 'minmax(0, 1fr)',
		gap: '0',
		paddingX: '3.5',
		paddingY: '2',
		rounded: 'full',
		bg: 'app.surface',
		borderColor: 'app.border',
	}),
	itemActiveTabs: css({
		bg: 'app.accent.soft',
		borderColor: 'app.border.strong',
		color: 'app.text',
		boxShadow: 'none',
	}),
	copyTabs: css({
		display: 'inline-flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: '0',
	}),
	labelTabs: css({
		textStyle: 'small',
		fontWeight: '600',
	}),
};

export function SettingsSectionNav({
	title,
	items,
	footer,
	layout = 'sidebar',
	showIcons = true,
	className,
}: SettingsSectionNavProps) {
	const isTabs = layout === 'tabs';

	return (
		<nav
			className={cx(styles.root, isTabs && styles.rootTabs, className)}
			aria-label="Settings Sections"
		>
			{title && <div className={styles.title}>{title}</div>}
			<ul className={cx(styles.list, isTabs && styles.listTabs)}>
				{items.map((item, index) => (
					<li key={item.id ?? `${item.label}-${index}`}>
						<button
							type="button"
							className={cx(
								styles.item,
								isTabs && styles.itemTabs,
								item.active && styles.itemActive,
								item.active && isTabs && styles.itemActiveTabs,
							)}
							onClick={item.onClick}
							aria-current={item.active ? 'page' : undefined}
						>
							{showIcons && !isTabs && item.icon && (
								<span className={styles.icon}>{item.icon}</span>
							)}
							<span className={cx(styles.copy, isTabs && styles.copyTabs)}>
								<span className={cx(styles.label, isTabs && styles.labelTabs)}>{item.label}</span>
								{!isTabs && item.description && (
									<span className={styles.description}>{item.description}</span>
								)}
							</span>
						</button>
					</li>
				))}
			</ul>
			{footer && !isTabs && <div className={styles.footer}>{footer}</div>}
		</nav>
	);
}
