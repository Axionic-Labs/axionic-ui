'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface TopToolbarProps {
	leading?: ReactNode;
	title?: ReactNode;
	subtitle?: ReactNode;
	center?: ReactNode;
	trailing?: ReactNode;
	children?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '2',
		paddingX: { base: '4', md: '4.5', xl: '5' },
		paddingY: '2.5',
	}),
	row: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '2.5',
	}),
	left: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		gap: '4',
		minWidth: 0,
		flex: '1',
	}),
	titleBlock: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	subtitle: css({
		textStyle: 'small',
		color: 'app.text.muted',
	}),
	center: css({
		width: '100%',
		maxWidth: { base: 'full', md: 'none' },
		flex: { md: '1' },
	}),
	trailing: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		justifyContent: { base: 'flex-start', md: 'flex-end' },
		gap: '2.5',
	}),
	children: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		gap: '3',
		paddingTop: '3',
	}),
};

export function TopToolbar({
	leading,
	title,
	subtitle,
	center,
	trailing,
	children,
	className,
}: TopToolbarProps) {
	return (
		<div className={cx(styles.root, className)}>
			<div className={styles.row}>
				<div className={styles.left}>
					{leading}
					{(title || subtitle) && (
						<div className={styles.titleBlock}>
							{title && <div className={styles.title}>{title}</div>}
							{subtitle && <div className={styles.subtitle}>{subtitle}</div>}
						</div>
					)}
				</div>
				{center && <div className={styles.center}>{center}</div>}
				{trailing && <div className={styles.trailing}>{trailing}</div>}
			</div>
			{children && <div className={styles.children}>{children}</div>}
		</div>
	);
}
