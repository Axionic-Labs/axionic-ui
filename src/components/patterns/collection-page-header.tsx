'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { ListToolbar, type ListToolbarProps } from './list-toolbar';
import { PageIntro, type PageIntroProps } from './page-intro';

export interface CollectionPageHeaderProps extends Omit<PageIntroProps, 'children'> {
	search?: ListToolbarProps['search'];
	filters?: ListToolbarProps['filters'];
	toolbarMeta?: ListToolbarProps['meta'];
	toolbarActions?: ListToolbarProps['actions'];
	children?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
	}),
};

export function CollectionPageHeader({
	search,
	filters,
	toolbarMeta,
	toolbarActions,
	children,
	className,
	...pageIntroProps
}: CollectionPageHeaderProps) {
	const hasToolbar = Boolean(search || filters || toolbarMeta || toolbarActions);

	return (
		<div className={cx(styles.root, className)}>
			<PageIntro {...pageIntroProps}>
				{hasToolbar && (
					<ListToolbar
						variant="inline"
						search={search}
						filters={filters}
						meta={toolbarMeta}
						actions={toolbarActions}
					/>
				)}
				{children}
			</PageIntro>
		</div>
	);
}
