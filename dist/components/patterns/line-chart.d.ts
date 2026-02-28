export interface LineChartProps {
    /** Data points to plot */
    data: Array<{
        x: number;
        y: number;
    }>;
    /**
     * Line color. Accepts a Panda CSS token path (e.g. `'colors.teal.9'`)
     * or a raw CSS color value. Defaults to `colorPalette.9` via CSS variable.
     */
    color?: string;
    /** Chart height in pixels (default: 120) */
    height?: number;
    /** Show horizontal grid lines */
    showGrid?: boolean;
    /** Show axis labels */
    showAxis?: boolean;
    /** Show individual data points. Auto-enabled when data has fewer than 20 items. */
    showPoints?: boolean;
    /** Fill area below the line with a gradient */
    gradientFill?: boolean;
    className?: string;
}
/**
 * Lightweight SVG line chart for inline metric visualization (sparklines, small charts).
 * Pure SVG -- no external charting library required.
 *
 * @example
 * ```tsx
 * <LineChart
 *   data={[{ x: 0, y: 10 }, { x: 1, y: 25 }, { x: 2, y: 18 }]}
 *   height={80}
 *   gradientFill
 * />
 * ```
 */
export declare function LineChart({ data, color, height, showGrid, showAxis, showPoints, gradientFill, className, }: LineChartProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=line-chart.d.ts.map