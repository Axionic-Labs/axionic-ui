export declare const input: {
    className: string;
    jsx: string[];
    base: {
        appearance: "none";
        borderRadius: "l2";
        height: "var(--input-height)";
        minHeight: "var(--input-height)";
        minW: string;
        outline: "0";
        position: "relative";
        textAlign: "start";
        transition: "colors";
        width: "100%";
        _disabled: {
            layerStyle: string;
        };
    };
    defaultVariants: {
        size: string;
        variant: string;
    };
    variants: {
        variant: {
            outline: {
                borderWidth: "1px";
                borderColor: "gray.outline.border";
                focusVisibleRing: string;
                _invalid: {
                    focusRingColor: string;
                    borderColor: "error";
                };
            };
            surface: {
                bg: string;
                borderWidth: "1px";
                borderColor: "gray.surface.border";
                focusVisibleRing: string;
                _invalid: {
                    focusRingColor: string;
                    borderColor: "error";
                };
            };
            subtle: {
                borderWidth: "1px";
                borderColor: "transparent";
                bg: string;
                color: "gray.subtle.fg";
                focusVisibleRing: string;
                _invalid: {
                    focusRingColor: string;
                    borderColor: "error";
                };
            };
            flushed: {
                borderBottomWidth: "1px";
                borderBottomColor: "gray.outline.border";
                borderRadius: "0";
                color: "fg.default";
                px: string;
                _invalid: {
                    borderColor: "error";
                };
                _focus: {
                    borderColor: "colorPalette.solid.bg";
                    boxShadowColor: string;
                    boxShadow: "0 1px 0 0 var(--shadow-color)";
                    _invalid: {
                        borderColor: "error";
                        boxShadowColor: string;
                    };
                };
            };
        };
        size: {
            '2xs': {
                textStyle: string;
                px: string;
                '--input-height': string;
            };
            xs: {
                textStyle: string;
                px: string;
                '--input-height': string;
            };
            sm: {
                textStyle: string;
                px: string;
                '--input-height': string;
            };
            md: {
                textStyle: string;
                px: string;
                '--input-height': string;
            };
            lg: {
                textStyle: string;
                px: string;
                '--input-height': string;
            };
            xl: {
                textStyle: string;
                px: string;
                '--input-height': string;
            };
            '2xl': {
                textStyle: string;
                px: string;
                '--input-height': string;
            };
        };
    };
};
//# sourceMappingURL=input.d.ts.map