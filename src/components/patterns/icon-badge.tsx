'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface IconBadgeProps {
	icon: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const base = css({
	rounded: 'l2',
	bg: 'colorPalette.2',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'colorPalette.9',
	flexShrink: 0,
});

const sizes = {
	sm: css({ w: '8', h: '8' }),
	md: css({ w: '10', h: '10' }),
	lg: css({ w: '14', h: '14' }),
};

export function IconBadge({ icon, size = 'md', className }: IconBadgeProps) {
	return <div className={cx(base, sizes[size], className)}>{icon}</div>;
}
