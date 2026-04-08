'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

type CreditPillTone = 'default' | 'accent' | 'success' | 'warning';

export interface CreditPillProps {
	label?: string;
	value: ReactNode;
	detail?: ReactNode;
	icon?: ReactNode;
	tone?: CreditPillTone;
	className?: string;
}

const styles = {
	root: css({
		display: 'inline-flex',
		alignItems: 'center',
		gap: '3',
		minHeight: '11',
		paddingLeft: '3',
		paddingRight: '3.5',
		borderRadius: 'full',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		boxShadow: '{shadows.panel}',
	}),
	icon: css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSize: '8',
		borderRadius: 'full',
		bg: 'app.surface.muted',
		color: 'app.accent',
	}),
	text: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5',
	}),
	label: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
	}),
	valueRow: css({
		display: 'flex',
		alignItems: 'baseline',
		gap: '2',
	}),
	value: css({
		textStyle: 'toolbarLabel',
		color: 'app.text',
	}),
	detail: css({
		textStyle: 'small',
		color: 'app.text.muted',
	}),
};

const toneStyles: Record<CreditPillTone, string> = {
	default: css({}),
	accent: css({
		bg: 'app.accent.soft',
		borderColor: 'app.border.strong',
	}),
	success: css({
		bg: 'bg.success',
		borderColor: 'border.success',
	}),
	warning: css({
		bg: 'bg.warning',
		borderColor: 'border.warning',
	}),
};

export function CreditPill({
	label = 'Credits',
	value,
	detail,
	icon,
	tone = 'default',
	className,
}: CreditPillProps) {
	return (
		<div className={cx(styles.root, toneStyles[tone], className)}>
			{icon && <span className={styles.icon}>{icon}</span>}
			<span className={styles.text}>
				<span className={styles.label}>{label}</span>
				<span className={styles.valueRow}>
					<span className={styles.value}>{value}</span>
					{detail && <span className={styles.detail}>{detail}</span>}
				</span>
			</span>
		</div>
	);
}
