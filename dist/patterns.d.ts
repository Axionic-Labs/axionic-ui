import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { C as Card } from './card-D2jp9PYW.js';

/**
 * Interactive card for quick actions with icon, title, description.
 * Composes shadcn Card + CardContent. Accessible via keyboard.
 * @param icon - Icon element (rendered in colored badge)
 * @param iconBg - Background color for icon badge
 * @param iconColor - Icon color
 * @param title - Action title
 * @param description - Action description
 * @param onClick - Click handler
 */
declare function ActionCard({ icon, iconBg, iconColor, title, description, onClick, className, ...props }: Omit<React.ComponentProps<typeof Card>, 'children'> & {
    icon: React.ReactNode;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    onClick?: () => void;
}): react_jsx_runtime.JSX.Element;

/**
 * Centered empty state with icon, heading, body text, and optional CTA.
 * @param icon - Decorative icon
 * @param title - Heading text
 * @param description - Body text
 * @param action - Optional CTA element (button, link, etc.)
 */
declare function EmptyState({ icon, title, description, action, className, ...props }: Omit<React.ComponentProps<'div'>, 'children'> & {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

/**
 * Feature card with icon, title, and description.
 * Uses feature-hover CSS class for background tint on hover.
 * @param icon - Icon element
 * @param title - Feature title
 * @param description - Feature description
 */
declare function FeatureCard({ icon, title, description, className, ...props }: React.ComponentProps<'div'> & {
    icon?: React.ReactNode;
    title: string;
    description: string;
}): react_jsx_runtime.JSX.Element;

declare const variantStyles: {
    readonly wheat: {
        readonly backgroundColor: "rgba(230, 182, 133, 0.15)";
        readonly color: "var(--color-accent-gold)";
    };
    readonly teal: {
        readonly backgroundColor: "var(--color-badge-teal)";
        readonly color: "var(--color-teal-500)";
    };
    readonly success: {
        readonly backgroundColor: "var(--color-badge-success)";
        readonly color: "var(--color-success)";
    };
    readonly error: {
        readonly backgroundColor: "rgba(220, 38, 38, 0.08)";
        readonly color: "var(--color-error)";
    };
    readonly muted: {
        readonly backgroundColor: "var(--color-page-bg-alt)";
        readonly color: "var(--color-teal-500)";
    };
};
/**
 * Colored icon in a rounded background. Used in stat cards, action cards, etc.
 * @param icon - Icon element to render
 * @param variant - Color scheme: 'wheat' | 'teal' | 'success' | 'error' | 'muted'
 * @param size - Badge size: 'sm' | 'md' | 'lg'
 */
declare function IconBadge({ icon, variant, size, className, ...props }: Omit<React.ComponentProps<'span'>, 'children'> & {
    icon: React.ReactNode;
    variant?: keyof typeof variantStyles;
    size?: 'sm' | 'md' | 'lg';
}): react_jsx_runtime.JSX.Element;

/**
 * Metric card with icon badge, large value, label, and optional trend badge.
 * Composes shadcn Card + CardContent.
 * @param icon - Icon element (rendered in colored badge)
 * @param iconBg - Background color for icon badge
 * @param iconColor - Icon color
 * @param value - Large metric value
 * @param label - Description below value
 * @param badge - Optional trend/status text
 * @param badgeColor - Badge text color
 * @param badgeBg - Badge background color
 */
declare function StatCard({ icon, iconBg, iconColor, label, value, badge, badgeColor, badgeBg, className, ...props }: Omit<React.ComponentProps<typeof Card>, 'children'> & {
    icon: React.ReactNode;
    iconBg: string;
    iconColor: string;
    label: string;
    value: string;
    badge?: string;
    badgeColor?: string;
    badgeBg?: string;
}): react_jsx_runtime.JSX.Element;

/**
 * Numbered step with title and description.
 * Used in workflow/pipeline visualizations.
 * @param step - Step number
 * @param title - Step title
 * @param description - Step description
 * @param icon - Optional icon override for the numbered badge
 */
declare function StepCard({ step, title, description, icon, className, ...props }: React.ComponentProps<'div'> & {
    step: number;
    title: string;
    description?: string;
    icon?: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

export { ActionCard, EmptyState, FeatureCard, IconBadge, StatCard, StepCard };
