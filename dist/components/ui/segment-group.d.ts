import { SegmentGroup } from '@ark-ui/react/segment-group';
import { type ComponentProps, type ReactNode } from 'react';
export type RootProps = ComponentProps<typeof Root>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<SegmentGroup.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").SegmentGroupRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<SegmentGroup.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").SegmentGroupRecipe>;
export declare const Indicator: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<SegmentGroup.IndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Item: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<SegmentGroup.ItemProps & import("react").RefAttributes<HTMLLabelElement>>>;
export declare const ItemControl: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<SegmentGroup.ItemControlProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const ItemHiddenInput: import("react").ForwardRefExoticComponent<SegmentGroup.ItemHiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const ItemText: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<SegmentGroup.ItemTextProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const Label: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<SegmentGroup.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
export { SegmentGroupContext as Context } from '@ark-ui/react/segment-group';
interface Item {
    value: string;
    label: ReactNode;
    disabled?: boolean | undefined;
}
type ItemProps = ComponentProps<typeof Item>;
export interface ItemsProps extends Omit<ItemProps, 'value'> {
    items: Array<string | Item>;
}
export declare const Items: (props: ItemsProps) => import("react/jsx-runtime").JSX.Element[];
//# sourceMappingURL=segment-group.d.ts.map