'use client';

import type { ReactElement } from 'react';
import { Plus, X } from 'lucide-react';
import { css, cx } from 'styled-system/css';

const ANGLE_PRESETS = [45, 90, 135, 180, 225] as const;

export interface GradientPickerProps {
	/** 1-3 hex color strings */
	colors: string[];
	/** CSS gradient angle in degrees */
	angle: number;
	/** Called when colors change */
	onColorsChange: (colors: string[]) => void;
	/** Called when angle changes */
	onAngleChange: (angle: number) => void;
	/** Additional class for the root element */
	className?: string;
}

/**
 * Builds a CSS background value from an array of hex colors and angle.
 * @param colors - 1-3 hex color strings
 * @param angle - CSS gradient angle in degrees
 * @returns CSS background value (solid color or linear-gradient)
 */
export function buildGradientStyle(colors: string[], angle: number): string {
	if (colors.length === 1) return colors[0];
	return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
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

const removeBtn = css({
	position: 'absolute',
	top: '-1.5',
	right: '-1.5',
	w: '4',
	h: '4',
	rounded: 'full',
	bg: 'bg.emphasized',
	color: 'fg.default',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	fontSize: 'xs',
	_hover: { bg: 'bg.subtle' },
});

const addBtn = css({
	w: '8',
	h: '8',
	rounded: 'md',
	borderWidth: '1px',
	borderStyle: 'dashed',
	borderColor: 'border.default',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	color: 'fg.subtle',
	_hover: { borderColor: 'teal.a5', color: 'fg.muted' },
	transition: 'colors',
});

const pillBase = css({
	px: '2',
	py: '0.5',
	rounded: 'full',
	fontSize: 'xs',
	fontWeight: 'medium',
	cursor: 'pointer',
	transition: 'colors',
	_hover: { bg: 'teal.a2' },
});

const pillActive = css({ bg: 'teal.a3', color: 'fg.default' });
const pillInactive = css({ bg: 'transparent', color: 'fg.subtle' });

const previewBar = css({
	h: '3',
	rounded: 'sm',
	borderWidth: '1px',
	borderColor: 'border.default',
});

/**
 * 1-3 color gradient picker with angle presets and live preview bar.
 * Uses native `<input type="color">` for OS-level color selection.
 */
export function GradientPicker({
	colors,
	angle,
	onColorsChange,
	onAngleChange,
	className,
}: GradientPickerProps): ReactElement {
	const addColor = () => {
		if (colors.length >= 3) return;
		onColorsChange([...colors, '#6366f1']);
	};

	const removeColor = (index: number) => {
		if (colors.length <= 1) return;
		onColorsChange(colors.filter((_, i) => i !== index));
	};

	const updateColor = (index: number, value: string) => {
		const next = [...colors];
		next[index] = value;
		onColorsChange(next);
	};

	return (
		<div className={cx(css({ display: 'flex', flexDir: 'column', gap: '2', minW: 0 }), className)}>
			{/* Color swatches */}
			<div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
				{colors.map((color, i) => (
					<div key={i} className={css({ position: 'relative' })}>
						<label className={swatchStyle} style={{ backgroundColor: color }}>
							<input
								type="color"
								value={color}
								onChange={(e) => updateColor(i, e.target.value)}
								className={hiddenInput}
							/>
						</label>
						{colors.length > 1 && (
							<button type="button" onClick={() => removeColor(i)} className={removeBtn}>
								<X size={10} />
							</button>
						)}
					</div>
				))}
				{colors.length < 3 && (
					<button type="button" onClick={addColor} className={addBtn}>
						<Plus size={14} />
					</button>
				)}
			</div>

			{/* Angle presets (only when >1 color) */}
			{colors.length > 1 && (
				<div className={css({ display: 'flex', gap: '1' })}>
					{ANGLE_PRESETS.map((preset) => (
						<button
							key={preset}
							type="button"
							onClick={() => onAngleChange(preset)}
							className={cx(pillBase, angle === preset ? pillActive : pillInactive)}
						>
							{preset}
						</button>
					))}
				</div>
			)}

			{/* Live gradient preview */}
			<div className={previewBar} style={{ background: buildGradientStyle(colors, angle) }} />
		</div>
	);
}
