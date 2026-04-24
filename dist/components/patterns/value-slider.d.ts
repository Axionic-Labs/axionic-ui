import { type ReactNode } from 'react';
import type { PatternTone } from './shared';
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
    tone?: PatternTone;
    variant?: 'default' | 'workspace';
    className?: string;
}
export declare function ValueSlider({ value, onChange, min, max, step, label, ariaLabel, hint, showValue, formatValue, tone, variant, className, }: ValueSliderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=value-slider.d.ts.map