import { type ReactElement } from 'react';
export interface IconPickerProps {
    /** Current selected icon name (PascalCase lucide name) */
    value: string;
    /** Called with the new icon name when user selects */
    onChange: (name: string) => void;
    /** Additional class for the trigger button */
    className?: string;
}
/**
 * Searchable icon picker popover backed by the lucide-react icon set.
 * Shows ~80 curated icons by default; typing in the search input
 * filters all 1600+ lucide icons (first 60 matches shown).
 */
export declare function IconPicker({ value, onChange, className }: IconPickerProps): ReactElement;
//# sourceMappingURL=icon-picker.d.ts.map