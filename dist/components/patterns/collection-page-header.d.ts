import type { ReactNode } from 'react';
import { type ListToolbarProps } from './list-toolbar';
import { type PageIntroProps } from './page-intro';
export interface CollectionPageHeaderProps extends Omit<PageIntroProps, 'children'> {
    search?: ListToolbarProps['search'];
    filters?: ListToolbarProps['filters'];
    toolbarMeta?: ListToolbarProps['meta'];
    toolbarActions?: ListToolbarProps['actions'];
    children?: ReactNode;
    className?: string;
}
export declare function CollectionPageHeader({ search, filters, toolbarMeta, toolbarActions, children, className, ...pageIntroProps }: CollectionPageHeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=collection-page-header.d.ts.map