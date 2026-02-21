import * as React from 'react';
import { cn } from '../utils';

/**
 * Feature card with icon, title, and description.
 * Uses feature-hover CSS class for background tint on hover.
 * @param icon - Icon element
 * @param title - Feature title
 * @param description - Feature description
 */
function FeatureCard({
	icon,
	title,
	description,
	className,
	...props
}: React.ComponentProps<'div'> & {
	icon?: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div
			className={cn(
				'feature-hover rounded-xl p-4 md:p-5 text-center',
				className,
			)}
			{...props}
		>
			{icon && <div className="mb-3">{icon}</div>}
			<h3
				className="text-sm font-bold mb-1"
				style={{ color: 'var(--color-rich-black)' }}
			>
				{title}
			</h3>
			<p
				className="text-xs leading-relaxed"
				style={{ color: 'var(--color-teal-500)' }}
			>
				{description}
			</p>
		</div>
	);
}

export { FeatureCard };
