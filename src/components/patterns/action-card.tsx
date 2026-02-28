'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface ActionCardProps {
	title: string;
	description?: string;
	icon?: ReactNode;
	/** Override icon wrapper background color (CSS value) */
	iconBg?: string;
	/** Override icon wrapper foreground color (CSS value) */
	iconColor?: string;
	onClick?: () => void;
	className?: string;
}

const styles = {
	root: css({
		bg: 'bg.default',
		borderWidth: '1px',
		borderColor: 'border.muted',
		rounded: 'l3',
		p: '6',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		_hover: { shadow: 'md', borderColor: 'colorPalette.7', translateY: '-1px' },
		_focusVisible: { outline: '2px solid', outlineColor: 'colorPalette.8', outlineOffset: '2px' },
	}),
	iconWrap: css({
		w: '10',
		h: '10',
		rounded: 'l2',
		bg: 'colorPalette.2',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'colorPalette.9',
		mb: '3',
	}),
	title: css({
		textStyle: 'label',
		color: 'fg.default',
	}),
	description: css({
		textStyle: 'small',
		color: 'fg.muted',
		mt: '1',
	}),
};

export function ActionCard({
	title,
	description,
	icon,
	iconBg,
	iconColor,
	onClick,
	className,
}: ActionCardProps) {
	return (
		<div
			role="button"
			tabIndex={0}
			className={cx(styles.root, className)}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onClick?.();
				}
			}}
		>
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
			<div className={styles.title}>{title}</div>
			{description && <div className={styles.description}>{description}</div>}
		</div>
	);
}
