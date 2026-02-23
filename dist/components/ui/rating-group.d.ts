import { RatingGroup } from '@ark-ui/react/rating-group';
import { type ComponentProps, type ReactElement } from 'react';
import { type HTMLStyledProps } from 'styled-system/jsx';
export type RootProps = ComponentProps<typeof Root>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<RatingGroup.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").RatingGroupRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<RatingGroup.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").RatingGroupRecipe>;
export declare const Item: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<RatingGroup.ItemProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const Label: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<RatingGroup.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
export declare const HiddenInput: import("react").ForwardRefExoticComponent<RatingGroup.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export { RatingGroupContext as Context, RatingGroupItemContext as ItemContext, } from '@ark-ui/react/rating-group';
interface ItemIndicatorProps extends HTMLStyledProps<'span'> {
    icon?: ReactElement | undefined;
}
export declare const ItemIndicator: import("react").ForwardRefExoticComponent<Omit<ItemIndicatorProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
interface ItemsProps extends Omit<ComponentProps<typeof Item>, 'index'> {
    icon?: ReactElement | undefined;
}
export declare const Items: (props: ItemsProps) => import("react/jsx-runtime").JSX.Element[];
export declare const Control: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<RatingGroup.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
//# sourceMappingURL=rating-group.d.ts.map