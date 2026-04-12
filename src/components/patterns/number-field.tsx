'use client';

import { css, cx } from 'styled-system/css';
import { FormField } from '../forms/form-field';
import { NumberInput } from '../ui';

export interface NumberFieldProps {
	label: string;
	value: number | null;
	onValueChange: (value: number | null) => void;
	min?: number;
	max?: number;
	step?: number;
	formatOptions?: Intl.NumberFormatOptions;
	helperText?: string;
	error?: string;
	placeholder?: string;
	allowEmpty?: boolean;
	className?: string;
}

const styles = {
	root: css({
		display: 'grid',
		gap: '2',
	}),
};

export function NumberField({
	label,
	value,
	onValueChange,
	min,
	max,
	step = 1,
	formatOptions,
	helperText,
	error,
	placeholder,
	allowEmpty = false,
	className,
}: NumberFieldProps) {
	return (
		<FormField
			label={label}
			helperText={helperText}
			error={error}
			className={cx(styles.root, className)}
		>
			<NumberInput.Root
				value={value === null ? '' : String(value)}
				min={min}
				max={max}
				step={step}
				formatOptions={formatOptions}
				onValueChange={(details) => {
					if (details.value === '') {
						onValueChange(allowEmpty ? null : (min ?? 0));
						return;
					}
					onValueChange(
						Number.isNaN(details.valueAsNumber)
							? allowEmpty
								? null
								: (min ?? 0)
							: details.valueAsNumber,
					);
				}}
			>
				<NumberInput.Input placeholder={placeholder} />
				<NumberInput.Control />
			</NumberInput.Root>
		</FormField>
	);
}
