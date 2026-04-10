export declare const input: {
    className: string;
    jsx: string[];
    base: {
        appearance: "none";
        borderRadius: "xl";
        height: "var(--input-height)";
        minHeight: "var(--input-height)";
        minW: string;
        outline: "0";
        position: "relative";
        textAlign: "start";
        transition: "border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease";
        width: "100%";
        _placeholder: {
            color: "app.text.subtle";
        };
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
                bg: string;
                borderWidth: "1px";
                borderColor: "app.border";
                color: "app.text";
                _hover: {
                    borderColor: "app.border.strong";
                    bg: string;
                };
                _focus: {
                    borderColor: "app.accent";
                    boxShadow: "0 0 0 3px {colors.teal.light.a3}";
                    outline: "none";
                    bg: string;
                };
                _invalid: {
                    focusRingColor: string;
                    borderColor: "error";
                };
            };
            surface: {
                bg: string;
                borderWidth: "1px";
                borderColor: "app.border";
                color: "app.text";
                _hover: {
                    borderColor: "app.border.strong";
                    bg: string;
                };
                _focus: {
                    borderColor: "app.accent";
                    boxShadow: "0 0 0 3px {colors.teal.light.a3}";
                    outline: "none";
                    bg: string;
                };
                _invalid: {
                    focusRingColor: string;
                    borderColor: "error";
                };
            };
            subtle: {
                borderWidth: "1px";
                borderColor: "transparent";
                bg: string;
                color: "app.text";
                _focus: {
                    borderColor: "app.border";
                    bg: string;
                    outline: "none";
                };
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