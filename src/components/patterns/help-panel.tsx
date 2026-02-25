'use client'

import { type ReactNode, forwardRef } from 'react'
import { css, cx } from 'styled-system/css'

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
	children: ReactNode
	className?: string
}

/**
 * Sliding panel container. Positioned absolutely to the right edge of its
 * containing block. Includes slide-in animation on mount.
 */
const Root = forwardRef<HTMLDivElement, HelpPanelRootProps>(
	({ children, className }, ref) => (
		<div
			ref={ref}
			className={cx(
				css({
					position: 'absolute',
					top: '0',
					right: '0',
					zIndex: 40,
					h: 'full',
					w: '96',
					bgGradient: 'to-b',
					gradientFrom: 'bg.subtle',
					gradientTo: 'bg.default',
					borderLeftWidth: '1px',
					borderColor: 'border.default',
					display: 'flex',
					flexDirection: 'column',
					boxShadow: '2xl',
					overflow: 'hidden',
					animation: 'slide-in-right 200ms ease-out',
				}),
				className,
			)}
		>
			{children}
		</div>
	),
)
Root.displayName = 'HelpPanel.Root'

export interface HelpPanelHeaderProps {
	/** Icon rendered in the header badge */
	icon?: ReactNode
	/** Panel title */
	title: string
	/** Subtitle text below the title */
	subtitle?: string
	/** Close button handler */
	onClose?: () => void
	/** Close button icon (defaults to an X) */
	closeIcon?: ReactNode
	/** Whether to show the gradient accent bar at the top */
	accentBar?: boolean
	className?: string
}

/**
 * Panel header with icon badge, title/subtitle, and close button.
 * Includes an optional gradient accent bar at the top edge.
 */
const Header = forwardRef<HTMLDivElement, HelpPanelHeaderProps>(
	({ icon, title, subtitle, onClose, closeIcon, accentBar = true, className }, ref) => (
		<div
			ref={ref}
			className={cx(
				css({
					position: 'relative',
					px: '4',
					py: '3',
					borderBottomWidth: '1px',
					borderColor: 'border.default',
					bg: 'bg.default',
				}),
				className,
			)}
		>
			{accentBar && (
				<div
					className={css({
						position: 'absolute',
						insetInline: '0',
						top: '0',
						h: '0.5',
						bgGradient: 'to-r',
						gradientFrom: 'colorPalette.7',
						gradientVia: 'colorPalette.9',
						gradientTo: 'colorPalette.11',
					})}
				/>
			)}
			<div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
				<div className={css({ display: 'flex', alignItems: 'center', gap: '3' })}>
					{icon && (
						<div
							className={css({
								w: '8',
								h: '8',
								borderRadius: 'l2',
								bg: 'colorPalette.a3',
								borderWidth: '1px',
								borderColor: 'colorPalette.8',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'colorPalette.11',
							})}
						>
							{icon}
						</div>
					)}
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
						{subtitle && (
							<p className={css({ fontSize: 'xs', color: 'fg.subtle' })}>
								{subtitle}
							</p>
						)}
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
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						)}
					</button>
				)}
			</div>
		</div>
	),
)
Header.displayName = 'HelpPanel.Header'

export interface HelpPanelTabBarProps {
	children: ReactNode
	className?: string
}

/**
 * Horizontal tab bar for category navigation. Wraps tab buttons.
 */
const TabBar = forwardRef<HTMLDivElement, HelpPanelTabBarProps>(
	({ children, className }, ref) => (
		<div
			ref={ref}
			className={cx(
				css({
					px: '2',
					py: '2',
					bg: 'bg.default',
					borderBottomWidth: '1px',
					borderColor: 'border.default/50',
				}),
				className,
			)}
		>
			<div className={css({ display: 'flex', flexWrap: 'wrap', gap: '1' })}>
				{children}
			</div>
		</div>
	),
)
TabBar.displayName = 'HelpPanel.TabBar'

