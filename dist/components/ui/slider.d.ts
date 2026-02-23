import { Slider } from '@ark-ui/react/slider';
import { type ComponentProps } from 'react';
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Slider.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").SliderRecipe>;
export declare const Control: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const DraggingIndicator: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.DraggingIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const Label: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
export declare const Marker: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.MarkerProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const MarkerIndicator: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>>;
export declare const MarkerGroup: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.MarkerGroupProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Range: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.RangeProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Thumb: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.ThumbProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Track: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.TrackProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const ValueText: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.ValueTextProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const HiddenInput: import("react").ForwardRefExoticComponent<Slider.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export { SliderContext as Context } from '@ark-ui/react/slider';
export type RootProps = ComponentProps<typeof Root>;
export type MarkerGroupProps = ComponentProps<typeof MarkerGroup>;
export type ThumbProps = ComponentProps<typeof Thumb>;
export interface MarksProps extends MarkerGroupProps {
    marks?: Array<number | {
        value: number;
        label: React.ReactNode;
    }> | undefined;
}
export declare const Marks: import("react").ForwardRefExoticComponent<Omit<MarksProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const Thumbs: (props: Omit<ThumbProps, "index">) => import("react/jsx-runtime").JSX.Element[];
//# sourceMappingURL=slider.d.ts.map