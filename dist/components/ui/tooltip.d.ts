import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip';
import { type ComponentProps } from 'react';
type RootProps = ComponentProps<typeof Root>;
type ContentProps = ComponentProps<typeof Content>;
declare const Root: import("styled-system/jsx").StyleContextRootProvider<(props: ArkTooltip.RootProps) => import("react/jsx-runtime").JSX.Element, import("styled-system/recipes").TooltipRecipe>;
declare const Content: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<ArkTooltip.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
export { TooltipContext as Context } from '@ark-ui/react/tooltip';
export interface TooltipProps extends Omit<RootProps, 'content'> {
    showArrow?: boolean;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement | null>;
    children: React.ReactNode | undefined;
    content: React.ReactNode | string;
    contentProps?: ContentProps;
    disabled?: boolean;
}
export declare const Tooltip: import("react").ForwardRefExoticComponent<TooltipProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=tooltip.d.ts.map