'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { CloseButton } from '../ui/close-button';
import * as Dialog from '../ui/dialog';

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
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	headerRow: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '3',
		minWidth: 0,
		paddingRight: '10',
	}),
	headerCopy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1',
		minWidth: 0,
	}),
	description: css({
		color: 'app.text.muted',
		textStyle: 'small',
		maxWidth: '2xl',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		color: 'app.text.muted',
	}),
};

export function DetailDialog({
	open,
	onOpenChange,
	title,
	description,
	eyebrow,
	actions,
	children,
	footer,
	size = 'lg',
	className,
}: DetailDialogProps) {
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
						{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
						<div className={styles.headerRow}>
							<div className={styles.headerCopy}>
								<Dialog.Title>{title}</Dialog.Title>
								{description && (
									<Dialog.Description className={styles.description}>
										{description}
									</Dialog.Description>
								)}
							</div>
							{actions && <div className={styles.actions}>{actions}</div>}
						</div>
					</Dialog.Header>
					<Dialog.Body className={cx(styles.body)}>{children}</Dialog.Body>
					{footer && <Dialog.Footer>{footer}</Dialog.Footer>}
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}
