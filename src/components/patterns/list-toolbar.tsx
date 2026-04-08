'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface ListToolbarProps {
	search?: ReactNode;
	filters?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	variant?: 'panel' | 'inline';
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		alignItems: { base: 'stretch', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', xl: 'row' },
		gap: '3',
	}),
	panel: css({
		padding: { base: '4', md: '4.5' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
	}),
	inline: css({
		padding: '0',
		borderRadius: '0',
		borderWidth: '0',
		bg: 'transparent',
	}),
	leading: css({
		display: 'flex',
		alignItems: { base: 'stretch', lg: 'center' },
		flexDirection: { base: 'column', lg: 'row' },
		flexWrap: 'wrap',
		gap: '3',
		minWidth: 0,
		flex: '1 1 auto',
	}),
	filters: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
		minWidth: 0,
	}),
	meta: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: { base: 'flex-start', xl: 'flex-end' },
		flexWrap: 'wrap',
		gap: '2.5',
	}),
};

export function ListToolbar({
	search,
	filters,
	meta,
	actions,
	variant = 'panel',
	className,
}: ListToolbarProps) {
	return (
		<div className={cx(styles.root, variant === 'panel' ? styles.panel : styles.inline, className)}>
			<div className={styles.leading}>
				{search}
				{filters && <div className={styles.filters}>{filters}</div>}
				{meta && <div className={styles.meta}>{meta}</div>}
			</div>
			{actions && <div className={styles.actions}>{actions}</div>}
		</div>
	);
}
