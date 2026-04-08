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
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  header: css3({
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
    paddingX: { base: "5", md: "6" },
    paddingY: "3",
    textStyle: "metricLabel",
    color: "app.text.subtle",
    textAlign: "left",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted"
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
      bg: "app.surface.muted"
    }
  }),
  cell: css3({
    paddingX: { base: "5", md: "6" },
    paddingY: "4",
    textStyle: "small",
    color: "app.text.muted",
    verticalAlign: "middle"
  }),
  empty: css3({
    paddingX: { base: "5", md: "6" },
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
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    display: "flex",
    flexDir: "column",
    gap: "5"
  }),
  sectionLabel: css4({
    textStyle: "small",
    color: "fg.muted",
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
    rounded: "l2",
    fontWeight: "medium",
    fontSize: "sm",
    cursor: "pointer",
    transition: "all 150ms",
    borderWidth: "1px"
  }),
  presetActive: css4({
    bg: "colorPalette.9",
    color: "white",
    borderColor: "colorPalette.9"
  }),
  presetInactive: css4({
    bg: "bg.default",
    color: "fg.default",
    borderColor: "border.default",
    _hover: {
      borderColor: "colorPalette.a3",
      color: "colorPalette.11"
    }
  }),
  inputLabel: css4({
    textStyle: "small",
    color: "fg.muted",
    mb: "2"
  }),
  inputRow: css4({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  currencySymbol: css4({
    fontSize: "lg",
    color: "fg.muted"
  }),
  input: css4({
    flex: 1,
    px: "3",
    py: "2",
    rounded: "l2",
    borderWidth: "1px",
    borderColor: "border.default",
    bg: "transparent",
    color: "fg.default",
    fontSize: "sm",
    outline: "none",
    _focus: {
      ringWidth: "2px",
      ringColor: "colorPalette.a3",
      ringOffset: "0"
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed"
    }
  }),
  currencyCode: css4({
    fontSize: "sm",
    color: "fg.subtle"
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
    rounded: "l2",
    fontWeight: "medium",
    fontSize: "sm",
    bg: "colorPalette.9",
    color: "white",
    cursor: "pointer",
    transition: "all 150ms",
    borderWidth: "0",
    _hover: {
      bg: "colorPalette.10"
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
  onChange,
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
  const validationError = value < min ? `Minimum amount is ${currency}${min}` : value > max ? `Maximum amount is ${currency}${max}` : null;
  const handlePresetClick = (preset) => {
    setCustomInput("");
    onChange(preset);
  };
  const handleCustomChange = (raw) => {
    setCustomInput(raw);
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
              className: cx4(styles3.presetBase, value === preset && !customInput ? styles3.presetActive : styles3.presetInactive),
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
                value: customInput,
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
          validationError && customInput && /* @__PURE__ */ jsx4("div", {
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
// src/components/patterns/confirm-dialog.tsx
import { css as css5, cx as cx5 } from "styled-system/css";

// src/components/ui/button.tsx
import { ark as ark4 } from "@ark-ui/react/factory";
import { createContext, mergeProps } from "@ark-ui/react/utils";
import { forwardRef as forwardRef2, useMemo } from "react";
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
"use client";
var Loader = forwardRef(function Loader2(props, ref) {
  const {
    spinner: spinner2 = /* @__PURE__ */ jsx5(Spinner, {
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
    return /* @__PURE__ */ jsxs4(Span, {
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
    return /* @__PURE__ */ jsxs4(Span, {
      ref,
      display: "contents",
      ...rest,
      children: [
        /* @__PURE__ */ jsx5(AbsoluteCenter, {
          display: "inline-flex",
          children: spinner2
        }),
        /* @__PURE__ */ jsx5(Span, {
          visibility: "hidden",
          display: "contents",
          children
        })
      ]
    });
  }
  return /* @__PURE__ */ jsx5(Span, {
    ref,
    display: "contents",
    ...rest,
    children
  });
});

// src/components/ui/button.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
"use client";
var BaseButton = styled5(ark4.button, button);
var Button = forwardRef2(function Button2(props, ref) {
  const propsContext = useButtonPropsContext();
  const buttonProps = useMemo(() => mergeProps(propsContext, props), [propsContext, props]);
  const { loading, loadingText, children, spinner: spinner2, spinnerPlacement, ...rest } = buttonProps;
  return /* @__PURE__ */ jsx6(BaseButton, {
    type: "button",
    ref,
    ...rest,
    "data-loading": loading ? "" : undefined,
    disabled: loading || rest.disabled,
    children: !props.asChild && loading ? /* @__PURE__ */ jsx6(Loader, {
      spinner: spinner2,
      text: loadingText,
      spinnerPlacement,
      children
    }) : children
  });
});
var ButtonGroup = forwardRef2(function ButtonGroup2(props, ref) {
  const [variantProps, otherProps] = useMemo(() => button.splitVariantProps(props), [props]);
  return /* @__PURE__ */ jsx6(ButtonPropsProvider, {
    value: variantProps,
    children: /* @__PURE__ */ jsx6(Group, {
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
import { createStyleContext, styled as styled6 } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";
import { DialogContext } from "@ark-ui/react/dialog";
import { jsx as jsx7 } from "react/jsx-runtime";
"use client";
var { withRootProvider, withContext } = createStyleContext(dialog);
var Root = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider = withRootProvider(Dialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Backdrop = withContext(Dialog.Backdrop, "backdrop");
var CloseTrigger = withContext(Dialog.CloseTrigger, "closeTrigger");
var Content = withContext(Dialog.Content, "content");
var Description = withContext(Dialog.Description, "description");
var Positioner = withContext(Dialog.Positioner, "positioner");
var Title = withContext(Dialog.Title, "title");
var Trigger = withContext(Dialog.Trigger, "trigger");
var Body = withContext(ark5.div, "body");
var Header = withContext(ark5.div, "header");
var Footer = withContext(ark5.div, "footer");
var StyledButton = styled6(ark5.button);
var ActionTrigger = forwardRef3(function ActionTrigger2(props, ref) {
  const dialog2 = useDialogContext();
  return /* @__PURE__ */ jsx7(StyledButton, {
    ...props,
    ref,
    onClick: () => dialog2.setOpen(false)
  });
});

// src/components/patterns/confirm-dialog.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var accentBar = css5({
  h: "3px",
  w: "full",
  roundedTop: "l3"
});
var tealGradient = css5({
  background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
});
var dangerGradient = css5({
  background: "linear-gradient(90deg, {colors.fg.error}, {colors.fg.warning})"
});
var bodyText = css5({
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
  return /* @__PURE__ */ jsxs5(Root, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: [
      /* @__PURE__ */ jsx8(Backdrop, {}),
      /* @__PURE__ */ jsx8(Positioner, {
        children: /* @__PURE__ */ jsxs5(Content, {
          className,
          children: [
            /* @__PURE__ */ jsx8("div", {
              className: cx5(accentBar, destructive ? dangerGradient : tealGradient)
            }),
            /* @__PURE__ */ jsx8(Header, {
              children: /* @__PURE__ */ jsx8(Title, {
                children: title
              })
            }),
            /* @__PURE__ */ jsx8(Body, {
              children: typeof children === "string" ? /* @__PURE__ */ jsx8("p", {
                className: bodyText,
                children
              }) : children
            }),
            /* @__PURE__ */ jsxs5(Footer, {
              children: [
                /* @__PURE__ */ jsx8(CloseTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx8(Button, {
                    variant: "outline",
                    size: "sm",
                    children: cancelLabel
                  })
                }),
                /* @__PURE__ */ jsx8(Button, {
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
import { css as css6, cx as cx6 } from "styled-system/css";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
"use client";
var styles4 = {
  root: css6({
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
  header: css6({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4"
  }),
  headerCopy: css6({
    display: "flex",
    alignItems: "center",
    gap: "3.5",
    minWidth: 0
  }),
  iconWrap: css6({
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
  copy: css6({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  title: css6({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css6({
    textStyle: "small",
    color: "app.text.muted"
  }),
  status: css6({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    flexShrink: 0
  }),
  body: css6({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    color: "app.text.muted"
  }),
  footer: css6({
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
  return /* @__PURE__ */ jsxs6("section", {
    className: cx6(styles4.root, className),
    children: [
      /* @__PURE__ */ jsxs6("div", {
        className: styles4.header,
        children: [
          /* @__PURE__ */ jsxs6("div", {
            className: styles4.headerCopy,
            children: [
              icon && /* @__PURE__ */ jsx9("div", {
                className: styles4.iconWrap,
                children: icon
              }),
              /* @__PURE__ */ jsxs6("div", {
                className: styles4.copy,
                children: [
                  /* @__PURE__ */ jsx9("div", {
                    className: styles4.title,
                    children: title
                  }),
                  description && /* @__PURE__ */ jsx9("div", {
                    className: styles4.description,
                    children: description
                  })
                ]
              })
            ]
          }),
          status && /* @__PURE__ */ jsx9("div", {
            className: styles4.status,
            children: status
          })
        ]
      }),
      children && /* @__PURE__ */ jsx9("div", {
        className: styles4.body,
        children
      }),
      footer && /* @__PURE__ */ jsx9("div", {
        className: styles4.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/credit-pill.tsx
import { css as css7, cx as cx7 } from "styled-system/css";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
"use client";
var styles5 = {
  root: css7({
    display: "inline-flex",
    alignItems: "center",
    gap: "3",
    minHeight: "11",
    paddingLeft: "3",
    paddingRight: "3.5",
    borderRadius: "full",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.panel}"
  }),
  icon: css7({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "8",
    borderRadius: "full",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  text: css7({
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  label: css7({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  }),
  valueRow: css7({
    display: "flex",
    alignItems: "baseline",
    gap: "2"
  }),
  value: css7({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  detail: css7({
    textStyle: "small",
    color: "app.text.muted"
  })
};
var toneStyles = {
  default: css7({}),
  accent: css7({
    bg: "app.accent.soft",
    borderColor: "app.border.strong"
  }),
  success: css7({
    bg: "bg.success",
    borderColor: "border.success"
  }),
  warning: css7({
    bg: "bg.warning",
    borderColor: "border.warning"
  })
};
function CreditPill({
  label = "Credits",
  value,
  detail,
  icon,
  tone = "default",
  className
}) {
  return /* @__PURE__ */ jsxs7("div", {
    className: cx7(styles5.root, toneStyles[tone], className),
    children: [
      icon && /* @__PURE__ */ jsx10("span", {
        className: styles5.icon,
        children: icon
      }),
      /* @__PURE__ */ jsxs7("span", {
        className: styles5.text,
        children: [
          /* @__PURE__ */ jsx10("span", {
            className: styles5.label,
            children: label
          }),
          /* @__PURE__ */ jsxs7("span", {
            className: styles5.valueRow,
            children: [
              /* @__PURE__ */ jsx10("span", {
                className: styles5.value,
                children: value
              }),
              detail && /* @__PURE__ */ jsx10("span", {
                className: styles5.detail,
                children: detail
              })
            ]
          })
        ]
      })
    ]
  });
}
// src/components/patterns/detail-dialog.tsx
import { css as css8, cx as cx8 } from "styled-system/css";

// src/components/ui/close-button.tsx
import { XIcon } from "lucide-react";
import { forwardRef as forwardRef5 } from "react";

// src/components/ui/icon-button.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var IconButton = forwardRef4(function IconButton2(props, ref) {
  return /* @__PURE__ */ jsx11(Button, {
    px: "0",
    py: "0",
    ref,
    ...props
  });
});

// src/components/ui/close-button.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var CloseButton = forwardRef5(function CloseButton2(props, ref) {
  return /* @__PURE__ */ jsx12(IconButton, {
    variant: "plain",
    colorPalette: "gray",
    "aria-label": "Close",
    ref,
    ...props,
    children: props.children ?? /* @__PURE__ */ jsx12(XIcon, {})
  });
});

// src/components/patterns/detail-dialog.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
"use client";
var styles6 = {
  accentBar: css8({
    h: "3px",
    w: "full",
    roundedTop: "l3",
    background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
  }),
  header: css8({
    display: "flex",
    flexDirection: "column",
    gap: "3"
  }),
  eyebrow: css8({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  headerRow: css8({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "3",
    minWidth: 0,
    paddingRight: "10"
  }),
  headerCopy: css8({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  description: css8({
    color: "app.text.muted",
    textStyle: "small",
    maxWidth: "2xl"
  }),
  actions: css8({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  body: css8({
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
  return /* @__PURE__ */ jsxs8(Root, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: [
      /* @__PURE__ */ jsx13(Backdrop, {}),
      /* @__PURE__ */ jsx13(Positioner, {
        children: /* @__PURE__ */ jsxs8(Content, {
          className,
          children: [
            /* @__PURE__ */ jsx13("div", {
              className: styles6.accentBar
            }),
            /* @__PURE__ */ jsx13(CloseTrigger, {
              asChild: true,
              children: /* @__PURE__ */ jsx13(CloseButton, {
                size: "sm",
                "aria-label": "Close dialog"
              })
            }),
            /* @__PURE__ */ jsxs8(Header, {
              className: styles6.header,
              children: [
                eyebrow && /* @__PURE__ */ jsx13("div", {
                  className: styles6.eyebrow,
                  children: eyebrow
                }),
                /* @__PURE__ */ jsxs8("div", {
                  className: styles6.headerRow,
                  children: [
                    /* @__PURE__ */ jsxs8("div", {
                      className: styles6.headerCopy,
                      children: [
                        /* @__PURE__ */ jsx13(Title, {
                          children: title
                        }),
                        description && /* @__PURE__ */ jsx13(Description, {
                          className: styles6.description,
                          children: description
                        })
                      ]
                    }),
                    actions && /* @__PURE__ */ jsx13("div", {
                      className: styles6.actions,
                      children: actions
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsx13(Body, {
              className: cx8(styles6.body),
              children
            }),
            footer && /* @__PURE__ */ jsx13(Footer, {
              children: footer
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/detail-panel.tsx
import { css as css9, cx as cx9 } from "styled-system/css";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
"use client";
var styles7 = {
  root: css9({
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
  header: css9({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4"
  }),
  headerCopy: css9({
    display: "flex",
    alignItems: "flex-start",
    gap: "3.5",
    minWidth: 0
  }),
  iconWrap: css9({
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
  copy: css9({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  eyebrow: css9({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css9({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css9({
    textStyle: "small",
    color: "app.text.muted"
  }),
  meta: css9({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    color: "app.text.subtle",
    textStyle: "caption"
  }),
  actions: css9({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  body: css9({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minWidth: 0,
    color: "app.text.muted"
  }),
  footer: css9({
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
  return /* @__PURE__ */ jsxs9("section", {
    className: cx9(styles7.root, className),
    children: [
      (eyebrow || title || description || icon || meta || actions) && /* @__PURE__ */ jsxs9("div", {
        className: styles7.header,
        children: [
          /* @__PURE__ */ jsxs9("div", {
            className: styles7.headerCopy,
            children: [
              icon && /* @__PURE__ */ jsx14("div", {
                className: styles7.iconWrap,
                children: icon
              }),
              /* @__PURE__ */ jsxs9("div", {
                className: styles7.copy,
                children: [
                  eyebrow && /* @__PURE__ */ jsx14("div", {
                    className: styles7.eyebrow,
                    children: eyebrow
                  }),
                  title && /* @__PURE__ */ jsx14("div", {
                    className: styles7.title,
                    children: title
                  }),
                  description && /* @__PURE__ */ jsx14("div", {
                    className: styles7.description,
                    children: description
                  }),
                  meta && /* @__PURE__ */ jsx14("div", {
                    className: styles7.meta,
                    children: meta
                  })
                ]
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx14("div", {
            className: styles7.actions,
            children: actions
          })
        ]
      }),
      children && /* @__PURE__ */ jsx14("div", {
        className: styles7.body,
        children
      }),
      footer && /* @__PURE__ */ jsx14("div", {
        className: styles7.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/empty-state.tsx
import { css as css10, cx as cx10 } from "styled-system/css";
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
"use client";
var styles8 = {
  root: css10({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    py: "16",
    px: "6"
  }),
  iconWrap: css10({
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
  title: css10({
    textStyle: "h3",
    color: "fg.default"
  }),
  description: css10({
    textStyle: "body",
    color: "fg.muted",
    mt: "2",
    maxW: "md"
  }),
  action: css10({
    mt: "6"
  })
};
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs10("div", {
    className: cx10(styles8.root, className),
    children: [
      icon && /* @__PURE__ */ jsx15("div", {
        className: styles8.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx15("h3", {
        className: styles8.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx15("p", {
        className: styles8.description,
        children: description
      }),
      action && /* @__PURE__ */ jsx15("div", {
        className: styles8.action,
        children: action
      })
    ]
  });
}
// src/components/patterns/entity-card.tsx
import { css as css11, cx as cx11 } from "styled-system/css";

// src/components/ui/card.tsx
import { ark as ark6 } from "@ark-ui/react/factory";
import { createStyleContext as createStyleContext2 } from "styled-system/jsx";
import { card } from "styled-system/recipes";
"use client";
var { withProvider, withContext: withContext2 } = createStyleContext2(card);
var Root2 = withProvider(ark6.div, "root");
var Header2 = withContext2(ark6.div, "header");
var Body2 = withContext2(ark6.div, "body");
var Footer2 = withContext2(ark6.h3, "footer");
var Title2 = withContext2(ark6.h3, "title");
var Description2 = withContext2(ark6.div, "description");

// src/components/patterns/entity-card.tsx
import { jsx as jsx16, jsxs as jsxs11 } from "react/jsx-runtime";
"use client";
var styles9 = {
  root: css11({
    overflow: "hidden",
    borderColor: "app.border",
    bg: "app.surface",
    transition: "all 160ms ease"
  }),
  selected: css11({
    bg: "app.accent.soft",
    borderColor: "app.border.strong",
    borderLeftWidth: "3px",
    borderLeftColor: "app.accent"
  }),
  rootHover: css11({
    _hover: {
      bg: "app.surface.muted",
      borderColor: "app.border.strong"
    }
  }),
  accentBar: css11({
    h: "1.5",
    bg: "app.accent.soft",
    roundedTop: "l3"
  }),
  accentBarWheat: css11({
    bg: "wheat.2"
  }),
  body: css11({
    padding: "5",
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minWidth: 0
  }),
  interactive: css11({
    cursor: "pointer",
    userSelect: "none",
    outline: "none"
  }),
  header: css11({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "4"
  }),
  lead: css11({
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    flex: "1",
    minWidth: 0
  }),
  iconWrap: css11({
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
  copy: css11({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0,
    flex: "1"
  }),
  title: css11({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css11({
    textStyle: "small",
    color: "app.text.muted",
    lineHeight: "1.45"
  }),
  meta: css11({
    display: "flex",
    alignItems: "center",
    gap: "3",
    flexWrap: "wrap",
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css11({
    display: "flex",
    alignItems: "center",
    gap: "2",
    flexWrap: "wrap",
    flexShrink: 0,
    marginLeft: "2"
  }),
  content: css11({
    display: "flex",
    flexDirection: "column",
    gap: "3",
    minWidth: 0
  }),
  footer: css11({
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
  return /* @__PURE__ */ jsxs11(Root2, {
    gradient: true,
    accent,
    hover: interactive,
    className: cx11(styles9.root, interactive && styles9.rootHover, selected && styles9.selected, className),
    children: [
      /* @__PURE__ */ jsx16("div", {
        className: cx11(styles9.accentBar, accent === "wheat" && styles9.accentBarWheat)
      }),
      /* @__PURE__ */ jsxs11(Body2, {
        className: cx11(styles9.body, interactive && styles9.interactive),
        onClick,
        onKeyDown: (event) => handleKeyDown(event, onClick),
        role: interactive ? "button" : undefined,
        tabIndex: interactive ? 0 : undefined,
        children: [
          /* @__PURE__ */ jsxs11("div", {
            className: styles9.header,
            children: [
              /* @__PURE__ */ jsxs11("div", {
                className: styles9.lead,
                children: [
                  icon && /* @__PURE__ */ jsx16("div", {
                    className: styles9.iconWrap,
                    children: icon
                  }),
                  /* @__PURE__ */ jsxs11("div", {
                    className: styles9.copy,
                    children: [
                      /* @__PURE__ */ jsx16("div", {
                        className: styles9.title,
                        children: title
                      }),
                      description && /* @__PURE__ */ jsx16("div", {
                        className: styles9.description,
                        children: description
                      }),
                      meta && /* @__PURE__ */ jsx16("div", {
                        className: styles9.meta,
                        children: meta
                      })
                    ]
                  })
                ]
              }),
              actions && /* @__PURE__ */ jsx16("div", {
                className: styles9.actions,
                children: actions
              })
            ]
          }),
          children && /* @__PURE__ */ jsx16("div", {
            className: styles9.content,
            children
          }),
          footer && /* @__PURE__ */ jsx16("div", {
            className: styles9.footer,
            children: footer
          })
        ]
      })
    ]
  });
}
// src/components/patterns/feature-card.tsx
import { css as css12, cx as cx12 } from "styled-system/css";
import { jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
"use client";
var styles10 = {
  root: css12({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    transition: "border-color 0.2s ease",
    _hover: { borderColor: "colorPalette.7" }
  }),
  iconWrap: css12({
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
  title: css12({
    textStyle: "label",
    color: "fg.default",
    mb: "2"
  }),
  description: css12({
    textStyle: "small",
    color: "fg.muted"
  })
};
function FeatureCard({ title, description, icon, className }) {
  return /* @__PURE__ */ jsxs12("div", {
    className: cx12(styles10.root, className),
    children: [
      icon && /* @__PURE__ */ jsx17("div", {
        className: styles10.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx17("div", {
        className: styles10.title,
        children: title
      }),
      /* @__PURE__ */ jsx17("div", {
        className: styles10.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/file-tree.tsx
import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { useCallback, useState as useState2 } from "react";
import { css as css13, cx as cx13 } from "styled-system/css";
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
"use client";
var styles11 = {
  root: css13({
    overflow: "auto"
  }),
  node: css13({
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
  nodeSelected: css13({
    bg: "colorPalette.2",
    color: "colorPalette.11",
    _hover: {
      bg: "colorPalette.3"
    }
  }),
  chevron: css13({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted"
  }),
  chevronPlaceholder: css13({
    flexShrink: 0,
    w: "3.5"
  }),
  folderIcon: css13({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "colorPalette.9"
  }),
  fileIcon: css13({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "fg.muted"
  }),
  label: css13({
    truncate: true
  }),
  children: css13({})
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
  return /* @__PURE__ */ jsxs13("div", {
    children: [
      /* @__PURE__ */ jsxs13("div", {
        className: cx13(styles11.node, isSelected && styles11.nodeSelected),
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
          isFolder ? /* @__PURE__ */ jsx18(ChevronRight, {
            className: styles11.chevron,
            "aria-hidden": "true",
            style: {
              transform: isExpanded ? "rotate(90deg)" : undefined,
              transition: "transform 0.15s"
            }
          }) : /* @__PURE__ */ jsx18("span", {
            className: styles11.chevronPlaceholder
          }),
          node.icon ? /* @__PURE__ */ jsx18("span", {
            className: isFolder ? styles11.folderIcon : styles11.fileIcon,
            children: node.icon
          }) : isFolder ? isExpanded ? /* @__PURE__ */ jsx18(FolderOpen, {
            className: styles11.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx18(Folder, {
            className: styles11.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx18(File, {
            className: styles11.fileIcon,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ jsx18("span", {
            className: styles11.label,
            children: node.name
          })
        ]
      }),
      isFolder && isExpanded && node.children && /* @__PURE__ */ jsx18("div", {
        className: styles11.children,
        role: "group",
        children: node.children.map((child) => /* @__PURE__ */ jsx18(TreeNode, {
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
  return /* @__PURE__ */ jsx18("div", {
    className: cx13(styles11.root, className),
    role: "tree",
    children: nodes.map((node) => /* @__PURE__ */ jsx18(TreeNode, {
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
import { css as css14, cx as cx14 } from "styled-system/css";
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
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
var swatchStyle = css14({
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
var hiddenInput = css14({ opacity: 0, position: "absolute", w: 0, h: 0 });
var removeBtn = css14({
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
var addBtn = css14({
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
var pillBase = css14({
  px: "2",
  py: "0.5",
  rounded: "full",
  fontSize: "xs",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var pillActive = css14({ bg: "teal.a3", color: "fg.default" });
var pillInactive = css14({ bg: "transparent", color: "fg.subtle" });
var previewBar = css14({
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
  return /* @__PURE__ */ jsxs14("div", {
    className: cx14(css14({ display: "flex", flexDir: "column", gap: "2", minW: 0 }), className),
    children: [
      /* @__PURE__ */ jsxs14("div", {
        className: css14({ display: "flex", alignItems: "center", gap: "2", flexWrap: "wrap" }),
        children: [
          colors.map((color, i) => /* @__PURE__ */ jsxs14("div", {
            className: css14({ position: "relative" }),
            children: [
              /* @__PURE__ */ jsx19("label", {
                className: swatchStyle,
                style: { backgroundColor: color },
                children: /* @__PURE__ */ jsx19("input", {
                  type: "color",
                  value: color,
                  onChange: (e) => updateColor(i, e.target.value),
                  className: hiddenInput
                })
              }),
              colors.length > 1 && /* @__PURE__ */ jsx19("button", {
                type: "button",
                onClick: () => removeColor(i),
                className: removeBtn,
                children: /* @__PURE__ */ jsx19(X, {
                  size: 10
                })
              })
            ]
          }, i)),
          colors.length < 3 && /* @__PURE__ */ jsx19("button", {
            type: "button",
            onClick: addColor,
            className: addBtn,
            children: /* @__PURE__ */ jsx19(Plus, {
              size: 14
            })
          })
        ]
      }),
      colors.length > 1 && /* @__PURE__ */ jsx19("div", {
        className: css14({ display: "flex", gap: "1", flexWrap: "wrap" }),
        children: ANGLE_PRESETS.map((preset) => /* @__PURE__ */ jsx19("button", {
          type: "button",
          onClick: () => onAngleChange(preset),
          className: cx14(pillBase, angle === preset ? pillActive : pillInactive),
          children: preset
        }, preset))
      }),
      /* @__PURE__ */ jsx19("div", {
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
import { css as css15, cx as cx15 } from "styled-system/css";
import { createStyleContext as createStyleContext3 } from "styled-system/jsx";
import { helpPanel } from "styled-system/recipes";
import { jsx as jsx20, jsxs as jsxs15, Fragment } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider2, withContext: withContext3 } = createStyleContext3(helpPanel);
var HeaderContainer = withContext3(ark7.div, "header");
var HeaderIconBadge = withContext3(ark7.div, "headerIcon");
var AccentBar = withContext3(ark7.div, "accentBar");
var TabButton = withContext3(ark7.button, "tab");
var FooterContainer = withContext3(ark7.div, "footer");
var Root3 = withRootProvider2(ark7.div);
Root3.displayName = "HelpPanel.Root";
var Header3 = forwardRef6(({ icon, title, subtitle, onClose, closeIcon, accentBar: accentBar2 = true, className }, ref) => /* @__PURE__ */ jsxs15(HeaderContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx20(AccentBar, {
      style: { top: 0 }
    }),
    /* @__PURE__ */ jsxs15("div", {
      className: css15({ display: "flex", alignItems: "center", gap: "3" }),
      children: [
        icon && /* @__PURE__ */ jsx20(HeaderIconBadge, {
          children: icon
        }),
        /* @__PURE__ */ jsxs15("div", {
          children: [
            /* @__PURE__ */ jsx20("h2", {
              className: css15({
                fontSize: "sm",
                fontWeight: "semibold",
                color: "fg.default",
                letterSpacing: "wide"
              }),
              children: title
            }),
            subtitle && /* @__PURE__ */ jsx20("p", {
              className: css15({ fontSize: "xs", color: "fg.subtle" }),
              children: subtitle
            })
          ]
        })
      ]
    }),
    onClose && /* @__PURE__ */ jsx20("button", {
      onClick: onClose,
      type: "button",
      className: css15({
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
      children: closeIcon ?? /* @__PURE__ */ jsx20(X2, {
        size: 14,
        "aria-label": "Close"
      })
    })
  ]
}));
Header3.displayName = "HelpPanel.Header";
var TabBar = withContext3(ark7.div, "tabBar");
TabBar.displayName = "HelpPanel.TabBar";
var Tab = forwardRef6(({ active, icon, label, onClick, title, className }, ref) => /* @__PURE__ */ jsxs15(TabButton, {
  ref,
  type: "button",
  onClick,
  title,
  "data-selected": active ? "" : undefined,
  className,
  children: [
    icon,
    /* @__PURE__ */ jsx20("span", {
      className: css15({ display: { base: "none", sm: "inline" } }),
      children: label
    })
  ]
}));
Tab.displayName = "HelpPanel.Tab";
var Content2 = withContext3(ark7.div, "content");
Content2.displayName = "HelpPanel.Content";
var Footer3 = forwardRef6(({ hint, shortcutKey, accentBar: accentBar2 = true, children, className }, ref) => /* @__PURE__ */ jsxs15(FooterContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx20(AccentBar, {
      style: { bottom: 0, opacity: 0.3 }
    }),
    children ?? /* @__PURE__ */ jsxs15(Fragment, {
      children: [
        hint && /* @__PURE__ */ jsx20("span", {
          children: hint
        }),
        shortcutKey && /* @__PURE__ */ jsx20("kbd", {
          className: css15({
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
  return /* @__PURE__ */ jsxs15("h4", {
    className: cx15(css15({
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
      /* @__PURE__ */ jsx20("span", {
        className: css15({
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
  Root: Root3,
  Header: Header3,
  TabBar,
  Tab,
  Content: Content2,
  Footer: Footer3,
  SectionHeading
};
// src/components/patterns/help-trigger.tsx
import { useCallback as useCallback2 } from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
"use client";
function HelpTrigger({ active, onActivate, children }) {
  const handleMouseEnter = useCallback2(() => {
    if (active) {
      onActivate();
    }
  }, [active, onActivate]);
  return /* @__PURE__ */ jsx21("div", {
    style: { display: "contents" },
    onMouseEnter: handleMouseEnter,
    role: "group",
    children
  });
}
// src/components/patterns/hero-panel.tsx
import { css as css16, cx as cx16 } from "styled-system/css";
import { jsx as jsx22, jsxs as jsxs16 } from "react/jsx-runtime";
"use client";
var styles12 = {
  root: css16({
    display: "grid",
    gridTemplateColumns: { base: "1fr", xl: "minmax(0, 1.25fr) minmax(18rem, 0.75fr)" },
    gap: "6",
    padding: { base: "6", md: "7", xl: "8" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  copy: css16({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    minWidth: 0
  }),
  eyebrow: css16({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css16({
    textStyle: "h1",
    color: "app.text",
    maxWidth: "16ch"
  }),
  description: css16({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "2xl"
  }),
  actions: css16({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  footer: css16({
    paddingTop: "4",
    borderTopWidth: "1px",
    borderColor: "app.border",
    color: "app.text.muted"
  }),
  media: css16({
    minHeight: "15rem",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    padding: { base: "4", md: "5" },
    borderRadius: "l3",
    bg: "app.surface.muted",
    borderWidth: "1px",
    borderColor: "app.border",
    boxShadow: "{shadows.panel}"
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
  return /* @__PURE__ */ jsxs16("section", {
    className: cx16(styles12.root, className),
    children: [
      /* @__PURE__ */ jsxs16("div", {
        className: styles12.copy,
        children: [
          eyebrow && /* @__PURE__ */ jsx22("div", {
            className: styles12.eyebrow,
            children: eyebrow
          }),
          /* @__PURE__ */ jsx22("div", {
            className: styles12.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx22("div", {
            className: styles12.description,
            children: description
          }),
          actions && /* @__PURE__ */ jsx22("div", {
            className: styles12.actions,
            children: actions
          }),
          footer && /* @__PURE__ */ jsx22("div", {
            className: styles12.footer,
            children: footer
          })
        ]
      }),
      media && /* @__PURE__ */ jsx22("div", {
        className: styles12.media,
        children: media
      })
    ]
  });
}
// src/components/patterns/icon-badge.tsx
import { css as css17, cx as cx17 } from "styled-system/css";
import { jsx as jsx23 } from "react/jsx-runtime";
"use client";
var base2 = css17({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css17({ w: "8", h: "8" }),
  md: css17({ w: "10", h: "10" }),
  lg: css17({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsx23("div", {
    className: cx17(base2, sizes[size], className),
    children: icon
  });
}
// src/components/patterns/icon-picker.tsx
import { icons } from "lucide-react";
import { useMemo as useMemo2, useState as useState3 } from "react";
import { css as css18, cx as cx18 } from "styled-system/css";

// src/components/ui/input.tsx
import { Field } from "@ark-ui/react/field";
import { styled as styled7 } from "styled-system/jsx";
import { input } from "styled-system/recipes";
var Input = styled7(Field.Input, input);

// src/components/ui/popover.tsx
import { ark as ark8 } from "@ark-ui/react/factory";
import { Popover } from "@ark-ui/react/popover";
import { createStyleContext as createStyleContext4 } from "styled-system/jsx";
import { popover } from "styled-system/recipes";
import { PopoverContext } from "@ark-ui/react/popover";
import { jsx as jsx24 } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider3, withContext: withContext4 } = createStyleContext4(popover);
var Root4 = withRootProvider3(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider2 = withRootProvider3(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Anchor = withContext4(Popover.Anchor, "anchor");
var ArrowTip = withContext4(Popover.ArrowTip, "arrowTip");
var Arrow = withContext4(Popover.Arrow, "arrow", {
  defaultProps: { children: /* @__PURE__ */ jsx24(ArrowTip, {}) }
});
var CloseTrigger2 = withContext4(Popover.CloseTrigger, "closeTrigger");
var Content3 = withContext4(Popover.Content, "content");
var Description3 = withContext4(Popover.Description, "description");
var Indicator = withContext4(Popover.Indicator, "indicator");
var Positioner2 = withContext4(Popover.Positioner, "positioner");
var Title3 = withContext4(Popover.Title, "title");
var Trigger2 = withContext4(Popover.Trigger, "trigger");
var Body3 = withContext4(ark8.div, "body");
var Header4 = withContext4(ark8.div, "header");
var Footer4 = withContext4(ark8.div, "footer");

// src/components/patterns/icon-picker.tsx
import { jsx as jsx25, jsxs as jsxs17 } from "react/jsx-runtime";
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
var triggerStyle = css18({
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
var gridStyle = css18({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "1",
  maxH: "220px",
  overflowY: "auto"
});
var cellBase = css18({
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
var cellActive = css18({ bg: "teal.a3" });
var labelStyle = css18({ fontSize: "sm", color: "fg.muted" });
var emptyStyle = css18({ fontSize: "sm", color: "fg.subtle", textAlign: "center", py: "4" });
function IconPicker({ value, onChange, className }) {
  const [search, setSearch] = useState3("");
  const displayedIcons = useMemo2(() => {
    if (!search.trim()) {
      return CURATED_ICONS.filter((name) => (name in icons));
    }
    const query = search.toLowerCase();
    return Object.keys(icons).filter((name) => name.toLowerCase().includes(query)).slice(0, 60);
  }, [search]);
  const SelectedIcon = icons[value];
  return /* @__PURE__ */ jsxs17(Root4, {
    portalled: true,
    children: [
      /* @__PURE__ */ jsx25(Trigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsxs17("button", {
          type: "button",
          className: cx18(triggerStyle, className),
          children: [
            SelectedIcon && /* @__PURE__ */ jsx25(SelectedIcon, {
              size: 16
            }),
            /* @__PURE__ */ jsx25("span", {
              className: labelStyle,
              children: value
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx25(Positioner2, {
        className: css18({ zIndex: "popover" }),
        children: /* @__PURE__ */ jsxs17(Content3, {
          className: css18({
            w: "280px",
            p: "3",
            bg: "bg.default",
            borderWidth: "1px",
            borderColor: "border.default",
            shadow: "lg",
            rounded: "lg"
          }),
          children: [
            /* @__PURE__ */ jsx25(Input, {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search icons...",
              size: "sm",
              className: css18({ mb: "2" })
            }),
            /* @__PURE__ */ jsx25("div", {
              className: gridStyle,
              children: displayedIcons.map((name) => {
                const Icon = icons[name];
                if (!Icon)
                  return null;
                return /* @__PURE__ */ jsx25("button", {
                  type: "button",
                  title: name,
                  onClick: () => {
                    onChange(name);
                    setSearch("");
                  },
                  className: cx18(cellBase, name === value && cellActive),
                  children: /* @__PURE__ */ jsx25(Icon, {
                    size: 18
                  })
                }, name);
              })
            }),
            displayedIcons.length === 0 && /* @__PURE__ */ jsx25("p", {
              className: emptyStyle,
              children: "No icons found"
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/line-chart.tsx
import { useRef } from "react";
import { css as css19, cx as cx19 } from "styled-system/css";
import { token } from "styled-system/tokens";
import { jsx as jsx26, jsxs as jsxs18 } from "react/jsx-runtime";
"use client";
var styles13 = {
  root: css19({
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
  return /* @__PURE__ */ jsxs18("svg", {
    viewBox: `0 0 ${width} ${height}`,
    className: cx19(styles13.root, className),
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Line chart",
    children: [
      /* @__PURE__ */ jsx26("defs", {
        children: gradientFill && /* @__PURE__ */ jsxs18("linearGradient", {
          id: gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [
            /* @__PURE__ */ jsx26("stop", {
              offset: "0%",
              stopColor: resolvedColor,
              stopOpacity: "0.3"
            }),
            /* @__PURE__ */ jsx26("stop", {
              offset: "100%",
              stopColor: resolvedColor,
              stopOpacity: "0"
            })
          ]
        })
      }),
      showGrid && /* @__PURE__ */ jsx26("g", {
        opacity: "0.2",
        children: [0, 0.25, 0.5, 0.75, 1].map((ratio) => /* @__PURE__ */ jsx26("line", {
          x1: padding.left,
          y1: padding.top + chartHeight * ratio,
          x2: width - padding.right,
          y2: padding.top + chartHeight * ratio,
          stroke: gridColor,
          strokeDasharray: "2,4"
        }, ratio))
      }),
      gradientFill && /* @__PURE__ */ jsx26("path", {
        d: areaPath,
        fill: `url(#${gradientId})`
      }),
      /* @__PURE__ */ jsx26("path", {
        d: linePath,
        fill: "none",
        stroke: resolvedColor,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      pointsVisible && data.map((d, i) => /* @__PURE__ */ jsx26("circle", {
        cx: scaleX(d.x),
        cy: scaleY(d.y),
        r: "3",
        fill: resolvedColor,
        opacity: "0.8"
      }, `${d.x}-${d.y}-${i}`)),
      showAxis && /* @__PURE__ */ jsxs18("g", {
        children: [
          /* @__PURE__ */ jsx26("text", {
            x: padding.left - 4,
            y: padding.top + 4,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMax.toFixed(0)
          }),
          /* @__PURE__ */ jsx26("text", {
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
// src/components/patterns/list-toolbar.tsx
import { css as css20, cx as cx20 } from "styled-system/css";
import { jsx as jsx27, jsxs as jsxs19 } from "react/jsx-runtime";
"use client";
var styles14 = {
  root: css20({
    display: "flex",
    alignItems: { base: "stretch", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", xl: "row" },
    gap: "3",
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface.muted",
    boxShadow: "{shadows.panel}"
  }),
  leading: css20({
    display: "flex",
    alignItems: { base: "stretch", lg: "center" },
    flexDirection: { base: "column", lg: "row" },
    flexWrap: "wrap",
    gap: "3",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  filters: css20({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5",
    minWidth: 0
  }),
  meta: css20({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  actions: css20({
    display: "flex",
    alignItems: "center",
    justifyContent: { base: "flex-start", xl: "flex-end" },
    flexWrap: "wrap",
    gap: "2.5"
  })
};
function ListToolbar({ search, filters, meta, actions, className }) {
  return /* @__PURE__ */ jsxs19("div", {
    className: cx20(styles14.root, className),
    children: [
      /* @__PURE__ */ jsxs19("div", {
        className: styles14.leading,
        children: [
          search,
          filters && /* @__PURE__ */ jsx27("div", {
            className: styles14.filters,
            children: filters
          }),
          meta && /* @__PURE__ */ jsx27("div", {
            className: styles14.meta,
            children: meta
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx27("div", {
        className: styles14.actions,
        children: actions
      })
    ]
  });
}
// src/components/patterns/metric-rail.tsx
import { css as css22, cx as cx22 } from "styled-system/css";

// src/components/patterns/stat-card.tsx
import { css as css21, cx as cx21 } from "styled-system/css";
import { jsx as jsx28, jsxs as jsxs20 } from "react/jsx-runtime";
"use client";
var styles15 = {
  root: css21({
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    rounded: "l3",
    p: "6",
    display: "flex",
    alignItems: "flex-start",
    gap: "4",
    boxShadow: "{shadows.whisper}"
  }),
  iconWrap: css21({
    flexShrink: 0,
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "app.accent.soft",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "app.accent"
  }),
  content: css21({
    flex: 1,
    minW: 0
  }),
  title: css21({
    textStyle: "metricLabel",
    color: "app.text.subtle"
  }),
  value: css21({
    textStyle: "metricValue",
    color: "app.text",
    mt: "2"
  }),
  change: css21({
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
  const changeColor = changeType === "positive" ? css21({ color: "fg.success" }) : changeType === "negative" ? css21({ color: "fg.error" }) : css21({ color: "app.text.muted" });
  return /* @__PURE__ */ jsxs20("div", {
    className: cx21(styles15.root, className),
    children: [
      icon && /* @__PURE__ */ jsx28("div", {
        className: styles15.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }),
      /* @__PURE__ */ jsxs20("div", {
        className: styles15.content,
        children: [
          /* @__PURE__ */ jsx28("div", {
            className: styles15.title,
            children: title
          }),
          /* @__PURE__ */ jsx28("div", {
            className: styles15.value,
            children: value
          }),
          /* @__PURE__ */ jsxs20("div", {
            className: css21({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
            children: [
              change && /* @__PURE__ */ jsx28("span", {
                className: cx21(styles15.change, changeColor),
                children: change
              }),
              badge && /* @__PURE__ */ jsx28("span", {
                className: css21({
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
    ]
  });
}

// src/components/patterns/metric-rail.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
"use client";
function MetricRail({ items, columns = 3, className }) {
  const rootClassName = css22({
    display: "grid",
    gap: "4",
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(2, minmax(0, 1fr))",
      xl: `repeat(${columns}, minmax(0, 1fr))`
    }
  });
  return /* @__PURE__ */ jsx29("div", {
    className: cx22(rootClassName, className),
    children: items.map((item, index) => /* @__PURE__ */ jsx29(StatCard, {
      ...item
    }, `${index}-${String(item.value)}`))
  });
}
// src/components/patterns/model-icon-customizer.tsx
import { icons as icons2 } from "lucide-react";
import { css as css23, cx as cx23 } from "styled-system/css";
import { jsx as jsx30, jsxs as jsxs21 } from "react/jsx-runtime";
"use client";
var DEFAULT_ICON_CONFIG = {
  iconName: "Cpu",
  bgColors: ["#5AB8C4", "#9333ea"],
  bgAngle: 135,
  iconColor: "#ffffff"
};
var cardIconBase = css23({
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
  return /* @__PURE__ */ jsx30("div", {
    className: cx23(cardIconBase, className),
    style: {
      width: size,
      height: size,
      background: buildGradientStyle(c.bgColors, c.bgAngle ?? 135)
    },
    children: Icon && /* @__PURE__ */ jsx30(Icon, {
      size: iconSize,
      style: { color: c.iconColor ?? "#ffffff" }
    })
  });
}
var swatchStyle2 = css23({
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
var hiddenInput2 = css23({ opacity: 0, position: "absolute", w: 0, h: 0 });
var rowStyle = css23({ display: "flex", alignItems: "center", gap: "3" });
var rowStartStyle = css23({ display: "flex", alignItems: "flex-start", gap: "3" });
var labelStyle2 = css23({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0 });
var labelTopStyle = css23({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0, pt: "1" });
function ModelIconCustomizer({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxs21("div", {
    className: cx23(css23({ display: "flex", gap: "4", alignItems: "flex-start" }), className),
    children: [
      /* @__PURE__ */ jsx30(ModelCardIcon, {
        config: value,
        size: 56,
        iconSize: 28
      }),
      /* @__PURE__ */ jsxs21("div", {
        className: css23({ display: "flex", flexDir: "column", gap: "3", flex: 1, minW: 0 }),
        children: [
          /* @__PURE__ */ jsxs21("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx30("div", {
                className: labelStyle2,
                children: "Icon"
              }),
              /* @__PURE__ */ jsx30(IconPicker, {
                value: value.iconName,
                onChange: (iconName) => onChange({ ...value, iconName })
              })
            ]
          }),
          /* @__PURE__ */ jsxs21("div", {
            className: rowStartStyle,
            children: [
              /* @__PURE__ */ jsx30("div", {
                className: labelTopStyle,
                children: "Background"
              }),
              /* @__PURE__ */ jsx30(GradientPicker, {
                colors: value.bgColors,
                angle: value.bgAngle ?? 135,
                onColorsChange: (bgColors) => onChange({ ...value, bgColors }),
                onAngleChange: (bgAngle) => onChange({ ...value, bgAngle })
              })
            ]
          }),
          /* @__PURE__ */ jsxs21("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx30("div", {
                className: labelStyle2,
                children: "Icon Color"
              }),
              /* @__PURE__ */ jsx30("label", {
                className: swatchStyle2,
                style: { backgroundColor: value.iconColor ?? "#ffffff" },
                children: /* @__PURE__ */ jsx30("input", {
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
// src/components/patterns/page-intro.tsx
import { css as css24, cx as cx24 } from "styled-system/css";
import { jsx as jsx31, jsxs as jsxs22 } from "react/jsx-runtime";
"use client";
var styles16 = {
  root: css24({
    display: "flex",
    flexDirection: "column",
    gap: "5"
  }),
  row: css24({
    display: "flex",
    flexDirection: { base: "column", lg: "row" },
    alignItems: { base: "flex-start", lg: "flex-end" },
    justifyContent: "space-between",
    gap: "5"
  }),
  copy: css24({
    display: "flex",
    flexDirection: "column",
    gap: "3",
    maxWidth: "3xl"
  }),
  eyebrow: css24({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css24({
    textStyle: "pageTitle",
    color: "app.text"
  }),
  description: css24({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "2xl"
  }),
  meta: css24({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5",
    color: "app.text.muted"
  }),
  actions: css24({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  children: css24({
    display: "flex",
    flexDirection: "column",
    gap: "4"
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
  return /* @__PURE__ */ jsxs22("div", {
    className: cx24(styles16.root, className),
    children: [
      /* @__PURE__ */ jsxs22("div", {
        className: styles16.row,
        children: [
          /* @__PURE__ */ jsxs22("div", {
            className: styles16.copy,
            children: [
              eyebrow && /* @__PURE__ */ jsx31("div", {
                className: styles16.eyebrow,
                children: eyebrow
              }),
              /* @__PURE__ */ jsx31("div", {
                className: styles16.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx31("div", {
                className: styles16.description,
                children: description
              }),
              meta && /* @__PURE__ */ jsx31("div", {
                className: styles16.meta,
                children: meta
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx31("div", {
            className: styles16.actions,
            children: actions
          })
        ]
      }),
      children && /* @__PURE__ */ jsx31("div", {
        className: styles16.children,
        children
      })
    ]
  });
}
// src/components/patterns/page-title.tsx
import { css as css25, cx as cx25 } from "styled-system/css";
import { jsx as jsx32, jsxs as jsxs23 } from "react/jsx-runtime";
"use client";
var titleStyle = css25({
  textStyle: "pageTitle",
  color: "app.text"
});
var subtitleStyle = css25({
  textStyle: "description",
  color: "app.text.muted",
  mt: "2"
});
function PageTitle({ children, subtitle, className }) {
  return /* @__PURE__ */ jsxs23("div", {
    className,
    children: [
      /* @__PURE__ */ jsx32("h1", {
        className: cx25(titleStyle),
        children
      }),
      subtitle && /* @__PURE__ */ jsx32("p", {
        className: subtitleStyle,
        children: subtitle
      })
    ]
  });
}
// src/components/patterns/pricing-card.tsx
import { css as css26, cx as cx26 } from "styled-system/css";
import { jsx as jsx33, jsxs as jsxs24 } from "react/jsx-runtime";
"use client";
var styles17 = {
  root: css26({
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
  highlighted: css26({
    shadow: "md",
    borderColor: "colorPalette.7"
  }),
  badge: css26({
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
  name: css26({
    textAlign: "center",
    fontSize: "xl",
    fontWeight: "semibold",
    color: "colorPalette.11"
  }),
  description: css26({
    textAlign: "center",
    textStyle: "small",
    color: "fg.muted",
    mb: "4"
  }),
  priceArea: css26({
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    mb: "6"
  }),
  price: css26({
    fontSize: "4xl",
    fontWeight: "bold",
    color: "fg.default"
  }),
  interval: css26({
    color: "fg.muted"
  }),
  featureList: css26({
    listStyle: "none",
    p: "0",
    m: "0",
    display: "flex",
    flexDir: "column",
    gap: "2"
  }),
  featureItem: css26({
    display: "flex",
    flexDir: "row",
    alignItems: "center",
    gap: "2",
    textStyle: "small",
    color: "fg.default"
  }),
  checkmark: css26({
    color: "colorPalette.9",
    flexShrink: 0
  }),
  actionWrap: css26({
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
  return /* @__PURE__ */ jsxs24("div", {
    className: cx26(styles17.root, highlight && styles17.highlighted, className),
    children: [
      badge && /* @__PURE__ */ jsx33("span", {
        className: styles17.badge,
        style: {
          ...badgeBg ? { backgroundColor: badgeBg } : {},
          ...badgeColor ? { color: badgeColor } : {}
        },
        children: badge
      }),
      /* @__PURE__ */ jsx33("div", {
        className: styles17.name,
        style: accentColor ? { color: accentColor } : undefined,
        children: name
      }),
      description && /* @__PURE__ */ jsx33("div", {
        className: styles17.description,
        children: description
      }),
      /* @__PURE__ */ jsxs24("div", {
        className: styles17.priceArea,
        children: [
          /* @__PURE__ */ jsx33("span", {
            className: styles17.price,
            children: price
          }),
          interval && /* @__PURE__ */ jsxs24("span", {
            className: styles17.interval,
            children: [
              "/",
              interval
            ]
          })
        ]
      }),
      features && features.length > 0 && /* @__PURE__ */ jsx33("ul", {
        className: styles17.featureList,
        children: features.map((feature) => /* @__PURE__ */ jsxs24("li", {
          className: styles17.featureItem,
          children: [
            /* @__PURE__ */ jsx33("span", {
              className: styles17.checkmark,
              children: "✓"
            }),
            feature
          ]
        }, feature))
      }),
      action && /* @__PURE__ */ jsx33("div", {
        className: styles17.actionWrap,
        children: action
      })
    ]
  });
}
// src/components/patterns/resource-list.tsx
import { css as css27, cx as cx27 } from "styled-system/css";
import { jsx as jsx34, jsxs as jsxs25 } from "react/jsx-runtime";
"use client";
var styles18 = {
  root: css27({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    bg: "app.surface",
    boxShadow: "{shadows.whisper}",
    overflow: "hidden"
  }),
  header: css27({
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
  titleBlock: css27({
    display: "flex",
    flexDirection: "column",
    gap: "1.5"
  }),
  title: css27({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css27({
    textStyle: "small",
    color: "app.text.muted"
  }),
  list: css27({
    listStyle: "none",
    padding: "0",
    margin: "0"
  }),
  item: css27({
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
  icon: css27({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "10",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css27({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1"
  }),
  itemTitle: css27({
    textStyle: "toolbarLabel",
    color: "app.text"
  }),
  itemDescription: css27({
    textStyle: "small",
    color: "app.text.muted"
  }),
  meta: css27({
    textStyle: "caption",
    color: "app.text.subtle"
  }),
  itemLink: css27({
    color: "inherit",
    textDecoration: "none"
  }),
  action: css27({
    display: "inline-flex",
    alignItems: "center"
  })
};
function ResourceList({ title, description, actions, items, className }) {
  return /* @__PURE__ */ jsxs25("section", {
    className: cx27(styles18.root, className),
    children: [
      (title || description || actions) && /* @__PURE__ */ jsxs25("div", {
        className: styles18.header,
        children: [
          /* @__PURE__ */ jsxs25("div", {
            className: styles18.titleBlock,
            children: [
              title && /* @__PURE__ */ jsx34("div", {
                className: styles18.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx34("div", {
                className: styles18.description,
                children: description
              })
            ]
          }),
          actions
        ]
      }),
      /* @__PURE__ */ jsx34("ul", {
        className: styles18.list,
        children: items.map((item, index) => {
          const content = /* @__PURE__ */ jsxs25("div", {
            className: styles18.copy,
            children: [
              /* @__PURE__ */ jsx34("div", {
                className: styles18.itemTitle,
                children: item.title
              }),
              item.description && /* @__PURE__ */ jsx34("div", {
                className: styles18.itemDescription,
                children: item.description
              }),
              item.meta && /* @__PURE__ */ jsx34("div", {
                className: styles18.meta,
                children: item.meta
              })
            ]
          });
          return /* @__PURE__ */ jsx34("li", {
            children: /* @__PURE__ */ jsxs25("div", {
              className: styles18.item,
              children: [
                item.icon && /* @__PURE__ */ jsx34("div", {
                  className: styles18.icon,
                  children: item.icon
                }),
                item.href ? /* @__PURE__ */ jsx34("a", {
                  className: styles18.itemLink,
                  href: item.href,
                  children: content
                }) : content,
                item.action && /* @__PURE__ */ jsx34("div", {
                  className: styles18.action,
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
import { css as css28, cx as cx28 } from "styled-system/css";
import { jsx as jsx35, jsxs as jsxs26, Fragment as Fragment2 } from "react/jsx-runtime";
"use client";
var styles19 = {
  root: css28({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    width: "100%"
  }),
  list: css28({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "2",
    padding: "0",
    margin: "0",
    overflowX: "auto"
  }),
  item: css28({
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
  itemActive: css28({
    bg: "app.surface",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  label: css28({
    textStyle: "toolbarLabel"
  }),
  badge: css28({
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
  trailing: css28({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  })
};
function SecondaryNavEntry({ item }) {
  const content = /* @__PURE__ */ jsxs26(Fragment2, {
    children: [
      item.icon,
      /* @__PURE__ */ jsx35("span", {
        className: styles19.label,
        children: item.label
      }),
      item.badge && /* @__PURE__ */ jsx35("span", {
        className: styles19.badge,
        children: item.badge
      })
    ]
  });
  const className = cx28(styles19.item, item.active && styles19.itemActive);
  if (item.href) {
    return /* @__PURE__ */ jsx35("a", {
      className,
      href: item.href,
      "aria-current": item.active ? "page" : undefined,
      children: content
    });
  }
  return /* @__PURE__ */ jsx35("button", {
    type: "button",
    className,
    onClick: item.onClick,
    children: content
  });
}
function SecondaryNav({ items, trailing, className }) {
  return /* @__PURE__ */ jsxs26("div", {
    className: cx28(styles19.root, className),
    children: [
      /* @__PURE__ */ jsx35("ul", {
        className: styles19.list,
        children: items.map((item) => /* @__PURE__ */ jsx35("li", {
          children: /* @__PURE__ */ jsx35(SecondaryNavEntry, {
            item
          })
        }, item.id ?? item.href ?? item.label))
      }),
      trailing && /* @__PURE__ */ jsx35("div", {
        className: styles19.trailing,
        children: trailing
      })
    ]
  });
}
// src/components/patterns/secret-field.tsx
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { css as css29, cx as cx29 } from "styled-system/css";
import { jsx as jsx36, jsxs as jsxs27 } from "react/jsx-runtime";
"use client";
var styles20 = {
  root: css29({
    display: "flex",
    flexDirection: "column",
    gap: "2.5"
  }),
  labelRow: css29({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  label: css29({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css29({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css29({
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
  value: css29({
    flex: "1 1 auto",
    minWidth: 0,
    fontFamily: "mono",
    textStyle: "small",
    color: "app.text",
    wordBreak: "break-all"
  }),
  actionRow: css29({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1.5",
    flexShrink: 0
  }),
  iconButton: css29({
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
  return /* @__PURE__ */ jsxs27("div", {
    className: cx29(styles20.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx36("div", {
        className: styles20.labelRow,
        children: /* @__PURE__ */ jsxs27("div", {
          children: [
            label && /* @__PURE__ */ jsx36("div", {
              className: styles20.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx36("div", {
              className: styles20.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs27("div", {
        className: styles20.field,
        children: [
          /* @__PURE__ */ jsx36("div", {
            className: styles20.value,
            children: value
          }),
          /* @__PURE__ */ jsxs27("div", {
            className: styles20.actionRow,
            children: [
              actions,
              onToggleReveal && /* @__PURE__ */ jsx36(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onToggleReveal,
                title: revealed ? "Hide secret value" : "Show secret value",
                "aria-label": revealed ? "Hide secret value" : "Show secret value",
                className: styles20.iconButton,
                children: revealed ? /* @__PURE__ */ jsx36(EyeOff, {
                  size: 14
                }) : /* @__PURE__ */ jsx36(Eye, {
                  size: 14
                })
              }),
              onCopy && /* @__PURE__ */ jsx36(IconButton, {
                variant: "ghost",
                size: "sm",
                onClick: onCopy,
                title: "Copy to clipboard",
                "aria-label": "Copy to clipboard",
                className: styles20.iconButton,
                children: copied ? /* @__PURE__ */ jsx36(Check, {
                  size: 14
                }) : /* @__PURE__ */ jsx36(Copy, {
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
import { css as css30, cx as cx30 } from "styled-system/css";
import { jsx as jsx37, jsxs as jsxs28 } from "react/jsx-runtime";
"use client";
var base3 = css30({
  px: "4",
  py: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: "1px"
});
var variants2 = {
  teal: css30({
    bg: "colorPalette.a2",
    borderColor: "colorPalette.4"
  }),
  wheat: css30({
    bg: "colorPalette.2",
    borderColor: "colorPalette.4"
  })
};
var badgeStyle = css30({
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
var titleStyle2 = css30({
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
  return /* @__PURE__ */ jsxs28("div", {
    className: cx30(base3, variants2[variant], className),
    children: [
      /* @__PURE__ */ jsxs28("div", {
        className: css30({ display: "flex", alignItems: "center", gap: "2" }),
        children: [
          icon && /* @__PURE__ */ jsx37("div", {
            className: badgeStyle,
            children: icon
          }),
          /* @__PURE__ */ jsx37("h3", {
            className: titleStyle2,
            children: title
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx37("div", {
        children: actions
      })
    ]
  });
}
// src/components/patterns/section-panel.tsx
import { css as css31, cx as cx31 } from "styled-system/css";
import { jsx as jsx38, jsxs as jsxs29 } from "react/jsx-runtime";
"use client";
var styles21 = {
  root: css31({
    display: "flex",
    flexDirection: "column",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "app.border",
    overflow: "hidden"
  }),
  default: css31({
    bg: "app.surface",
    boxShadow: "{shadows.whisper}"
  }),
  muted: css31({
    bg: "app.surface.muted",
    boxShadow: "{shadows.panel}"
  }),
  header: css31({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    paddingX: { base: "5", md: "6" },
    paddingY: { base: "5", md: "6" }
  }),
  headerBorder: css31({
    borderBottomWidth: "1px",
    borderColor: "app.border"
  }),
  copy: css31({
    display: "flex",
    flexDirection: "column",
    gap: "2",
    minWidth: 0
  }),
  eyebrow: css31({
    textStyle: "eyebrow",
    color: "app.text.subtle"
  }),
  title: css31({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css31({
    textStyle: "body",
    color: "app.text.muted",
    maxWidth: "3xl"
  }),
  meta: css31({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2",
    color: "app.text.subtle",
    textStyle: "caption"
  }),
  actions: css31({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  body: css31({
    paddingX: { base: "5", md: "6" },
    paddingY: { base: "5", md: "6" }
  }),
  footer: css31({
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
  return /* @__PURE__ */ jsxs29("section", {
    className: cx31(styles21.root, styles21[variant], className),
    children: [
      hasHeader && /* @__PURE__ */ jsxs29("div", {
        className: cx31(styles21.header, (hasBody || hasFooter) && styles21.headerBorder),
        children: [
          /* @__PURE__ */ jsxs29("div", {
            className: styles21.copy,
            children: [
              eyebrow && /* @__PURE__ */ jsx38("div", {
                className: styles21.eyebrow,
                children: eyebrow
              }),
              title && /* @__PURE__ */ jsx38("div", {
                className: styles21.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx38("div", {
                className: styles21.description,
                children: description
              }),
              meta && /* @__PURE__ */ jsx38("div", {
                className: styles21.meta,
                children: meta
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx38("div", {
            className: styles21.actions,
            children: actions
          })
        ]
      }),
      hasBody && /* @__PURE__ */ jsx38("div", {
        className: styles21.body,
        children
      }),
      hasFooter && /* @__PURE__ */ jsx38("div", {
        className: styles21.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/selection-toolbar.tsx
import { css as css32, cx as cx32 } from "styled-system/css";
import { jsx as jsx39, jsxs as jsxs30 } from "react/jsx-runtime";
"use client";
var styles22 = {
  root: css32({
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
  copy: css32({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  summary: css32({
    textStyle: "small",
    fontWeight: "600",
    color: "app.text"
  }),
  description: css32({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  actions: css32({
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
  return /* @__PURE__ */ jsxs30("section", {
    className: cx32(styles22.root, className),
    children: [
      /* @__PURE__ */ jsxs30("div", {
        className: styles22.copy,
        children: [
          /* @__PURE__ */ jsx39("div", {
            className: styles22.summary,
            children: summary
          }),
          description && /* @__PURE__ */ jsx39("div", {
            className: styles22.description,
            children: description
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx39("div", {
        className: styles22.actions,
        children: actions
      })
    ]
  });
}
// src/components/patterns/settings-section-nav.tsx
import { css as css33, cx as cx33 } from "styled-system/css";
import { jsx as jsx40, jsxs as jsxs31 } from "react/jsx-runtime";
"use client";
var styles23 = {
  root: css33({
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
  title: css33({
    textStyle: "sectionTitle",
    color: "app.text",
    paddingX: "1"
  }),
  list: css33({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    padding: 0,
    margin: 0
  }),
  item: css33({
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
  itemActive: css33({
    bg: "app.nav.active",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  icon: css33({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "l2",
    bg: "app.surface.muted",
    color: "app.accent"
  }),
  copy: css33({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css33({
    textStyle: "toolbarLabel",
    color: "currentColor"
  }),
  description: css33({
    textStyle: "small",
    color: "app.text.subtle"
  }),
  footer: css33({
    paddingTop: "3",
    borderTopWidth: "1px",
    borderColor: "app.border"
  })
};
function SettingsSectionNav({ title, items, footer, className }) {
  return /* @__PURE__ */ jsxs31("nav", {
    className: cx33(styles23.root, className),
    "aria-label": "Settings Sections",
    children: [
      title && /* @__PURE__ */ jsx40("div", {
        className: styles23.title,
        children: title
      }),
      /* @__PURE__ */ jsx40("ul", {
        className: styles23.list,
        children: items.map((item, index) => /* @__PURE__ */ jsx40("li", {
          children: /* @__PURE__ */ jsxs31("button", {
            type: "button",
            className: cx33(styles23.item, item.active && styles23.itemActive),
            onClick: item.onClick,
            "aria-current": item.active ? "page" : undefined,
            children: [
              item.icon && /* @__PURE__ */ jsx40("span", {
                className: styles23.icon,
                children: item.icon
              }),
              /* @__PURE__ */ jsxs31("span", {
                className: styles23.copy,
                children: [
                  /* @__PURE__ */ jsx40("span", {
                    className: styles23.label,
                    children: item.label
                  }),
                  item.description && /* @__PURE__ */ jsx40("span", {
                    className: styles23.description,
                    children: item.description
                  })
                ]
              })
            ]
          })
        }, item.id ?? `${item.label}-${index}`))
      }),
      footer && /* @__PURE__ */ jsx40("div", {
        className: styles23.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/sidebar-nav.tsx
import { css as css34, cx as cx34 } from "styled-system/css";
import { jsx as jsx41, jsxs as jsxs32, Fragment as Fragment3 } from "react/jsx-runtime";
"use client";
var styles24 = {
  root: css34({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "6"
  }),
  brand: css34({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  sections: css34({
    display: "flex",
    flexDirection: "column",
    gap: "5",
    flex: "1"
  }),
  section: css34({
    display: "flex",
    flexDirection: "column",
    gap: "2"
  }),
  sectionTitle: css34({
    textStyle: "eyebrow",
    color: "app.text.subtle",
    paddingX: "3"
  }),
  list: css34({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    padding: "0",
    margin: "0"
  }),
  item: css34({
    appearance: "none",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    alignItems: "center",
    gap: "3",
    paddingX: "3",
    paddingY: "3",
    borderRadius: "l3",
    borderWidth: "1px",
    borderColor: "transparent",
    color: "app.text.muted",
    bg: "transparent",
    textAlign: "left",
    textDecoration: "none",
    transitionProperty: "background-color, border-color, color, box-shadow, transform",
    transitionDuration: "180ms",
    transitionTimingFunction: "ease",
    _hover: {
      bg: "app.surface",
      borderColor: "app.border",
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
  itemActive: css34({
    bg: "app.nav.active",
    borderColor: "app.border",
    color: "app.text",
    boxShadow: "{shadows.panel}"
  }),
  itemIcon: css34({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "l2",
    bg: "app.surface",
    color: "app.accent"
  }),
  itemText: css34({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  itemLabel: css34({
    textStyle: "toolbarLabel",
    color: "currentColor"
  }),
  itemDescription: css34({
    textStyle: "small",
    color: "app.text.subtle"
  }),
  itemEnd: css34({
    display: "inline-flex",
    alignItems: "center",
    gap: "2"
  }),
  badge: css34({
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
  footer: css34({
    paddingTop: "4",
    borderTopWidth: "1px",
    borderColor: "app.border"
  })
};
function SidebarNavEntry({
  item,
  renderItem
}) {
  const content = /* @__PURE__ */ jsxs32(Fragment3, {
    children: [
      item.icon && /* @__PURE__ */ jsx41("span", {
        className: styles24.itemIcon,
        children: item.icon
      }),
      /* @__PURE__ */ jsxs32("span", {
        className: styles24.itemText,
        children: [
          /* @__PURE__ */ jsx41("span", {
            className: styles24.itemLabel,
            children: item.label
          }),
          item.description && /* @__PURE__ */ jsx41("span", {
            className: styles24.itemDescription,
            children: item.description
          })
        ]
      }),
      /* @__PURE__ */ jsxs32("span", {
        className: styles24.itemEnd,
        children: [
          item.badge && /* @__PURE__ */ jsx41("span", {
            className: styles24.badge,
            children: item.badge
          }),
          item.endSlot
        ]
      })
    ]
  });
  const className = cx34(styles24.item, item.active && styles24.itemActive);
  const ariaCurrent = item.active ? "page" : undefined;
  if (renderItem) {
    return renderItem({ item, className, content, ariaCurrent });
  }
  if (item.href) {
    return /* @__PURE__ */ jsx41("a", {
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
  return /* @__PURE__ */ jsx41("button", {
    type: "button",
    className,
    onClick: item.onClick,
    disabled: item.disabled,
    "aria-current": ariaCurrent,
    children: content
  });
}
function SidebarNav({ brand, sections, footer, renderItem, className }) {
  return /* @__PURE__ */ jsxs32("nav", {
    className: cx34(styles24.root, className),
    "aria-label": "Sidebar Navigation",
    children: [
      brand && /* @__PURE__ */ jsx41("div", {
        className: styles24.brand,
        children: brand
      }),
      /* @__PURE__ */ jsx41("div", {
        className: styles24.sections,
        children: sections.map((section, index) => /* @__PURE__ */ jsxs32("section", {
          className: styles24.section,
          children: [
            section.title && /* @__PURE__ */ jsx41("p", {
              className: styles24.sectionTitle,
              children: section.title
            }),
            /* @__PURE__ */ jsx41("ul", {
              className: styles24.list,
              children: section.items.map((item, itemIndex) => /* @__PURE__ */ jsx41("li", {
                children: /* @__PURE__ */ jsx41(SidebarNavEntry, {
                  item,
                  renderItem
                })
              }, item.id ?? item.href ?? `${item.label}-${itemIndex}`))
            })
          ]
        }, section.title ?? index))
      }),
      footer && /* @__PURE__ */ jsx41("div", {
        className: styles24.footer,
        children: footer
      })
    ]
  });
}
// src/components/patterns/status-banner.tsx
import { css as css35, cx as cx35 } from "styled-system/css";
import { jsx as jsx42, jsxs as jsxs33 } from "react/jsx-runtime";
"use client";
var styles25 = {
  root: css35({
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    alignItems: "flex-start",
    gap: "3",
    padding: { base: "4", md: "4.5" },
    borderRadius: "l3",
    borderWidth: "1px"
  }),
  iconWrap: css35({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "9",
    borderRadius: "full",
    borderWidth: "1px",
    flexShrink: 0
  }),
  content: css35({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "3",
    minWidth: 0
  }),
  copy: css35({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    minWidth: 0
  }),
  title: css35({
    textStyle: "small",
    fontWeight: "600"
  }),
  description: css35({
    textStyle: "small",
    opacity: 0.92
  }),
  actions: css35({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2.5"
  }),
  info: css35({
    bg: "bg.info",
    borderColor: "border.info",
    color: "fg.info"
  }),
  success: css35({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  warning: css35({
    bg: "bg.warning",
    borderColor: "border.warning",
    color: "fg.warning"
  }),
  error: css35({
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
  return /* @__PURE__ */ jsxs33("section", {
    role: tone === "error" ? "alert" : "status",
    className: cx35(styles25.root, styles25[tone], className),
    children: [
      icon && /* @__PURE__ */ jsx42("div", {
        className: cx35(styles25.iconWrap, styles25[tone]),
        children: icon
      }),
      /* @__PURE__ */ jsxs33("div", {
        className: styles25.content,
        children: [
          /* @__PURE__ */ jsxs33("div", {
            className: styles25.copy,
            children: [
              /* @__PURE__ */ jsx42("div", {
                className: styles25.title,
                children: title
              }),
              description && /* @__PURE__ */ jsx42("div", {
                className: styles25.description,
                children: description
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx42("div", {
            className: styles25.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
// src/components/patterns/step-card.tsx
import { css as css36, cx as cx36 } from "styled-system/css";
import { jsx as jsx43, jsxs as jsxs34 } from "react/jsx-runtime";
"use client";
var styles26 = {
  root: css36({
    display: "flex",
    gap: "4",
    bg: "app.surface",
    borderWidth: "1px",
    borderColor: "app.border",
    boxShadow: "{shadows.whisper}",
    rounded: "l3",
    p: "5"
  }),
  number: css36({
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "app.accent.soft",
    color: "app.accent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "label",
    flexShrink: 0,
    fontWeight: "700"
  }),
  content: css36({
    flex: 1,
    minW: 0
  }),
  title: css36({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  description: css36({
    textStyle: "small",
    color: "app.text.muted",
    mt: "1.5"
  })
};
function StepCard({ step, title, description, children, className }) {
  return /* @__PURE__ */ jsxs34("div", {
    className: cx36(styles26.root, className),
    children: [
      /* @__PURE__ */ jsx43("div", {
        className: styles26.number,
        children: step
      }),
      /* @__PURE__ */ jsxs34("div", {
        className: styles26.content,
        children: [
          /* @__PURE__ */ jsx43("div", {
            className: styles26.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx43("div", {
            className: styles26.description,
            children: description
          }),
          children
        ]
      })
    ]
  });
}
// src/components/patterns/streaming-status.tsx
import { css as css37, cx as cx37 } from "styled-system/css";
import { jsx as jsx44, jsxs as jsxs35 } from "react/jsx-runtime";
"use client";
var styles27 = {
  root: css37({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "4"
  }),
  compactRoot: css37({
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm"
  }),
  header: css37({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "3"
  }),
  headerLeft: css37({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  statusLabel: css37({
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.default"
  }),
  statusLabelError: css37({
    color: "fg.error"
  }),
  progressHint: css37({
    textStyle: "xs",
    color: "fg.muted"
  }),
  trackWrap: css37({
    mb: "3"
  }),
  track: css37({
    h: "2",
    bg: "border.muted",
    rounded: "full",
    overflow: "hidden"
  }),
  range: css37({
    h: "full",
    bg: "colorPalette.9",
    transition: "width 0.3s ease-out",
    rounded: "full"
  }),
  errorBox: css37({
    p: "3",
    bg: "bg.error",
    borderWidth: "1px",
    borderColor: "border.error",
    rounded: "l2",
    display: "flex",
    alignItems: "flex-start",
    gap: "2"
  }),
  errorText: css37({
    textStyle: "sm",
    color: "fg.error"
  }),
  successBox: css37({
    p: "3",
    bg: "bg.success",
    borderWidth: "1px",
    borderColor: "border.success",
    rounded: "l2",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }),
  successText: css37({
    textStyle: "sm",
    color: "fg.success"
  }),
  stepsGrid: css37({
    mt: "4",
    display: "grid",
    gap: "2"
  }),
  step: css37({
    textAlign: "center",
    p: "2",
    rounded: "l2",
    borderWidth: "1px",
    transition: "all 0.15s",
    textStyle: "xs"
  }),
  stepActive: css37({
    bg: "colorPalette.2",
    borderColor: "colorPalette.6",
    color: "colorPalette.11"
  }),
  stepDone: css37({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  stepPending: css37({
    bg: "gray.subtle.bg",
    borderColor: "border.muted",
    color: "fg.muted"
  }),
  abortButton: css37({
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
  iconWrap: css37({
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
    return /* @__PURE__ */ jsxs35("div", {
      className: cx37(styles27.compactRoot, className),
      children: [
        isActive && activeIcon && /* @__PURE__ */ jsx44("span", {
          className: styles27.iconWrap,
          children: activeIcon
        }),
        isComplete && completeIcon && /* @__PURE__ */ jsx44("span", {
          className: styles27.iconWrap,
          children: completeIcon
        }),
        error && errorIcon && /* @__PURE__ */ jsx44("span", {
          className: styles27.iconWrap,
          children: errorIcon
        }),
        /* @__PURE__ */ jsx44("span", {
          className: cx37(styles27.statusLabel, error ? styles27.statusLabelError : undefined),
          children: message || status
        }),
        isActive && hasProgress && /* @__PURE__ */ jsxs35("span", {
          className: styles27.progressHint,
          children: [
            "(",
            progress,
            "%)"
          ]
        }),
        onAbort && isActive && /* @__PURE__ */ jsx44("button", {
          type: "button",
          onClick: onAbort,
          className: styles27.abortButton,
          title: "Abort operation",
          children: "×"
        })
      ]
    });
  }
  const stepKeys = steps?.map((s) => s.key) ?? [];
  const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;
  return /* @__PURE__ */ jsxs35("div", {
    className: cx37(styles27.root, className),
    children: [
      /* @__PURE__ */ jsxs35("div", {
        className: styles27.header,
        children: [
          /* @__PURE__ */ jsxs35("div", {
            className: styles27.headerLeft,
            children: [
              isActive && activeIcon && /* @__PURE__ */ jsx44("span", {
                className: styles27.iconWrap,
                children: activeIcon
              }),
              isComplete && completeIcon && /* @__PURE__ */ jsx44("span", {
                className: styles27.iconWrap,
                children: completeIcon
              }),
              error && errorIcon && /* @__PURE__ */ jsx44("span", {
                className: styles27.iconWrap,
                children: errorIcon
              }),
              /* @__PURE__ */ jsxs35("div", {
                children: [
                  /* @__PURE__ */ jsx44("div", {
                    className: cx37(styles27.statusLabel, error ? styles27.statusLabelError : undefined),
                    children: message || status
                  }),
                  isActive && hasProgress && /* @__PURE__ */ jsxs35("div", {
                    className: styles27.progressHint,
                    children: [
                      progress,
                      "% complete"
                    ]
                  })
                ]
              })
            ]
          }),
          onAbort && isActive && /* @__PURE__ */ jsx44("button", {
            type: "button",
            onClick: onAbort,
            className: styles27.abortButton,
            title: "Abort operation",
            children: "×"
          })
        ]
      }),
      isActive && hasProgress && /* @__PURE__ */ jsx44("div", {
        className: styles27.trackWrap,
        children: /* @__PURE__ */ jsx44("div", {
          className: styles27.track,
          children: /* @__PURE__ */ jsx44("div", {
            className: styles27.range,
            style: { width: `${progress}%` }
          })
        })
      }),
      error && /* @__PURE__ */ jsxs35("div", {
        className: styles27.errorBox,
        children: [
          errorIcon && /* @__PURE__ */ jsx44("span", {
            className: styles27.iconWrap,
            children: errorIcon
          }),
          /* @__PURE__ */ jsx44("span", {
            className: styles27.errorText,
            children: error
          })
        ]
      }),
      isComplete && !error && /* @__PURE__ */ jsxs35("div", {
        className: styles27.successBox,
        children: [
          completeIcon && /* @__PURE__ */ jsx44("span", {
            className: styles27.iconWrap,
            children: completeIcon
          }),
          /* @__PURE__ */ jsx44("span", {
            className: styles27.successText,
            children: "Operation completed successfully"
          })
        ]
      }),
      steps && steps.length > 0 && isActive && /* @__PURE__ */ jsx44("div", {
        className: styles27.stepsGrid,
        style: { gridTemplateColumns: `repeat(${steps.length}, 1fr)` },
        children: steps.map((step, idx) => {
          const isCurrent = step.key === currentStep;
          const isDone = currentIdx >= 0 && idx < currentIdx;
          return /* @__PURE__ */ jsx44("div", {
            className: cx37(styles27.step, isCurrent ? styles27.stepActive : isDone ? styles27.stepDone : styles27.stepPending),
            children: step.label
          }, step.key);
        })
      })
    ]
  });
}
// src/components/patterns/support-panel.tsx
import { css as css38, cx as cx38 } from "styled-system/css";
import { jsx as jsx45, jsxs as jsxs36 } from "react/jsx-runtime";
"use client";
var styles28 = {
  root: css38({
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
  copy: css38({
    display: "flex",
    flexDirection: "column",
    gap: "3"
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
    maxWidth: "2xl"
  }),
  actions: css38({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3"
  }),
  aside: css38({
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
  className
}) {
  return /* @__PURE__ */ jsxs36("section", {
    className: cx38(styles28.root, className),
    children: [
      /* @__PURE__ */ jsxs36("div", {
        className: styles28.copy,
        children: [
          eyebrow && /* @__PURE__ */ jsx45("div", {
            className: styles28.eyebrow,
            children: eyebrow
          }),
          /* @__PURE__ */ jsx45("div", {
            className: styles28.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx45("div", {
            className: styles28.description,
            children: description
          }),
          actions && /* @__PURE__ */ jsx45("div", {
            className: styles28.actions,
            children: actions
          })
        ]
      }),
      aside && /* @__PURE__ */ jsx45("div", {
        className: styles28.aside,
        children: aside
      })
    ]
  });
}
// src/components/patterns/top-toolbar.tsx
import { css as css39, cx as cx39 } from "styled-system/css";
import { jsx as jsx46, jsxs as jsxs37 } from "react/jsx-runtime";
"use client";
var styles29 = {
  root: css39({
    display: "flex",
    flexDirection: "column",
    gap: "4",
    paddingX: { base: "4", md: "6", xl: "8" },
    paddingY: "4"
  }),
  row: css39({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4"
  }),
  left: css39({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    gap: "4",
    minWidth: 0,
    flex: "1"
  }),
  titleBlock: css39({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5"
  }),
  title: css39({
    textStyle: "sectionTitle",
    color: "app.text"
  }),
  subtitle: css39({
    textStyle: "small",
    color: "app.text.muted"
  }),
  center: css39({
    width: "100%",
    maxWidth: { base: "full", md: "28rem" }
  }),
  trailing: css39({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: { base: "flex-start", md: "flex-end" },
    gap: "2.5"
  }),
  children: css39({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "3",
    paddingTop: "4",
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
  return /* @__PURE__ */ jsxs37("div", {
    className: cx39(styles29.root, className),
    children: [
      /* @__PURE__ */ jsxs37("div", {
        className: styles29.row,
        children: [
          /* @__PURE__ */ jsxs37("div", {
            className: styles29.left,
            children: [
              leading,
              (title || subtitle) && /* @__PURE__ */ jsxs37("div", {
                className: styles29.titleBlock,
                children: [
                  title && /* @__PURE__ */ jsx46("div", {
                    className: styles29.title,
                    children: title
                  }),
                  subtitle && /* @__PURE__ */ jsx46("div", {
                    className: styles29.subtitle,
                    children: subtitle
                  })
                ]
              })
            ]
          }),
          center && /* @__PURE__ */ jsx46("div", {
            className: styles29.center,
            children: center
          }),
          trailing && /* @__PURE__ */ jsx46("div", {
            className: styles29.trailing,
            children: trailing
          })
        ]
      }),
      children && /* @__PURE__ */ jsx46("div", {
        className: styles29.children,
        children
      })
    ]
  });
}
// src/components/patterns/value-field.tsx
import { css as css40, cx as cx40 } from "styled-system/css";
import { jsx as jsx47, jsxs as jsxs38 } from "react/jsx-runtime";
"use client";
var styles30 = {
  root: css40({
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    minWidth: 0
  }),
  labelRow: css40({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3"
  }),
  labelWrap: css40({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    minWidth: 0
  }),
  label: css40({
    textStyle: "caption",
    color: "app.text.subtle",
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  }),
  description: css40({
    textStyle: "caption",
    color: "app.text.muted"
  }),
  field: css40({
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
  default: css40({
    bg: "app.surface"
  }),
  muted: css40({
    bg: "app.surface.muted"
  }),
  valueWrap: css40({
    display: "flex",
    alignItems: "center",
    gap: "2",
    minWidth: 0,
    flex: "1 1 auto"
  }),
  icon: css40({
    color: "app.accent",
    flexShrink: 0
  }),
  value: css40({
    textStyle: "small",
    color: "app.text",
    minWidth: 0,
    flex: "1 1 auto",
    wordBreak: "break-word"
  }),
  mono: css40({
    fontFamily: "mono"
  }),
  actions: css40({
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
  return /* @__PURE__ */ jsxs38("div", {
    className: cx40(styles30.root, className),
    children: [
      (label || description) && /* @__PURE__ */ jsx47("div", {
        className: styles30.labelRow,
        children: /* @__PURE__ */ jsxs38("div", {
          className: styles30.labelWrap,
          children: [
            label && /* @__PURE__ */ jsx47("div", {
              className: styles30.label,
              children: label
            }),
            description && /* @__PURE__ */ jsx47("div", {
              className: styles30.description,
              children: description
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs38("div", {
        className: cx40(styles30.field, styles30[tone]),
        children: [
          /* @__PURE__ */ jsxs38("div", {
            className: styles30.valueWrap,
            children: [
              icon && /* @__PURE__ */ jsx47("div", {
                className: styles30.icon,
                children: icon
              }),
              /* @__PURE__ */ jsx47("div", {
                className: cx40(styles30.value, mono && styles30.mono),
                children: value
              })
            ]
          }),
          actions && /* @__PURE__ */ jsx47("div", {
            className: styles30.actions,
            children: actions
          })
        ]
      })
    ]
  });
}
export {
  buildGradientStyle,
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
  SectionPanel,
  SectionHeader,
  SecretField,
  SecondaryNav,
  ResourceList,
  PricingCard,
  PageTitle,
  PageIntro,
  ModelIconCustomizer,
  ModelCardIcon,
  MetricRail,
  ListToolbar,
  LineChart,
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
  AmountSelector,
  ActivityTable,
  ActionCard,
  AccentLabel
};

//# debugId=C8C49FFCB5B82E4764756E2164756E21
//# sourceMappingURL=index.js.map
