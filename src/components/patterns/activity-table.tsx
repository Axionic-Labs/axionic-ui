'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface ActivityTableColumn {
	key: string;
	label: ReactNode;
	width?: string;
	align?: 'start' | 'center' | 'end';
}

export interface ActivityTableRow {
	id: string;
	cells: Record<string, ReactNode>;
	onClick?: () => void;
}

export interface ActivityTableProps {
	title?: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
	columns: ActivityTableColumn[];
	rows: ActivityTableRow[];
	emptyState?: ReactNode;
	bodyMaxHeight?: string;
	className?: string;
}

const styles = {
	root: css({
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		overflow: 'hidden',
	}),
	header: css({
		display: 'flex',
		alignItems: { base: 'flex-start', md: 'center' },
		justifyContent: 'space-between',
		flexDirection: { base: 'column', md: 'row' },
		gap: '4',
		paddingX: { base: '4.5', md: '5.5' },
		paddingY: { base: '4.5', md: '5' },
		borderBottomWidth: '1px',
		borderColor: 'app.border',
	}),
	titleBlock: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.5',
	}),
	title: css({
		textStyle: 'sectionTitle',
		color: 'app.text',
	}),
	description: css({
		textStyle: 'small',
		color: 'app.text.muted',
	}),
	tableWrap: css({
		overflowX: 'auto',
	}),
	table: css({
		width: 'full',
		borderCollapse: 'collapse',
	}),
	headCell: css({
		paddingX: { base: '4.5', md: '5.5' },
		paddingY: '3',
		textStyle: 'metricLabel',
		color: 'app.text.subtle',
		textAlign: 'left',
		borderBottomWidth: '1px',
		borderColor: 'app.border',
		bg: 'transparent',
	}),
	row: css({
		borderBottomWidth: '1px',
		borderColor: 'app.border',
		_last: {
			borderBottomWidth: '0',
		},
	}),
	rowInteractive: css({
		cursor: 'pointer',
		transition: 'background-color 160ms ease',
		_hover: {
			bg: 'app.canvas.subtle',
		},
	}),
	cell: css({
		paddingX: { base: '4.5', md: '5.5' },
		paddingY: '3.5',
		textStyle: 'small',
		color: 'app.text.muted',
		verticalAlign: 'middle',
	}),
	empty: css({
		paddingX: { base: '4.5', md: '5.5' },
		paddingY: '10',
		textStyle: 'body',
		color: 'app.text.muted',
	}),
};

const alignMap = {
	start: 'left',
	center: 'center',
	end: 'right',
} as const;

export function ActivityTable({
	title,
	description,
	actions,
	columns,
	rows,
	emptyState,
	bodyMaxHeight,
	className,
}: ActivityTableProps) {
	return (
		<section className={cx(styles.root, className)}>
			{(title || description || actions) && (
				<div className={styles.header}>
					<div className={styles.titleBlock}>
						{title && <div className={styles.title}>{title}</div>}
						{description && <div className={styles.description}>{description}</div>}
					</div>
					{actions}
				</div>
			)}
			<div
				className={styles.tableWrap}
				style={
					bodyMaxHeight
						? {
								maxHeight: bodyMaxHeight,
								overflowY: 'auto',
							}
						: undefined
				}
			>
				<table className={styles.table}>
					<thead>
						<tr>
							{columns.map((column) => (
								<th
									key={column.key}
									className={styles.headCell}
									style={{
										textAlign: alignMap[column.align ?? 'start'],
										width: column.width,
									}}
								>
									{column.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows.length === 0 ? (
							<tr>
								<td className={styles.empty} colSpan={columns.length}>
									{emptyState ?? 'No activity to show yet.'}
								</td>
							</tr>
						) : (
							rows.map((row) => (
								<tr
									key={row.id}
									className={cx(styles.row, row.onClick && styles.rowInteractive)}
									onClick={row.onClick}
									role={row.onClick ? 'button' : undefined}
									onKeyDown={(event) => {
										if (!row.onClick) {
											return;
										}
										if (event.key === 'Enter' || event.key === ' ') {
											event.preventDefault();
											row.onClick();
										}
									}}
									tabIndex={row.onClick ? 0 : undefined}
								>
									{columns.map((column) => (
										<td
											key={column.key}
											className={styles.cell}
											style={{ textAlign: alignMap[column.align ?? 'start'] }}
										>
											{row.cells[column.key]}
										</td>
									))}
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
}
