'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface UtilityPanelProps {
	title: ReactNode;
	subtitle?: ReactNode;
	icon?: ReactNode;
	controls?: ReactNode;
	children: ReactNode;
	footer?: ReactNode;
	draggable?: boolean;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		borderRadius: '2xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		background: 'app.surface',
		boxShadow: '{shadows.float}',
		overflow: 'hidden',
	}),
	header: css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '3',
		paddingX: '4.5',
		paddingY: '3.5',
		borderBottomWidth: '1px',
		borderColor: 'app.border',
		background: 'app.surface.muted',
	}),
	headerDraggable: css({
		cursor: 'grab',
	}),
	headerMain: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '3',
		minWidth: 0,
	}),
	iconWrap: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '10',
		borderRadius: 'xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		background: 'app.surface',
		color: 'app.accent',
		flexShrink: 0,
	}),
	headerCopy: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	subtitle: css({
		textStyle: 'small',
		color: 'app.text.subtle',
		lineHeight: '1.5',
	}),
	controls: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '1.5',
		flexShrink: 0,
	}),
	body: css({
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		minHeight: 0,
	}),
	footer: css({
		paddingX: '4',
		paddingY: '3',
		borderTopWidth: '1px',
		borderColor: 'app.border',
		background: 'app.surface.muted',
	}),
};

export function UtilityPanel({
	title,
	subtitle,
	icon,
	controls,
	children,
	footer,
	draggable = false,
	className,
}: UtilityPanelProps) {
	return (
		<section className={cx(styles.root, className)}>
			<div className={cx(styles.header, draggable && styles.headerDraggable)}>
				<div className={styles.headerMain}>
					{icon && <div className={styles.iconWrap}>{icon}</div>}
					<div className={styles.headerCopy}>
						<div className={styles.title}>{title}</div>
						{subtitle && <div className={styles.subtitle}>{subtitle}</div>}
					</div>
				</div>
				{controls && <div className={styles.controls}>{controls}</div>}
			</div>
			<div className={styles.body}>{children}</div>
			{footer && <div className={styles.footer}>{footer}</div>}
		</section>
	);
}
