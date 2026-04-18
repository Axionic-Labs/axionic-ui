'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface FormSectionProps {
	title: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	children: ReactNode;
	tone?: 'default' | 'subtle' | 'accent';
	chrome?: 'default' | 'soft';
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3.5',
		padding: { base: '4.5', md: '5' },
		borderRadius: '2xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
	}),
	rootSoft: css({
		borderWidth: '0',
		boxShadow: 'none',
	}),
	subtle: css({
		bg: 'app.surface',
	}),
	accent: css({
		bg: 'app.accent.soft',
		borderColor: 'app.border.strong',
	}),
	header: css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '3',
		flexWrap: 'wrap',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
		minWidth: 0,
	}),
	title: css({
		textStyle: 'caption',
		fontWeight: 'semibold',
		color: 'app.text',
		letterSpacing: '0.02em',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		lineHeight: '1.6',
		maxWidth: '36rem',
	}),
	actions: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
		flexWrap: 'wrap',
	}),
};

export function FormSection({
	title,
	description,
	actions,
	children,
	tone = 'default',
	chrome = 'default',
	className,
}: FormSectionProps) {
	return (
		<section
			className={cx(
				styles.root,
				chrome === 'soft' && styles.rootSoft,
				tone !== 'default' && styles[tone],
				className,
			)}
		>
			<div className={styles.header}>
				<div className={styles.copy}>
					<div className={styles.title}>{title}</div>
					{description && <div className={styles.description}>{description}</div>}
				</div>
				{actions && <div className={styles.actions}>{actions}</div>}
			</div>
			{children}
		</section>
	);
}
