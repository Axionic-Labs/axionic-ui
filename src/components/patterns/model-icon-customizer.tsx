'use client';

import type { ReactElement } from 'react';
import { icons } from 'lucide-react';
import { css, cx } from 'styled-system/css';
import { IconPicker } from './icon-picker';
import { GradientPicker, buildGradientStyle } from './gradient-picker';

/** Custom icon and gradient config for model cards */
export interface ModelIconConfig {
	/** PascalCase lucide icon name, e.g. "Brain" */
	iconName: string;
	/** 1-3 hex colors (1 = solid, 2 = gradient, 3 = gradient with via) */
	bgColors: string[];
	/** CSS degrees, default 135 (to-br). Ignored for 1 color. */
	bgAngle?: number;
	/** Hex color for the icon, default "#ffffff" */
	iconColor?: string;
}

/** Default config matching the original cyan-to-purple gradient with Cpu icon */
export const DEFAULT_ICON_CONFIG: ModelIconConfig = {
	iconName: 'Cpu',
	bgColors: ['#5AB8C4', '#9333ea'],
	bgAngle: 135,
	iconColor: '#ffffff',
};

// -- ModelCardIcon --------------------------------------------------------

export interface ModelCardIconProps {
	/** Icon configuration (falls back to DEFAULT_ICON_CONFIG when absent) */
	config?: ModelIconConfig;
	/** Container size in pixels (default 40) */
	size?: number;
	/** Lucide icon size in pixels (default 20) */
	iconSize?: number;
	/** Additional class for the root element */
	className?: string;
}

const cardIconBase = css({
	rounded: 'lg',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0,
});

/**
 * Renders a model card icon with dynamic gradient background and lucide icon.
 * Uses inline `style` for gradient because Panda tokens are build-time only.
 */
export function ModelCardIcon({
	config,
	size = 40,
	iconSize = 20,
	className,
}: ModelCardIconProps): ReactElement {
	const c = config ?? DEFAULT_ICON_CONFIG;
	const Icon = icons[c.iconName as keyof typeof icons];

	return (
		<div
			className={cx(cardIconBase, className)}
			style={{
				width: size,
				height: size,
				background: buildGradientStyle(c.bgColors, c.bgAngle ?? 135),
			}}
		>
			{Icon && <Icon size={iconSize} style={{ color: c.iconColor ?? '#ffffff' }} />}
		</div>
	);
}

// -- ModelIconCustomizer --------------------------------------------------

export interface ModelIconCustomizerProps {
	/** Current icon configuration */
	value: ModelIconConfig;
	/** Called with the updated config on any change */
	onChange: (config: ModelIconConfig) => void;
	/** Additional class for the root element */
	className?: string;
}

const swatchStyle = css({
	display: 'block',
	w: '8',
	h: '8',
	rounded: 'md',
	cursor: 'pointer',
	borderWidth: '2px',
	borderColor: 'border.default',
	overflow: 'hidden',
	_hover: { borderColor: 'teal.a5' },
	transition: 'colors',
});

const hiddenInput = css({ opacity: 0, position: 'absolute', w: 0, h: 0 });

const rowStyle = css({ display: 'flex', alignItems: 'center', gap: '3' });
const rowStartStyle = css({ display: 'flex', alignItems: 'flex-start', gap: '3' });
const labelStyle = css({ fontSize: 'sm', color: 'fg.muted', w: '20', flexShrink: 0 });
const labelTopStyle = css({ fontSize: 'sm', color: 'fg.muted', w: '20', flexShrink: 0, pt: '1' });

/**
 * Compound component combining IconPicker + GradientPicker + icon color swatch
 * with a live preview of the resulting model card icon.
 */
export function ModelIconCustomizer({
	value,
	onChange,
	className,
}: ModelIconCustomizerProps): ReactElement {
	return (
		<div className={cx(css({ display: 'flex', gap: '4', alignItems: 'flex-start' }), className)}>
			{/* Live preview */}
			<ModelCardIcon config={value} size={48} iconSize={24} />

			{/* Controls */}
			<div className={css({ display: 'flex', flexDir: 'column', gap: '3', flex: 1 })}>
				{/* Icon selector */}
				<div className={rowStyle}>
					<label className={labelStyle}>Icon</label>
					<IconPicker
						value={value.iconName}
						onChange={(iconName) => onChange({ ...value, iconName })}
					/>
				</div>

				{/* Background gradient */}
				<div className={rowStartStyle}>
					<label className={labelTopStyle}>Background</label>
					<GradientPicker
						colors={value.bgColors}
						angle={value.bgAngle ?? 135}
						onColorsChange={(bgColors) => onChange({ ...value, bgColors })}
						onAngleChange={(bgAngle) => onChange({ ...value, bgAngle })}
					/>
				</div>

				{/* Icon color */}
				<div className={rowStyle}>
					<label className={labelStyle}>Icon Color</label>
					<label className={swatchStyle} style={{ backgroundColor: value.iconColor ?? '#ffffff' }}>
						<input
							type="color"
							value={value.iconColor ?? '#ffffff'}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								onChange({ ...value, iconColor: e.target.value })
							}
							className={hiddenInput}
						/>
					</label>
				</div>
			</div>
		</div>
	);
}
