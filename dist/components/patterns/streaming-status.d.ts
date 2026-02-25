import { type ReactNode, type MouseEvent } from 'react';
export interface StreamingStep {
    key: string;
    label: string;
}
export interface StreamingStatusProps {
    /** Current operation status label */
    status: string;
    /** Progress percentage (0-100) */
    progress?: number;
    /** Optional step indicators */
    steps?: StreamingStep[];
    /** Key of the currently active step */
    currentStep?: string;
    /** Error message to display */
    error?: string;
    /** Status message below the progress bar */
    message?: string;
    /** Compact single-line mode */
    compact?: boolean;
    /** Renders an abort button when provided */
    onAbort?: (e: MouseEvent<HTMLButtonElement>) => void;
    /** Icon element displayed in the active state (e.g. spinner) */
    activeIcon?: ReactNode;
    /** Icon element displayed in the complete state */
    completeIcon?: ReactNode;
    /** Icon element displayed in the error state */
    errorIcon?: ReactNode;
    /** Whether the operation is complete */
    isComplete?: boolean;
    className?: string;
}
/**
 * Displays progress for async/streaming operations with step indicators,
 * error/success states, and an optional abort button.
 *
 * @example
 * ```tsx
 * <StreamingStatus
 *   status="Generating"
 *   progress={45}
 *   message="Generating output tokens..."
 *   steps={[
 *     { key: 'load', label: 'Loading' },
 *     { key: 'gen', label: 'Generating' },
 *   ]}
 *   currentStep="gen"
 *   onAbort={() => controller.abort()}
 * />
 * ```
 */
export declare function StreamingStatus({ status, progress, steps, currentStep, error, message, compact, onAbort, activeIcon, completeIcon, errorIcon, isComplete, className, }: StreamingStatusProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=streaming-status.d.ts.map