'use client';

import { useState } from 'react';
import { css, cx } from 'styled-system/css';

export interface AmountSelectorProps {
	/** Preset amount buttons displayed for quick selection */
	presets?: number[];
	/** Currently selected amount */
	value: number;
	/** Raw custom input value when the parent wants to control it */
	customValue?: string;
	/** Called when the selected amount changes */
	onChange: (amount: number) => void;
	/** Called when the raw custom input changes */
	onCustomValueChange?: (value: string) => void;
	/** Minimum allowed amount */
	min?: number;
	/** Maximum allowed amount */
	max?: number;
	/** Currency symbol displayed beside the input */
	currency?: string;
	/** Disables interaction and shows loading state on submit */
	loading?: boolean;
	/** Disables all controls */
	disabled?: boolean;
	/** Called when the submit button is clicked; button is hidden when omitted */
	onSubmit?: () => void;
	/** Label for the submit button; accepts a string or a function receiving the current amount */
	submitLabel?: string | ((amount: number) => string);
	/** Additional class for the root element */
	className?: string;
}

const styles = {
	root: css({
		bg: 'app.surface',
		borderWidth: '1px',
		borderColor: 'app.border',
		rounded: 'l3',
		p: '6',
		display: 'flex',
		flexDir: 'column',
		gap: '5',
	}),
	sectionLabel: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		mb: '3',
	}),
	presetRow: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2',
	}),
	presetBase: css({
		px: '5',
		py: '2',
		rounded: 'full',
		fontWeight: 'medium',
		fontSize: 'sm',
		cursor: 'pointer',
		transition: 'all 150ms',
		borderWidth: '1px',
	}),
	presetActive: css({
		bg: 'app.accent',
		color: 'app.text.inverse',
		borderColor: 'transparent',
	}),
	presetInactive: css({
		bg: 'app.surface.muted',
		color: 'app.text',
		borderColor: 'transparent',
		_hover: {
			bg: 'app.canvas.subtle',
			color: 'app.text',
		},
	}),
	inputLabel: css({
		textStyle: 'caption',
		color: 'app.text.subtle',
		mb: '2',
	}),
	inputRow: css({
		display: 'flex',
		alignItems: 'center',
		gap: '3',
	}),
	currencySymbol: css({
		fontSize: 'lg',
		color: 'app.text.subtle',
	}),
	input: css({
		flex: 1,
		px: '3',
		py: '2',
		rounded: 'l2',
		borderWidth: '1px',
		borderColor: 'app.border',
		bg: 'app.surface',
		color: 'app.text',
		fontSize: 'sm',
		outline: 'none',
		_focus: {
			ringWidth: '2px',
			ringColor: 'app.accent.soft',
			ringOffset: '0',
		},
		_disabled: {
			opacity: 0.5,
			cursor: 'not-allowed',
		},
	}),
	currencyCode: css({
		fontSize: 'sm',
		color: 'app.text.subtle',
	}),
	validationError: css({
		fontSize: 'xs',
		color: 'fg.error',
		mt: '1',
	}),
	submitBtn: css({
		alignSelf: 'flex-end',
		px: '8',
		py: '2.5',
		rounded: 'full',
		fontWeight: 'medium',
		fontSize: 'sm',
		bg: 'app.accent',
		color: 'app.text.inverse',
		cursor: 'pointer',
		transition: 'all 150ms',
		borderWidth: '0',
		_hover: {
			opacity: 0.92,
		},
		_disabled: {
			opacity: 0.5,
			cursor: 'not-allowed',
		},
	}),
};

/**
 * Amount selector with preset buttons, custom input, and optional submit action.
 * Designed for credit top-up, payment, and donation flows.
 *
 * @param props - AmountSelectorProps
 * @returns Amount selector component
 *
 * @example
 * ```tsx
 * <AmountSelector
 *   value={amount}
 *   onChange={setAmount}
 *   onSubmit={handleTopUp}
 *   submitLabel={(v) => `Add $${v.toFixed(2)} credits`}
 * />
 * ```
 */
export function AmountSelector({
	presets = [5, 10, 25, 50, 100],
	value,
	customValue,
	onChange,
	onCustomValueChange,
	min = 5,
	max = 500,
	currency = '$',
	loading = false,
	disabled = false,
	onSubmit,
	submitLabel,
	className,
}: AmountSelectorProps) {
	const [customInput, setCustomInput] = useState('');
	const resolvedCustomInput = customValue ?? customInput;

	const validationError =
		value < min
			? `Minimum amount is ${currency}${min}`
			: value > max
				? `Maximum amount is ${currency}${max}`
				: null;

	const handlePresetClick = (preset: number) => {
		setCustomInput('');
		onCustomValueChange?.('');
		onChange(preset);
	};

	const handleCustomChange = (raw: string) => {
		setCustomInput(raw);
		onCustomValueChange?.(raw);
		const parsed = Number.parseFloat(raw);
		if (!Number.isNaN(parsed) && parsed > 0) {
			onChange(parsed);
		}
	};

	const resolvedLabel = loading
		? 'Processing...'
		: typeof submitLabel === 'function'
			? submitLabel(value)
			: typeof submitLabel === 'string'
				? submitLabel
				: `${currency}${value.toFixed(2)}`;

	const isSubmitDisabled = disabled || loading || !!validationError || value <= 0;

	return (
		<div className={cx(styles.root, className)}>
			{/* Preset buttons */}
			<div>
				<div className={styles.sectionLabel}>Select an amount</div>
				<div className={styles.presetRow}>
					{presets.map((preset) => (
						<button
							key={preset}
							type="button"
							disabled={disabled}
							onClick={() => handlePresetClick(preset)}
							className={cx(
								styles.presetBase,
								value === preset && !resolvedCustomInput
									? styles.presetActive
									: styles.presetInactive,
							)}
						>
							{currency}
							{preset}
						</button>
					))}
				</div>
			</div>

			{/* Custom input */}
			<div>
				<div className={styles.inputLabel}>Or enter a custom amount</div>
				<div className={styles.inputRow}>
					<span className={styles.currencySymbol}>{currency}</span>
					<input
						type="number"
						min={min}
						max={max}
						step="0.01"
						value={resolvedCustomInput}
						onChange={(e) => handleCustomChange(e.target.value)}
						placeholder={`${min} - ${max}`}
						disabled={disabled}
						className={styles.input}
					/>
					<span className={styles.currencyCode}>USD</span>
				</div>
				{validationError && resolvedCustomInput && (
					<div className={styles.validationError}>{validationError}</div>
				)}
			</div>

			{/* Submit button */}
			{onSubmit && (
				<button
					type="button"
					disabled={isSubmitDisabled}
					onClick={onSubmit}
					className={styles.submitBtn}
				>
					{resolvedLabel}
				</button>
			)}
		</div>
	);
}
