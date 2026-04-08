import type { ReactNode } from 'react';
export interface DetailDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: ReactNode;
    description?: ReactNode;
    eyebrow?: ReactNode;
    actions?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}
export declare function DetailDialog({ open, onOpenChange, title, description, eyebrow, actions, children, footer, size, className, }: DetailDialogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=detail-dialog.d.ts.map