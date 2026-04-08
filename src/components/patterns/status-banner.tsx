'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

type StatusBannerTone = 'info' | 'success' | 'warning' | 'error';

export interface StatusBannerProps {
	title: ReactNode;
	description?: ReactNode;
	icon?: ReactNode;
	actions?: ReactNode;
	tone?: StatusBannerTone;
	className?: string;
}

const styles = {
	root: css({
		display: 'grid',
		gridTemplateColumns: 'auto minmax(0, 1fr)',
		alignItems: 'flex-start',
		gap: '3',
		padding: { base: '4', md: '4.5' },
		borderRadius: 'l3',
		borderWidth: '1px',
	}),
	iconWrap: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '9',
		borderRadius: 'full',
		borderWidth: '1px',
		flexShrink: 0,
	}),
	content: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '3',
		minWidth: 0,
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1',
		minWidth: 0,
	}),
	title: css({
		textStyle: 'small',
		fontWeight: '600',
	}),
	description: css({
		textStyle: 'small',
		opacity: 0.92,
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
	}),
	info: css({
		bg: 'bg.info',
		borderColor: 'border.info',
		color: 'fg.info',
	}),
	success: css({
		bg: 'bg.success',
		borderColor: 'border.success',
		color: 'fg.success',
	}),
	warning: css({
		bg: 'bg.warning',
		borderColor: 'border.warning',
		color: 'fg.warning',
	}),
	error: css({
		bg: 'bg.error',
		borderColor: 'border.error',
		color: 'fg.error',
	}),
};

export function StatusBanner({
	title,
	description,
	icon,
	actions,
	tone = 'info',
	className,
}: StatusBannerProps) {
	return (
		<section
			role={tone === 'error' ? 'alert' : 'status'}
			className={cx(styles.root, styles[tone], className)}
		>
			{icon && <div className={cx(styles.iconWrap, styles[tone])}>{icon}</div>}
			<div className={styles.content}>
				<div className={styles.copy}>
					<div className={styles.title}>{title}</div>
					{description && <div className={styles.description}>{description}</div>}
				</div>
				{actions && <div className={styles.actions}>{actions}</div>}
			</div>
		</section>
	);
}
