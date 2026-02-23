import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SectionProps {
	children: ReactNode;
	className?: string;
	id?: string;
}

const base = css({
	py: { base: '16', md: '24' },
	px: { base: '4', md: '6', lg: '8' },
	maxW: '7xl',
	mx: 'auto',
	w: 'full',
});

export function Section({ children, className, id }: SectionProps) {
	return (
		<section id={id} className={cx(base, className)}>
			{children}
		</section>
	);
}
