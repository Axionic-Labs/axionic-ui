'use client';

import { AlertTriangle, Inbox } from 'lucide-react';
import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { Spinner } from '../ui';
import { SupportPanel } from './support-panel';

export interface StatusStateProps {
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	eyebrow?: ReactNode;
	tone?: 'default' | 'error' | 'warning' | 'loading';
	icon?: ReactNode;
	layout?: 'page' | 'section';
	className?: string;
	panelClassName?: string;
}

const styles = {
	shell: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),
	shellPage: css({
		minH: '60vh',
		px: '4',
	}),
	shellSection: css({
		minH: '13rem',
		px: '1',
		py: '2',
	}),
	panel: css({
		width: '100%',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		boxShadow: 'none',
	}),
	panelPage: css({
		maxW: '38rem',
	}),
	panelSection: css({
		maxW: '34rem',
	}),
	panelError: css({
		borderColor: 'border.error',
	}),
	panelWarning: css({
		borderColor: 'border.warning',
	}),
	aside: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		color: 'app.accent',
		borderRadius: 'full',
	}),
	asidePage: css({
		boxSize: '14',
	}),
	asideSection: css({
		boxSize: '12',
	}),
	asideError: css({
		borderColor: 'border.error',
		bg: 'bg.error',
		color: 'fg.error',
	}),
	asideWarning: css({
		borderColor: 'border.warning',
		bg: 'bg.warning',
		color: 'fg.warning',
	}),
	asideLoading: css({
		color: 'app.accent',
	}),
};

function getDefaultEyebrow(layout: StatusStateProps['layout'], tone: StatusStateProps['tone']) {
	if (tone === 'loading') {
		return 'Loading';
	}

	if (tone === 'error') {
		return 'Attention';
	}

	if (tone === 'warning') {
		return 'Heads up';
	}

	return layout === 'page' ? 'Status' : 'Empty';
}

function getDefaultIcon(layout: StatusStateProps['layout'], tone: StatusStateProps['tone']) {
	if (tone === 'loading') {
		return <Spinner size={layout === 'page' ? 'lg' : 'sm'} />;
	}

	if (tone === 'error' || tone === 'warning') {
		return <AlertTriangle size={18} />;
	}

	return <Inbox size={18} />;
}

export function StatusState({
	title,
	description,
	actions,
	eyebrow,
	tone = 'default',
	icon,
	layout = 'section',
	className,
	panelClassName,
}: StatusStateProps) {
	const pageLayout = layout === 'page';
	const statusIcon = icon ?? getDefaultIcon(layout, tone);

	return (
		<div className={cx(styles.shell, pageLayout ? styles.shellPage : styles.shellSection, className)}>
			<SupportPanel
				eyebrow={eyebrow ?? getDefaultEyebrow(layout, tone)}
				title={title}
				description={description}
				actions={actions}
				aside={
					statusIcon ? (
						<div
							className={cx(
								styles.aside,
								pageLayout ? styles.asidePage : styles.asideSection,
								tone === 'error' && styles.asideError,
								tone === 'warning' && styles.asideWarning,
								tone === 'loading' && styles.asideLoading,
							)}
						>
							{statusIcon}
						</div>
					) : undefined
				}
				className={cx(
					styles.panel,
					pageLayout ? styles.panelPage : styles.panelSection,
					tone === 'error' && styles.panelError,
					tone === 'warning' && styles.panelWarning,
					panelClassName,
				)}
			/>
		</div>
	);
}
