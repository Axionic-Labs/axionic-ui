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
export declare const navbarLink: import("@pandacss/types").SlotRecipeConfig;
//# sourceMappingURL=navbar-link.d.ts.map