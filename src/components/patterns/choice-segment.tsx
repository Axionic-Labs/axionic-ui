'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import * as SegmentGroup from '../ui/segment-group';

export interface ChoiceSegmentItem {
	value: string;
	label: ReactNode;
	icon?: ReactNode;
}

export interface ChoiceSegmentProps {
	value: string;
	onValueChange: (value: string) => void;
	items: ChoiceSegmentItem[];
	size?: 'xs' | 'sm' | 'md';
	fitted?: boolean;
	className?: string;
}

const styles = {
	root: css({
		width: '100%',
	}),
	item: css({
		minWidth: 0,
	}),
	control: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '2',
		width: '100%',
		paddingX: '3',
	}),
	label: css({
		whiteSpace: 'nowrap',
	}),
};

export function ChoiceSegment({
	value,
	onValueChange,
	items,
	size = 'sm',
	fitted = true,
	className,
}: ChoiceSegmentProps) {
	return (
		<SegmentGroup.Root
			value={value}
			onValueChange={(details) => {
				if (details.value) {
					onValueChange(details.value);
				}
			}}
			size={size}
			fitted={fitted}
			className={cx(styles.root, className)}
		>
			<SegmentGroup.Indicator />
			{items.map((item) => (
				<SegmentGroup.Item key={item.value} value={item.value} className={styles.item}>
					<SegmentGroup.ItemHiddenInput />
					<SegmentGroup.ItemControl className={styles.control}>
						{item.icon}
						<SegmentGroup.ItemText className={styles.label}>{item.label}</SegmentGroup.ItemText>
					</SegmentGroup.ItemControl>
				</SegmentGroup.Item>
			))}
		</SegmentGroup.Root>
	);
}
