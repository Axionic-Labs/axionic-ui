'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SectionHeaderProps {
	/** Section title text */
	title: string;
	/** Icon element to display in a colored badge */
	icon?: ReactNode;
	/** Color variant — determines background tint and icon badge color */
	variant?: 'teal' | 'wheat';
	/** Additional content rendered on the right side (e.g., action buttons) */
	actions?: ReactNode;
	/** Additional CSS classes */
	className?: string;
}

const base = css({
	px: '4',
	py: '3',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderBottomWidth: '1px',
});

const variants = {
	teal: css({
		bg: 'colorPalette.a2',
		borderColor: 'colorPalette.4',
	}),
	wheat: css({
		bg: 'colorPalette.2',
		borderColor: 'colorPalette.4',
	}),
};

const badgeStyle = css({
	w: '7',
	h: '7',
	rounded: 'md',
	bg: 'colorPalette.3',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'colorPalette.11',
	flexShrink: 0,
});

const titleStyle = css({
	fontSize: 'lg',
	fontWeight: 'semibold',
	color: 'fg.default',
});

/**
 * Tinted header bar for cards. Provides visual weight with a colored
 * background, icon badge, and title. Use inside a Card.Root with
 * `overflow: 'hidden'` so the tint extends to the card edges.
 *
 * @example
 * ```tsx
 * <Card.Root css={{ overflow: 'hidden' }}>
 *   <SectionHeader title="Active Tools" icon={<Zap size={14} />} variant="teal" />
 *   <Card.Body>...</Card.Body>
 * </Card.Root>
 * ```
 */
export function SectionHeader({
	title,
	icon,
	variant = 'teal',
	actions,
	className,
}: SectionHeaderProps) {
	return (
		<div className={cx(base, variants[variant], className)}>
			<div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
				{icon && <div className={badgeStyle}>{icon}</div>}
				<h3 className={titleStyle}>{title}</h3>
			</div>
			{actions && <div>{actions}</div>}
		</div>
	);
}
