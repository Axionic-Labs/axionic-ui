'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface PageTitleProps {
	/** Page title text */
	children: ReactNode;
	/** Optional subtitle/description below the title */
	subtitle?: string;
	/** Additional CSS classes */
	className?: string;
}

const titleStyle = css({
	textStyle: 'h2',
	color: 'colorPalette.12',
});

const subtitleStyle = css({
	textStyle: 'description',
	color: 'fg.muted',
	mt: '1',
});

/**
 * Page-level heading component. Renders a bold h1 with optional subtitle.
 * Uses the color palette for the title and muted color for the subtitle.
 *
 * @example
 * ```tsx
 * <PageTitle subtitle="Configure your training pipeline">New Model</PageTitle>
 * ```
 */
export function PageTitle({ children, subtitle, className }: PageTitleProps) {
	return (
		<div className={className}>
			<h1 className={cx(titleStyle)}>{children}</h1>
			{subtitle && <p className={subtitleStyle}>{subtitle}</p>}
		</div>
	);
}
