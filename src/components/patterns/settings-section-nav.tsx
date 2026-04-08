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
};

export function SettingsSectionNav({ title, items, footer, className }: SettingsSectionNavProps) {
	return (
		<nav className={cx(styles.root, className)} aria-label="Settings Sections">
			{title && <div className={styles.title}>{title}</div>}
			<ul className={styles.list}>
				{items.map((item, index) => (
					<li key={item.id ?? `${item.label}-${index}`}>
						<button
							type="button"
							className={cx(styles.item, item.active && styles.itemActive)}
							onClick={item.onClick}
							aria-current={item.active ? 'page' : undefined}
						>
							{item.icon && <span className={styles.icon}>{item.icon}</span>}
							<span className={styles.copy}>
								<span className={styles.label}>{item.label}</span>
								{item.description && <span className={styles.description}>{item.description}</span>}
							</span>
						</button>
					</li>
				))}
			</ul>
			{footer && <div className={styles.footer}>{footer}</div>}
		</nav>
	);
}
