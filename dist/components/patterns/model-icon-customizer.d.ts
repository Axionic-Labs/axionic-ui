import type { ReactElement } from 'react';
/** Custom icon and gradient config for model cards */
export interface ModelIconConfig {
    /** PascalCase lucide icon name, e.g. "Brain" */
    iconName: string;
    /** 1-3 hex colors (1 = solid, 2 = gradient, 3 = gradient with via) */
    bgColors: string[];
    /** CSS degrees, default 135 (to-br). Ignored for 1 color. */
    bgAngle?: number;
    /** Hex color for the icon, default "#ffffff" */
    iconColor?: string;
}
/** Default config matching the original cyan-to-purple gradient with Cpu icon */
export declare const DEFAULT_ICON_CONFIG: ModelIconConfig;
export interface ModelCardIconProps {
    /** Icon configuration (falls back to DEFAULT_ICON_CONFIG when absent) */
    config?: ModelIconConfig;
    /** Container size in pixels (default 40) */
    size?: number;
    /** Lucide icon size in pixels (default 20) */
    iconSize?: number;
    /** Additional class for the root element */
    className?: string;
}
/**
 * Renders a model card icon with dynamic gradient background and lucide icon.
 * Uses inline `style` for gradient because Panda tokens are build-time only.
 */
export declare function ModelCardIcon({ config, size, iconSize, className, }: ModelCardIconProps): ReactElement;
export interface ModelIconCustomizerProps {
    /** Current icon configuration */
    value: ModelIconConfig;
    /** Called with the updated config on any change */
    onChange: (config: ModelIconConfig) => void;
    /** Additional class for the root element */
    className?: string;
}
/**
 * Compound component combining IconPicker + GradientPicker + icon color swatch
 * with a live preview of the resulting model card icon.
 */
export declare function ModelIconCustomizer({ value, onChange, className, }: ModelIconCustomizerProps): ReactElement;
//# sourceMappingURL=model-icon-customizer.d.ts.map