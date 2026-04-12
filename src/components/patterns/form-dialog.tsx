'use client';

import { Portal } from '@ark-ui/react/portal';
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

const styles = {
	header: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3.5',
	}),
	headerRow: css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '4.5',
	}),
	headerCopy: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '4',
		minWidth: 0,
	}),
	icon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '11',
		rounded: '2xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
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
		maxWidth: '42rem',
		lineHeight: '1.65',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
		maxHeight: 'min(72vh, 48rem)',
		overflowY: 'auto',
		paddingRight: '1',
	}),
	splitShell: css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', lg: '22rem minmax(0, 1fr)' },
		minHeight: { lg: '40rem' },
	}),
	splitAside: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '4.5',
		padding: { base: '5.5', md: '6.5' },
		background: 'app.surface.muted',
		borderBottomWidth: { base: '1px', lg: '0' },
		borderRightWidth: { base: '0', lg: '1px' },
		borderColor: 'app.border',
	}),
	splitMain: css({
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		minWidth: 0,
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
		maxWidth: '26rem',
	}),
	closeButton: css({
		position: 'absolute',
		top: '4',
		right: '4',
		zIndex: 2,
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: '2',
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
	aside,
	asideFooter,
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
	const renderedFooter = footer ? (
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
	);

	const renderedHeader = (
		<Dialog.Header className={styles.header}>
			<div className={styles.headerRow}>
				<div className={styles.headerCopy}>
					{icon && <div className={styles.icon}>{icon}</div>}
					<div className={styles.copy}>
						{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
						<Dialog.Title>{title}</Dialog.Title>
						{description && (
							<Dialog.Description className={styles.description}>{description}</Dialog.Description>
						)}
					</div>
				</div>
			</div>
		</Dialog.Header>
	);

	return (
		<Dialog.Root open={open} onOpenChange={(details) => onOpenChange(details.open)} size={size}>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content className={className}>
						{aside ? (
							<div className={styles.splitShell}>
								<div className={styles.splitAside}>
									<div>{aside}</div>
									{asideFooter}
								</div>
								<div className={styles.splitMain}>
									<Dialog.CloseTrigger asChild>
										<CloseButton
											className={styles.closeButton}
											size="sm"
											aria-label="Close dialog"
										/>
									</Dialog.CloseTrigger>
									{renderedHeader}
									<Dialog.Body className={cx(styles.body, bodyClassName)}>{children}</Dialog.Body>
									{!hideFooter && renderedFooter}
								</div>
							</div>
						) : (
							<>
								<Dialog.CloseTrigger asChild>
									<CloseButton className={styles.closeButton} size="sm" aria-label="Close dialog" />
								</Dialog.CloseTrigger>
								{renderedHeader}
								<Dialog.Body className={cx(styles.body, bodyClassName)}>{children}</Dialog.Body>
								{!hideFooter && renderedFooter}
							</>
						)}
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}
