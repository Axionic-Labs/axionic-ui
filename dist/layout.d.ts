import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

/**
 * Standard page section with consistent vertical padding and centered container.
 * @param size - Container max-width: 'sm' | 'md' | 'lg' (default 'lg')
 * @param noPadding - Remove default vertical padding
 */
declare function Section({ children, className, size, noPadding, ...props }: React.ComponentProps<'section'> & {
    size?: 'sm' | 'md' | 'lg';
    noPadding?: boolean;
}): react_jsx_runtime.JSX.Element;

/**
 * Section with forced dark-section tokens and Rich Black background.
 * Content inside always uses light-mode brand tokens regardless of system theme.
 * @param size - Container max-width: 'sm' | 'md' | 'lg' (default 'lg')
 */
declare function DarkSection({ children, className, size, ...props }: React.ComponentProps<'section'> & {
    size?: 'sm' | 'md' | 'lg';
}): react_jsx_runtime.JSX.Element;

/**
 * Two-column layout with configurable ratio.
 * Stacks vertically on mobile, splits at lg breakpoint.
 * @param left - Left column content
 * @param right - Right column content
 * @param ratio - Column ratio: '1:3' | '2:3' | '1:1' | '2:5' (default '1:1')
 * @param reverse - Reverse column order on mobile
 * @param gap - Gap size (default 'gap-8 lg:gap-12')
 */
declare function SplitSection({ left, right, ratio, reverse, gap, className, ...props }: Omit<React.ComponentProps<'div'>, 'children'> & {
    left: React.ReactNode;
    right: React.ReactNode;
    ratio?: '1:3' | '2:3' | '1:1' | '2:5';
    reverse?: boolean;
    gap?: string;
}): react_jsx_runtime.JSX.Element;

/**
 * Standardized page/section header with optional label, title, subtitle, and CTA area.
 * @param label - Uppercase label above title (e.g. "THE FUTURE OF AI")
 * @param title - Main heading text
 * @param subtitle - Descriptive text below title
 * @param align - Horizontal alignment: 'center' (default) | 'left'
 * @param children - Optional content below subtitle (CTAs, etc.)
 */
declare function PageHeader({ label, title, subtitle, align, children, className, ...props }: React.ComponentProps<'div'> & {
    label?: string;
    title: string;
    subtitle?: string;
    align?: 'center' | 'left';
}): react_jsx_runtime.JSX.Element;

export { DarkSection, PageHeader, Section, SplitSection };
