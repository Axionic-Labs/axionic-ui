import { type ReactNode } from 'react';
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
export declare function FileTree({ nodes, onSelect, selectedId, defaultExpanded, className, }: FileTreeProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=file-tree.d.ts.map