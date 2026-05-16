import { type ReactNode } from 'react';
export interface PickerFieldProps {
    title: ReactNode;
    description?: ReactNode;
    leading?: ReactNode;
    badge?: ReactNode;
    open: boolean;
    onToggle: () => void;
    onClose?: () => void;
    disabled?: boolean;
    panelLabel?: ReactNode;
    panel?: ReactNode;
    minWidth?: string;
    size?: 'md' | 'sm';
    chrome?: 'default' | 'soft';
    className?: string;
}
export declare function PickerField({ title, description, leading, badge, open, onToggle, onClose, disabled, panelLabel, panel, minWidth, size, chrome, className, }: PickerFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=picker-field.d.ts.map