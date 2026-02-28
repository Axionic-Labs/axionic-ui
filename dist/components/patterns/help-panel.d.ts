import { type ReactNode } from 'react';
/**
 * Props for the HelpPanel root container.
 *
 * @example
 * ```tsx
 * <HelpPanel.Root>
 *   <HelpPanel.Header ... />
 *   <HelpPanel.TabBar>...</HelpPanel.TabBar>
 *   <HelpPanel.Content>...</HelpPanel.Content>
 *   <HelpPanel.Footer ... />
 * </HelpPanel.Root>
 * ```
 */
export interface HelpPanelRootProps {
    children: ReactNode;
    className?: string;
}
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
    Root: import("react").ForwardRefExoticComponent<HelpPanelRootProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<HelpPanelHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    TabBar: import("react").ForwardRefExoticComponent<HelpPanelTabBarProps & import("react").RefAttributes<HTMLDivElement>>;
    Tab: import("react").ForwardRefExoticComponent<HelpPanelTabProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<HelpPanelContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<HelpPanelFooterProps & import("react").RefAttributes<HTMLDivElement>>;
    SectionHeading: typeof SectionHeading;
};
export {};
//# sourceMappingURL=help-panel.d.ts.map