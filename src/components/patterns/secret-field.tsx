'use client';

import { Check, Copy, Eye, EyeOff } from 'lucide-react';
import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { IconButton } from '../ui/icon-button';

export interface SecretFieldProps {
	label?: ReactNode;
	description?: ReactNode;
	value: ReactNode;
	revealed?: boolean;
	onToggleReveal?: () => void;
	onCopy?: () => void;
	copied?: boolean;
	actions?: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '2.5',
	}),
	labelRow: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '3',
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
		bg: 'app.surface',
		boxShadow: '{shadows.panel}',
	}),
	value: css({
		flex: '1 1 auto',
		minWidth: 0,
		fontFamily: 'mono',
		textStyle: 'small',
		color: 'app.text',
		wordBreak: 'break-all',
	}),
	actionRow: css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '1.5',
		flexShrink: 0,
	}),
	iconButton: css({
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface.muted',
		color: 'app.text.muted',
		_hover: {
			bg: 'app.surface',
			borderColor: 'app.border.strong',
			color: 'app.text',
		},
	}),
};

export function SecretField({
	label,
	description,
	value,
	revealed = false,
	onToggleReveal,
	onCopy,
	copied = false,
	actions,
	className,
}: SecretFieldProps) {
	return (
		<div className={cx(styles.root, className)}>
			{(label || description) && (
				<div className={styles.labelRow}>
					<div>
						{label && <div className={styles.label}>{label}</div>}
						{description && <div className={styles.description}>{description}</div>}
					</div>
				</div>
			)}
			<div className={styles.field}>
				<div className={styles.value}>{value}</div>
				<div className={styles.actionRow}>
					{actions}
					{onToggleReveal && (
						<IconButton
							variant="ghost"
							size="sm"
							onClick={onToggleReveal}
							title={revealed ? 'Hide secret value' : 'Show secret value'}
							aria-label={revealed ? 'Hide secret value' : 'Show secret value'}
							className={styles.iconButton}
						>
							{revealed ? <EyeOff size={14} /> : <Eye size={14} />}
						</IconButton>
					)}
					{onCopy && (
						<IconButton
							variant="ghost"
							size="sm"
							onClick={onCopy}
							title="Copy to clipboard"
							aria-label="Copy to clipboard"
							className={styles.iconButton}
						>
							{copied ? <Check size={14} /> : <Copy size={14} />}
						</IconButton>
					)}
				</div>
			</div>
		</div>
	);
}
