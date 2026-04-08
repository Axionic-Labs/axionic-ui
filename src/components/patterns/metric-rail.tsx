'use client';

import { css, cx } from 'styled-system/css';
import { StatCard, type StatCardProps } from './stat-card';

export interface MetricRailProps {
	items: StatCardProps[];
	columns?: 2 | 3 | 4;
	className?: string;
}

export function MetricRail({ items, columns = 3, className }: MetricRailProps) {
	const rootClassName = css({
		display: 'grid',
		gap: '4',
		gridTemplateColumns: {
			base: '1fr',
			md: 'repeat(2, minmax(0, 1fr))',
			xl: `repeat(${columns}, minmax(0, 1fr))`,
		},
	});

	return (
		<div className={cx(rootClassName, className)}>
			{items.map((item, index) => (
				<StatCard key={`${index}-${String(item.value)}`} {...item} />
			))}
		</div>
	);
}
