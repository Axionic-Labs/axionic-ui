var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

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
    p: "5.5",
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
    rounded: "xl",
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
    bg: "app.surface.muted"
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
    transition: "background-color 160ms ease",
    _hover: {
      bg: "app.canvas.subtle"
    },
    _last: {
      borderBottomWidth: "0"
    }
  }),
  rowInteractive: css3({
    cursor: "pointer"
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
// src/components/patterns/auth-shell.tsx
import { css as css5, cx as cx5 } from "styled-system/css";

// src/components/ui/card.tsx
import { ark } from "@ark-ui/react/factory";
import { createStyleContext } from "styled-system/jsx";
import { card } from "styled-system/recipes";
"use client";
var { withProvider, withContext } = createStyleContext(card);
var Root = withProvider(ark.div, "root");
var Header = withContext(ark.div, "header");
var Body = withContext(ark.div, "body");
var Footer = withContext(ark.h3, "footer");
var Title = withContext(ark.h3, "title");
var Description = withContext(ark.div, "description");

// src/components/patterns/auth-shell.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
"use client";
var styles4 = {
  root: css5({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(circle at top, color-mix(in srgb, token(colors.teal.4) 28%, transparent) 0%, transparent 40%), linear-gradient(180deg, #f8f9f9 0%, #f2f4f3 100%)",
    paddingX: { base: "4", md: "6" },
    paddingY: { base: "8", md: "12" }
  }),
  frame: css5({
    width: "full",
    maxWidth: "6xl",
    display: "grid",
    gridTemplateColumns: { base: "1fr", lg: "minmax(20rem, 0.98fr) minmax(24rem, 0.82fr)" },
    gap: { base: "6", lg: "10" },
    alignItems: "stretch"
  }),
  brandPanel: css5({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: { base: "6", md: "7", lg: "8" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    background: "linear-gradient(180deg, #f6f7f7 0%, #eef1f0 100%)",
    boxShadow: "{shadows.whisper}",
    minHeight: { base: "auto", lg: "40rem" }
  }),
  copy: css5({
    display: "flex",
    flexDirection: "column",
    gap: "5"
  }),
  eyebrow: css5({
    width: "fit-content"
  }),
  title: css5({
    textStyle: "h1",
    color: "app.text",
    maxWidth: "14ch"
  }),
  description: css5({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "34rem"
  }),
  featureList: css5({
    display: "grid",
    gap: "3",
    marginTop: "8"
  }),
  formWrap: css5({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }),
  formCard: css5({
    width: "full",
    maxWidth: "lg",
    boxShadow: "{shadows.whisper}",
    borderColor: "app.border",
    background: "app.surface"
  }),
  formHeader: css5({
    display: "flex",
    flexDirection: "column",
    gap: "3",
    paddingBottom: "1"
  }),
  formTitle: css5({
    textStyle: "h3",
    color: "app.text"
  }),
  formDescription: css5({
    textStyle: "body-sm",
    color: "app.text.muted"
  }),
  formBody: css5({
    display: "flex",
    flexDirection: "column",
    gap: "6"
  })
};
function AuthShell({
  eyebrow,
  brand,
  title,
  description,
  featureList,
  formTitle,
  formDescription,
  formBanner,
  children,
  className
}) {
  return /* @__PURE__ */ jsx5("div", {
    className: cx5(styles4.root, className),
    children: /* @__PURE__ */ jsxs4("div", {
      className: styles4.frame,
      children: [
        /* @__PURE__ */ jsxs4("section", {
          className: styles4.brandPanel,
          children: [
            /* @__PURE__ */ jsxs4("div", {
              className: styles4.copy,
              children: [
                eyebrow && /* @__PURE__ */ jsx5("div", {
                  className: styles4.eyebrow,
                  children: eyebrow
                }),
                brand,
                /* @__PURE__ */ jsx5("div", {
                  className: styles4.title,
                  children: title
                }),
                description && /* @__PURE__ */ jsx5("div", {
                  className: styles4.description,
                  children: description
                })
              ]
            }),
            featureList && /* @__PURE__ */ jsx5("div", {
              className: styles4.featureList,
              children: featureList
            })
          ]
        }),
        /* @__PURE__ */ jsx5("div", {
          className: styles4.formWrap,
          children: /* @__PURE__ */ jsxs4(Root, {
            className: styles4.formCard,
            children: [
              /* @__PURE__ */ jsxs4(Header, {
                className: styles4.formHeader,
                children: [
                  /* @__PURE__ */ jsx5(Title, {
                    className: styles4.formTitle,
                    children: formTitle
                  }),
                  formDescription ? /* @__PURE__ */ jsx5(Description, {
                    className: styles4.formDescription,
                    children: formDescription
                  }) : null
                ]
              }),
              /* @__PURE__ */ jsxs4(Body, {
                className: styles4.formBody,
                children: [
                  formBanner,
                  children
                ]
              })
            ]
          })
        })
      ]
    })
  });
}
// src/components/patterns/choice-segment.tsx
import { css as css6, cx as cx6 } from "styled-system/css";

// src/components/ui/segment-group.tsx
import { SegmentGroup } from "@ark-ui/react/segment-group";
import { useMemo } from "react";
import { createStyleContext as createStyleContext2 } from "styled-system/jsx";
import { segmentGroup } from "styled-system/recipes";
import { SegmentGroupContext } from "@ark-ui/react/segment-group";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider2, withContext: withContext2 } = createStyleContext2(segmentGroup);
var Root2 = withProvider2(SegmentGroup.Root, "root", {
  defaultProps: { orientation: "horizontal" },
  forwardProps: ["orientation"]
});
var RootProvider = withProvider2(SegmentGroup.RootProvider, "root");
var Indicator = withContext2(SegmentGroup.Indicator, "indicator");
var Item = withContext2(SegmentGroup.Item, "item");
var ItemControl = withContext2(SegmentGroup.ItemControl, "itemControl");
var ItemHiddenInput = SegmentGroup.ItemHiddenInput;
var ItemText = withContext2(SegmentGroup.ItemText, "itemText");
var Label = withContext2(SegmentGroup.Label, "label");

// src/components/patterns/choice-segment.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
"use client";
var styles5 = {
  root: css6({
    width: "100%"
  }),
  item: css6({
    minWidth: 0
  }),
  control: css6({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    width: "100%",
    paddingX: "3"
  }),
  label: css6({
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
  return /* @__PURE__ */ jsxs6(Root2, {
    value,
    onValueChange: (details) => {
      if (details.value) {
        onValueChange(details.value);
      }
    },
    size,
    fitted,
    className: cx6(styles5.root, className),
    children: [
      /* @__PURE__ */ jsx7(Indicator, {}),
      items.map((item) => /* @__PURE__ */ jsxs6(Item, {
        value: item.value,
        className: styles5.item,
        children: [
          /* @__PURE__ */ jsx7(ItemHiddenInput, {}),
          /* @__PURE__ */ jsxs6(ItemControl, {
            className: styles5.control,
            children: [
              item.icon,
              /* @__PURE__ */ jsx7(ItemText, {
                className: styles5.label,
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
import { css as css9, cx as cx9 } from "styled-system/css";

// src/components/patterns/list-toolbar.tsx
import { css as css7, cx as cx7 } from "styled-system/css";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
"use client";
var styles6 = {
  root: css7({
    display: "flex",
    alignItems: { base: "stretch", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", xl: "row" },
    gap: "3"
  }),
  panel: css7({
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface"
  }),
  inline: css7({
    padding: "0",
    borderRadius: "0",
    borderWidth: "0",
    bg: "transparent"
  }),
  leading: css7({
    display: "flex",
    alignItems: { base: "stretch", lg: "center" },
    flexDirection: { base: "column", lg: "row" },
    flexWrap: "wrap",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  filters: css7({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5",
    minWidth: 0
  }),
  meta: css7({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css7({
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
  return /* @__PURE__ */ jsxs7("div", {
    className: cx7(styles6.root, variant === "panel" ? styles6.panel : styles6.inline, className),
    children: [
      /* @__PURE__ */ jsxs7("div", {
        className: styles6.leading,
        children: [
          search,
          filters && /* @__PURE__ */ jsx8("div", {
            className: styles6.filters,
            children: filters
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
  });
}

// src/components/patterns/page-intro.tsx
import { css as css8, cx as cx8 } from "styled-system/css";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
"use client";
var styles7 = {
  root: css8({
    display: "flex",
    flexDirection: "column",
    gap: "3.5"
  }),
  row: css8({
    display: "flex",
    flexDirection: { base: "column", lg: "row" },
    alignItems: { base: "flex-start", lg: "flex-start" },
    justifyContent: "space-between",
    gap: "3.5"
  }),
  copy: css8({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    maxWidth: "3xl"
  }),
  eyebrow: css8({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css8({
    textStyle: "pageTitle",
    color: "app.text"
  }),
  description: css8({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "2xl"
  }),
  meta: css8({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5",
    color: "app.text.muted"
  }),
  actions: css8({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  children: css8({
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
  return /* @__PURE__ */ jsxs8("div", {
    className: cx8(styles7.root, className),
    children: [
      /* @__PURE__ */ jsxs8("div", {
        className: styles7.row,
        children: [
          /* @__PURE__ */ jsxs8("div", {
            className: styles7.copy,
            children: [
              eyebrow && /* @__PURE__ */ jsx9("div", {
                className: styles7.eyebrow,
                children: eyebrow
              }),
              /* @__PURE__ */ jsx9("div", {
                className: styles7.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx9("div", {
                className: styles7.description,
                children: description
              }),
              meta && /* @__PURE__ */ jsx9("div", {
                className: styles7.meta,
                children: meta
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx9("div", {
            className: styles7.actions,
            children: actions
          })
        ]
      }),
      children && /* @__PURE__ */ jsx9("div", {
        className: styles7.children,
        children
      })
    ]
  });
}

// src/components/patterns/collection-page-header.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
"use client";
var styles8 = {
  root: css9({
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
  return /* @__PURE__ */ jsx10("div", {
    className: cx9(styles8.root, className),
    children: /* @__PURE__ */ jsxs9(PageIntro, {
      ...pageIntroProps,
      children: [
        hasToolbar && /* @__PURE__ */ jsx10(ListToolbar, {
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
import { Portal } from "@ark-ui/react/portal";
import { css as css10, cx as cx10 } from "styled-system/css";

// src/components/ui/button.tsx
import { ark as ark5 } from "@ark-ui/react/factory";
import { createContext, mergeProps } from "@ark-ui/react/utils";
import { forwardRef as forwardRef2, useMemo as useMemo2 } from "react";
import { styled as styled5 } from "styled-system/jsx";
import { button } from "styled-system/recipes";

// src/components/ui/group.tsx
import { ark as ark2 } from "@ark-ui/react";
import { styled } from "styled-system/jsx";
import { group } from "styled-system/recipes";
var Group = styled(ark2.div, group);

// src/components/ui/loader.tsx
import { forwardRef } from "react";

// src/components/ui/absolute-center.tsx
import { ark as ark3 } from "@ark-ui/react/factory";
import { styled as styled2 } from "styled-system/jsx";
import { absoluteCenter } from "styled-system/recipes";
var AbsoluteCenter = styled2(ark3.div, absoluteCenter);

// src/components/ui/span.tsx
import { styled as styled3 } from "styled-system/jsx";
var Span = styled3("span");

// src/components/ui/spinner.tsx
import { ark as ark4 } from "@ark-ui/react/factory";
import { styled as styled4 } from "styled-system/jsx";
import { spinner } from "styled-system/recipes";
var Spinner = styled4(ark4.span, spinner);

// src/components/ui/loader.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
"use client";
var Loader = forwardRef(function Loader2(props, ref) {
  const {
    spinner: spinner2 = /* @__PURE__ */ jsx11(Spinner, {
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
    return /* @__PURE__ */ jsxs10(Span, {
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
    return /* @__PURE__ */ jsxs10(Span, {
      ref,
      display: "contents",
      ...rest,
      children: [
        /* @__PURE__ */ jsx11(AbsoluteCenter, {
          display: "inline-flex",
          children: spinner2
        }),
        /* @__PURE__ */ jsx11(Span, {
          visibility: "hidden",
          display: "contents",
          children
        })
      ]
    });
  }
  return /* @__PURE__ */ jsx11(Span, {
    ref,
    display: "contents",
    ...rest,
    children
  });
});

// src/components/ui/button.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
"use client";
var BaseButton = styled5(ark5.button, button);
var Button = forwardRef2(function Button2(props, ref) {
  const propsContext = useButtonPropsContext();
  const buttonProps = useMemo2(() => mergeProps(propsContext, props), [propsContext, props]);
  const { loading, loadingText, children, spinner: spinner2, spinnerPlacement, ...rest } = buttonProps;
  return /* @__PURE__ */ jsx12(BaseButton, {
    type: "button",
    ref,
    ...rest,
    "data-loading": loading ? "" : undefined,
    disabled: loading || rest.disabled,
    children: !props.asChild && loading ? /* @__PURE__ */ jsx12(Loader, {
      spinner: spinner2,
      text: loadingText,
      spinnerPlacement,
      children
    }) : children
  });
});
var ButtonGroup = forwardRef2(function ButtonGroup2(props, ref) {
  const [variantProps, otherProps] = useMemo2(() => button.splitVariantProps(props), [props]);
  return /* @__PURE__ */ jsx12(ButtonPropsProvider, {
    value: variantProps,
    children: /* @__PURE__ */ jsx12(Group, {
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
var exports_dialog = {};
__export(exports_dialog, {
  Trigger: () => Trigger,
  Title: () => Title2,
  RootProvider: () => RootProvider2,
  Root: () => Root3,
  Positioner: () => Positioner,
  Header: () => Header2,
  Footer: () => Footer2,
  Description: () => Description2,
  Context: () => DialogContext,
  Content: () => Content,
  CloseTrigger: () => CloseTrigger,
  Body: () => Body2,
  Backdrop: () => Backdrop,
  ActionTrigger: () => ActionTrigger
});
import { Dialog, useDialogContext } from "@ark-ui/react/dialog";
import { ark as ark6 } from "@ark-ui/react/factory";
import { forwardRef as forwardRef3 } from "react";
import { createStyleContext as createStyleContext3, styled as styled6 } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";
import { DialogContext } from "@ark-ui/react/dialog";
import { jsx as jsx13 } from "react/jsx-runtime";
"use client";
var { withRootProvider, withContext: withContext3 } = createStyleContext3(dialog);
var Root3 = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider2 = withRootProvider(Dialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Backdrop = withContext3(Dialog.Backdrop, "backdrop");
var CloseTrigger = withContext3(Dialog.CloseTrigger, "closeTrigger");
var Content = withContext3(Dialog.Content, "content");
var Description2 = withContext3(Dialog.Description, "description");
var Positioner = withContext3(Dialog.Positioner, "positioner");
var Title2 = withContext3(Dialog.Title, "title");
var Trigger = withContext3(Dialog.Trigger, "trigger");
var Body2 = withContext3(ark6.div, "body");
var Header2 = withContext3(ark6.div, "header");
var Footer2 = withContext3(ark6.div, "footer");
var StyledButton = styled6(ark6.button);
var ActionTrigger = forwardRef3(function ActionTrigger2(props, ref) {
  const dialog2 = useDialogContext();
  return /* @__PURE__ */ jsx13(StyledButton, {
    ...props,
    ref,
    onClick: () => dialog2.setOpen(false)
  });
});

// src/components/patterns/confirm-dialog.tsx
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
"use client";
var accentBar = css10({
  h: "3px",
  w: "full",
  roundedTop: "l3"
});
var tealGradient = css10({
  background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
});
var dangerGradient = css10({
  background: "linear-gradient(90deg, {colors.fg.error}, {colors.fg.warning})"
});
var bodyText = css10({
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
  return /* @__PURE__ */ jsx14(Root3, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: /* @__PURE__ */ jsxs11(Portal, {
      children: [
        /* @__PURE__ */ jsx14(Backdrop, {}),
        /* @__PURE__ */ jsx14(Positioner, {
          children: /* @__PURE__ */ jsxs11(Content, {
            className,
            children: [
              /* @__PURE__ */ jsx14("div", {
                className: cx10(accentBar, destructive ? dangerGradient : tealGradient)
              }),
              /* @__PURE__ */ jsx14(Header2, {
                children: /* @__PURE__ */ jsx14(Title2, {
                  children: title
                })
              }),
              /* @__PURE__ */ jsx14(Body2, {
                children: typeof children === "string" ? /* @__PURE__ */ jsx14("p", {
                  className: bodyText,
                  children
                }) : children
              }),
              /* @__PURE__ */ jsxs11(Footer2, {
                children: [
                  /* @__PURE__ */ jsx14(CloseTrigger, {
                    asChild: true,
                    children: /* @__PURE__ */ jsx14(Button, {
                      variant: "outline",
                      size: "sm",
                      children: cancelLabel
                    })
                  }),
                  /* @__PURE__ */ jsx14(Button, {
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
    })
  });
}
// src/components/patterns/credential-card.tsx
import { css as css11, cx as cx11 } from "styled-system/css";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
"use client";
var styles9 = {
  root: css11({
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
  header: css11({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4"
  }),
  headerCopy: css11({
    display: "flex",
    alignItems: "center",
    gap: "3.5",
    minWidth: 0
  }),
  iconWrap: css11({
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
  copy: css11({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  title: css11({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css11({
    textStyle: "small",
    color: "app.text.muted"
  }),
  status: css11({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    flexShrink: 0
  }),
  body: css11({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    color: "app.text.muted"
  }),
  footer: css11({
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
  return /* @__PURE__ */ jsxs12("section", {
    className: cx11(styles9.root, className),
    children: [
      /* @__PURE__ */ jsxs12("div", {
        className: styles9.header,
        children: [
          /* @__PURE__ */ jsxs12("div", {
            className: styles9.headerCopy,
            children: [
              icon && /* @__PURE__ */ jsx15("div", {
                className: styles9.iconWrap,
                children: icon
              }),
              /* @__PURE__ */ jsxs12("div", {
                className: styles9.copy,
                children: [
                  /* @__PURE__ */ jsx15("div", {
                    className: styles9.title,
                    children: title
                  }),
                  description && /* @__PURE__ */ jsx15("div", {
                    className: styles9.description,
                    children: description
                  })
                ]
              })
            ]
          }),
          status && /* @__PURE__ */ jsx15("div", {
            className: styles9.status,
            children: status
          })
        ]
      }),
      children && /* @__PURE__ */ jsx15("div", {
        className: styles9.body,
        children
      }),
      footer && /* @__PURE__ */ jsx15("div", {
        className: styles9.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/credit-pill.tsx
import { css as css12, cx as cx12 } from "styled-system/css";
import { jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
"use client";
var styles10 = {
  root: css12({
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
  icon: css12({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "7",
    borderRadius: "full",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  text: css12({
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  label: css12({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  }),
  valueRow: css12({
    display: "flex",
    alignItems: "baseline",
    gap: "2"
  }),
  value: css12({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  detail: css12({
    textStyle: "small",
    color: "app.text.muted"
  })
};
var toneStyles = {
  default: css12({}),
  accent: css12({
    bg: "app.accent.soft",
    borderColor: "app.border.strong"
  }),
  success: css12({
    bg: "bg.success",
    borderColor: "border.success"
  }),
  warning: css12({
    bg: "bg.warning",
    borderColor: "border.warning"
  }),
  starter: css12({
    bg: "app.surface",
    borderColor: "#c9d0d6",
    boxShadow: "0 0 0 1px rgba(201, 208, 214, 0.35)"
  }),
  pro: css12({
    bg: "app.surface",
    borderColor: "#c9a54c",
    boxShadow: "0 0 0 1px rgba(201, 165, 76, 0.38)"
  })
};
var inlineText = css12({
  display: "inline-flex",
  alignItems: "center",
  gap: "1.5"
});
var inlineLabel = css12({
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
  return /* @__PURE__ */ jsxs13("div", {
    className: cx12(styles10.root, toneStyles[tone], className),
    children: [
      icon && /* @__PURE__ */ jsx16("span", {
        className: styles10.icon,
        children: icon
      }),
      layout === "stacked" ? /* @__PURE__ */ jsxs13("span", {
        className: styles10.text,
        children: [
          /* @__PURE__ */ jsx16("span", {
            className: styles10.label,
            children: label
          }),
          /* @__PURE__ */ jsxs13("span", {
            className: styles10.valueRow,
            children: [
              /* @__PURE__ */ jsx16("span", {
                className: styles10.value,
                children: value
              }),
              detail && /* @__PURE__ */ jsx16("span", {
                className: styles10.detail,
                children: detail
              })
            ]
          })
        ]
      }) : /* @__PURE__ */ jsxs13("span", {
        className: inlineText,
        children: [
          /* @__PURE__ */ jsx16("span", {
            className: styles10.value,
            children: value
          }),
          label && /* @__PURE__ */ jsx16("span", {
            className: inlineLabel,
            children: label
          }),
          detail && /* @__PURE__ */ jsx16("span", {
            className: styles10.detail,
            children: detail
          })
        ]
      })
    ]
  });
}
// src/components/patterns/detail-dialog.tsx
import { Portal as Portal2 } from "@ark-ui/react/portal";
import { css as css13, cx as cx13 } from "styled-system/css";

// src/components/ui/close-button.tsx
import { XIcon } from "lucide-react";
import { forwardRef as forwardRef5 } from "react";

// src/components/ui/icon-button.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var IconButton = forwardRef4(function IconButton2(props, ref) {
  return /* @__PURE__ */ jsx17(Button, {
    px: "0",
    py: "0",
    ref,
    ...props
  });
});

// src/components/ui/close-button.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var CloseButton = forwardRef5(function CloseButton2(props, ref) {
  return /* @__PURE__ */ jsx18(IconButton, {
    variant: "plain",
    colorPalette: "gray",
    "aria-label": "Close",
    ref,
    ...props,
    children: props.children ?? /* @__PURE__ */ jsx18(XIcon, {})
  });
});

// src/components/patterns/detail-dialog.tsx
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
"use client";
var styles11 = {
  accentBar: css13({
    h: "2px",
    w: "full",
    roundedTop: "l3",
    background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
  }),
  header: css13({
    display: "flex",
    flexDirection: "column",
    gap: "3.5"
  }),
  eyebrow: css13({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  headerRow: css13({
    display: "grid",
    gridTemplateColumns: { base: "1fr", md: "minmax(0, 1fr) auto" },
    alignItems: "start",
    gap: "4",
    minWidth: 0
  }),
  headerCopy: css13({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  description: css13({
    color: "app.text.muted",
    textStyle: "small",
    maxWidth: "34rem"
  }),
  actions: css13({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5",
    justifySelf: { base: "start", md: "end" }
  }),
  body: css13({
    display: "flex",
    flexDirection: "column",
    gap: "4.5",
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
  size = "xl",
  className
}) {
  return /* @__PURE__ */ jsx19(Root3, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: /* @__PURE__ */ jsxs14(Portal2, {
      children: [
        /* @__PURE__ */ jsx19(Backdrop, {}),
        /* @__PURE__ */ jsx19(Positioner, {
          children: /* @__PURE__ */ jsxs14(Content, {
            className,
            children: [
              /* @__PURE__ */ jsx19("div", {
                className: styles11.accentBar
              }),
              /* @__PURE__ */ jsx19(CloseTrigger, {
                asChild: true,
                children: /* @__PURE__ */ jsx19(CloseButton, {
                  size: "sm",
                  "aria-label": "Close dialog"
                })
              }),
              /* @__PURE__ */ jsxs14(Header2, {
                className: styles11.header,
                children: [
                  eyebrow && /* @__PURE__ */ jsx19("div", {
                    className: styles11.eyebrow,
                    children: eyebrow
                  }),
                  /* @__PURE__ */ jsxs14("div", {
                    className: styles11.headerRow,
                    children: [
                      /* @__PURE__ */ jsxs14("div", {
                        className: styles11.headerCopy,
                        children: [
                          /* @__PURE__ */ jsx19(Title2, {
                            children: title
                          }),
                          description && /* @__PURE__ */ jsx19(Description2, {
                            className: styles11.description,
                            children: description
                          })
                        ]
                      }),
                      actions && /* @__PURE__ */ jsx19("div", {
                        className: styles11.actions,
                        children: actions
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx19(Body2, {
                className: cx13(styles11.body),
                children
              }),
              footer && /* @__PURE__ */ jsx19(Footer2, {
                children: footer
              })
            ]
          })
        })
      ]
    })
  });
}
// src/components/patterns/detail-panel.tsx
import { css as css14, cx as cx14 } from "styled-system/css";
import { jsx as jsx20, jsxs as jsxs15 } from "react/jsx-runtime";
"use client";
var styles12 = {
  root: css14({
    display: "flex",
    flexDirection: "column",
    gap: "4.5",
    padding: { base: "5.5", md: "6.5" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.float}"
  }),
  rootSoft: css14({
    borderWidth: "0",
    boxShadow: "none",
    bg: "app.surface.muted"
  }),
  header: css14({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4"
  }),
  headerCopy: css14({
    display: "flex",
    alignItems: "flex-start",
    gap: "4",
    minWidth: 0
  }),
  iconWrap: css14({
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
  iconWrapSoft: css14({
    borderWidth: "0",
    bg: "app.surface"
  }),
  copy: css14({
    display: "flex",
    flexDirection: "column",
    gap: "1.75",
    minWidth: 0
  }),
  eyebrow: css14({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css14({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css14({
    textStyle: "small",
    color: "app.text.muted",
    lineHeight: "1.65"
  }),
  meta: css14({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    color: "app.text.subtle",
    textStyle: "caption"
  }),
  actions: css14({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  body: css14({
    display: "flex",
    flexDirection: "column",
    gap: "4.5",
    minWidth: 0,
    color: "app.text.muted"
  }),
  footer: css14({
    paddingTop: "4.5",
    borderTopWidth: "1px",
    borderColor: "app.border",
    color: "app.text.muted"
  }),
  footerSoft: css14({
    paddingTop: "0",
    borderTopWidth: "0"
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
  chrome = "default",
  className
}) {
  return /* @__PURE__ */ jsxs15("section", {
    className: cx14(styles12.root, chrome === "soft" && styles12.rootSoft, className),
    children: [
      (eyebrow || title || description || icon || meta || actions) && /* @__PURE__ */ jsxs15("div", {
        className: styles12.header,
        children: [
          /* @__PURE__ */ jsxs15("div", {
            className: styles12.headerCopy,
            children: [
              icon && /* @__PURE__ */ jsx20("div", {
                className: cx14(styles12.iconWrap, chrome === "soft" && styles12.iconWrapSoft),
                children: icon
              }),
              /* @__PURE__ */ jsxs15("div", {
                className: styles12.copy,
                children: [
                  eyebrow && /* @__PURE__ */ jsx20("div", {
                    className: styles12.eyebrow,
                    children: eyebrow
                  }),
                  title && /* @__PURE__ */ jsx20("div", {
                    className: styles12.title,
                    children: title
                  }),
                  description && /* @__PURE__ */ jsx20("div", {
                    className: styles12.description,
                    children: description
                  }),
                  meta && /* @__PURE__ */ jsx20("div", {
                    className: styles12.meta,
                    children: meta
                  })
                ]
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx20("div", {
            className: styles12.actions,
            children: actions
          })
        ]
      }),
      children && /* @__PURE__ */ jsx20("div", {
        className: styles12.body,
        children
      }),
      footer && /* @__PURE__ */ jsx20("div", {
        className: cx14(styles12.footer, chrome === "soft" && styles12.footerSoft),
        children: footer
      })
    ]
  });
}
// src/components/patterns/docs-hint.tsx
import { ArrowUpRight, BookOpen } from "lucide-react";
import { css as css15, cx as cx15 } from "styled-system/css";
import { jsx as jsx21, jsxs as jsxs16 } from "react/jsx-runtime";
"use client";
var styles13 = {
  root: css15({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap",
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  link: css15({
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    color: "app.accent",
    textDecoration: "none",
    transition: "opacity 160ms ease",
    _hover: {
      opacity: 0.85
    }
  }),
  icon: css15({
    color: "app.text.subtle"
  })
};
function DocsHint({
  label = "Formatting reference",
  href,
  linkLabel,
  className
}) {
  return /* @__PURE__ */ jsxs16("div", {
    className: cx15(styles13.root, className),
    children: [
      /* @__PURE__ */ jsx21(BookOpen, {
        size: 14,
        className: styles13.icon
      }),
      /* @__PURE__ */ jsx21("span", {
        children: label
      }),
      /* @__PURE__ */ jsxs16("a", {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: styles13.link,
        children: [
          linkLabel,
          /* @__PURE__ */ jsx21(ArrowUpRight, {
            size: 13
          })
        ]
      })
    ]
  });
}
// src/components/patterns/empty-state.tsx
import { css as css16, cx as cx16 } from "styled-system/css";
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
"use client";
var styles14 = {
  root: css16({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    py: "16",
    px: "6"
  }),
  iconWrap: css16({
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
  title: css16({
    textStyle: "h3",
    color: "fg.default"
  }),
  description: css16({
    textStyle: "body",
    color: "fg.muted",
    mt: "2",
    maxW: "md"
  }),
  action: css16({
    mt: "6"
  })
};
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs17("div", {
    className: cx16(styles14.root, className),
    children: [
      icon && /* @__PURE__ */ jsx22("div", {
        className: styles14.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx22("h3", {
        className: styles14.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx22("p", {
        className: styles14.description,
        children: description
      }),
      action && /* @__PURE__ */ jsx22("div", {
        className: styles14.action,
        children: action
      })
    ]
  });
}
// src/components/patterns/entity-card.tsx
import { css as css17, cx as cx17 } from "styled-system/css";
import { jsx as jsx23, jsxs as jsxs18 } from "react/jsx-runtime";
"use client";
var styles15 = {
  root: css17({
    overflow: "hidden",
    borderColor: "app.border",
    bg: "app.surface",
    transition: "all 160ms ease"
  }),
  rootFlat: css17({
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  selected: css17({
    borderColor: "app.accent",
    boxShadow: "0 0 0 1px var(--colors-app-accent)"
  }),
  rootHover: css17({
    _hover: {
      bg: "app.surface.muted",
      borderColor: "app.border.strong"
    }
  }),
  accentBar: css17({
    h: "1",
    bg: "app.accent.soft",
    roundedTop: "l3"
  }),
  accentBarWheat: css17({
    bg: "wheat.2"
  }),
  accentBarHidden: css17({
    display: "none"
  }),
  body: css17({
    padding: "5",
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minWidth: 0
  }),
  bodyFlat: css17({
    padding: "6",
    gap: "3.5"
  }),
  bodyCompact: css17({
    padding: "4",
    gap: "2.5"
  }),
  interactive: css17({
    cursor: "pointer",
    userSelect: "none",
    outline: "none"
  }),
  header: css17({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4"
  }),
  headerCompact: css17({
    gap: "3"
  }),
  lead: css17({
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    flex: "1",
    minWidth: 0
  }),
  iconWrap: css17({
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
  iconWrapCompact: css17({
    boxSize: "9",
    rounded: "lg"
  }),
  iconWrapFlat: css17({
    borderWidth: "0",
    bg: "app.canvas.subtle"
  }),
  copy: css17({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0,
    flex: "1"
  }),
  title: css17({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  titleCompact: css17({
    textStyle: "small",
    fontWeight: "700"
  }),
  description: css17({
    textStyle: "small",
    color: "app.text.muted",
    lineHeight: "1.45"
  }),
  descriptionCompact: css17({
    textStyle: "caption",
    lineHeight: "1.45"
  }),
  meta: css17({
    display: "flex",
    alignItems: "center",
    gap: "3",
    flexWrap: "wrap",
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css17({
    display: "flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap",
    flexShrink: 0,
    marginLeft: "2"
  }),
  content: css17({
    display: "flex",
    flexDirection: "column",
    gap: "3",
    minWidth: 0
  }),
  contentCompact: css17({
    gap: "2"
  }),
  footer: css17({
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
  density = "default",
  variant = "default",
  onClick,
  className
}) {
  const interactive = Boolean(onClick);
  const compact = density === "compact";
  const flat = variant === "flat";
  return /* @__PURE__ */ jsxs18(Root, {
    gradient: !flat,
    accent,
    hover: interactive,
    className: cx17(styles15.root, flat && styles15.rootFlat, interactive && styles15.rootHover, selected && styles15.selected, className),
    children: [
      /* @__PURE__ */ jsx23("div", {
        className: cx17(styles15.accentBar, accent === "wheat" && styles15.accentBarWheat, flat && styles15.accentBarHidden)
      }),
      /* @__PURE__ */ jsxs18(Body, {
        className: cx17(styles15.body, flat && styles15.bodyFlat, compact && styles15.bodyCompact, interactive && styles15.interactive),
        onClick,
        onKeyDown: (event) => handleKeyDown(event, onClick),
        role: interactive ? "button" : undefined,
        tabIndex: interactive ? 0 : undefined,
        children: [
          /* @__PURE__ */ jsxs18("div", {
            className: cx17(styles15.header, compact && styles15.headerCompact),
            children: [
              /* @__PURE__ */ jsxs18("div", {
                className: styles15.lead,
                children: [
                  icon && /* @__PURE__ */ jsx23("div", {
                    className: cx17(styles15.iconWrap, flat && styles15.iconWrapFlat, compact && styles15.iconWrapCompact),
                    children: icon
                  }),
                  /* @__PURE__ */ jsxs18("div", {
                    className: styles15.copy,
                    children: [
                      /* @__PURE__ */ jsx23("div", {
                        className: cx17(styles15.title, compact && styles15.titleCompact),
                        children: title
                      }),
                      description && /* @__PURE__ */ jsx23("div", {
                        className: cx17(styles15.description, compact && styles15.descriptionCompact),
                        children: description
                      }),
                      meta && /* @__PURE__ */ jsx23("div", {
                        className: styles15.meta,
                        children: meta
                      })
                    ]
                  })
                ]
              }),
              actions && /* @__PURE__ */ jsx23("div", {
                className: styles15.actions,
                children: actions
              })
            ]
          }),
          children && /* @__PURE__ */ jsx23("div", {
            className: cx17(styles15.content, compact && styles15.contentCompact),
            children
          }),
          footer && /* @__PURE__ */ jsx23("div", {
            className: styles15.footer,
            children: footer
          })
        ]
      })
    ]
  });
}
// src/components/patterns/feature-card.tsx
import { css as css18, cx as cx18 } from "styled-system/css";
import { jsx as jsx24, jsxs as jsxs19 } from "react/jsx-runtime";
"use client";
var styles16 = {
  root: css18({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    transition: "border-color 0.2s ease",
    _hover: { borderColor: "colorPalette.7" }
  }),
  iconWrap: css18({
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
  title: css18({
    textStyle: "label",
    color: "fg.default",
    mb: "2"
  }),
  description: css18({
    textStyle: "small",
    color: "fg.muted"
  })
};
function FeatureCard({ title, description, icon, className }) {
  return /* @__PURE__ */ jsxs19("div", {
    className: cx18(styles16.root, className),
    children: [
      icon && /* @__PURE__ */ jsx24("div", {
        className: styles16.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx24("div", {
        className: styles16.title,
        children: title
      }),
      /* @__PURE__ */ jsx24("div", {
        className: styles16.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/file-tree.tsx
import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { useCallback, useState as useState2 } from "react";
import { css as css19, cx as cx19 } from "styled-system/css";
import { jsx as jsx25, jsxs as jsxs20 } from "react/jsx-runtime";
"use client";
var styles17 = {
  root: css19({
    overflow: "auto"
  }),
  node: css19({
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
  nodeSelected: css19({
    bg: "colorPalette.2",
    color: "colorPalette.11",
    _hover: {
      bg: "colorPalette.3"
    }
  }),
  chevron: css19({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted"
  }),
  chevronPlaceholder: css19({
    flexShrink: 0,
    w: "3.5"
  }),
  folderIcon: css19({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "colorPalette.9"
  }),
  fileIcon: css19({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "fg.muted"
  }),
  label: css19({
    truncate: true
  }),
  children: css19({})
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
  return /* @__PURE__ */ jsxs20("div", {
    children: [
      /* @__PURE__ */ jsxs20("div", {
        className: cx19(styles17.node, isSelected && styles17.nodeSelected),
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
          isFolder ? /* @__PURE__ */ jsx25(ChevronRight, {
            className: styles17.chevron,
            "aria-hidden": "true",
            style: {
              transform: isExpanded ? "rotate(90deg)" : undefined,
              transition: "transform 0.15s"
            }
          }) : /* @__PURE__ */ jsx25("span", {
            className: styles17.chevronPlaceholder
          }),
          node.icon ? /* @__PURE__ */ jsx25("span", {
            className: isFolder ? styles17.folderIcon : styles17.fileIcon,
            children: node.icon
          }) : isFolder ? isExpanded ? /* @__PURE__ */ jsx25(FolderOpen, {
            className: styles17.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx25(Folder, {
            className: styles17.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx25(File, {
            className: styles17.fileIcon,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ jsx25("span", {
            className: styles17.label,
            children: node.name
          })
        ]
      }),
      isFolder && isExpanded && node.children && /* @__PURE__ */ jsx25("div", {
        className: styles17.children,
        role: "group",
        children: node.children.map((child) => /* @__PURE__ */ jsx25(TreeNode, {
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
  return /* @__PURE__ */ jsx25("div", {
    className: cx19(styles17.root, className),
    role: "tree",
    children: nodes.map((node) => /* @__PURE__ */ jsx25(TreeNode, {
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
import { Portal as Portal3 } from "@ark-ui/react/portal";
import { css as css20, cx as cx20 } from "styled-system/css";
import { jsx as jsx26, jsxs as jsxs21, Fragment } from "react/jsx-runtime";
"use client";
var styles18 = {
  header: css20({
    display: "flex",
    flexDirection: "column",
    gap: "3.5"
  }),
  headerRow: css20({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4.5"
  }),
  headerCopy: css20({
    display: "flex",
    alignItems: "flex-start",
    gap: "4",
    minWidth: 0
  }),
  icon: css20({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "11",
    rounded: "2xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    color: "app.accent",
    flexShrink: 0
  }),
  copy: css20({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  eyebrow: css20({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  description: css20({
    textStyle: "small",
    color: "app.text.muted",
    maxWidth: "42rem",
    lineHeight: "1.65"
  }),
  body: css20({
    display: "flex",
    flexDirection: "column",
    gap: "5",
    maxHeight: "min(72vh, 48rem)",
    overflowY: "auto",
    paddingRight: "1"
  }),
  splitShell: css20({
    display: "grid",
    gridTemplateColumns: { base: "1fr", lg: "22rem minmax(0, 1fr)" },
    minHeight: { lg: "40rem" }
  }),
  splitAside: css20({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "4.5",
    padding: { base: "5.5", md: "6.5" },
    background: "app.surface.muted",
    borderBottomWidth: { base: "1px", lg: "0" },
    borderRightWidth: { base: "0", lg: "1px" },
    borderColor: "app.border"
  }),
  splitMain: css20({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0
  }),
  footer: css20({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4",
    flexWrap: "wrap"
  }),
  footerHint: css20({
    textStyle: "caption",
    color: "app.text.subtle",
    maxWidth: "26rem"
  }),
  closeButton: css20({
    position: "absolute",
    top: "4",
    right: "4",
    zIndex: 2
  }),
  actions: css20({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "2",
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
  aside,
  asideFooter,
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
  const renderedFooter = footer ? /* @__PURE__ */ jsx26(Footer2, {
    children: footer
  }) : /* @__PURE__ */ jsxs21(Footer2, {
    className: styles18.footer,
    children: [
      footerHint ? /* @__PURE__ */ jsx26("div", {
        className: styles18.footerHint,
        children: footerHint
      }) : /* @__PURE__ */ jsx26("div", {}),
      /* @__PURE__ */ jsxs21("div", {
        className: styles18.actions,
        children: [
          /* @__PURE__ */ jsx26(Button, {
            variant: "outline",
            size: "sm",
            onClick: () => {
              onCancel?.();
              onOpenChange(false);
            },
            children: cancelLabel
          }),
          /* @__PURE__ */ jsx26(Button, {
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
  });
  const renderedHeader = /* @__PURE__ */ jsx26(Header2, {
    className: styles18.header,
    children: /* @__PURE__ */ jsx26("div", {
      className: styles18.headerRow,
      children: /* @__PURE__ */ jsxs21("div", {
        className: styles18.headerCopy,
        children: [
          icon && /* @__PURE__ */ jsx26("div", {
            className: styles18.icon,
            children: icon
          }),
          /* @__PURE__ */ jsxs21("div", {
            className: styles18.copy,
            children: [
              eyebrow && /* @__PURE__ */ jsx26("div", {
                className: styles18.eyebrow,
                children: eyebrow
              }),
              /* @__PURE__ */ jsx26(Title2, {
                children: title
              }),
              description && /* @__PURE__ */ jsx26(Description2, {
                className: styles18.description,
                children: description
              })
            ]
          })
        ]
      })
    })
  });
  return /* @__PURE__ */ jsx26(Root3, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: /* @__PURE__ */ jsxs21(Portal3, {
      children: [
        /* @__PURE__ */ jsx26(Backdrop, {}),
        /* @__PURE__ */ jsx26(Positioner, {
          children: /* @__PURE__ */ jsx26(Content, {
            className,
            children: aside ? /* @__PURE__ */ jsxs21("div", {
              className: styles18.splitShell,
              children: [
                /* @__PURE__ */ jsxs21("div", {
                  className: styles18.splitAside,
                  children: [
                    /* @__PURE__ */ jsx26("div", {
                      children: aside
                    }),
                    asideFooter
                  ]
                }),
                /* @__PURE__ */ jsxs21("div", {
                  className: styles18.splitMain,
                  children: [
                    /* @__PURE__ */ jsx26(CloseTrigger, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx26(CloseButton, {
                        className: styles18.closeButton,
                        size: "sm",
                        "aria-label": "Close dialog"
                      })
                    }),
                    renderedHeader,
                    /* @__PURE__ */ jsx26(Body2, {
                      className: cx20(styles18.body, bodyClassName),
                      children
                    }),
                    !hideFooter && renderedFooter
                  ]
                })
              ]
            }) : /* @__PURE__ */ jsxs21(Fragment, {
              children: [
                /* @__PURE__ */ jsx26(CloseTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx26(CloseButton, {
                    className: styles18.closeButton,
                    size: "sm",
                    "aria-label": "Close dialog"
                  })
                }),
                renderedHeader,
                /* @__PURE__ */ jsx26(Body2, {
                  className: cx20(styles18.body, bodyClassName),
                  children
                }),
                !hideFooter && renderedFooter
              ]
            })
          })
        })
      ]
    })
  });
}
// src/components/patterns/form-section.tsx
import { css as css21, cx as cx21 } from "styled-system/css";
import { jsx as jsx27, jsxs as jsxs22 } from "react/jsx-runtime";
"use client";
var styles19 = {
  root: css21({
    display: "flex",
    flexDirection: "column",
    gap: "3.5",
    padding: { base: "4.5", md: "5" },
    borderRadius: "2xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface"
  }),
  rootSoft: css21({
    borderWidth: "0",
    boxShadow: "none"
  }),
  subtle: css21({
    bg: "app.surface"
  }),
  accent: css21({
    bg: "app.accent.soft",
    borderColor: "app.border.strong"
  }),
  header: css21({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "3",
    flexWrap: "wrap"
  }),
  copy: css21({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  title: css21({
    textStyle: "caption",
    fontWeight: "semibold",
    color: "app.text",
    letterSpacing: "0.02em"
  }),
  description: css21({
    textStyle: "caption",
    color: "app.text.subtle",
    lineHeight: "1.6",
    maxWidth: "36rem"
  }),
  actions: css21({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap"
  })
};
function FormSection({
  title,
  description,
  actions,
  children,
  tone = "default",
  chrome = "default",
  className
}) {
  return /* @__PURE__ */ jsxs22("section", {
    className: cx21(styles19.root, chrome === "soft" && styles19.rootSoft, tone !== "default" && styles19[tone], className),
    children: [
      /* @__PURE__ */ jsxs22("div", {
        className: styles19.header,
        children: [
          /* @__PURE__ */ jsxs22("div", {
            className: styles19.copy,
            children: [
              /* @__PURE__ */ jsx27("div", {
                className: styles19.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx27("div", {
                className: styles19.description,
                children: description
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx27("div", {
            className: styles19.actions,
            children: actions
          })
        ]
      }),
      children
    ]
  });
}
// src/components/patterns/gradient-picker.tsx
import { Plus, X } from "lucide-react";
import { css as css22, cx as cx22 } from "styled-system/css";
import { jsx as jsx28, jsxs as jsxs23 } from "react/jsx-runtime";
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
var swatchStyle = css22({
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
var hiddenInput = css22({ opacity: 0, position: "absolute", w: 0, h: 0 });
var removeBtn = css22({
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
var addBtn = css22({
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
var pillBase = css22({
  px: "2",
  py: "0.5",
  rounded: "full",
  fontSize: "xs",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var pillActive = css22({ bg: "teal.a3", color: "fg.default" });
var pillInactive = css22({ bg: "transparent", color: "fg.subtle" });
var previewBar = css22({
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
  return /* @__PURE__ */ jsxs23("div", {
    className: cx22(css22({ display: "flex", flexDir: "column", gap: "2", minW: 0 }), className),
    children: [
      /* @__PURE__ */ jsxs23("div", {
        className: css22({ display: "flex", alignItems: "center", gap: "2", flexWrap: "wrap" }),
        children: [
          colors.map((color, i) => /* @__PURE__ */ jsxs23("div", {
            className: css22({ position: "relative" }),
            children: [
              /* @__PURE__ */ jsx28("label", {
                className: swatchStyle,
                style: { backgroundColor: color },
                children: /* @__PURE__ */ jsx28("input", {
                  type: "color",
                  value: color,
                  onChange: (e) => updateColor(i, e.target.value),
                  className: hiddenInput
                })
              }),
              colors.length > 1 && /* @__PURE__ */ jsx28("button", {
                type: "button",
                onClick: () => removeColor(i),
                className: removeBtn,
                children: /* @__PURE__ */ jsx28(X, {
                  size: 10
                })
              })
            ]
          }, i)),
          colors.length < 3 && /* @__PURE__ */ jsx28("button", {
            type: "button",
            onClick: addColor,
            className: addBtn,
            children: /* @__PURE__ */ jsx28(Plus, {
              size: 14
            })
          })
        ]
      }),
      colors.length > 1 && /* @__PURE__ */ jsx28("div", {
        className: css22({ display: "flex", gap: "1", flexWrap: "wrap" }),
        children: ANGLE_PRESETS.map((preset) => /* @__PURE__ */ jsx28("button", {
          type: "button",
          onClick: () => onAngleChange(preset),
          className: cx22(pillBase, angle === preset ? pillActive : pillInactive),
          children: preset
        }, preset))
      }),
      /* @__PURE__ */ jsx28("div", {
        className: previewBar,
        style: { background: buildGradientStyle(colors, angle) }
      })
    ]
  });
}
// src/components/patterns/guided-tour-card.tsx
import { css as css23, cx as cx23 } from "styled-system/css";
import { jsx as jsx29, jsxs as jsxs24 } from "react/jsx-runtime";
"use client";
var styles20 = {
  root: css23({
    width: "20rem",
    maxWidth: "calc(100vw - 2rem)",
    display: "flex",
    flexDirection: "column",
    gap: "4",
    padding: "5",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    background: "app.surface",
    boxShadow: "{shadows.float}"
  }),
  eyebrow: css23({
    textStyle: "eyebrow",
    color: "app.accent"
  }),
  title: css23({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css23({
    textStyle: "body-sm",
    color: "app.text.muted",
    lineHeight: "1.6"
  }),
  meta: css23({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css23({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2.5",
    flexWrap: "wrap"
  })
};
function GuidedTourCard({
  eyebrow,
  title,
  description,
  meta,
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs24("section", {
    className: cx23(styles20.root, className),
    children: [
      eyebrow && /* @__PURE__ */ jsx29("div", {
        className: styles20.eyebrow,
        children: eyebrow
      }),
      /* @__PURE__ */ jsx29("div", {
        className: styles20.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx29("div", {
        className: styles20.description,
        children: description
      }),
      meta && /* @__PURE__ */ jsx29("div", {
        className: styles20.meta,
        children: meta
      }),
      actions && /* @__PURE__ */ jsx29("div", {
        className: styles20.actions,
        children: actions
      })
    ]
  });
}
// src/components/patterns/help-panel.tsx
import { ark as ark7 } from "@ark-ui/react/factory";
import { X as X2 } from "lucide-react";
import { forwardRef as forwardRef6 } from "react";
import { css as css24, cx as cx24 } from "styled-system/css";
import { createStyleContext as createStyleContext4 } from "styled-system/jsx";
import { helpPanel } from "styled-system/recipes";
import { jsx as jsx30, jsxs as jsxs25, Fragment as Fragment2 } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider2, withContext: withContext4 } = createStyleContext4(helpPanel);
var HeaderContainer = withContext4(ark7.div, "header");
var HeaderIconBadge = withContext4(ark7.div, "headerIcon");
var AccentBar = withContext4(ark7.div, "accentBar");
var TabButton = withContext4(ark7.button, "tab");
var FooterContainer = withContext4(ark7.div, "footer");
var Root4 = withRootProvider2(ark7.div);
Root4.displayName = "HelpPanel.Root";
var Header3 = forwardRef6(({ icon, title, subtitle, onClose, closeIcon, accentBar: accentBar2 = true, className }, ref) => /* @__PURE__ */ jsxs25(HeaderContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx30(AccentBar, {
      style: { top: 0 }
    }),
    /* @__PURE__ */ jsxs25("div", {
      className: css24({ display: "flex", alignItems: "center", gap: "3" }),
      children: [
        icon && /* @__PURE__ */ jsx30(HeaderIconBadge, {
          children: icon
        }),
        /* @__PURE__ */ jsxs25("div", {
          children: [
            /* @__PURE__ */ jsx30("h2", {
              className: css24({
                fontSize: "sm",
                fontWeight: "semibold",
                color: "fg.default",
                letterSpacing: "wide"
              }),
              children: title
            }),
            subtitle && /* @__PURE__ */ jsx30("p", {
              className: css24({ fontSize: "xs", color: "fg.subtle" }),
              children: subtitle
            })
          ]
        })
      ]
    }),
    onClose && /* @__PURE__ */ jsx30("button", {
      onClick: onClose,
      type: "button",
      className: css24({
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
      children: closeIcon ?? /* @__PURE__ */ jsx30(X2, {
        size: 14,
        "aria-label": "Close"
      })
    })
  ]
}));
Header3.displayName = "HelpPanel.Header";
var TabBar = withContext4(ark7.div, "tabBar");
TabBar.displayName = "HelpPanel.TabBar";
var Tab = forwardRef6(({ active, icon, label, onClick, title, className }, ref) => /* @__PURE__ */ jsxs25(TabButton, {
  ref,
  type: "button",
  onClick,
  title,
  "data-selected": active ? "" : undefined,
  className,
  children: [
    icon,
    /* @__PURE__ */ jsx30("span", {
      className: css24({ display: { base: "none", sm: "inline" } }),
      children: label
    })
  ]
}));
Tab.displayName = "HelpPanel.Tab";
var Content2 = withContext4(ark7.div, "content");
Content2.displayName = "HelpPanel.Content";
var Footer3 = forwardRef6(({ hint, shortcutKey, accentBar: accentBar2 = true, children, className }, ref) => /* @__PURE__ */ jsxs25(FooterContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx30(AccentBar, {
      style: { bottom: 0, opacity: 0.3 }
    }),
    children ?? /* @__PURE__ */ jsxs25(Fragment2, {
      children: [
        hint && /* @__PURE__ */ jsx30("span", {
          children: hint
        }),
        shortcutKey && /* @__PURE__ */ jsx30("kbd", {
          className: css24({
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
  return /* @__PURE__ */ jsxs25("h4", {
    className: cx24(css24({
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
      /* @__PURE__ */ jsx30("span", {
        className: css24({
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
import { jsx as jsx31 } from "react/jsx-runtime";
"use client";
function HelpTrigger({ active, onActivate, children }) {
  const handleMouseEnter = useCallback2(() => {
    if (active) {
      onActivate();
    }
  }, [active, onActivate]);
  return /* @__PURE__ */ jsx31("div", {
    style: { display: "contents" },
    onMouseEnter: handleMouseEnter,
    role: "group",
    children
  });
}
// src/components/patterns/hero-panel.tsx
import { css as css25, cx as cx25 } from "styled-system/css";
import { jsx as jsx32, jsxs as jsxs26 } from "react/jsx-runtime";
"use client";
var styles21 = {
  root: css25({
    display: "grid",
    gridTemplateColumns: { base: "1fr", xl: "minmax(0, 1.05fr) minmax(20rem, 0.95fr)" },
    gap: "0",
    borderRadius: "l3",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  copy: css25({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minWidth: 0,
    padding: { base: "5", md: "6", xl: "7" }
  }),
  eyebrow: css25({
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
  title: css25({
    textStyle: "h1",
    color: "app.text",
    maxWidth: "20ch"
  }),
  description: css25({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "28rem",
    lineHeight: "1.65"
  }),
  actions: css25({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  footer: css25({
    paddingTop: "4",
    paddingX: "4",
    paddingY: "4",
    borderRadius: "xl",
    bg: "app.surface.muted",
    color: "app.text.muted"
  }),
  media: css25({
    minHeight: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    padding: { base: "4.5", md: "5" },
    background: "linear-gradient(180deg, var(--colors-app-surface-muted) 0%, var(--colors-app-canvas-subtle) 100%)"
  })
};
function HeroPanel({
  eyebrow,
  title,
  description,
  actions,
  media,
  footer,
  className,
  copyClassName,
  titleClassName,
  descriptionClassName,
  mediaClassName
}) {
  return /* @__PURE__ */ jsxs26("section", {
    className: cx25(styles21.root, className),
    children: [
      /* @__PURE__ */ jsxs26("div", {
        className: cx25(styles21.copy, copyClassName),
        children: [
          eyebrow && /* @__PURE__ */ jsx32("div", {
            className: styles21.eyebrow,
            children: eyebrow
          }),
          /* @__PURE__ */ jsx32("div", {
            className: cx25(styles21.title, titleClassName),
            children: title
          }),
          description && /* @__PURE__ */ jsx32("div", {
            className: cx25(styles21.description, descriptionClassName),
            children: description
          }),
          actions && /* @__PURE__ */ jsx32("div", {
            className: styles21.actions,
            children: actions
          }),
          footer && /* @__PURE__ */ jsx32("div", {
            className: styles21.footer,
            children: footer
          })
        ]
      }),
      media && /* @__PURE__ */ jsx32("div", {
        className: cx25(styles21.media, mediaClassName),
        children: media
      })
    ]
  });
}
// src/components/patterns/icon-badge.tsx
import { css as css26, cx as cx26 } from "styled-system/css";
import { jsx as jsx33 } from "react/jsx-runtime";
"use client";
var base2 = css26({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css26({ w: "8", h: "8" }),
  md: css26({ w: "10", h: "10" }),
  lg: css26({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsx33("div", {
    className: cx26(base2, sizes[size], className),
    children: icon
  });
}
// src/components/patterns/icon-picker.tsx
import { icons } from "lucide-react";
import { useMemo as useMemo3, useState as useState3 } from "react";
import { css as css27, cx as cx27 } from "styled-system/css";

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
import { jsx as jsx34 } from "react/jsx-runtime";
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
  defaultProps: { children: /* @__PURE__ */ jsx34(ArrowTip, {}) }
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
import { jsx as jsx35, jsxs as jsxs27 } from "react/jsx-runtime";
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
var triggerStyle = css27({
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
var gridStyle = css27({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "1",
  maxH: "220px",
  overflowY: "auto"
});
var cellBase = css27({
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
var cellActive = css27({ bg: "teal.a3" });
var labelStyle = css27({ fontSize: "sm", color: "fg.muted" });
var emptyStyle = css27({ fontSize: "sm", color: "fg.subtle", textAlign: "center", py: "4" });
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
  return /* @__PURE__ */ jsxs27(Root5, {
    portalled: true,
    children: [
      /* @__PURE__ */ jsx35(Trigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsxs27("button", {
          type: "button",
          className: cx27(triggerStyle, className),
          children: [
            SelectedIcon && /* @__PURE__ */ jsx35(SelectedIcon, {
              size: 16
            }),
            /* @__PURE__ */ jsx35("span", {
              className: labelStyle,
              children: value
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx35(Positioner2, {
        className: css27({ zIndex: "popover" }),
        children: /* @__PURE__ */ jsxs27(Content3, {
          className: css27({
            w: "280px",
            p: "3",
            bg: "bg.default",
            borderWidth: "1px",
            borderColor: "border.default",
            shadow: "lg",
            rounded: "lg"
          }),
          children: [
            /* @__PURE__ */ jsx35(Input, {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search icons...",
              size: "sm",
              className: css27({ mb: "2" })
            }),
            /* @__PURE__ */ jsx35("div", {
              className: gridStyle,
              children: displayedIcons.map((name) => {
                const Icon = icons[name];
                if (!Icon)
                  return null;
                return /* @__PURE__ */ jsx35("button", {
                  type: "button",
                  title: name,
                  onClick: () => {
                    onChange(name);
                    setSearch("");
                  },
                  className: cx27(cellBase, name === value && cellActive),
                  children: /* @__PURE__ */ jsx35(Icon, {
                    size: 18
                  })
                }, name);
              })
            }),
            displayedIcons.length === 0 && /* @__PURE__ */ jsx35("p", {
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
import { css as css28, cx as cx28 } from "styled-system/css";
import { jsx as jsx36 } from "react/jsx-runtime";
"use client";
var styles22 = {
  base: css28({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    padding: "4",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted"
  }),
  accent: css28({
    bg: "app.accent.soft",
    borderColor: "transparent"
  })
};
function InsetPanel({ children, tone = "default", className }) {
  return /* @__PURE__ */ jsx36("div", {
    className: cx28(styles22.base, tone === "accent" && styles22.accent, className),
    children
  });
}
// src/components/patterns/line-chart.tsx
import { useRef } from "react";
import { css as css29, cx as cx29 } from "styled-system/css";
import { token } from "styled-system/tokens";
import { jsx as jsx37, jsxs as jsxs28 } from "react/jsx-runtime";
"use client";
var styles23 = {
  root: css29({
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
  return /* @__PURE__ */ jsxs28("svg", {
    viewBox: `0 0 ${width} ${height}`,
    className: cx29(styles23.root, className),
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Line chart",
    children: [
      /* @__PURE__ */ jsx37("defs", {
        children: gradientFill && /* @__PURE__ */ jsxs28("linearGradient", {
          id: gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [
            /* @__PURE__ */ jsx37("stop", {
              offset: "0%",
              stopColor: resolvedColor,
              stopOpacity: "0.3"
            }),
            /* @__PURE__ */ jsx37("stop", {
              offset: "100%",
              stopColor: resolvedColor,
              stopOpacity: "0"
            })
          ]
        })
      }),
      showGrid && /* @__PURE__ */ jsx37("g", {
        opacity: "0.2",
        children: [0, 0.25, 0.5, 0.75, 1].map((ratio) => /* @__PURE__ */ jsx37("line", {
          x1: padding.left,
          y1: padding.top + chartHeight * ratio,
          x2: width - padding.right,
          y2: padding.top + chartHeight * ratio,
          stroke: gridColor,
          strokeDasharray: "2,4"
        }, ratio))
      }),
      gradientFill && /* @__PURE__ */ jsx37("path", {
        d: areaPath,
        fill: `url(#${gradientId})`
      }),
      /* @__PURE__ */ jsx37("path", {
        d: linePath,
        fill: "none",
        stroke: resolvedColor,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      pointsVisible && data.map((d, i) => /* @__PURE__ */ jsx37("circle", {
        cx: scaleX(d.x),
        cy: scaleY(d.y),
        r: "3",
        fill: resolvedColor,
        opacity: "0.8"
      }, `${d.x}-${d.y}-${i}`)),
      showAxis && /* @__PURE__ */ jsxs28("g", {
        children: [
          /* @__PURE__ */ jsx37("text", {
            x: padding.left - 4,
            y: padding.top + 4,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMax.toFixed(0)
          }),
          /* @__PURE__ */ jsx37("text", {
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
import { css as css30, cx as cx30 } from "styled-system/css";
import { jsx as jsx38 } from "react/jsx-runtime";
"use client";
var styles24 = {
  base: css30({
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
  accent: css30({
    bg: "app.accent.soft",
    borderColor: "transparent",
    color: "app.accent"
  }),
  success: css30({
    bg: "bg.success",
    borderColor: "transparent",
    color: "fg.success"
  }),
  warning: css30({
    bg: "bg.warning",
    borderColor: "transparent",
    color: "fg.warning"
  }),
  danger: css30({
    bg: "bg.error",
    borderColor: "transparent",
    color: "fg.error"
  })
};
function MetaPill({ children, tone = "default", className }) {
  return /* @__PURE__ */ jsx38("span", {
    className: cx30(styles24.base, tone === "accent" && styles24.accent, tone === "success" && styles24.success, tone === "warning" && styles24.warning, tone === "danger" && styles24.danger, className),
    children
  });
}
// src/components/patterns/metric-rail.tsx
import { css as css32, cx as cx32 } from "styled-system/css";

// src/components/patterns/stat-card.tsx
import { css as css31, cx as cx31 } from "styled-system/css";
import { jsx as jsx39, jsxs as jsxs29 } from "react/jsx-runtime";
"use client";
var styles25 = {
  root: css31({
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    rounded: "l3",
    p: "5.5",
    display: "flex",
    flexDirection: "column",
    gap: "3.5",
    boxShadow: "{shadows.whisper}"
  }),
  header: css31({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  iconWrap: css31({
    flexShrink: 0,
    w: "9",
    h: "9",
    rounded: "xl",
    bg: "app.surface.muted",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "app.accent"
  }),
  content: css31({
    flex: 1,
    minW: 0
  }),
  title: css31({
    textStyle: "metricLabel",
    color: "app.text.subtle"
  }),
  value: css31({
    textStyle: "metricValue",
    color: "app.text",
    letterSpacing: "-0.03em"
  }),
  change: css31({
    textStyle: "small",
    mt: "1.25"
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
  const changeColor = changeType === "positive" ? css31({ color: "fg.success" }) : changeType === "negative" ? css31({ color: "fg.error" }) : css31({ color: "app.text.muted" });
  return /* @__PURE__ */ jsx39("div", {
    className: cx31(styles25.root, className),
    children: /* @__PURE__ */ jsxs29("div", {
      className: styles25.content,
      children: [
        /* @__PURE__ */ jsxs29("div", {
          className: styles25.header,
          children: [
            /* @__PURE__ */ jsx39("div", {
              className: styles25.title,
              children: title
            }),
            icon && /* @__PURE__ */ jsx39("div", {
              className: styles25.iconWrap,
              style: {
                ...iconBg ? { backgroundColor: iconBg } : {},
                ...iconColor ? { color: iconColor } : {}
              },
              children: icon
            })
          ]
        }),
        /* @__PURE__ */ jsx39("div", {
          className: styles25.value,
          children: value
        }),
        /* @__PURE__ */ jsxs29("div", {
          className: css31({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
          children: [
            change && /* @__PURE__ */ jsx39("span", {
              className: cx31(styles25.change, changeColor),
              children: change
            }),
            badge && /* @__PURE__ */ jsx39("span", {
              className: css31({
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
import { jsx as jsx40 } from "react/jsx-runtime";
"use client";
function MetricRail({ items, columns = 3, className }) {
  const rootClassName = css32({
    display: "grid",
    gap: "4",
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(2, minmax(0, 1fr))",
      xl: `repeat(${columns}, minmax(0, 1fr))`
    }
  });
  return /* @__PURE__ */ jsx40("div", {
    className: cx32(rootClassName, className),
    children: items.map((item, index) => /* @__PURE__ */ jsx40(StatCard, {
      ...item
    }, `${index}-${String(item.value)}`))
  });
}
// src/components/patterns/model-card.tsx
import { css as css33, cx as cx33 } from "styled-system/css";
import { jsx as jsx41, jsxs as jsxs30, Fragment as Fragment3 } from "react/jsx-runtime";
"use client";
var styles26 = {
  root: css33({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minH: "18rem",
    p: "8",
    rounded: "3xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "whisper",
    transitionProperty: "border-color, background-color, box-shadow, transform",
    transitionDuration: "160ms",
    transitionTimingFunction: "ease"
  }),
  body: css33({
    display: "flex",
    flexDirection: "column",
    gap: "5",
    minH: 0,
    flex: "1"
  }),
  interactive: css33({
    cursor: "pointer",
    userSelect: "none",
    outline: "none",
    _hover: {
      borderColor: "app.border.strong",
      boxShadow: "panel",
      transform: "translateY(-1px)"
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "app.accent",
      outlineOffset: "2px"
    }
  }),
  selected: css33({
    borderColor: "app.accentAlt.border",
    boxShadow: "0 0 0 1px var(--colors-app-accent-alt-border)"
  }),
  header: css33({
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    gap: "4",
    alignItems: "start"
  }),
  iconFrame: css33({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "3.5rem",
    rounded: "2xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.canvas.subtle",
    color: "app.accent",
    flexShrink: 0
  }),
  copy: css33({
    display: "grid",
    gap: "1.5",
    minWidth: 0
  }),
  title: css33({
    textStyle: "sectionTitle",
    color: "app.text",
    minWidth: 0,
    lineHeight: "1.2"
  }),
  description: css33({
    textStyle: "small",
    color: "app.text.muted",
    lineHeight: "1.6",
    minH: "3rem"
  }),
  metaRow: css33({
    display: "flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap"
  }),
  status: css33({
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    rounded: "full",
    px: "2.5",
    py: "1",
    textStyle: "caption",
    fontWeight: "700",
    borderWidth: "1px"
  }),
  statusNeutral: css33({
    borderColor: "app.border",
    bg: "app.canvas.subtle",
    color: "app.text"
  }),
  statusAccent: css33({
    borderColor: "app.accentAlt.border",
    bg: "app.accentAlt.soft",
    color: "app.accentAlt.text"
  }),
  statusSuccess: css33({
    borderColor: "transparent",
    bg: "bg.success",
    color: "fg.success"
  }),
  statusWarning: css33({
    borderColor: "transparent",
    bg: "bg.warning",
    color: "fg.warning"
  }),
  statusDanger: css33({
    borderColor: "transparent",
    bg: "bg.error",
    color: "fg.error"
  }),
  meta: css33({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  facts: css33({
    display: "grid",
    gap: "0",
    rounded: "2xl",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.canvas.subtle",
    overflow: "hidden"
  }),
  fact: css33({
    display: "grid",
    gap: "0.75",
    p: "4",
    minW: 0
  }),
  factTopBorder: css33({
    borderTopWidth: "1px",
    borderTopColor: "app.border"
  }),
  factLeftBorder: css33({
    borderLeftWidth: "1px",
    borderLeftColor: "app.border"
  }),
  factLabel: css33({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  factValue: css33({
    textStyle: "small",
    color: "app.text",
    fontWeight: "600",
    lineHeight: "1.45",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  progress: css33({
    display: "grid",
    gap: "1.5"
  }),
  progressLabel: css33({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  progressTrack: css33({
    h: "2",
    rounded: "full",
    bg: "app.surface.muted",
    overflow: "hidden"
  }),
  progressBar: css33({
    h: "full",
    rounded: "full",
    bg: "app.accent",
    transition: "width 180ms ease"
  }),
  footer: css33({
    display: "flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap",
    pt: "4",
    borderTopWidth: "1px",
    borderTopColor: "app.border"
  })
};
function handleKeyDown2(event, onClick) {
  if (!onClick)
    return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onClick();
  }
}
function getStatusToneClass(tone) {
  switch (tone) {
    case "accent":
      return styles26.statusAccent;
    case "success":
      return styles26.statusSuccess;
    case "warning":
      return styles26.statusWarning;
    case "danger":
      return styles26.statusDanger;
    default:
      return styles26.statusNeutral;
  }
}
function clampProgress(value) {
  return Math.max(0, Math.min(100, value));
}
function ModelCard({
  icon,
  title,
  description,
  status,
  meta,
  facts = [],
  progress,
  footer,
  selected = false,
  onClick,
  className
}) {
  const factColumns = facts.length <= 1 ? 1 : 2;
  const normalizedProgress = progress ? clampProgress(progress.value) : null;
  const cardContent = /* @__PURE__ */ jsxs30(Fragment3, {
    children: [
      /* @__PURE__ */ jsxs30("div", {
        className: styles26.header,
        children: [
          /* @__PURE__ */ jsx41("div", {
            className: styles26.iconFrame,
            children: icon
          }),
          /* @__PURE__ */ jsxs30("div", {
            className: styles26.copy,
            children: [
              /* @__PURE__ */ jsx41("div", {
                className: styles26.title,
                children: title
              }),
              description ? /* @__PURE__ */ jsx41("div", {
                className: styles26.description,
                children: description
              }) : null,
              /* @__PURE__ */ jsxs30("div", {
                className: styles26.metaRow,
                children: [
                  /* @__PURE__ */ jsx41("span", {
                    className: cx33(styles26.status, getStatusToneClass(status.tone)),
                    children: status.label
                  }),
                  meta ? /* @__PURE__ */ jsx41("span", {
                    className: styles26.meta,
                    children: meta
                  }) : null
                ]
              })
            ]
          })
        ]
      }),
      facts.length > 0 ? /* @__PURE__ */ jsx41("div", {
        className: styles26.facts,
        style: {
          gridTemplateColumns: factColumns === 1 ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))"
        },
        children: facts.map((fact, index) => /* @__PURE__ */ jsxs30("div", {
          className: cx33(styles26.fact, index >= factColumns && styles26.factTopBorder, factColumns > 1 && index % factColumns !== 0 && styles26.factLeftBorder),
          children: [
            /* @__PURE__ */ jsx41("div", {
              className: styles26.factLabel,
              children: fact.label
            }),
            /* @__PURE__ */ jsx41("div", {
              className: styles26.factValue,
              children: fact.value
            })
          ]
        }, `${String(fact.label)}-${index}`))
      }) : null,
      normalizedProgress !== null ? /* @__PURE__ */ jsxs30("div", {
        className: styles26.progress,
        children: [
          progress?.label ? /* @__PURE__ */ jsx41("div", {
            className: styles26.progressLabel,
            children: progress.label
          }) : null,
          /* @__PURE__ */ jsx41("div", {
            className: styles26.progressTrack,
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": normalizedProgress,
            "aria-label": progress?.ariaLabel ?? (typeof progress?.label === "string" ? progress.label : undefined),
            children: /* @__PURE__ */ jsx41("div", {
              className: styles26.progressBar,
              style: { width: `${normalizedProgress}%` }
            })
          })
        ]
      }) : null
    ]
  });
  if (onClick) {
    return /* @__PURE__ */ jsxs30("div", {
      className: cx33(styles26.root, selected && styles26.selected, className),
      children: [
        /* @__PURE__ */ jsx41("div", {
          className: cx33(styles26.body, styles26.interactive),
          onClick,
          onKeyDown: (event) => handleKeyDown2(event, onClick),
          role: "button",
          tabIndex: 0,
          children: cardContent
        }),
        footer ? /* @__PURE__ */ jsx41("div", {
          className: styles26.footer,
          children: footer
        }) : null
      ]
    });
  }
  return /* @__PURE__ */ jsxs30("div", {
    className: cx33(styles26.root, selected && styles26.selected, className),
    children: [
      /* @__PURE__ */ jsx41("div", {
        className: styles26.body,
        children: cardContent
      }),
      footer ? /* @__PURE__ */ jsx41("div", {
        className: styles26.footer,
        children: footer
      }) : null
    ]
  });
}
// src/components/patterns/model-icon-customizer.tsx
import { icons as icons2 } from "lucide-react";
import { css as css34, cx as cx34 } from "styled-system/css";
import { jsx as jsx42, jsxs as jsxs31 } from "react/jsx-runtime";
"use client";
var DEFAULT_ICON_CONFIG = {
  iconName: "Cpu",
  bgColors: ["#5AB8C4", "#9333ea"],
  bgAngle: 135,
  iconColor: "#ffffff"
};
var cardIconBase = css34({
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
  return /* @__PURE__ */ jsx42("div", {
    className: cx34(cardIconBase, className),
    style: {
      width: size,
      height: size,
      background: buildGradientStyle(c.bgColors, c.bgAngle ?? 135)
    },
    children: Icon && /* @__PURE__ */ jsx42(Icon, {
      size: iconSize,
      style: { color: c.iconColor ?? "#ffffff" }
    })
  });
}
var swatchStyle2 = css34({
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
var hiddenInput2 = css34({ opacity: 0, position: "absolute", w: 0, h: 0 });
var rowStyle = css34({ display: "flex", alignItems: "center", gap: "3" });
var rowStartStyle = css34({ display: "flex", alignItems: "flex-start", gap: "3" });
var labelStyle2 = css34({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0 });
var labelTopStyle = css34({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0, pt: "1" });
function ModelIconCustomizer({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxs31("div", {
    className: cx34(css34({ display: "flex", gap: "4", alignItems: "flex-start" }), className),
    children: [
      /* @__PURE__ */ jsx42(ModelCardIcon, {
        config: value,
        size: 56,
        iconSize: 28
      }),
      /* @__PURE__ */ jsxs31("div", {
        className: css34({ display: "flex", flexDir: "column", gap: "3", flex: 1, minW: 0 }),
        children: [
          /* @__PURE__ */ jsxs31("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx42("div", {
                className: labelStyle2,
                children: "Icon"
              }),
              /* @__PURE__ */ jsx42(IconPicker, {
                value: value.iconName,
                onChange: (iconName) => onChange({ ...value, iconName })
              })
            ]
          }),
          /* @__PURE__ */ jsxs31("div", {
            className: rowStartStyle,
            children: [
              /* @__PURE__ */ jsx42("div", {
                className: labelTopStyle,
                children: "Background"
              }),
              /* @__PURE__ */ jsx42(GradientPicker, {
                colors: value.bgColors,
                angle: value.bgAngle ?? 135,
                onColorsChange: (bgColors) => onChange({ ...value, bgColors }),
                onAngleChange: (bgAngle) => onChange({ ...value, bgAngle })
              })
            ]
          }),
          /* @__PURE__ */ jsxs31("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx42("div", {
                className: labelStyle2,
                children: "Icon Color"
              }),
              /* @__PURE__ */ jsx42("label", {
                className: swatchStyle2,
                style: { backgroundColor: value.iconColor ?? "#ffffff" },
                children: /* @__PURE__ */ jsx42("input", {
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
// src/components/patterns/named-prompt-list.tsx
import { Plus as Plus2, Trash2 } from "lucide-react";
import { useEffect, useState as useState4 } from "react";
import { css as css35 } from "styled-system/css";

// src/components/ui/field.tsx
import { Field as Field2 } from "@ark-ui/react/field";
import { createStyleContext as createStyleContext6 } from "styled-system/jsx";
import { field } from "styled-system/recipes";
import { FieldContext } from "@ark-ui/react/field";
"use client";
var { withProvider: withProvider3, withContext: withContext6 } = createStyleContext6(field);
var Root6 = withProvider3(Field2.Root, "root");
var RootProvider4 = withProvider3(Field2.RootProvider, "root");
var ErrorText = withContext6(Field2.ErrorText, "errorText");
var HelperText = withContext6(Field2.HelperText, "helperText");
var Label2 = withContext6(Field2.Label, "label");
var RequiredIndicator = withContext6(Field2.RequiredIndicator, "requiredIndicator");

// src/components/forms/form-field.tsx
import { jsx as jsx43, jsxs as jsxs32 } from "react/jsx-runtime";
"use client";
function FormField({
  label,
  error,
  helperText,
  required,
  children,
  ...rootProps
}) {
  return /* @__PURE__ */ jsxs32(Root6, {
    invalid: !!error,
    required,
    ...rootProps,
    children: [
      /* @__PURE__ */ jsxs32(Label2, {
        children: [
          label,
          required && /* @__PURE__ */ jsx43(RequiredIndicator, {})
        ]
      }),
      children,
      error ? /* @__PURE__ */ jsx43(ErrorText, {
        children: error
      }) : helperText ? /* @__PURE__ */ jsx43(HelperText, {
        children: helperText
      }) : null
    ]
  });
}
// src/components/ui/drawer.tsx
var exports_drawer = {};
__export(exports_drawer, {
  Trigger: () => Trigger3,
  Title: () => Title4,
  RootProvider: () => RootProvider5,
  Root: () => Root7,
  Positioner: () => Positioner3,
  Header: () => Header5,
  Footer: () => Footer5,
  Description: () => Description4,
  Context: () => DialogContext2,
  Content: () => Content4,
  CloseTrigger: () => CloseTrigger3,
  Body: () => Body4,
  Backdrop: () => Backdrop2
});
import { Dialog as Dialog2 } from "@ark-ui/react/dialog";
import { ark as ark9 } from "@ark-ui/react/factory";
import { createStyleContext as createStyleContext7 } from "styled-system/jsx";
import { drawer } from "styled-system/recipes";
import { DialogContext as DialogContext2 } from "@ark-ui/react/dialog";
"use client";
var { withRootProvider: withRootProvider4, withContext: withContext7 } = createStyleContext7(drawer);
var Root7 = withRootProvider4(Dialog2.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider5 = withRootProvider4(Dialog2.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Backdrop2 = withContext7(Dialog2.Backdrop, "backdrop");
var Positioner3 = withContext7(Dialog2.Positioner, "positioner");
var CloseTrigger3 = withContext7(Dialog2.CloseTrigger, "closeTrigger");
var Content4 = withContext7(Dialog2.Content, "content");
var Description4 = withContext7(Dialog2.Description, "description");
var Title4 = withContext7(Dialog2.Title, "title");
var Trigger3 = withContext7(Dialog2.Trigger, "trigger");
var Body4 = withContext7(ark9.div, "body");
var Header5 = withContext7(ark9.div, "header");
var Footer5 = withContext7(ark9.div, "footer");
// src/components/ui/number-input.tsx
var exports_number_input = {};
__export(exports_number_input, {
  ValueText: () => ValueText,
  Scrubber: () => Scrubber,
  RootProvider: () => RootProvider6,
  Root: () => Root8,
  Label: () => Label3,
  Input: () => Input2,
  IncrementTrigger: () => IncrementTrigger,
  DecrementTrigger: () => DecrementTrigger,
  Control: () => Control,
  Context: () => NumberInputContext
});
import { NumberInput } from "@ark-ui/react/number-input";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { createStyleContext as createStyleContext8 } from "styled-system/jsx";
import { numberInput } from "styled-system/recipes";
import { NumberInputContext } from "@ark-ui/react/number-input";
import { jsx as jsx44, jsxs as jsxs33, Fragment as Fragment4 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider4, withContext: withContext8 } = createStyleContext8(numberInput);
var Root8 = withProvider4(NumberInput.Root, "root");
var RootProvider6 = withProvider4(NumberInput.RootProvider, "root");
var DecrementTrigger = withContext8(NumberInput.DecrementTrigger, "decrementTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx44(ChevronDownIcon, {}) }
});
var IncrementTrigger = withContext8(NumberInput.IncrementTrigger, "incrementTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx44(ChevronUpIcon, {}) }
});
var Input2 = withContext8(NumberInput.Input, "input");
var Label3 = withContext8(NumberInput.Label, "label");
var Scrubber = withContext8(NumberInput.Scrubber, "scrubber");
var ValueText = withContext8(NumberInput.ValueText, "valueText");
var Control = withContext8(NumberInput.Control, "control", {
  defaultProps: {
    children: /* @__PURE__ */ jsxs33(Fragment4, {
      children: [
        /* @__PURE__ */ jsx44(IncrementTrigger, {}),
        /* @__PURE__ */ jsx44(DecrementTrigger, {})
      ]
    })
  }
});
// src/components/ui/slider.tsx
import { ark as ark10 } from "@ark-ui/react/factory";
import { Slider, useSliderContext } from "@ark-ui/react/slider";
import { forwardRef as forwardRef7 } from "react";
import { createStyleContext as createStyleContext9 } from "styled-system/jsx";
import { slider } from "styled-system/recipes";
import { SliderContext } from "@ark-ui/react/slider";
import { jsx as jsx45, jsxs as jsxs34 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider5, withContext: withContext9 } = createStyleContext9(slider);
var Root9 = withProvider5(Slider.Root, "root");
var Control2 = withContext9(Slider.Control, "control");
var DraggingIndicator = withContext9(Slider.DraggingIndicator, "draggingIndicator");
var Label4 = withContext9(Slider.Label, "label");
var Marker = withContext9(Slider.Marker, "marker");
var MarkerIndicator = withContext9(ark10.div, "markerIndicator");
var MarkerGroup = withContext9(Slider.MarkerGroup, "markerGroup");
var Range = withContext9(Slider.Range, "range");
var Thumb = withContext9(Slider.Thumb, "thumb");
var Track = withContext9(Slider.Track, "track");
var ValueText2 = withContext9(Slider.ValueText, "valueText");
var HiddenInput = Slider.HiddenInput;
var Marks = forwardRef7(function Marks2(props, ref) {
  const { marks, ...rest } = props;
  if (!marks?.length)
    return null;
  return /* @__PURE__ */ jsx45(MarkerGroup, {
    ref,
    ...rest,
    children: marks.map((mark, index) => {
      const value = typeof mark === "number" ? mark : mark.value;
      const label = typeof mark === "number" ? undefined : mark.label;
      return /* @__PURE__ */ jsxs34(Marker, {
        value,
        children: [
          /* @__PURE__ */ jsx45(MarkerIndicator, {}),
          label != null && /* @__PURE__ */ jsx45("span", {
            children: label
          })
        ]
      }, index);
    })
  });
});
// src/components/ui/textarea.tsx
import { Field as Field3 } from "@ark-ui/react/field";
import { styled as styled8 } from "styled-system/jsx";
import { textarea } from "styled-system/recipes";
var Textarea = styled8(Field3.Textarea, textarea);
// src/components/patterns/named-prompt-list.tsx
import { jsx as jsx46, jsxs as jsxs35 } from "react/jsx-runtime";
"use client";
var styles27 = {
  list: css35({
    display: "grid",
    gap: "3"
  }),
  row: css35({
    display: "grid",
    gap: "3"
  }),
  rowHeader: css35({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3",
    flexWrap: "wrap"
  })
};
function NamedPromptRow({
  item,
  onRemove,
  onKeyChange,
  onValueChange,
  keyLabel,
  valueLabel,
  keyPlaceholder,
  valuePlaceholder,
  chrome
}) {
  const [draftKey, setDraftKey] = useState4(item.key);
  useEffect(() => {
    setDraftKey(item.key);
  }, [item.key]);
  const commitKeyChange = () => {
    if (draftKey !== item.key) {
      onKeyChange(item.key, draftKey);
    }
  };
  return /* @__PURE__ */ jsx46(FormSection, {
    title: draftKey || "New task",
    tone: "subtle",
    chrome,
    actions: /* @__PURE__ */ jsxs35(Button, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: () => onRemove(item.key),
      children: [
        /* @__PURE__ */ jsx46(Trash2, {
          size: 14
        }),
        "Remove"
      ]
    }),
    children: /* @__PURE__ */ jsxs35("div", {
      className: styles27.row,
      children: [
        /* @__PURE__ */ jsx46("div", {
          className: styles27.rowHeader,
          children: /* @__PURE__ */ jsx46(FormField, {
            label: keyLabel,
            className: css35({ flex: "1 1 16rem" }),
            children: /* @__PURE__ */ jsx46(Input, {
              value: draftKey,
              onChange: (event) => setDraftKey(event.target.value),
              onBlur: commitKeyChange,
              onKeyDown: (event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  event.currentTarget.blur();
                }
              },
              placeholder: keyPlaceholder
            })
          })
        }),
        /* @__PURE__ */ jsx46(FormField, {
          label: valueLabel,
          children: /* @__PURE__ */ jsx46(Textarea, {
            value: item.value,
            onChange: (event) => onValueChange(item.key, event.target.value),
            placeholder: valuePlaceholder,
            rows: 4,
            className: css35({ resize: "vertical" })
          })
        })
      ]
    })
  });
}
function NamedPromptList({
  title,
  description,
  items,
  onAdd,
  onRemove,
  onKeyChange,
  onValueChange,
  keyLabel = "Task name",
  valueLabel = "Prompt",
  keyPlaceholder = "summarize",
  valuePlaceholder = "You are a concise assistant that...",
  emptyTitle = "No prompts added yet",
  emptyDescription = "Add at least one named prompt to continue.",
  chrome = "default"
}) {
  return /* @__PURE__ */ jsx46(FormSection, {
    title,
    description,
    chrome,
    actions: /* @__PURE__ */ jsxs35(Button, {
      type: "button",
      variant: chrome === "soft" ? "subtle" : "toolbar",
      size: "sm",
      onClick: onAdd,
      children: [
        /* @__PURE__ */ jsx46(Plus2, {
          size: 14
        }),
        "Add task"
      ]
    }),
    children: /* @__PURE__ */ jsx46("div", {
      className: styles27.list,
      children: items.length === 0 ? /* @__PURE__ */ jsx46(EmptyState, {
        title: emptyTitle,
        description: emptyDescription,
        className: css35({ py: "8", px: "4" })
      }) : items.map((item, index) => /* @__PURE__ */ jsx46(NamedPromptRow, {
        item,
        onRemove,
        onKeyChange,
        onValueChange,
        keyLabel,
        valueLabel,
        keyPlaceholder,
        valuePlaceholder,
        chrome
      }, index))
    })
  });
}
// src/components/patterns/number-field.tsx
import { css as css36, cx as cx35 } from "styled-system/css";
import { jsx as jsx47, jsxs as jsxs36 } from "react/jsx-runtime";
"use client";
var styles28 = {
  root: css36({
    display: "grid",
    gap: "2"
  })
};
function NumberField({
  label,
  value,
  onValueChange,
  min,
  max,
  step = 1,
  formatOptions,
  helperText,
  error,
  placeholder,
  allowEmpty = false,
  className
}) {
  return /* @__PURE__ */ jsx47(FormField, {
    label,
    helperText,
    error,
    className: cx35(styles28.root, className),
    children: /* @__PURE__ */ jsxs36(exports_number_input.Root, {
      value: value === null ? "" : String(value),
      min,
      max,
      step,
      formatOptions,
      onValueChange: (details) => {
        if (details.value === "") {
          onValueChange(allowEmpty ? null : min ?? 0);
          return;
        }
        onValueChange(Number.isNaN(details.valueAsNumber) ? allowEmpty ? null : min ?? 0 : details.valueAsNumber);
      },
      children: [
        /* @__PURE__ */ jsx47(exports_number_input.Input, {
          placeholder
        }),
        /* @__PURE__ */ jsx47(exports_number_input.Control, {})
      ]
    })
  });
}
// src/components/patterns/option-row.tsx
import { css as css37, cx as cx36 } from "styled-system/css";
import { jsx as jsx48, jsxs as jsxs37, Fragment as Fragment5 } from "react/jsx-runtime";
"use client";
var styles29 = {
  root: css37({
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
  rootSoft: css37({
    borderWidth: "0",
    boxShadow: "none",
    bg: "app.surface.muted"
  }),
  interactive: css37({
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
  selected: css37({
    borderColor: "app.border.strong",
    bg: "app.accent.soft"
  }),
  selectedSoft: css37({
    bg: "app.accent.soft"
  }),
  disabled: css37({
    opacity: "0.55",
    cursor: "not-allowed"
  }),
  lead: css37({
    display: "flex",
    alignItems: "center",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  leading: css37({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }),
  copy: css37({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  title: css37({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css37({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  trailing: css37({
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
  chrome = "default",
  className
}) {
  const interactive = Boolean(onClick) && !disabled;
  const content = /* @__PURE__ */ jsxs37(Fragment5, {
    children: [
      /* @__PURE__ */ jsxs37("div", {
        className: styles29.lead,
        children: [
          leading && /* @__PURE__ */ jsx48("div", {
            className: styles29.leading,
            children: leading
          }),
          /* @__PURE__ */ jsxs37("div", {
            className: styles29.copy,
            children: [
              /* @__PURE__ */ jsx48("div", {
                className: styles29.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx48("div", {
                className: styles29.description,
                children: description
              })
            ]
          })
        ]
      }),
      trailing && /* @__PURE__ */ jsx48("div", {
        className: styles29.trailing,
        children: trailing
      })
    ]
  });
  if (interactive) {
    return /* @__PURE__ */ jsx48("button", {
      type: "button",
      className: cx36(styles29.root, chrome === "soft" && styles29.rootSoft, styles29.interactive, selected && (chrome === "soft" ? styles29.selectedSoft : styles29.selected), className),
      onClick,
      children: content
    });
  }
  return /* @__PURE__ */ jsx48("div", {
    className: cx36(styles29.root, chrome === "soft" && styles29.rootSoft, selected && (chrome === "soft" ? styles29.selectedSoft : styles29.selected), disabled && styles29.disabled, className),
    "aria-disabled": disabled || undefined,
    children: content
  });
}
// src/components/patterns/page-title.tsx
import { css as css38, cx as cx37 } from "styled-system/css";
import { jsx as jsx49, jsxs as jsxs38 } from "react/jsx-runtime";
"use client";
var titleStyle = css38({
  textStyle: "pageTitle",
  color: "app.text"
});
var subtitleStyle = css38({
  textStyle: "description",
  color: "app.text.muted",
  mt: "2"
});
function PageTitle({ children, subtitle, className }) {
  return /* @__PURE__ */ jsxs38("div", {
    className,
    children: [
      /* @__PURE__ */ jsx49("h1", {
        className: cx37(titleStyle),
        children
      }),
      subtitle && /* @__PURE__ */ jsx49("p", {
        className: subtitleStyle,
        children: subtitle
      })
    ]
  });
}
// src/components/patterns/picker-field.tsx
import { ChevronDown } from "lucide-react";
import { css as css39, cx as cx38 } from "styled-system/css";
import { jsx as jsx50, jsxs as jsxs39 } from "react/jsx-runtime";
"use client";
var styles30 = {
  root: css39({
    position: "relative"
  }),
  trigger: css39({
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
  triggerSm: css39({
    minHeight: "3rem",
    paddingX: "3.5",
    paddingY: "2.5"
  }),
  triggerSoft: css39({
    borderWidth: "0",
    bg: "app.surface.muted",
    _hover: {
      bg: "app.surface"
    }
  }),
  triggerOpen: css39({
    borderColor: "app.border.strong",
    bg: "app.surface",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0"
  }),
  triggerOpenSoft: css39({
    bg: "app.surface",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0"
  }),
  lead: css39({
    display: "flex",
    alignItems: "center",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  leading: css39({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "app.accent"
  }),
  copy: css39({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  titleRow: css39({
    display: "flex",
    alignItems: "center",
    gap: "2",
    minWidth: 0
  }),
  title: css39({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  titleSm: css39({
    fontWeight: "700"
  }),
  description: css39({
    textStyle: "caption",
    color: "app.text.subtle",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  chevron: css39({
    color: "app.text.subtle",
    flexShrink: 0,
    transition: "transform 160ms ease"
  }),
  chevronOpen: css39({
    transform: "rotate(180deg)"
  }),
  panel: css39({
    position: "absolute",
    top: "calc(100% - 1px)",
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
  panelSoft: css39({
    borderWidth: "0"
  }),
  panelConnected: css39({
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    borderWidth: "0"
  }),
  panelLabel: css39({
    paddingX: "4",
    paddingY: "2.5",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    bg: "app.canvas.subtle"
  }),
  panelBody: css39({
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
  size = "md",
  chrome = "default",
  className
}) {
  const compact = size === "sm";
  const softChrome = chrome === "soft";
  return /* @__PURE__ */ jsxs39("div", {
    className: cx38(styles30.root, className),
    style: minWidth ? { minWidth } : undefined,
    children: [
      /* @__PURE__ */ jsxs39("button", {
        type: "button",
        onClick: onToggle,
        disabled,
        className: cx38(styles30.trigger, compact && styles30.triggerSm, softChrome && styles30.triggerSoft, open && styles30.triggerOpen, open && softChrome && styles30.triggerOpenSoft),
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxs39("div", {
            className: styles30.lead,
            children: [
              leading && /* @__PURE__ */ jsx50("div", {
                className: styles30.leading,
                children: leading
              }),
              /* @__PURE__ */ jsxs39("div", {
                className: styles30.copy,
                children: [
                  /* @__PURE__ */ jsxs39("div", {
                    className: styles30.titleRow,
                    children: [
                      /* @__PURE__ */ jsx50("div", {
                        className: cx38(styles30.title, compact && styles30.titleSm),
                        children: title
                      }),
                      badge
                    ]
                  }),
                  description && /* @__PURE__ */ jsx50("div", {
                    className: styles30.description,
                    children: description
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx50(ChevronDown, {
            size: 16,
            className: cx38(styles30.chevron, open && styles30.chevronOpen)
          })
        ]
      }),
      open && panel && /* @__PURE__ */ jsxs39("div", {
        className: cx38(styles30.panel, softChrome && styles30.panelSoft, styles30.panelConnected),
        children: [
          panelLabel && /* @__PURE__ */ jsx50("div", {
            className: styles30.panelLabel,
            children: panelLabel
          }),
          /* @__PURE__ */ jsx50("div", {
            className: styles30.panelBody,
            children: panel
          })
        ]
      })
    ]
  });
}
// src/components/patterns/pricing-card.tsx
import { css as css40, cx as cx39 } from "styled-system/css";
import { jsx as jsx51, jsxs as jsxs40 } from "react/jsx-runtime";
"use client";
var styles31 = {
  root: css40({
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
  highlighted: css40({
    shadow: "md",
    borderColor: "colorPalette.7"
  }),
  badge: css40({
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
  name: css40({
    textAlign: "center",
    fontSize: "xl",
    fontWeight: "semibold",
    color: "colorPalette.11"
  }),
  description: css40({
    textAlign: "center",
    textStyle: "small",
    color: "fg.muted",
    mb: "4"
  }),
  priceArea: css40({
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    mb: "6"
  }),
  price: css40({
    fontSize: "4xl",
    fontWeight: "bold",
    color: "fg.default"
  }),
  interval: css40({
    color: "fg.muted"
  }),
  featureList: css40({
    listStyle: "none",
    p: "0",
    m: "0",
    display: "flex",
    flexDir: "column",
    gap: "2"
  }),
  featureItem: css40({
    display: "flex",
    flexDir: "row",
    alignItems: "center",
    gap: "2",
    textStyle: "small",
    color: "fg.default"
  }),
  checkmark: css40({
    color: "colorPalette.9",
    flexShrink: 0
  }),
  actionWrap: css40({
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
  return /* @__PURE__ */ jsxs40("div", {
    className: cx39(styles31.root, highlight && styles31.highlighted, className),
    children: [
      badge && /* @__PURE__ */ jsx51("span", {
        className: styles31.badge,
        style: {
          ...badgeBg ? { backgroundColor: badgeBg } : {},
          ...badgeColor ? { color: badgeColor } : {}
        },
        children: badge
      }),
      /* @__PURE__ */ jsx51("div", {
        className: styles31.name,
        style: accentColor ? { color: accentColor } : undefined,
        children: name
      }),
      description && /* @__PURE__ */ jsx51("div", {
        className: styles31.description,
        children: description
      }),
      /* @__PURE__ */ jsxs40("div", {
        className: styles31.priceArea,
        children: [
          /* @__PURE__ */ jsx51("span", {
            className: styles31.price,
            children: price
          }),
          interval && /* @__PURE__ */ jsxs40("span", {
            className: styles31.interval,
            children: [
              "/",
              interval
            ]
          })
        ]
      }),
      features && features.length > 0 && /* @__PURE__ */ jsx51("ul", {
        className: styles31.featureList,
        children: features.map((feature) => /* @__PURE__ */ jsxs40("li", {
          className: styles31.featureItem,
          children: [
            /* @__PURE__ */ jsx51("span", {
              className: styles31.checkmark,
              children: "✓"
            }),
            feature
          ]
        }, feature))
      }),
      action && /* @__PURE__ */ jsx51("div", {
        className: styles31.actionWrap,
        children: action
      })
    ]
  });
}
// src/components/patterns/resource-list.tsx
import { css as css41, cx as cx40 } from "styled-system/css";
import { jsx as jsx52, jsxs as jsxs41 } from "react/jsx-runtime";
"use client";
var styles32 = {
  root: css41({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  header: css41({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    paddingX: { base: "5", md: "6" },
    paddingY: { base: "5", md: "6" },
    bg: "app.surface.muted"
  }),
  titleBlock: css41({
    display: "flex",
    flexDirection: "column",
    gap: "1.5"
  }),
  title: css41({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css41({
    textStyle: "small",
    color: "app.text.muted"
  }),
  list: css41({
    listStyle: "none",
    padding: "0",
    margin: "0"
  }),
  item: css41({
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
  itemNoDivider: css41({
    borderBottomWidth: "0"
  }),
  icon: css41({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "10",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css41({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1"
  }),
  itemTitle: css41({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  itemDescription: css41({
    textStyle: "small",
    color: "app.text.muted"
  }),
  meta: css41({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  itemLink: css41({
    color: "inherit",
    textDecoration: "none"
  }),
  action: css41({
    display: "inline-flex",
    alignItems: "center"
  })
};
function ResourceList({
  title,
  description,
  actions,
  items,
  dividers = true,
  className
}) {
  return /* @__PURE__ */ jsxs41("section", {
    className: cx40(styles32.root, className),
    children: [
      (title || description || actions) && /* @__PURE__ */ jsxs41("div", {
        className: styles32.header,
        children: [
          /* @__PURE__ */ jsxs41("div", {
            className: styles32.titleBlock,
            children: [
              title && /* @__PURE__ */ jsx52("div", {
                className: styles32.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx52("div", {
                className: styles32.description,
                children: description
              })
            ]
          }),
          actions
        ]
      }),
      /* @__PURE__ */ jsx52("ul", {
        className: styles32.list,
        children: items.map((item, index) => {
          const content = /* @__PURE__ */ jsxs41("div", {
            className: styles32.copy,
            children: [
              /* @__PURE__ */ jsx52("div", {
                className: styles32.itemTitle,
                children: item.title
              }),
              item.description && /* @__PURE__ */ jsx52("div", {
                className: styles32.itemDescription,
                children: item.description
              }),
              item.meta && /* @__PURE__ */ jsx52("div", {
                className: styles32.meta,
                children: item.meta
              })
            ]
          });
          return /* @__PURE__ */ jsx52("li", {
            children: /* @__PURE__ */ jsxs41("div", {
              className: cx40(styles32.item, !dividers && styles32.itemNoDivider),
              children: [
                item.icon && /* @__PURE__ */ jsx52("div", {
                  className: styles32.icon,
                  children: item.icon
                }),
                item.href ? /* @__PURE__ */ jsx52("a", {
                  className: styles32.itemLink,
                  href: item.href,
                  children: content
                }) : content,
                item.action && /* @__PURE__ */ jsx52("div", {
                  className: styles32.action,
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
// src/components/patterns/search-picker-dialog.tsx
import { Portal as Portal4 } from "@ark-ui/react/portal";
import { Search, X as X3 } from "lucide-react";
import { useMemo as useMemo4, useState as useState5 } from "react";
import { css as css43, cx as cx42 } from "styled-system/css";

// src/components/patterns/selection-list.tsx
import { css as css42, cx as cx41 } from "styled-system/css";
import { jsx as jsx53, jsxs as jsxs42 } from "react/jsx-runtime";
"use client";
var styles33 = {
  root: css42({
    display: "grid",
    gap: "2"
  }),
  rootStacked: css42({
    gap: "0"
  }),
  item: css42({
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
  itemCompact: css42({
    paddingX: "3.5",
    paddingY: "3",
    gap: "2.5"
  }),
  itemSoft: css42({
    borderWidth: "0"
  }),
  itemStacked: css42({
    borderWidth: "0",
    borderRadius: "0",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    bg: "transparent",
    paddingX: "4",
    paddingY: "3.5",
    _hover: {
      borderColor: "app.border",
      bg: "app.canvas.subtle"
    },
    _lastOfType: {
      borderBottomWidth: "0"
    }
  }),
  itemSelected: css42({
    bg: "color-mix(in srgb, var(--colors-app-accent-alt-soft) 78%, var(--colors-app-surface) 22%)",
    borderColor: "color-mix(in srgb, var(--colors-app-accent-alt-border) 52%, var(--colors-app-border) 48%)",
    boxShadow: "none"
  }),
  itemSelectedSoft: css42({
    borderColor: "transparent",
    boxShadow: "none"
  }),
  itemSelectedStacked: css42({
    bg: "color-mix(in srgb, var(--colors-app-accent-alt-soft) 82%, var(--colors-app-surface) 18%)",
    borderColor: "color-mix(in srgb, var(--colors-app-accent-alt-border) 52%, var(--colors-app-border) 48%)",
    boxShadow: "none"
  }),
  body: css42({
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  icon: css42({
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
  iconCompact: css42({
    boxSize: "7",
    rounded: "lg"
  }),
  iconSoft: css42({
    borderWidth: "0",
    bg: "app.surface.muted"
  }),
  iconStacked: css42({
    borderWidth: "0",
    bg: "transparent"
  }),
  copy: css42({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  label: css42({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  labelCompact: css42({
    fontWeight: "700"
  }),
  description: css42({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  endSlot: css42({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    color: "app.text.subtle",
    flexShrink: 0
  })
};
function SelectionList({
  items,
  value,
  onValueChange,
  density = "default",
  chrome = "default",
  layout = "cards",
  className
}) {
  const compact = density === "compact";
  const softChrome = chrome === "soft";
  const stackedLayout = layout === "stacked";
  return /* @__PURE__ */ jsx53("div", {
    className: cx41(styles33.root, stackedLayout && styles33.rootStacked, className),
    children: items.map((item) => {
      const selected = item.value === value;
      return /* @__PURE__ */ jsxs42("button", {
        type: "button",
        disabled: item.disabled,
        onClick: () => onValueChange(item.value),
        className: cx41(styles33.item, compact && styles33.itemCompact, softChrome && styles33.itemSoft, stackedLayout && styles33.itemStacked, selected && styles33.itemSelected, selected && softChrome && styles33.itemSelectedSoft, selected && stackedLayout && styles33.itemSelectedStacked),
        children: [
          /* @__PURE__ */ jsxs42("div", {
            className: styles33.body,
            children: [
              item.icon && /* @__PURE__ */ jsx53("span", {
                className: cx41(styles33.icon, compact && styles33.iconCompact, softChrome && styles33.iconSoft, stackedLayout && styles33.iconStacked),
                children: item.icon
              }),
              /* @__PURE__ */ jsxs42("div", {
                className: styles33.copy,
                children: [
                  /* @__PURE__ */ jsx53("div", {
                    className: cx41(styles33.label, compact && styles33.labelCompact),
                    children: item.label
                  }),
                  item.description && /* @__PURE__ */ jsx53("div", {
                    className: styles33.description,
                    children: item.description
                  })
                ]
              })
            ]
          }),
          item.endSlot && /* @__PURE__ */ jsx53("div", {
            className: styles33.endSlot,
            children: item.endSlot
          })
        ]
      }, item.value);
    })
  });
}

// src/components/patterns/search-picker-dialog.tsx
import { jsx as jsx54, jsxs as jsxs43 } from "react/jsx-runtime";
"use client";
var styles34 = {
  content: css43({
    maxW: "3xl",
    w: "min(92vw, 56rem)"
  }),
  layout: css43({
    display: "grid",
    gap: "4"
  }),
  searchField: css43({
    display: "grid",
    gap: "3"
  }),
  searchInput: css43({
    pl: "10"
  }),
  searchIcon: css43({
    position: "absolute",
    left: "3.5",
    top: "50%",
    transform: "translateY(-50%)",
    color: "app.text.subtle",
    pointerEvents: "none"
  }),
  clearButton: css43({
    position: "absolute",
    right: "2.5",
    top: "50%",
    transform: "translateY(-50%)"
  }),
  searchWrap: css43({
    position: "relative"
  }),
  list: css43({
    maxH: "24rem",
    overflowY: "auto",
    pr: "1"
  }),
  footer: css43({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  helper: css43({
    textStyle: "caption",
    color: "app.text.subtle"
  })
};
function matchesItem(item, query) {
  if (!query)
    return true;
  const haystack = [
    typeof item.label === "string" ? item.label : "",
    typeof item.description === "string" ? item.description : "",
    ...item.keywords ?? []
  ].join(" ").toLowerCase();
  return haystack.includes(query);
}
function SearchPickerDialog({
  open,
  onOpenChange,
  title,
  description,
  searchLabel = "Search",
  searchPlaceholder = "Search options",
  value,
  onValueChange,
  items,
  emptyTitle = "No matching options",
  emptyDescription = "Try a different search term.",
  className
}) {
  const [query, setQuery] = useState5("");
  const filteredItems = useMemo4(() => items.filter((item) => matchesItem(item, query.trim().toLowerCase())), [items, query]);
  return /* @__PURE__ */ jsx54(exports_dialog.Root, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size: "lg",
    children: /* @__PURE__ */ jsxs43(Portal4, {
      children: [
        /* @__PURE__ */ jsx54(exports_dialog.Backdrop, {}),
        /* @__PURE__ */ jsx54(exports_dialog.Positioner, {
          children: /* @__PURE__ */ jsxs43(exports_dialog.Content, {
            className: cx42(styles34.content, className),
            children: [
              /* @__PURE__ */ jsxs43(exports_dialog.Header, {
                children: [
                  /* @__PURE__ */ jsx54(exports_dialog.Title, {
                    children: title
                  }),
                  description ? /* @__PURE__ */ jsx54(exports_dialog.Description, {
                    children: description
                  }) : null
                ]
              }),
              /* @__PURE__ */ jsxs43(exports_dialog.Body, {
                className: styles34.layout,
                children: [
                  /* @__PURE__ */ jsx54("div", {
                    className: styles34.searchField,
                    children: /* @__PURE__ */ jsx54(FormField, {
                      label: searchLabel,
                      children: /* @__PURE__ */ jsxs43("div", {
                        className: styles34.searchWrap,
                        children: [
                          /* @__PURE__ */ jsx54(Search, {
                            size: 16,
                            className: styles34.searchIcon
                          }),
                          /* @__PURE__ */ jsx54(Input, {
                            value: query,
                            onChange: (event) => setQuery(event.target.value),
                            placeholder: searchPlaceholder,
                            className: styles34.searchInput
                          }),
                          query ? /* @__PURE__ */ jsx54(Button, {
                            type: "button",
                            variant: "ghost",
                            size: "xs",
                            onClick: () => setQuery(""),
                            className: styles34.clearButton,
                            children: /* @__PURE__ */ jsx54(X3, {
                              size: 14
                            })
                          }) : null
                        ]
                      })
                    })
                  }),
                  /* @__PURE__ */ jsx54("div", {
                    className: styles34.list,
                    children: filteredItems.length > 0 ? /* @__PURE__ */ jsx54(SelectionList, {
                      items: filteredItems,
                      value,
                      onValueChange: (nextValue) => {
                        onValueChange(nextValue);
                        onOpenChange(false);
                      }
                    }) : /* @__PURE__ */ jsx54(EmptyState, {
                      icon: /* @__PURE__ */ jsx54(Search, {
                        size: 20
                      }),
                      title: emptyTitle,
                      description: emptyDescription,
                      className: css43({ py: "10" })
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsxs43(exports_dialog.Footer, {
                className: styles34.footer,
                children: [
                  /* @__PURE__ */ jsxs43("div", {
                    className: styles34.helper,
                    children: [
                      filteredItems.length,
                      " option",
                      filteredItems.length === 1 ? "" : "s"
                    ]
                  }),
                  /* @__PURE__ */ jsx54(Button, {
                    type: "button",
                    variant: "surface",
                    onClick: () => onOpenChange(false),
                    children: "Close"
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  });
}
// src/components/patterns/secondary-nav.tsx
import { css as css44, cx as cx43 } from "styled-system/css";
import { jsx as jsx55, jsxs as jsxs44, Fragment as Fragment6 } from "react/jsx-runtime";
"use client";
var styles35 = {
  root: css44({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    width: "100%"
  }),
  list: css44({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    padding: "0",
    margin: "0"
  }),
  item: css44({
    appearance: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    minHeight: "8",
    paddingX: "5",
    paddingY: "2",
    borderRadius: "xl",
    borderWidth: "0",
    color: "app.text.muted",
    bg: "app.canvas.subtle",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transitionProperty: "background-color, border-color, color",
    transitionDuration: "180ms",
    transitionTimingFunction: "ease",
    _hover: {
      bg: "app.surface.muted",
      color: "app.text"
    }
  }),
  itemActive: css44({
    bg: "app.accent",
    color: "white",
    boxShadow: "none"
  }),
  label: css44({
    textStyle: "caption",
    fontWeight: "700",
    letterSpacing: "0.01em"
  }),
  badge: css44({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "6",
    height: "6",
    paddingX: "2",
    borderRadius: "full",
    bg: "rgba(255, 255, 255, 0.18)",
    textStyle: "caption",
    color: "currentColor"
  }),
  trailing: css44({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  toolbarList: css44({
    gap: "5"
  }),
  toolbarItem: css44({
    minHeight: "auto",
    paddingX: "0",
    paddingY: "2",
    borderRadius: "0",
    borderWidth: "0",
    bg: "transparent",
    color: "app.text.subtle",
    _hover: {
      bg: "transparent",
      color: "app.text"
    }
  }),
  toolbarItemActive: css44({
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
  const content = /* @__PURE__ */ jsxs44(Fragment6, {
    children: [
      item.icon,
      /* @__PURE__ */ jsx55("span", {
        className: styles35.label,
        children: item.label
      }),
      item.badge && /* @__PURE__ */ jsx55("span", {
        className: styles35.badge,
        children: item.badge
      })
    ]
  });
  const className = cx43(styles35.item, variant === "toolbar" && styles35.toolbarItem, item.active && styles35.itemActive, item.active && variant === "toolbar" && styles35.toolbarItemActive);
  if (item.href) {
    return /* @__PURE__ */ jsx55("a", {
      className,
      href: item.href,
      "aria-current": item.active ? "page" : undefined,
      "data-tour-id": item.dataTourId,
      children: content
    });
  }
  return /* @__PURE__ */ jsx55("button", {
    type: "button",
    className,
    onClick: item.onClick,
    "data-tour-id": item.dataTourId,
    children: content
  });
}
function SecondaryNav({ items, trailing, variant = "pill", className }) {
  return /* @__PURE__ */ jsxs44("div", {
    className: cx43(styles35.root, className),
    children: [
      /* @__PURE__ */ jsx55("ul", {
        className: cx43(styles35.list, variant === "toolbar" && styles35.toolbarList),
        children: items.map((item) => /* @__PURE__ */ jsx55("li", {
          children: /* @__PURE__ */ jsx55(SecondaryNavEntry, {
            item,
            variant
          })
        }, item.id ?? item.href ?? item.label))
      }),
      trailing && /* @__PURE__ */ jsx55("div", {
        className: styles35.trailing,
        children: trailing
      })
    ]
  });
}
// src/components/patterns/secret-field.tsx
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { css as css45, cx as cx44 } from "styled-system/css";
import { jsx as jsx56, jsxs as jsxs45 } from "react/jsx-runtime";
"use client";
var styles36 = {
  root: css45({
    display: "flex",
    flexDirection: "column",
    gap: "2.5"
  }),
  labelRow: css45({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  label: css45({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css45({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css45({
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
  value: css45({
    flex: "1 1 auto",
    minWidth: 0,
    fontFamily: "mono",
    textStyle: "small",
    color: "app.text",
    wordBreak: "break-all"
  }),
  actionRow: css45({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1.5",
    flexShrink: 0
  }),
  iconButton: css45({
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
  return /* @__PURE__ */ jsxs45("div", {
    className: cx44(styles36.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx56("div", {
        className: styles36.labelRow,
        children: /* @__PURE__ */ jsxs45("div", {
          children: [
            label && /* @__PURE__ */ jsx56("div", {
              className: styles36.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx56("div", {
              className: styles36.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs45("div", {
        className: styles36.field,
        children: [
          /* @__PURE__ */ jsx56("div", {
            className: styles36.value,
            children: value
          }),
          /* @__PURE__ */ jsxs45("div", {
            className: styles36.actionRow,
            children: [
              actions,
              onToggleReveal && /* @__PURE__ */ jsx56(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onToggleReveal,
                title: revealed ? "Hide secret value" : "Show secret value",
                "aria-label": revealed ? "Hide secret value" : "Show secret value",
                className: styles36.iconButton,
                children: revealed ? /* @__PURE__ */ jsx56(EyeOff, {
                  size: 14
                }) : /* @__PURE__ */ jsx56(Eye, {
                  size: 14
                })
              }),
              onCopy && /* @__PURE__ */ jsx56(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onCopy,
                title: "Copy to clipboard",
                "aria-label": "Copy to clipboard",
                className: styles36.iconButton,
                children: copied ? /* @__PURE__ */ jsx56(Check, {
                  size: 14
                }) : /* @__PURE__ */ jsx56(Copy, {
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
import { css as css46, cx as cx45 } from "styled-system/css";
import { jsx as jsx57, jsxs as jsxs46 } from "react/jsx-runtime";
"use client";
var base3 = css46({
  px: "4",
  py: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: "1px"
});
var variants2 = {
  teal: css46({
    bg: "colorPalette.a2",
    borderColor: "colorPalette.4"
  }),
  wheat: css46({
    bg: "colorPalette.2",
    borderColor: "colorPalette.4"
  })
};
var badgeStyle = css46({
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
var titleStyle2 = css46({
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
  return /* @__PURE__ */ jsxs46("div", {
    className: cx45(base3, variants2[variant], className),
    children: [
      /* @__PURE__ */ jsxs46("div", {
        className: css46({ display: "flex", alignItems: "center", gap: "2" }),
        children: [
          icon && /* @__PURE__ */ jsx57("div", {
            className: badgeStyle,
            children: icon
          }),
          /* @__PURE__ */ jsx57("h3", {
            className: titleStyle2,
            children: title
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx57("div", {
        children: actions
      })
    ]
  });
}
// src/components/patterns/section-panel.tsx
import { css as css47, cx as cx46 } from "styled-system/css";
import { jsx as jsx58, jsxs as jsxs47 } from "react/jsx-runtime";
"use client";
var styles37 = {
  root: css47({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  default: css47({
    bg: "app.surface"
  }),
  muted: css47({
    bg: "app.surface.muted"
  }),
  flat: css47({
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    boxShadow: "{shadows.whisper}"
  }),
  workspace: css47({
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    borderRadius: "2xl",
    boxShadow: "{shadows.whisper}"
  }),
  header: css47({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    paddingX: { base: "5.5", md: "6.5" },
    paddingY: { base: "5", md: "5.5" }
  }),
  headerCompact: css47({
    gap: "3",
    paddingX: { base: "4", md: "4.5" },
    paddingY: { base: "4", md: "4.5" }
  }),
  headerWorkspace: css47({
    alignItems: "center",
    gap: "3",
    paddingX: { base: "4.5", md: "5" },
    paddingY: { base: "3.5", md: "3.75" },
    bg: "app.surface.muted",
    borderBottomWidth: "1px",
    borderBottomColor: "app.border"
  }),
  copy: css47({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    minWidth: 0
  }),
  copyCompact: css47({
    gap: "1"
  }),
  eyebrow: css47({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  eyebrowCompact: css47({
    letterSpacing: "0.18em"
  }),
  eyebrowWorkspace: css47({
    textStyle: "caption",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "app.text.muted"
  }),
  title: css47({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  titleCompact: css47({
    textStyle: "small",
    fontWeight: "700"
  }),
  titleWorkspace: css47({
    textStyle: "small",
    fontWeight: "700"
  }),
  description: css47({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "3xl",
    lineHeight: "1.65"
  }),
  descriptionCompact: css47({
    textStyle: "caption",
    lineHeight: "1.45",
    maxWidth: "2xl"
  }),
  descriptionWorkspace: css47({
    textStyle: "caption",
    lineHeight: "1.5",
    maxWidth: "none"
  }),
  meta: css47({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    color: "app.text.subtle",
    textStyle: "caption"
  }),
  actions: css47({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  actionsCompact: css47({
    gap: "2"
  }),
  body: css47({
    display: "flex",
    flexDirection: "column",
    gap: "4.5",
    paddingX: { base: "5.5", md: "6.5" },
    paddingY: { base: "5.5", md: "6" }
  }),
  bodyCompact: css47({
    gap: "3",
    paddingX: { base: "4", md: "4.5" },
    paddingY: { base: "4", md: "4.5" }
  }),
  bodyWorkspace: css47({
    gap: "4.5",
    paddingX: { base: "4.5", md: "5" },
    paddingY: { base: "4.5", md: "5" }
  }),
  footer: css47({
    paddingX: { base: "5.5", md: "6.5" },
    paddingY: "5",
    bg: "app.surface.muted",
    color: "app.text.muted"
  }),
  footerCompact: css47({
    paddingX: { base: "4", md: "4.5" },
    paddingY: "4"
  }),
  footerWorkspace: css47({
    paddingX: { base: "4.5", md: "5" },
    paddingY: { base: "3.75", md: "4" },
    bg: "app.surface",
    borderTopWidth: "1px",
    borderTopColor: "app.border"
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
  density = "default",
  className
}) {
  const hasHeader = Boolean(eyebrow || title || description || meta || actions);
  const hasBody = children !== undefined && children !== null;
  const hasFooter = footer !== undefined && footer !== null;
  const compact = density === "compact";
  const workspace = variant === "workspace";
  return /* @__PURE__ */ jsxs47("section", {
    className: cx46(styles37.root, styles37[variant], className),
    children: [
      hasHeader && /* @__PURE__ */ jsxs47("div", {
        className: cx46(styles37.header, compact && styles37.headerCompact, workspace && styles37.headerWorkspace),
        children: [
          /* @__PURE__ */ jsxs47("div", {
            className: cx46(styles37.copy, compact && styles37.copyCompact),
            children: [
              eyebrow && /* @__PURE__ */ jsx58("div", {
                className: cx46(styles37.eyebrow, compact && styles37.eyebrowCompact, workspace && styles37.eyebrowWorkspace),
                children: eyebrow
              }),
              title && /* @__PURE__ */ jsx58("div", {
                className: cx46(styles37.title, compact && styles37.titleCompact, workspace && styles37.titleWorkspace),
                children: title
              }),
              description && /* @__PURE__ */ jsx58("div", {
                className: cx46(styles37.description, compact && styles37.descriptionCompact, workspace && styles37.descriptionWorkspace),
                children: description
              }),
              meta && /* @__PURE__ */ jsx58("div", {
                className: styles37.meta,
                children: meta
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx58("div", {
            className: cx46(styles37.actions, compact && styles37.actionsCompact),
            children: actions
          })
        ]
      }),
      hasBody && /* @__PURE__ */ jsx58("div", {
        className: cx46(styles37.body, compact && styles37.bodyCompact, workspace && styles37.bodyWorkspace),
        children
      }),
      hasFooter && /* @__PURE__ */ jsx58("div", {
        className: cx46(styles37.footer, compact && styles37.footerCompact, workspace && styles37.footerWorkspace),
        children: footer
      })
    ]
  });
}
// src/components/patterns/selection-toolbar.tsx
import { css as css48, cx as cx47 } from "styled-system/css";
import { jsx as jsx59, jsxs as jsxs48 } from "react/jsx-runtime";
"use client";
var styles38 = {
  root: css48({
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
  rootSoft: css48({
    borderWidth: "0",
    boxShadow: "none"
  }),
  rootFlat: css48({
    borderColor: "app.border",
    bg: "app.canvas.subtle",
    boxShadow: "none"
  }),
  copy: css48({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  summary: css48({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css48({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  actions: css48({
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
  chrome = "default",
  className
}) {
  return /* @__PURE__ */ jsxs48("section", {
    className: cx47(styles38.root, chrome === "soft" && styles38.rootSoft, chrome === "flat" && styles38.rootFlat, className),
    children: [
      /* @__PURE__ */ jsxs48("div", {
        className: styles38.copy,
        children: [
          /* @__PURE__ */ jsx59("div", {
            className: styles38.summary,
            children: summary
          }),
          description && /* @__PURE__ */ jsx59("div", {
            className: styles38.description,
            children: description
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx59("div", {
        className: styles38.actions,
        children: actions
      })
    ]
  });
}
// src/components/patterns/settings-section-nav.tsx
import { css as css49, cx as cx48 } from "styled-system/css";
import { jsx as jsx60, jsxs as jsxs49 } from "react/jsx-runtime";
"use client";
var styles39 = {
  root: css49({
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
  title: css49({
    textStyle: "sectionTitle",
    color: "app.text",
    paddingX: "1"
  }),
  list: css49({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    padding: 0,
    margin: 0
  }),
  item: css49({
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
  itemActive: css49({
    bg: "app.nav.active",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  icon: css49({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css49({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css49({
    textStyle: "toolbarLabel",
    color: "currentColor"
  }),
  description: css49({
    textStyle: "small",
    color: "app.text.subtle"
  }),
  footer: css49({
    paddingTop: "3",
    borderTopWidth: "1px",
    borderColor: "app.border"
  }),
  rootTabs: css49({
    padding: "0",
    borderWidth: "0",
    bg: "transparent",
    boxShadow: "none",
    gap: "0"
  }),
  listTabs: css49({
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1.5"
  }),
  itemTabs: css49({
    width: "auto",
    gridTemplateColumns: "minmax(0, 1fr)",
    gap: "0",
    paddingX: "3",
    paddingY: "1.5",
    rounded: "xl",
    bg: "app.surface.muted",
    borderColor: "app.border"
  }),
  itemActiveTabs: css49({
    bg: "app.surface",
    borderColor: "app.border.strong",
    color: "app.text",
    boxShadow: "{shadows.whisper}"
  }),
  copyTabs: css49({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0"
  }),
  labelTabs: css49({
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
  return /* @__PURE__ */ jsxs49("nav", {
    className: cx48(styles39.root, isTabs && styles39.rootTabs, className),
    "aria-label": "Settings Sections",
    children: [
      title && /* @__PURE__ */ jsx60("div", {
        className: styles39.title,
        children: title
      }),
      /* @__PURE__ */ jsx60("ul", {
        className: cx48(styles39.list, isTabs && styles39.listTabs),
        children: items.map((item, index) => /* @__PURE__ */ jsx60("li", {
          children: /* @__PURE__ */ jsxs49("button", {
            type: "button",
            className: cx48(styles39.item, isTabs && styles39.itemTabs, item.active && styles39.itemActive, item.active && isTabs && styles39.itemActiveTabs),
            onClick: item.onClick,
            "aria-current": item.active ? "page" : undefined,
            children: [
              showIcons && !isTabs && item.icon && /* @__PURE__ */ jsx60("span", {
                className: styles39.icon,
                children: item.icon
              }),
              /* @__PURE__ */ jsxs49("span", {
                className: cx48(styles39.copy, isTabs && styles39.copyTabs),
                children: [
                  /* @__PURE__ */ jsx60("span", {
                    className: cx48(styles39.label, isTabs && styles39.labelTabs),
                    children: item.label
                  }),
                  !isTabs && item.description && /* @__PURE__ */ jsx60("span", {
                    className: styles39.description,
                    children: item.description
                  })
                ]
              })
            ]
          })
        }, item.id ?? `${item.label}-${index}`))
      }),
      footer && !isTabs && /* @__PURE__ */ jsx60("div", {
        className: styles39.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/sidebar-nav.tsx
import { css as css50, cx as cx49 } from "styled-system/css";
import { jsx as jsx61, jsxs as jsxs50, Fragment as Fragment7 } from "react/jsx-runtime";
"use client";
var styles40 = {
  root: css50({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "4"
  }),
  brand: css50({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  sections: css50({
    display: "flex",
    flexDirection: "column",
    gap: "5.5",
    flex: "1"
  }),
  section: css50({
    display: "flex",
    flexDirection: "column",
    gap: "2"
  }),
  sectionTitle: css50({
    textStyle: "eyebrow",
    color: "app.text.subtle",
    paddingX: "3.5"
  }),
  list: css50({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "3.5",
    padding: "0",
    margin: "0"
  }),
  item: css50({
    appearance: "none",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    alignItems: "center",
    gap: "4",
    paddingX: "5",
    paddingY: "4",
    borderRadius: "2xl",
    color: "app.text.muted",
    bg: "transparent",
    textAlign: "left",
    textDecoration: "none",
    transitionProperty: "background-color, color, box-shadow, transform",
    transitionDuration: "180ms",
    transitionTimingFunction: "ease",
    _hover: {
      bg: "app.nav.active",
      color: "app.text",
      boxShadow: "{shadows.whisper}",
      "& [data-sidebar-icon]": {
        transform: "translateX(6px)",
        color: "app.accent"
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
  itemActive: css50({
    bg: "app.nav.active",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  itemIcon: css50({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "5.5",
    color: "app.text.subtle",
    transition: "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), color 180ms ease"
  }),
  itemText: css50({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  itemLabel: css50({
    fontFamily: "display",
    fontSize: "1.05rem",
    lineHeight: "1.32",
    color: "currentColor",
    fontWeight: "600",
    letterSpacing: "-0.015em"
  }),
  itemDescription: css50({
    textStyle: "small",
    color: "app.text.subtle",
    lineHeight: "1.45"
  }),
  itemEnd: css50({
    display: "inline-flex",
    alignItems: "center",
    gap: "2"
  }),
  badge: css50({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "6.5",
    height: "6.5",
    paddingX: "2",
    borderRadius: "full",
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    color: "app.text",
    textStyle: "caption"
  }),
  footer: css50({
    paddingTop: "5"
  })
};
function SidebarNavEntry({
  item,
  renderItem,
  showDescriptions
}) {
  const content = /* @__PURE__ */ jsxs50(Fragment7, {
    children: [
      item.icon && /* @__PURE__ */ jsx61("span", {
        className: styles40.itemIcon,
        "data-sidebar-icon": "",
        children: item.icon
      }),
      /* @__PURE__ */ jsxs50("span", {
        className: styles40.itemText,
        children: [
          /* @__PURE__ */ jsx61("span", {
            className: styles40.itemLabel,
            children: item.label
          }),
          showDescriptions && item.description && /* @__PURE__ */ jsx61("span", {
            className: styles40.itemDescription,
            children: item.description
          })
        ]
      }),
      /* @__PURE__ */ jsxs50("span", {
        className: styles40.itemEnd,
        children: [
          item.badge && /* @__PURE__ */ jsx61("span", {
            className: styles40.badge,
            children: item.badge
          }),
          item.endSlot
        ]
      })
    ]
  });
  const className = cx49(styles40.item, item.active && styles40.itemActive);
  const ariaCurrent = item.active ? "page" : undefined;
  if (renderItem) {
    return renderItem({ item, className, content, ariaCurrent });
  }
  if (item.href) {
    return /* @__PURE__ */ jsx61("a", {
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
  return /* @__PURE__ */ jsx61("button", {
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
  return /* @__PURE__ */ jsxs50("nav", {
    className: cx49(styles40.root, className),
    "aria-label": "Sidebar Navigation",
    children: [
      brand && /* @__PURE__ */ jsx61("div", {
        className: styles40.brand,
        children: brand
      }),
      /* @__PURE__ */ jsx61("div", {
        className: styles40.sections,
        children: sections.map((section, index) => /* @__PURE__ */ jsxs50("section", {
          className: styles40.section,
          children: [
            showSectionTitles && section.title && /* @__PURE__ */ jsx61("p", {
              className: styles40.sectionTitle,
              children: section.title
            }),
            /* @__PURE__ */ jsx61("ul", {
              className: styles40.list,
              children: section.items.map((item, itemIndex) => /* @__PURE__ */ jsx61("li", {
                children: /* @__PURE__ */ jsx61(SidebarNavEntry, {
                  item,
                  renderItem,
                  showDescriptions
                })
              }, item.id ?? item.href ?? `${item.label}-${itemIndex}`))
            })
          ]
        }, section.title ?? index))
      }),
      footer && /* @__PURE__ */ jsx61("div", {
        className: styles40.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/slide-over.tsx
import { Portal as Portal5 } from "@ark-ui/react/portal";
import { css as css51, cx as cx50 } from "styled-system/css";
import { jsx as jsx62, jsxs as jsxs51, Fragment as Fragment8 } from "react/jsx-runtime";
"use client";
var widthBySize = {
  md: "38rem",
  lg: "50rem",
  xl: "66rem"
};
var defaultAsideWidth = "16.5rem";
var styles41 = {
  backdrop: css51({
    bg: "rgba(16, 20, 22, 0.18)",
    backdropFilter: "none",
    _open: {
      animationDuration: "240ms"
    },
    _closed: {
      animationDuration: "180ms"
    }
  }),
  positioner: css51({
    position: "fixed",
    inset: "0",
    zIndex: "modal",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "stretch",
    pointerEvents: "none"
  }),
  content: css51({
    "--slide-over-panel-min-width": "0px",
    "--slide-over-panel-max-width": widthBySize.xl,
    "--slide-over-stacked-min-width": "0px",
    "--slide-over-stacked-max-width": widthBySize.xl,
    "--slide-over-aside-width": defaultAsideWidth,
    width: {
      base: "100vw",
      lg: "min(calc(100vw - 1.5rem), var(--slide-over-stacked-max-width))",
      xl: "min(calc(100vw - 1.5rem), var(--slide-over-panel-max-width))"
    },
    minW: {
      base: "100vw",
      lg: "min(calc(100vw - 1.5rem), var(--slide-over-stacked-min-width))",
      xl: "min(calc(100vw - 1.5rem), var(--slide-over-panel-min-width))"
    },
    height: { base: "100dvh", lg: "calc(100dvh - 1.5rem)" },
    maxW: {
      base: "100vw",
      lg: "var(--slide-over-stacked-max-width)",
      xl: "var(--slide-over-panel-max-width)"
    },
    my: { base: "0", lg: "3" },
    mr: { base: "0", lg: "3" },
    rounded: { base: "0", lg: "2xl" },
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.float}",
    overflow: "hidden",
    pointerEvents: "auto",
    willChange: "transform, opacity",
    _open: {
      animationName: {
        base: "slide-from-right-full, fade-in",
        _rtl: "slide-from-left-full, fade-in"
      },
      animationDuration: "440ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
    },
    _closed: {
      animationName: {
        base: "slide-to-right-full, fade-out",
        _rtl: "slide-to-left-full, fade-out"
      },
      animationDuration: "320ms",
      animationTimingFunction: "cubic-bezier(0.4, 0, 1, 1)"
    }
  }),
  header: css51({
    display: "grid",
    gap: "3",
    borderBottomWidth: "1px",
    borderBottomColor: "app.border",
    px: { base: "1.375rem", md: "1.625rem" },
    pt: { base: "1.375rem", md: "1.625rem" },
    pb: "1.125rem"
  }),
  headerRow: css51({
    display: "grid",
    gap: "3",
    gridTemplateColumns: { base: "1fr", md: "minmax(0, 1fr) auto" },
    alignItems: "start",
    minWidth: 0
  }),
  headerCopy: css51({
    display: "flex",
    gap: "3",
    minWidth: 0
  }),
  icon: css51({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "11",
    rounded: "2xl",
    bg: "app.surface.muted",
    borderWidth: "1px",
    borderColor: "app.border",
    color: "app.accent",
    flexShrink: 0
  }),
  copy: css51({
    display: "grid",
    gap: "1.5",
    minWidth: 0
  }),
  eyebrow: css51({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  description: css51({
    textStyle: "small",
    color: "app.text.muted",
    lineHeight: "1.65",
    maxW: "38rem"
  }),
  actions: css51({
    display: "flex",
    flexWrap: "wrap",
    gap: "2",
    justifySelf: { base: "start", md: "end" }
  }),
  closeButton: css51({
    position: "absolute",
    top: "4",
    right: "4",
    zIndex: 2
  }),
  body: css51({
    display: "flex",
    flexDirection: "column",
    gap: "1.375rem",
    flex: "1",
    minH: 0,
    overflowY: "auto",
    px: { base: "1.375rem", md: "1.625rem" },
    py: { base: "1.375rem", md: "1.5rem" }
  }),
  splitShell: css51({
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      xl: "var(--slide-over-aside-width) minmax(0, 1fr)"
    },
    height: "100%",
    minH: 0
  }),
  splitAside: css51({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1.125rem",
    bg: "app.surface",
    borderRightWidth: { base: "0", xl: "1px" },
    borderBottomWidth: { base: "1px", xl: "0" },
    borderColor: "app.border",
    px: { base: "1.375rem", md: "1.625rem" },
    py: { base: "1.375rem", md: "1.625rem" },
    minH: 0
  }),
  splitMain: css51({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    minH: 0
  }),
  footer: css51({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4",
    flexWrap: "wrap",
    borderTopWidth: "1px",
    borderTopColor: "app.border",
    px: { base: "1.375rem", md: "1.625rem" },
    py: "1.125rem"
  }),
  footerHint: css51({
    textStyle: "caption",
    color: "app.text.subtle",
    maxW: "24rem"
  }),
  footerActions: css51({
    display: "flex",
    flexWrap: "wrap",
    gap: "2",
    marginLeft: "auto"
  })
};
function SlideOver({
  open,
  onOpenChange,
  title,
  description,
  eyebrow,
  icon,
  actions,
  aside,
  asideFooter,
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
  layout = "auto",
  panelMinWidth,
  panelMaxWidth,
  asideWidth,
  contentMinWidth,
  contentMaxWidth,
  hideFooter = false,
  closeButtonTourId
}) {
  const resolvedAsideWidth = asideWidth ?? defaultAsideWidth;
  const resolvedLayout = layout === "split" ? aside ? "split" : "single" : layout === "single" ? "single" : aside ? "split" : "single";
  const resolvedPanelMaxWidth = panelMaxWidth ?? (contentMaxWidth ? resolvedLayout === "split" ? `calc(${contentMaxWidth} + ${resolvedAsideWidth})` : contentMaxWidth : widthBySize[size]);
  const resolvedPanelMinWidth = panelMinWidth ?? (contentMinWidth ? resolvedLayout === "split" ? `calc(${contentMinWidth} + ${resolvedAsideWidth})` : contentMinWidth : "0px");
  const resolvedStackedMaxWidth = resolvedLayout === "split" && contentMaxWidth ? contentMaxWidth : resolvedPanelMaxWidth;
  const resolvedStackedMinWidth = resolvedLayout === "split" && contentMinWidth ? contentMinWidth : resolvedPanelMinWidth;
  const renderedFooter = footer ? /* @__PURE__ */ jsx62(exports_drawer.Footer, {
    children: footer
  }) : /* @__PURE__ */ jsxs51(exports_drawer.Footer, {
    className: styles41.footer,
    children: [
      footerHint ? /* @__PURE__ */ jsx62("div", {
        className: styles41.footerHint,
        children: footerHint
      }) : /* @__PURE__ */ jsx62("div", {}),
      /* @__PURE__ */ jsxs51("div", {
        className: styles41.footerActions,
        children: [
          /* @__PURE__ */ jsx62(Button, {
            variant: "outline",
            size: "sm",
            onClick: () => {
              onCancel?.();
              onOpenChange(false);
            },
            children: cancelLabel
          }),
          onSubmit ? /* @__PURE__ */ jsx62(Button, {
            variant: "brand",
            size: "sm",
            onClick: onSubmit,
            disabled: disableSubmit,
            loading: submitting,
            children: submitLabel
          }) : null
        ]
      })
    ]
  });
  const renderedHeader = /* @__PURE__ */ jsx62(exports_drawer.Header, {
    className: styles41.header,
    children: /* @__PURE__ */ jsxs51("div", {
      className: styles41.headerRow,
      children: [
        /* @__PURE__ */ jsxs51("div", {
          className: styles41.headerCopy,
          children: [
            icon ? /* @__PURE__ */ jsx62("div", {
              className: styles41.icon,
              children: icon
            }) : null,
            /* @__PURE__ */ jsxs51("div", {
              className: styles41.copy,
              children: [
                eyebrow ? /* @__PURE__ */ jsx62("div", {
                  className: styles41.eyebrow,
                  children: eyebrow
                }) : null,
                /* @__PURE__ */ jsx62(exports_drawer.Title, {
                  children: title
                }),
                description ? /* @__PURE__ */ jsx62(exports_drawer.Description, {
                  className: styles41.description,
                  children: description
                }) : null
              ]
            })
          ]
        }),
        actions ? /* @__PURE__ */ jsx62("div", {
          className: styles41.actions,
          children: actions
        }) : null
      ]
    })
  });
  return /* @__PURE__ */ jsx62(exports_drawer.Root, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    placement: "end",
    size: resolvedLayout === "split" ? "full" : size,
    children: /* @__PURE__ */ jsxs51(Portal5, {
      children: [
        /* @__PURE__ */ jsx62(exports_drawer.Backdrop, {
          className: styles41.backdrop
        }),
        /* @__PURE__ */ jsx62(exports_drawer.Positioner, {
          className: styles41.positioner,
          children: /* @__PURE__ */ jsx62(exports_drawer.Content, {
            style: {
              ["--slide-over-panel-min-width"]: resolvedPanelMinWidth,
              ["--slide-over-panel-max-width"]: resolvedPanelMaxWidth,
              ["--slide-over-stacked-min-width"]: resolvedStackedMinWidth,
              ["--slide-over-stacked-max-width"]: resolvedStackedMaxWidth,
              ["--slide-over-aside-width"]: resolvedAsideWidth
            },
            className: cx50(styles41.content, className),
            children: resolvedLayout === "split" && aside ? /* @__PURE__ */ jsxs51("div", {
              className: styles41.splitShell,
              children: [
                /* @__PURE__ */ jsxs51("div", {
                  className: styles41.splitAside,
                  children: [
                    /* @__PURE__ */ jsx62("div", {
                      children: aside
                    }),
                    asideFooter
                  ]
                }),
                /* @__PURE__ */ jsxs51("div", {
                  className: styles41.splitMain,
                  children: [
                    /* @__PURE__ */ jsx62(exports_drawer.CloseTrigger, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx62(CloseButton, {
                        "data-tour-id": closeButtonTourId,
                        className: styles41.closeButton,
                        size: "sm",
                        "aria-label": "Close panel"
                      })
                    }),
                    renderedHeader,
                    /* @__PURE__ */ jsx62(exports_drawer.Body, {
                      className: cx50(styles41.body, bodyClassName),
                      children
                    }),
                    hideFooter ? null : renderedFooter
                  ]
                })
              ]
            }) : /* @__PURE__ */ jsxs51(Fragment8, {
              children: [
                /* @__PURE__ */ jsx62(exports_drawer.CloseTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx62(CloseButton, {
                    "data-tour-id": closeButtonTourId,
                    className: styles41.closeButton,
                    size: "sm",
                    "aria-label": "Close panel"
                  })
                }),
                renderedHeader,
                /* @__PURE__ */ jsx62(exports_drawer.Body, {
                  className: cx50(styles41.body, bodyClassName),
                  children
                }),
                hideFooter ? null : renderedFooter
              ]
            })
          })
        })
      ]
    })
  });
}
// src/components/patterns/status-banner.tsx
import { css as css52, cx as cx51 } from "styled-system/css";
import { jsx as jsx63, jsxs as jsxs52 } from "react/jsx-runtime";
"use client";
var styles42 = {
  root: css52({
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    alignItems: "flex-start",
    gap: "3",
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px"
  }),
  iconWrap: css52({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "full",
    borderWidth: "1px",
    flexShrink: 0
  }),
  content: css52({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "3",
    minWidth: 0
  }),
  copy: css52({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  title: css52({
    textStyle: "small",
    fontWeight: "600"
  }),
  description: css52({
    textStyle: "small",
    opacity: 0.92
  }),
  actions: css52({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  info: css52({
    bg: "bg.info",
    borderColor: "border.info",
    color: "fg.info"
  }),
  success: css52({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  warning: css52({
    bg: "bg.warning",
    borderColor: "border.warning",
    color: "fg.warning"
  }),
  error: css52({
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
  return /* @__PURE__ */ jsxs52("section", {
    role: tone === "error" ? "alert" : "status",
    className: cx51(styles42.root, styles42[tone], className),
    children: [
      icon && /* @__PURE__ */ jsx63("div", {
        className: cx51(styles42.iconWrap, styles42[tone]),
        children: icon
      }),
      /* @__PURE__ */ jsxs52("div", {
        className: styles42.content,
        children: [
          /* @__PURE__ */ jsxs52("div", {
            className: styles42.copy,
            children: [
              /* @__PURE__ */ jsx63("div", {
                className: styles42.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx63("div", {
                className: styles42.description,
                children: description
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx63("div", {
            className: styles42.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
// src/components/patterns/status-state.tsx
import { AlertTriangle, Inbox } from "lucide-react";
import { css as css54, cx as cx53 } from "styled-system/css";

// src/components/patterns/support-panel.tsx
import { css as css53, cx as cx52 } from "styled-system/css";
import { jsx as jsx64, jsxs as jsxs53 } from "react/jsx-runtime";
"use client";
var styles43 = {
  root: css53({
    display: "grid",
    gridTemplateColumns: { base: "1fr", lg: "minmax(0, 1fr) auto" },
    gap: "4",
    padding: { base: "5", md: "5.5" },
    borderRadius: "l3",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  rootAccent: css53({
    position: "relative",
    overflow: "hidden",
    borderWidth: "1px",
    borderColor: "color-mix(in srgb, var(--colors-app-accent-alt-border) 58%, var(--colors-app-border) 42%)",
    bg: "linear-gradient(145deg, color-mix(in srgb, var(--colors-app-accent-soft) 74%, var(--colors-app-surface) 26%) 0%, color-mix(in srgb, var(--colors-app-accent-alt-soft) 88%, var(--colors-app-surface) 12%) 100%)",
    boxShadow: "{shadows.panel}",
    _before: {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "3px",
      background: "linear-gradient(90deg, var(--colors-app-accent) 0%, var(--colors-app-accent-alt) 100%)"
    }
  }),
  copy: css53({
    display: "flex",
    flexDirection: "column",
    gap: "2.5"
  }),
  eyebrow: css53({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  eyebrowAccent: css53({
    color: "app.accentAlt.text"
  }),
  title: css53({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  titleAccent: css53({
    color: "app.text"
  }),
  description: css53({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "2xl",
    lineHeight: "1.6"
  }),
  descriptionAccent: css53({
    color: "app.text.muted"
  }),
  actions: css53({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  aside: css53({
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
  className,
  titleClassName,
  descriptionClassName,
  copyClassName
}) {
  return /* @__PURE__ */ jsxs53("section", {
    className: cx52(styles43.root, tone === "accent" && styles43.rootAccent, className),
    children: [
      /* @__PURE__ */ jsxs53("div", {
        className: cx52(styles43.copy, copyClassName),
        children: [
          eyebrow && /* @__PURE__ */ jsx64("div", {
            className: cx52(styles43.eyebrow, tone === "accent" && styles43.eyebrowAccent),
            children: eyebrow
          }),
          /* @__PURE__ */ jsx64("div", {
            className: cx52(styles43.title, tone === "accent" && styles43.titleAccent, titleClassName),
            children: title
          }),
          description && /* @__PURE__ */ jsx64("div", {
            className: cx52(styles43.description, tone === "accent" && styles43.descriptionAccent, descriptionClassName),
            children: description
          }),
          actions && /* @__PURE__ */ jsx64("div", {
            className: styles43.actions,
            children: actions
          })
        ]
      }),
      aside && /* @__PURE__ */ jsx64("div", {
        className: styles43.aside,
        children: aside
      })
    ]
  });
}

// src/components/patterns/status-state.tsx
import { jsx as jsx65 } from "react/jsx-runtime";
"use client";
var styles44 = {
  shell: css54({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }),
  shellPage: css54({
    minH: "60vh",
    px: "4"
  }),
  shellSection: css54({
    minH: "13rem",
    px: "1",
    py: "2"
  }),
  panel: css54({
    width: "100%",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    boxShadow: "none"
  }),
  panelPage: css54({
    maxW: "38rem"
  }),
  panelSection: css54({
    maxW: "34rem"
  }),
  panelError: css54({
    borderColor: "border.error"
  }),
  panelWarning: css54({
    borderColor: "border.warning"
  }),
  aside: css54({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    color: "app.accent",
    borderRadius: "full"
  }),
  asidePage: css54({
    boxSize: "14"
  }),
  asideSection: css54({
    boxSize: "12"
  }),
  asideError: css54({
    borderColor: "border.error",
    bg: "bg.error",
    color: "fg.error"
  }),
  asideWarning: css54({
    borderColor: "border.warning",
    bg: "bg.warning",
    color: "fg.warning"
  }),
  asideLoading: css54({
    color: "app.accent"
  })
};
function getDefaultEyebrow(layout, tone) {
  if (tone === "loading") {
    return "Loading";
  }
  if (tone === "error") {
    return "Attention";
  }
  if (tone === "warning") {
    return "Heads up";
  }
  return layout === "page" ? "Status" : "Empty";
}
function getDefaultIcon(layout, tone) {
  if (tone === "loading") {
    return /* @__PURE__ */ jsx65(Spinner, {
      size: layout === "page" ? "lg" : "sm"
    });
  }
  if (tone === "error" || tone === "warning") {
    return /* @__PURE__ */ jsx65(AlertTriangle, {
      size: 18
    });
  }
  return /* @__PURE__ */ jsx65(Inbox, {
    size: 18
  });
}
function StatusState({
  title,
  description,
  actions,
  eyebrow,
  tone = "default",
  icon,
  layout = "section",
  className,
  panelClassName
}) {
  const pageLayout = layout === "page";
  const statusIcon = icon ?? getDefaultIcon(layout, tone);
  return /* @__PURE__ */ jsx65("div", {
    className: cx53(styles44.shell, pageLayout ? styles44.shellPage : styles44.shellSection, className),
    children: /* @__PURE__ */ jsx65(SupportPanel, {
      eyebrow: eyebrow ?? getDefaultEyebrow(layout, tone),
      title,
      description,
      actions,
      aside: statusIcon ? /* @__PURE__ */ jsx65("div", {
        className: cx53(styles44.aside, pageLayout ? styles44.asidePage : styles44.asideSection, tone === "error" && styles44.asideError, tone === "warning" && styles44.asideWarning, tone === "loading" && styles44.asideLoading),
        children: statusIcon
      }) : undefined,
      className: cx53(styles44.panel, pageLayout ? styles44.panelPage : styles44.panelSection, tone === "error" && styles44.panelError, tone === "warning" && styles44.panelWarning, panelClassName)
    })
  });
}
// src/components/patterns/step-card.tsx
import { css as css55, cx as cx54 } from "styled-system/css";
import { jsx as jsx66, jsxs as jsxs54 } from "react/jsx-runtime";
"use client";
var styles45 = {
  root: css55({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3.5",
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    rounded: "l3",
    p: "4",
    boxShadow: "{shadows.whisper}"
  }),
  number: css55({
    w: "7.5",
    h: "7.5",
    rounded: "xl",
    bg: "app.accent.soft",
    color: "app.accent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "label",
    flexShrink: 0,
    fontWeight: "700"
  }),
  content: css55({
    flex: 1,
    minW: 0,
    paddingRight: "2"
  }),
  title: css55({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  description: css55({
    textStyle: "caption",
    color: "app.text.muted",
    mt: "1.25",
    lineHeight: "1.55"
  }),
  endSlot: css55({
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
  className,
  numberClassName,
  titleClassName,
  descriptionClassName
}) {
  return /* @__PURE__ */ jsxs54("div", {
    className: cx54(styles45.root, className),
    children: [
      /* @__PURE__ */ jsxs54("div", {
        className: css55({ display: "flex", alignItems: "center", gap: "4", minWidth: 0, flex: "1" }),
        children: [
          /* @__PURE__ */ jsx66("div", {
            className: cx54(styles45.number, numberClassName),
            children: step
          }),
          /* @__PURE__ */ jsxs54("div", {
            className: styles45.content,
            children: [
              /* @__PURE__ */ jsx66("div", {
                className: cx54(styles45.title, titleClassName),
                children: title
              }),
              description && /* @__PURE__ */ jsx66("div", {
                className: cx54(styles45.description, descriptionClassName),
                children: description
              }),
              children
            ]
          })
        ]
      }),
      endSlot && /* @__PURE__ */ jsx66("div", {
        className: styles45.endSlot,
        children: endSlot
      })
    ]
  });
}
// src/components/patterns/streaming-status.tsx
import { css as css56, cx as cx55 } from "styled-system/css";
import { jsx as jsx67, jsxs as jsxs55 } from "react/jsx-runtime";
"use client";
var styles46 = {
  root: css56({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "4"
  }),
  compactRoot: css56({
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm"
  }),
  header: css56({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "3"
  }),
  headerLeft: css56({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  statusLabel: css56({
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.default"
  }),
  statusLabelError: css56({
    color: "fg.error"
  }),
  progressHint: css56({
    textStyle: "xs",
    color: "fg.muted"
  }),
  trackWrap: css56({
    mb: "3"
  }),
  track: css56({
    h: "2",
    bg: "border.muted",
    rounded: "full",
    overflow: "hidden"
  }),
  range: css56({
    h: "full",
    bg: "colorPalette.9",
    transition: "width 0.3s ease-out",
    rounded: "full"
  }),
  errorBox: css56({
    p: "3",
    bg: "bg.error",
    borderWidth: "1px",
    borderColor: "border.error",
    rounded: "l2",
    display: "flex",
    alignItems: "flex-start",
    gap: "2"
  }),
  errorText: css56({
    textStyle: "sm",
    color: "fg.error"
  }),
  successBox: css56({
    p: "3",
    bg: "bg.success",
    borderWidth: "1px",
    borderColor: "border.success",
    rounded: "l2",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }),
  successText: css56({
    textStyle: "sm",
    color: "fg.success"
  }),
  stepsGrid: css56({
    mt: "4",
    display: "grid",
    gap: "2"
  }),
  step: css56({
    textAlign: "center",
    p: "2",
    rounded: "l2",
    borderWidth: "1px",
    transition: "all 0.15s",
    textStyle: "xs"
  }),
  stepActive: css56({
    bg: "colorPalette.2",
    borderColor: "colorPalette.6",
    color: "colorPalette.11"
  }),
  stepDone: css56({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  stepPending: css56({
    bg: "gray.subtle.bg",
    borderColor: "border.muted",
    color: "fg.muted"
  }),
  abortButton: css56({
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
  iconWrap: css56({
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
    return /* @__PURE__ */ jsxs55("div", {
      className: cx55(styles46.compactRoot, className),
      children: [
        isActive && activeIcon && /* @__PURE__ */ jsx67("span", {
          className: styles46.iconWrap,
          children: activeIcon
        }),
        isComplete && completeIcon && /* @__PURE__ */ jsx67("span", {
          className: styles46.iconWrap,
          children: completeIcon
        }),
        error && errorIcon && /* @__PURE__ */ jsx67("span", {
          className: styles46.iconWrap,
          children: errorIcon
        }),
        /* @__PURE__ */ jsx67("span", {
          className: cx55(styles46.statusLabel, error ? styles46.statusLabelError : undefined),
          children: message || status
        }),
        isActive && hasProgress && /* @__PURE__ */ jsxs55("span", {
          className: styles46.progressHint,
          children: [
            "(",
            progress,
            "%)"
          ]
        }),
        onAbort && isActive && /* @__PURE__ */ jsx67("button", {
          type: "button",
          onClick: onAbort,
          className: styles46.abortButton,
          title: "Abort operation",
          children: "×"
        })
      ]
    });
  }
  const stepKeys = steps?.map((s) => s.key) ?? [];
  const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;
  return /* @__PURE__ */ jsxs55("div", {
    className: cx55(styles46.root, className),
    children: [
      /* @__PURE__ */ jsxs55("div", {
        className: styles46.header,
        children: [
          /* @__PURE__ */ jsxs55("div", {
            className: styles46.headerLeft,
            children: [
              isActive && activeIcon && /* @__PURE__ */ jsx67("span", {
                className: styles46.iconWrap,
                children: activeIcon
              }),
              isComplete && completeIcon && /* @__PURE__ */ jsx67("span", {
                className: styles46.iconWrap,
                children: completeIcon
              }),
              error && errorIcon && /* @__PURE__ */ jsx67("span", {
                className: styles46.iconWrap,
                children: errorIcon
              }),
              /* @__PURE__ */ jsxs55("div", {
                children: [
                  /* @__PURE__ */ jsx67("div", {
                    className: cx55(styles46.statusLabel, error ? styles46.statusLabelError : undefined),
                    children: message || status
                  }),
                  isActive && hasProgress && /* @__PURE__ */ jsxs55("div", {
                    className: styles46.progressHint,
                    children: [
                      progress,
                      "% complete"
                    ]
                  })
                ]
              })
            ]
          }),
          onAbort && isActive && /* @__PURE__ */ jsx67("button", {
            type: "button",
            onClick: onAbort,
            className: styles46.abortButton,
            title: "Abort operation",
            children: "×"
          })
        ]
      }),
      isActive && hasProgress && /* @__PURE__ */ jsx67("div", {
        className: styles46.trackWrap,
        children: /* @__PURE__ */ jsx67("div", {
          className: styles46.track,
          children: /* @__PURE__ */ jsx67("div", {
            className: styles46.range,
            style: { width: `${progress}%` }
          })
        })
      }),
      error && /* @__PURE__ */ jsxs55("div", {
        className: styles46.errorBox,
        children: [
          errorIcon && /* @__PURE__ */ jsx67("span", {
            className: styles46.iconWrap,
            children: errorIcon
          }),
          /* @__PURE__ */ jsx67("span", {
            className: styles46.errorText,
            children: error
          })
        ]
      }),
      isComplete && !error && /* @__PURE__ */ jsxs55("div", {
        className: styles46.successBox,
        children: [
          completeIcon && /* @__PURE__ */ jsx67("span", {
            className: styles46.iconWrap,
            children: completeIcon
          }),
          /* @__PURE__ */ jsx67("span", {
            className: styles46.successText,
            children: "Operation completed successfully"
          })
        ]
      }),
      steps && steps.length > 0 && isActive && /* @__PURE__ */ jsx67("div", {
        className: styles46.stepsGrid,
        style: { gridTemplateColumns: `repeat(${steps.length}, 1fr)` },
        children: steps.map((step, idx) => {
          const isCurrent = step.key === currentStep;
          const isDone = currentIdx >= 0 && idx < currentIdx;
          return /* @__PURE__ */ jsx67("div", {
            className: cx55(styles46.step, isCurrent ? styles46.stepActive : isDone ? styles46.stepDone : styles46.stepPending),
            children: step.label
          }, step.key);
        })
      })
    ]
  });
}
// src/components/patterns/top-toolbar.tsx
import { css as css57, cx as cx56 } from "styled-system/css";
import { jsx as jsx68, jsxs as jsxs56 } from "react/jsx-runtime";
"use client";
var styles47 = {
  root: css57({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    paddingX: { base: "4", md: "4.5", xl: "5" },
    paddingY: "2.5"
  }),
  row: css57({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "2.5"
  }),
  left: css57({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    gap: "4",
    minWidth: 0,
    flex: "1"
  }),
  titleBlock: css57({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  title: css57({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  subtitle: css57({
    textStyle: "small",
    color: "app.text.muted"
  }),
  center: css57({
    width: "100%",
    maxWidth: { base: "full", md: "none" },
    flex: { md: "1" }
  }),
  trailing: css57({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: { base: "flex-start", md: "flex-end" },
    gap: "2.5"
  }),
  children: css57({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "3",
    paddingTop: "3"
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
  return /* @__PURE__ */ jsxs56("div", {
    className: cx56(styles47.root, className),
    children: [
      /* @__PURE__ */ jsxs56("div", {
        className: styles47.row,
        children: [
          /* @__PURE__ */ jsxs56("div", {
            className: styles47.left,
            children: [
              leading,
              (title || subtitle) && /* @__PURE__ */ jsxs56("div", {
                className: styles47.titleBlock,
                children: [
                  title && /* @__PURE__ */ jsx68("div", {
                    className: styles47.title,
                    children: title
                  }),
                  subtitle && /* @__PURE__ */ jsx68("div", {
                    className: styles47.subtitle,
                    children: subtitle
                  })
                ]
              })
            ]
          }),
          center && /* @__PURE__ */ jsx68("div", {
            className: styles47.center,
            children: center
          }),
          trailing && /* @__PURE__ */ jsx68("div", {
            className: styles47.trailing,
            children: trailing
          })
        ]
      }),
      children && /* @__PURE__ */ jsx68("div", {
        className: styles47.children,
        children
      })
    ]
  });
}
// src/components/patterns/utility-panel.tsx
import { css as css58, cx as cx57 } from "styled-system/css";
import { jsx as jsx69, jsxs as jsxs57 } from "react/jsx-runtime";
"use client";
var styles48 = {
  root: css58({
    display: "flex",
    flexDirection: "column",
    borderRadius: "2xl",
    borderWidth: "1px",
    borderColor: "app.border",
    background: "app.surface",
    boxShadow: "{shadows.float}",
    overflow: "hidden"
  }),
  header: css58({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "3.5",
    paddingX: "5",
    paddingY: "4",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    background: "app.surface.muted"
  }),
  headerDraggable: css58({
    cursor: "grab"
  }),
  headerMain: css58({
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    minWidth: 0
  }),
  iconWrap: css58({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "11",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "app.border",
    background: "app.surface",
    color: "app.accent",
    flexShrink: 0
  }),
  headerCopy: css58({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  title: css58({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  subtitle: css58({
    textStyle: "small",
    color: "app.text.subtle",
    lineHeight: "1.55"
  }),
  controls: css58({
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    flexShrink: 0
  }),
  body: css58({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    minHeight: 0
  }),
  footer: css58({
    paddingX: "5",
    paddingY: "3.5",
    borderTopWidth: "1px",
    borderColor: "app.border",
    background: "app.surface.muted"
  })
};
function UtilityPanel({
  title,
  subtitle,
  icon,
  controls,
  children,
  footer,
  draggable = false,
  className
}) {
  return /* @__PURE__ */ jsxs57("section", {
    className: cx57(styles48.root, className),
    children: [
      /* @__PURE__ */ jsxs57("div", {
        className: cx57(styles48.header, draggable && styles48.headerDraggable),
        children: [
          /* @__PURE__ */ jsxs57("div", {
            className: styles48.headerMain,
            children: [
              icon && /* @__PURE__ */ jsx69("div", {
                className: styles48.iconWrap,
                children: icon
              }),
              /* @__PURE__ */ jsxs57("div", {
                className: styles48.headerCopy,
                children: [
                  /* @__PURE__ */ jsx69("div", {
                    className: styles48.title,
                    children: title
                  }),
                  subtitle && /* @__PURE__ */ jsx69("div", {
                    className: styles48.subtitle,
                    children: subtitle
                  })
                ]
              })
            ]
          }),
          controls && /* @__PURE__ */ jsx69("div", {
            className: styles48.controls,
            children: controls
          })
        ]
      }),
      /* @__PURE__ */ jsx69("div", {
        className: styles48.body,
        children
      }),
      footer && /* @__PURE__ */ jsx69("div", {
        className: styles48.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/value-field.tsx
import { css as css59, cx as cx58 } from "styled-system/css";
import { jsx as jsx70, jsxs as jsxs58 } from "react/jsx-runtime";
"use client";
var styles49 = {
  root: css59({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  labelRow: css59({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  labelWrap: css59({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css59({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css59({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css59({
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
  fieldSoft: css59({
    borderWidth: "0",
    boxShadow: "none"
  }),
  default: css59({
    bg: "app.surface"
  }),
  muted: css59({
    bg: "app.surface.muted"
  }),
  valueWrap: css59({
    display: "flex",
    alignItems: "center",
    gap: "2",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  icon: css59({
    color: "app.accent",
    flexShrink: 0
  }),
  value: css59({
    textStyle: "small",
    color: "app.text",
    minWidth: 0,
    flex: "1 1 auto",
    wordBreak: "break-word"
  }),
  mono: css59({
    fontFamily: "mono"
  }),
  actions: css59({
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
  chrome = "default",
  className
}) {
  return /* @__PURE__ */ jsxs58("div", {
    className: cx58(styles49.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx70("div", {
        className: styles49.labelRow,
        children: /* @__PURE__ */ jsxs58("div", {
          className: styles49.labelWrap,
          children: [
            label && /* @__PURE__ */ jsx70("div", {
              className: styles49.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx70("div", {
              className: styles49.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs58("div", {
        className: cx58(styles49.field, styles49[tone], chrome === "soft" && styles49.fieldSoft),
        children: [
          /* @__PURE__ */ jsxs58("div", {
            className: styles49.valueWrap,
            children: [
              icon && /* @__PURE__ */ jsx70("div", {
                className: styles49.icon,
                children: icon
              }),
              /* @__PURE__ */ jsx70("div", {
                className: cx58(styles49.value, mono && styles49.mono),
                children: value
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx70("div", {
            className: styles49.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
// src/components/patterns/value-slider.tsx
import { useId } from "react";
import { css as css60, cx as cx59 } from "styled-system/css";
import { jsx as jsx71, jsxs as jsxs59 } from "react/jsx-runtime";
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
  ariaLabel,
  hint,
  showValue = true,
  formatValue = (nextValue) => `${Math.round(nextValue * 10) / 10}`,
  tone = "teal",
  variant = "default",
  className
}) {
  const hintId = useId();
  const colors = toneStyles2[tone];
  const workspace = variant === "workspace";
  const accessibleLabel = label ?? ariaLabel;
  return /* @__PURE__ */ jsxs59(Root9, {
    value: [value],
    onValueChange: (details) => onChange(details.value[0]),
    min,
    max,
    step,
    className: cx59(css60({ w: "full" }), className),
    children: [
      (accessibleLabel || showValue) && /* @__PURE__ */ jsxs59("div", {
        className: css60({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3",
          mb: "2.5"
        }),
        children: [
          accessibleLabel && /* @__PURE__ */ jsx71(Label4, {
            className: css60({
              position: label ? "static" : "absolute",
              width: label ? "auto" : "1px",
              height: label ? "auto" : "1px",
              padding: label ? "0" : "0",
              margin: label ? "0" : "-1px",
              overflow: label ? "visible" : "hidden",
              clip: label ? "auto" : "rect(0, 0, 0, 0)",
              whiteSpace: label ? "normal" : "nowrap",
              borderWidth: label ? "0" : "0",
              textStyle: "small",
              fontWeight: workspace ? "600" : "500",
              color: workspace ? "app.text" : "app.text.muted"
            }),
            children: accessibleLabel
          }),
          showValue && /* @__PURE__ */ jsx71("span", {
            className: css60({
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minW: workspace ? "3rem" : "auto",
              px: workspace ? "2" : "0",
              py: workspace ? "1" : "0",
              rounded: workspace ? "md" : "none",
              borderWidth: workspace ? "1px" : "0",
              borderColor: workspace ? "app.border" : "transparent",
              bg: workspace ? "app.canvas.subtle" : "transparent",
              textStyle: workspace ? "caption" : "small",
              fontWeight: "600",
              color: "app.text"
            }),
            children: formatValue(value)
          })
        ]
      }),
      /* @__PURE__ */ jsxs59(Control2, {
        className: css60({ position: "relative", display: "flex", alignItems: "center", h: "5" }),
        children: [
          /* @__PURE__ */ jsx71(Track, {
            className: css60({
              w: "full",
              h: workspace ? "1" : "1.5",
              bg: workspace ? "app.border" : "app.surface.muted",
              rounded: "full",
              overflow: "hidden"
            }),
            children: /* @__PURE__ */ jsx71(Range, {
              className: css60({ h: "full", bg: colors.range })
            })
          }),
          /* @__PURE__ */ jsx71(Thumb, {
            index: 0,
            "aria-describedby": hint ? hintId : undefined,
            className: css60({
              w: "4",
              h: "4",
              rounded: "full",
              bg: workspace ? colors.range : "app.surface",
              borderWidth: workspace ? "0" : "2px",
              borderColor: workspace ? "transparent" : colors.border,
              boxShadow: workspace ? "panel" : "0 8px 18px rgba(8, 18, 20, 0.12)",
              cursor: "grab",
              _focusVisible: {
                outline: "2px solid",
                outlineColor: "app.accent.soft",
                outlineOffset: "2px"
              }
            }),
            children: /* @__PURE__ */ jsx71(HiddenInput, {})
          })
        ]
      }),
      hint ? /* @__PURE__ */ jsx71("div", {
        id: hintId,
        className: css60({
          mt: workspace ? "3" : "2",
          textStyle: "caption",
          color: "app.text.muted",
          lineHeight: "1.55"
        }),
        children: hint
      }) : null
    ]
  });
}
// src/components/patterns/workspace-page.tsx
import { css as css61, cx as cx60 } from "styled-system/css";
import { jsx as jsx72 } from "react/jsx-runtime";
"use client";
var styles50 = {
  base: css61({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    paddingBottom: "8"
  }),
  comfortable: css61({
    gap: "5"
  }),
  compact: css61({
    gap: "5"
  })
};
function WorkspacePage({
  children,
  density = "comfortable",
  className
}) {
  return /* @__PURE__ */ jsx72("div", {
    className: cx60(styles50.base, density === "compact" && styles50.compact, density === "comfortable" && styles50.comfortable, className),
    children
  });
}
export {
  buildGradientStyle,
  WorkspacePage,
  ValueSlider,
  ValueField,
  UtilityPanel,
  TopToolbar,
  SupportPanel,
  StreamingStatus,
  StepCard,
  StatusState,
  StatusBanner,
  StatCard,
  SlideOver,
  SidebarNav,
  SettingsSectionNav,
  SelectionToolbar,
  SelectionList,
  SectionPanel,
  SectionHeader,
  SecretField,
  SecondaryNav,
  SearchPickerDialog,
  ResourceList,
  PricingCard,
  PickerField,
  PageTitle,
  PageIntro,
  OptionRow,
  NumberField,
  NamedPromptList,
  ModelIconCustomizer,
  ModelCardIcon,
  ModelCard,
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
  GuidedTourCard,
  GradientPicker,
  FormSection,
  FormDialog,
  FileTree,
  FeatureCard,
  EntityCard,
  EmptyState,
  DocsHint,
  DetailPanel,
  DetailDialog,
  DEFAULT_ICON_CONFIG,
  CreditPill,
  CredentialCard,
  ConfirmDialog,
  CollectionPageHeader,
  ChoiceSegment,
  AuthShell,
  AmountSelector,
  ActivityTable,
  ActionCard,
  AccentLabel
};

//# debugId=A1108D883CBF6B0864756E2164756E21
//# sourceMappingURL=index.js.map
