import type { ReactNode } from 'react';
export interface SelectionListItem {
    value: string;
    label: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    endSlot?: ReactNode;
    disabled?: boolean;
}
export interface SelectionListProps {
    items: SelectionListItem[];
    value: string | null;
    onValueChange: (value: string) => void;
    density?: 'default' | 'compact';
    chrome?: 'default' | 'soft';
    className?: string;
}
export declare function SelectionList({ items, value, onValueChange, density, chrome, className, }: SelectionListProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=selection-list.d.ts.map