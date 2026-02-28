'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface StatCardProps {
	title: string;
	value: string | number;
	change?: string;
	changeType?: 'positive' | 'negative' | 'neutral';
	icon?: ReactNode;
	/** Override icon wrapper background color (CSS value) */
	iconBg?: string;
	/** Override icon wrapper foreground color (CSS value) */
	iconColor?: string;
	/** Optional badge text displayed beside the change indicator */
	badge?: string;
	/** Badge text color (CSS value) */
	badgeColor?: string;
	/** Badge background color (CSS value) */
	badgeBg?: string;
	className?: string;
}

const styles = {
	root: css({
		bg: 'bg.default',
		borderWidth: '1px',
		borderColor: 'border.muted',
		rounded: 'l3',
		p: '6',
		display: 'flex',
		alignItems: 'flex-start',
		gap: '4',
	}),
	iconWrap: css({
		flexShrink: 0,
		w: '10',
		h: '10',
		rounded: 'l2',
		bg: 'colorPalette.2',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'colorPalette.9',
	}),
	content: css({
		flex: 1,
		minW: 0,
	}),
	title: css({
		textStyle: 'caption',
		color: 'fg.muted',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
	}),
	value: css({
		textStyle: 'h2',
		color: 'fg.default',
		mt: '1',
	}),
	change: css({
		textStyle: 'small',
		mt: '1',
	}),
};

export function StatCard({
	title,
	value,
	change,
	changeType = 'neutral',
	icon,
	iconBg,
	iconColor,
	badge,
	badgeColor,
	badgeBg,
	className,
}: StatCardProps) {
	const changeColor =
		changeType === 'positive'
			? css({ color: '{colors.green.11}' })
			: changeType === 'negative'
				? css({ color: '{colors.red.11}' })
				: css({ color: 'fg.muted' });

	return (
		<div className={cx(styles.root, className)}>
			{icon && (
				<div
					className={styles.iconWrap}
					style={{
						...(iconBg ? { backgroundColor: iconBg } : {}),
						...(iconColor ? { color: iconColor } : {}),
					}}
				>
					{icon}
				</div>
			)}
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<div className={styles.value}>{value}</div>
				<div className={css({ display: 'flex', alignItems: 'center', gap: '2', mt: '1' })}>
					{change && <span className={cx(styles.change, changeColor)}>{change}</span>}
					{badge && (
						<span
							className={css({
								textStyle: 'small',
								px: '2',
								py: '0.5',
								rounded: 'full',
								fontSize: 'xs',
							})}
							style={{
								color: badgeColor,
								backgroundColor: badgeBg,
							}}
						>
							{badge}
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
