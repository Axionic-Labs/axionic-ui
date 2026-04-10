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
		bg: 'app.surface',
		borderWidth: '1px',
		borderColor: 'app.border',
		rounded: 'l3',
		p: '5.5',
		cursor: 'pointer',
		boxShadow: '{shadows.whisper}',
		transition: 'all 0.2s ease',
		_hover: {
			boxShadow: '{shadows.float}',
			borderColor: 'app.border.strong',
			transform: 'translateY(-1px)',
		},
		_focusVisible: { outline: '2px solid', outlineColor: 'colorPalette.8', outlineOffset: '2px' },
	}),
	iconWrap: css({
		w: '10',
		h: '10',
		rounded: 'xl',
		bg: 'app.accent.soft',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'app.accent',
		mb: '3',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		mt: '1.5',
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
