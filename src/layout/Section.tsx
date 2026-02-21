import * as React from 'react';
import { cn } from '../utils';

const sizeMap = {
	sm: 'max-w-3xl',
	md: 'max-w-5xl',
	lg: 'max-w-7xl',
} as const;

/**
 * Standard page section with consistent vertical padding and centered container.
 * @param size - Container max-width: 'sm' | 'md' | 'lg' (default 'lg')
 * @param noPadding - Remove default vertical padding
 */
function Section({
	children,
	className,
	size = 'lg',
	noPadding = false,
	...props
}: React.ComponentProps<'section'> & {
	size?: 'sm' | 'md' | 'lg';
	noPadding?: boolean;
}) {
	return (
		<section className={cn(!noPadding && 'py-20 md:py-28', className)} {...props}>
			<div className={cn('mx-auto px-6 lg:px-8', sizeMap[size])}>
				{children}
			</div>
		</section>
	);
}

export { Section };
