'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import * as Card from '../ui/card';
import { activateOnEnterOrSpace, type PatternDensity, type PatternTone } from './shared';

export interface EntityCardProps {
	icon?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	meta?: ReactNode;
	actions?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	selected?: boolean;
	accent?: PatternTone;
	density?: PatternDensity;
	variant?: 'default' | 'flat';
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
	rootFlat: css({
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.whisper}',
	}),
	selected: css({
		borderColor: 'app.accent',
		boxShadow: '0 0 0 1px var(--colors-app-accent)',
	}),
	rootHover: css({
		_hover: {
			bg: 'app.surface.muted',
			borderColor: 'app.border.strong',
		},
	}),
	accentBar: css({
		h: '1',
		bg: 'app.accent.soft',
		roundedTop: 'l3',
	}),
	accentBarWheat: css({
		bg: 'wheat.2',
	}),
	accentBarHidden: css({
		display: 'none',
	}),
	body: css({
		padding: '5',
		display: 'flex',
		flexDirection: 'column',
		gap: '4',
		minWidth: 0,
	}),
	bodyFlat: css({
		padding: '6',
		gap: '3.5',
	}),
	bodyCompact: css({
		padding: '4',
		gap: '2.5',
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
	headerCompact: css({
		gap: '3',
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
	iconWrapCompact: css({
		boxSize: '9',
		rounded: 'lg',
	}),
	iconWrapFlat: css({
		borderWidth: '0',
		bg: 'app.canvas.subtle',
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
	titleCompact: css({
		textStyle: 'small',
		fontWeight: '700',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
		lineHeight: '1.45',
	}),
	descriptionCompact: css({
		textStyle: 'caption',
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
	contentCompact: css({
		gap: '2',
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
	density = 'default',
	variant = 'default',
	onClick,
	className,
}: EntityCardProps) {
	const interactive = Boolean(onClick);
	const compact = density === 'compact';
	const flat = variant === 'flat';

	return (
		<Card.Root
			gradient={!flat}
			accent={accent}
			hover={interactive}
			className={cx(
				styles.root,
				flat && styles.rootFlat,
				interactive && styles.rootHover,
				selected && styles.selected,
				className,
			)}
		>
			<div
				className={cx(
					styles.accentBar,
					accent === 'wheat' && styles.accentBarWheat,
					flat && styles.accentBarHidden,
				)}
			/>
			<Card.Body
				className={cx(
					styles.body,
					flat && styles.bodyFlat,
					compact && styles.bodyCompact,
					interactive && styles.interactive,
				)}
				onClick={onClick}
				onKeyDown={(event) => activateOnEnterOrSpace(event, onClick)}
				role={interactive ? 'button' : undefined}
				tabIndex={interactive ? 0 : undefined}
			>
				<div className={cx(styles.header, compact && styles.headerCompact)}>
					<div className={styles.lead}>
						{icon && (
							<div
								className={cx(
									styles.iconWrap,
									flat && styles.iconWrapFlat,
									compact && styles.iconWrapCompact,
								)}
							>
								{icon}
							</div>
						)}
						<div className={styles.copy}>
							<div className={cx(styles.title, compact && styles.titleCompact)}>{title}</div>
							{description && (
								<div className={cx(styles.description, compact && styles.descriptionCompact)}>
									{description}
								</div>
							)}
							{meta && <div className={styles.meta}>{meta}</div>}
						</div>
					</div>
					{actions && <div className={styles.actions}>{actions}</div>}
				</div>
				{children && (
					<div className={cx(styles.content, compact && styles.contentCompact)}>{children}</div>
				)}
				{footer && <div className={styles.footer}>{footer}</div>}
			</Card.Body>
		</Card.Root>
	);
}
