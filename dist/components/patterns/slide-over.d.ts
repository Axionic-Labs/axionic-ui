import type { ReactNode } from 'react';
interface SlideOverBaseProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: ReactNode;
    description?: ReactNode;
    eyebrow?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
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
    layout?: 'auto' | 'single' | 'split';
    panelMinWidth?: string;
    panelMaxWidth?: string;
    contentMinWidth?: string;
    contentMaxWidth?: string;
    stackedSplitOrder?: 'aside-main' | 'main-aside';
    hideFooter?: boolean;
    closeButtonTourId?: string;
}
interface SlideOverAutoProps extends SlideOverBaseProps {
    layout?: 'auto';
    aside?: ReactNode;
    asideFooter?: ReactNode;
    asideWidth?: string;
    stackedSplitOrder?: 'aside-main' | 'main-aside';
}
interface SlideOverSingleProps extends SlideOverBaseProps {
    layout: 'single';
    aside?: never;
    asideFooter?: never;
    asideWidth?: never;
}
interface SlideOverSplitProps extends SlideOverBaseProps {
    layout: 'split';
    aside: ReactNode;
    asideFooter?: ReactNode;
    asideWidth?: string;
    stackedSplitOrder?: 'aside-main' | 'main-aside';
}
export type SlideOverProps = SlideOverAutoProps | SlideOverSingleProps | SlideOverSplitProps;
export declare function SlideOver({ open, onOpenChange, title, description, eyebrow, icon, actions, aside, asideFooter, children, size, submitLabel, cancelLabel, submitting, disableSubmit, onSubmit, onCancel, footerHint, footer, className, bodyClassName, layout, panelMinWidth, panelMaxWidth, asideWidth, stackedSplitOrder, contentMinWidth, contentMaxWidth, hideFooter, closeButtonTourId, }: SlideOverProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=slide-over.d.ts.map