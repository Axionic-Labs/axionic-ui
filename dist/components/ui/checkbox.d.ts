import { Checkbox } from '@ark-ui/react/checkbox';
import { type ComponentProps } from 'react';
import type { HTMLStyledProps } from 'styled-system/types';
export type RootProps = ComponentProps<typeof Root>;
export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Checkbox.RootProps & import("react").RefAttributes<HTMLLabelElement>>, import("styled-system/recipes").CheckboxRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Checkbox.RootProviderProps & import("react").RefAttributes<HTMLLabelElement>>, import("styled-system/recipes").CheckboxRecipe>;
export declare const Control: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Checkbox.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Group: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Checkbox.GroupProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").CheckboxRecipe>;
export declare const Label: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Checkbox.LabelProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const HiddenInput: import("react").ForwardRefExoticComponent<Checkbox.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export { type CheckboxCheckedState as CheckedState, CheckboxGroupProvider as GroupProvider, } from '@ark-ui/react/checkbox';
export declare const Indicator: import("react").ForwardRefExoticComponent<Omit<HTMLStyledProps<"svg">, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=checkbox.d.ts.map