import type { ReactNode } from 'react';
export interface PricingCardProps {
    name: string;
    description?: string;
    price: string;
    interval?: string;
    badge?: string;
    /** Badge text color (CSS value) */
    badgeColor?: string;
    /** Badge background color (CSS value) */
    badgeBg?: string;
    /** Override accent color for name text (CSS value) */
    accentColor?: string;
    highlight?: boolean;
    /** Slot for action button(s) at bottom */
    action?: ReactNode;
    /** List of feature descriptions */
    features?: string[];
    className?: string;
}
export declare function PricingCard({ name, description, price, interval, badge, badgeColor, badgeBg, accentColor, highlight, action, features, className, }: PricingCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=pricing-card.d.ts.map