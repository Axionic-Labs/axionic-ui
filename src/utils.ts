import { cx } from 'styled-system/css';

export { cx };

/**
 * Merge class names. Drop-in replacement for clsx + tailwind-merge.
 * Uses Panda CSS's built-in cx() which handles conditional class merging.
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
	return cx(...inputs.filter(Boolean));
}
