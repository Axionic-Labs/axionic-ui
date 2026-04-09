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
  bodyMaxHeight,
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
        style: bodyMaxHeight ? {
          maxHeight: bodyMaxHeight,
          overflowY: "auto"
        } : undefined,
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
  }),
  starter: css11({
    bg: "app.surface",
    borderColor: "#c9d0d6",
    boxShadow: "0 0 0 1px rgba(201, 208, 214, 0.35)"
  }),
  pro: css11({
    bg: "app.surface",
    borderColor: "#c9a54c",
    boxShadow: "0 0 0 1px rgba(201, 165, 76, 0.38)"
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
// src/components/patterns/form-dialog.tsx
import { css as css18, cx as cx18 } from "styled-system/css";
import { jsx as jsx24, jsxs as jsxs19 } from "react/jsx-runtime";
"use client";
var styles16 = {
  accentBar: css18({
    h: "3px",
    w: "full",
    roundedTop: "l3",
    background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
  }),
  header: css18({
    display: "flex",
    flexDirection: "column",
    gap: "3"
  }),
  headerRow: css18({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4"
  }),
  headerCopy: css18({
    display: "flex",
    alignItems: "flex-start",
    gap: "3.5",
    minWidth: 0
  }),
  icon: css18({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "10",
    rounded: "2xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.accent.soft",
    color: "app.accent",
    flexShrink: 0
  }),
  copy: css18({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  eyebrow: css18({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  description: css18({
    textStyle: "small",
    color: "app.text.muted",
    maxWidth: "2xl"
  }),
  body: css18({
    display: "flex",
    flexDirection: "column",
    gap: "5",
    maxHeight: "min(72vh, 48rem)",
    overflowY: "auto",
    paddingRight: "1"
  }),
  footer: css18({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4",
    flexWrap: "wrap"
  }),
  footerHint: css18({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css18({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "2.5",
    flexWrap: "wrap",
    marginLeft: "auto"
  })
};
function FormDialog({
  open,
  onOpenChange,
  title,
  description,
  eyebrow,
  icon,
  children,
  size = "xl",
  submitLabel = "Save",
  cancelLabel = "Cancel",
  submitting = false,
  disableSubmit = false,
  onSubmit,
  onCancel,
  footerHint,
  footer,
  className,
  bodyClassName,
  hideFooter = false
}) {
  return /* @__PURE__ */ jsxs19(Root2, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: [
      /* @__PURE__ */ jsx24(Backdrop, {}),
      /* @__PURE__ */ jsx24(Positioner, {
        children: /* @__PURE__ */ jsxs19(Content, {
          className,
          children: [
            /* @__PURE__ */ jsx24("div", {
              className: styles16.accentBar
            }),
            /* @__PURE__ */ jsx24(CloseTrigger, {
              asChild: true,
              children: /* @__PURE__ */ jsx24(CloseButton, {
                size: "sm",
                "aria-label": "Close dialog"
              })
            }),
            /* @__PURE__ */ jsx24(Header, {
              className: styles16.header,
              children: /* @__PURE__ */ jsx24("div", {
                className: styles16.headerRow,
                children: /* @__PURE__ */ jsxs19("div", {
                  className: styles16.headerCopy,
                  children: [
                    icon && /* @__PURE__ */ jsx24("div", {
                      className: styles16.icon,
                      children: icon
                    }),
                    /* @__PURE__ */ jsxs19("div", {
                      className: styles16.copy,
                      children: [
                        eyebrow && /* @__PURE__ */ jsx24("div", {
                          className: styles16.eyebrow,
                          children: eyebrow
                        }),
                        /* @__PURE__ */ jsx24(Title, {
                          children: title
                        }),
                        description && /* @__PURE__ */ jsx24(Description, {
                          className: styles16.description,
                          children: description
                        })
                      ]
                    })
                  ]
                })
              })
            }),
            /* @__PURE__ */ jsx24(Body, {
              className: cx18(styles16.body, bodyClassName),
              children
            }),
            !hideFooter && (footer ? /* @__PURE__ */ jsx24(Footer, {
              children: footer
            }) : /* @__PURE__ */ jsxs19(Footer, {
              className: styles16.footer,
              children: [
                footerHint ? /* @__PURE__ */ jsx24("div", {
                  className: styles16.footerHint,
                  children: footerHint
                }) : /* @__PURE__ */ jsx24("div", {}),
                /* @__PURE__ */ jsxs19("div", {
                  className: styles16.actions,
                  children: [
                    /* @__PURE__ */ jsx24(Button, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => {
                        onCancel?.();
                        onOpenChange(false);
                      },
                      children: cancelLabel
                    }),
                    /* @__PURE__ */ jsx24(Button, {
                      variant: "brand",
                      size: "sm",
                      onClick: onSubmit,
                      disabled: disableSubmit,
                      loading: submitting,
                      children: submitLabel
                    })
                  ]
                })
              ]
            }))
          ]
        })
      })
    ]
  });
}
// src/components/patterns/gradient-picker.tsx
import { Plus, X } from "lucide-react";
import { css as css19, cx as cx19 } from "styled-system/css";
import { jsx as jsx25, jsxs as jsxs20 } from "react/jsx-runtime";
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
var swatchStyle = css19({
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
var hiddenInput = css19({ opacity: 0, position: "absolute", w: 0, h: 0 });
var removeBtn = css19({
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
var addBtn = css19({
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
var pillBase = css19({
  px: "2",
  py: "0.5",
  rounded: "full",
  fontSize: "xs",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var pillActive = css19({ bg: "teal.a3", color: "fg.default" });
var pillInactive = css19({ bg: "transparent", color: "fg.subtle" });
var previewBar = css19({
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
  return /* @__PURE__ */ jsxs20("div", {
    className: cx19(css19({ display: "flex", flexDir: "column", gap: "2", minW: 0 }), className),
    children: [
      /* @__PURE__ */ jsxs20("div", {
        className: css19({ display: "flex", alignItems: "center", gap: "2", flexWrap: "wrap" }),
        children: [
          colors.map((color, i) => /* @__PURE__ */ jsxs20("div", {
            className: css19({ position: "relative" }),
            children: [
              /* @__PURE__ */ jsx25("label", {
                className: swatchStyle,
                style: { backgroundColor: color },
                children: /* @__PURE__ */ jsx25("input", {
                  type: "color",
                  value: color,
                  onChange: (e) => updateColor(i, e.target.value),
                  className: hiddenInput
                })
              }),
              colors.length > 1 && /* @__PURE__ */ jsx25("button", {
                type: "button",
                onClick: () => removeColor(i),
                className: removeBtn,
                children: /* @__PURE__ */ jsx25(X, {
                  size: 10
                })
              })
            ]
          }, i)),
          colors.length < 3 && /* @__PURE__ */ jsx25("button", {
            type: "button",
            onClick: addColor,
            className: addBtn,
            children: /* @__PURE__ */ jsx25(Plus, {
              size: 14
            })
          })
        ]
      }),
      colors.length > 1 && /* @__PURE__ */ jsx25("div", {
        className: css19({ display: "flex", gap: "1", flexWrap: "wrap" }),
        children: ANGLE_PRESETS.map((preset) => /* @__PURE__ */ jsx25("button", {
          type: "button",
          onClick: () => onAngleChange(preset),
          className: cx19(pillBase, angle === preset ? pillActive : pillInactive),
          children: preset
        }, preset))
      }),
      /* @__PURE__ */ jsx25("div", {
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
import { css as css20, cx as cx20 } from "styled-system/css";
import { createStyleContext as createStyleContext4 } from "styled-system/jsx";
import { helpPanel } from "styled-system/recipes";
import { jsx as jsx26, jsxs as jsxs21, Fragment } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider2, withContext: withContext4 } = createStyleContext4(helpPanel);
var HeaderContainer = withContext4(ark7.div, "header");
var HeaderIconBadge = withContext4(ark7.div, "headerIcon");
var AccentBar = withContext4(ark7.div, "accentBar");
var TabButton = withContext4(ark7.button, "tab");
var FooterContainer = withContext4(ark7.div, "footer");
var Root4 = withRootProvider2(ark7.div);
Root4.displayName = "HelpPanel.Root";
var Header3 = forwardRef6(({ icon, title, subtitle, onClose, closeIcon, accentBar: accentBar2 = true, className }, ref) => /* @__PURE__ */ jsxs21(HeaderContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx26(AccentBar, {
      style: { top: 0 }
    }),
    /* @__PURE__ */ jsxs21("div", {
      className: css20({ display: "flex", alignItems: "center", gap: "3" }),
      children: [
        icon && /* @__PURE__ */ jsx26(HeaderIconBadge, {
          children: icon
        }),
        /* @__PURE__ */ jsxs21("div", {
          children: [
            /* @__PURE__ */ jsx26("h2", {
              className: css20({
                fontSize: "sm",
                fontWeight: "semibold",
                color: "fg.default",
                letterSpacing: "wide"
              }),
              children: title
            }),
            subtitle && /* @__PURE__ */ jsx26("p", {
              className: css20({ fontSize: "xs", color: "fg.subtle" }),
              children: subtitle
            })
          ]
        })
      ]
    }),
    onClose && /* @__PURE__ */ jsx26("button", {
      onClick: onClose,
      type: "button",
      className: css20({
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
      children: closeIcon ?? /* @__PURE__ */ jsx26(X2, {
        size: 14,
        "aria-label": "Close"
      })
    })
  ]
}));
Header3.displayName = "HelpPanel.Header";
var TabBar = withContext4(ark7.div, "tabBar");
TabBar.displayName = "HelpPanel.TabBar";
var Tab = forwardRef6(({ active, icon, label, onClick, title, className }, ref) => /* @__PURE__ */ jsxs21(TabButton, {
  ref,
  type: "button",
  onClick,
  title,
  "data-selected": active ? "" : undefined,
  className,
  children: [
    icon,
    /* @__PURE__ */ jsx26("span", {
      className: css20({ display: { base: "none", sm: "inline" } }),
      children: label
    })
  ]
}));
Tab.displayName = "HelpPanel.Tab";
var Content2 = withContext4(ark7.div, "content");
Content2.displayName = "HelpPanel.Content";
var Footer3 = forwardRef6(({ hint, shortcutKey, accentBar: accentBar2 = true, children, className }, ref) => /* @__PURE__ */ jsxs21(FooterContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx26(AccentBar, {
      style: { bottom: 0, opacity: 0.3 }
    }),
    children ?? /* @__PURE__ */ jsxs21(Fragment, {
      children: [
        hint && /* @__PURE__ */ jsx26("span", {
          children: hint
        }),
        shortcutKey && /* @__PURE__ */ jsx26("kbd", {
          className: css20({
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
  return /* @__PURE__ */ jsxs21("h4", {
    className: cx20(css20({
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
      /* @__PURE__ */ jsx26("span", {
        className: css20({
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
import { jsx as jsx27 } from "react/jsx-runtime";
"use client";
function HelpTrigger({ active, onActivate, children }) {
  const handleMouseEnter = useCallback2(() => {
    if (active) {
      onActivate();
    }
  }, [active, onActivate]);
  return /* @__PURE__ */ jsx27("div", {
    style: { display: "contents" },
    onMouseEnter: handleMouseEnter,
    role: "group",
    children
  });
}
// src/components/patterns/hero-panel.tsx
import { css as css21, cx as cx21 } from "styled-system/css";
import { jsx as jsx28, jsxs as jsxs22 } from "react/jsx-runtime";
"use client";
var styles17 = {
  root: css21({
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
  copy: css21({
    display: "flex",
    flexDirection: "column",
    gap: "5",
    minWidth: 0,
    padding: { base: "6", md: "7", xl: "8" }
  }),
  eyebrow: css21({
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
  title: css21({
    textStyle: "h1",
    color: "app.text",
    maxWidth: "16ch"
  }),
  description: css21({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "28rem"
  }),
  actions: css21({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  footer: css21({
    paddingTop: "4",
    borderTopWidth: "1px",
    borderColor: "app.border",
    color: "app.text.muted"
  }),
  media: css21({
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
  return /* @__PURE__ */ jsxs22("section", {
    className: cx21(styles17.root, className),
    children: [
      /* @__PURE__ */ jsxs22("div", {
        className: styles17.copy,
        children: [
          eyebrow && /* @__PURE__ */ jsx28("div", {
            className: styles17.eyebrow,
            children: eyebrow
          }),
          /* @__PURE__ */ jsx28("div", {
            className: styles17.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx28("div", {
            className: styles17.description,
            children: description
          }),
          actions && /* @__PURE__ */ jsx28("div", {
            className: styles17.actions,
            children: actions
          }),
          footer && /* @__PURE__ */ jsx28("div", {
            className: styles17.footer,
            children: footer
          })
        ]
      }),
      media && /* @__PURE__ */ jsx28("div", {
        className: styles17.media,
        children: media
      })
    ]
  });
}
// src/components/patterns/icon-badge.tsx
import { css as css22, cx as cx22 } from "styled-system/css";
import { jsx as jsx29 } from "react/jsx-runtime";
"use client";
var base2 = css22({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css22({ w: "8", h: "8" }),
  md: css22({ w: "10", h: "10" }),
  lg: css22({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsx29("div", {
    className: cx22(base2, sizes[size], className),
    children: icon
  });
}
// src/components/patterns/icon-picker.tsx
import { icons } from "lucide-react";
import { useMemo as useMemo3, useState as useState3 } from "react";
import { css as css23, cx as cx23 } from "styled-system/css";

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
import { jsx as jsx30 } from "react/jsx-runtime";
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
  defaultProps: { children: /* @__PURE__ */ jsx30(ArrowTip, {}) }
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
import { jsx as jsx31, jsxs as jsxs23 } from "react/jsx-runtime";
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
var triggerStyle = css23({
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
var gridStyle = css23({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "1",
  maxH: "220px",
  overflowY: "auto"
});
var cellBase = css23({
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
var cellActive = css23({ bg: "teal.a3" });
var labelStyle = css23({ fontSize: "sm", color: "fg.muted" });
var emptyStyle = css23({ fontSize: "sm", color: "fg.subtle", textAlign: "center", py: "4" });
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
  return /* @__PURE__ */ jsxs23(Root5, {
    portalled: true,
    children: [
      /* @__PURE__ */ jsx31(Trigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsxs23("button", {
          type: "button",
          className: cx23(triggerStyle, className),
          children: [
            SelectedIcon && /* @__PURE__ */ jsx31(SelectedIcon, {
              size: 16
            }),
            /* @__PURE__ */ jsx31("span", {
              className: labelStyle,
              children: value
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx31(Positioner2, {
        className: css23({ zIndex: "popover" }),
        children: /* @__PURE__ */ jsxs23(Content3, {
          className: css23({
            w: "280px",
            p: "3",
            bg: "bg.default",
            borderWidth: "1px",
            borderColor: "border.default",
            shadow: "lg",
            rounded: "lg"
          }),
          children: [
            /* @__PURE__ */ jsx31(Input, {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search icons...",
              size: "sm",
              className: css23({ mb: "2" })
            }),
            /* @__PURE__ */ jsx31("div", {
              className: gridStyle,
              children: displayedIcons.map((name) => {
                const Icon = icons[name];
                if (!Icon)
                  return null;
                return /* @__PURE__ */ jsx31("button", {
                  type: "button",
                  title: name,
                  onClick: () => {
                    onChange(name);
                    setSearch("");
                  },
                  className: cx23(cellBase, name === value && cellActive),
                  children: /* @__PURE__ */ jsx31(Icon, {
                    size: 18
                  })
                }, name);
              })
            }),
            displayedIcons.length === 0 && /* @__PURE__ */ jsx31("p", {
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
import { css as css24, cx as cx24 } from "styled-system/css";
import { jsx as jsx32 } from "react/jsx-runtime";
"use client";
var styles18 = {
  base: css24({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    padding: "4",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted"
  }),
  accent: css24({
    bg: "app.accent.soft",
    borderColor: "transparent"
  })
};
function InsetPanel({ children, tone = "default", className }) {
  return /* @__PURE__ */ jsx32("div", {
    className: cx24(styles18.base, tone === "accent" && styles18.accent, className),
    children
  });
}
// src/components/patterns/line-chart.tsx
import { useRef } from "react";
import { css as css25, cx as cx25 } from "styled-system/css";
import { token } from "styled-system/tokens";
import { jsx as jsx33, jsxs as jsxs24 } from "react/jsx-runtime";
"use client";
var styles19 = {
  root: css25({
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
  return /* @__PURE__ */ jsxs24("svg", {
    viewBox: `0 0 ${width} ${height}`,
    className: cx25(styles19.root, className),
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Line chart",
    children: [
      /* @__PURE__ */ jsx33("defs", {
        children: gradientFill && /* @__PURE__ */ jsxs24("linearGradient", {
          id: gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [
            /* @__PURE__ */ jsx33("stop", {
              offset: "0%",
              stopColor: resolvedColor,
              stopOpacity: "0.3"
            }),
            /* @__PURE__ */ jsx33("stop", {
              offset: "100%",
              stopColor: resolvedColor,
              stopOpacity: "0"
            })
          ]
        })
      }),
      showGrid && /* @__PURE__ */ jsx33("g", {
        opacity: "0.2",
        children: [0, 0.25, 0.5, 0.75, 1].map((ratio) => /* @__PURE__ */ jsx33("line", {
          x1: padding.left,
          y1: padding.top + chartHeight * ratio,
          x2: width - padding.right,
          y2: padding.top + chartHeight * ratio,
          stroke: gridColor,
          strokeDasharray: "2,4"
        }, ratio))
      }),
      gradientFill && /* @__PURE__ */ jsx33("path", {
        d: areaPath,
        fill: `url(#${gradientId})`
      }),
      /* @__PURE__ */ jsx33("path", {
        d: linePath,
        fill: "none",
        stroke: resolvedColor,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      pointsVisible && data.map((d, i) => /* @__PURE__ */ jsx33("circle", {
        cx: scaleX(d.x),
        cy: scaleY(d.y),
        r: "3",
        fill: resolvedColor,
        opacity: "0.8"
      }, `${d.x}-${d.y}-${i}`)),
      showAxis && /* @__PURE__ */ jsxs24("g", {
        children: [
          /* @__PURE__ */ jsx33("text", {
            x: padding.left - 4,
            y: padding.top + 4,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMax.toFixed(0)
          }),
          /* @__PURE__ */ jsx33("text", {
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
import { css as css26, cx as cx26 } from "styled-system/css";
import { jsx as jsx34 } from "react/jsx-runtime";
"use client";
var styles20 = {
  base: css26({
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
  accent: css26({
    bg: "app.accent.soft",
    borderColor: "transparent",
    color: "app.accent"
  }),
  success: css26({
    bg: "bg.success",
    borderColor: "transparent",
    color: "fg.success"
  }),
  warning: css26({
    bg: "bg.warning",
    borderColor: "transparent",
    color: "fg.warning"
  }),
  danger: css26({
    bg: "bg.error",
    borderColor: "transparent",
    color: "fg.error"
  })
};
function MetaPill({ children, tone = "default", className }) {
  return /* @__PURE__ */ jsx34("span", {
    className: cx26(styles20.base, tone === "accent" && styles20.accent, tone === "success" && styles20.success, tone === "warning" && styles20.warning, tone === "danger" && styles20.danger, className),
    children
  });
}
// src/components/patterns/metric-rail.tsx
import { css as css28, cx as cx28 } from "styled-system/css";

// src/components/patterns/stat-card.tsx
import { css as css27, cx as cx27 } from "styled-system/css";
import { jsx as jsx35, jsxs as jsxs25 } from "react/jsx-runtime";
"use client";
var styles21 = {
  root: css27({
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
  header: css27({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  iconWrap: css27({
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
  content: css27({
    flex: 1,
    minW: 0
  }),
  title: css27({
    textStyle: "metricLabel",
    color: "app.text.subtle"
  }),
  value: css27({
    textStyle: "metricValue",
    color: "app.text"
  }),
  change: css27({
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
  const changeColor = changeType === "positive" ? css27({ color: "fg.success" }) : changeType === "negative" ? css27({ color: "fg.error" }) : css27({ color: "app.text.muted" });
  return /* @__PURE__ */ jsx35("div", {
    className: cx27(styles21.root, className),
    children: /* @__PURE__ */ jsxs25("div", {
      className: styles21.content,
      children: [
        /* @__PURE__ */ jsxs25("div", {
          className: styles21.header,
          children: [
            /* @__PURE__ */ jsx35("div", {
              className: styles21.title,
              children: title
            }),
            icon && /* @__PURE__ */ jsx35("div", {
              className: styles21.iconWrap,
              style: {
                ...iconBg ? { backgroundColor: iconBg } : {},
                ...iconColor ? { color: iconColor } : {}
              },
              children: icon
            })
          ]
        }),
        /* @__PURE__ */ jsx35("div", {
          className: styles21.value,
          children: value
        }),
        /* @__PURE__ */ jsxs25("div", {
          className: css27({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
          children: [
            change && /* @__PURE__ */ jsx35("span", {
              className: cx27(styles21.change, changeColor),
              children: change
            }),
            badge && /* @__PURE__ */ jsx35("span", {
              className: css27({
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
import { jsx as jsx36 } from "react/jsx-runtime";
"use client";
function MetricRail({ items, columns = 3, className }) {
  const rootClassName = css28({
    display: "grid",
    gap: "4",
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(2, minmax(0, 1fr))",
      xl: `repeat(${columns}, minmax(0, 1fr))`
    }
  });
  return /* @__PURE__ */ jsx36("div", {
    className: cx28(rootClassName, className),
    children: items.map((item, index) => /* @__PURE__ */ jsx36(StatCard, {
      ...item
    }, `${index}-${String(item.value)}`))
  });
}
// src/components/patterns/model-icon-customizer.tsx
import { icons as icons2 } from "lucide-react";
import { css as css29, cx as cx29 } from "styled-system/css";
import { jsx as jsx37, jsxs as jsxs26 } from "react/jsx-runtime";
"use client";
var DEFAULT_ICON_CONFIG = {
  iconName: "Cpu",
  bgColors: ["#5AB8C4", "#9333ea"],
  bgAngle: 135,
  iconColor: "#ffffff"
};
var cardIconBase = css29({
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
  return /* @__PURE__ */ jsx37("div", {
    className: cx29(cardIconBase, className),
    style: {
      width: size,
      height: size,
      background: buildGradientStyle(c.bgColors, c.bgAngle ?? 135)
    },
    children: Icon && /* @__PURE__ */ jsx37(Icon, {
      size: iconSize,
      style: { color: c.iconColor ?? "#ffffff" }
    })
  });
}
var swatchStyle2 = css29({
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
var hiddenInput2 = css29({ opacity: 0, position: "absolute", w: 0, h: 0 });
var rowStyle = css29({ display: "flex", alignItems: "center", gap: "3" });
var rowStartStyle = css29({ display: "flex", alignItems: "flex-start", gap: "3" });
var labelStyle2 = css29({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0 });
var labelTopStyle = css29({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0, pt: "1" });
function ModelIconCustomizer({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxs26("div", {
    className: cx29(css29({ display: "flex", gap: "4", alignItems: "flex-start" }), className),
    children: [
      /* @__PURE__ */ jsx37(ModelCardIcon, {
        config: value,
        size: 56,
        iconSize: 28
      }),
      /* @__PURE__ */ jsxs26("div", {
        className: css29({ display: "flex", flexDir: "column", gap: "3", flex: 1, minW: 0 }),
        children: [
          /* @__PURE__ */ jsxs26("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx37("div", {
                className: labelStyle2,
                children: "Icon"
              }),
              /* @__PURE__ */ jsx37(IconPicker, {
                value: value.iconName,
                onChange: (iconName) => onChange({ ...value, iconName })
              })
            ]
          }),
          /* @__PURE__ */ jsxs26("div", {
            className: rowStartStyle,
            children: [
              /* @__PURE__ */ jsx37("div", {
                className: labelTopStyle,
                children: "Background"
              }),
              /* @__PURE__ */ jsx37(GradientPicker, {
                colors: value.bgColors,
                angle: value.bgAngle ?? 135,
                onColorsChange: (bgColors) => onChange({ ...value, bgColors }),
                onAngleChange: (bgAngle) => onChange({ ...value, bgAngle })
              })
            ]
          }),
          /* @__PURE__ */ jsxs26("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx37("div", {
                className: labelStyle2,
                children: "Icon Color"
              }),
              /* @__PURE__ */ jsx37("label", {
                className: swatchStyle2,
                style: { backgroundColor: value.iconColor ?? "#ffffff" },
                children: /* @__PURE__ */ jsx37("input", {
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
import { css as css30, cx as cx30 } from "styled-system/css";
import { jsx as jsx38, jsxs as jsxs27, Fragment as Fragment2 } from "react/jsx-runtime";
"use client";
var styles22 = {
  root: css30({
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
  interactive: css30({
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
  selected: css30({
    borderColor: "app.border.strong",
    bg: "app.accent.soft"
  }),
  disabled: css30({
    opacity: "0.55",
    cursor: "not-allowed"
  }),
  lead: css30({
    display: "flex",
    alignItems: "center",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  leading: css30({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }),
  copy: css30({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  title: css30({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css30({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  trailing: css30({
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
  const content = /* @__PURE__ */ jsxs27(Fragment2, {
    children: [
      /* @__PURE__ */ jsxs27("div", {
        className: styles22.lead,
        children: [
          leading && /* @__PURE__ */ jsx38("div", {
            className: styles22.leading,
            children: leading
          }),
          /* @__PURE__ */ jsxs27("div", {
            className: styles22.copy,
            children: [
              /* @__PURE__ */ jsx38("div", {
                className: styles22.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx38("div", {
                className: styles22.description,
                children: description
              })
            ]
          })
        ]
      }),
      trailing && /* @__PURE__ */ jsx38("div", {
        className: styles22.trailing,
        children: trailing
      })
    ]
  });
  if (interactive) {
    return /* @__PURE__ */ jsx38("button", {
      type: "button",
      className: cx30(styles22.root, styles22.interactive, selected && styles22.selected, className),
      onClick,
      children: content
    });
  }
  return /* @__PURE__ */ jsx38("div", {
    className: cx30(styles22.root, selected && styles22.selected, disabled && styles22.disabled, className),
    "aria-disabled": disabled || undefined,
    children: content
  });
}
// src/components/patterns/page-title.tsx
import { css as css31, cx as cx31 } from "styled-system/css";
import { jsx as jsx39, jsxs as jsxs28 } from "react/jsx-runtime";
"use client";
var titleStyle = css31({
  textStyle: "pageTitle",
  color: "app.text"
});
var subtitleStyle = css31({
  textStyle: "description",
  color: "app.text.muted",
  mt: "2"
});
function PageTitle({ children, subtitle, className }) {
  return /* @__PURE__ */ jsxs28("div", {
    className,
    children: [
      /* @__PURE__ */ jsx39("h1", {
        className: cx31(titleStyle),
        children
      }),
      subtitle && /* @__PURE__ */ jsx39("p", {
        className: subtitleStyle,
        children: subtitle
      })
    ]
  });
}
// src/components/patterns/picker-field.tsx
import { ChevronDown } from "lucide-react";
import { css as css32, cx as cx32 } from "styled-system/css";
import { jsx as jsx40, jsxs as jsxs29 } from "react/jsx-runtime";
"use client";
var styles23 = {
  root: css32({
    position: "relative"
  }),
  trigger: css32({
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
  lead: css32({
    display: "flex",
    alignItems: "center",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  leading: css32({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "app.accent"
  }),
  copy: css32({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  titleRow: css32({
    display: "flex",
    alignItems: "center",
    gap: "2",
    minWidth: 0
  }),
  title: css32({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  description: css32({
    textStyle: "caption",
    color: "app.text.subtle",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  chevron: css32({
    color: "app.text.subtle",
    flexShrink: 0,
    transition: "transform 160ms ease"
  }),
  chevronOpen: css32({
    transform: "rotate(180deg)"
  }),
  panel: css32({
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
  panelLabel: css32({
    paddingX: "4",
    paddingY: "2.5",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  panelBody: css32({
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
  return /* @__PURE__ */ jsxs29("div", {
    className: cx32(styles23.root, className),
    style: minWidth ? { minWidth } : undefined,
    children: [
      /* @__PURE__ */ jsxs29("button", {
        type: "button",
        onClick: onToggle,
        disabled,
        className: styles23.trigger,
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxs29("div", {
            className: styles23.lead,
            children: [
              leading && /* @__PURE__ */ jsx40("div", {
                className: styles23.leading,
                children: leading
              }),
              /* @__PURE__ */ jsxs29("div", {
                className: styles23.copy,
                children: [
                  /* @__PURE__ */ jsxs29("div", {
                    className: styles23.titleRow,
                    children: [
                      /* @__PURE__ */ jsx40("div", {
                        className: styles23.title,
                        children: title
                      }),
                      badge
                    ]
                  }),
                  description && /* @__PURE__ */ jsx40("div", {
                    className: styles23.description,
                    children: description
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx40(ChevronDown, {
            size: 16,
            className: cx32(styles23.chevron, open && styles23.chevronOpen)
          })
        ]
      }),
      open && panel && /* @__PURE__ */ jsxs29("div", {
        className: styles23.panel,
        children: [
          panelLabel && /* @__PURE__ */ jsx40("div", {
            className: styles23.panelLabel,
            children: panelLabel
          }),
          /* @__PURE__ */ jsx40("div", {
            className: styles23.panelBody,
            children: panel
          })
        ]
      })
    ]
  });
}
// src/components/patterns/pricing-card.tsx
import { css as css33, cx as cx33 } from "styled-system/css";
import { jsx as jsx41, jsxs as jsxs30 } from "react/jsx-runtime";
"use client";
var styles24 = {
  root: css33({
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
  highlighted: css33({
    shadow: "md",
    borderColor: "colorPalette.7"
  }),
  badge: css33({
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
  name: css33({
    textAlign: "center",
    fontSize: "xl",
    fontWeight: "semibold",
    color: "colorPalette.11"
  }),
  description: css33({
    textAlign: "center",
    textStyle: "small",
    color: "fg.muted",
    mb: "4"
  }),
  priceArea: css33({
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    mb: "6"
  }),
  price: css33({
    fontSize: "4xl",
    fontWeight: "bold",
    color: "fg.default"
  }),
  interval: css33({
    color: "fg.muted"
  }),
  featureList: css33({
    listStyle: "none",
    p: "0",
    m: "0",
    display: "flex",
    flexDir: "column",
    gap: "2"
  }),
  featureItem: css33({
    display: "flex",
    flexDir: "row",
    alignItems: "center",
    gap: "2",
    textStyle: "small",
    color: "fg.default"
  }),
  checkmark: css33({
    color: "colorPalette.9",
    flexShrink: 0
  }),
  actionWrap: css33({
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
  return /* @__PURE__ */ jsxs30("div", {
    className: cx33(styles24.root, highlight && styles24.highlighted, className),
    children: [
      badge && /* @__PURE__ */ jsx41("span", {
        className: styles24.badge,
        style: {
          ...badgeBg ? { backgroundColor: badgeBg } : {},
          ...badgeColor ? { color: badgeColor } : {}
        },
        children: badge
      }),
      /* @__PURE__ */ jsx41("div", {
        className: styles24.name,
        style: accentColor ? { color: accentColor } : undefined,
        children: name
      }),
      description && /* @__PURE__ */ jsx41("div", {
        className: styles24.description,
        children: description
      }),
      /* @__PURE__ */ jsxs30("div", {
        className: styles24.priceArea,
        children: [
          /* @__PURE__ */ jsx41("span", {
            className: styles24.price,
            children: price
          }),
          interval && /* @__PURE__ */ jsxs30("span", {
            className: styles24.interval,
            children: [
              "/",
              interval
            ]
          })
        ]
      }),
      features && features.length > 0 && /* @__PURE__ */ jsx41("ul", {
        className: styles24.featureList,
        children: features.map((feature) => /* @__PURE__ */ jsxs30("li", {
          className: styles24.featureItem,
          children: [
            /* @__PURE__ */ jsx41("span", {
              className: styles24.checkmark,
              children: "✓"
            }),
            feature
          ]
        }, feature))
      }),
      action && /* @__PURE__ */ jsx41("div", {
        className: styles24.actionWrap,
        children: action
      })
    ]
  });
}
// src/components/patterns/resource-list.tsx
import { css as css34, cx as cx34 } from "styled-system/css";
import { jsx as jsx42, jsxs as jsxs31 } from "react/jsx-runtime";
"use client";
var styles25 = {
  root: css34({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  header: css34({
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
  titleBlock: css34({
    display: "flex",
    flexDirection: "column",
    gap: "1.5"
  }),
  title: css34({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css34({
    textStyle: "small",
    color: "app.text.muted"
  }),
  list: css34({
    listStyle: "none",
    padding: "0",
    margin: "0"
  }),
  item: css34({
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
  icon: css34({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "10",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css34({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1"
  }),
  itemTitle: css34({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  itemDescription: css34({
    textStyle: "small",
    color: "app.text.muted"
  }),
  meta: css34({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  itemLink: css34({
    color: "inherit",
    textDecoration: "none"
  }),
  action: css34({
    display: "inline-flex",
    alignItems: "center"
  })
};
function ResourceList({ title, description, actions, items, className }) {
  return /* @__PURE__ */ jsxs31("section", {
    className: cx34(styles25.root, className),
    children: [
      (title || description || actions) && /* @__PURE__ */ jsxs31("div", {
        className: styles25.header,
        children: [
          /* @__PURE__ */ jsxs31("div", {
            className: styles25.titleBlock,
            children: [
              title && /* @__PURE__ */ jsx42("div", {
                className: styles25.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx42("div", {
                className: styles25.description,
                children: description
              })
            ]
          }),
          actions
        ]
      }),
      /* @__PURE__ */ jsx42("ul", {
        className: styles25.list,
        children: items.map((item, index) => {
          const content = /* @__PURE__ */ jsxs31("div", {
            className: styles25.copy,
            children: [
              /* @__PURE__ */ jsx42("div", {
                className: styles25.itemTitle,
                children: item.title
              }),
              item.description && /* @__PURE__ */ jsx42("div", {
                className: styles25.itemDescription,
                children: item.description
              }),
              item.meta && /* @__PURE__ */ jsx42("div", {
                className: styles25.meta,
                children: item.meta
              })
            ]
          });
          return /* @__PURE__ */ jsx42("li", {
            children: /* @__PURE__ */ jsxs31("div", {
              className: styles25.item,
              children: [
                item.icon && /* @__PURE__ */ jsx42("div", {
                  className: styles25.icon,
                  children: item.icon
                }),
                item.href ? /* @__PURE__ */ jsx42("a", {
                  className: styles25.itemLink,
                  href: item.href,
                  children: content
                }) : content,
                item.action && /* @__PURE__ */ jsx42("div", {
                  className: styles25.action,
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
import { css as css35, cx as cx35 } from "styled-system/css";
import { jsx as jsx43, jsxs as jsxs32, Fragment as Fragment3 } from "react/jsx-runtime";
"use client";
var styles26 = {
  root: css35({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    width: "100%"
  }),
  list: css35({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "2",
    padding: "0",
    margin: "0",
    overflowX: "auto"
  }),
  item: css35({
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
  itemActive: css35({
    bg: "app.surface",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  label: css35({
    textStyle: "toolbarLabel"
  }),
  badge: css35({
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
  trailing: css35({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  toolbarList: css35({
    gap: "5"
  }),
  toolbarItem: css35({
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
  toolbarItemActive: css35({
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
  const content = /* @__PURE__ */ jsxs32(Fragment3, {
    children: [
      item.icon,
      /* @__PURE__ */ jsx43("span", {
        className: styles26.label,
        children: item.label
      }),
      item.badge && /* @__PURE__ */ jsx43("span", {
        className: styles26.badge,
        children: item.badge
      })
    ]
  });
  const className = cx35(styles26.item, variant === "toolbar" && styles26.toolbarItem, item.active && styles26.itemActive, item.active && variant === "toolbar" && styles26.toolbarItemActive);
  if (item.href) {
    return /* @__PURE__ */ jsx43("a", {
      className,
      href: item.href,
      "aria-current": item.active ? "page" : undefined,
      children: content
    });
  }
  return /* @__PURE__ */ jsx43("button", {
    type: "button",
    className,
    onClick: item.onClick,
    children: content
  });
}
function SecondaryNav({ items, trailing, variant = "pill", className }) {
  return /* @__PURE__ */ jsxs32("div", {
    className: cx35(styles26.root, className),
    children: [
      /* @__PURE__ */ jsx43("ul", {
        className: cx35(styles26.list, variant === "toolbar" && styles26.toolbarList),
        children: items.map((item) => /* @__PURE__ */ jsx43("li", {
          children: /* @__PURE__ */ jsx43(SecondaryNavEntry, {
            item,
            variant
          })
        }, item.id ?? item.href ?? item.label))
      }),
      trailing && /* @__PURE__ */ jsx43("div", {
        className: styles26.trailing,
        children: trailing
      })
    ]
  });
}
// src/components/patterns/secret-field.tsx
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { css as css36, cx as cx36 } from "styled-system/css";
import { jsx as jsx44, jsxs as jsxs33 } from "react/jsx-runtime";
"use client";
var styles27 = {
  root: css36({
    display: "flex",
    flexDirection: "column",
    gap: "2.5"
  }),
  labelRow: css36({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  label: css36({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css36({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css36({
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
  value: css36({
    flex: "1 1 auto",
    minWidth: 0,
    fontFamily: "mono",
    textStyle: "small",
    color: "app.text",
    wordBreak: "break-all"
  }),
  actionRow: css36({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1.5",
    flexShrink: 0
  }),
  iconButton: css36({
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
  return /* @__PURE__ */ jsxs33("div", {
    className: cx36(styles27.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx44("div", {
        className: styles27.labelRow,
        children: /* @__PURE__ */ jsxs33("div", {
          children: [
            label && /* @__PURE__ */ jsx44("div", {
              className: styles27.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx44("div", {
              className: styles27.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs33("div", {
        className: styles27.field,
        children: [
          /* @__PURE__ */ jsx44("div", {
            className: styles27.value,
            children: value
          }),
          /* @__PURE__ */ jsxs33("div", {
            className: styles27.actionRow,
            children: [
              actions,
              onToggleReveal && /* @__PURE__ */ jsx44(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onToggleReveal,
                title: revealed ? "Hide secret value" : "Show secret value",
                "aria-label": revealed ? "Hide secret value" : "Show secret value",
                className: styles27.iconButton,
                children: revealed ? /* @__PURE__ */ jsx44(EyeOff, {
                  size: 14
                }) : /* @__PURE__ */ jsx44(Eye, {
                  size: 14
                })
              }),
              onCopy && /* @__PURE__ */ jsx44(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onCopy,
                title: "Copy to clipboard",
                "aria-label": "Copy to clipboard",
                className: styles27.iconButton,
                children: copied ? /* @__PURE__ */ jsx44(Check, {
                  size: 14
                }) : /* @__PURE__ */ jsx44(Copy, {
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
import { css as css37, cx as cx37 } from "styled-system/css";
import { jsx as jsx45, jsxs as jsxs34 } from "react/jsx-runtime";
"use client";
var base3 = css37({
  px: "4",
  py: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: "1px"
});
var variants2 = {
  teal: css37({
    bg: "colorPalette.a2",
    borderColor: "colorPalette.4"
  }),
  wheat: css37({
    bg: "colorPalette.2",
    borderColor: "colorPalette.4"
  })
};
var badgeStyle = css37({
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
var titleStyle2 = css37({
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
  return /* @__PURE__ */ jsxs34("div", {
    className: cx37(base3, variants2[variant], className),
    children: [
      /* @__PURE__ */ jsxs34("div", {
        className: css37({ display: "flex", alignItems: "center", gap: "2" }),
        children: [
          icon && /* @__PURE__ */ jsx45("div", {
            className: badgeStyle,
            children: icon
          }),
          /* @__PURE__ */ jsx45("h3", {
            className: titleStyle2,
            children: title
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx45("div", {
        children: actions
      })
    ]
  });
}
// src/components/patterns/section-panel.tsx
import { css as css38, cx as cx38 } from "styled-system/css";
import { jsx as jsx46, jsxs as jsxs35 } from "react/jsx-runtime";
"use client";
var styles28 = {
  root: css38({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    overflow: "hidden"
  }),
  default: css38({
    bg: "app.surface"
  }),
  muted: css38({
    bg: "app.surface.muted"
  }),
  header: css38({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: { base: "4.5", md: "5" }
  }),
  headerBorder: css38({
    borderBottomWidth: "1px",
    borderColor: "app.border"
  }),
  copy: css38({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    minWidth: 0
  }),
  eyebrow: css38({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css38({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css38({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "3xl"
  }),
  meta: css38({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    color: "app.text.subtle",
    textStyle: "caption"
  }),
  actions: css38({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  body: css38({
    paddingX: { base: "4.5", md: "5.5" },
    paddingY: { base: "4.5", md: "5.5" }
  }),
  footer: css38({
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
  return /* @__PURE__ */ jsxs35("section", {
    className: cx38(styles28.root, styles28[variant], className),
    children: [
      hasHeader && /* @__PURE__ */ jsxs35("div", {
        className: cx38(styles28.header, (hasBody || hasFooter) && styles28.headerBorder),
        children: [
          /* @__PURE__ */ jsxs35("div", {
            className: styles28.copy,
            children: [
              eyebrow && /* @__PURE__ */ jsx46("div", {
                className: styles28.eyebrow,
                children: eyebrow
              }),
              title && /* @__PURE__ */ jsx46("div", {
                className: styles28.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx46("div", {
                className: styles28.description,
                children: description
              }),
              meta && /* @__PURE__ */ jsx46("div", {
                className: styles28.meta,
                children: meta
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx46("div", {
            className: styles28.actions,
            children: actions
          })
        ]
      }),
      hasBody && /* @__PURE__ */ jsx46("div", {
        className: styles28.body,
        children
      }),
      hasFooter && /* @__PURE__ */ jsx46("div", {
        className: styles28.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/selection-list.tsx
import { css as css39, cx as cx39 } from "styled-system/css";
import { jsx as jsx47, jsxs as jsxs36 } from "react/jsx-runtime";
"use client";
var styles29 = {
  root: css39({
    display: "grid",
    gap: "2"
  }),
  item: css39({
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
  itemSelected: css39({
    bg: "app.accent.soft",
    borderColor: "app.border.strong",
    boxShadow: "inset 3px 0 0 0 var(--colors-app-accent)"
  }),
  body: css39({
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  icon: css39({
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
  copy: css39({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  label: css39({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css39({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  endSlot: css39({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    color: "app.text.subtle",
    flexShrink: 0
  })
};
function SelectionList({ items, value, onValueChange, className }) {
  return /* @__PURE__ */ jsx47("div", {
    className: cx39(styles29.root, className),
    children: items.map((item) => {
      const selected = item.value === value;
      return /* @__PURE__ */ jsxs36("button", {
        type: "button",
        disabled: item.disabled,
        onClick: () => onValueChange(item.value),
        className: cx39(styles29.item, selected && styles29.itemSelected),
        children: [
          /* @__PURE__ */ jsxs36("div", {
            className: styles29.body,
            children: [
              item.icon && /* @__PURE__ */ jsx47("span", {
                className: styles29.icon,
                children: item.icon
              }),
              /* @__PURE__ */ jsxs36("div", {
                className: styles29.copy,
                children: [
                  /* @__PURE__ */ jsx47("div", {
                    className: styles29.label,
                    children: item.label
                  }),
                  item.description && /* @__PURE__ */ jsx47("div", {
                    className: styles29.description,
                    children: item.description
                  })
                ]
              })
            ]
          }),
          item.endSlot && /* @__PURE__ */ jsx47("div", {
            className: styles29.endSlot,
            children: item.endSlot
          })
        ]
      }, item.value);
    })
  });
}
// src/components/patterns/selection-toolbar.tsx
import { css as css40, cx as cx40 } from "styled-system/css";
import { jsx as jsx48, jsxs as jsxs37 } from "react/jsx-runtime";
"use client";
var styles30 = {
  root: css40({
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
  copy: css40({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  summary: css40({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css40({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  actions: css40({
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
  return /* @__PURE__ */ jsxs37("section", {
    className: cx40(styles30.root, className),
    children: [
      /* @__PURE__ */ jsxs37("div", {
        className: styles30.copy,
        children: [
          /* @__PURE__ */ jsx48("div", {
            className: styles30.summary,
            children: summary
          }),
          description && /* @__PURE__ */ jsx48("div", {
            className: styles30.description,
            children: description
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx48("div", {
        className: styles30.actions,
        children: actions
      })
    ]
  });
}
// src/components/patterns/settings-section-nav.tsx
import { css as css41, cx as cx41 } from "styled-system/css";
import { jsx as jsx49, jsxs as jsxs38 } from "react/jsx-runtime";
"use client";
var styles31 = {
  root: css41({
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
  title: css41({
    textStyle: "sectionTitle",
    color: "app.text",
    paddingX: "1"
  }),
  list: css41({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    padding: 0,
    margin: 0
  }),
  item: css41({
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
  itemActive: css41({
    bg: "app.nav.active",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  icon: css41({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css41({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css41({
    textStyle: "toolbarLabel",
    color: "currentColor"
  }),
  description: css41({
    textStyle: "small",
    color: "app.text.subtle"
  }),
  footer: css41({
    paddingTop: "3",
    borderTopWidth: "1px",
    borderColor: "app.border"
  }),
  rootTabs: css41({
    padding: "0",
    borderWidth: "0",
    bg: "transparent",
    boxShadow: "none",
    gap: "0"
  }),
  listTabs: css41({
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "2"
  }),
  itemTabs: css41({
    width: "auto",
    gridTemplateColumns: "minmax(0, 1fr)",
    gap: "0",
    paddingX: "3.5",
    paddingY: "2",
    rounded: "full",
    bg: "app.surface",
    borderColor: "app.border"
  }),
  itemActiveTabs: css41({
    bg: "app.accent.soft",
    borderColor: "app.border.strong",
    color: "app.text",
    boxShadow: "none"
  }),
  copyTabs: css41({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0"
  }),
  labelTabs: css41({
    textStyle: "small",
    fontWeight: "600"
  })
};
function SettingsSectionNav({
  title,
  items,
  footer,
  layout = "sidebar",
  showIcons = true,
  className
}) {
  const isTabs = layout === "tabs";
  return /* @__PURE__ */ jsxs38("nav", {
    className: cx41(styles31.root, isTabs && styles31.rootTabs, className),
    "aria-label": "Settings Sections",
    children: [
      title && /* @__PURE__ */ jsx49("div", {
        className: styles31.title,
        children: title
      }),
      /* @__PURE__ */ jsx49("ul", {
        className: cx41(styles31.list, isTabs && styles31.listTabs),
        children: items.map((item, index) => /* @__PURE__ */ jsx49("li", {
          children: /* @__PURE__ */ jsxs38("button", {
            type: "button",
            className: cx41(styles31.item, isTabs && styles31.itemTabs, item.active && styles31.itemActive, item.active && isTabs && styles31.itemActiveTabs),
            onClick: item.onClick,
            "aria-current": item.active ? "page" : undefined,
            children: [
              showIcons && !isTabs && item.icon && /* @__PURE__ */ jsx49("span", {
                className: styles31.icon,
                children: item.icon
              }),
              /* @__PURE__ */ jsxs38("span", {
                className: cx41(styles31.copy, isTabs && styles31.copyTabs),
                children: [
                  /* @__PURE__ */ jsx49("span", {
                    className: cx41(styles31.label, isTabs && styles31.labelTabs),
                    children: item.label
                  }),
                  !isTabs && item.description && /* @__PURE__ */ jsx49("span", {
                    className: styles31.description,
                    children: item.description
                  })
                ]
              })
            ]
          })
        }, item.id ?? `${item.label}-${index}`))
      }),
      footer && !isTabs && /* @__PURE__ */ jsx49("div", {
        className: styles31.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/sidebar-nav.tsx
import { css as css42, cx as cx42 } from "styled-system/css";
import { jsx as jsx50, jsxs as jsxs39, Fragment as Fragment4 } from "react/jsx-runtime";
"use client";
var styles32 = {
  root: css42({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "3.5"
  }),
  brand: css42({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  sections: css42({
    display: "flex",
    flexDirection: "column",
    gap: "4.5",
    flex: "1"
  }),
  section: css42({
    display: "flex",
    flexDirection: "column",
    gap: "1.5"
  }),
  sectionTitle: css42({
    textStyle: "eyebrow",
    color: "app.text.subtle",
    paddingX: "3"
  }),
  list: css42({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    padding: "0",
    margin: "0"
  }),
  item: css42({
    appearance: "none",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    alignItems: "center",
    gap: "2.25",
    paddingX: "3.75",
    paddingY: "2.75",
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
      color: "app.text",
      "& [data-sidebar-icon]": {
        transform: "translateX(4px)"
      }
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
  itemActive: css42({
    bg: "app.surface",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  itemIcon: css42({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "5",
    color: "app.text.subtle",
    transition: "transform 180ms ease, color 180ms ease"
  }),
  itemText: css42({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  itemLabel: css42({
    textStyle: "small",
    color: "currentColor",
    fontWeight: "600",
    letterSpacing: "-0.01em"
  }),
  itemDescription: css42({
    textStyle: "small",
    color: "app.text.subtle"
  }),
  itemEnd: css42({
    display: "inline-flex",
    alignItems: "center",
    gap: "2"
  }),
  badge: css42({
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
  footer: css42({
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
  const content = /* @__PURE__ */ jsxs39(Fragment4, {
    children: [
      item.icon && /* @__PURE__ */ jsx50("span", {
        className: styles32.itemIcon,
        "data-sidebar-icon": "",
        children: item.icon
      }),
      /* @__PURE__ */ jsxs39("span", {
        className: styles32.itemText,
        children: [
          /* @__PURE__ */ jsx50("span", {
            className: styles32.itemLabel,
            children: item.label
          }),
          showDescriptions && item.description && /* @__PURE__ */ jsx50("span", {
            className: styles32.itemDescription,
            children: item.description
          })
        ]
      }),
      /* @__PURE__ */ jsxs39("span", {
        className: styles32.itemEnd,
        children: [
          item.badge && /* @__PURE__ */ jsx50("span", {
            className: styles32.badge,
            children: item.badge
          }),
          item.endSlot
        ]
      })
    ]
  });
  const className = cx42(styles32.item, item.active && styles32.itemActive);
  const ariaCurrent = item.active ? "page" : undefined;
  if (renderItem) {
    return renderItem({ item, className, content, ariaCurrent });
  }
  if (item.href) {
    return /* @__PURE__ */ jsx50("a", {
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
  return /* @__PURE__ */ jsx50("button", {
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
  return /* @__PURE__ */ jsxs39("nav", {
    className: cx42(styles32.root, className),
    "aria-label": "Sidebar Navigation",
    children: [
      brand && /* @__PURE__ */ jsx50("div", {
        className: styles32.brand,
        children: brand
      }),
      /* @__PURE__ */ jsx50("div", {
        className: styles32.sections,
        children: sections.map((section, index) => /* @__PURE__ */ jsxs39("section", {
          className: styles32.section,
          children: [
            showSectionTitles && section.title && /* @__PURE__ */ jsx50("p", {
              className: styles32.sectionTitle,
              children: section.title
            }),
            /* @__PURE__ */ jsx50("ul", {
              className: styles32.list,
              children: section.items.map((item, itemIndex) => /* @__PURE__ */ jsx50("li", {
                children: /* @__PURE__ */ jsx50(SidebarNavEntry, {
                  item,
                  renderItem,
                  showDescriptions
                })
              }, item.id ?? item.href ?? `${item.label}-${itemIndex}`))
            })
          ]
        }, section.title ?? index))
      }),
      footer && /* @__PURE__ */ jsx50("div", {
        className: styles32.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/status-banner.tsx
import { css as css43, cx as cx43 } from "styled-system/css";
import { jsx as jsx51, jsxs as jsxs40 } from "react/jsx-runtime";
"use client";
var styles33 = {
  root: css43({
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    alignItems: "flex-start",
    gap: "3",
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px"
  }),
  iconWrap: css43({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "full",
    borderWidth: "1px",
    flexShrink: 0
  }),
  content: css43({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "3",
    minWidth: 0
  }),
  copy: css43({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  title: css43({
    textStyle: "small",
    fontWeight: "600"
  }),
  description: css43({
    textStyle: "small",
    opacity: 0.92
  }),
  actions: css43({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  info: css43({
    bg: "bg.info",
    borderColor: "border.info",
    color: "fg.info"
  }),
  success: css43({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  warning: css43({
    bg: "bg.warning",
    borderColor: "border.warning",
    color: "fg.warning"
  }),
  error: css43({
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
  return /* @__PURE__ */ jsxs40("section", {
    role: tone === "error" ? "alert" : "status",
    className: cx43(styles33.root, styles33[tone], className),
    children: [
      icon && /* @__PURE__ */ jsx51("div", {
        className: cx43(styles33.iconWrap, styles33[tone]),
        children: icon
      }),
      /* @__PURE__ */ jsxs40("div", {
        className: styles33.content,
        children: [
          /* @__PURE__ */ jsxs40("div", {
            className: styles33.copy,
            children: [
              /* @__PURE__ */ jsx51("div", {
                className: styles33.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx51("div", {
                className: styles33.description,
                children: description
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx51("div", {
            className: styles33.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
// src/components/patterns/step-card.tsx
import { css as css44, cx as cx44 } from "styled-system/css";
import { jsx as jsx52, jsxs as jsxs41 } from "react/jsx-runtime";
"use client";
var styles34 = {
  root: css44({
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
  number: css44({
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
  content: css44({
    flex: 1,
    minW: 0,
    paddingRight: "2"
  }),
  title: css44({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css44({
    textStyle: "small",
    color: "app.text.muted",
    mt: "1.5"
  }),
  endSlot: css44({
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
  return /* @__PURE__ */ jsxs41("div", {
    className: cx44(styles34.root, className),
    children: [
      /* @__PURE__ */ jsxs41("div", {
        className: css44({ display: "flex", alignItems: "center", gap: "4", minWidth: 0, flex: "1" }),
        children: [
          /* @__PURE__ */ jsx52("div", {
            className: styles34.number,
            children: step
          }),
          /* @__PURE__ */ jsxs41("div", {
            className: styles34.content,
            children: [
              /* @__PURE__ */ jsx52("div", {
                className: styles34.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx52("div", {
                className: styles34.description,
                children: description
              }),
              children
            ]
          })
        ]
      }),
      endSlot && /* @__PURE__ */ jsx52("div", {
        className: styles34.endSlot,
        children: endSlot
      })
    ]
  });
}
// src/components/patterns/streaming-status.tsx
import { css as css45, cx as cx45 } from "styled-system/css";
import { jsx as jsx53, jsxs as jsxs42 } from "react/jsx-runtime";
"use client";
var styles35 = {
  root: css45({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "4"
  }),
  compactRoot: css45({
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm"
  }),
  header: css45({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "3"
  }),
  headerLeft: css45({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  statusLabel: css45({
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.default"
  }),
  statusLabelError: css45({
    color: "fg.error"
  }),
  progressHint: css45({
    textStyle: "xs",
    color: "fg.muted"
  }),
  trackWrap: css45({
    mb: "3"
  }),
  track: css45({
    h: "2",
    bg: "border.muted",
    rounded: "full",
    overflow: "hidden"
  }),
  range: css45({
    h: "full",
    bg: "colorPalette.9",
    transition: "width 0.3s ease-out",
    rounded: "full"
  }),
  errorBox: css45({
    p: "3",
    bg: "bg.error",
    borderWidth: "1px",
    borderColor: "border.error",
    rounded: "l2",
    display: "flex",
    alignItems: "flex-start",
    gap: "2"
  }),
  errorText: css45({
    textStyle: "sm",
    color: "fg.error"
  }),
  successBox: css45({
    p: "3",
    bg: "bg.success",
    borderWidth: "1px",
    borderColor: "border.success",
    rounded: "l2",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }),
  successText: css45({
    textStyle: "sm",
    color: "fg.success"
  }),
  stepsGrid: css45({
    mt: "4",
    display: "grid",
    gap: "2"
  }),
  step: css45({
    textAlign: "center",
    p: "2",
    rounded: "l2",
    borderWidth: "1px",
    transition: "all 0.15s",
    textStyle: "xs"
  }),
  stepActive: css45({
    bg: "colorPalette.2",
    borderColor: "colorPalette.6",
    color: "colorPalette.11"
  }),
  stepDone: css45({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  stepPending: css45({
    bg: "gray.subtle.bg",
    borderColor: "border.muted",
    color: "fg.muted"
  }),
  abortButton: css45({
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
  iconWrap: css45({
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
    return /* @__PURE__ */ jsxs42("div", {
      className: cx45(styles35.compactRoot, className),
      children: [
        isActive && activeIcon && /* @__PURE__ */ jsx53("span", {
          className: styles35.iconWrap,
          children: activeIcon
        }),
        isComplete && completeIcon && /* @__PURE__ */ jsx53("span", {
          className: styles35.iconWrap,
          children: completeIcon
        }),
        error && errorIcon && /* @__PURE__ */ jsx53("span", {
          className: styles35.iconWrap,
          children: errorIcon
        }),
        /* @__PURE__ */ jsx53("span", {
          className: cx45(styles35.statusLabel, error ? styles35.statusLabelError : undefined),
          children: message || status
        }),
        isActive && hasProgress && /* @__PURE__ */ jsxs42("span", {
          className: styles35.progressHint,
          children: [
            "(",
            progress,
            "%)"
          ]
        }),
        onAbort && isActive && /* @__PURE__ */ jsx53("button", {
          type: "button",
          onClick: onAbort,
          className: styles35.abortButton,
          title: "Abort operation",
          children: "×"
        })
      ]
    });
  }
  const stepKeys = steps?.map((s) => s.key) ?? [];
  const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;
  return /* @__PURE__ */ jsxs42("div", {
    className: cx45(styles35.root, className),
    children: [
      /* @__PURE__ */ jsxs42("div", {
        className: styles35.header,
        children: [
          /* @__PURE__ */ jsxs42("div", {
            className: styles35.headerLeft,
            children: [
              isActive && activeIcon && /* @__PURE__ */ jsx53("span", {
                className: styles35.iconWrap,
                children: activeIcon
              }),
              isComplete && completeIcon && /* @__PURE__ */ jsx53("span", {
                className: styles35.iconWrap,
                children: completeIcon
              }),
              error && errorIcon && /* @__PURE__ */ jsx53("span", {
                className: styles35.iconWrap,
                children: errorIcon
              }),
              /* @__PURE__ */ jsxs42("div", {
                children: [
                  /* @__PURE__ */ jsx53("div", {
                    className: cx45(styles35.statusLabel, error ? styles35.statusLabelError : undefined),
                    children: message || status
                  }),
                  isActive && hasProgress && /* @__PURE__ */ jsxs42("div", {
                    className: styles35.progressHint,
                    children: [
                      progress,
                      "% complete"
                    ]
                  })
                ]
              })
            ]
          }),
          onAbort && isActive && /* @__PURE__ */ jsx53("button", {
            type: "button",
            onClick: onAbort,
            className: styles35.abortButton,
            title: "Abort operation",
            children: "×"
          })
        ]
      }),
      isActive && hasProgress && /* @__PURE__ */ jsx53("div", {
        className: styles35.trackWrap,
        children: /* @__PURE__ */ jsx53("div", {
          className: styles35.track,
          children: /* @__PURE__ */ jsx53("div", {
            className: styles35.range,
            style: { width: `${progress}%` }
          })
        })
      }),
      error && /* @__PURE__ */ jsxs42("div", {
        className: styles35.errorBox,
        children: [
          errorIcon && /* @__PURE__ */ jsx53("span", {
            className: styles35.iconWrap,
            children: errorIcon
          }),
          /* @__PURE__ */ jsx53("span", {
            className: styles35.errorText,
            children: error
          })
        ]
      }),
      isComplete && !error && /* @__PURE__ */ jsxs42("div", {
        className: styles35.successBox,
        children: [
          completeIcon && /* @__PURE__ */ jsx53("span", {
            className: styles35.iconWrap,
            children: completeIcon
          }),
          /* @__PURE__ */ jsx53("span", {
            className: styles35.successText,
            children: "Operation completed successfully"
          })
        ]
      }),
      steps && steps.length > 0 && isActive && /* @__PURE__ */ jsx53("div", {
        className: styles35.stepsGrid,
        style: { gridTemplateColumns: `repeat(${steps.length}, 1fr)` },
        children: steps.map((step, idx) => {
          const isCurrent = step.key === currentStep;
          const isDone = currentIdx >= 0 && idx < currentIdx;
          return /* @__PURE__ */ jsx53("div", {
            className: cx45(styles35.step, isCurrent ? styles35.stepActive : isDone ? styles35.stepDone : styles35.stepPending),
            children: step.label
          }, step.key);
        })
      })
    ]
  });
}
// src/components/patterns/support-panel.tsx
import { css as css46, cx as cx46 } from "styled-system/css";
import { jsx as jsx54, jsxs as jsxs43 } from "react/jsx-runtime";
"use client";
var styles36 = {
  root: css46({
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
  rootAccent: css46({
    bg: "app.accent",
    borderColor: "transparent",
    boxShadow: "none"
  }),
  copy: css46({
    display: "flex",
    flexDirection: "column",
    gap: "3"
  }),
  eyebrow: css46({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  eyebrowAccent: css46({
    color: "rgba(248, 249, 249, 0.72)"
  }),
  title: css46({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  titleAccent: css46({
    color: "app.text.inverse"
  }),
  description: css46({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "2xl"
  }),
  descriptionAccent: css46({
    color: "rgba(248, 249, 249, 0.76)"
  }),
  actions: css46({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  aside: css46({
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
  return /* @__PURE__ */ jsxs43("section", {
    className: cx46(styles36.root, tone === "accent" && styles36.rootAccent, className),
    children: [
      /* @__PURE__ */ jsxs43("div", {
        className: styles36.copy,
        children: [
          eyebrow && /* @__PURE__ */ jsx54("div", {
            className: cx46(styles36.eyebrow, tone === "accent" && styles36.eyebrowAccent),
            children: eyebrow
          }),
          /* @__PURE__ */ jsx54("div", {
            className: cx46(styles36.title, tone === "accent" && styles36.titleAccent),
            children: title
          }),
          description && /* @__PURE__ */ jsx54("div", {
            className: cx46(styles36.description, tone === "accent" && styles36.descriptionAccent),
            children: description
          }),
          actions && /* @__PURE__ */ jsx54("div", {
            className: styles36.actions,
            children: actions
          })
        ]
      }),
      aside && /* @__PURE__ */ jsx54("div", {
        className: styles36.aside,
        children: aside
      })
    ]
  });
}
// src/components/patterns/top-toolbar.tsx
import { css as css47, cx as cx47 } from "styled-system/css";
import { jsx as jsx55, jsxs as jsxs44 } from "react/jsx-runtime";
"use client";
var styles37 = {
  root: css47({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    paddingX: { base: "4", md: "4.5", xl: "5" },
    paddingY: "2.5"
  }),
  row: css47({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "2.5"
  }),
  left: css47({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    gap: "4",
    minWidth: 0,
    flex: "1"
  }),
  titleBlock: css47({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  title: css47({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  subtitle: css47({
    textStyle: "small",
    color: "app.text.muted"
  }),
  center: css47({
    width: "100%",
    maxWidth: { base: "full", md: "none" },
    flex: { md: "1" }
  }),
  trailing: css47({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: { base: "flex-start", md: "flex-end" },
    gap: "2.5"
  }),
  children: css47({
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
  return /* @__PURE__ */ jsxs44("div", {
    className: cx47(styles37.root, className),
    children: [
      /* @__PURE__ */ jsxs44("div", {
        className: styles37.row,
        children: [
          /* @__PURE__ */ jsxs44("div", {
            className: styles37.left,
            children: [
              leading,
              (title || subtitle) && /* @__PURE__ */ jsxs44("div", {
                className: styles37.titleBlock,
                children: [
                  title && /* @__PURE__ */ jsx55("div", {
                    className: styles37.title,
                    children: title
                  }),
                  subtitle && /* @__PURE__ */ jsx55("div", {
                    className: styles37.subtitle,
                    children: subtitle
                  })
                ]
              })
            ]
          }),
          center && /* @__PURE__ */ jsx55("div", {
            className: styles37.center,
            children: center
          }),
          trailing && /* @__PURE__ */ jsx55("div", {
            className: styles37.trailing,
            children: trailing
          })
        ]
      }),
      children && /* @__PURE__ */ jsx55("div", {
        className: styles37.children,
        children
      })
    ]
  });
}
// src/components/patterns/value-field.tsx
import { css as css48, cx as cx48 } from "styled-system/css";
import { jsx as jsx56, jsxs as jsxs45 } from "react/jsx-runtime";
"use client";
var styles38 = {
  root: css48({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  labelRow: css48({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  labelWrap: css48({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css48({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css48({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css48({
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
  default: css48({
    bg: "app.surface"
  }),
  muted: css48({
    bg: "app.surface.muted"
  }),
  valueWrap: css48({
    display: "flex",
    alignItems: "center",
    gap: "2",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  icon: css48({
    color: "app.accent",
    flexShrink: 0
  }),
  value: css48({
    textStyle: "small",
    color: "app.text",
    minWidth: 0,
    flex: "1 1 auto",
    wordBreak: "break-word"
  }),
  mono: css48({
    fontFamily: "mono"
  }),
  actions: css48({
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
  return /* @__PURE__ */ jsxs45("div", {
    className: cx48(styles38.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx56("div", {
        className: styles38.labelRow,
        children: /* @__PURE__ */ jsxs45("div", {
          className: styles38.labelWrap,
          children: [
            label && /* @__PURE__ */ jsx56("div", {
              className: styles38.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx56("div", {
              className: styles38.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs45("div", {
        className: cx48(styles38.field, styles38[tone]),
        children: [
          /* @__PURE__ */ jsxs45("div", {
            className: styles38.valueWrap,
            children: [
              icon && /* @__PURE__ */ jsx56("div", {
                className: styles38.icon,
                children: icon
              }),
              /* @__PURE__ */ jsx56("div", {
                className: cx48(styles38.value, mono && styles38.mono),
                children: value
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx56("div", {
            className: styles38.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
// src/components/ui/slider.tsx
import { ark as ark9 } from "@ark-ui/react/factory";
import { Slider, useSliderContext } from "@ark-ui/react/slider";
import { forwardRef as forwardRef7 } from "react";
import { createStyleContext as createStyleContext6 } from "styled-system/jsx";
import { slider } from "styled-system/recipes";
import { SliderContext } from "@ark-ui/react/slider";
import { jsx as jsx57, jsxs as jsxs46 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider3, withContext: withContext6 } = createStyleContext6(slider);
var Root6 = withProvider3(Slider.Root, "root");
var Control = withContext6(Slider.Control, "control");
var DraggingIndicator = withContext6(Slider.DraggingIndicator, "draggingIndicator");
var Label2 = withContext6(Slider.Label, "label");
var Marker = withContext6(Slider.Marker, "marker");
var MarkerIndicator = withContext6(ark9.div, "markerIndicator");
var MarkerGroup = withContext6(Slider.MarkerGroup, "markerGroup");
var Range = withContext6(Slider.Range, "range");
var Thumb = withContext6(Slider.Thumb, "thumb");
var Track = withContext6(Slider.Track, "track");
var ValueText = withContext6(Slider.ValueText, "valueText");
var HiddenInput = Slider.HiddenInput;
var Marks = forwardRef7(function Marks2(props, ref) {
  const { marks, ...rest } = props;
  if (!marks?.length)
    return null;
  return /* @__PURE__ */ jsx57(MarkerGroup, {
    ref,
    ...rest,
    children: marks.map((mark, index) => {
      const value = typeof mark === "number" ? mark : mark.value;
      const label = typeof mark === "number" ? undefined : mark.label;
      return /* @__PURE__ */ jsxs46(Marker, {
        value,
        children: [
          /* @__PURE__ */ jsx57(MarkerIndicator, {}),
          label != null && /* @__PURE__ */ jsx57("span", {
            children: label
          })
        ]
      }, index);
    })
  });
});

// src/components/patterns/value-slider.tsx
import { css as css49, cx as cx49 } from "styled-system/css";
import { jsx as jsx58, jsxs as jsxs47 } from "react/jsx-runtime";
"use client";
var toneStyles2 = {
  teal: {
    range: "teal.9",
    border: "teal.9"
  },
  wheat: {
    range: "wheat.9",
    border: "wheat.9"
  }
};
function ValueSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
  formatValue = (nextValue) => `${Math.round(nextValue * 10) / 10}`,
  tone = "teal",
  className
}) {
  const colors = toneStyles2[tone];
  return /* @__PURE__ */ jsxs47("div", {
    className: cx49(css49({ w: "full" }), className),
    children: [
      (label || showValue) && /* @__PURE__ */ jsxs47("div", {
        className: css49({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3",
          mb: "2.5"
        }),
        children: [
          label && /* @__PURE__ */ jsx58("span", {
            className: css49({ textStyle: "small", color: "app.text.muted" }),
            children: label
          }),
          showValue && /* @__PURE__ */ jsx58("span", {
            className: css49({ textStyle: "small", fontWeight: "600", color: "app.text" }),
            children: formatValue(value)
          })
        ]
      }),
      /* @__PURE__ */ jsx58(Root6, {
        value: [value],
        onValueChange: (details) => onChange(details.value[0]),
        min,
        max,
        step,
        children: /* @__PURE__ */ jsxs47(Control, {
          className: css49({ position: "relative", display: "flex", alignItems: "center", h: "5" }),
          children: [
            /* @__PURE__ */ jsx58(Track, {
              className: css49({
                w: "full",
                h: "1.5",
                bg: "app.surface.muted",
                rounded: "full",
                overflow: "hidden"
              }),
              children: /* @__PURE__ */ jsx58(Range, {
                className: css49({ h: "full", bg: colors.range })
              })
            }),
            /* @__PURE__ */ jsx58(Thumb, {
              index: 0,
              className: css49({
                w: "4",
                h: "4",
                rounded: "full",
                bg: "white",
                borderWidth: "2px",
                borderColor: colors.border,
                boxShadow: "0 8px 18px rgba(8, 18, 20, 0.12)",
                cursor: "grab",
                _focusVisible: {
                  outline: "2px solid",
                  outlineColor: "app.accent.soft",
                  outlineOffset: "2px"
                }
              })
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/workspace-page.tsx
import { css as css50, cx as cx50 } from "styled-system/css";
import { jsx as jsx59 } from "react/jsx-runtime";
"use client";
var styles39 = {
  base: css50({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    paddingBottom: "8"
  }),
  comfortable: css50({
    gap: "5"
  }),
  compact: css50({
    gap: "5"
  })
};
function WorkspacePage({
  children,
  density = "comfortable",
  className
}) {
  return /* @__PURE__ */ jsx59("div", {
    className: cx50(styles39.base, density === "compact" && styles39.compact, density === "comfortable" && styles39.comfortable, className),
    children
  });
}
export {
  buildGradientStyle,
  WorkspacePage,
  ValueSlider,
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
  FormDialog,
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

//# debugId=7CDCD7CE9E273F8264756E2164756E21
//# sourceMappingURL=index.js.map
