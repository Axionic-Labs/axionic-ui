import { type ReactNode } from 'react';
import { type SelectionListItem } from './selection-list';
export interface SearchPickerDialogItem extends SelectionListItem {
    keywords?: string[];
}
export interface SearchPickerDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: ReactNode;
    description?: ReactNode;
    searchLabel?: string;
    searchPlaceholder?: string;
    value: string | null;
    onValueChange: (value: string) => void;
    items: SearchPickerDialogItem[];
    emptyTitle?: string;
    emptyDescription?: string;
    className?: string;
}
export declare function SearchPickerDialog({ open, onOpenChange, title, description, searchLabel, searchPlaceholder, value, onValueChange, items, emptyTitle, emptyDescription, className, }: SearchPickerDialogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=search-picker-dialog.d.ts.map