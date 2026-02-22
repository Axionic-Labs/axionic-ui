import type * as React from 'react';
import { cn } from '../utils';

/**
 * Numbered step with title and description.
 * Used in workflow/pipeline visualizations.
 * @param step - Step number
 * @param title - Step title
 * @param description - Step description
 * @param icon - Optional icon override for the numbered badge
 */
function StepCard({
	step,
	title,
	description,
	icon,
	className,
	...props
}: React.ComponentProps<'div'> & {
	step: number;
	title: string;
	description?: string;
	icon?: React.ReactNode;
}) {
	return (
		<div
			className={cn('rounded-xl p-6', className)}
			style={{
				backgroundColor: 'var(--color-white)',
				boxShadow: '0 2px 8px var(--color-shadow-sm)',
			}}
			{...props}
		>
			<span
				className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold mb-4"
				style={{
					backgroundColor: 'rgba(230, 182, 133, 0.15)',
					color: 'var(--color-accent-gold)',
				}}
			>
				{icon ?? step}
			</span>
			<p
				className="text-xs uppercase tracking-widest mb-1"
				style={{ color: 'var(--color-teal-300)' }}
			>
				Step {step}
			</p>
			<h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-rich-black)' }}>
				{title}
			</h3>
			{description && (
				<p className="text-sm leading-relaxed" style={{ color: 'var(--color-teal-700)' }}>
					{description}
				</p>
			)}
		</div>
	);
}

export { StepCard };
