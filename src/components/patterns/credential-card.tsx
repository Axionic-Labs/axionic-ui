'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface CredentialCardProps {
	icon?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	status?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		padding: { base: '5', md: '6' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
	}),
	header: css({
		display: 'flex',
		flexDirection: { base: 'column', md: 'row' },
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '4',
	}),
	headerCopy: css({
		display: 'flex',
		alignItems: 'center',
		gap: '3.5',
		minWidth: 0,
		width: '100%',
	}),
	iconWrap: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '12',
		borderRadius: 'xl',
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
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
	}),
	status: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
		flexShrink: 0,
		width: { base: '100%', md: 'auto' },
		justifyContent: { base: 'flex-start', md: 'flex-end' },
		flexWrap: 'wrap',
	}),
	body: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		color: 'app.text.muted',
	}),
	footer: css({
		paddingTop: '4',
		borderTopWidth: '1px',
		borderColor: 'app.border',
		color: 'app.text.muted',
	}),
};

export function CredentialCard({
	icon,
	title,
	description,
	status,
	children,
	footer,
	className,
}: CredentialCardProps) {
	return (
		<section className={cx(styles.root, className)}>
			<div className={styles.header}>
				<div className={styles.headerCopy}>
					{icon && <div className={styles.iconWrap}>{icon}</div>}
					<div className={styles.copy}>
						<div className={styles.title}>{title}</div>
						{description && <div className={styles.description}>{description}</div>}
					</div>
				</div>
				{status && <div className={styles.status}>{status}</div>}
			</div>
			{children && <div className={styles.body}>{children}</div>}
			{footer && <div className={styles.footer}>{footer}</div>}
		</section>
	);
}
