import { type ReactNode } from 'react';
/**
 * Props for the HelpPanel root container.
 *
 * @example
 * ```tsx
 * <HelpPanel.Root>
 *   <HelpPanel.Header title="Help" onClose={close} />
 *   <HelpPanel.TabBar>
 *     <HelpPanel.Tab label="Overview" active />
 *   </HelpPanel.TabBar>
 *   <HelpPanel.Content>...</HelpPanel.Content>
 *   <HelpPanel.Footer hint="Press ? to open" />
 * </HelpPanel.Root>
 * ```
 */
export interface HelpPanelRootProps {
    children: ReactNode;
    className?: string;
}
/**
 * Panel container with visual styling (background, border, shadow, flex column).
 * Positioning, dimensions, and animation are left to the consumer.
 */
export declare const Root: import("styled-system/jsx").StyleContextRootProvider<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>, import("styled-system/recipes").HelpPanelRecipe>;
export interface HelpPanelHeaderProps {
    /** Icon rendered in the header badge */
    icon?: ReactNode;
    /** Panel title */
    title: string;
    /** Subtitle text below the title */
    subtitle?: string;
    /** Close button handler */
    onClose?: () => void;
    /** Close button icon (defaults to an X) */
    closeIcon?: ReactNode;
    /** Whether to show the gradient accent bar at the top */
    accentBar?: boolean;
    className?: string;
}
export interface HelpPanelTabBarProps {
    children: ReactNode;
    className?: string;
}
/**
 * Horizontal tab bar for category navigation. Wraps tab buttons.
 * Recipe slot provides flex layout directly.
 */
export declare const TabBar: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>>;
export interface HelpPanelTabProps {
    /** Whether this tab is currently selected */
    active?: boolean;
    /** Tab icon (rendered before label) */
    icon?: ReactNode;
    /** Tab label text */
    label: string;
    /** Click handler */
    onClick?: () => void;
    /** Optional tooltip */
    title?: string;
    className?: string;
}
export interface HelpPanelContentProps {
    children: ReactNode;
    className?: string;
}
/**
 * Scrollable content area for topic details, shortcut lists, etc.
 */
export declare const Content: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>>;
export interface HelpPanelFooterProps {
    /** Hint text displayed on the left */
    hint?: string;
    /** Keyboard shortcut key displayed on the right */
    shortcutKey?: string;
    /** Whether to show the gradient accent bar at the bottom */
    accentBar?: boolean;
    children?: ReactNode;
    className?: string;
}
export interface HelpPanelSectionHeadingProps {
    /** Label text */
    label: string;
    /** Dot color (CSS value or Panda token reference) */
    dotColor?: string;
    className?: string;
}
/**
 * Section heading with a colored dot indicator. Used for option/detail/example
 * sections within the content area.
 */
declare function SectionHeading({ label, dotColor, className }: HelpPanelSectionHeadingProps): import("react/jsx-runtime").JSX.Element;
export declare const HelpPanel: {
    Root: import("styled-system/jsx").StyleContextRootProvider<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>, import("styled-system/recipes").HelpPanelRecipe>;
    Header: import("react").ForwardRefExoticComponent<HelpPanelHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    TabBar: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>>;
    Tab: import("react").ForwardRefExoticComponent<HelpPanelTabProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>>;
    Footer: import("react").ForwardRefExoticComponent<HelpPanelFooterProps & import("react").RefAttributes<HTMLDivElement>>;
    SectionHeading: typeof SectionHeading;
};
export {};
//# sourceMappingURL=help-panel.d.ts.map