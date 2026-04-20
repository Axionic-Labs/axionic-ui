'use client';

import { Portal } from '@ark-ui/react/portal';
import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { Button, CloseButton, Drawer } from '../ui';

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

const widthBySize = {
	md: '34rem',
	lg: '44rem',
	xl: '58rem',
} as const;

const styles = {
	backdrop: css({
		bg: 'rgba(16, 20, 22, 0.18)',
		backdropFilter: 'none',
		_open: {
			animationDuration: '240ms',
		},
		_closed: {
			animationDuration: '180ms',
		},
	}),
	positioner: css({
		position: 'fixed',
		inset: '0',
		zIndex: 'modal',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'stretch',
		pointerEvents: 'none',
	}),
	content: css({
		width: '100%',
		height: { base: '100dvh', lg: 'calc(100dvh - 1.5rem)' },
		maxW: widthBySize.xl,
		my: { base: '0', lg: '3' },
		mr: { base: '0', lg: '3' },
		rounded: { base: '0', lg: '2xl' },
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.float}',
		overflow: 'hidden',
		pointerEvents: 'auto',
		willChange: 'transform, opacity',
		_open: {
			animationName: {
				base: 'slide-from-right-full, fade-in',
				_rtl: 'slide-from-left-full, fade-in',
			},
			animationDuration: '440ms',
			animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
		},
		_closed: {
			animationName: {
				base: 'slide-to-right-full, fade-out',
				_rtl: 'slide-to-left-full, fade-out',
			},
			animationDuration: '320ms',
			animationTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
		},
	}),
	header: css({
		display: 'grid',
		gap: '3',
		borderBottomWidth: '1px',
		borderBottomColor: 'app.border',
		px: { base: '5', md: '6' },
		pt: { base: '5', md: '6' },
		pb: '4',
	}),
	headerRow: css({
		display: 'grid',
		gap: '3',
		gridTemplateColumns: { base: '1fr', md: 'minmax(0, 1fr) auto' },
		alignItems: 'start',
		minWidth: 0,
	}),
	headerCopy: css({
		display: 'flex',
		gap: '3',
		minWidth: 0,
	}),
	icon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '11',
		rounded: '2xl',
		bg: 'app.surface.muted',
		borderWidth: '1px',
		borderColor: 'app.border',
		color: 'app.accent',
		flexShrink: 0,
	}),
	copy: css({
		display: 'grid',
		gap: '1.5',
		minWidth: 0,
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		lineHeight: '1.65',
		maxW: '38rem',
	}),
	actions: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2',
		justifySelf: { base: 'start', md: 'end' },
	}),
	closeButton: css({
		position: 'absolute',
		top: '4',
		right: '4',
		zIndex: 2,
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
		flex: '1',
		minH: 0,
		overflowY: 'auto',
		px: { base: '5', md: '6' },
		py: '5',
	}),
	splitShell: css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', xl: '18rem minmax(0, 1fr)' },
		height: '100%',
		minH: 0,
	}),
	splitAside: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '5',
		bg: 'app.canvas.subtle',
		borderRightWidth: { base: '0', xl: '1px' },
		borderBottomWidth: { base: '1px', xl: '0' },
		borderColor: 'app.border',
		px: { base: '5', md: '6' },
		py: { base: '5', md: '6' },
		minH: 0,
	}),
	splitMain: css({
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		minWidth: 0,
		minH: 0,
	}),
	footer: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '4',
		flexWrap: 'wrap',
		borderTopWidth: '1px',
		borderTopColor: 'app.border',
		px: { base: '5', md: '6' },
		py: '4',
	}),
	footerHint: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		maxW: '24rem',
	}),
	footerActions: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2',
		marginLeft: 'auto',
	}),
};

export function SlideOver({
	open,
	onOpenChange,
	title,
	description,
	eyebrow,
	icon,
	actions,
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
	closeButtonTourId,
}: SlideOverProps) {
	const renderedFooter = footer ? (
		<Drawer.Footer>{footer}</Drawer.Footer>
	) : (
		<Drawer.Footer className={styles.footer}>
			{footerHint ? <div className={styles.footerHint}>{footerHint}</div> : <div />}
			<div className={styles.footerActions}>
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
				{onSubmit ? (
					<Button
						variant="brand"
						size="sm"
						onClick={onSubmit}
						disabled={disableSubmit}
						loading={submitting}
					>
						{submitLabel}
					</Button>
				) : null}
			</div>
		</Drawer.Footer>
	);

	return (
		<Drawer.Root
			open={open}
			onOpenChange={(details) => {
				onOpenChange(details.open);
			}}
			size="full"
			closeOnInteractOutside
			lazyMount
			unmountOnExit
		>
			<Portal>
				<Drawer.Backdrop className={styles.backdrop} />
				<Drawer.Positioner className={styles.positioner}>
					<Drawer.Content
						className={cx(styles.content, className)}
						style={{ maxWidth: widthBySize[size] }}
					>
						<div className={styles.splitShell}>
							{aside ? (
								<aside className={styles.splitAside}>
									<div>{aside}</div>
									{asideFooter ? <div>{asideFooter}</div> : null}
								</aside>
							) : null}
							<div className={styles.splitMain}>
								<CloseButton
									className={styles.closeButton}
									data-tour={closeButtonTourId}
									onClick={() => {
										onCancel?.();
										onOpenChange(false);
									}}
								/>
								<header className={styles.header}>
									<div className={styles.headerRow}>
										<div className={styles.headerCopy}>
											{icon ? <div className={styles.icon}>{icon}</div> : null}
											<div className={styles.copy}>
												{eyebrow ? (
													<div className={styles.eyebrow}>
														<Drawer.Title>{eyebrow}</Drawer.Title>
													</div>
												) : null}
												<div>
													<Drawer.Title>{title}</Drawer.Title>
												</div>
												{description ? (
													<Drawer.Description className={styles.description}>
														{description}
													</Drawer.Description>
												) : null}
											</div>
										</div>
										{actions ? <div className={styles.actions}>{actions}</div> : null}
									</div>
								</header>
								<Drawer.Body className={cx(styles.body, bodyClassName)}>{children}</Drawer.Body>
								{hideFooter ? null : renderedFooter}
							</div>
						</div>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}
