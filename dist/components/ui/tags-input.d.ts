import { TagsInput } from '@ark-ui/react/tags-input';
import type { ComponentProps } from 'react';
export type RootProps = ComponentProps<typeof Root>;
export type ItemProps = ComponentProps<typeof Item>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<TagsInput.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").TagsInputRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<TagsInput.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").TagsInputRecipe>;
export declare const ClearTrigger: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.ClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
export declare const Control: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const HiddenInput: import("react").ForwardRefExoticComponent<TagsInput.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const Input: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.InputProps & import("react").RefAttributes<HTMLInputElement>>>;
export declare const Item: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.ItemProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const ItemDeleteTrigger: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.ItemDeleteTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
export declare const ItemInput: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.ItemInputProps & import("react").RefAttributes<HTMLInputElement>>>;
export declare const ItemPreview: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.ItemPreviewProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const ItemText: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.ItemTextProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const Label: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TagsInput.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
export { TagsInputContext as Context } from '@ark-ui/react/tags-input';
export interface TagsInputItemsProps extends Omit<ItemProps, 'value' | 'index'> {
}
export declare const Items: (props: TagsInputItemsProps) => import("react/jsx-runtime").JSX.Element[];
//# sourceMappingURL=tags-input.d.ts.map