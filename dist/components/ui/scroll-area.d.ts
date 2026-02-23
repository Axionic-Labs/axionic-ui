import { ScrollArea } from '@ark-ui/react/scroll-area';
import type { ComponentProps } from 'react';
export type RootProps = ComponentProps<typeof Root>;
export type ContentProps = ComponentProps<typeof Content>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<ScrollArea.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").ScrollAreaRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<ScrollArea.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").ScrollAreaRecipe>;
export declare const Content: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<ScrollArea.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Corner: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<ScrollArea.CornerProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Thumb: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<ScrollArea.ThumbProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Scrollbar: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<ScrollArea.ScrollbarProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Viewport: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<ScrollArea.ViewportProps & import("react").RefAttributes<HTMLDivElement>>>;
export { ScrollAreaContext as Context } from '@ark-ui/react/scroll-area';
//# sourceMappingURL=scroll-area.d.ts.map