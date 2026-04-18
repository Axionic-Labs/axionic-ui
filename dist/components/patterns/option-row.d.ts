import type { ReactNode } from 'react';
export interface OptionRowProps {
    title: ReactNode;
    description?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
    selected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    chrome?: 'default' | 'soft';
    className?: string;
}
export declare function OptionRow({ title, description, leading, trailing, selected, onClick, disabled, chrome, className, }: OptionRowProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=option-row.d.ts.map