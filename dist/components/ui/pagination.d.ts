import { Pagination } from '@ark-ui/react/pagination';
import type { ComponentProps } from 'react';
export type RootProps = ComponentProps<typeof Root>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Pagination.RootProps & import("react").RefAttributes<HTMLElement>>, import("styled-system/recipes").PaginationRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Pagination.RootProviderProps & import("react").RefAttributes<HTMLElement>>, import("styled-system/recipes").PaginationRecipe>;
export declare const Item: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.ItemProps & import("react").RefAttributes<HTMLButtonElement>>>;
export declare const Ellipsis: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.EllipsisProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const PrevTrigger: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.PrevTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
export declare const NextTrigger: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.NextTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
export { PaginationContext as Context } from '@ark-ui/react/pagination';
export interface PaginationItemsProps extends React.HTMLAttributes<HTMLElement> {
    render: (page: {
        type: 'page';
        value: number;
        selected: boolean;
    }) => React.ReactNode;
    ellipsis?: React.ReactElement | undefined;
}
export declare const Items: (props: PaginationItemsProps) => import("react/jsx-runtime").JSX.Element[];
//# sourceMappingURL=pagination.d.ts.map