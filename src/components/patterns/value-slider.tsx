'use client';

import { css, cx } from 'styled-system/css';
import * as Slider from '../ui/slider';

export interface ValueSliderProps {
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
	label?: string;
	showValue?: boolean;
	formatValue?: (value: number) => string;
	tone?: 'teal' | 'wheat';
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
	showValue = true,
	formatValue = (nextValue) => `${Math.round(nextValue * 10) / 10}`,
	tone = 'teal',
	className,
}: ValueSliderProps) {
	const colors = toneStyles[tone];

	return (
		<div className={cx(css({ w: 'full' }), className)}>
			{(label || showValue) && (
				<div
					className={css({
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: '3',
						mb: '2.5',
					})}
				>
					{label && (
						<span className={css({ textStyle: 'small', color: 'app.text.muted' })}>{label}</span>
					)}
					{showValue && (
						<span className={css({ textStyle: 'small', fontWeight: '600', color: 'app.text' })}>
							{formatValue(value)}
						</span>
					)}
				</div>
			)}
			<Slider.Root
				value={[value]}
				onValueChange={(details: { value: number[] }) => onChange(details.value[0])}
				min={min}
				max={max}
				step={step}
			>
				<Slider.Control
					className={css({ position: 'relative', display: 'flex', alignItems: 'center', h: '5' })}
				>
					<Slider.Track
						className={css({
							w: 'full',
							h: '1.5',
							bg: 'app.surface.muted',
							rounded: 'full',
							overflow: 'hidden',
						})}
					>
						<Slider.Range className={css({ h: 'full', bg: colors.range })} />
					</Slider.Track>
					<Slider.Thumb
						index={0}
						className={css({
							w: '4',
							h: '4',
							rounded: 'full',
							bg: 'white',
							borderWidth: '2px',
							borderColor: colors.border,
							boxShadow: '0 8px 18px rgba(8, 18, 20, 0.12)',
							cursor: 'grab',
							_focusVisible: {
								outline: '2px solid',
								outlineColor: 'app.accent.soft',
								outlineOffset: '2px',
							},
						})}
					/>
				</Slider.Control>
			</Slider.Root>
		</div>
	);
}
