import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SplitSectionProps {
	left: ReactNode;
	right: ReactNode;
	className?: string;
	reversed?: boolean;
}

const base = css({
	display: 'grid',
	gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
	gap: { base: '8', lg: '16' },
	alignItems: 'center',
	py: { base: '16', md: '24' },
	px: { base: '4', md: '6', lg: '8' },
	maxW: '7xl',
	mx: 'auto',
	w: 'full',
});

export function SplitSection({ left, right, className, reversed }: SplitSectionProps) {
	return (
		<section className={cx(base, className)}>
			<div style={reversed ? { order: 2 } : undefined}>{left}</div>
			<div style={reversed ? { order: 1 } : undefined}>{right}</div>
		</section>
	);
}
