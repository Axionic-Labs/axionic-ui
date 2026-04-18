'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface ValueFieldProps {
	label?: ReactNode;
	description?: ReactNode;
	value: ReactNode;
	icon?: ReactNode;
	actions?: ReactNode;
	mono?: boolean;
	tone?: 'default' | 'muted';
	chrome?: 'default' | 'soft';
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
		minWidth: 0,
	}),
	labelRow: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '3',
	}),
	labelWrap: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
		minWidth: 0,
	}),
	label: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
	}),
	description: css({
		textStyle: 'caption',
		color: 'app.text.muted',
	}),
	field: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '3',
		paddingX: '3.5',
		paddingY: '3',
		borderRadius: 'xl',
		borderWidth: '1px',
		borderColor: 'app.border',
		boxShadow: '{shadows.panel}',
		minWidth: 0,
	}),
	fieldSoft: css({
		borderWidth: '0',
		boxShadow: 'none',
	}),
	default: css({
		bg: 'app.surface',
	}),
	muted: css({
		bg: 'app.surface.muted',
	}),
	valueWrap: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		minWidth: 0,
		flex: '1 1 auto',
	}),
	icon: css({
		color: 'app.accent',
		flexShrink: 0,
	}),
	value: css({
		textStyle: 'small',
		color: 'app.text',
		minWidth: 0,
		flex: '1 1 auto',
		wordBreak: 'break-word',
	}),
	mono: css({
		fontFamily: 'mono',
	}),
	actions: css({
		display: 'flex',
		alignItems: 'center',
		gap: '1.5',
		flexShrink: 0,
	}),
};

export function ValueField({
	label,
	description,
	value,
	icon,
	actions,
	mono = false,
	tone = 'muted',
	chrome = 'default',
	className,
}: ValueFieldProps) {
	return (
		<div className={cx(styles.root, className)}>
			{(label || description) && (
				<div className={styles.labelRow}>
					<div className={styles.labelWrap}>
						{label && <div className={styles.label}>{label}</div>}
						{description && <div className={styles.description}>{description}</div>}
					</div>
				</div>
			)}
			<div className={cx(styles.field, styles[tone], chrome === 'soft' && styles.fieldSoft)}>
				<div className={styles.valueWrap}>
					{icon && <div className={styles.icon}>{icon}</div>}
					<div className={cx(styles.value, mono && styles.mono)}>{value}</div>
				</div>
				{actions && <div className={styles.actions}>{actions}</div>}
			</div>
		</div>
	);
}
