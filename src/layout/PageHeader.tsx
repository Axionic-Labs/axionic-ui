import * as React from 'react';
import { cn } from '../utils';

/**
 * Standardized page/section header with optional label, title, subtitle, and CTA area.
 * @param label - Uppercase label above title (e.g. "THE FUTURE OF AI")
 * @param title - Main heading text
 * @param subtitle - Descriptive text below title
 * @param align - Horizontal alignment: 'center' (default) | 'left'
 * @param children - Optional content below subtitle (CTAs, etc.)
 */
function PageHeader({
	label,
	title,
	subtitle,
	align = 'center',
	children,
	className,
	...props
}: React.ComponentProps<'div'> & {
	label?: string;
	title: string;
	subtitle?: string;
	align?: 'center' | 'left';
}) {
	return (
		<div
			className={cn(
				'mb-12 md:mb-16',
				align === 'center' && 'text-center',
				className,
			)}
			{...props}
		>
			{label && (
				<span
					className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase"
					style={{ color: 'var(--color-wheat)' }}
				>
					{label}
				</span>
			)}
			<h2
				className="font-bold"
				style={{
					font: 'var(--text-h2)',
					color: 'var(--color-rich-black)',
				}}
			>
				{title}
			</h2>
			{subtitle && (
				<p
					className={cn(
						'mt-4',
						align === 'center' && 'mx-auto max-w-2xl',
					)}
					style={{
						font: 'var(--text-body)',
						color: 'var(--color-teal-700)',
					}}
				>
					{subtitle}
				</p>
			)}
			{children && <div className="mt-6">{children}</div>}
		</div>
	);
}

export { PageHeader };
