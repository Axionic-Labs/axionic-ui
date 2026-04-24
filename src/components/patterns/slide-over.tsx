'use client';

import { Portal } from '@ark-ui/react/portal';
import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { Button, CloseButton, Drawer } from '../ui';

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
	hideFooter?: boolean;
	closeButtonTourId?: string;
}

interface SlideOverAutoProps extends SlideOverBaseProps {
	layout?: 'auto';
	aside?: ReactNode;
	asideFooter?: ReactNode;
	asideWidth?: string;
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
}

export type SlideOverProps = SlideOverAutoProps | SlideOverSingleProps | SlideOverSplitProps;

const widthBySize = {
	md: '38rem',
	lg: '50rem',
	xl: '66rem',
} as const;

const defaultAsideWidth = '16.5rem';

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
		'--slide-over-panel-min-width': '0px',
		'--slide-over-panel-max-width': widthBySize.xl,
		'--slide-over-stacked-min-width': '0px',
		'--slide-over-stacked-max-width': widthBySize.xl,
		'--slide-over-aside-width': defaultAsideWidth,
		width: {
			base: '100vw',
			lg: 'min(calc(100vw - 1.5rem), var(--slide-over-stacked-max-width))',
			xl: 'min(calc(100vw - 1.5rem), var(--slide-over-panel-max-width))',
		},
		minW: {
			base: '100vw',
			lg: 'min(calc(100vw - 1.5rem), var(--slide-over-stacked-min-width))',
			xl: 'min(calc(100vw - 1.5rem), var(--slide-over-panel-min-width))',
		},
		height: { base: '100dvh', lg: 'calc(100dvh - 1.5rem)' },
		maxW: {
			base: '100vw',
			lg: 'var(--slide-over-stacked-max-width)',
			xl: 'var(--slide-over-panel-max-width)',
		},
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
		px: { base: '1.375rem', md: '1.625rem' },
		pt: { base: '1.375rem', md: '1.625rem' },
		pb: '1.125rem',
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
		gap: '1.375rem',
		flex: '1',
		minH: 0,
		overflowY: 'auto',
		px: { base: '1.375rem', md: '1.625rem' },
		py: { base: '1.375rem', md: '1.5rem' },
	}),
	splitShell: css({
		display: 'grid',
		gridTemplateColumns: {
			base: '1fr',
			xl: 'var(--slide-over-aside-width) minmax(0, 1fr)',
		},
		height: '100%',
		minH: 0,
	}),
	splitAside: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '1.125rem',
		bg: 'app.surface',
		borderRightWidth: { base: '0', xl: '1px' },
		borderBottomWidth: { base: '1px', xl: '0' },
		borderColor: 'app.border',
		px: { base: '1.375rem', md: '1.625rem' },
		py: { base: '1.375rem', md: '1.625rem' },
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
		px: { base: '1.375rem', md: '1.625rem' },
		py: '1.125rem',
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
	layout = 'auto',
	panelMinWidth,
	panelMaxWidth,
	asideWidth,
	contentMinWidth,
	contentMaxWidth,
	hideFooter = false,
	closeButtonTourId,
}: SlideOverProps) {
	const resolvedAsideWidth = asideWidth ?? defaultAsideWidth;
	const resolvedLayout =
		layout === 'split'
			? aside
				? 'split'
				: 'single'
			: layout === 'single'
				? 'single'
				: aside
					? 'split'
					: 'single';
	const resolvedPanelMaxWidth =
		panelMaxWidth ??
		(contentMaxWidth
			? resolvedLayout === 'split'
				? `calc(${contentMaxWidth} + ${resolvedAsideWidth})`
				: contentMaxWidth
			: widthBySize[size]);
	const resolvedPanelMinWidth =
		panelMinWidth ??
		(contentMinWidth
			? resolvedLayout === 'split'
				? `calc(${contentMinWidth} + ${resolvedAsideWidth})`
				: contentMinWidth
			: '0px');
	const resolvedStackedMaxWidth =
		resolvedLayout === 'split' && contentMaxWidth ? contentMaxWidth : resolvedPanelMaxWidth;
	const resolvedStackedMinWidth =
		resolvedLayout === 'split' && contentMinWidth ? contentMinWidth : resolvedPanelMinWidth;
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

	const renderedHeader = (
		<Drawer.Header className={styles.header}>
			<div className={styles.headerRow}>
				<div className={styles.headerCopy}>
					{icon ? <div className={styles.icon}>{icon}</div> : null}
					<div className={styles.copy}>
						{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
						<Drawer.Title>{title}</Drawer.Title>
						{description ? (
							<Drawer.Description className={styles.description}>{description}</Drawer.Description>
						) : null}
					</div>
				</div>
				{actions ? <div className={styles.actions}>{actions}</div> : null}
			</div>
		</Drawer.Header>
	);

	return (
		<Drawer.Root
			open={open}
			onOpenChange={(details) => onOpenChange(details.open)}
			placement="end"
			size={resolvedLayout === 'split' ? 'full' : size}
		>
			<Portal>
				<Drawer.Backdrop className={styles.backdrop} />
				<Drawer.Positioner className={styles.positioner}>
					<Drawer.Content
						style={{
							['--slide-over-panel-min-width' as string]: resolvedPanelMinWidth,
							['--slide-over-panel-max-width' as string]: resolvedPanelMaxWidth,
							['--slide-over-stacked-min-width' as string]: resolvedStackedMinWidth,
							['--slide-over-stacked-max-width' as string]: resolvedStackedMaxWidth,
							['--slide-over-aside-width' as string]: resolvedAsideWidth,
						}}
						className={cx(styles.content, className)}
					>
						{resolvedLayout === 'split' && aside ? (
							<div className={styles.splitShell}>
								<div className={styles.splitAside}>
									<div>{aside}</div>
									{asideFooter}
								</div>
								<div className={styles.splitMain}>
									<Drawer.CloseTrigger asChild>
										<CloseButton
											data-tour-id={closeButtonTourId}
											className={styles.closeButton}
											size="sm"
											aria-label="Close panel"
										/>
									</Drawer.CloseTrigger>
									{renderedHeader}
									<Drawer.Body className={cx(styles.body, bodyClassName)}>{children}</Drawer.Body>
									{hideFooter ? null : renderedFooter}
								</div>
							</div>
						) : (
							<>
								<Drawer.CloseTrigger asChild>
									<CloseButton
										data-tour-id={closeButtonTourId}
										className={styles.closeButton}
										size="sm"
										aria-label="Close panel"
									/>
								</Drawer.CloseTrigger>
								{renderedHeader}
								<Drawer.Body className={cx(styles.body, bodyClassName)}>{children}</Drawer.Body>
								{hideFooter ? null : renderedFooter}
							</>
						)}
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}
