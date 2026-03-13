'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface PricingCardProps {
	name: string;
	description?: string;
	price: string;
	interval?: string;
	badge?: string;
	/** Badge text color (CSS value) */
	badgeColor?: string;
	/** Badge background color (CSS value) */
	badgeBg?: string;
	/** Override accent color for name text (CSS value) */
	accentColor?: string;
	highlight?: boolean;
	/** Slot for action button(s) at bottom */
	action?: ReactNode;
	/** List of feature descriptions */
	features?: string[];
	className?: string;
}

const styles = {
	root: css({
		bg: 'bg.default',
		borderWidth: '1px',
		borderColor: 'border.muted',
		rounded: 'l3',
		p: '6',
		position: 'relative',
		overflow: 'visible',
		transition: 'all 200ms',
		display: 'flex',
		flexDir: 'column',
		_hover: {
			shadow: 'md',
			borderColor: 'colorPalette.7',
		},
	}),
	highlighted: css({
		shadow: 'md',
		borderColor: 'colorPalette.7',
	}),
	badge: css({
		position: 'absolute',
		top: '-3',
		left: '50%',
		transform: 'translateX(-50%)',
		rounded: 'full',
		px: '3',
		py: '1',
		fontSize: 'xs',
		fontWeight: 'semibold',
		bg: 'colorPalette.9',
		color: 'white',
		whiteSpace: 'nowrap',
	}),
	name: css({
		textAlign: 'center',
		fontSize: 'xl',
		fontWeight: 'semibold',
		color: 'colorPalette.11',
	}),
	description: css({
		textAlign: 'center',
		textStyle: 'small',
		color: 'fg.muted',
		mb: '4',
	}),
	priceArea: css({
		display: 'flex',
		alignItems: 'baseline',
		justifyContent: 'center',
		mb: '6',
	}),
	price: css({
		fontSize: '4xl',
		fontWeight: 'bold',
		color: 'fg.default',
	}),
	interval: css({
		color: 'fg.muted',
	}),
	featureList: css({
		listStyle: 'none',
		p: '0',
		m: '0',
		display: 'flex',
		flexDir: 'column',
		gap: '2',
	}),
	featureItem: css({
		display: 'flex',
		flexDir: 'row',
		alignItems: 'center',
		gap: '2',
		textStyle: 'small',
		color: 'fg.default',
	}),
	checkmark: css({
		color: 'colorPalette.9',
		flexShrink: 0,
	}),
	actionWrap: css({
		mt: 'auto',
		pt: '4',
	}),
};

export function PricingCard({
	name,
	description,
	price,
	interval,
	badge,
	badgeColor,
	badgeBg,
	accentColor,
	highlight,
	action,
	features,
	className,
}: PricingCardProps) {
	return (
		<div className={cx(styles.root, highlight && styles.highlighted, className)}>
			{badge && (
				<span
					className={styles.badge}
					style={{
						...(badgeBg ? { backgroundColor: badgeBg } : {}),
						...(badgeColor ? { color: badgeColor } : {}),
					}}
				>
					{badge}
				</span>
			)}
			<div className={styles.name} style={accentColor ? { color: accentColor } : undefined}>
				{name}
			</div>
			{description && <div className={styles.description}>{description}</div>}
			<div className={styles.priceArea}>
				<span className={styles.price}>{price}</span>
				{interval && <span className={styles.interval}>/{interval}</span>}
			</div>
			{features && features.length > 0 && (
				<ul className={styles.featureList}>
					{features.map((feature) => (
						<li key={feature} className={styles.featureItem}>
							<span className={styles.checkmark}>{'\u2713'}</span>
							{feature}
						</li>
					))}
				</ul>
			)}
			{action && <div className={styles.actionWrap}>{action}</div>}
		</div>
	);
}
