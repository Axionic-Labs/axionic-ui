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
		bg: 'app.surface',
		borderWidth: '1px',
		borderColor: 'app.border',
		rounded: 'l3',
		p: '5.5',
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		boxShadow: '{shadows.whisper}',
	}),
	header: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '3',
	}),
	iconWrap: css({
		flexShrink: 0,
		w: '8.5',
		h: '8.5',
		rounded: 'full',
		bg: 'transparent',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'app.accent',
	}),
	content: css({
		flex: 1,
		minW: 0,
	}),
	title: css({
		textStyle: 'metricLabel',
		color: 'app.text.subtle',
	}),
	value: css({
		textStyle: 'metricValue',
		color: 'app.text',
		letterSpacing: '-0.03em',
	}),
	change: css({
		textStyle: 'small',
		mt: '1.5',
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
			? css({ color: 'fg.success' })
			: changeType === 'negative'
				? css({ color: 'fg.error' })
				: css({ color: 'app.text.muted' });

	return (
		<div className={cx(styles.root, className)}>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.title}>{title}</div>
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
				</div>
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
								bg: 'app.surface.muted',
								color: 'app.text',
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
