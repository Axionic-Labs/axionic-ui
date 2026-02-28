'use client';

import { ark } from '@ark-ui/react/factory';
import { forwardRef, type ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { createStyleContext } from 'styled-system/jsx';
import { helpPanel } from 'styled-system/recipes';

const { withRootProvider, withContext } = createStyleContext(helpPanel);

// Internal slot primitives — not exported
const HeaderContainer = withContext(ark.div, 'header');
const HeaderIconBadge = withContext(ark.div, 'headerIcon');
const AccentBar = withContext(ark.div, 'accentBar');
const TabButton = withContext(ark.button, 'tab');
const FooterContainer = withContext(ark.div, 'footer');

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
 * Sliding panel container. Positioned absolutely to the right edge of its
 * containing block. Includes slide-in animation on mount.
 */
export const Root = withRootProvider(ark.div);
// biome-ignore lint/suspicious/noExplicitAny: displayName is a valid React property
(Root as any).displayName = 'HelpPanel.Root';

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

/**
 * Panel header with icon badge, title/subtitle, and close button.
 * Includes an optional gradient accent bar at the top edge.
 */
const Header = forwardRef<HTMLDivElement, HelpPanelHeaderProps>(
	({ icon, title, subtitle, onClose, closeIcon, accentBar = true, className }, ref) => (
		<HeaderContainer ref={ref} className={className}>
			{accentBar && <AccentBar style={{ top: 0 }} />}
			<div className={css({ display: 'flex', alignItems: 'center', gap: '3' })}>
				{icon && <HeaderIconBadge>{icon}</HeaderIconBadge>}
				<div>
					<h2
						className={css({
							fontSize: 'sm',
							fontWeight: 'semibold',
							color: 'fg.default',
							letterSpacing: 'wide',
						})}
					>
						{title}
					</h2>
					{subtitle && <p className={css({ fontSize: 'xs', color: 'fg.subtle' })}>{subtitle}</p>}
				</div>
			</div>
			{onClose && (
				<button
					onClick={onClose}
					type="button"
					className={css({
						w: '7',
						h: '7',
						borderRadius: 'l1',
						bg: 'bg.subtle',
						borderWidth: '1px',
						borderColor: 'border.default/50',
						color: 'fg.muted',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						transition: 'all',
						_hover: {
							color: 'fg.default',
							borderColor: 'colorPalette.8',
						},
					})}
				>
					{closeIcon ?? (
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-label="Close"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					)}
				</button>
			)}
		</HeaderContainer>
	),
);
Header.displayName = 'HelpPanel.Header';

export interface HelpPanelTabBarProps {
	children: ReactNode;
	className?: string;
}

/**
 * Horizontal tab bar for category navigation. Wraps tab buttons.
 * Recipe slot provides flex layout directly.
 */
export const TabBar = withContext(ark.div, 'tabBar');
// biome-ignore lint/suspicious/noExplicitAny: displayName is a valid React property
(TabBar as any).displayName = 'HelpPanel.TabBar';

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

/**
 * Individual tab button for the help panel category bar.
 * Uses `data-selected` attribute for active state styling.
 */
const Tab = forwardRef<HTMLButtonElement, HelpPanelTabProps>(
	({ active, icon, label, onClick, title, className }, ref) => (
		<TabButton
			ref={ref}
			type="button"
			onClick={onClick}
			title={title}
			data-selected={active ? '' : undefined}
			className={className}
		>
			{icon}
			<span className={css({ display: { base: 'none', sm: 'inline' } })}>{label}</span>
		</TabButton>
	),
);
Tab.displayName = 'HelpPanel.Tab';

export interface HelpPanelContentProps {
	children: ReactNode;
	className?: string;
}

/**
 * Scrollable content area for topic details, shortcut lists, etc.
 */
export const Content = withContext(ark.div, 'content');
// biome-ignore lint/suspicious/noExplicitAny: displayName is a valid React property
(Content as any).displayName = 'HelpPanel.Content';

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

/**
 * Panel footer with hint text and optional shortcut key badge.
 * Includes an optional gradient accent bar at the bottom edge.
 */
const Footer = forwardRef<HTMLDivElement, HelpPanelFooterProps>(
	({ hint, shortcutKey, accentBar = true, children, className }, ref) => (
		<FooterContainer ref={ref} className={className}>
			{accentBar && <AccentBar style={{ bottom: 0, opacity: 0.3 }} />}
			{children ?? (
				<>
					{hint && <span>{hint}</span>}
					{shortcutKey && (
						<kbd
							className={css({
								px: '1.5',
								py: '0.5',
								fontSize: 'xs',
								fontFamily: 'mono',
								bg: 'bg.subtle',
								borderWidth: '1px',
								borderColor: 'border.default/50',
								borderRadius: 'l1',
								color: 'fg.muted',
							})}
						>
							{shortcutKey}
						</kbd>
					)}
				</>
			)}
		</FooterContainer>
	),
);
Footer.displayName = 'HelpPanel.Footer';

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
function SectionHeading({ label, dotColor, className }: HelpPanelSectionHeadingProps) {
	return (
		<h4
			className={cx(
				css({
					display: 'flex',
					alignItems: 'center',
					gap: '2',
					fontSize: 'xs',
					fontWeight: 'semibold',
					textTransform: 'uppercase',
					letterSpacing: 'wide',
					mb: '2',
					color: 'colorPalette.11',
				}),
				className,
			)}
		>
			<span
				className={css({
					w: '1.5',
					h: '1.5',
					borderRadius: 'full',
					bg: 'colorPalette.11',
				})}
				style={dotColor ? { backgroundColor: dotColor } : undefined}
			/>
			{label}
		</h4>
	);
}

export const HelpPanel = {
	Root,
	Header,
	TabBar,
	Tab,
	Content,
	Footer,
	SectionHeading,
};
