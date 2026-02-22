import type * as React from 'react';
import { Card, CardContent } from '../primitives/card';
import { cn } from '../utils';

/**
 * Interactive card for quick actions with icon, title, description.
 * Composes shadcn Card + CardContent. Accessible via keyboard.
 * @param icon - Icon element (rendered in colored badge)
 * @param iconBg - Background color for icon badge
 * @param iconColor - Icon color
 * @param title - Action title
 * @param description - Action description
 * @param onClick - Click handler
 */
function ActionCard({
	icon,
	iconBg,
	iconColor,
	title,
	description,
	onClick,
	className,
	...props
}: Omit<React.ComponentProps<typeof Card>, 'children'> & {
	icon: React.ReactNode;
	iconBg: string;
	iconColor: string;
	title: string;
	description: string;
	onClick?: () => void;
}) {
	return (
		<Card
			role="button"
			tabIndex={0}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onClick?.();
				}
			}}
			className={cn(
				'gap-0 rounded-xl p-5 py-5 text-left cursor-pointer shadow-[0_2px_8px_var(--color-shadow-sm)] transition-all hover:shadow-[0_8px_24px_var(--color-shadow-hover)] hover:-translate-y-0.5',
				className,
			)}
			{...props}
		>
			<CardContent className="p-0">
				<span
					className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3"
					style={{ backgroundColor: iconBg, color: iconColor }}
				>
					{icon}
				</span>
				<p className="text-sm font-bold mb-1" style={{ color: 'var(--color-rich-black)' }}>
					{title}
				</p>
				<p className="text-xs leading-relaxed" style={{ color: 'var(--color-teal-700)' }}>
					{description}
				</p>
			</CardContent>
		</Card>
	);
}

export { ActionCard };
