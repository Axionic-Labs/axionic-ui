'use client';

import { Portal } from '@ark-ui/react/portal';
import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { Button } from '../ui/button';
import * as Dialog from '../ui/dialog';

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

const accentBar = css({
	h: '3px',
	w: 'full',
	roundedTop: 'l3',
});

const tealGradient = css({
	background:
		'linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})',
});

const dangerGradient = css({
	background: 'linear-gradient(90deg, {colors.fg.error}, {colors.fg.warning})',
});

const bodyText = css({
	textStyle: 'sm',
	color: 'fg.muted',
	lineHeight: '1.6',
});

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
export function ConfirmDialog({
	open,
	onOpenChange,
	onConfirm,
	title,
	children,
	confirmLabel = 'Confirm',
	cancelLabel = 'Cancel',
	confirmVariant = 'solid',
	destructive = false,
	size = 'sm',
	className,
}: ConfirmDialogProps) {
	return (
		<Dialog.Root open={open} onOpenChange={(details) => onOpenChange(details.open)} size={size}>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content className={className}>
						<div className={cx(accentBar, destructive ? dangerGradient : tealGradient)} />
						<Dialog.Header>
							<Dialog.Title>{title}</Dialog.Title>
						</Dialog.Header>
						<Dialog.Body>
							{typeof children === 'string' ? <p className={bodyText}>{children}</p> : children}
						</Dialog.Body>
						<Dialog.Footer>
							<Dialog.CloseTrigger asChild>
								<Button variant="outline" size="sm">
									{cancelLabel}
								</Button>
							</Dialog.CloseTrigger>
							<Button
								variant={destructive ? 'danger' : confirmVariant}
								size="sm"
								onClick={() => {
									onOpenChange(false);
									onConfirm();
								}}
							>
								{confirmLabel}
							</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}
