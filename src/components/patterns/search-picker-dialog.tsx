'use client';

import { Portal } from '@ark-ui/react/portal';
import { Search, X } from 'lucide-react';
import { type ReactNode, useMemo, useState } from 'react';
import { css, cx } from 'styled-system/css';
import { FormField } from '../forms/form-field';
import { Button, Dialog, Input } from '../ui';
import { EmptyState } from './empty-state';
import { SelectionList, type SelectionListItem } from './selection-list';

export interface SearchPickerDialogItem extends SelectionListItem {
	keywords?: string[];
}

export interface SearchPickerDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: ReactNode;
	description?: ReactNode;
	searchLabel?: string;
	searchPlaceholder?: string;
	value: string | null;
	onValueChange: (value: string) => void;
	items: SearchPickerDialogItem[];
	emptyTitle?: string;
	emptyDescription?: string;
	className?: string;
}

const styles = {
	content: css({
		maxW: '3xl',
		w: 'min(92vw, 56rem)',
	}),
	layout: css({
		display: 'grid',
		gap: '4',
	}),
	searchField: css({
		display: 'grid',
		gap: '3',
	}),
	searchInput: css({
		pl: '10',
	}),
	searchIcon: css({
		position: 'absolute',
		left: '3.5',
		top: '50%',
		transform: 'translateY(-50%)',
		color: 'app.text.subtle',
		pointerEvents: 'none',
	}),
	clearButton: css({
		position: 'absolute',
		right: '2.5',
		top: '50%',
		transform: 'translateY(-50%)',
	}),
	searchWrap: css({
		position: 'relative',
	}),
	list: css({
		maxH: '24rem',
		overflowY: 'auto',
		pr: '1',
	}),
	footer: css({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '3',
	}),
	helper: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
	}),
};

function matchesItem(item: SearchPickerDialogItem, query: string) {
	if (!query) return true;
	const haystack = [
		typeof item.label === 'string' ? item.label : '',
		typeof item.description === 'string' ? item.description : '',
		...(item.keywords ?? []),
	]
		.join(' ')
		.toLowerCase();
	return haystack.includes(query);
}

export function SearchPickerDialog({
	open,
	onOpenChange,
	title,
	description,
	searchLabel = 'Search',
	searchPlaceholder = 'Search options',
	value,
	onValueChange,
	items,
	emptyTitle = 'No matching options',
	emptyDescription = 'Try a different search term.',
	className,
}: SearchPickerDialogProps) {
	const [query, setQuery] = useState('');

	const filteredItems = useMemo(
		() => items.filter((item) => matchesItem(item, query.trim().toLowerCase())),
		[items, query],
	);

	return (
		<Dialog.Root open={open} onOpenChange={(details) => onOpenChange(details.open)} size="lg">
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content className={cx(styles.content, className)}>
						<Dialog.Header>
							<Dialog.Title>{title}</Dialog.Title>
							{description ? <Dialog.Description>{description}</Dialog.Description> : null}
						</Dialog.Header>
						<Dialog.Body className={styles.layout}>
							<div className={styles.searchField}>
								<FormField label={searchLabel}>
									<div className={styles.searchWrap}>
										<Search size={16} className={styles.searchIcon} />
										<Input
											value={query}
											onChange={(event) => setQuery(event.target.value)}
											placeholder={searchPlaceholder}
											className={styles.searchInput}
										/>
										{query ? (
											<Button
												type="button"
												variant="ghost"
												size="xs"
												onClick={() => setQuery('')}
												className={styles.clearButton}
											>
												<X size={14} />
											</Button>
										) : null}
									</div>
								</FormField>
							</div>

							<div className={styles.list}>
								{filteredItems.length > 0 ? (
									<SelectionList
										items={filteredItems}
										value={value}
										onValueChange={(nextValue) => {
											onValueChange(nextValue);
											onOpenChange(false);
										}}
									/>
								) : (
									<EmptyState
										icon={<Search size={20} />}
										title={emptyTitle}
										description={emptyDescription}
										className={css({ py: '10' })}
									/>
								)}
							</div>
						</Dialog.Body>
						<Dialog.Footer className={styles.footer}>
							<div className={styles.helper}>
								{filteredItems.length} option{filteredItems.length === 1 ? '' : 's'}
							</div>
							<Button type="button" variant="surface" onClick={() => onOpenChange(false)}>
								Close
							</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}
