import type { ReactNode } from 'react';
export interface PageTitleProps {
    /** Page title text */
    children: ReactNode;
    /** Optional subtitle/description below the title */
    subtitle?: string;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Page-level heading component. Renders a bold h1 with optional subtitle.
 * Uses the color palette for the title and muted color for the subtitle.
 *
 * @example
 * ```tsx
 * <PageTitle subtitle="Configure your training pipeline">New Model</PageTitle>
 * ```
 */
export declare function PageTitle({ children, subtitle, className }: PageTitleProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=page-title.d.ts.map