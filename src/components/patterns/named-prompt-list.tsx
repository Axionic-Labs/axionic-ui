'use client';

import { Plus, Trash2 } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { css } from 'styled-system/css';
import { FormField } from '../forms/form-field';
import { Button, Input, Textarea } from '../ui';
import { EmptyState } from './empty-state';
import { FormSection } from './form-section';

export interface NamedPromptListItem {
	key: string;
	value: string;
}

export interface NamedPromptListProps {
	title: ReactNode;
	description?: ReactNode;
	items: NamedPromptListItem[];
	onAdd: () => void;
	onRemove: (key: string) => void;
	onKeyChange: (oldKey: string, newKey: string) => void;
	onValueChange: (key: string, value: string) => void;
	keyLabel?: string;
	valueLabel?: string;
	keyPlaceholder?: string;
	valuePlaceholder?: string;
	emptyTitle?: string;
	emptyDescription?: string;
	chrome?: 'default' | 'soft';
}

const styles = {
	list: css({
		display: 'grid',
		gap: '3',
	}),
	row: css({
		display: 'grid',
		gap: '3',
	}),
	rowHeader: css({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: '3',
		flexWrap: 'wrap',
	}),
};

interface NamedPromptRowProps {
	item: NamedPromptListItem;
	onRemove: (key: string) => void;
	onKeyChange: (oldKey: string, newKey: string) => void;
	onValueChange: (key: string, value: string) => void;
	keyLabel: string;
	valueLabel: string;
	keyPlaceholder: string;
	valuePlaceholder: string;
	chrome: 'default' | 'soft';
}

function NamedPromptRow({
	item,
	onRemove,
	onKeyChange,
	onValueChange,
	keyLabel,
	valueLabel,
	keyPlaceholder,
	valuePlaceholder,
	chrome,
}: NamedPromptRowProps) {
	const [draftKey, setDraftKey] = useState(item.key);

	useEffect(() => {
		setDraftKey(item.key);
	}, [item.key]);

	const commitKeyChange = () => {
		if (draftKey !== item.key) {
			onKeyChange(item.key, draftKey);
		}
	};

	return (
		<FormSection
			title={draftKey || 'New task'}
			tone="subtle"
			chrome={chrome}
			actions={
				<Button type="button" variant="ghost" size="sm" onClick={() => onRemove(item.key)}>
					<Trash2 size={14} />
					Remove
				</Button>
			}
		>
			<div className={styles.row}>
				<div className={styles.rowHeader}>
					<FormField label={keyLabel} className={css({ flex: '1 1 16rem' })}>
						<Input
							value={draftKey}
							onChange={(event) => setDraftKey(event.target.value)}
							onBlur={commitKeyChange}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
									event.currentTarget.blur();
								}
							}}
							placeholder={keyPlaceholder}
						/>
					</FormField>
				</div>
				<FormField label={valueLabel}>
					<Textarea
						value={item.value}
						onChange={(event) => onValueChange(item.key, event.target.value)}
						placeholder={valuePlaceholder}
						rows={4}
						className={css({ resize: 'vertical' })}
					/>
				</FormField>
			</div>
		</FormSection>
	);
}

export function NamedPromptList({
	title,
	description,
	items,
	onAdd,
	onRemove,
	onKeyChange,
	onValueChange,
	keyLabel = 'Task name',
	valueLabel = 'Prompt',
	keyPlaceholder = 'summarize',
	valuePlaceholder = 'You are a concise assistant that...',
	emptyTitle = 'No prompts added yet',
	emptyDescription = 'Add at least one named prompt to continue.',
	chrome = 'default',
}: NamedPromptListProps) {
	return (
		<FormSection
			title={title}
			description={description}
			chrome={chrome}
			actions={
				<Button
					type="button"
					variant={chrome === 'soft' ? 'subtle' : 'toolbar'}
					size="sm"
					onClick={onAdd}
				>
					<Plus size={14} />
					Add task
				</Button>
			}
		>
			<div className={styles.list}>
				{items.length === 0 ? (
					<EmptyState
						title={emptyTitle}
						description={emptyDescription}
						className={css({ py: '8', px: '4' })}
					/>
				) : (
					items.map((item, index) => (
						<NamedPromptRow
							key={index}
							item={item}
							onRemove={onRemove}
							onKeyChange={onKeyChange}
							onValueChange={onValueChange}
							keyLabel={keyLabel}
							valueLabel={valueLabel}
							keyPlaceholder={keyPlaceholder}
							valuePlaceholder={valuePlaceholder}
							chrome={chrome}
						/>
					))
				)}
			</div>
		</FormSection>
	);
}
