export interface DisplayValueProps<T> {
    /** The value to display */
    value?: T | null | undefined;
    /** Optional function to format the value before displaying */
    formatValue?: (value: NonNullable<T>) => string | null | undefined;
}
export declare const DisplayValue: <T>(props: DisplayValueProps<T>) => string | import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=display-value.d.ts.map