import { Switch } from '@ark-ui/react/switch';
import { type ComponentProps, type ReactNode } from 'react';
export type RootProps = ComponentProps<typeof Root>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Switch.RootProps & import("react").RefAttributes<HTMLLabelElement>>, import("styled-system/recipes").SwitchRecipeRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Switch.RootProviderProps & import("react").RefAttributes<HTMLLabelElement>>, import("styled-system/recipes").SwitchRecipeRecipe>;
export declare const Label: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Switch.LabelProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const Thumb: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Switch.ThumbProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const HiddenInput: import("react").ForwardRefExoticComponent<Switch.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const Control: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Switch.ControlProps & import("react").RefAttributes<HTMLSpanElement>>>;
export { SwitchContext as Context } from '@ark-ui/react/switch';
interface IndicatorProps extends ComponentProps<typeof StyledIndicator> {
    fallback?: ReactNode | undefined;
}
declare const StyledIndicator: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & import("@ark-ui/react").PolymorphicProps>>;
export declare const Indicator: import("react").ForwardRefExoticComponent<Omit<IndicatorProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
interface ThumbIndicatorProps extends ComponentProps<typeof StyledThumbIndicator> {
    fallback?: React.ReactNode | undefined;
}
declare const StyledThumbIndicator: import("styled-system/jsx").StyledComponent<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & import("@ark-ui/react").PolymorphicProps>, {}>;
export declare const ThumbIndicator: import("react").ForwardRefExoticComponent<Omit<ThumbIndicatorProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=switch.d.ts.map