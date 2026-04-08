'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface ResourceListItem {
	id?: string;
	title: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	icon?: ReactNode;
	action?: ReactNode;
	href?: string;
}

export interface ResourceListProps {
	title?: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	items: ResourceListItem[];
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
		overflow: 'hidden',
	}),
	header: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '4',
		paddingX: { base: '5', md: '6' },
		paddingY: { base: '5', md: '6' },
		borderBottomWidth: '1px',
		borderColor: 'app.border',
	}),
	titleBlock: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
	}),
	list: css({
		listStyle: 'none',
		padding: '0',
		margin: '0',
	}),
	item: css({
		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr) auto',
		alignItems: 'center',
		gap: '4',
		paddingX: { base: '5', md: '6' },
		paddingY: '4',
		borderBottomWidth: '1px',
		borderColor: 'app.border',
		_last: {
			borderBottomWidth: '0',
		},
	}),
	icon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '10',
		borderRadius: 'l2',
		bg: 'app.surface.muted',
		color: 'app.accent',
	}),
	copy: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '1',
	}),
	itemTitle: css({
		textStyle: 'toolbarLabel',
		color: 'app.text',
	}),
	itemDescription: css({
		textStyle: 'small',
		color: 'app.text.muted',
	}),
	meta: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	itemLink: css({
		color: 'inherit',
		textDecoration: 'none',
	}),
	action: css({
		display: 'inline-flex',
		alignItems: 'center',
	}),
};

export function ResourceList({ title, description, actions, items, className }: ResourceListProps) {
	return (
		<section className={cx(styles.root, className)}>
			{(title || description || actions) && (
				<div className={styles.header}>
					<div className={styles.titleBlock}>
						{title && <div className={styles.title}>{title}</div>}
						{description && <div className={styles.description}>{description}</div>}
					</div>
					{actions}
				</div>
			)}
			<ul className={styles.list}>
				{items.map((item, index) => {
					const content = (
						<div className={styles.copy}>
							<div className={styles.itemTitle}>{item.title}</div>
							{item.description && <div className={styles.itemDescription}>{item.description}</div>}
							{item.meta && <div className={styles.meta}>{item.meta}</div>}
						</div>
					);

					return (
						<li key={item.id ?? item.href ?? `resource-item-${index}`}>
							<div className={styles.item}>
								{item.icon && <div className={styles.icon}>{item.icon}</div>}
								{item.href ? (
									<a className={styles.itemLink} href={item.href}>
										{content}
									</a>
								) : (
									content
								)}
								{item.action && <div className={styles.action}>{item.action}</div>}
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
