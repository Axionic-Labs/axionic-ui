export declare const recipes: {
    absoluteCenter: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    badge: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    button: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    code: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    group: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    heading: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    icon: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    input: {
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
    inputAddon: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    kbd: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    link: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    separator: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    skeleton: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    spinner: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    text: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
    textarea: import("@pandacss/types").RecipeConfig<import("@pandacss/types").RecipeVariantRecord>;
};
export declare const slotRecipes: {
    accordion: import("@pandacss/types").SlotRecipeConfig;
    alert: import("@pandacss/types").SlotRecipeConfig;
    avatar: import("@pandacss/types").SlotRecipeConfig;
    breadcrumb: import("@pandacss/types").SlotRecipeConfig;
    card: import("@pandacss/types").SlotRecipeConfig;
    carousel: import("@pandacss/types").SlotRecipeConfig;
    checkbox: import("@pandacss/types").SlotRecipeConfig;
    clipboard: import("@pandacss/types").SlotRecipeConfig;
    collapsible: import("@pandacss/types").SlotRecipeConfig;
    colorPicker: import("@pandacss/types").SlotRecipeConfig;
    combobox: import("@pandacss/types").SlotRecipeConfig;
    datePicker: import("@pandacss/types").SlotRecipeConfig;
    dialog: import("@pandacss/types").SlotRecipeConfig;
    drawer: import("@pandacss/types").SlotRecipeConfig;
    editable: import("@pandacss/types").SlotRecipeConfig;
    field: import("@pandacss/types").SlotRecipeConfig;
    fieldset: import("@pandacss/types").SlotRecipeConfig;
    fileUpload: import("@pandacss/types").SlotRecipeConfig;
    hoverCard: import("@pandacss/types").SlotRecipeConfig;
    inputGroup: import("@pandacss/types").SlotRecipeConfig;
    menu: import("@pandacss/types").SlotRecipeConfig;
    numberInput: import("@pandacss/types").SlotRecipeConfig;
    pagination: import("@pandacss/types").SlotRecipeConfig;
    pinInput: import("@pandacss/types").SlotRecipeConfig;
    popover: import("@pandacss/types").SlotRecipeConfig;
    progress: import("@pandacss/types").SlotRecipeConfig;
    radioCardGroup: import("@pandacss/types").SlotRecipeConfig;
    radioGroup: import("@pandacss/types").SlotRecipeConfig;
    ratingGroup: import("@pandacss/types").SlotRecipeConfig;
    scrollArea: import("@pandacss/types").SlotRecipeConfig;
    segmentGroup: import("@pandacss/types").SlotRecipeConfig;
    select: import("@pandacss/types").SlotRecipeConfig;
    slider: import("@pandacss/types").SlotRecipeConfig;
    splitter: import("@pandacss/types").SlotRecipeConfig;
    switchRecipe: import("@pandacss/types").SlotRecipeConfig;
    table: import("@pandacss/types").SlotRecipeConfig;
    tabs: import("@pandacss/types").SlotRecipeConfig;
    tagsInput: import("@pandacss/types").SlotRecipeConfig;
    toast: import("@pandacss/types").SlotRecipeConfig;
    toggleGroup: import("@pandacss/types").SlotRecipeConfig;
    tooltip: import("@pandacss/types").SlotRecipeConfig;
};
//# sourceMappingURL=index.d.ts.map