import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface PageHeaderProps {
	title: string;
	subtitle?: string;
	badge?: ReactNode;
	action?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '5',
		mb: '10',
	}),
	content: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '3',
	}),
	title: css({
		textStyle: 'pageTitle',
		color: 'app.text',
	}),
	subtitle: css({
		textStyle: 'small',
		color: 'app.text.muted',
		mt: '2.5',
		maxW: '2xl',
	}),
};

export function PageHeader({ title, subtitle, badge, action, className }: PageHeaderProps) {
	return (
		<div className={cx(styles.root, className)}>
			<div>
				<div className={styles.content}>
					<h1 className={styles.title}>{title}</h1>
					{badge}
				</div>
				{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			</div>
			{action}
		</div>
	);
}
