// src/components/patterns/accent-label.tsx
import { css, cx } from "styled-system/css";
import { jsx } from "react/jsx-runtime";
"use client";
var base = css({
  display: "block",
  fontSize: "xs",
  fontWeight: "semibold",
  textTransform: "uppercase",
  letterSpacing: "wider",
  pl: "2",
  borderLeftWidth: "2px"
});
var variants = {
  teal: css({
    color: "colorPalette.11",
    borderLeftColor: "colorPalette.7"
  }),
  wheat: css({
    color: "colorPalette.11",
    borderLeftColor: "colorPalette.7"
  })
};
function AccentLabel({ children, variant = "teal", className }) {
  return /* @__PURE__ */ jsx("span", {
    className: cx(base, variants[variant], className),
    children
  });
}
// src/components/patterns/action-card.tsx
import { css as css2, cx as cx2 } from "styled-system/css";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
"use client";
var styles = {
  root: css2({
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    rounded: "l3",
    p: "6",
    cursor: "pointer",
    boxShadow: "{shadows.whisper}",
    transition: "all 0.2s ease",
    _hover: {
      boxShadow: "{shadows.float}",
      borderColor: "app.border.strong",
      transform: "translateY(-1px)"
    },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.8", outlineOffset: "2px" }
  }),
  iconWrap: css2({
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "app.accent.soft",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "app.accent",
    mb: "3"
  }),
  title: css2({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css2({
    textStyle: "small",
    color: "app.text.muted",
    mt: "1.5"
  })
};
function ActionCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
  onClick,
  className
}) {
  return /* @__PURE__ */ jsxs("div", {
    role: "button",
    tabIndex: 0,
    className: cx2(styles.root, className),
    onClick,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    },
    children: [
      icon && /* @__PURE__ */ jsx2("div", {
        className: styles.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }),
      /* @__PURE__ */ jsx2("div", {
        className: styles.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx2("div", {
        className: styles.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/activity-table.tsx
import { css as css3, cx as cx3 } from "styled-system/css";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
"use client";
var styles2 = {
  root: css3({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    overflow: "hidden"
  }),
  header: css3({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: { base: "4.5", md: "5" },
    borderBottomWidth: "1px",
    borderColor: "app.border"
  }),
  titleBlock: css3({
    display: "flex",
    flexDirection: "column",
    gap: "1.5"
  }),
  title: css3({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css3({
    textStyle: "small",
    color: "app.text.muted"
  }),
  tableWrap: css3({
    overflowX: "auto"
  }),
  table: css3({
    width: "full",
    borderCollapse: "collapse"
  }),
  headCell: css3({
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: "3",
    textStyle: "metricLabel",
    color: "app.text.subtle",
    textAlign: "left",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    bg: "transparent"
  }),
  row: css3({
    borderBottomWidth: "1px",
    borderColor: "app.border",
    _last: {
      borderBottomWidth: "0"
    }
  }),
  rowInteractive: css3({
    cursor: "pointer",
    transition: "background-color 160ms ease",
    _hover: {
      bg: "app.canvas.subtle"
    }
  }),
  cell: css3({
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: "3.5",
    textStyle: "small",
    color: "app.text.muted",
    verticalAlign: "middle"
  }),
  empty: css3({
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: "10",
    textStyle: "body",
    color: "app.text.muted"
  })
};
var alignMap = {
  start: "left",
  center: "center",
  end: "right"
};
function ActivityTable({
  title,
  description,
  actions,
  columns,
  rows,
  emptyState,
  className
}) {
  return /* @__PURE__ */ jsxs2("section", {
    className: cx3(styles2.root, className),
    children: [
      (title || description || actions) && /* @__PURE__ */ jsxs2("div", {
        className: styles2.header,
        children: [
          /* @__PURE__ */ jsxs2("div", {
            className: styles2.titleBlock,
            children: [
              title && /* @__PURE__ */ jsx3("div", {
                className: styles2.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx3("div", {
                className: styles2.description,
                children: description
              })
            ]
          }),
          actions
        ]
      }),
      /* @__PURE__ */ jsx3("div", {
        className: styles2.tableWrap,
        children: /* @__PURE__ */ jsxs2("table", {
          className: styles2.table,
          children: [
            /* @__PURE__ */ jsx3("thead", {
              children: /* @__PURE__ */ jsx3("tr", {
                children: columns.map((column) => /* @__PURE__ */ jsx3("th", {
                  className: styles2.headCell,
                  style: {
                    textAlign: alignMap[column.align ?? "start"],
                    width: column.width
                  },
                  children: column.label
                }, column.key))
              })
            }),
            /* @__PURE__ */ jsx3("tbody", {
              children: rows.length === 0 ? /* @__PURE__ */ jsx3("tr", {
                children: /* @__PURE__ */ jsx3("td", {
                  className: styles2.empty,
                  colSpan: columns.length,
                  children: emptyState ?? "No activity to show yet."
                })
              }) : rows.map((row) => /* @__PURE__ */ jsx3("tr", {
                className: cx3(styles2.row, row.onClick && styles2.rowInteractive),
                onClick: row.onClick,
                role: row.onClick ? "button" : undefined,
                onKeyDown: (event) => {
                  if (!row.onClick) {
                    return;
                  }
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    row.onClick();
                  }
                },
                tabIndex: row.onClick ? 0 : undefined,
                children: columns.map((column) => /* @__PURE__ */ jsx3("td", {
                  className: styles2.cell,
                  style: { textAlign: alignMap[column.align ?? "start"] },
                  children: row.cells[column.key]
                }, column.key))
              }, row.id))
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/amount-selector.tsx
import { useState } from "react";
import { css as css4, cx as cx4 } from "styled-system/css";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
"use client";
var styles3 = {
  root: css4({
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    rounded: "l3",
    p: "6",
    display: "flex",
    flexDir: "column",
    gap: "5"
  }),
  sectionLabel: css4({
    textStyle: "caption",
    color: "app.text.subtle",
    mb: "3"
  }),
  presetRow: css4({
    display: "flex",
    flexWrap: "wrap",
    gap: "2"
  }),
  presetBase: css4({
    px: "5",
    py: "2",
    rounded: "full",
    fontWeight: "medium",
    fontSize: "sm",
    cursor: "pointer",
    transition: "all 150ms",
    borderWidth: "1px"
  }),
  presetActive: css4({
    bg: "app.accent",
    color: "app.text.inverse",
    borderColor: "transparent"
  }),
  presetInactive: css4({
    bg: "app.surface.muted",
    color: "app.text",
    borderColor: "transparent",
    _hover: {
      bg: "app.canvas.subtle",
      color: "app.text"
    }
  }),
  inputLabel: css4({
    textStyle: "caption",
    color: "app.text.subtle",
    mb: "2"
  }),
  inputRow: css4({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  currencySymbol: css4({
    fontSize: "lg",
    color: "app.text.subtle"
  }),
  input: css4({
    flex: 1,
    px: "3",
    py: "2",
    rounded: "l2",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    color: "app.text",
    fontSize: "sm",
    outline: "none",
    _focus: {
      ringWidth: "2px",
      ringColor: "app.accent.soft",
      ringOffset: "0"
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed"
    }
  }),
  currencyCode: css4({
    fontSize: "sm",
    color: "app.text.subtle"
  }),
  validationError: css4({
    fontSize: "xs",
    color: "fg.error",
    mt: "1"
  }),
  submitBtn: css4({
    alignSelf: "flex-end",
    px: "8",
    py: "2.5",
    rounded: "full",
    fontWeight: "medium",
    fontSize: "sm",
    bg: "app.accent",
    color: "app.text.inverse",
    cursor: "pointer",
    transition: "all 150ms",
    borderWidth: "0",
    _hover: {
      opacity: 0.92
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed"
    }
  })
};
function AmountSelector({
  presets = [5, 10, 25, 50, 100],
  value,
  customValue,
  onChange,
  onCustomValueChange,
  min = 5,
  max = 500,
  currency = "$",
  loading = false,
  disabled = false,
  onSubmit,
  submitLabel,
  className
}) {
  const [customInput, setCustomInput] = useState("");
  const resolvedCustomInput = customValue ?? customInput;
  const validationError = value < min ? `Minimum amount is ${currency}${min}` : value > max ? `Maximum amount is ${currency}${max}` : null;
  const handlePresetClick = (preset) => {
    setCustomInput("");
    onCustomValueChange?.("");
    onChange(preset);
  };
  const handleCustomChange = (raw) => {
    setCustomInput(raw);
    onCustomValueChange?.(raw);
    const parsed = Number.parseFloat(raw);
    if (!Number.isNaN(parsed) && parsed > 0) {
      onChange(parsed);
    }
  };
  const resolvedLabel = loading ? "Processing..." : typeof submitLabel === "function" ? submitLabel(value) : typeof submitLabel === "string" ? submitLabel : `${currency}${value.toFixed(2)}`;
  const isSubmitDisabled = disabled || loading || !!validationError || value <= 0;
  return /* @__PURE__ */ jsxs3("div", {
    className: cx4(styles3.root, className),
    children: [
      /* @__PURE__ */ jsxs3("div", {
        children: [
          /* @__PURE__ */ jsx4("div", {
            className: styles3.sectionLabel,
            children: "Select an amount"
          }),
          /* @__PURE__ */ jsx4("div", {
            className: styles3.presetRow,
            children: presets.map((preset) => /* @__PURE__ */ jsxs3("button", {
              type: "button",
              disabled,
              onClick: () => handlePresetClick(preset),
              className: cx4(styles3.presetBase, value === preset && !resolvedCustomInput ? styles3.presetActive : styles3.presetInactive),
              children: [
                currency,
                preset
              ]
            }, preset))
          })
        ]
      }),
      /* @__PURE__ */ jsxs3("div", {
        children: [
          /* @__PURE__ */ jsx4("div", {
            className: styles3.inputLabel,
            children: "Or enter a custom amount"
          }),
          /* @__PURE__ */ jsxs3("div", {
            className: styles3.inputRow,
            children: [
              /* @__PURE__ */ jsx4("span", {
                className: styles3.currencySymbol,
                children: currency
              }),
              /* @__PURE__ */ jsx4("input", {
                type: "number",
                min,
                max,
                step: "0.01",
                value: resolvedCustomInput,
                onChange: (e) => handleCustomChange(e.target.value),
                placeholder: `${min} - ${max}`,
                disabled,
                className: styles3.input
              }),
              /* @__PURE__ */ jsx4("span", {
                className: styles3.currencyCode,
                children: "USD"
              })
            ]
          }),
          validationError && resolvedCustomInput && /* @__PURE__ */ jsx4("div", {
            className: styles3.validationError,
            children: validationError
          })
        ]
      }),
      onSubmit && /* @__PURE__ */ jsx4("button", {
        type: "button",
        disabled: isSubmitDisabled,
        onClick: onSubmit,
        className: styles3.submitBtn,
        children: resolvedLabel
      })
    ]
  });
}
// src/components/patterns/choice-segment.tsx
import { css as css5, cx as cx5 } from "styled-system/css";

// src/components/ui/segment-group.tsx
import { SegmentGroup } from "@ark-ui/react/segment-group";
import { useMemo } from "react";
import { createStyleContext } from "styled-system/jsx";
import { segmentGroup } from "styled-system/recipes";
import { SegmentGroupContext } from "@ark-ui/react/segment-group";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
"use client";
var { withProvider, withContext } = createStyleContext(segmentGroup);
var Root = withProvider(SegmentGroup.Root, "root", {
  defaultProps: { orientation: "horizontal" },
  forwardProps: ["orientation"]
});
var RootProvider = withProvider(SegmentGroup.RootProvider, "root");
var Indicator = withContext(SegmentGroup.Indicator, "indicator");
var Item = withContext(SegmentGroup.Item, "item");
var ItemControl = withContext(SegmentGroup.ItemControl, "itemControl");
var ItemHiddenInput = SegmentGroup.ItemHiddenInput;
var ItemText = withContext(SegmentGroup.ItemText, "itemText");
var Label = withContext(SegmentGroup.Label, "label");

// src/components/patterns/choice-segment.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var styles4 = {
  root: css5({
    width: "100%"
  }),
  item: css5({
    minWidth: 0
  }),
  control: css5({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    width: "100%",
    paddingX: "3"
  }),
  label: css5({
    whiteSpace: "nowrap"
  })
};
function ChoiceSegment({
  value,
  onValueChange,
  items,
  size = "sm",
  fitted = true,
  className
}) {
  return /* @__PURE__ */ jsxs5(Root, {
    value,
    onValueChange: (details) => {
      if (details.value) {
        onValueChange(details.value);
      }
    },
    size,
    fitted,
    className: cx5(styles4.root, className),
    children: [
      /* @__PURE__ */ jsx6(Indicator, {}),
      items.map((item) => /* @__PURE__ */ jsxs5(Item, {
        value: item.value,
        className: styles4.item,
        children: [
          /* @__PURE__ */ jsx6(ItemHiddenInput, {}),
          /* @__PURE__ */ jsxs5(ItemControl, {
            className: styles4.control,
            children: [
              item.icon,
              /* @__PURE__ */ jsx6(ItemText, {
                className: styles4.label,
                children: item.label
              })
            ]
          })
        ]
      }, item.value))
    ]
  });
}
// src/components/patterns/collection-page-header.tsx
import { css as css8, cx as cx8 } from "styled-system/css";

// src/components/patterns/list-toolbar.tsx
import { css as css6, cx as cx6 } from "styled-system/css";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
"use client";
var styles5 = {
  root: css6({
    display: "flex",
    alignItems: { base: "stretch", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", xl: "row" },
    gap: "3"
  }),
  panel: css6({
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface"
  }),
  inline: css6({
    padding: "0",
    borderRadius: "0",
    borderWidth: "0",
    bg: "transparent"
  }),
  leading: css6({
    display: "flex",
    alignItems: { base: "stretch", lg: "center" },
    flexDirection: { base: "column", lg: "row" },
    flexWrap: "wrap",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  filters: css6({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5",
    minWidth: 0
  }),
  meta: css6({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css6({
    display: "flex",
    alignItems: "center",
    justifyContent: { base: "flex-start", xl: "flex-end" },
    flexWrap: "wrap",
    gap: "2.5"
  })
};
function ListToolbar({
  search,
  filters,
  meta,
  actions,
  variant = "panel",
  className
}) {
  return /* @__PURE__ */ jsxs6("div", {
    className: cx6(styles5.root, variant === "panel" ? styles5.panel : styles5.inline, className),
    children: [
      /* @__PURE__ */ jsxs6("div", {
        className: styles5.leading,
        children: [
          search,
          filters && /* @__PURE__ */ jsx7("div", {
            className: styles5.filters,
            children: filters
          }),
          meta && /* @__PURE__ */ jsx7("div", {
            className: styles5.meta,
            children: meta
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx7("div", {
        className: styles5.actions,
        children: actions
      })
    ]
  });
}

// src/components/patterns/page-intro.tsx
import { css as css7, cx as cx7 } from "styled-system/css";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
"use client";
var styles6 = {
  root: css7({
    display: "flex",
    flexDirection: "column",
    gap: "3.5"
  }),
  row: css7({
    display: "flex",
    flexDirection: { base: "column", lg: "row" },
    alignItems: { base: "flex-start", lg: "flex-start" },
    justifyContent: "space-between",
    gap: "3.5"
  }),
  copy: css7({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    maxWidth: "3xl"
  }),
  eyebrow: css7({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css7({
    textStyle: "pageTitle",
    color: "app.text"
  }),
  description: css7({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "2xl"
  }),
  meta: css7({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5",
    color: "app.text.muted"
  }),
  actions: css7({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  children: css7({
    display: "flex",
    flexDirection: "column",
    gap: "2.5"
  })
};
function PageIntro({
  eyebrow,
  title,
  description,
  meta,
  actions,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs7("div", {
    className: cx7(styles6.root, className),
    children: [
      /* @__PURE__ */ jsxs7("div", {
        className: styles6.row,
        children: [
          /* @__PURE__ */ jsxs7("div", {
            className: styles6.copy,
            children: [
              eyebrow && /* @__PURE__ */ jsx8("div", {
                className: styles6.eyebrow,
                children: eyebrow
              }),
              /* @__PURE__ */ jsx8("div", {
                className: styles6.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx8("div", {
                className: styles6.description,
                children: description
              }),
              meta && /* @__PURE__ */ jsx8("div", {
                className: styles6.meta,
                children: meta
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx8("div", {
            className: styles6.actions,
            children: actions
          })
        ]
      }),
      children && /* @__PURE__ */ jsx8("div", {
        className: styles6.children,
        children
      })
    ]
  });
}

// src/components/patterns/collection-page-header.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
"use client";
var styles7 = {
  root: css8({
    display: "flex",
    flexDirection: "column",
    gap: "4"
  })
};
function CollectionPageHeader({
  search,
  filters,
  toolbarMeta,
  toolbarActions,
  children,
  className,
  ...pageIntroProps
}) {
  const hasToolbar = Boolean(search || filters || toolbarMeta || toolbarActions);
  return /* @__PURE__ */ jsx9("div", {
    className: cx8(styles7.root, className),
    children: /* @__PURE__ */ jsxs8(PageIntro, {
      ...pageIntroProps,
      children: [
        hasToolbar && /* @__PURE__ */ jsx9(ListToolbar, {
          variant: "inline",
          search,
          filters,
          meta: toolbarMeta,
          actions: toolbarActions
        }),
        children
      ]
    })
  });
}
// src/components/patterns/confirm-dialog.tsx
import { css as css9, cx as cx9 } from "styled-system/css";

// src/components/ui/button.tsx
import { ark as ark4 } from "@ark-ui/react/factory";
import { createContext, mergeProps } from "@ark-ui/react/utils";
import { forwardRef as forwardRef2, useMemo as useMemo2 } from "react";
import { styled as styled5 } from "styled-system/jsx";
import { button } from "styled-system/recipes";

// src/components/ui/group.tsx
import { ark } from "@ark-ui/react";
import { styled } from "styled-system/jsx";
import { group } from "styled-system/recipes";
var Group = styled(ark.div, group);

// src/components/ui/loader.tsx
import { forwardRef } from "react";

// src/components/ui/absolute-center.tsx
import { ark as ark2 } from "@ark-ui/react/factory";
import { styled as styled2 } from "styled-system/jsx";
import { absoluteCenter } from "styled-system/recipes";
var AbsoluteCenter = styled2(ark2.div, absoluteCenter);

// src/components/ui/span.tsx
import { styled as styled3 } from "styled-system/jsx";
var Span = styled3("span");

// src/components/ui/spinner.tsx
import { ark as ark3 } from "@ark-ui/react/factory";
import { styled as styled4 } from "styled-system/jsx";
import { spinner } from "styled-system/recipes";
var Spinner = styled4(ark3.span, spinner);

// src/components/ui/loader.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
"use client";
var Loader = forwardRef(function Loader2(props, ref) {
  const {
    spinner: spinner2 = /* @__PURE__ */ jsx10(Spinner, {
      size: "inherit",
      borderWidth: "0.125em",
      color: "inherit"
    }),
    spinnerPlacement = "start",
    children,
    text,
    visible = true,
    ...rest
  } = props;
  if (!visible)
    return children;
  if (text) {
    return /* @__PURE__ */ jsxs9(Span, {
      ref,
      display: "contents",
      ...rest,
      children: [
        spinnerPlacement === "start" && spinner2,
        text,
        spinnerPlacement === "end" && spinner2
      ]
    });
  }
  if (spinner2) {
    return /* @__PURE__ */ jsxs9(Span, {
      ref,
      display: "contents",
      ...rest,
      children: [
        /* @__PURE__ */ jsx10(AbsoluteCenter, {
          display: "inline-flex",
          children: spinner2
        }),
        /* @__PURE__ */ jsx10(Span, {
          visibility: "hidden",
          display: "contents",
          children
        })
      ]
    });
  }
  return /* @__PURE__ */ jsx10(Span, {
    ref,
    display: "contents",
    ...rest,
    children
  });
});

// src/components/ui/button.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
"use client";
var BaseButton = styled5(ark4.button, button);
var Button = forwardRef2(function Button2(props, ref) {
  const propsContext = useButtonPropsContext();
  const buttonProps = useMemo2(() => mergeProps(propsContext, props), [propsContext, props]);
  const { loading, loadingText, children, spinner: spinner2, spinnerPlacement, ...rest } = buttonProps;
  return /* @__PURE__ */ jsx11(BaseButton, {
    type: "button",
    ref,
    ...rest,
    "data-loading": loading ? "" : undefined,
    disabled: loading || rest.disabled,
    children: !props.asChild && loading ? /* @__PURE__ */ jsx11(Loader, {
      spinner: spinner2,
      text: loadingText,
      spinnerPlacement,
      children
    }) : children
  });
});
var ButtonGroup = forwardRef2(function ButtonGroup2(props, ref) {
  const [variantProps, otherProps] = useMemo2(() => button.splitVariantProps(props), [props]);
  return /* @__PURE__ */ jsx11(ButtonPropsProvider, {
    value: variantProps,
    children: /* @__PURE__ */ jsx11(Group, {
      ref,
      ...otherProps
    })
  });
});
var [ButtonPropsProvider, useButtonPropsContext] = createContext({
  name: "ButtonPropsContext",
  hookName: "useButtonPropsContext",
  providerName: "<PropsProvider />",
  strict: false
});

// src/components/ui/dialog.tsx
import { Dialog, useDialogContext } from "@ark-ui/react/dialog";
import { ark as ark5 } from "@ark-ui/react/factory";
import { forwardRef as forwardRef3 } from "react";
import { createStyleContext as createStyleContext2, styled as styled6 } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";
import { DialogContext } from "@ark-ui/react/dialog";
import { jsx as jsx12 } from "react/jsx-runtime";
"use client";
var { withRootProvider, withContext: withContext2 } = createStyleContext2(dialog);
var Root2 = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider2 = withRootProvider(Dialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Backdrop = withContext2(Dialog.Backdrop, "backdrop");
var CloseTrigger = withContext2(Dialog.CloseTrigger, "closeTrigger");
var Content = withContext2(Dialog.Content, "content");
var Description = withContext2(Dialog.Description, "description");
var Positioner = withContext2(Dialog.Positioner, "positioner");
var Title = withContext2(Dialog.Title, "title");
var Trigger = withContext2(Dialog.Trigger, "trigger");
var Body = withContext2(ark5.div, "body");
var Header = withContext2(ark5.div, "header");
var Footer = withContext2(ark5.div, "footer");
var StyledButton = styled6(ark5.button);
var ActionTrigger = forwardRef3(function ActionTrigger2(props, ref) {
  const dialog2 = useDialogContext();
  return /* @__PURE__ */ jsx12(StyledButton, {
    ...props,
    ref,
    onClick: () => dialog2.setOpen(false)
  });
});

// src/components/patterns/confirm-dialog.tsx
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
"use client";
var accentBar = css9({
  h: "3px",
  w: "full",
  roundedTop: "l3"
});
var tealGradient = css9({
  background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
});
var dangerGradient = css9({
  background: "linear-gradient(90deg, {colors.fg.error}, {colors.fg.warning})"
});
var bodyText = css9({
  textStyle: "sm",
  color: "fg.muted",
  lineHeight: "1.6"
});
function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmVariant = "solid",
  destructive = false,
  size = "sm",
  className
}) {
  return /* @__PURE__ */ jsxs10(Root2, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: [
      /* @__PURE__ */ jsx13(Backdrop, {}),
      /* @__PURE__ */ jsx13(Positioner, {
        children: /* @__PURE__ */ jsxs10(Content, {
          className,
          children: [
            /* @__PURE__ */ jsx13("div", {
              className: cx9(accentBar, destructive ? dangerGradient : tealGradient)
            }),
            /* @__PURE__ */ jsx13(Header, {
              children: /* @__PURE__ */ jsx13(Title, {
                children: title
              })
            }),
            /* @__PURE__ */ jsx13(Body, {
              children: typeof children === "string" ? /* @__PURE__ */ jsx13("p", {
                className: bodyText,
                children
              }) : children
            }),
            /* @__PURE__ */ jsxs10(Footer, {
              children: [
                /* @__PURE__ */ jsx13(CloseTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx13(Button, {
                    variant: "outline",
                    size: "sm",
                    children: cancelLabel
                  })
                }),
                /* @__PURE__ */ jsx13(Button, {
                  variant: destructive ? "danger" : confirmVariant,
                  size: "sm",
                  onClick: () => {
                    onOpenChange(false);
                    onConfirm();
                  },
                  children: confirmLabel
                })
              ]
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/credential-card.tsx
import { css as css10, cx as cx10 } from "styled-system/css";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
"use client";
var styles8 = {
  root: css10({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    padding: { base: "5", md: "6" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  header: css10({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4"
  }),
  headerCopy: css10({
    display: "flex",
    alignItems: "center",
    gap: "3.5",
    minWidth: 0
  }),
  iconWrap: css10({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "12",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    color: "app.accent",
    flexShrink: 0
  }),
  copy: css10({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  title: css10({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css10({
    textStyle: "small",
    color: "app.text.muted"
  }),
  status: css10({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    flexShrink: 0
  }),
  body: css10({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    color: "app.text.muted"
  }),
  footer: css10({
    paddingTop: "4",
    borderTopWidth: "1px",
    borderColor: "app.border",
    color: "app.text.muted"
  })
};
function CredentialCard({
  icon,
  title,
  description,
  status,
  children,
  footer,
  className
}) {
  return /* @__PURE__ */ jsxs11("section", {
    className: cx10(styles8.root, className),
    children: [
      /* @__PURE__ */ jsxs11("div", {
        className: styles8.header,
        children: [
          /* @__PURE__ */ jsxs11("div", {
            className: styles8.headerCopy,
            children: [
              icon && /* @__PURE__ */ jsx14("div", {
                className: styles8.iconWrap,
                children: icon
              }),
              /* @__PURE__ */ jsxs11("div", {
                className: styles8.copy,
                children: [
                  /* @__PURE__ */ jsx14("div", {
                    className: styles8.title,
                    children: title
                  }),
                  description && /* @__PURE__ */ jsx14("div", {
                    className: styles8.description,
                    children: description
                  })
                ]
              })
            ]
          }),
          status && /* @__PURE__ */ jsx14("div", {
            className: styles8.status,
            children: status
          })
        ]
      }),
      children && /* @__PURE__ */ jsx14("div", {
        className: styles8.body,
        children
      }),
      footer && /* @__PURE__ */ jsx14("div", {
        className: styles8.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/credit-pill.tsx
import { css as css11, cx as cx11 } from "styled-system/css";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
"use client";
var styles9 = {
  root: css11({
    display: "inline-flex",
    alignItems: "center",
    gap: "2.5",
    minHeight: "9",
    paddingLeft: "3",
    paddingRight: "3",
    borderRadius: "full",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  icon: css11({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "7",
    borderRadius: "full",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  text: css11({
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  label: css11({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  }),
  valueRow: css11({
    display: "flex",
    alignItems: "baseline",
    gap: "2"
  }),
  value: css11({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  detail: css11({
    textStyle: "small",
    color: "app.text.muted"
  })
};
var toneStyles = {
  default: css11({}),
  accent: css11({
    bg: "app.accent.soft",
    borderColor: "app.border.strong"
  }),
  success: css11({
    bg: "bg.success",
    borderColor: "border.success"
  }),
  warning: css11({
    bg: "bg.warning",
    borderColor: "border.warning"
  })
};
var inlineText = css11({
  display: "inline-flex",
  alignItems: "center",
  gap: "1.5"
});
var inlineLabel = css11({
  textStyle: "toolbarLabel",
  color: "app.text"
});
function CreditPill({
  label = "Credits",
  value,
  detail,
  icon,
  tone = "default",
  layout = "inline",
  className
}) {
  return /* @__PURE__ */ jsxs12("div", {
    className: cx11(styles9.root, toneStyles[tone], className),
    children: [
      icon && /* @__PURE__ */ jsx15("span", {
        className: styles9.icon,
        children: icon
      }),
      layout === "stacked" ? /* @__PURE__ */ jsxs12("span", {
        className: styles9.text,
        children: [
          /* @__PURE__ */ jsx15("span", {
            className: styles9.label,
            children: label
          }),
          /* @__PURE__ */ jsxs12("span", {
            className: styles9.valueRow,
            children: [
              /* @__PURE__ */ jsx15("span", {
                className: styles9.value,
                children: value
              }),
              detail && /* @__PURE__ */ jsx15("span", {
                className: styles9.detail,
                children: detail
              })
            ]
          })
        ]
      }) : /* @__PURE__ */ jsxs12("span", {
        className: inlineText,
        children: [
          /* @__PURE__ */ jsx15("span", {
            className: styles9.value,
            children: value
          }),
          label && /* @__PURE__ */ jsx15("span", {
            className: inlineLabel,
            children: label
          }),
          detail && /* @__PURE__ */ jsx15("span", {
            className: styles9.detail,
            children: detail
          })
        ]
      })
    ]
  });
}
// src/components/patterns/detail-dialog.tsx
import { css as css12, cx as cx12 } from "styled-system/css";

// src/components/ui/close-button.tsx
import { XIcon } from "lucide-react";
import { forwardRef as forwardRef5 } from "react";

// src/components/ui/icon-button.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var IconButton = forwardRef4(function IconButton2(props, ref) {
  return /* @__PURE__ */ jsx16(Button, {
    px: "0",
    py: "0",
    ref,
    ...props
  });
});

// src/components/ui/close-button.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var CloseButton = forwardRef5(function CloseButton2(props, ref) {
  return /* @__PURE__ */ jsx17(IconButton, {
    variant: "plain",
    colorPalette: "gray",
    "aria-label": "Close",
    ref,
    ...props,
    children: props.children ?? /* @__PURE__ */ jsx17(XIcon, {})
  });
});

// src/components/patterns/detail-dialog.tsx
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
"use client";
var styles10 = {
  accentBar: css12({
    h: "3px",
    w: "full",
    roundedTop: "l3",
    background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
  }),
  header: css12({
    display: "flex",
    flexDirection: "column",
    gap: "3"
  }),
  eyebrow: css12({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  headerRow: css12({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "3",
    minWidth: 0,
    paddingRight: "10"
  }),
  headerCopy: css12({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  description: css12({
    color: "app.text.muted",
    textStyle: "small",
    maxWidth: "2xl"
  }),
  actions: css12({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  body: css12({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    color: "app.text.muted"
  })
};
function DetailDialog({
  open,
  onOpenChange,
  title,
  description,
  eyebrow,
  actions,
  children,
  footer,
  size = "lg",
  className
}) {
  return /* @__PURE__ */ jsxs13(Root2, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: [
      /* @__PURE__ */ jsx18(Backdrop, {}),
      /* @__PURE__ */ jsx18(Positioner, {
        children: /* @__PURE__ */ jsxs13(Content, {
          className,
          children: [
            /* @__PURE__ */ jsx18("div", {
              className: styles10.accentBar
            }),
            /* @__PURE__ */ jsx18(CloseTrigger, {
              asChild: true,
              children: /* @__PURE__ */ jsx18(CloseButton, {
                size: "sm",
                "aria-label": "Close dialog"
              })
            }),
            /* @__PURE__ */ jsxs13(Header, {
              className: styles10.header,
              children: [
                eyebrow && /* @__PURE__ */ jsx18("div", {
                  className: styles10.eyebrow,
                  children: eyebrow
                }),
                /* @__PURE__ */ jsxs13("div", {
                  className: styles10.headerRow,
                  children: [
                    /* @__PURE__ */ jsxs13("div", {
                      className: styles10.headerCopy,
                      children: [
                        /* @__PURE__ */ jsx18(Title, {
                          children: title
                        }),
                        description && /* @__PURE__ */ jsx18(Description, {
                          className: styles10.description,
                          children: description
                        })
                      ]
                    }),
                    actions && /* @__PURE__ */ jsx18("div", {
                      className: styles10.actions,
                      children: actions
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsx18(Body, {
              className: cx12(styles10.body),
              children
            }),
            footer && /* @__PURE__ */ jsx18(Footer, {
              children: footer
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/detail-panel.tsx
import { css as css13, cx as cx13 } from "styled-system/css";
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
"use client";
var styles11 = {
  root: css13({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    padding: { base: "5", md: "6" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  header: css13({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4"
  }),
  headerCopy: css13({
    display: "flex",
    alignItems: "flex-start",
    gap: "3.5",
    minWidth: 0
  }),
  iconWrap: css13({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "10",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    color: "app.accent",
    flexShrink: 0
  }),
  copy: css13({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  eyebrow: css13({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css13({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css13({
    textStyle: "small",
    color: "app.text.muted"
  }),
  meta: css13({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    color: "app.text.subtle",
    textStyle: "caption"
  }),
  actions: css13({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  body: css13({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minWidth: 0,
    color: "app.text.muted"
  }),
  footer: css13({
    paddingTop: "4",
    borderTopWidth: "1px",
    borderColor: "app.border",
    color: "app.text.muted"
  })
};
function DetailPanel({
  eyebrow,
  title,
  description,
  icon,
  meta,
  actions,
  children,
  footer,
  className
}) {
  return /* @__PURE__ */ jsxs14("section", {
    className: cx13(styles11.root, className),
    children: [
      (eyebrow || title || description || icon || meta || actions) && /* @__PURE__ */ jsxs14("div", {
        className: styles11.header,
        children: [
          /* @__PURE__ */ jsxs14("div", {
            className: styles11.headerCopy,
            children: [
              icon && /* @__PURE__ */ jsx19("div", {
                className: styles11.iconWrap,
                children: icon
              }),
              /* @__PURE__ */ jsxs14("div", {
                className: styles11.copy,
                children: [
                  eyebrow && /* @__PURE__ */ jsx19("div", {
                    className: styles11.eyebrow,
                    children: eyebrow
                  }),
                  title && /* @__PURE__ */ jsx19("div", {
                    className: styles11.title,
                    children: title
                  }),
                  description && /* @__PURE__ */ jsx19("div", {
                    className: styles11.description,
                    children: description
                  }),
                  meta && /* @__PURE__ */ jsx19("div", {
                    className: styles11.meta,
                    children: meta
                  })
                ]
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx19("div", {
            className: styles11.actions,
            children: actions
          })
        ]
      }),
      children && /* @__PURE__ */ jsx19("div", {
        className: styles11.body,
        children
      }),
      footer && /* @__PURE__ */ jsx19("div", {
        className: styles11.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/empty-state.tsx
import { css as css14, cx as cx14 } from "styled-system/css";
import { jsx as jsx20, jsxs as jsxs15 } from "react/jsx-runtime";
"use client";
var styles12 = {
  root: css14({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    py: "16",
    px: "6"
  }),
  iconWrap: css14({
    w: "14",
    h: "14",
    rounded: "full",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9",
    mb: "4"
  }),
  title: css14({
    textStyle: "h3",
    color: "fg.default"
  }),
  description: css14({
    textStyle: "body",
    color: "fg.muted",
    mt: "2",
    maxW: "md"
  }),
  action: css14({
    mt: "6"
  })
};
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs15("div", {
    className: cx14(styles12.root, className),
    children: [
      icon && /* @__PURE__ */ jsx20("div", {
        className: styles12.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx20("h3", {
        className: styles12.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx20("p", {
        className: styles12.description,
        children: description
      }),
      action && /* @__PURE__ */ jsx20("div", {
        className: styles12.action,
        children: action
      })
    ]
  });
}
// src/components/patterns/entity-card.tsx
import { css as css15, cx as cx15 } from "styled-system/css";

// src/components/ui/card.tsx
import { ark as ark6 } from "@ark-ui/react/factory";
import { createStyleContext as createStyleContext3 } from "styled-system/jsx";
import { card } from "styled-system/recipes";
"use client";
var { withProvider: withProvider2, withContext: withContext3 } = createStyleContext3(card);
var Root3 = withProvider2(ark6.div, "root");
var Header2 = withContext3(ark6.div, "header");
var Body2 = withContext3(ark6.div, "body");
var Footer2 = withContext3(ark6.h3, "footer");
var Title2 = withContext3(ark6.h3, "title");
var Description2 = withContext3(ark6.div, "description");

// src/components/patterns/entity-card.tsx
import { jsx as jsx21, jsxs as jsxs16 } from "react/jsx-runtime";
"use client";
var styles13 = {
  root: css15({
    overflow: "hidden",
    borderColor: "app.border",
    bg: "app.surface",
    transition: "all 160ms ease"
  }),
  selected: css15({
    bg: "app.accent.soft",
    borderColor: "app.border.strong",
    borderLeftWidth: "3px",
    borderLeftColor: "app.accent"
  }),
  rootHover: css15({
    _hover: {
      bg: "app.surface.muted",
      borderColor: "app.border.strong"
    }
  }),
  accentBar: css15({
    h: "1.5",
    bg: "app.accent.soft",
    roundedTop: "l3"
  }),
  accentBarWheat: css15({
    bg: "wheat.2"
  }),
  body: css15({
    padding: "5",
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minWidth: 0
  }),
  interactive: css15({
    cursor: "pointer",
    userSelect: "none",
    outline: "none"
  }),
  header: css15({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4"
  }),
  lead: css15({
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    flex: "1",
    minWidth: 0
  }),
  iconWrap: css15({
    boxSize: "10",
    rounded: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "app.accent"
  }),
  copy: css15({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0,
    flex: "1"
  }),
  title: css15({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css15({
    textStyle: "small",
    color: "app.text.muted",
    lineHeight: "1.45"
  }),
  meta: css15({
    display: "flex",
    alignItems: "center",
    gap: "3",
    flexWrap: "wrap",
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css15({
    display: "flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap",
    flexShrink: 0,
    marginLeft: "2"
  }),
  content: css15({
    display: "flex",
    flexDirection: "column",
    gap: "3",
    minWidth: 0
  }),
  footer: css15({
    display: "flex",
    flexWrap: "wrap",
    gap: "2.5",
    paddingTop: "2",
    borderTopWidth: "1px",
    borderColor: "app.border"
  })
};
function handleKeyDown(event, onClick) {
  if (!onClick)
    return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onClick();
  }
}
function EntityCard({
  icon,
  title,
  description,
  meta,
  actions,
  children,
  footer,
  selected = false,
  accent = "teal",
  onClick,
  className
}) {
  const interactive = Boolean(onClick);
  return /* @__PURE__ */ jsxs16(Root3, {
    gradient: true,
    accent,
    hover: interactive,
    className: cx15(styles13.root, interactive && styles13.rootHover, selected && styles13.selected, className),
    children: [
      /* @__PURE__ */ jsx21("div", {
        className: cx15(styles13.accentBar, accent === "wheat" && styles13.accentBarWheat)
      }),
      /* @__PURE__ */ jsxs16(Body2, {
        className: cx15(styles13.body, interactive && styles13.interactive),
        onClick,
        onKeyDown: (event) => handleKeyDown(event, onClick),
        role: interactive ? "button" : undefined,
        tabIndex: interactive ? 0 : undefined,
        children: [
          /* @__PURE__ */ jsxs16("div", {
            className: styles13.header,
            children: [
              /* @__PURE__ */ jsxs16("div", {
                className: styles13.lead,
                children: [
                  icon && /* @__PURE__ */ jsx21("div", {
                    className: styles13.iconWrap,
                    children: icon
                  }),
                  /* @__PURE__ */ jsxs16("div", {
                    className: styles13.copy,
                    children: [
                      /* @__PURE__ */ jsx21("div", {
                        className: styles13.title,
                        children: title
                      }),
                      description && /* @__PURE__ */ jsx21("div", {
                        className: styles13.description,
                        children: description
                      }),
                      meta && /* @__PURE__ */ jsx21("div", {
                        className: styles13.meta,
                        children: meta
                      })
                    ]
                  })
                ]
              }),
              actions && /* @__PURE__ */ jsx21("div", {
                className: styles13.actions,
                children: actions
              })
            ]
          }),
          children && /* @__PURE__ */ jsx21("div", {
            className: styles13.content,
            children
          }),
          footer && /* @__PURE__ */ jsx21("div", {
            className: styles13.footer,
            children: footer
          })
        ]
      })
    ]
  });
}
// src/components/patterns/feature-card.tsx
import { css as css16, cx as cx16 } from "styled-system/css";
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
"use client";
var styles14 = {
  root: css16({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    transition: "border-color 0.2s ease",
    _hover: { borderColor: "colorPalette.7" }
  }),
  iconWrap: css16({
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9",
    mb: "4"
  }),
  title: css16({
    textStyle: "label",
    color: "fg.default",
    mb: "2"
  }),
  description: css16({
    textStyle: "small",
    color: "fg.muted"
  })
};
function FeatureCard({ title, description, icon, className }) {
  return /* @__PURE__ */ jsxs17("div", {
    className: cx16(styles14.root, className),
    children: [
      icon && /* @__PURE__ */ jsx22("div", {
        className: styles14.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx22("div", {
        className: styles14.title,
        children: title
      }),
      /* @__PURE__ */ jsx22("div", {
        className: styles14.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/file-tree.tsx
import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { useCallback, useState as useState2 } from "react";
import { css as css17, cx as cx17 } from "styled-system/css";
import { jsx as jsx23, jsxs as jsxs18 } from "react/jsx-runtime";
"use client";
var styles15 = {
  root: css17({
    overflow: "auto"
  }),
  node: css17({
    display: "flex",
    alignItems: "center",
    gap: "1.5",
    py: "1",
    px: "2",
    cursor: "pointer",
    rounded: "l1",
    textStyle: "sm",
    color: "fg.default",
    transition: "background 0.1s",
    userSelect: "none",
    _hover: {
      bg: "gray.subtle.bg"
    }
  }),
  nodeSelected: css17({
    bg: "colorPalette.2",
    color: "colorPalette.11",
    _hover: {
      bg: "colorPalette.3"
    }
  }),
  chevron: css17({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted"
  }),
  chevronPlaceholder: css17({
    flexShrink: 0,
    w: "3.5"
  }),
  folderIcon: css17({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "colorPalette.9"
  }),
  fileIcon: css17({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "fg.muted"
  }),
  label: css17({
    truncate: true
  }),
  children: css17({})
};
function TreeNode({ node, depth, selectedId, expandedIds, onToggle, onSelect }) {
  const isFolder = node.type === "folder";
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;
  const handleClick = () => {
    if (isFolder) {
      onToggle(node.id);
    } else {
      onSelect?.(node);
    }
  };
  return /* @__PURE__ */ jsxs18("div", {
    children: [
      /* @__PURE__ */ jsxs18("div", {
        className: cx17(styles15.node, isSelected && styles15.nodeSelected),
        style: { paddingLeft: `${depth * 20 + 8}px` },
        onClick: handleClick,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ")
            handleClick();
        },
        role: "treeitem",
        tabIndex: 0,
        "aria-selected": isSelected,
        "aria-expanded": isFolder ? isExpanded : undefined,
        children: [
          isFolder ? /* @__PURE__ */ jsx23(ChevronRight, {
            className: styles15.chevron,
            "aria-hidden": "true",
            style: {
              transform: isExpanded ? "rotate(90deg)" : undefined,
              transition: "transform 0.15s"
            }
          }) : /* @__PURE__ */ jsx23("span", {
            className: styles15.chevronPlaceholder
          }),
          node.icon ? /* @__PURE__ */ jsx23("span", {
            className: isFolder ? styles15.folderIcon : styles15.fileIcon,
            children: node.icon
          }) : isFolder ? isExpanded ? /* @__PURE__ */ jsx23(FolderOpen, {
            className: styles15.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx23(Folder, {
            className: styles15.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx23(File, {
            className: styles15.fileIcon,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ jsx23("span", {
            className: styles15.label,
            children: node.name
          })
        ]
      }),
      isFolder && isExpanded && node.children && /* @__PURE__ */ jsx23("div", {
        className: styles15.children,
        role: "group",
        children: node.children.map((child) => /* @__PURE__ */ jsx23(TreeNode, {
          node: child,
          depth: depth + 1,
          selectedId,
          expandedIds,
          onToggle,
          onSelect
        }, child.id))
      })
    ]
  });
}
function FileTree({
  nodes,
  onSelect,
  selectedId,
  defaultExpanded = [],
  className
}) {
  const [expandedIds, setExpandedIds] = useState2(() => new Set(defaultExpanded));
  const handleToggle = useCallback((id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);
  return /* @__PURE__ */ jsx23("div", {
    className: cx17(styles15.root, className),
    role: "tree",
    children: nodes.map((node) => /* @__PURE__ */ jsx23(TreeNode, {
      node,
      depth: 0,
      selectedId,
      expandedIds,
      onToggle: handleToggle,
      onSelect
    }, node.id))
  });
}
// src/components/patterns/gradient-picker.tsx
import { Plus, X } from "lucide-react";
import { css as css18, cx as cx18 } from "styled-system/css";
import { jsx as jsx24, jsxs as jsxs19 } from "react/jsx-runtime";
"use client";
var ANGLE_PRESETS = [45, 90, 135, 180, 225];
function buildGradientStyle(colors, angle) {
  if (colors.length === 1)
    return colors[0];
  return `linear-gradient(${angle}deg, ${colors.join(", ")})`;
}
function shiftHue(hex, shift = 30) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;
  if (d !== 0) {
    if (max === r)
      h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g)
      h = ((b - r) / d + 2) / 6;
    else
      h = ((r - g) / d + 4) / 6;
  }
  h = (h * 360 + shift) % 360 / 360;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let ro, go, bo;
  switch (i % 6) {
    case 0:
      ro = v;
      go = t;
      bo = p;
      break;
    case 1:
      ro = q;
      go = v;
      bo = p;
      break;
    case 2:
      ro = p;
      go = v;
      bo = t;
      break;
    case 3:
      ro = p;
      go = q;
      bo = v;
      break;
    case 4:
      ro = t;
      go = p;
      bo = v;
      break;
    default:
      ro = v;
      go = p;
      bo = q;
      break;
  }
  const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, "0");
  return `#${toHex(ro)}${toHex(go)}${toHex(bo)}`;
}
var swatchStyle = css18({
  display: "block",
  w: "8",
  h: "8",
  rounded: "md",
  cursor: "pointer",
  borderWidth: "2px",
  borderColor: "border.default",
  overflow: "hidden",
  _hover: { borderColor: "teal.a5" },
  transition: "colors"
});
var hiddenInput = css18({ opacity: 0, position: "absolute", w: 0, h: 0 });
var removeBtn = css18({
  position: "absolute",
  top: "-1.5",
  right: "-1.5",
  w: "4",
  h: "4",
  rounded: "full",
  bg: "bg.emphasized",
  color: "fg.default",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "xs",
  _hover: { bg: "bg.subtle" }
});
var addBtn = css18({
  w: "8",
  h: "8",
  rounded: "md",
  borderWidth: "1px",
  borderStyle: "dashed",
  borderColor: "border.default",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "fg.subtle",
  _hover: { borderColor: "teal.a5", color: "fg.muted" },
  transition: "colors"
});
var pillBase = css18({
  px: "2",
  py: "0.5",
  rounded: "full",
  fontSize: "xs",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var pillActive = css18({ bg: "teal.a3", color: "fg.default" });
var pillInactive = css18({ bg: "transparent", color: "fg.subtle" });
var previewBar = css18({
  h: "3",
  rounded: "sm",
  borderWidth: "1px",
  borderColor: "border.default"
});
function GradientPicker({
  colors,
  angle,
  onColorsChange,
  onAngleChange,
  className
}) {
  const addColor = () => {
    if (colors.length >= 3)
      return;
    const base2 = colors[colors.length - 1] ?? "#6366f1";
    onColorsChange([...colors, shiftHue(base2)]);
  };
  const removeColor = (index) => {
    if (colors.length <= 1)
      return;
    onColorsChange(colors.filter((_, i) => i !== index));
  };
  const updateColor = (index, value) => {
    const next = [...colors];
    next[index] = value;
    onColorsChange(next);
  };
  return /* @__PURE__ */ jsxs19("div", {
    className: cx18(css18({ display: "flex", flexDir: "column", gap: "2", minW: 0 }), className),
    children: [
      /* @__PURE__ */ jsxs19("div", {
        className: css18({ display: "flex", alignItems: "center", gap: "2", flexWrap: "wrap" }),
        children: [
          colors.map((color, i) => /* @__PURE__ */ jsxs19("div", {
            className: css18({ position: "relative" }),
            children: [
              /* @__PURE__ */ jsx24("label", {
                className: swatchStyle,
                style: { backgroundColor: color },
                children: /* @__PURE__ */ jsx24("input", {
                  type: "color",
                  value: color,
                  onChange: (e) => updateColor(i, e.target.value),
                  className: hiddenInput
                })
              }),
              colors.length > 1 && /* @__PURE__ */ jsx24("button", {
                type: "button",
                onClick: () => removeColor(i),
                className: removeBtn,
                children: /* @__PURE__ */ jsx24(X, {
                  size: 10
                })
              })
            ]
          }, i)),
          colors.length < 3 && /* @__PURE__ */ jsx24("button", {
            type: "button",
            onClick: addColor,
            className: addBtn,
            children: /* @__PURE__ */ jsx24(Plus, {
              size: 14
            })
          })
        ]
      }),
      colors.length > 1 && /* @__PURE__ */ jsx24("div", {
        className: css18({ display: "flex", gap: "1", flexWrap: "wrap" }),
        children: ANGLE_PRESETS.map((preset) => /* @__PURE__ */ jsx24("button", {
          type: "button",
          onClick: () => onAngleChange(preset),
          className: cx18(pillBase, angle === preset ? pillActive : pillInactive),
          children: preset
        }, preset))
      }),
      /* @__PURE__ */ jsx24("div", {
        className: previewBar,
        style: { background: buildGradientStyle(colors, angle) }
      })
    ]
  });
}
// src/components/patterns/help-panel.tsx
import { ark as ark7 } from "@ark-ui/react/factory";
import { X as X2 } from "lucide-react";
import { forwardRef as forwardRef6 } from "react";
import { css as css19, cx as cx19 } from "styled-system/css";
import { createStyleContext as createStyleContext4 } from "styled-system/jsx";
import { helpPanel } from "styled-system/recipes";
import { jsx as jsx25, jsxs as jsxs20, Fragment } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider2, withContext: withContext4 } = createStyleContext4(helpPanel);
var HeaderContainer = withContext4(ark7.div, "header");
var HeaderIconBadge = withContext4(ark7.div, "headerIcon");
var AccentBar = withContext4(ark7.div, "accentBar");
var TabButton = withContext4(ark7.button, "tab");
var FooterContainer = withContext4(ark7.div, "footer");
var Root4 = withRootProvider2(ark7.div);
Root4.displayName = "HelpPanel.Root";
var Header3 = forwardRef6(({ icon, title, subtitle, onClose, closeIcon, accentBar: accentBar2 = true, className }, ref) => /* @__PURE__ */ jsxs20(HeaderContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx25(AccentBar, {
      style: { top: 0 }
    }),
    /* @__PURE__ */ jsxs20("div", {
      className: css19({ display: "flex", alignItems: "center", gap: "3" }),
      children: [
        icon && /* @__PURE__ */ jsx25(HeaderIconBadge, {
          children: icon
        }),
        /* @__PURE__ */ jsxs20("div", {
          children: [
            /* @__PURE__ */ jsx25("h2", {
              className: css19({
                fontSize: "sm",
                fontWeight: "semibold",
                color: "fg.default",
                letterSpacing: "wide"
              }),
              children: title
            }),
            subtitle && /* @__PURE__ */ jsx25("p", {
              className: css19({ fontSize: "xs", color: "fg.subtle" }),
              children: subtitle
            })
          ]
        })
      ]
    }),
    onClose && /* @__PURE__ */ jsx25("button", {
      onClick: onClose,
      type: "button",
      className: css19({
        w: "7",
        h: "7",
        borderRadius: "l1",
        bg: "bg.subtle",
        borderWidth: "1px",
        borderColor: "border.default/50",
        color: "fg.muted",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all",
        _hover: {
          color: "fg.default",
          borderColor: "colorPalette.8"
        }
      }),
      children: closeIcon ?? /* @__PURE__ */ jsx25(X2, {
        size: 14,
        "aria-label": "Close"
      })
    })
  ]
}));
Header3.displayName = "HelpPanel.Header";
var TabBar = withContext4(ark7.div, "tabBar");
TabBar.displayName = "HelpPanel.TabBar";
var Tab = forwardRef6(({ active, icon, label, onClick, title, className }, ref) => /* @__PURE__ */ jsxs20(TabButton, {
  ref,
  type: "button",
  onClick,
  title,
  "data-selected": active ? "" : undefined,
  className,
  children: [
    icon,
    /* @__PURE__ */ jsx25("span", {
      className: css19({ display: { base: "none", sm: "inline" } }),
      children: label
    })
  ]
}));
Tab.displayName = "HelpPanel.Tab";
var Content2 = withContext4(ark7.div, "content");
Content2.displayName = "HelpPanel.Content";
var Footer3 = forwardRef6(({ hint, shortcutKey, accentBar: accentBar2 = true, children, className }, ref) => /* @__PURE__ */ jsxs20(FooterContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx25(AccentBar, {
      style: { bottom: 0, opacity: 0.3 }
    }),
    children ?? /* @__PURE__ */ jsxs20(Fragment, {
      children: [
        hint && /* @__PURE__ */ jsx25("span", {
          children: hint
        }),
        shortcutKey && /* @__PURE__ */ jsx25("kbd", {
          className: css19({
            px: "1.5",
            py: "0.5",
            fontSize: "xs",
            fontFamily: "mono",
            bg: "bg.subtle",
            borderWidth: "1px",
            borderColor: "border.default/50",
            borderRadius: "l1",
            color: "fg.muted"
          }),
          children: shortcutKey
        })
      ]
    })
  ]
}));
Footer3.displayName = "HelpPanel.Footer";
function SectionHeading({ label, dotColor, className }) {
  return /* @__PURE__ */ jsxs20("h4", {
    className: cx19(css19({
      display: "flex",
      alignItems: "center",
      gap: "2",
      fontSize: "xs",
      fontWeight: "semibold",
      textTransform: "uppercase",
      letterSpacing: "wide",
      mb: "2",
      color: "colorPalette.11"
    }), className),
    children: [
      /* @__PURE__ */ jsx25("span", {
        className: css19({
          w: "1.5",
          h: "1.5",
          borderRadius: "full",
          bg: "colorPalette.11"
        }),
        style: dotColor ? { backgroundColor: dotColor } : undefined
      }),
      label
    ]
  });
}
var HelpPanel = {
  Root: Root4,
  Header: Header3,
  TabBar,
  Tab,
  Content: Content2,
  Footer: Footer3,
  SectionHeading
};
// src/components/patterns/help-trigger.tsx
import { useCallback as useCallback2 } from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
"use client";
function HelpTrigger({ active, onActivate, children }) {
  const handleMouseEnter = useCallback2(() => {
    if (active) {
      onActivate();
    }
  }, [active, onActivate]);
  return /* @__PURE__ */ jsx26("div", {
    style: { display: "contents" },
    onMouseEnter: handleMouseEnter,
    role: "group",
    children
  });
}
// src/components/patterns/hero-panel.tsx
import { css as css20, cx as cx20 } from "styled-system/css";
import { jsx as jsx27, jsxs as jsxs21 } from "react/jsx-runtime";
"use client";
var styles16 = {
  root: css20({
    display: "grid",
    gridTemplateColumns: { base: "1fr", xl: "minmax(0, 1.05fr) minmax(20rem, 0.95fr)" },
    gap: "0",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  copy: css20({
    display: "flex",
    flexDirection: "column",
    gap: "5",
    minWidth: 0,
    padding: { base: "6", md: "7", xl: "8" }
  }),
  eyebrow: css20({
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
    paddingX: "3",
    paddingY: "1.5",
    borderRadius: "full",
    bg: "app.accent.soft",
    color: "app.accent",
    textStyle: "eyebrow"
  }),
  title: css20({
    textStyle: "h1",
    color: "app.text",
    maxWidth: "16ch"
  }),
  description: css20({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "28rem"
  }),
  actions: css20({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  footer: css20({
    paddingTop: "4",
    borderTopWidth: "1px",
    borderColor: "app.border",
    color: "app.text.muted"
  }),
  media: css20({
    minHeight: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    padding: { base: "5", md: "6" },
    bg: "linear-gradient(180deg, #f3f4f4 0%, #ecefee 100%)",
    borderLeftWidth: { base: "0", xl: "1px" },
    borderTopWidth: { base: "1px", xl: "0" },
    borderColor: "app.border"
  })
};
function HeroPanel({
  eyebrow,
  title,
  description,
  actions,
  media,
  footer,
  className
}) {
  return /* @__PURE__ */ jsxs21("section", {
    className: cx20(styles16.root, className),
    children: [
      /* @__PURE__ */ jsxs21("div", {
        className: styles16.copy,
        children: [
          eyebrow && /* @__PURE__ */ jsx27("div", {
            className: styles16.eyebrow,
            children: eyebrow
          }),
          /* @__PURE__ */ jsx27("div", {
            className: styles16.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx27("div", {
            className: styles16.description,
            children: description
          }),
          actions && /* @__PURE__ */ jsx27("div", {
            className: styles16.actions,
            children: actions
          }),
          footer && /* @__PURE__ */ jsx27("div", {
            className: styles16.footer,
            children: footer
          })
        ]
      }),
      media && /* @__PURE__ */ jsx27("div", {
        className: styles16.media,
        children: media
      })
    ]
  });
}
// src/components/patterns/icon-badge.tsx
import { css as css21, cx as cx21 } from "styled-system/css";
import { jsx as jsx28 } from "react/jsx-runtime";
"use client";
var base2 = css21({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css21({ w: "8", h: "8" }),
  md: css21({ w: "10", h: "10" }),
  lg: css21({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsx28("div", {
    className: cx21(base2, sizes[size], className),
    children: icon
  });
}
// src/components/patterns/icon-picker.tsx
import { icons } from "lucide-react";
import { useMemo as useMemo3, useState as useState3 } from "react";
import { css as css22, cx as cx22 } from "styled-system/css";

// src/components/ui/input.tsx
import { Field } from "@ark-ui/react/field";
import { styled as styled7 } from "styled-system/jsx";
import { input } from "styled-system/recipes";
var Input = styled7(Field.Input, input);

// src/components/ui/popover.tsx
import { ark as ark8 } from "@ark-ui/react/factory";
import { Popover } from "@ark-ui/react/popover";
import { createStyleContext as createStyleContext5 } from "styled-system/jsx";
import { popover } from "styled-system/recipes";
import { PopoverContext } from "@ark-ui/react/popover";
import { jsx as jsx29 } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider3, withContext: withContext5 } = createStyleContext5(popover);
var Root5 = withRootProvider3(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider3 = withRootProvider3(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Anchor = withContext5(Popover.Anchor, "anchor");
var ArrowTip = withContext5(Popover.ArrowTip, "arrowTip");
var Arrow = withContext5(Popover.Arrow, "arrow", {
  defaultProps: { children: /* @__PURE__ */ jsx29(ArrowTip, {}) }
});
var CloseTrigger2 = withContext5(Popover.CloseTrigger, "closeTrigger");
var Content3 = withContext5(Popover.Content, "content");
var Description3 = withContext5(Popover.Description, "description");
var Indicator2 = withContext5(Popover.Indicator, "indicator");
var Positioner2 = withContext5(Popover.Positioner, "positioner");
var Title3 = withContext5(Popover.Title, "title");
var Trigger2 = withContext5(Popover.Trigger, "trigger");
var Body3 = withContext5(ark8.div, "body");
var Header4 = withContext5(ark8.div, "header");
var Footer4 = withContext5(ark8.div, "footer");

// src/components/patterns/icon-picker.tsx
import { jsx as jsx30, jsxs as jsxs22 } from "react/jsx-runtime";
"use client";
var CURATED_ICONS = [
  "Brain",
  "Bot",
  "Cpu",
  "Rocket",
  "Sparkles",
  "Zap",
  "Target",
  "Shield",
  "Star",
  "Heart",
  "Gem",
  "Crown",
  "Flame",
  "Lightbulb",
  "Atom",
  "Orbit",
  "Globe",
  "Compass",
  "Telescope",
  "Microscope",
  "Dna",
  "FlaskConical",
  "Gauge",
  "Activity",
  "TrendingUp",
  "BarChart3",
  "PieChart",
  "LineChart",
  "Code",
  "Terminal",
  "Server",
  "Database",
  "HardDrive",
  "Cloud",
  "Wifi",
  "Radio",
  "Satellite",
  "Cable",
  "Network",
  "Router",
  "Lock",
  "Key",
  "Fingerprint",
  "Eye",
  "ScanFace",
  "ShieldCheck",
  "MessageSquare",
  "Mail",
  "Send",
  "Bell",
  "Megaphone",
  "Mic",
  "Image",
  "Camera",
  "Video",
  "Music",
  "Palette",
  "Paintbrush",
  "Pen",
  "PenTool",
  "Layers",
  "Grid3x3",
  "Box",
  "Package",
  "Truck",
  "Plane",
  "Car",
  "Bike",
  "Ship",
  "TrainFront",
  "Home",
  "Building2",
  "Factory",
  "Store",
  "Landmark",
  "Hospital",
  "User",
  "Users",
  "UserCheck",
  "Briefcase",
  "GraduationCap",
  "Award",
  "Wrench",
  "Settings",
  "Cog",
  "Hammer",
  "Drill",
  "Plug"
];
var triggerStyle = css22({
  display: "flex",
  alignItems: "center",
  gap: "2",
  px: "3",
  py: "1.5",
  rounded: "md",
  borderWidth: "1px",
  borderColor: "border.default",
  cursor: "pointer",
  bg: "bg.default",
  _hover: { borderColor: "teal.a5" },
  transition: "colors"
});
var gridStyle = css22({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "1",
  maxH: "220px",
  overflowY: "auto"
});
var cellBase = css22({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "10",
  h: "10",
  rounded: "md",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var cellActive = css22({ bg: "teal.a3" });
var labelStyle = css22({ fontSize: "sm", color: "fg.muted" });
var emptyStyle = css22({ fontSize: "sm", color: "fg.subtle", textAlign: "center", py: "4" });
function IconPicker({ value, onChange, className }) {
  const [search, setSearch] = useState3("");
  const displayedIcons = useMemo3(() => {
    if (!search.trim()) {
      return CURATED_ICONS.filter((name) => (name in icons));
    }
    const query = search.toLowerCase();
    return Object.keys(icons).filter((name) => name.toLowerCase().includes(query)).slice(0, 60);
  }, [search]);
  const SelectedIcon = icons[value];
  return /* @__PURE__ */ jsxs22(Root5, {
    portalled: true,
    children: [
      /* @__PURE__ */ jsx30(Trigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsxs22("button", {
          type: "button",
          className: cx22(triggerStyle, className),
          children: [
            SelectedIcon && /* @__PURE__ */ jsx30(SelectedIcon, {
              size: 16
            }),
            /* @__PURE__ */ jsx30("span", {
              className: labelStyle,
              children: value
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx30(Positioner2, {
        className: css22({ zIndex: "popover" }),
        children: /* @__PURE__ */ jsxs22(Content3, {
          className: css22({
            w: "280px",
            p: "3",
            bg: "bg.default",
            borderWidth: "1px",
            borderColor: "border.default",
            shadow: "lg",
            rounded: "lg"
          }),
          children: [
            /* @__PURE__ */ jsx30(Input, {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search icons...",
              size: "sm",
              className: css22({ mb: "2" })
            }),
            /* @__PURE__ */ jsx30("div", {
              className: gridStyle,
              children: displayedIcons.map((name) => {
                const Icon = icons[name];
                if (!Icon)
                  return null;
                return /* @__PURE__ */ jsx30("button", {
                  type: "button",
                  title: name,
                  onClick: () => {
                    onChange(name);
                    setSearch("");
                  },
                  className: cx22(cellBase, name === value && cellActive),
                  children: /* @__PURE__ */ jsx30(Icon, {
                    size: 18
                  })
                }, name);
              })
            }),
            displayedIcons.length === 0 && /* @__PURE__ */ jsx30("p", {
              className: emptyStyle,
              children: "No icons found"
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/inset-panel.tsx
import { css as css23, cx as cx23 } from "styled-system/css";
import { jsx as jsx31 } from "react/jsx-runtime";
"use client";
var styles17 = {
  base: css23({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    padding: "4",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted"
  }),
  accent: css23({
    bg: "app.accent.soft",
    borderColor: "transparent"
  })
};
function InsetPanel({ children, tone = "default", className }) {
  return /* @__PURE__ */ jsx31("div", {
    className: cx23(styles17.base, tone === "accent" && styles17.accent, className),
    children
  });
}
// src/components/patterns/line-chart.tsx
import { useRef } from "react";
import { css as css24, cx as cx24 } from "styled-system/css";
import { token } from "styled-system/tokens";
import { jsx as jsx32, jsxs as jsxs23 } from "react/jsx-runtime";
"use client";
var styles18 = {
  root: css24({
    w: "full"
  })
};
function LineChart({
  data,
  color,
  height = 120,
  showGrid = true,
  showAxis = false,
  showPoints,
  gradientFill = false,
  className
}) {
  const idRef = useRef(`lc-${Math.random().toString(36).slice(2, 8)}`);
  const gradientId = `${idRef.current}-grad`;
  if (data.length === 0)
    return null;
  const resolvedColor = color ? token.var(color, color) : "var(--colors-color-palette-9, var(--colors-teal-9))";
  const padding = {
    top: 10,
    right: 10,
    bottom: showAxis ? 20 : 10,
    left: showAxis ? 30 : 10
  };
  const width = 200;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const xMin = Math.min(...data.map((d) => d.x));
  const xMax = Math.max(...data.map((d) => d.x));
  const yMin = Math.min(...data.map((d) => d.y)) * 0.9;
  const yMax = Math.max(...data.map((d) => d.y)) * 1.1;
  const scaleX = (x) => padding.left + (x - xMin) / (xMax - xMin || 1) * chartWidth;
  const scaleY = (y) => padding.top + chartHeight - (y - yMin) / (yMax - yMin || 1) * chartHeight;
  const linePath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(d.x)} ${scaleY(d.y)}`).join(" ");
  const areaPath = `${linePath} L ${scaleX(data[data.length - 1].x)} ${padding.top + chartHeight}` + ` L ${scaleX(data[0].x)} ${padding.top + chartHeight} Z`;
  const pointsVisible = showPoints ?? data.length < 20;
  const gridColor = "var(--colors-border-muted, currentColor)";
  return /* @__PURE__ */ jsxs23("svg", {
    viewBox: `0 0 ${width} ${height}`,
    className: cx24(styles18.root, className),
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Line chart",
    children: [
      /* @__PURE__ */ jsx32("defs", {
        children: gradientFill && /* @__PURE__ */ jsxs23("linearGradient", {
          id: gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [
            /* @__PURE__ */ jsx32("stop", {
              offset: "0%",
              stopColor: resolvedColor,
              stopOpacity: "0.3"
            }),
            /* @__PURE__ */ jsx32("stop", {
              offset: "100%",
              stopColor: resolvedColor,
              stopOpacity: "0"
            })
          ]
        })
      }),
      showGrid && /* @__PURE__ */ jsx32("g", {
        opacity: "0.2",
        children: [0, 0.25, 0.5, 0.75, 1].map((ratio) => /* @__PURE__ */ jsx32("line", {
          x1: padding.left,
          y1: padding.top + chartHeight * ratio,
          x2: width - padding.right,
          y2: padding.top + chartHeight * ratio,
          stroke: gridColor,
          strokeDasharray: "2,4"
        }, ratio))
      }),
      gradientFill && /* @__PURE__ */ jsx32("path", {
        d: areaPath,
        fill: `url(#${gradientId})`
      }),
      /* @__PURE__ */ jsx32("path", {
        d: linePath,
        fill: "none",
        stroke: resolvedColor,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      pointsVisible && data.map((d, i) => /* @__PURE__ */ jsx32("circle", {
        cx: scaleX(d.x),
        cy: scaleY(d.y),
        r: "3",
        fill: resolvedColor,
        opacity: "0.8"
      }, `${d.x}-${d.y}-${i}`)),
      showAxis && /* @__PURE__ */ jsxs23("g", {
        children: [
          /* @__PURE__ */ jsx32("text", {
            x: padding.left - 4,
            y: padding.top + 4,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMax.toFixed(0)
          }),
          /* @__PURE__ */ jsx32("text", {
            x: padding.left - 4,
            y: padding.top + chartHeight,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMin.toFixed(0)
          })
        ]
      })
    ]
  });
}
// src/components/patterns/meta-pill.tsx
import { css as css25, cx as cx25 } from "styled-system/css";
import { jsx as jsx33 } from "react/jsx-runtime";
"use client";
var styles19 = {
  base: css25({
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    minHeight: "8",
    paddingX: "3",
    paddingY: "1.5",
    borderRadius: "full",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    color: "app.text.muted",
    textStyle: "caption"
  }),
  accent: css25({
    bg: "app.accent.soft",
    borderColor: "transparent",
    color: "app.accent"
  }),
  success: css25({
    bg: "bg.success",
    borderColor: "transparent",
    color: "fg.success"
  }),
  warning: css25({
    bg: "bg.warning",
    borderColor: "transparent",
    color: "fg.warning"
  }),
  danger: css25({
    bg: "bg.error",
    borderColor: "transparent",
    color: "fg.error"
  })
};
function MetaPill({ children, tone = "default", className }) {
  return /* @__PURE__ */ jsx33("span", {
    className: cx25(styles19.base, tone === "accent" && styles19.accent, tone === "success" && styles19.success, tone === "warning" && styles19.warning, tone === "danger" && styles19.danger, className),
    children
  });
}
// src/components/patterns/metric-rail.tsx
import { css as css27, cx as cx27 } from "styled-system/css";

// src/components/patterns/stat-card.tsx
import { css as css26, cx as cx26 } from "styled-system/css";
import { jsx as jsx34, jsxs as jsxs24 } from "react/jsx-runtime";
"use client";
var styles20 = {
  root: css26({
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    rounded: "l3",
    p: "6",
    display: "flex",
    flexDirection: "column",
    gap: "5",
    boxShadow: "{shadows.whisper}"
  }),
  header: css26({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  iconWrap: css26({
    flexShrink: 0,
    w: "8",
    h: "8",
    rounded: "full",
    bg: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "app.accent"
  }),
  content: css26({
    flex: 1,
    minW: 0
  }),
  title: css26({
    textStyle: "metricLabel",
    color: "app.text.subtle"
  }),
  value: css26({
    textStyle: "metricValue",
    color: "app.text"
  }),
  change: css26({
    textStyle: "small",
    mt: "1.5"
  })
};
function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  iconBg,
  iconColor,
  badge,
  badgeColor,
  badgeBg,
  className
}) {
  const changeColor = changeType === "positive" ? css26({ color: "fg.success" }) : changeType === "negative" ? css26({ color: "fg.error" }) : css26({ color: "app.text.muted" });
  return /* @__PURE__ */ jsx34("div", {
    className: cx26(styles20.root, className),
    children: /* @__PURE__ */ jsxs24("div", {
      className: styles20.content,
      children: [
        /* @__PURE__ */ jsxs24("div", {
          className: styles20.header,
          children: [
            /* @__PURE__ */ jsx34("div", {
              className: styles20.title,
              children: title
            }),
            icon && /* @__PURE__ */ jsx34("div", {
              className: styles20.iconWrap,
              style: {
                ...iconBg ? { backgroundColor: iconBg } : {},
                ...iconColor ? { color: iconColor } : {}
              },
              children: icon
            })
          ]
        }),
        /* @__PURE__ */ jsx34("div", {
          className: styles20.value,
          children: value
        }),
        /* @__PURE__ */ jsxs24("div", {
          className: css26({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
          children: [
            change && /* @__PURE__ */ jsx34("span", {
              className: cx26(styles20.change, changeColor),
              children: change
            }),
            badge && /* @__PURE__ */ jsx34("span", {
              className: css26({
                textStyle: "small",
                px: "2",
                py: "0.5",
                rounded: "full",
                fontSize: "xs",
                bg: "app.surface.muted",
                color: "app.text"
              }),
              style: {
                color: badgeColor,
                backgroundColor: badgeBg
              },
              children: badge
            })
          ]
        })
      ]
    })
  });
}

// src/components/patterns/metric-rail.tsx
import { jsx as jsx35 } from "react/jsx-runtime";
"use client";
function MetricRail({ items, columns = 3, className }) {
  const rootClassName = css27({
    display: "grid",
    gap: "4",
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(2, minmax(0, 1fr))",
      xl: `repeat(${columns}, minmax(0, 1fr))`
    }
  });
  return /* @__PURE__ */ jsx35("div", {
    className: cx27(rootClassName, className),
    children: items.map((item, index) => /* @__PURE__ */ jsx35(StatCard, {
      ...item
    }, `${index}-${String(item.value)}`))
  });
}
// src/components/patterns/model-icon-customizer.tsx
import { icons as icons2 } from "lucide-react";
import { css as css28, cx as cx28 } from "styled-system/css";
import { jsx as jsx36, jsxs as jsxs25 } from "react/jsx-runtime";
"use client";
var DEFAULT_ICON_CONFIG = {
  iconName: "Cpu",
  bgColors: ["#5AB8C4", "#9333ea"],
  bgAngle: 135,
  iconColor: "#ffffff"
};
var cardIconBase = css28({
  rounded: "lg",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
function ModelCardIcon({
  config,
  size = 40,
  iconSize = 20,
  className
}) {
  const c = config ?? DEFAULT_ICON_CONFIG;
  const Icon = icons2[c.iconName];
  return /* @__PURE__ */ jsx36("div", {
    className: cx28(cardIconBase, className),
    style: {
      width: size,
      height: size,
      background: buildGradientStyle(c.bgColors, c.bgAngle ?? 135)
    },
    children: Icon && /* @__PURE__ */ jsx36(Icon, {
      size: iconSize,
      style: { color: c.iconColor ?? "#ffffff" }
    })
  });
}
var swatchStyle2 = css28({
  display: "block",
  w: "8",
  h: "8",
  rounded: "md",
  cursor: "pointer",
  borderWidth: "2px",
  borderColor: "border.default",
  overflow: "hidden",
  _hover: { borderColor: "teal.a5" },
  transition: "colors"
});
var hiddenInput2 = css28({ opacity: 0, position: "absolute", w: 0, h: 0 });
var rowStyle = css28({ display: "flex", alignItems: "center", gap: "3" });
var rowStartStyle = css28({ display: "flex", alignItems: "flex-start", gap: "3" });
var labelStyle2 = css28({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0 });
var labelTopStyle = css28({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0, pt: "1" });
function ModelIconCustomizer({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxs25("div", {
    className: cx28(css28({ display: "flex", gap: "4", alignItems: "flex-start" }), className),
    children: [
      /* @__PURE__ */ jsx36(ModelCardIcon, {
        config: value,
        size: 56,
        iconSize: 28
      }),
      /* @__PURE__ */ jsxs25("div", {
        className: css28({ display: "flex", flexDir: "column", gap: "3", flex: 1, minW: 0 }),
        children: [
          /* @__PURE__ */ jsxs25("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx36("div", {
                className: labelStyle2,
                children: "Icon"
              }),
              /* @__PURE__ */ jsx36(IconPicker, {
                value: value.iconName,
                onChange: (iconName) => onChange({ ...value, iconName })
              })
            ]
          }),
          /* @__PURE__ */ jsxs25("div", {
            className: rowStartStyle,
            children: [
              /* @__PURE__ */ jsx36("div", {
                className: labelTopStyle,
                children: "Background"
              }),
              /* @__PURE__ */ jsx36(GradientPicker, {
                colors: value.bgColors,
                angle: value.bgAngle ?? 135,
                onColorsChange: (bgColors) => onChange({ ...value, bgColors }),
                onAngleChange: (bgAngle) => onChange({ ...value, bgAngle })
              })
            ]
          }),
          /* @__PURE__ */ jsxs25("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx36("div", {
                className: labelStyle2,
                children: "Icon Color"
              }),
              /* @__PURE__ */ jsx36("label", {
                className: swatchStyle2,
                style: { backgroundColor: value.iconColor ?? "#ffffff" },
                children: /* @__PURE__ */ jsx36("input", {
                  type: "color",
                  value: value.iconColor ?? "#ffffff",
                  onChange: (e) => onChange({ ...value, iconColor: e.target.value }),
                  className: hiddenInput2
                })
              })
            ]
          })
        ]
      })
    ]
  });
}
// src/components/patterns/option-row.tsx
import { css as css29, cx as cx29 } from "styled-system/css";
import { jsx as jsx37, jsxs as jsxs26, Fragment as Fragment2 } from "react/jsx-runtime";
"use client";
var styles21 = {
  root: css29({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4",
    paddingX: "4",
    paddingY: "3.5",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    minWidth: 0,
    transitionProperty: "background-color, border-color, box-shadow, color",
    transitionDuration: "160ms",
    transitionTimingFunction: "ease"
  }),
  interactive: css29({
    cursor: "pointer",
    userSelect: "none",
    _hover: {
      borderColor: "app.border.strong",
      bg: "app.surface"
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "app.accent",
      outlineOffset: "2px"
    }
  }),
  selected: css29({
    borderColor: "app.border.strong",
    bg: "app.accent.soft"
  }),
  disabled: css29({
    opacity: "0.55",
    cursor: "not-allowed"
  }),
  lead: css29({
    display: "flex",
    alignItems: "center",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  leading: css29({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }),
  copy: css29({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  title: css29({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css29({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  trailing: css29({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    flexShrink: 0
  })
};
function OptionRow({
  title,
  description,
  leading,
  trailing,
  selected = false,
  onClick,
  disabled = false,
  className
}) {
  const interactive = Boolean(onClick) && !disabled;
  const content = /* @__PURE__ */ jsxs26(Fragment2, {
    children: [
      /* @__PURE__ */ jsxs26("div", {
        className: styles21.lead,
        children: [
          leading && /* @__PURE__ */ jsx37("div", {
            className: styles21.leading,
            children: leading
          }),
          /* @__PURE__ */ jsxs26("div", {
            className: styles21.copy,
            children: [
              /* @__PURE__ */ jsx37("div", {
                className: styles21.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx37("div", {
                className: styles21.description,
                children: description
              })
            ]
          })
        ]
      }),
      trailing && /* @__PURE__ */ jsx37("div", {
        className: styles21.trailing,
        children: trailing
      })
    ]
  });
  if (interactive) {
    return /* @__PURE__ */ jsx37("button", {
      type: "button",
      className: cx29(styles21.root, styles21.interactive, selected && styles21.selected, className),
      onClick,
      children: content
    });
  }
  return /* @__PURE__ */ jsx37("div", {
    className: cx29(styles21.root, selected && styles21.selected, disabled && styles21.disabled, className),
    "aria-disabled": disabled || undefined,
    children: content
  });
}
// src/components/patterns/page-title.tsx
import { css as css30, cx as cx30 } from "styled-system/css";
import { jsx as jsx38, jsxs as jsxs27 } from "react/jsx-runtime";
"use client";
var titleStyle = css30({
  textStyle: "pageTitle",
  color: "app.text"
});
var subtitleStyle = css30({
  textStyle: "description",
  color: "app.text.muted",
  mt: "2"
});
function PageTitle({ children, subtitle, className }) {
  return /* @__PURE__ */ jsxs27("div", {
    className,
    children: [
      /* @__PURE__ */ jsx38("h1", {
        className: cx30(titleStyle),
        children
      }),
      subtitle && /* @__PURE__ */ jsx38("p", {
        className: subtitleStyle,
        children: subtitle
      })
    ]
  });
}
// src/components/patterns/picker-field.tsx
import { ChevronDown } from "lucide-react";
import { css as css31, cx as cx31 } from "styled-system/css";
import { jsx as jsx39, jsxs as jsxs28 } from "react/jsx-runtime";
"use client";
var styles22 = {
  root: css31({
    position: "relative"
  }),
  trigger: css31({
    width: "100%",
    minHeight: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    paddingX: "4",
    paddingY: "3",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    cursor: "pointer",
    textAlign: "left",
    transitionProperty: "background-color, border-color, color",
    transitionDuration: "160ms",
    transitionTimingFunction: "ease",
    _hover: {
      borderColor: "app.border.strong",
      bg: "app.surface.raised"
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "app.accent",
      outlineOffset: "2px"
    },
    _disabled: {
      opacity: "0.55",
      cursor: "not-allowed"
    }
  }),
  lead: css31({
    display: "flex",
    alignItems: "center",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  leading: css31({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "app.accent"
  }),
  copy: css31({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  titleRow: css31({
    display: "flex",
    alignItems: "center",
    gap: "2",
    minWidth: 0
  }),
  title: css31({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  description: css31({
    textStyle: "caption",
    color: "app.text.subtle",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  chevron: css31({
    color: "app.text.subtle",
    flexShrink: 0,
    transition: "transform 160ms ease"
  }),
  chevronOpen: css31({
    transform: "rotate(180deg)"
  }),
  panel: css31({
    position: "absolute",
    top: "calc(100% + 0.5rem)",
    left: "0",
    right: "0",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.float}",
    overflow: "hidden",
    zIndex: "50"
  }),
  panelLabel: css31({
    paddingX: "4",
    paddingY: "2.5",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  panelBody: css31({
    maxHeight: "18rem",
    overflowY: "auto"
  })
};
function PickerField({
  title,
  description,
  leading,
  badge,
  open,
  onToggle,
  disabled = false,
  panelLabel,
  panel,
  minWidth,
  className
}) {
  return /* @__PURE__ */ jsxs28("div", {
    className: cx31(styles22.root, className),
    style: minWidth ? { minWidth } : undefined,
    children: [
      /* @__PURE__ */ jsxs28("button", {
        type: "button",
        onClick: onToggle,
        disabled,
        className: styles22.trigger,
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxs28("div", {
            className: styles22.lead,
            children: [
              leading && /* @__PURE__ */ jsx39("div", {
                className: styles22.leading,
                children: leading
              }),
              /* @__PURE__ */ jsxs28("div", {
                className: styles22.copy,
                children: [
                  /* @__PURE__ */ jsxs28("div", {
                    className: styles22.titleRow,
                    children: [
                      /* @__PURE__ */ jsx39("div", {
                        className: styles22.title,
                        children: title
                      }),
                      badge
                    ]
                  }),
                  description && /* @__PURE__ */ jsx39("div", {
                    className: styles22.description,
                    children: description
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx39(ChevronDown, {
            size: 16,
            className: cx31(styles22.chevron, open && styles22.chevronOpen)
          })
        ]
      }),
      open && panel && /* @__PURE__ */ jsxs28("div", {
        className: styles22.panel,
        children: [
          panelLabel && /* @__PURE__ */ jsx39("div", {
            className: styles22.panelLabel,
            children: panelLabel
          }),
          /* @__PURE__ */ jsx39("div", {
            className: styles22.panelBody,
            children: panel
          })
        ]
      })
    ]
  });
}
// src/components/patterns/pricing-card.tsx
import { css as css32, cx as cx32 } from "styled-system/css";
import { jsx as jsx40, jsxs as jsxs29 } from "react/jsx-runtime";
"use client";
var styles23 = {
  root: css32({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    position: "relative",
    overflow: "visible",
    transition: "all 200ms",
    display: "flex",
    flexDir: "column",
    _hover: {
      shadow: "md",
      borderColor: "colorPalette.7"
    }
  }),
  highlighted: css32({
    shadow: "md",
    borderColor: "colorPalette.7"
  }),
  badge: css32({
    position: "absolute",
    top: "-3",
    left: "50%",
    transform: "translateX(-50%)",
    rounded: "full",
    px: "3",
    py: "1",
    fontSize: "xs",
    fontWeight: "semibold",
    bg: "colorPalette.9",
    color: "white",
    whiteSpace: "nowrap"
  }),
  name: css32({
    textAlign: "center",
    fontSize: "xl",
    fontWeight: "semibold",
    color: "colorPalette.11"
  }),
  description: css32({
    textAlign: "center",
    textStyle: "small",
    color: "fg.muted",
    mb: "4"
  }),
  priceArea: css32({
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    mb: "6"
  }),
  price: css32({
    fontSize: "4xl",
    fontWeight: "bold",
    color: "fg.default"
  }),
  interval: css32({
    color: "fg.muted"
  }),
  featureList: css32({
    listStyle: "none",
    p: "0",
    m: "0",
    display: "flex",
    flexDir: "column",
    gap: "2"
  }),
  featureItem: css32({
    display: "flex",
    flexDir: "row",
    alignItems: "center",
    gap: "2",
    textStyle: "small",
    color: "fg.default"
  }),
  checkmark: css32({
    color: "colorPalette.9",
    flexShrink: 0
  }),
  actionWrap: css32({
    mt: "auto",
    pt: "4"
  })
};
function PricingCard({
  name,
  description,
  price,
  interval,
  badge,
  badgeColor,
  badgeBg,
  accentColor,
  highlight,
  action,
  features,
  className
}) {
  return /* @__PURE__ */ jsxs29("div", {
    className: cx32(styles23.root, highlight && styles23.highlighted, className),
    children: [
      badge && /* @__PURE__ */ jsx40("span", {
        className: styles23.badge,
        style: {
          ...badgeBg ? { backgroundColor: badgeBg } : {},
          ...badgeColor ? { color: badgeColor } : {}
        },
        children: badge
      }),
      /* @__PURE__ */ jsx40("div", {
        className: styles23.name,
        style: accentColor ? { color: accentColor } : undefined,
        children: name
      }),
      description && /* @__PURE__ */ jsx40("div", {
        className: styles23.description,
        children: description
      }),
      /* @__PURE__ */ jsxs29("div", {
        className: styles23.priceArea,
        children: [
          /* @__PURE__ */ jsx40("span", {
            className: styles23.price,
            children: price
          }),
          interval && /* @__PURE__ */ jsxs29("span", {
            className: styles23.interval,
            children: [
              "/",
              interval
            ]
          })
        ]
      }),
      features && features.length > 0 && /* @__PURE__ */ jsx40("ul", {
        className: styles23.featureList,
        children: features.map((feature) => /* @__PURE__ */ jsxs29("li", {
          className: styles23.featureItem,
          children: [
            /* @__PURE__ */ jsx40("span", {
              className: styles23.checkmark,
              children: "✓"
            }),
            feature
          ]
        }, feature))
      }),
      action && /* @__PURE__ */ jsx40("div", {
        className: styles23.actionWrap,
        children: action
      })
    ]
  });
}
// src/components/patterns/resource-list.tsx
import { css as css33, cx as cx33 } from "styled-system/css";
import { jsx as jsx41, jsxs as jsxs30 } from "react/jsx-runtime";
"use client";
var styles24 = {
  root: css33({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  header: css33({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    paddingX: { base: "5", md: "6" },
    paddingY: { base: "5", md: "6" },
    borderBottomWidth: "1px",
    borderColor: "app.border"
  }),
  titleBlock: css33({
    display: "flex",
    flexDirection: "column",
    gap: "1.5"
  }),
  title: css33({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css33({
    textStyle: "small",
    color: "app.text.muted"
  }),
  list: css33({
    listStyle: "none",
    padding: "0",
    margin: "0"
  }),
  item: css33({
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    alignItems: "center",
    gap: "4",
    paddingX: { base: "5", md: "6" },
    paddingY: "4",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    _last: {
      borderBottomWidth: "0"
    }
  }),
  icon: css33({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "10",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css33({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1"
  }),
  itemTitle: css33({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  itemDescription: css33({
    textStyle: "small",
    color: "app.text.muted"
  }),
  meta: css33({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  itemLink: css33({
    color: "inherit",
    textDecoration: "none"
  }),
  action: css33({
    display: "inline-flex",
    alignItems: "center"
  })
};
function ResourceList({ title, description, actions, items, className }) {
  return /* @__PURE__ */ jsxs30("section", {
    className: cx33(styles24.root, className),
    children: [
      (title || description || actions) && /* @__PURE__ */ jsxs30("div", {
        className: styles24.header,
        children: [
          /* @__PURE__ */ jsxs30("div", {
            className: styles24.titleBlock,
            children: [
              title && /* @__PURE__ */ jsx41("div", {
                className: styles24.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx41("div", {
                className: styles24.description,
                children: description
              })
            ]
          }),
          actions
        ]
      }),
      /* @__PURE__ */ jsx41("ul", {
        className: styles24.list,
        children: items.map((item, index) => {
          const content = /* @__PURE__ */ jsxs30("div", {
            className: styles24.copy,
            children: [
              /* @__PURE__ */ jsx41("div", {
                className: styles24.itemTitle,
                children: item.title
              }),
              item.description && /* @__PURE__ */ jsx41("div", {
                className: styles24.itemDescription,
                children: item.description
              }),
              item.meta && /* @__PURE__ */ jsx41("div", {
                className: styles24.meta,
                children: item.meta
              })
            ]
          });
          return /* @__PURE__ */ jsx41("li", {
            children: /* @__PURE__ */ jsxs30("div", {
              className: styles24.item,
              children: [
                item.icon && /* @__PURE__ */ jsx41("div", {
                  className: styles24.icon,
                  children: item.icon
                }),
                item.href ? /* @__PURE__ */ jsx41("a", {
                  className: styles24.itemLink,
                  href: item.href,
                  children: content
                }) : content,
                item.action && /* @__PURE__ */ jsx41("div", {
                  className: styles24.action,
                  children: item.action
                })
              ]
            })
          }, item.id ?? item.href ?? `resource-item-${index}`);
        })
      })
    ]
  });
}
// src/components/patterns/secondary-nav.tsx
import { css as css34, cx as cx34 } from "styled-system/css";
import { jsx as jsx42, jsxs as jsxs31, Fragment as Fragment3 } from "react/jsx-runtime";
"use client";
var styles25 = {
  root: css34({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    width: "100%"
  }),
  list: css34({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "2",
    padding: "0",
    margin: "0",
    overflowX: "auto"
  }),
  item: css34({
    appearance: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    minHeight: "10",
    paddingX: "3.5",
    borderRadius: "full",
    borderWidth: "1px",
    borderColor: "transparent",
    color: "app.text.muted",
    bg: "transparent",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transitionProperty: "background-color, border-color, color",
    transitionDuration: "180ms",
    transitionTimingFunction: "ease",
    _hover: {
      bg: "app.surface",
      borderColor: "app.border",
      color: "app.text"
    }
  }),
  itemActive: css34({
    bg: "app.surface",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  label: css34({
    textStyle: "toolbarLabel"
  }),
  badge: css34({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "6",
    height: "6",
    paddingX: "2",
    borderRadius: "full",
    bg: "app.surface.muted",
    textStyle: "caption",
    color: "app.text"
  }),
  trailing: css34({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  toolbarList: css34({
    gap: "5"
  }),
  toolbarItem: css34({
    minHeight: "auto",
    paddingX: "0",
    paddingY: "2",
    borderRadius: "0",
    borderWidth: "0",
    color: "app.text.subtle",
    _hover: {
      bg: "transparent",
      color: "app.text"
    }
  }),
  toolbarItemActive: css34({
    bg: "transparent",
    borderColor: "transparent",
    color: "app.text",
    boxShadow: "inset 0 -2px 0 0 rgba(45, 100, 97, 0.9)"
  })
};
function SecondaryNavEntry({
  item,
  variant
}) {
  const content = /* @__PURE__ */ jsxs31(Fragment3, {
    children: [
      item.icon,
      /* @__PURE__ */ jsx42("span", {
        className: styles25.label,
        children: item.label
      }),
      item.badge && /* @__PURE__ */ jsx42("span", {
        className: styles25.badge,
        children: item.badge
      })
    ]
  });
  const className = cx34(styles25.item, variant === "toolbar" && styles25.toolbarItem, item.active && styles25.itemActive, item.active && variant === "toolbar" && styles25.toolbarItemActive);
  if (item.href) {
    return /* @__PURE__ */ jsx42("a", {
      className,
      href: item.href,
      "aria-current": item.active ? "page" : undefined,
      children: content
    });
  }
  return /* @__PURE__ */ jsx42("button", {
    type: "button",
    className,
    onClick: item.onClick,
    children: content
  });
}
function SecondaryNav({ items, trailing, variant = "pill", className }) {
  return /* @__PURE__ */ jsxs31("div", {
    className: cx34(styles25.root, className),
    children: [
      /* @__PURE__ */ jsx42("ul", {
        className: cx34(styles25.list, variant === "toolbar" && styles25.toolbarList),
        children: items.map((item) => /* @__PURE__ */ jsx42("li", {
          children: /* @__PURE__ */ jsx42(SecondaryNavEntry, {
            item,
            variant
          })
        }, item.id ?? item.href ?? item.label))
      }),
      trailing && /* @__PURE__ */ jsx42("div", {
        className: styles25.trailing,
        children: trailing
      })
    ]
  });
}
// src/components/patterns/secret-field.tsx
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { css as css35, cx as cx35 } from "styled-system/css";
import { jsx as jsx43, jsxs as jsxs32 } from "react/jsx-runtime";
"use client";
var styles26 = {
  root: css35({
    display: "flex",
    flexDirection: "column",
    gap: "2.5"
  }),
  labelRow: css35({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  label: css35({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css35({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css35({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    paddingX: "3.5",
    paddingY: "3",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.panel}"
  }),
  value: css35({
    flex: "1 1 auto",
    minWidth: 0,
    fontFamily: "mono",
    textStyle: "small",
    color: "app.text",
    wordBreak: "break-all"
  }),
  actionRow: css35({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1.5",
    flexShrink: 0
  }),
  iconButton: css35({
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    color: "app.text.muted",
    _hover: {
      bg: "app.surface",
      borderColor: "app.border.strong",
      color: "app.text"
    }
  })
};
function SecretField({
  label,
  description,
  value,
  revealed = false,
  onToggleReveal,
  onCopy,
  copied = false,
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs32("div", {
    className: cx35(styles26.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx43("div", {
        className: styles26.labelRow,
        children: /* @__PURE__ */ jsxs32("div", {
          children: [
            label && /* @__PURE__ */ jsx43("div", {
              className: styles26.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx43("div", {
              className: styles26.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs32("div", {
        className: styles26.field,
        children: [
          /* @__PURE__ */ jsx43("div", {
            className: styles26.value,
            children: value
          }),
          /* @__PURE__ */ jsxs32("div", {
            className: styles26.actionRow,
            children: [
              actions,
              onToggleReveal && /* @__PURE__ */ jsx43(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onToggleReveal,
                title: revealed ? "Hide secret value" : "Show secret value",
                "aria-label": revealed ? "Hide secret value" : "Show secret value",
                className: styles26.iconButton,
                children: revealed ? /* @__PURE__ */ jsx43(EyeOff, {
                  size: 14
                }) : /* @__PURE__ */ jsx43(Eye, {
                  size: 14
                })
              }),
              onCopy && /* @__PURE__ */ jsx43(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onCopy,
                title: "Copy to clipboard",
                "aria-label": "Copy to clipboard",
                className: styles26.iconButton,
                children: copied ? /* @__PURE__ */ jsx43(Check, {
                  size: 14
                }) : /* @__PURE__ */ jsx43(Copy, {
                  size: 14
                })
              })
            ]
          })
        ]
      })
    ]
  });
}
// src/components/patterns/section-header.tsx
import { css as css36, cx as cx36 } from "styled-system/css";
import { jsx as jsx44, jsxs as jsxs33 } from "react/jsx-runtime";
"use client";
var base3 = css36({
  px: "4",
  py: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: "1px"
});
var variants2 = {
  teal: css36({
    bg: "colorPalette.a2",
    borderColor: "colorPalette.4"
  }),
  wheat: css36({
    bg: "colorPalette.2",
    borderColor: "colorPalette.4"
  })
};
var badgeStyle = css36({
  w: "7",
  h: "7",
  rounded: "md",
  bg: "colorPalette.3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.11",
  flexShrink: 0
});
var titleStyle2 = css36({
  fontSize: "lg",
  fontWeight: "semibold",
  color: "fg.default"
});
function SectionHeader({
  title,
  icon,
  variant = "teal",
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs33("div", {
    className: cx36(base3, variants2[variant], className),
    children: [
      /* @__PURE__ */ jsxs33("div", {
        className: css36({ display: "flex", alignItems: "center", gap: "2" }),
        children: [
          icon && /* @__PURE__ */ jsx44("div", {
            className: badgeStyle,
            children: icon
          }),
          /* @__PURE__ */ jsx44("h3", {
            className: titleStyle2,
            children: title
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx44("div", {
        children: actions
      })
    ]
  });
}
// src/components/patterns/section-panel.tsx
import { css as css37, cx as cx37 } from "styled-system/css";
import { jsx as jsx45, jsxs as jsxs34 } from "react/jsx-runtime";
"use client";
var styles27 = {
  root: css37({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    overflow: "hidden"
  }),
  default: css37({
    bg: "app.surface"
  }),
  muted: css37({
    bg: "app.surface.muted"
  }),
  header: css37({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: { base: "4.5", md: "5" }
  }),
  headerBorder: css37({
    borderBottomWidth: "1px",
    borderColor: "app.border"
  }),
  copy: css37({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    minWidth: 0
  }),
  eyebrow: css37({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css37({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css37({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "3xl"
  }),
  meta: css37({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    color: "app.text.subtle",
    textStyle: "caption"
  }),
  actions: css37({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  body: css37({
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: { base: "4.5", md: "5.5" }
  }),
  footer: css37({
    paddingX: { base: "5", md: "6" },
    paddingY: "4",
    borderTopWidth: "1px",
    borderColor: "app.border",
    color: "app.text.muted"
  })
};
function SectionPanel({
  eyebrow,
  title,
  description,
  meta,
  actions,
  children,
  footer,
  variant = "default",
  className
}) {
  const hasHeader = Boolean(eyebrow || title || description || meta || actions);
  const hasBody = children !== undefined && children !== null;
  const hasFooter = footer !== undefined && footer !== null;
  return /* @__PURE__ */ jsxs34("section", {
    className: cx37(styles27.root, styles27[variant], className),
    children: [
      hasHeader && /* @__PURE__ */ jsxs34("div", {
        className: cx37(styles27.header, (hasBody || hasFooter) && styles27.headerBorder),
        children: [
          /* @__PURE__ */ jsxs34("div", {
            className: styles27.copy,
            children: [
              eyebrow && /* @__PURE__ */ jsx45("div", {
                className: styles27.eyebrow,
                children: eyebrow
              }),
              title && /* @__PURE__ */ jsx45("div", {
                className: styles27.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx45("div", {
                className: styles27.description,
                children: description
              }),
              meta && /* @__PURE__ */ jsx45("div", {
                className: styles27.meta,
                children: meta
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx45("div", {
            className: styles27.actions,
            children: actions
          })
        ]
      }),
      hasBody && /* @__PURE__ */ jsx45("div", {
        className: styles27.body,
        children
      }),
      hasFooter && /* @__PURE__ */ jsx45("div", {
        className: styles27.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/selection-list.tsx
import { css as css38, cx as cx38 } from "styled-system/css";
import { jsx as jsx46, jsxs as jsxs35 } from "react/jsx-runtime";
"use client";
var styles28 = {
  root: css38({
    display: "grid",
    gap: "2"
  }),
  item: css38({
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "3",
    padding: "4",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 160ms ease",
    _hover: {
      borderColor: "app.border.strong",
      bg: "app.surface"
    },
    _disabled: {
      opacity: "0.55",
      cursor: "not-allowed"
    }
  }),
  itemSelected: css38({
    bg: "app.accent.soft",
    borderColor: "app.border.strong",
    boxShadow: "inset 3px 0 0 0 var(--colors-app-accent)"
  }),
  body: css38({
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  icon: css38({
    boxSize: "8",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    color: "app.accent",
    flexShrink: 0
  }),
  copy: css38({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  label: css38({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css38({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  endSlot: css38({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    color: "app.text.subtle",
    flexShrink: 0
  })
};
function SelectionList({ items, value, onValueChange, className }) {
  return /* @__PURE__ */ jsx46("div", {
    className: cx38(styles28.root, className),
    children: items.map((item) => {
      const selected = item.value === value;
      return /* @__PURE__ */ jsxs35("button", {
        type: "button",
        disabled: item.disabled,
        onClick: () => onValueChange(item.value),
        className: cx38(styles28.item, selected && styles28.itemSelected),
        children: [
          /* @__PURE__ */ jsxs35("div", {
            className: styles28.body,
            children: [
              item.icon && /* @__PURE__ */ jsx46("span", {
                className: styles28.icon,
                children: item.icon
              }),
              /* @__PURE__ */ jsxs35("div", {
                className: styles28.copy,
                children: [
                  /* @__PURE__ */ jsx46("div", {
                    className: styles28.label,
                    children: item.label
                  }),
                  item.description && /* @__PURE__ */ jsx46("div", {
                    className: styles28.description,
                    children: item.description
                  })
                ]
              })
            ]
          }),
          item.endSlot && /* @__PURE__ */ jsx46("div", {
            className: styles28.endSlot,
            children: item.endSlot
          })
        ]
      }, item.value);
    })
  });
}
// src/components/patterns/selection-toolbar.tsx
import { css as css39, cx as cx39 } from "styled-system/css";
import { jsx as jsx47, jsxs as jsxs36 } from "react/jsx-runtime";
"use client";
var styles29 = {
  root: css39({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "3",
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border.strong",
    bg: "app.accent.soft",
    boxShadow: "{shadows.panel}"
  }),
  copy: css39({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  summary: css39({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css39({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  actions: css39({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  })
};
function SelectionToolbar({
  summary,
  description,
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs36("section", {
    className: cx39(styles29.root, className),
    children: [
      /* @__PURE__ */ jsxs36("div", {
        className: styles29.copy,
        children: [
          /* @__PURE__ */ jsx47("div", {
            className: styles29.summary,
            children: summary
          }),
          description && /* @__PURE__ */ jsx47("div", {
            className: styles29.description,
            children: description
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx47("div", {
        className: styles29.actions,
        children: actions
      })
    ]
  });
}
// src/components/patterns/settings-section-nav.tsx
import { css as css40, cx as cx40 } from "styled-system/css";
import { jsx as jsx48, jsxs as jsxs37 } from "react/jsx-runtime";
"use client";
var styles30 = {
  root: css40({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    padding: { base: "4", md: "5" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  title: css40({
    textStyle: "sectionTitle",
    color: "app.text",
    paddingX: "1"
  }),
  list: css40({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    padding: 0,
    margin: 0
  }),
  item: css40({
    appearance: "none",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    alignItems: "center",
    gap: "3",
    paddingX: "3",
    paddingY: "3",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "transparent",
    bg: "transparent",
    color: "app.text.muted",
    textAlign: "left",
    transitionProperty: "background-color, border-color, color, box-shadow",
    transitionDuration: "180ms",
    transitionTimingFunction: "ease",
    _hover: {
      bg: "app.surface.muted",
      borderColor: "app.border",
      color: "app.text"
    }
  }),
  itemActive: css40({
    bg: "app.nav.active",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  icon: css40({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css40({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css40({
    textStyle: "toolbarLabel",
    color: "currentColor"
  }),
  description: css40({
    textStyle: "small",
    color: "app.text.subtle"
  }),
  footer: css40({
    paddingTop: "3",
    borderTopWidth: "1px",
    borderColor: "app.border"
  })
};
function SettingsSectionNav({ title, items, footer, className }) {
  return /* @__PURE__ */ jsxs37("nav", {
    className: cx40(styles30.root, className),
    "aria-label": "Settings Sections",
    children: [
      title && /* @__PURE__ */ jsx48("div", {
        className: styles30.title,
        children: title
      }),
      /* @__PURE__ */ jsx48("ul", {
        className: styles30.list,
        children: items.map((item, index) => /* @__PURE__ */ jsx48("li", {
          children: /* @__PURE__ */ jsxs37("button", {
            type: "button",
            className: cx40(styles30.item, item.active && styles30.itemActive),
            onClick: item.onClick,
            "aria-current": item.active ? "page" : undefined,
            children: [
              item.icon && /* @__PURE__ */ jsx48("span", {
                className: styles30.icon,
                children: item.icon
              }),
              /* @__PURE__ */ jsxs37("span", {
                className: styles30.copy,
                children: [
                  /* @__PURE__ */ jsx48("span", {
                    className: styles30.label,
                    children: item.label
                  }),
                  item.description && /* @__PURE__ */ jsx48("span", {
                    className: styles30.description,
                    children: item.description
                  })
                ]
              })
            ]
          })
        }, item.id ?? `${item.label}-${index}`))
      }),
      footer && /* @__PURE__ */ jsx48("div", {
        className: styles30.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/sidebar-nav.tsx
import { css as css41, cx as cx41 } from "styled-system/css";
import { jsx as jsx49, jsxs as jsxs38, Fragment as Fragment4 } from "react/jsx-runtime";
"use client";
var styles31 = {
  root: css41({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "3.5"
  }),
  brand: css41({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  sections: css41({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    flex: "1"
  }),
  section: css41({
    display: "flex",
    flexDirection: "column",
    gap: "1.5"
  }),
  sectionTitle: css41({
    textStyle: "eyebrow",
    color: "app.text.subtle",
    paddingX: "3"
  }),
  list: css41({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1",
    padding: "0",
    margin: "0"
  }),
  item: css41({
    appearance: "none",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    alignItems: "center",
    gap: "2.25",
    paddingX: "3.5",
    paddingY: "2.25",
    borderRadius: "xl",
    color: "app.text.muted",
    bg: "transparent",
    textAlign: "left",
    textDecoration: "none",
    transitionProperty: "background-color, color, box-shadow, transform",
    transitionDuration: "180ms",
    transitionTimingFunction: "ease",
    _hover: {
      bg: "app.surface",
      color: "app.text"
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "colorPalette.8",
      outlineOffset: "2px"
    },
    _disabled: {
      opacity: "0.5",
      cursor: "not-allowed"
    }
  }),
  itemActive: css41({
    bg: "app.surface",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  itemIcon: css41({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "4.5",
    color: "app.text.subtle"
  }),
  itemText: css41({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  itemLabel: css41({
    textStyle: "caption",
    color: "currentColor",
    fontWeight: "600",
    letterSpacing: "0.1em",
    textTransform: "uppercase"
  }),
  itemDescription: css41({
    textStyle: "small",
    color: "app.text.subtle"
  }),
  itemEnd: css41({
    display: "inline-flex",
    alignItems: "center",
    gap: "2"
  }),
  badge: css41({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "6",
    height: "6",
    paddingX: "2",
    borderRadius: "full",
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    color: "app.text",
    textStyle: "caption"
  }),
  footer: css41({
    paddingTop: "4.5",
    borderTopWidth: "1px",
    borderColor: "app.border"
  })
};
function SidebarNavEntry({
  item,
  renderItem,
  showDescriptions
}) {
  const content = /* @__PURE__ */ jsxs38(Fragment4, {
    children: [
      item.icon && /* @__PURE__ */ jsx49("span", {
        className: styles31.itemIcon,
        children: item.icon
      }),
      /* @__PURE__ */ jsxs38("span", {
        className: styles31.itemText,
        children: [
          /* @__PURE__ */ jsx49("span", {
            className: styles31.itemLabel,
            children: item.label
          }),
          showDescriptions && item.description && /* @__PURE__ */ jsx49("span", {
            className: styles31.itemDescription,
            children: item.description
          })
        ]
      }),
      /* @__PURE__ */ jsxs38("span", {
        className: styles31.itemEnd,
        children: [
          item.badge && /* @__PURE__ */ jsx49("span", {
            className: styles31.badge,
            children: item.badge
          }),
          item.endSlot
        ]
      })
    ]
  });
  const className = cx41(styles31.item, item.active && styles31.itemActive);
  const ariaCurrent = item.active ? "page" : undefined;
  if (renderItem) {
    return renderItem({ item, className, content, ariaCurrent });
  }
  if (item.href) {
    return /* @__PURE__ */ jsx49("a", {
      className,
      href: item.href,
      "aria-current": ariaCurrent,
      "aria-disabled": item.disabled || undefined,
      onClick: (event) => {
        if (item.disabled) {
          event.preventDefault();
          return;
        }
        item.onClick?.();
      },
      children: content
    });
  }
  return /* @__PURE__ */ jsx49("button", {
    type: "button",
    className,
    onClick: item.onClick,
    disabled: item.disabled,
    "aria-current": ariaCurrent,
    children: content
  });
}
function SidebarNav({
  brand,
  sections,
  footer,
  showDescriptions = true,
  showSectionTitles = true,
  renderItem,
  className
}) {
  return /* @__PURE__ */ jsxs38("nav", {
    className: cx41(styles31.root, className),
    "aria-label": "Sidebar Navigation",
    children: [
      brand && /* @__PURE__ */ jsx49("div", {
        className: styles31.brand,
        children: brand
      }),
      /* @__PURE__ */ jsx49("div", {
        className: styles31.sections,
        children: sections.map((section, index) => /* @__PURE__ */ jsxs38("section", {
          className: styles31.section,
          children: [
            showSectionTitles && section.title && /* @__PURE__ */ jsx49("p", {
              className: styles31.sectionTitle,
              children: section.title
            }),
            /* @__PURE__ */ jsx49("ul", {
              className: styles31.list,
              children: section.items.map((item, itemIndex) => /* @__PURE__ */ jsx49("li", {
                children: /* @__PURE__ */ jsx49(SidebarNavEntry, {
                  item,
                  renderItem,
                  showDescriptions
                })
              }, item.id ?? item.href ?? `${item.label}-${itemIndex}`))
            })
          ]
        }, section.title ?? index))
      }),
      footer && /* @__PURE__ */ jsx49("div", {
        className: styles31.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/status-banner.tsx
import { css as css42, cx as cx42 } from "styled-system/css";
import { jsx as jsx50, jsxs as jsxs39 } from "react/jsx-runtime";
"use client";
var styles32 = {
  root: css42({
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    alignItems: "flex-start",
    gap: "3",
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px"
  }),
  iconWrap: css42({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "full",
    borderWidth: "1px",
    flexShrink: 0
  }),
  content: css42({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "3",
    minWidth: 0
  }),
  copy: css42({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  title: css42({
    textStyle: "small",
    fontWeight: "600"
  }),
  description: css42({
    textStyle: "small",
    opacity: 0.92
  }),
  actions: css42({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  info: css42({
    bg: "bg.info",
    borderColor: "border.info",
    color: "fg.info"
  }),
  success: css42({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  warning: css42({
    bg: "bg.warning",
    borderColor: "border.warning",
    color: "fg.warning"
  }),
  error: css42({
    bg: "bg.error",
    borderColor: "border.error",
    color: "fg.error"
  })
};
function StatusBanner({
  title,
  description,
  icon,
  actions,
  tone = "info",
  className
}) {
  return /* @__PURE__ */ jsxs39("section", {
    role: tone === "error" ? "alert" : "status",
    className: cx42(styles32.root, styles32[tone], className),
    children: [
      icon && /* @__PURE__ */ jsx50("div", {
        className: cx42(styles32.iconWrap, styles32[tone]),
        children: icon
      }),
      /* @__PURE__ */ jsxs39("div", {
        className: styles32.content,
        children: [
          /* @__PURE__ */ jsxs39("div", {
            className: styles32.copy,
            children: [
              /* @__PURE__ */ jsx50("div", {
                className: styles32.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx50("div", {
                className: styles32.description,
                children: description
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx50("div", {
            className: styles32.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
// src/components/patterns/step-card.tsx
import { css as css43, cx as cx43 } from "styled-system/css";
import { jsx as jsx51, jsxs as jsxs40 } from "react/jsx-runtime";
"use client";
var styles33 = {
  root: css43({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4",
    bg: "rgba(255, 255, 255, 0.88)",
    borderWidth: "1px",
    borderColor: "app.border",
    boxShadow: "{shadows.whisper}",
    rounded: "2xl",
    p: "5"
  }),
  number: css43({
    w: "8",
    h: "8",
    rounded: "xl",
    bg: "rgba(45, 100, 97, 0.08)",
    color: "app.accent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "label",
    flexShrink: 0,
    fontWeight: "700"
  }),
  content: css43({
    flex: 1,
    minW: 0,
    paddingRight: "2"
  }),
  title: css43({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css43({
    textStyle: "small",
    color: "app.text.muted",
    mt: "1.5"
  }),
  endSlot: css43({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "app.text.subtle",
    flexShrink: 0
  })
};
function StepCard({
  step,
  title,
  description,
  children,
  endSlot,
  className
}) {
  return /* @__PURE__ */ jsxs40("div", {
    className: cx43(styles33.root, className),
    children: [
      /* @__PURE__ */ jsxs40("div", {
        className: css43({ display: "flex", alignItems: "center", gap: "4", minWidth: 0, flex: "1" }),
        children: [
          /* @__PURE__ */ jsx51("div", {
            className: styles33.number,
            children: step
          }),
          /* @__PURE__ */ jsxs40("div", {
            className: styles33.content,
            children: [
              /* @__PURE__ */ jsx51("div", {
                className: styles33.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx51("div", {
                className: styles33.description,
                children: description
              }),
              children
            ]
          })
        ]
      }),
      endSlot && /* @__PURE__ */ jsx51("div", {
        className: styles33.endSlot,
        children: endSlot
      })
    ]
  });
}
// src/components/patterns/streaming-status.tsx
import { css as css44, cx as cx44 } from "styled-system/css";
import { jsx as jsx52, jsxs as jsxs41 } from "react/jsx-runtime";
"use client";
var styles34 = {
  root: css44({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "4"
  }),
  compactRoot: css44({
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm"
  }),
  header: css44({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "3"
  }),
  headerLeft: css44({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  statusLabel: css44({
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.default"
  }),
  statusLabelError: css44({
    color: "fg.error"
  }),
  progressHint: css44({
    textStyle: "xs",
    color: "fg.muted"
  }),
  trackWrap: css44({
    mb: "3"
  }),
  track: css44({
    h: "2",
    bg: "border.muted",
    rounded: "full",
    overflow: "hidden"
  }),
  range: css44({
    h: "full",
    bg: "colorPalette.9",
    transition: "width 0.3s ease-out",
    rounded: "full"
  }),
  errorBox: css44({
    p: "3",
    bg: "bg.error",
    borderWidth: "1px",
    borderColor: "border.error",
    rounded: "l2",
    display: "flex",
    alignItems: "flex-start",
    gap: "2"
  }),
  errorText: css44({
    textStyle: "sm",
    color: "fg.error"
  }),
  successBox: css44({
    p: "3",
    bg: "bg.success",
    borderWidth: "1px",
    borderColor: "border.success",
    rounded: "l2",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }),
  successText: css44({
    textStyle: "sm",
    color: "fg.success"
  }),
  stepsGrid: css44({
    mt: "4",
    display: "grid",
    gap: "2"
  }),
  step: css44({
    textAlign: "center",
    p: "2",
    rounded: "l2",
    borderWidth: "1px",
    transition: "all 0.15s",
    textStyle: "xs"
  }),
  stepActive: css44({
    bg: "colorPalette.2",
    borderColor: "colorPalette.6",
    color: "colorPalette.11"
  }),
  stepDone: css44({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  stepPending: css44({
    bg: "gray.subtle.bg",
    borderColor: "border.muted",
    color: "fg.muted"
  }),
  abortButton: css44({
    appearance: "none",
    border: "none",
    bg: "transparent",
    cursor: "pointer",
    p: "2",
    rounded: "l2",
    color: "fg.muted",
    transition: "all 0.15s",
    _hover: {
      bg: "gray.subtle.bg",
      color: "fg.default"
    }
  }),
  iconWrap: css44({
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
};
function StreamingStatus({
  status,
  progress,
  steps,
  currentStep,
  error,
  message,
  compact = false,
  onAbort,
  activeIcon,
  completeIcon,
  errorIcon,
  isComplete = false,
  className
}) {
  const isActive = !isComplete && !error;
  const hasProgress = typeof progress === "number";
  if (compact) {
    return /* @__PURE__ */ jsxs41("div", {
      className: cx44(styles34.compactRoot, className),
      children: [
        isActive && activeIcon && /* @__PURE__ */ jsx52("span", {
          className: styles34.iconWrap,
          children: activeIcon
        }),
        isComplete && completeIcon && /* @__PURE__ */ jsx52("span", {
          className: styles34.iconWrap,
          children: completeIcon
        }),
        error && errorIcon && /* @__PURE__ */ jsx52("span", {
          className: styles34.iconWrap,
          children: errorIcon
        }),
        /* @__PURE__ */ jsx52("span", {
          className: cx44(styles34.statusLabel, error ? styles34.statusLabelError : undefined),
          children: message || status
        }),
        isActive && hasProgress && /* @__PURE__ */ jsxs41("span", {
          className: styles34.progressHint,
          children: [
            "(",
            progress,
            "%)"
          ]
        }),
        onAbort && isActive && /* @__PURE__ */ jsx52("button", {
          type: "button",
          onClick: onAbort,
          className: styles34.abortButton,
          title: "Abort operation",
          children: "×"
        })
      ]
    });
  }
  const stepKeys = steps?.map((s) => s.key) ?? [];
  const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;
  return /* @__PURE__ */ jsxs41("div", {
    className: cx44(styles34.root, className),
    children: [
      /* @__PURE__ */ jsxs41("div", {
        className: styles34.header,
        children: [
          /* @__PURE__ */ jsxs41("div", {
            className: styles34.headerLeft,
            children: [
              isActive && activeIcon && /* @__PURE__ */ jsx52("span", {
                className: styles34.iconWrap,
                children: activeIcon
              }),
              isComplete && completeIcon && /* @__PURE__ */ jsx52("span", {
                className: styles34.iconWrap,
                children: completeIcon
              }),
              error && errorIcon && /* @__PURE__ */ jsx52("span", {
                className: styles34.iconWrap,
                children: errorIcon
              }),
              /* @__PURE__ */ jsxs41("div", {
                children: [
                  /* @__PURE__ */ jsx52("div", {
                    className: cx44(styles34.statusLabel, error ? styles34.statusLabelError : undefined),
                    children: message || status
                  }),
                  isActive && hasProgress && /* @__PURE__ */ jsxs41("div", {
                    className: styles34.progressHint,
                    children: [
                      progress,
                      "% complete"
                    ]
                  })
                ]
              })
            ]
          }),
          onAbort && isActive && /* @__PURE__ */ jsx52("button", {
            type: "button",
            onClick: onAbort,
            className: styles34.abortButton,
            title: "Abort operation",
            children: "×"
          })
        ]
      }),
      isActive && hasProgress && /* @__PURE__ */ jsx52("div", {
        className: styles34.trackWrap,
        children: /* @__PURE__ */ jsx52("div", {
          className: styles34.track,
          children: /* @__PURE__ */ jsx52("div", {
            className: styles34.range,
            style: { width: `${progress}%` }
          })
        })
      }),
      error && /* @__PURE__ */ jsxs41("div", {
        className: styles34.errorBox,
        children: [
          errorIcon && /* @__PURE__ */ jsx52("span", {
            className: styles34.iconWrap,
            children: errorIcon
          }),
          /* @__PURE__ */ jsx52("span", {
            className: styles34.errorText,
            children: error
          })
        ]
      }),
      isComplete && !error && /* @__PURE__ */ jsxs41("div", {
        className: styles34.successBox,
        children: [
          completeIcon && /* @__PURE__ */ jsx52("span", {
            className: styles34.iconWrap,
            children: completeIcon
          }),
          /* @__PURE__ */ jsx52("span", {
            className: styles34.successText,
            children: "Operation completed successfully"
          })
        ]
      }),
      steps && steps.length > 0 && isActive && /* @__PURE__ */ jsx52("div", {
        className: styles34.stepsGrid,
        style: { gridTemplateColumns: `repeat(${steps.length}, 1fr)` },
        children: steps.map((step, idx) => {
          const isCurrent = step.key === currentStep;
          const isDone = currentIdx >= 0 && idx < currentIdx;
          return /* @__PURE__ */ jsx52("div", {
            className: cx44(styles34.step, isCurrent ? styles34.stepActive : isDone ? styles34.stepDone : styles34.stepPending),
            children: step.label
          }, step.key);
        })
      })
    ]
  });
}
// src/components/patterns/support-panel.tsx
import { css as css45, cx as cx45 } from "styled-system/css";
import { jsx as jsx53, jsxs as jsxs42 } from "react/jsx-runtime";
"use client";
var styles35 = {
  root: css45({
    display: "grid",
    gridTemplateColumns: { base: "1fr", lg: "minmax(0, 1fr) auto" },
    gap: "5",
    padding: { base: "5", md: "6" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    boxShadow: "{shadows.panel}"
  }),
  rootAccent: css45({
    bg: "app.accent",
    borderColor: "transparent",
    boxShadow: "none"
  }),
  copy: css45({
    display: "flex",
    flexDirection: "column",
    gap: "3"
  }),
  eyebrow: css45({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  eyebrowAccent: css45({
    color: "rgba(248, 249, 249, 0.72)"
  }),
  title: css45({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  titleAccent: css45({
    color: "app.text.inverse"
  }),
  description: css45({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "2xl"
  }),
  descriptionAccent: css45({
    color: "rgba(248, 249, 249, 0.76)"
  }),
  actions: css45({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  aside: css45({
    display: "flex",
    alignItems: { base: "flex-start", lg: "center" },
    justifyContent: { base: "flex-start", lg: "flex-end" }
  })
};
function SupportPanel({
  eyebrow,
  title,
  description,
  actions,
  aside,
  tone = "muted",
  className
}) {
  return /* @__PURE__ */ jsxs42("section", {
    className: cx45(styles35.root, tone === "accent" && styles35.rootAccent, className),
    children: [
      /* @__PURE__ */ jsxs42("div", {
        className: styles35.copy,
        children: [
          eyebrow && /* @__PURE__ */ jsx53("div", {
            className: cx45(styles35.eyebrow, tone === "accent" && styles35.eyebrowAccent),
            children: eyebrow
          }),
          /* @__PURE__ */ jsx53("div", {
            className: cx45(styles35.title, tone === "accent" && styles35.titleAccent),
            children: title
          }),
          description && /* @__PURE__ */ jsx53("div", {
            className: cx45(styles35.description, tone === "accent" && styles35.descriptionAccent),
            children: description
          }),
          actions && /* @__PURE__ */ jsx53("div", {
            className: styles35.actions,
            children: actions
          })
        ]
      }),
      aside && /* @__PURE__ */ jsx53("div", {
        className: styles35.aside,
        children: aside
      })
    ]
  });
}
// src/components/patterns/top-toolbar.tsx
import { css as css46, cx as cx46 } from "styled-system/css";
import { jsx as jsx54, jsxs as jsxs43 } from "react/jsx-runtime";
"use client";
var styles36 = {
  root: css46({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    paddingX: { base: "4", md: "4.5", xl: "5" },
    paddingY: "2.5"
  }),
  row: css46({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "2.5"
  }),
  left: css46({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    gap: "4",
    minWidth: 0,
    flex: "1"
  }),
  titleBlock: css46({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  title: css46({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  subtitle: css46({
    textStyle: "small",
    color: "app.text.muted"
  }),
  center: css46({
    width: "100%",
    maxWidth: { base: "full", md: "none" },
    flex: { md: "1" }
  }),
  trailing: css46({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: { base: "flex-start", md: "flex-end" },
    gap: "2.5"
  }),
  children: css46({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "3",
    paddingTop: "3",
    borderTopWidth: "1px",
    borderColor: "app.border"
  })
};
function TopToolbar({
  leading,
  title,
  subtitle,
  center,
  trailing,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs43("div", {
    className: cx46(styles36.root, className),
    children: [
      /* @__PURE__ */ jsxs43("div", {
        className: styles36.row,
        children: [
          /* @__PURE__ */ jsxs43("div", {
            className: styles36.left,
            children: [
              leading,
              (title || subtitle) && /* @__PURE__ */ jsxs43("div", {
                className: styles36.titleBlock,
                children: [
                  title && /* @__PURE__ */ jsx54("div", {
                    className: styles36.title,
                    children: title
                  }),
                  subtitle && /* @__PURE__ */ jsx54("div", {
                    className: styles36.subtitle,
                    children: subtitle
                  })
                ]
              })
            ]
          }),
          center && /* @__PURE__ */ jsx54("div", {
            className: styles36.center,
            children: center
          }),
          trailing && /* @__PURE__ */ jsx54("div", {
            className: styles36.trailing,
            children: trailing
          })
        ]
      }),
      children && /* @__PURE__ */ jsx54("div", {
        className: styles36.children,
        children
      })
    ]
  });
}
// src/components/patterns/value-field.tsx
import { css as css47, cx as cx47 } from "styled-system/css";
import { jsx as jsx55, jsxs as jsxs44 } from "react/jsx-runtime";
"use client";
var styles37 = {
  root: css47({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  labelRow: css47({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  labelWrap: css47({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css47({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css47({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css47({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    paddingX: "3.5",
    paddingY: "3",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    boxShadow: "{shadows.panel}",
    minWidth: 0
  }),
  default: css47({
    bg: "app.surface"
  }),
  muted: css47({
    bg: "app.surface.muted"
  }),
  valueWrap: css47({
    display: "flex",
    alignItems: "center",
    gap: "2",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  icon: css47({
    color: "app.accent",
    flexShrink: 0
  }),
  value: css47({
    textStyle: "small",
    color: "app.text",
    minWidth: 0,
    flex: "1 1 auto",
    wordBreak: "break-word"
  }),
  mono: css47({
    fontFamily: "mono"
  }),
  actions: css47({
    display: "flex",
    alignItems: "center",
    gap: "1.5",
    flexShrink: 0
  })
};
function ValueField({
  label,
  description,
  value,
  icon,
  actions,
  mono = false,
  tone = "muted",
  className
}) {
  return /* @__PURE__ */ jsxs44("div", {
    className: cx47(styles37.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx55("div", {
        className: styles37.labelRow,
        children: /* @__PURE__ */ jsxs44("div", {
          className: styles37.labelWrap,
          children: [
            label && /* @__PURE__ */ jsx55("div", {
              className: styles37.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx55("div", {
              className: styles37.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs44("div", {
        className: cx47(styles37.field, styles37[tone]),
        children: [
          /* @__PURE__ */ jsxs44("div", {
            className: styles37.valueWrap,
            children: [
              icon && /* @__PURE__ */ jsx55("div", {
                className: styles37.icon,
                children: icon
              }),
              /* @__PURE__ */ jsx55("div", {
                className: cx47(styles37.value, mono && styles37.mono),
                children: value
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx55("div", {
            className: styles37.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
// src/components/patterns/workspace-page.tsx
import { css as css48, cx as cx48 } from "styled-system/css";
import { jsx as jsx56 } from "react/jsx-runtime";
"use client";
var styles38 = {
  base: css48({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    paddingBottom: "8"
  }),
  comfortable: css48({
    gap: "5"
  }),
  compact: css48({
    gap: "5"
  })
};
function WorkspacePage({
  children,
  density = "comfortable",
  className
}) {
  return /* @__PURE__ */ jsx56("div", {
    className: cx48(styles38.base, density === "compact" && styles38.compact, density === "comfortable" && styles38.comfortable, className),
    children
  });
}
export {
  buildGradientStyle,
  WorkspacePage,
  ValueField,
  TopToolbar,
  SupportPanel,
  StreamingStatus,
  StepCard,
  StatusBanner,
  StatCard,
  SidebarNav,
  SettingsSectionNav,
  SelectionToolbar,
  SelectionList,
  SectionPanel,
  SectionHeader,
  SecretField,
  SecondaryNav,
  ResourceList,
  PricingCard,
  PickerField,
  PageTitle,
  PageIntro,
  OptionRow,
  ModelIconCustomizer,
  ModelCardIcon,
  MetricRail,
  MetaPill,
  ListToolbar,
  LineChart,
  InsetPanel,
  IconPicker,
  IconBadge,
  HeroPanel,
  HelpTrigger,
  HelpPanel,
  GradientPicker,
  FileTree,
  FeatureCard,
  EntityCard,
  EmptyState,
  DetailPanel,
  DetailDialog,
  DEFAULT_ICON_CONFIG,
  CreditPill,
  CredentialCard,
  ConfirmDialog,
  CollectionPageHeader,
  ChoiceSegment,
  AmountSelector,
  ActivityTable,
  ActionCard,
  AccentLabel
};

//# debugId=995A0394EAAAFCD864756E2164756E21
//# sourceMappingURL=index.js.map
