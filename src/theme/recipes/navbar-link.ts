import { defineSlotRecipe } from '@pandacss/dev';

/**
 * Slot recipe for navbar link items with animated wheat underline.
 *
 * Slots:
 * - `trigger`: the anchor or button element — carries the underline animation,
 *   active highlight, and (when `dropdown: true`) button-reset flex layout.
 * - `chevron`: icon inside a dropdown trigger — rotates 180° when open.
 *
 * Usage:
 * ```tsx
 * import { navbarLink } from 'styled-system/recipes';
 *
 * const styles = navbarLink({ active: isCurrentRoute, dropdown: true });
 *
 * // Add data-group to the trigger so _groupOpen fires on the chevron
 * <button data-group className={styles.trigger}>
 *   Label
 *   <ChevronDown className={styles.chevron} />
 * </button>
 *
 * // Plain link (no dropdown)
 * <Link className={navbarLink({ active: isCurrentRoute }).trigger}>About</Link>
 * ```
 */
export const navbarLink = defineSlotRecipe({
	className: 'navbar-link',
	slots: ['trigger', 'chevron'],

	base: {
		trigger: {
			position: 'relative',
			color: 'teal.11',
			fontWeight: '500',
			letterSpacing: '0.01em',
			transition: 'color 0.2s ease',
			// Wheat underline bar — grows from centre on hover
			_after: {
				content: '""',
				position: 'absolute',
				bottom: '-2px',
				left: '50%',
				width: '0',
				height: '2px',
				bg: 'wheat.9',
				borderRadius: '1px',
				transition: 'width 0.25s ease, left 0.25s ease',
			},
			_hover: {
				color: 'teal.12',
				_after: {
					width: '60%',
					left: '20%',
				},
			},
		},
		chevron: {
			transition: 'transform 0.2s ease',
			// Rotates when an ancestor with data-group has data-state="open"
			// Requires data-group on the trigger element (standard Park UI pattern)
			_groupOpen: {
				transform: 'rotate(180deg)',
			},
		},
	},

	variants: {
		/**
		 * Marks this item as the active/current route.
		 * Shows a full-width underline and slightly bolder text.
		 */
		active: {
			true: {
				trigger: {
					color: 'teal.12',
					fontWeight: '600',
					_after: {
						width: '100%',
						left: '0',
					},
				},
			},
		},

		/**
		 * Adds dropdown trigger styling: flex row layout, button chrome reset,
		 * and underline persistence while the mouse travels into the open panel.
		 */
		dropdown: {
			true: {
				trigger: {
					display: 'flex',
					alignItems: 'center',
					gap: '1',
					background: 'none',
					border: 'none',
					cursor: 'pointer',
					fontFamily: 'inherit',
					// Keep the underline visible while hovering the open panel
					_open: {
						_after: {
							width: '60%',
							left: '20%',
						},
					},
				},
			},
		},
	},

	/**
	 * active + dropdown: when the trigger is open, preserve the full-width
	 * active underline instead of falling back to the hover-width (60%).
	 */
	compoundVariants: [
		{
			active: true,
			dropdown: true,
			css: {
				trigger: {
					_open: {
						_after: {
							width: '100%',
							left: '0',
						},
					},
				},
			},
		},
	],

	defaultVariants: {
		active: false,
		dropdown: false,
	},
});
