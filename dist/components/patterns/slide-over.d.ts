import type { ReactNode } from 'react';
export interface SlideOverProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: ReactNode;
    description?: ReactNode;
    eyebrow?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
    aside?: ReactNode;
    asideFooter?: ReactNode;
    children: ReactNode;
    size?: 'md' | 'lg' | 'xl';
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
    closeButtonTourId?: string;
}
export declare function SlideOver({ open, onOpenChange, title, description, eyebrow, icon, actions, aside, asideFooter, children, size, submitLabel, cancelLabel, submitting, disableSubmit, onSubmit, onCancel, footerHint, footer, className, bodyClassName, hideFooter, closeButtonTourId, }: SlideOverProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=slide-over.d.ts.map