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
export declare function AmountSelector({ presets, value, customValue, onChange, onCustomValueChange, min, max, currency, loading, disabled, onSubmit, submitLabel, className, }: AmountSelectorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=amount-selector.d.ts.map