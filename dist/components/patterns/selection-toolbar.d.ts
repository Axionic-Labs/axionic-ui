import type { ReactNode } from 'react';
export interface SelectionToolbarProps {
    summary: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    chrome?: 'default' | 'soft';
    className?: string;
}
export declare function SelectionToolbar({ summary, description, actions, chrome, className, }: SelectionToolbarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=selection-toolbar.d.ts.map