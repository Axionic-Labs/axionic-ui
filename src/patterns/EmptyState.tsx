import * as React from 'react';
import { cn } from '../utils';

/**
 * Centered empty state with icon, heading, body text, and optional CTA.
 * @param icon - Decorative icon
 * @param title - Heading text
 * @param description - Body text
 * @param action - Optional CTA element (button, link, etc.)
 */
function EmptyState({
	icon,
	title,
	description,
	action,
	className,
	...props
}: Omit<React.ComponentProps<'div'>, 'children'> & {
	icon?: React.ReactNode;
	title: string;
	description?: string;
	action?: React.ReactNode;
}) {
	return (
		<div
			className={cn('flex flex-col items-center justify-center py-16 text-center', className)}
			{...props}
		>
			{icon && (
				<div
					className="mb-4"
					style={{ color: 'var(--color-teal-300)' }}
				>
					{icon}
				</div>
			)}
			<h3
				className="text-lg font-bold mb-2"
				style={{ color: 'var(--color-rich-black)' }}
			>
				{title}
			</h3>
			{description && (
				<p
					className="text-sm max-w-sm"
					style={{ color: 'var(--color-teal-700)' }}
				>
					{description}
				</p>
			)}
			{action && <div className="mt-6">{action}</div>}
		</div>
	);
}

export { EmptyState };
