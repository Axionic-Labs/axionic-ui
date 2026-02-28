import { cx } from 'styled-system/css';

export { cx };

/**
 * Merges class names, filtering out falsy values.
 * Wrapper around Panda CSS's cx() that accepts undefined, null, and false.
 * Not equivalent to clsx or tailwind-merge — no conflict resolution.
 *
 * @param inputs - Class name strings or falsy values to filter out
 * @returns Merged class string
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
	return cx(...inputs.filter(Boolean));
}
