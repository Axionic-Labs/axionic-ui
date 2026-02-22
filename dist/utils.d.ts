import { ClassValue } from 'clsx';

/**
 * Merge Tailwind CSS classes with conflict resolution.
 * @param inputs - Class values to merge
 * @returns Merged class string with Tailwind conflicts resolved
 */
declare function cn(...inputs: ClassValue[]): string;

export { cn };
