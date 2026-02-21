import * as React from 'react';
import { cn } from '../utils';
import { Card, CardContent } from '../primitives/card';

/**
 * Metric card with icon badge, large value, label, and optional trend badge.
 * Composes shadcn Card + CardContent.
 * @param icon - Icon element (rendered in colored badge)
 * @param iconBg - Background color for icon badge
 * @param iconColor - Icon color
 * @param value - Large metric value
 * @param label - Description below value
 * @param badge - Optional trend/status text
 * @param badgeColor - Badge text color
 * @param badgeBg - Badge background color
 */
function StatCard({
	icon,
	iconBg,
	iconColor,
	label,
	value,
	badge,
	badgeColor,
	badgeBg,
	className,
	...props
}: Omit<React.ComponentProps<typeof Card>, 'children'> & {
	icon: React.ReactNode;
	iconBg: string;
	iconColor: string;
	label: string;
	value: string;
	badge?: string;
	badgeColor?: string;
	badgeBg?: string;
}) {
	return (
		<Card
			className={cn(
				'gap-0 rounded-xl p-5 py-5 shadow-[0_2px_8px_var(--color-shadow-sm)]',
				className,
			)}
			{...props}
		>
			<CardContent className="p-0">
				<div className="flex items-center justify-between mb-4">
					<span
						className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
						style={{ backgroundColor: iconBg, color: iconColor }}
					>
						{icon}
					</span>
					{badge && (
						<span
							className="text-xs font-semibold px-2.5 py-1 rounded-full"
							style={{ backgroundColor: badgeBg, color: badgeColor }}
						>
							{badge}
						</span>
					)}
				</div>
				<p className="text-3xl font-bold mb-1" style={{ color: 'var(--color-rich-black)' }}>
					{value}
				</p>
				<p className="text-sm" style={{ color: 'var(--color-teal-700)' }}>
					{label}
				</p>
			</CardContent>
		</Card>
	);
}

export { StatCard };