export interface HelpPanelTabProps {
	/** Whether this tab is currently selected */
	active?: boolean
	/** Tab icon (rendered before label) */
	icon?: ReactNode
	/** Tab label text */
	label: string
	/** Click handler */
	onClick?: () => void
	/** Optional tooltip */
	title?: string
	className?: string
}

/**
 * Individual tab button for the help panel category bar.
 * Uses `data-selected` attribute for active state styling.
 */
const Tab = forwardRef<HTMLButtonElement, HelpPanelTabProps>(
	({ active, icon, label, onClick, title, className }, ref) => (
		<button
			ref={ref}
			type="button"
			onClick={onClick}
			title={title}
			data-selected={active ? '' : undefined}
			className={cx(
				css({
					display: 'flex',
					alignItems: 'center',
					gap: '1.5',
					px: '2.5',
					py: '1.5',
					borderRadius: 'l2',
					fontSize: 'xs',
					fontWeight: 'medium',
					transition: 'all',
					borderWidth: '1px',
					cursor: 'pointer',
					color: 'fg.subtle',
					borderColor: 'transparent',
					_hover: {
						color: 'fg.default',
						bg: 'bg.emphasized',
					},
					'&[data-selected]': {
						bg: 'colorPalette.a3',
						color: 'colorPalette.11',
						borderColor: 'colorPalette.8',
					},
				}),
				className,
			)}
		>
			{icon}
			<span className={css({ display: { base: 'none', sm: 'inline' } })}>{label}</span>
		</button>
	),
)
Tab.displayName = 'HelpPanel.Tab'

export interface HelpPanelContentProps {
	children: ReactNode
	className?: string
}

/**
 * Scrollable content area for topic details, shortcut lists, etc.
 */
const Content = forwardRef<HTMLDivElement, HelpPanelContentProps>(
	({ children, className }, ref) => (
		<div
			ref={ref}
			className={cx(
				css({ flex: '1', overflowY: 'auto' }),
				className,
			)}
		>
			{children}
		</div>
	),
)
Content.displayName = 'HelpPanel.Content'

export interface HelpPanelFooterProps {
	/** Hint text displayed on the left */
	hint?: string
	/** Keyboard shortcut key displayed on the right */
	shortcutKey?: string
	/** Whether to show the gradient accent bar at the bottom */
	accentBar?: boolean
	children?: ReactNode
	className?: string
}

/**
 * Panel footer with hint text and optional shortcut key badge.
 * Includes an optional gradient accent bar at the bottom edge.
 */
const Footer = forwardRef<HTMLDivElement, HelpPanelFooterProps>(
	({ hint, shortcutKey, accentBar = true, children, className }, ref) => (
		<div
			ref={ref}
			className={cx(
				css({
					position: 'relative',
					px: '4',
					py: '2.5',
					borderTopWidth: '1px',
					borderColor: 'border.default',
					bg: 'bg.default',
				}),
				className,
			)}
		>
			{accentBar && (
				<div
					className={css({
						position: 'absolute',
						insetInline: '0',
						bottom: '0',
						h: '0.5',
						bgGradient: 'to-r',
						gradientFrom: 'colorPalette.7',
						gradientVia: 'colorPalette.9',
						gradientTo: 'colorPalette.11',
						opacity: 0.3,
					})}
				/>
			)}
			{children ?? (
				<div
					className={css({
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						fontSize: 'xs',
						color: 'fg.subtle',
					})}
				>
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
				</div>
			)}
		</div>
	),
)
Footer.displayName = 'HelpPanel.Footer'

export interface HelpPanelSectionHeadingProps {
	/** Label text */
	label: string
	/** Dot color (CSS value or Panda token reference) */
	dotColor?: string
	className?: string
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
	)
}

export const HelpPanel = {
	Root,
	Header,
	TabBar,
	Tab,
	Content,
	Footer,
	SectionHeading,
}
