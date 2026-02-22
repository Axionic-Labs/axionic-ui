import type * as React from 'react';
import { cn } from '../utils';

const sizeMap = {
	sm: 'max-w-3xl',
	md: 'max-w-5xl',
	lg: 'max-w-7xl',
} as const;

/**
 * Section with forced dark-section tokens and Rich Black background.
 * Content inside always uses light-mode brand tokens regardless of system theme.
 * @param size - Container max-width: 'sm' | 'md' | 'lg' (default 'lg')
 */
function DarkSection({
	children,
	className,
	size = 'lg',
	...props
}: React.ComponentProps<'section'> & {
	size?: 'sm' | 'md' | 'lg';
}) {
	return (
		<section
			className={cn('dark-section py-20 md:py-28', className)}
			style={{ backgroundColor: 'var(--color-rich-black)' }}
			{...props}
		>
			<div className={cn('mx-auto px-6 lg:px-8', sizeMap[size])}>{children}</div>
		</section>
	);
}

export { DarkSection };
