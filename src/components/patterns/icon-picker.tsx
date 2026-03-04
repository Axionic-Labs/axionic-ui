'use client';

import { type ReactElement, useMemo, useState } from 'react';
import { icons } from 'lucide-react';
import { css, cx } from 'styled-system/css';
import { Input } from '../ui/input';
import * as Popover from '../ui/popover';

const CURATED_ICONS = [
	'Brain', 'Bot', 'Cpu', 'Rocket', 'Sparkles', 'Zap', 'Target', 'Shield',
	'Star', 'Heart', 'Gem', 'Crown', 'Flame', 'Lightbulb', 'Atom', 'Orbit',
	'Globe', 'Compass', 'Telescope', 'Microscope', 'Dna', 'FlaskConical',
	'Gauge', 'Activity', 'TrendingUp', 'BarChart3', 'PieChart', 'LineChart',
	'Code', 'Terminal', 'Server', 'Database', 'HardDrive', 'Cloud',
	'Wifi', 'Radio', 'Satellite', 'Cable', 'Network', 'Router',
	'Lock', 'Key', 'Fingerprint', 'Eye', 'ScanFace', 'ShieldCheck',
	'MessageSquare', 'Mail', 'Send', 'Bell', 'Megaphone', 'Mic',
	'Image', 'Camera', 'Video', 'Music', 'Palette', 'Paintbrush',
	'Pen', 'PenTool', 'Layers', 'Grid3x3', 'Box', 'Package',
	'Truck', 'Plane', 'Car', 'Bike', 'Ship', 'TrainFront',
	'Home', 'Building2', 'Factory', 'Store', 'Landmark', 'Hospital',
	'User', 'Users', 'UserCheck', 'Briefcase', 'GraduationCap', 'Award',
	'Wrench', 'Settings', 'Cog', 'Hammer', 'Drill', 'Plug',
] as const;

export interface IconPickerProps {
	/** Current selected icon name (PascalCase lucide name) */
	value: string;
	/** Called with the new icon name when user selects */
	onChange: (name: string) => void;
	/** Additional class for the trigger button */
	className?: string;
}

const triggerStyle = css({
	display: 'flex',
	alignItems: 'center',
	gap: '2',
	px: '3',
	py: '1.5',
	rounded: 'md',
	borderWidth: '1px',
	borderColor: 'border.default',
	cursor: 'pointer',
	bg: 'bg.default',
	_hover: { borderColor: 'teal.a5' },
	transition: 'colors',
});

const gridStyle = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(6, 1fr)',
	gap: '1',
	maxH: '220px',
	overflowY: 'auto',
});

const cellBase = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	w: '10',
	h: '10',
	rounded: 'md',
	cursor: 'pointer',
	transition: 'colors',
	_hover: { bg: 'teal.a2' },
});

const cellActive = css({ bg: 'teal.a3' });

const labelStyle = css({ fontSize: 'sm', color: 'fg.muted' });

const emptyStyle = css({ fontSize: 'sm', color: 'fg.subtle', textAlign: 'center', py: '4' });

/**
 * Searchable icon picker popover backed by the lucide-react icon set.
 * Shows ~80 curated icons by default; typing in the search input
 * filters all 1600+ lucide icons (first 60 matches shown).
 */
export function IconPicker({ value, onChange, className }: IconPickerProps): ReactElement {
	const [search, setSearch] = useState('');

	const displayedIcons = useMemo(() => {
		if (!search.trim()) {
			return CURATED_ICONS.filter((name) => name in icons);
		}
		const query = search.toLowerCase();
		return Object.keys(icons)
			.filter((name) => name.toLowerCase().includes(query))
			.slice(0, 60);
	}, [search]);

	const SelectedIcon = icons[value as keyof typeof icons];

	return (
		<Popover.Root portalled>
			<Popover.Trigger asChild>
				<button type="button" className={cx(triggerStyle, className)}>
					{SelectedIcon && <SelectedIcon size={16} />}
					<span className={labelStyle}>{value}</span>
				</button>
			</Popover.Trigger>
			<Popover.Positioner className={css({ zIndex: 'popover' })}>
				<Popover.Content className={css({ w: '280px', p: '3' })}>
					<Input
						type="text"
						value={search}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
						placeholder="Search icons..."
						size="sm"
						className={css({ mb: '2' })}
					/>
					<div className={gridStyle}>
						{displayedIcons.map((name) => {
							const Icon = icons[name as keyof typeof icons];
							if (!Icon) return null;
							return (
								<button
									key={name}
									type="button"
									title={name}
									onClick={() => {
										onChange(name);
										setSearch('');
									}}
									className={cx(cellBase, name === value && cellActive)}
								>
									<Icon size={18} />
								</button>
							);
						})}
					</div>
					{displayedIcons.length === 0 && <p className={emptyStyle}>No icons found</p>}
				</Popover.Content>
			</Popover.Positioner>
		</Popover.Root>
	);
}
