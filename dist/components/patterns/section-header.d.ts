import type { ReactNode } from 'react';
import type { PatternTone } from './shared';
export interface SectionHeaderProps {
    /** Section title text */
    title: string;
    /** Icon element to display in a colored badge */
    icon?: ReactNode;
    /** Color variant — determines background tint and icon badge color */
    variant?: PatternTone;
    /** Additional content rendered on the right side (e.g., action buttons) */
    actions?: ReactNode;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Tinted header bar for cards. Provides visual weight with a colored
 * background, icon badge, and title. Use inside a Card.Root with
 * `overflow: 'hidden'` so the tint extends to the card edges.
 *
 * @example
 * ```tsx
 * <Card.Root css={{ overflow: 'hidden' }}>
 *   <SectionHeader title="Active Tools" icon={<Zap size={14} />} variant="teal" />
 *   <Card.Body>...</Card.Body>
 * </Card.Root>
 * ```
 */
export declare function SectionHeader({ title, icon, variant, actions, className, }: SectionHeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=section-header.d.ts.map