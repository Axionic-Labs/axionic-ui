import type { ReactElement } from 'react';
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
export declare function buildGradientStyle(colors: string[], angle: number): string;
/**
 * 1-3 color gradient picker with angle presets and live preview bar.
 * Uses native `<input type="color">` for OS-level color selection.
 */
export declare function GradientPicker({ colors, angle, onColorsChange, onAngleChange, className, }: GradientPickerProps): ReactElement;
//# sourceMappingURL=gradient-picker.d.ts.map