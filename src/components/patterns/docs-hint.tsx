'use client';

import { ArrowUpRight, BookOpen } from 'lucide-react';
import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface DocsHintProps {
	label?: ReactNode;
	href: string;
	linkLabel: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '2',
		flexWrap: 'wrap',
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	link: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '1.5',
		color: 'app.accent',
		textDecoration: 'none',
		transition: 'opacity 160ms ease',
		_hover: {
			opacity: 0.85,
		},
	}),
	icon: css({
		color: 'app.text.subtle',
	}),
};

export function DocsHint({
	label = 'Formatting reference',
	href,
	linkLabel,
	className,
}: DocsHintProps) {
	return (
		<div className={cx(styles.root, className)}>
			<BookOpen size={14} className={styles.icon} />
			<span>{label}</span>
			<a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
				{linkLabel}
				<ArrowUpRight size={13} />
			</a>
		</div>
	);
}
