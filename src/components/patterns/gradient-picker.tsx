'use client';

import { Plus, X } from 'lucide-react';
import type { ReactElement } from 'react';
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

/**
 * Shift a hex color's hue by a small amount to create a related but distinct color.
 * @param hex - Source hex color
 * @param shift - Hue shift in degrees (default 30)
 * @returns New hex color with shifted hue
 */
function shiftHue(hex: string, shift = 30): string {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;
	let h = 0;
	const s = max === 0 ? 0 : d / max;
	const v = max;
	if (d !== 0) {
		if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
		else if (max === g) h = ((b - r) / d + 2) / 6;
		else h = ((r - g) / d + 4) / 6;
	}
	h = ((h * 360 + shift) % 360) / 360;
	const i = Math.floor(h * 6);
	const f = h * 6 - i;
	const p = v * (1 - s);
	const q = v * (1 - f * s);
	const t = v * (1 - (1 - f) * s);
	let ro: number, go: number, bo: number;
	switch (i % 6) {
		case 0: ro = v; go = t; bo = p; break;
		case 1: ro = q; go = v; bo = p; break;
		case 2: ro = p; go = v; bo = t; break;
		case 3: ro = p; go = q; bo = v; break;
		case 4: ro = t; go = p; bo = v; break;
		default: ro = v; go = p; bo = q; break;
	}
	const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
	return `#${toHex(ro)}${toHex(go)}${toHex(bo)}`;
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
 * New colors are hue-shifted from the last color so the OS picker
 * opens in a similar position on the hue wheel.
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
		const base = colors[colors.length - 1] ?? '#6366f1';
		onColorsChange([...colors, shiftHue(base)]);
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
			<div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
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
				<div className={css({ display: 'flex', gap: '1', flexWrap: 'wrap' })}>
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
