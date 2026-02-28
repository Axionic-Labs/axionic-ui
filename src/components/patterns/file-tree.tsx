'use client';

import { ChevronRight, File, Folder, FolderOpen } from 'lucide-react';
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
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') handleClick();
				}}
				role="treeitem"
				tabIndex={0}
				aria-selected={isSelected}
				aria-expanded={isFolder ? isExpanded : undefined}
			>
				{isFolder ? (
					<ChevronRight
						className={styles.chevron}
						aria-hidden="true"
						style={{
							transform: isExpanded ? 'rotate(90deg)' : undefined,
							transition: 'transform 0.15s',
						}}
					/>
				) : (
					<span className={styles.chevronPlaceholder} />
				)}
				{node.icon ? (
					<span className={isFolder ? styles.folderIcon : styles.fileIcon}>{node.icon}</span>
				) : isFolder ? (
					isExpanded ? (
						<FolderOpen className={styles.folderIcon} aria-hidden="true" />
					) : (
						<Folder className={styles.folderIcon} aria-hidden="true" />
					)
				) : (
					<File className={styles.fileIcon} aria-hidden="true" />
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
	const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set(defaultExpanded));

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
