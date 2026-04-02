import type { ReactNode } from 'react';
export interface ConfirmDialogProps {
    /** Controls dialog visibility. */
    open: boolean;
    /** Called when the dialog requests to close (cancel, backdrop click, escape). */
    onOpenChange: (open: boolean) => void;
    /** Called when the user confirms the action. Dialog closes automatically. */
    onConfirm: () => void;
    /** Dialog title text. */
    title: string;
    /** Body content -- a string renders as a paragraph, or pass arbitrary JSX. */
    children: ReactNode;
    /** Label for the confirm button. Defaults to "Confirm". */
    confirmLabel?: string;
    /** Label for the cancel button. Defaults to "Cancel". */
    cancelLabel?: string;
    /**
     * Visual variant for the confirm button.
     * When `destructive` is true, this is ignored and the `danger` variant is used.
     * Defaults to "solid".
     */
    confirmVariant?: 'solid' | 'outline' | 'wheat' | 'brand';
    /**
     * When true, renders the confirm button with danger styling and shows
     * a coral accent bar at the top of the dialog. Defaults to false.
     */
    destructive?: boolean;
    /** Dialog size. Defaults to "sm". */
    size?: 'xs' | 'sm' | 'md';
    /** Optional className on the root content. */
    className?: string;
}
/**
 * Pre-composed confirmation dialog with cancel/confirm actions.
 *
 * Uses the standard Dialog recipe with an optional accent bar. Destructive
 * actions get a coral gradient bar and the `danger` button variant.
 *
 * @param props - {@link ConfirmDialogProps}
 * @returns A controlled dialog component.
 *
 * @example
 * <ConfirmDialog
 *   open={showDelete}
 *   onOpenChange={setShowDelete}
 *   onConfirm={handleDelete}
 *   title="Delete item"
 *   confirmLabel="Delete"
 *   destructive
 * >
 *   This action cannot be undone.
 * </ConfirmDialog>
 *
 * @example
 * <ConfirmDialog
 *   open={showSave}
 *   onOpenChange={setShowSave}
 *   onConfirm={handleSave}
 *   title="Save changes"
 *   confirmLabel="Save"
 *   confirmVariant="brand"
 * >
 *   Your unsaved changes will be applied.
 * </ConfirmDialog>
 */
export declare function ConfirmDialog({ open, onOpenChange, onConfirm, title, children, confirmLabel, cancelLabel, confirmVariant, destructive, size, className, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=confirm-dialog.d.ts.map