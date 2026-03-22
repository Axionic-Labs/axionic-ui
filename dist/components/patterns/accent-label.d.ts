import type { ReactNode } from 'react';
export interface AccentLabelProps {
    /** Label text */
    children: ReactNode;
    /** Color variant for the left accent bar */
    variant?: 'teal' | 'wheat';
    /** Additional CSS classes */
    className?: string;
}
/**
 * Uppercase label with a colored left accent bar. Used for sub-section
 * headings within cards (e.g., "TRAINING MODE", "DATA GENERATION").
 *
 * @example
 * ```tsx
 * <AccentLabel variant="teal">Training Mode</AccentLabel>
 * ```
 */
export declare function AccentLabel({ children, variant, className }: AccentLabelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=accent-label.d.ts.map