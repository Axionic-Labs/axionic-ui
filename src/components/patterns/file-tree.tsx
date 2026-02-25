'use client';

import { type ReactNode, useCallback, useState } from 'react';
import { css, cx } from 'styled-system/css';

export interface FileTreeNode {
	id: string;
	name: string;
	type: 'file' | 'folder';
	children?: FileTreeNode[];
	/** Override the default type icon */
	icon?: ReactNode;
}

export interface FileTreeProps {
	nodes: FileTreeNode[];
	onSelect?: (node: FileTreeNode) => void;
	selectedId?: string;
	/** Folder IDs to expand by default */
	defaultExpanded?: string[];
	className?: string;
}

const styles = {
	root: css({
		overflow: 'auto',
	}),
	node: css({
		display: 'flex',
		alignItems: 'center',
		gap: '1.5',
		py: '1',
		px: '2',
		cursor: 'pointer',
		rounded: 'l1',
		textStyle: 'sm',
		color: 'fg.default',
		transition: 'background 0.1s',
		userSelect: 'none',
		_hover: {
			bg: 'gray.subtle.bg',
		},
	}),
	nodeSelected: css({
		bg: 'colorPalette.2',
		color: 'colorPalette.11',
		_hover: {
			bg: 'colorPalette.3',
		},
	}),
	chevron: css({
		flexShrink: 0,
		w: '3.5',
		h: '3.5',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'fg.muted',
	}),
	chevronPlaceholder: css({
		flexShrink: 0,
		w: '3.5',
	}),
	folderIcon: css({
		flexShrink: 0,
		w: '3.5',
		h: '3.5',
		color: 'colorPalette.9',
	}),
	fileIcon: css({
		flexShrink: 0,
		w: '3.5',
		h: '3.5',
		color: 'fg.muted',
	}),
	label: css({
		truncate: true,
	}),
	children: css({
		/* no extra styles -- indentation is inline */
	}),
};

/** Simple SVG chevron */
function ChevronIcon({ open }: { open: boolean }) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={styles.chevron}
			style={{ transform: open ? 'rotate(90deg)' : undefined, transition: 'transform 0.15s' }}
			aria-hidden="true"
		>
			<path d="M6 4l4 4-4 4" />
		</svg>
	);
}

/** Simple SVG folder icon */
function FolderIcon({ open }: { open: boolean }) {
	return (
		<svg viewBox="0 0 16 16" fill="currentColor" className={styles.folderIcon} aria-hidden="true">
			{open ? (
				<path d="M1 3.5A1.5 1.5 0 012.5 2h3.172a1.5 1.5 0 011.06.44l.828.828a.5.5 0 00.354.146H13.5A1.5 1.5 0 0115 4.914V5H2.5A1.5 1.5 0 001 6.5V3.5zM1.059 6A1.5 1.5 0 012.5 5h11a1.5 1.5 0 011.441 1.91l-1.2 4.2A1.5 1.5 0 0112.3 12H3.7a1.5 1.5 0 01-1.441-1.089l-1.2-4.2A1.5 1.5 0 011.059 6z" />
			) : (
				<path d="M2.5 2A1.5 1.5 0 001 3.5v9A1.5 1.5 0 002.5 14h11a1.5 1.5 0 001.5-1.5V5.414a1.5 1.5 0 00-1.5-1.5H8.414a.5.5 0 01-.354-.146l-.828-.828A1.5 1.5 0 006.172 2.5H2.5z" />
			)}
		</svg>
	);
}

/** Simple SVG file icon */
function FileIcon() {
	return (
		<svg viewBox="0 0 16 16" fill="currentColor" className={styles.fileIcon} aria-hidden="true">
			<path d="M4 1.5A1.5 1.5 0 015.5 0h4.586a.5.5 0 01.354.146l3.414 3.414a.5.5 0 01.146.354V14.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 014 14.5V1.5zM5.5 1a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V4.5H10.5A1.5 1.5 0 019 3V1H5.5z" />
		</svg>
	);
}

interface TreeNodeProps {
	node: FileTreeNode;
	depth: number;
	selectedId?: string;
	expandedIds: Set<string>;
	onToggle: (id: string) => void;
	onSelect?: (node: FileTreeNode) => void;
}

function TreeNode({ node, depth, selectedId, expandedIds, onToggle, onSelect }: TreeNodeProps) {
	const isFolder = node.type === 'folder';
	const isExpanded = expandedIds.has(node.id);
	const isSelected = selectedId === node.id;

	const handleClick = () => {
		if (isFolder) {
			onToggle(node.id);
		} else {
			onSelect?.(node);
		}
	};

	return (
		<div>
			<div
				className={cx(styles.node, isSelected && styles.nodeSelected)}
				style={{ paddingLeft: `${depth * 20 + 8}px` }}
				onClick={handleClick}
				role="treeitem"
				aria-selected={isSelected}
				aria-expanded={isFolder ? isExpanded : undefined}
			>
				{isFolder ? (
					<ChevronIcon open={isExpanded} />
				) : (
					<span className={styles.chevronPlaceholder} />
				)}
				{node.icon ? (
					<span className={isFolder ? styles.folderIcon : styles.fileIcon}>{node.icon}</span>
				) : isFolder ? (
					<FolderIcon open={isExpanded} />
				) : (
					<FileIcon />
				)}
				<span className={styles.label}>{node.name}</span>
			</div>

			{isFolder && isExpanded && node.children && (
				<div className={styles.children} role="group">
					{node.children.map((child) => (
						<TreeNode
							key={child.id}
							node={child}
							depth={depth + 1}
							selectedId={selectedId}
							expandedIds={expandedIds}
							onToggle={onToggle}
							onSelect={onSelect}
						/>
					))}
				</div>
			)}
		</div>
	);
}

/**
 * Collapsible file/folder tree with selection support.
 *
 * @example
 * ```tsx
 * <FileTree
 *   nodes={[
 *     { id: '1', name: 'src', type: 'folder', children: [
 *       { id: '2', name: 'index.ts', type: 'file' },
 *     ]},
 *   ]}
 *   selectedId="2"
 *   onSelect={(node) => console.log(node.name)}
 * />
 * ```
 */
export function FileTree({
	nodes,
	onSelect,
	selectedId,
	defaultExpanded = [],
	className,
}: FileTreeProps) {
	const [expandedIds, setExpandedIds] = useState<Set<string>>(
		() => new Set(defaultExpanded),
	);

	const handleToggle = useCallback((id: string) => {
		setExpandedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	}, []);

	return (
		<div className={cx(styles.root, className)} role="tree">
			{nodes.map((node) => (
				<TreeNode
					key={node.id}
					node={node}
					depth={0}
					selectedId={selectedId}
					expandedIds={expandedIds}
					onToggle={handleToggle}
					onSelect={onSelect}
				/>
			))}
		</div>
	);
}
