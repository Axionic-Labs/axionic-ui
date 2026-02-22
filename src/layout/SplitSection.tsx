import * as React from 'react';
import { cn } from '../utils';

const ratioMap = {
	'1:3': 'lg:grid-cols-[1fr_3fr]',
	'2:3': 'lg:grid-cols-[2fr_3fr]',
	'1:1': 'lg:grid-cols-2',
	'2:5': 'lg:grid-cols-[2fr_5fr]',
} as const;

/**
 * Two-column layout with configurable ratio.
 * Stacks vertically on mobile, splits at lg breakpoint.
 * @param left - Left column content
 * @param right - Right column content
 * @param ratio - Column ratio: '1:3' | '2:3' | '1:1' | '2:5' (default '1:1')
 * @param reverse - Reverse column order on mobile
 * @param gap - Gap size (default 'gap-8 lg:gap-12')
 */
function SplitSection({
	left,
	right,
	ratio = '1:1',
	reverse = false,
	gap,
	className,
	...props
}: Omit<React.ComponentProps<'div'>, 'children'> & {
	left: React.ReactNode;
	right: React.ReactNode;
	ratio?: '1:3' | '2:3' | '1:1' | '2:5';
	reverse?: boolean;
	gap?: string;
}) {
	return (
		<div
			className={cn(
				'grid grid-cols-1',
				ratioMap[ratio],
				gap ?? 'gap-8 lg:gap-12',
				className,
			)}
			{...props}
		>
			<div className={cn(reverse && 'order-2 lg:order-1')}>{left}</div>
			<div className={cn(reverse && 'order-1 lg:order-2')}>{right}</div>
		</div>
	);
}

export { SplitSection };
