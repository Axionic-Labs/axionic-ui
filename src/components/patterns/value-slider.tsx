'use client';

import { type ReactNode, useId } from 'react';
import { css, cx } from 'styled-system/css';
import * as Slider from '../ui/slider';

export interface ValueSliderProps {
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
	label?: string;
	ariaLabel?: string;
	hint?: ReactNode;
	showValue?: boolean;
	formatValue?: (value: number) => string;
	tone?: 'teal' | 'wheat';
	variant?: 'default' | 'workspace';
	className?: string;
}

const toneStyles = {
	teal: {
		range: 'teal.9',
		border: 'teal.9',
	},
	wheat: {
		range: 'wheat.9',
		border: 'wheat.9',
	},
} as const;

export function ValueSlider({
	value,
	onChange,
	min = 0,
	max = 100,
	step = 1,
	label,
	ariaLabel,
	hint,
	showValue = true,
	formatValue = (nextValue) => `${Math.round(nextValue * 10) / 10}`,
	tone = 'teal',
	variant = 'default',
	className,
}: ValueSliderProps) {
	const hintId = useId();
	const colors = toneStyles[tone];
	const workspace = variant === 'workspace';
	const accessibleLabel = label ?? ariaLabel;

	return (
		<Slider.Root
			value={[value]}
			onValueChange={(details: { value: number[] }) => onChange(details.value[0])}
			min={min}
			max={max}
			step={step}
			className={cx(css({ w: 'full' }), className)}
		>
			{(accessibleLabel || showValue) && (
				<div
					className={css({
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: '3',
						mb: '2.5',
					})}
				>
					{accessibleLabel && (
						<Slider.Label
							className={css({
								position: label ? 'static' : 'absolute',
								width: label ? 'auto' : '1px',
								height: label ? 'auto' : '1px',
								padding: label ? '0' : '0',
								margin: label ? '0' : '-1px',
								overflow: label ? 'visible' : 'hidden',
								clip: label ? 'auto' : 'rect(0, 0, 0, 0)',
								whiteSpace: label ? 'normal' : 'nowrap',
								borderWidth: label ? '0' : '0',
								textStyle: 'small',
								fontWeight: workspace ? '600' : '500',
								color: workspace ? 'app.text' : 'app.text.muted',
							})}
						>
							{accessibleLabel}
						</Slider.Label>
					)}
					{showValue && (
						<span
							className={css({
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								minW: workspace ? '3rem' : 'auto',
								px: workspace ? '2' : '0',
								py: workspace ? '1' : '0',
								rounded: workspace ? 'md' : 'none',
								borderWidth: workspace ? '1px' : '0',
								borderColor: workspace ? 'app.border' : 'transparent',
								bg: workspace ? 'app.canvas.subtle' : 'transparent',
								textStyle: workspace ? 'caption' : 'small',
								fontWeight: '600',
								color: 'app.text',
							})}
						>
							{formatValue(value)}
						</span>
					)}
				</div>
			)}
			<Slider.Control
				className={css({ position: 'relative', display: 'flex', alignItems: 'center', h: '5' })}
			>
				<Slider.Track
					className={css({
						w: 'full',
						h: workspace ? '1' : '1.5',
						bg: workspace ? 'app.border' : 'app.surface.muted',
						rounded: 'full',
						overflow: 'hidden',
					})}
				>
					<Slider.Range className={css({ h: 'full', bg: colors.range })} />
				</Slider.Track>
				<Slider.Thumb
					index={0}
					aria-describedby={hint ? hintId : undefined}
					className={css({
						w: '4',
						h: '4',
						rounded: 'full',
						bg: workspace ? colors.range : 'app.surface',
						borderWidth: workspace ? '0' : '2px',
						borderColor: workspace ? 'transparent' : colors.border,
						boxShadow: workspace ? 'panel' : '0 8px 18px rgba(8, 18, 20, 0.12)',
						cursor: 'grab',
						_focusVisible: {
							outline: '2px solid',
							outlineColor: 'app.accent.soft',
							outlineOffset: '2px',
						},
					})}
				>
					<Slider.HiddenInput />
				</Slider.Thumb>
			</Slider.Control>
			{hint ? (
				<div
					id={hintId}
					className={css({
						mt: workspace ? '3' : '2',
						textStyle: 'caption',
						color: 'app.text.muted',
						lineHeight: '1.55',
					})}
				>
					{hint}
				</div>
			) : null}
		</Slider.Root>
	);
}
