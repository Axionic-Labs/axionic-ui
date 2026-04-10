import type { ReactNode } from 'react';
export interface FormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: ReactNode;
    description?: ReactNode;
    eyebrow?: ReactNode;
    icon?: ReactNode;
    aside?: ReactNode;
    asideFooter?: ReactNode;
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    submitLabel?: ReactNode;
    cancelLabel?: ReactNode;
    submitting?: boolean;
    disableSubmit?: boolean;
    onSubmit?: () => void;
    onCancel?: () => void;
    footerHint?: ReactNode;
    footer?: ReactNode;
    className?: string;
    bodyClassName?: string;
    hideFooter?: boolean;
}
export declare function FormDialog({ open, onOpenChange, title, description, eyebrow, icon, aside, asideFooter, children, size, submitLabel, cancelLabel, submitting, disableSubmit, onSubmit, onCancel, footerHint, footer, className, bodyClassName, hideFooter, }: FormDialogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-dialog.d.ts.map