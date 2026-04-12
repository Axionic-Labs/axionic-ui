import type { ReactNode } from 'react';
export interface NamedPromptListItem {
    key: string;
    value: string;
}
export interface NamedPromptListProps {
    title: ReactNode;
    description?: ReactNode;
    items: NamedPromptListItem[];
    onAdd: () => void;
    onRemove: (key: string) => void;
    onKeyChange: (oldKey: string, newKey: string) => void;
    onValueChange: (key: string, value: string) => void;
    keyLabel?: string;
    valueLabel?: string;
    keyPlaceholder?: string;
    valuePlaceholder?: string;
    emptyTitle?: string;
    emptyDescription?: string;
}
export declare function NamedPromptList({ title, description, items, onAdd, onRemove, onKeyChange, onValueChange, keyLabel, valueLabel, keyPlaceholder, valuePlaceholder, emptyTitle, emptyDescription, }: NamedPromptListProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=named-prompt-list.d.ts.map