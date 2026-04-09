'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { Button } from '../ui/button';
import { CloseButton } from '../ui/close-button';
import * as Dialog from '../ui/dialog';

export interface FormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: ReactNode;
	description?: ReactNode;
	eyebrow?: ReactNode;
	icon?: ReactNode;
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

const styles = {
	accentBar: css({
		h: '3px',
		w: 'full',
		roundedTop: 'l3',
		background:
			'linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})',
	}),
	header: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
	}),
	headerRow: css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '4',
	}),
	headerCopy: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '3.5',
		minWidth: 0,
	}),
	icon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '10',
		rounded: '2xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.accent.soft',
		color: 'app.accent',
		flexShrink: 0,
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1',
		minWidth: 0,
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		maxWidth: '2xl',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
		maxHeight: 'min(72vh, 48rem)',
		overflowY: 'auto',
		paddingRight: '1',
	}),
	footer: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '4',
		flexWrap: 'wrap',
	}),
	footerHint: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: '2.5',
		flexWrap: 'wrap',
		marginLeft: 'auto',
	}),
};

export function FormDialog({
	open,
	onOpenChange,
	title,
	description,
	eyebrow,
	icon,
	children,
	size = 'xl',
	submitLabel = 'Save',
	cancelLabel = 'Cancel',
	submitting = false,
	disableSubmit = false,
	onSubmit,
	onCancel,
	footerHint,
	footer,
	className,
	bodyClassName,
	hideFooter = false,
}: FormDialogProps) {
	return (
		<Dialog.Root open={open} onOpenChange={(details) => onOpenChange(details.open)} size={size}>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content className={className}>
					<div className={styles.accentBar} />
					<Dialog.CloseTrigger asChild>
						<CloseButton size="sm" aria-label="Close dialog" />
					</Dialog.CloseTrigger>
					<Dialog.Header className={styles.header}>
						<div className={styles.headerRow}>
							<div className={styles.headerCopy}>
								{icon && <div className={styles.icon}>{icon}</div>}
								<div className={styles.copy}>
									{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
									<Dialog.Title>{title}</Dialog.Title>
									{description && (
										<Dialog.Description className={styles.description}>
											{description}
										</Dialog.Description>
									)}
								</div>
							</div>
						</div>
					</Dialog.Header>
					<Dialog.Body className={cx(styles.body, bodyClassName)}>{children}</Dialog.Body>
					{!hideFooter &&
						(footer ? (
							<Dialog.Footer>{footer}</Dialog.Footer>
						) : (
							<Dialog.Footer className={styles.footer}>
								{footerHint ? <div className={styles.footerHint}>{footerHint}</div> : <div />}
								<div className={styles.actions}>
									<Button
										variant="outline"
										size="sm"
										onClick={() => {
											onCancel?.();
											onOpenChange(false);
										}}
									>
										{cancelLabel}
									</Button>
									<Button
										variant="brand"
										size="sm"
										onClick={onSubmit}
										disabled={disableSubmit}
										loading={submitting}
									>
										{submitLabel}
									</Button>
								</div>
							</Dialog.Footer>
						))}
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}
