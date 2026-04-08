'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface SelectionToolbarProps {
	summary: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '3',
		padding: { base: '4', md: '4.5' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border.strong',
		bg: 'app.accent.soft',
		boxShadow: '{shadows.panel}',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1',
		minWidth: 0,
	}),
	summary: css({
		textStyle: 'small',
		fontWeight: '600',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.muted',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
	}),
};

export function SelectionToolbar({
	summary,
	description,
	actions,
	className,
}: SelectionToolbarProps) {
	return (
		<section className={cx(styles.root, className)}>
			<div className={styles.copy}>
				<div className={styles.summary}>{summary}</div>
				{description && <div className={styles.description}>{description}</div>}
			</div>
			{actions && <div className={styles.actions}>{actions}</div>}
		</section>
	);
}
