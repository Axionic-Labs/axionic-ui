'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface WorkspacePageProps {
	children: ReactNode;
	density?: 'comfortable' | 'compact';
	className?: string;
}

const styles = {
	base: css({
		display: 'flex',
		flexDirection: 'column',
		minWidth: 0,
		paddingBottom: '8',
	}),
	comfortable: css({
		gap: '5',
	}),
	compact: css({
		gap: '5',
	}),
};

export function WorkspacePage({
	children,
	density = 'comfortable',
	className,
}: WorkspacePageProps) {
	return (
		<div
			className={cx(
				styles.base,
				density === 'compact' && styles.compact,
				density === 'comfortable' && styles.comfortable,
				className,
			)}
		>
			{children}
		</div>
	);
}
