'use client';

import type { KeyboardEvent, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import * as Card from '../ui/card';

export interface EntityCardProps {
	icon?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	selected?: boolean;
	accent?: 'teal' | 'wheat';
	onClick?: () => void;
	className?: string;
}

const styles = {
	root: css({
		overflow: 'hidden',
		borderColor: 'app.border',
		bg: 'app.surface',
		transition: 'all 160ms ease',
	}),
	selected: css({
		bg: 'app.accent.soft',
		borderColor: 'app.border.strong',
		borderLeftWidth: '3px',
		borderLeftColor: 'app.accent',
	}),
	rootHover: css({
		_hover: {
			bg: 'app.surface.muted',
			borderColor: 'app.border.strong',
		},
	}),
	accentBar: css({
		h: '1.5',
		bg: 'app.accent.soft',
		roundedTop: 'l3',
	}),
	accentBarWheat: css({
		bg: 'wheat.2',
	}),
	body: css({
		padding: '5',
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		minWidth: 0,
	}),
	interactive: css({
		cursor: 'pointer',
		userSelect: 'none',
		outline: 'none',
	}),
	header: css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: '4',
	}),
	lead: css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '3',
		flex: '1',
		minWidth: 0,
	}),
	iconWrap: css({
		boxSize: '10',
		rounded: 'xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
		color: 'app.accent',
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1',
		minWidth: 0,
		flex: '1',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		lineHeight: '1.45',
	}),
	meta: css({
		display: 'flex',
		alignItems: 'center',
		gap: '3',
		flexWrap: 'wrap',
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		flexWrap: 'wrap',
		flexShrink: 0,
		marginLeft: '2',
	}),
	content: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
		minWidth: 0,
	}),
	footer: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2.5',
		paddingTop: '2',
		borderTopWidth: '1px',
		borderColor: 'app.border',
	}),
};

function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, onClick?: () => void) {
	if (!onClick) return;
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onClick();
	}
}

export function EntityCard({
	icon,
	title,
	description,
	meta,
	actions,
	children,
	footer,
	selected = false,
	accent = 'teal',
	onClick,
	className,
}: EntityCardProps) {
	const interactive = Boolean(onClick);

	return (
		<Card.Root
			gradient
			accent={accent}
			hover={interactive}
			className={cx(
				styles.root,
				interactive && styles.rootHover,
				selected && styles.selected,
				className,
			)}
		>
			<div className={cx(styles.accentBar, accent === 'wheat' && styles.accentBarWheat)} />
			<Card.Body
				className={cx(styles.body, interactive && styles.interactive)}
				onClick={onClick}
				onKeyDown={(event) => handleKeyDown(event, onClick)}
				role={interactive ? 'button' : undefined}
				tabIndex={interactive ? 0 : undefined}
			>
				<div className={styles.header}>
					<div className={styles.lead}>
						{icon && <div className={styles.iconWrap}>{icon}</div>}
						<div className={styles.copy}>
							<div className={styles.title}>{title}</div>
							{description && <div className={styles.description}>{description}</div>}
							{meta && <div className={styles.meta}>{meta}</div>}
						</div>
					</div>
					{actions && <div className={styles.actions}>{actions}</div>}
				</div>
				{children && <div className={styles.content}>{children}</div>}
				{footer && <div className={styles.footer}>{footer}</div>}
			</Card.Body>
		</Card.Root>
	);
}
