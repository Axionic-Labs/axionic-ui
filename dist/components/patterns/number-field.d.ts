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
export declare function NumberField({ label, value, onValueChange, min, max, step, formatOptions, helperText, error, placeholder, allowEmpty, className, }: NumberFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=number-field.d.ts.map