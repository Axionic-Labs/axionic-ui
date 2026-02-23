import type { HTMLStyledProps } from 'styled-system/jsx';
export interface LoaderProps extends HTMLStyledProps<'span'> {
    /**
     * Whether the loader is visible
     * @default true
     */
    visible?: boolean | undefined;
    /**
     * The spinner to display when loading
     */
    spinner?: React.ReactNode | undefined;
    /**
     * The placement of the spinner
     * @default "start"
     */
    spinnerPlacement?: 'start' | 'end' | undefined;
    /**
     * The text to display when loading
     */
    text?: React.ReactNode | undefined;
    children?: React.ReactNode;
}
export declare const Loader: import("react").ForwardRefExoticComponent<Omit<LoaderProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=loader.d.ts.map