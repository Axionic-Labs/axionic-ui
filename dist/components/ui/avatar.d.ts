import { Avatar } from '@ark-ui/react/avatar';
import { type ComponentProps } from 'react';
export type RootProps = ComponentProps<typeof Root>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Avatar.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").AvatarRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Avatar.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").AvatarRecipe>;
export declare const Image: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Avatar.ImageProps & import("react").RefAttributes<HTMLImageElement>>>;
export { AvatarContext as Context } from '@ark-ui/react/avatar';
export interface FallbackProps extends ComponentProps<typeof StyledFallback> {
    /**
     * The name to derive the initials from.
     * If not provided, the fallback will display a generic icon.
     */
    name?: string | undefined;
}
declare const StyledFallback: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Avatar.FallbackProps & import("react").RefAttributes<HTMLSpanElement>>>;
export declare const Fallback: import("react").ForwardRefExoticComponent<Omit<FallbackProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=avatar.d.ts.map