'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface PageIntroProps {
	eyebrow?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	children?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
	}),
	row: css({
		display: 'flex',
		flexDirection: { base: 'column', lg: 'row' },
		alignItems: { base: 'flex-start', lg: 'flex-end' },
		justifyContent: 'space-between',
		gap: '5',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
		maxWidth: '3xl',
	}),
	eyebrow: css({
		textStyle: 'eyebrow',
		color: 'app.text.subtle',
	}),
	title: css({
		textStyle: 'pageTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '2xl',
	}),
	meta: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
		color: 'app.text.muted',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '2.5',
	}),
	children: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
	}),
};

export function PageIntro({
	eyebrow,
	title,
	description,
	meta,
	actions,
	children,
	className,
}: PageIntroProps) {
	return (
		<div className={cx(styles.root, className)}>
			<div className={styles.row}>
				<div className={styles.copy}>
					{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
					<div className={styles.title}>{title}</div>
					{description && <div className={styles.description}>{description}</div>}
					{meta && <div className={styles.meta}>{meta}</div>}
				</div>
				{actions && <div className={styles.actions}>{actions}</div>}
			</div>
			{children && <div className={styles.children}>{children}</div>}
		</div>
	);
}
