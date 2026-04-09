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
export declare function ValueSlider({ value, onChange, min, max, step, label, showValue, formatValue, tone, className, }: ValueSliderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=value-slider.d.ts.map