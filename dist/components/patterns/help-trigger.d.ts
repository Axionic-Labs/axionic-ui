import { type ReactNode } from 'react';
export interface HelpTriggerProps {
    /** Whether the help panel is currently visible */
    active: boolean;
    /** Called when the trigger area is hovered while the panel is visible */
    onActivate: () => void;
    children: ReactNode;
}
/**
 * Zero-layout wrapper that fires `onActivate` on mouseenter when `active`
 * is true (i.e. the help panel is open). Uses `display: contents` so it
 * does not affect the layout of its children.
 *
 * @example
 * ```tsx
 * <HelpTrigger active={helpPanelVisible} onActivate={() => setTopic('tool-schemas')}>
 *   <UploadArea />
 * </HelpTrigger>
 * ```
 */
export declare function HelpTrigger({ active, onActivate, children }: HelpTriggerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=help-trigger.d.ts.map