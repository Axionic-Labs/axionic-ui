'use client';

import { useRef } from 'react';
import { css, cx } from 'styled-system/css';
import { token } from 'styled-system/tokens';

export interface LineChartProps {
	/** Data points to plot */
	data: Array<{ x: number; y: number }>;
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

const styles = {
	root: css({
		w: 'full',
	}),
};

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
export function LineChart({
	data,
	color,
	height = 120,
	showGrid = true,
	showAxis = false,
	showPoints,
	gradientFill = false,
	className,
}: LineChartProps) {
	const idRef = useRef(`lc-${Math.random().toString(36).slice(2, 8)}`);
	const gradientId = `${idRef.current}-grad`;

	if (data.length === 0) return null;

	/** Resolve color -- try as a Panda token first, fall back to raw value */
	const resolvedColor = color
		? (token.var(color as Parameters<typeof token.var>[0], color) as string)
		: 'var(--colors-color-palette-9, var(--colors-teal-9))';

	const padding = {
		top: 10,
		right: 10,
		bottom: showAxis ? 20 : 10,
		left: showAxis ? 30 : 10,
	};
	const width = 200;
	const chartWidth = width - padding.left - padding.right;
	const chartHeight = height - padding.top - padding.bottom;

	const xMin = Math.min(...data.map((d) => d.x));
	const xMax = Math.max(...data.map((d) => d.x));
	const yMin = Math.min(...data.map((d) => d.y)) * 0.9;
	const yMax = Math.max(...data.map((d) => d.y)) * 1.1;

	const scaleX = (x: number) => padding.left + ((x - xMin) / (xMax - xMin || 1)) * chartWidth;
	const scaleY = (y: number) =>
		padding.top + chartHeight - ((y - yMin) / (yMax - yMin || 1)) * chartHeight;

	const linePath = data
		.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.x)} ${scaleY(d.y)}`)
		.join(' ');

	const areaPath =
		`${linePath} L ${scaleX(data[data.length - 1].x)} ${padding.top + chartHeight}` +
		` L ${scaleX(data[0].x)} ${padding.top + chartHeight} Z`;

	const pointsVisible = showPoints ?? data.length < 20;

	/** Grid color uses the `border.muted` token via CSS variable */
	const gridColor = 'var(--colors-border-muted, currentColor)';

	return (
		<svg
			viewBox={`0 0 ${width} ${height}`}
			className={cx(styles.root, className)}
			preserveAspectRatio="none"
			role="img"
			aria-label="Line chart"
		>
			<defs>
				{gradientFill && (
					<linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor={resolvedColor} stopOpacity="0.3" />
						<stop offset="100%" stopColor={resolvedColor} stopOpacity="0" />
					</linearGradient>
				)}
			</defs>

			{/* Grid lines */}
			{showGrid && (
				<g opacity="0.2">
					{[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
						<line
							key={ratio}
							x1={padding.left}
							y1={padding.top + chartHeight * ratio}
							x2={width - padding.right}
							y2={padding.top + chartHeight * ratio}
							stroke={gridColor}
							strokeDasharray="2,4"
						/>
					))}
				</g>
			)}

			{/* Area fill */}
			{gradientFill && <path d={areaPath} fill={`url(#${gradientId})`} />}

			{/* Line */}
			<path
				d={linePath}
				fill="none"
				stroke={resolvedColor}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Data points */}
			{pointsVisible &&
				data.map((d, i) => (
					<circle
						key={`${d.x}-${d.y}-${i}`}
						cx={scaleX(d.x)}
						cy={scaleY(d.y)}
						r="3"
						fill={resolvedColor}
						opacity="0.8"
					/>
				))}

			{/* Y axis labels */}
			{showAxis && (
				<g>
					<text
						x={padding.left - 4}
						y={padding.top + 4}
						textAnchor="end"
						fontSize="8"
						fill={gridColor}
					>
						{yMax.toFixed(0)}
					</text>
					<text
						x={padding.left - 4}
						y={padding.top + chartHeight}
						textAnchor="end"
						fontSize="8"
						fill={gridColor}
					>
						{yMin.toFixed(0)}
					</text>
				</g>
			)}
		</svg>
	);
}
