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
  return /* @__PURE__ */ jsx("label", {
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
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    cursor: "pointer",
    transition: "all 0.2s ease",
    _hover: { shadow: "md", borderColor: "colorPalette.7", translateY: "-1px" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.8", outlineOffset: "2px" }
  }),
  iconWrap: css2({
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9",
    mb: "3"
  }),
  title: css2({
    textStyle: "label",
    color: "fg.default"
  }),
  description: css2({
    textStyle: "small",
    color: "fg.muted",
    mt: "1"
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
// src/components/patterns/confirm-dialog.tsx
import { css as css3, cx as cx3 } from "styled-system/css";

// src/components/ui/dialog.tsx
import { Dialog, useDialogContext } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { forwardRef } from "react";
import { createStyleContext, styled } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";
import { DialogContext } from "@ark-ui/react/dialog";
import { jsx as jsx3 } from "react/jsx-runtime";
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
var Body = withContext(ark.div, "body");
var Header = withContext(ark.div, "header");
var Footer = withContext(ark.div, "footer");
var StyledButton = styled(ark.button);
var ActionTrigger = forwardRef(function ActionTrigger2(props, ref) {
  const dialog2 = useDialogContext();
  return /* @__PURE__ */ jsx3(StyledButton, {
    ...props,
    ref,
    onClick: () => dialog2.setOpen(false)
  });
});

// src/components/ui/button.tsx
import { ark as ark5 } from "@ark-ui/react/factory";
import { createContext, mergeProps } from "@ark-ui/react/utils";
import { forwardRef as forwardRef3, useMemo } from "react";
import { styled as styled6 } from "styled-system/jsx";
import { button } from "styled-system/recipes";

// src/components/ui/group.tsx
import { ark as ark2 } from "@ark-ui/react";
import { styled as styled2 } from "styled-system/jsx";
import { group } from "styled-system/recipes";
var Group = styled2(ark2.div, group);

// src/components/ui/loader.tsx
import { forwardRef as forwardRef2 } from "react";

// src/components/ui/absolute-center.tsx
import { ark as ark3 } from "@ark-ui/react/factory";
import { styled as styled3 } from "styled-system/jsx";
import { absoluteCenter } from "styled-system/recipes";
var AbsoluteCenter = styled3(ark3.div, absoluteCenter);

// src/components/ui/span.tsx
import { styled as styled4 } from "styled-system/jsx";
var Span = styled4("span");

// src/components/ui/spinner.tsx
import { ark as ark4 } from "@ark-ui/react/factory";
import { styled as styled5 } from "styled-system/jsx";
import { spinner } from "styled-system/recipes";
var Spinner = styled5(ark4.span, spinner);

// src/components/ui/loader.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
"use client";
var Loader = forwardRef2(function Loader2(props, ref) {
  const {
    spinner: spinner2 = /* @__PURE__ */ jsx4(Spinner, {
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
    return /* @__PURE__ */ jsxs2(Span, {
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
    return /* @__PURE__ */ jsxs2(Span, {
      ref,
      display: "contents",
      ...rest,
      children: [
        /* @__PURE__ */ jsx4(AbsoluteCenter, {
          display: "inline-flex",
          children: spinner2
        }),
        /* @__PURE__ */ jsx4(Span, {
          visibility: "hidden",
          display: "contents",
          children
        })
      ]
    });
  }
  return /* @__PURE__ */ jsx4(Span, {
    ref,
    display: "contents",
    ...rest,
    children
  });
});

// src/components/ui/button.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
"use client";
var BaseButton = styled6(ark5.button, button);
var Button = forwardRef3(function Button2(props, ref) {
  const propsContext = useButtonPropsContext();
  const buttonProps = useMemo(() => mergeProps(propsContext, props), [propsContext, props]);
  const { loading, loadingText, children, spinner: spinner2, spinnerPlacement, ...rest } = buttonProps;
  return /* @__PURE__ */ jsx5(BaseButton, {
    type: "button",
    ref,
    ...rest,
    "data-loading": loading ? "" : undefined,
    disabled: loading || rest.disabled,
    children: !props.asChild && loading ? /* @__PURE__ */ jsx5(Loader, {
      spinner: spinner2,
      text: loadingText,
      spinnerPlacement,
      children
    }) : children
  });
});
var ButtonGroup = forwardRef3(function ButtonGroup2(props, ref) {
  const [variantProps, otherProps] = useMemo(() => button.splitVariantProps(props), [props]);
  return /* @__PURE__ */ jsx5(ButtonPropsProvider, {
    value: variantProps,
    children: /* @__PURE__ */ jsx5(Group, {
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

// src/components/patterns/confirm-dialog.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
"use client";
var accentBar = css3({
  h: "3px",
  w: "full",
  roundedTop: "l3"
});
var tealGradient = css3({
  background: "linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})"
});
var dangerGradient = css3({
  background: "linear-gradient(90deg, {colors.fg.error}, {colors.fg.warning})"
});
var bodyText = css3({
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
  return /* @__PURE__ */ jsxs3(Root, {
    open,
    onOpenChange: (details) => onOpenChange(details.open),
    size,
    children: [
      /* @__PURE__ */ jsx6(Backdrop, {}),
      /* @__PURE__ */ jsx6(Positioner, {
        children: /* @__PURE__ */ jsxs3(Content, {
          className,
          children: [
            /* @__PURE__ */ jsx6("div", {
              className: cx3(accentBar, destructive ? dangerGradient : tealGradient)
            }),
            /* @__PURE__ */ jsx6(Header, {
              children: /* @__PURE__ */ jsx6(Title, {
                children: title
              })
            }),
            /* @__PURE__ */ jsx6(Body, {
              children: typeof children === "string" ? /* @__PURE__ */ jsx6("p", {
                className: bodyText,
                children
              }) : children
            }),
            /* @__PURE__ */ jsxs3(Footer, {
              children: [
                /* @__PURE__ */ jsx6(CloseTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx6(Button, {
                    variant: "outline",
                    size: "sm",
                    children: cancelLabel
                  })
                }),
                /* @__PURE__ */ jsx6(Button, {
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
// src/components/patterns/amount-selector.tsx
import { useState } from "react";
import { css as css4, cx as cx4 } from "styled-system/css";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
"use client";
var styles2 = {
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
  return /* @__PURE__ */ jsxs4("div", {
    className: cx4(styles2.root, className),
    children: [
      /* @__PURE__ */ jsxs4("div", {
        children: [
          /* @__PURE__ */ jsx7("div", {
            className: styles2.sectionLabel,
            children: "Select an amount"
          }),
          /* @__PURE__ */ jsx7("div", {
            className: styles2.presetRow,
            children: presets.map((preset) => /* @__PURE__ */ jsxs4("button", {
              type: "button",
              disabled,
              onClick: () => handlePresetClick(preset),
              className: cx4(styles2.presetBase, value === preset && !customInput ? styles2.presetActive : styles2.presetInactive),
              children: [
                currency,
                preset
              ]
            }, preset))
          })
        ]
      }),
      /* @__PURE__ */ jsxs4("div", {
        children: [
          /* @__PURE__ */ jsx7("div", {
            className: styles2.inputLabel,
            children: "Or enter a custom amount"
          }),
          /* @__PURE__ */ jsxs4("div", {
            className: styles2.inputRow,
            children: [
              /* @__PURE__ */ jsx7("span", {
                className: styles2.currencySymbol,
                children: currency
              }),
              /* @__PURE__ */ jsx7("input", {
                type: "number",
                min,
                max,
                step: "0.01",
                value: customInput,
                onChange: (e) => handleCustomChange(e.target.value),
                placeholder: `${min} - ${max}`,
                disabled,
                className: styles2.input
              }),
              /* @__PURE__ */ jsx7("span", {
                className: styles2.currencyCode,
                children: "USD"
              })
            ]
          }),
          validationError && customInput && /* @__PURE__ */ jsx7("div", {
            className: styles2.validationError,
            children: validationError
          })
        ]
      }),
      onSubmit && /* @__PURE__ */ jsx7("button", {
        type: "button",
        disabled: isSubmitDisabled,
        onClick: onSubmit,
        className: styles2.submitBtn,
        children: resolvedLabel
      })
    ]
  });
}
// src/components/patterns/empty-state.tsx
import { css as css5, cx as cx5 } from "styled-system/css";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var styles3 = {
  root: css5({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    py: "16",
    px: "6"
  }),
  iconWrap: css5({
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
  title: css5({
    textStyle: "h3",
    color: "fg.default"
  }),
  description: css5({
    textStyle: "body",
    color: "fg.muted",
    mt: "2",
    maxW: "md"
  }),
  action: css5({
    mt: "6"
  })
};
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs5("div", {
    className: cx5(styles3.root, className),
    children: [
      icon && /* @__PURE__ */ jsx8("div", {
        className: styles3.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx8("h3", {
        className: styles3.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx8("p", {
        className: styles3.description,
        children: description
      }),
      action && /* @__PURE__ */ jsx8("div", {
        className: styles3.action,
        children: action
      })
    ]
  });
}
// src/components/patterns/feature-card.tsx
import { css as css6, cx as cx6 } from "styled-system/css";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
"use client";
var styles4 = {
  root: css6({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    transition: "border-color 0.2s ease",
    _hover: { borderColor: "colorPalette.7" }
  }),
  iconWrap: css6({
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
  title: css6({
    textStyle: "label",
    color: "fg.default",
    mb: "2"
  }),
  description: css6({
    textStyle: "small",
    color: "fg.muted"
  })
};
function FeatureCard({ title, description, icon, className }) {
  return /* @__PURE__ */ jsxs6("div", {
    className: cx6(styles4.root, className),
    children: [
      icon && /* @__PURE__ */ jsx9("div", {
        className: styles4.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx9("div", {
        className: styles4.title,
        children: title
      }),
      /* @__PURE__ */ jsx9("div", {
        className: styles4.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/file-tree.tsx
import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { useCallback, useState as useState2 } from "react";
import { css as css7, cx as cx7 } from "styled-system/css";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
"use client";
var styles5 = {
  root: css7({
    overflow: "auto"
  }),
  node: css7({
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
  nodeSelected: css7({
    bg: "colorPalette.2",
    color: "colorPalette.11",
    _hover: {
      bg: "colorPalette.3"
    }
  }),
  chevron: css7({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted"
  }),
  chevronPlaceholder: css7({
    flexShrink: 0,
    w: "3.5"
  }),
  folderIcon: css7({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "colorPalette.9"
  }),
  fileIcon: css7({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "fg.muted"
  }),
  label: css7({
    truncate: true
  }),
  children: css7({})
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
  return /* @__PURE__ */ jsxs7("div", {
    children: [
      /* @__PURE__ */ jsxs7("div", {
        className: cx7(styles5.node, isSelected && styles5.nodeSelected),
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
          isFolder ? /* @__PURE__ */ jsx10(ChevronRight, {
            className: styles5.chevron,
            "aria-hidden": "true",
            style: {
              transform: isExpanded ? "rotate(90deg)" : undefined,
              transition: "transform 0.15s"
            }
          }) : /* @__PURE__ */ jsx10("span", {
            className: styles5.chevronPlaceholder
          }),
          node.icon ? /* @__PURE__ */ jsx10("span", {
            className: isFolder ? styles5.folderIcon : styles5.fileIcon,
            children: node.icon
          }) : isFolder ? isExpanded ? /* @__PURE__ */ jsx10(FolderOpen, {
            className: styles5.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx10(Folder, {
            className: styles5.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx10(File, {
            className: styles5.fileIcon,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ jsx10("span", {
            className: styles5.label,
            children: node.name
          })
        ]
      }),
      isFolder && isExpanded && node.children && /* @__PURE__ */ jsx10("div", {
        className: styles5.children,
        role: "group",
        children: node.children.map((child) => /* @__PURE__ */ jsx10(TreeNode, {
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
  return /* @__PURE__ */ jsx10("div", {
    className: cx7(styles5.root, className),
    role: "tree",
    children: nodes.map((node) => /* @__PURE__ */ jsx10(TreeNode, {
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
import { css as css8, cx as cx8 } from "styled-system/css";
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
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
var swatchStyle = css8({
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
var hiddenInput = css8({ opacity: 0, position: "absolute", w: 0, h: 0 });
var removeBtn = css8({
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
var addBtn = css8({
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
var pillBase = css8({
  px: "2",
  py: "0.5",
  rounded: "full",
  fontSize: "xs",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var pillActive = css8({ bg: "teal.a3", color: "fg.default" });
var pillInactive = css8({ bg: "transparent", color: "fg.subtle" });
var previewBar = css8({
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
  return /* @__PURE__ */ jsxs8("div", {
    className: cx8(css8({ display: "flex", flexDir: "column", gap: "2", minW: 0 }), className),
    children: [
      /* @__PURE__ */ jsxs8("div", {
        className: css8({ display: "flex", alignItems: "center", gap: "2", flexWrap: "wrap" }),
        children: [
          colors.map((color, i) => /* @__PURE__ */ jsxs8("div", {
            className: css8({ position: "relative" }),
            children: [
              /* @__PURE__ */ jsx11("label", {
                className: swatchStyle,
                style: { backgroundColor: color },
                children: /* @__PURE__ */ jsx11("input", {
                  type: "color",
                  value: color,
                  onChange: (e) => updateColor(i, e.target.value),
                  className: hiddenInput
                })
              }),
              colors.length > 1 && /* @__PURE__ */ jsx11("button", {
                type: "button",
                onClick: () => removeColor(i),
                className: removeBtn,
                children: /* @__PURE__ */ jsx11(X, {
                  size: 10
                })
              })
            ]
          }, i)),
          colors.length < 3 && /* @__PURE__ */ jsx11("button", {
            type: "button",
            onClick: addColor,
            className: addBtn,
            children: /* @__PURE__ */ jsx11(Plus, {
              size: 14
            })
          })
        ]
      }),
      colors.length > 1 && /* @__PURE__ */ jsx11("div", {
        className: css8({ display: "flex", gap: "1", flexWrap: "wrap" }),
        children: ANGLE_PRESETS.map((preset) => /* @__PURE__ */ jsx11("button", {
          type: "button",
          onClick: () => onAngleChange(preset),
          className: cx8(pillBase, angle === preset ? pillActive : pillInactive),
          children: preset
        }, preset))
      }),
      /* @__PURE__ */ jsx11("div", {
        className: previewBar,
        style: { background: buildGradientStyle(colors, angle) }
      })
    ]
  });
}
// src/components/patterns/help-panel.tsx
import { ark as ark6 } from "@ark-ui/react/factory";
import { X as X2 } from "lucide-react";
import { forwardRef as forwardRef4 } from "react";
import { css as css9, cx as cx9 } from "styled-system/css";
import { createStyleContext as createStyleContext2 } from "styled-system/jsx";
import { helpPanel } from "styled-system/recipes";
import { jsx as jsx12, jsxs as jsxs9, Fragment } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider2, withContext: withContext2 } = createStyleContext2(helpPanel);
var HeaderContainer = withContext2(ark6.div, "header");
var HeaderIconBadge = withContext2(ark6.div, "headerIcon");
var AccentBar = withContext2(ark6.div, "accentBar");
var TabButton = withContext2(ark6.button, "tab");
var FooterContainer = withContext2(ark6.div, "footer");
var Root2 = withRootProvider2(ark6.div);
Root2.displayName = "HelpPanel.Root";
var Header2 = forwardRef4(({ icon, title, subtitle, onClose, closeIcon, accentBar: accentBar2 = true, className }, ref) => /* @__PURE__ */ jsxs9(HeaderContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx12(AccentBar, {
      style: { top: 0 }
    }),
    /* @__PURE__ */ jsxs9("div", {
      className: css9({ display: "flex", alignItems: "center", gap: "3" }),
      children: [
        icon && /* @__PURE__ */ jsx12(HeaderIconBadge, {
          children: icon
        }),
        /* @__PURE__ */ jsxs9("div", {
          children: [
            /* @__PURE__ */ jsx12("h2", {
              className: css9({
                fontSize: "sm",
                fontWeight: "semibold",
                color: "fg.default",
                letterSpacing: "wide"
              }),
              children: title
            }),
            subtitle && /* @__PURE__ */ jsx12("p", {
              className: css9({ fontSize: "xs", color: "fg.subtle" }),
              children: subtitle
            })
          ]
        })
      ]
    }),
    onClose && /* @__PURE__ */ jsx12("button", {
      onClick: onClose,
      type: "button",
      className: css9({
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
      children: closeIcon ?? /* @__PURE__ */ jsx12(X2, {
        size: 14,
        "aria-label": "Close"
      })
    })
  ]
}));
Header2.displayName = "HelpPanel.Header";
var TabBar = withContext2(ark6.div, "tabBar");
TabBar.displayName = "HelpPanel.TabBar";
var Tab = forwardRef4(({ active, icon, label, onClick, title, className }, ref) => /* @__PURE__ */ jsxs9(TabButton, {
  ref,
  type: "button",
  onClick,
  title,
  "data-selected": active ? "" : undefined,
  className,
  children: [
    icon,
    /* @__PURE__ */ jsx12("span", {
      className: css9({ display: { base: "none", sm: "inline" } }),
      children: label
    })
  ]
}));
Tab.displayName = "HelpPanel.Tab";
var Content2 = withContext2(ark6.div, "content");
Content2.displayName = "HelpPanel.Content";
var Footer2 = forwardRef4(({ hint, shortcutKey, accentBar: accentBar2 = true, children, className }, ref) => /* @__PURE__ */ jsxs9(FooterContainer, {
  ref,
  className,
  children: [
    accentBar2 && /* @__PURE__ */ jsx12(AccentBar, {
      style: { bottom: 0, opacity: 0.3 }
    }),
    children ?? /* @__PURE__ */ jsxs9(Fragment, {
      children: [
        hint && /* @__PURE__ */ jsx12("span", {
          children: hint
        }),
        shortcutKey && /* @__PURE__ */ jsx12("kbd", {
          className: css9({
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
Footer2.displayName = "HelpPanel.Footer";
function SectionHeading({ label, dotColor, className }) {
  return /* @__PURE__ */ jsxs9("h4", {
    className: cx9(css9({
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
      /* @__PURE__ */ jsx12("span", {
        className: css9({
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
  Root: Root2,
  Header: Header2,
  TabBar,
  Tab,
  Content: Content2,
  Footer: Footer2,
  SectionHeading
};
// src/components/patterns/help-trigger.tsx
import { useCallback as useCallback2 } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
"use client";
function HelpTrigger({ active, onActivate, children }) {
  const handleMouseEnter = useCallback2(() => {
    if (active) {
      onActivate();
    }
  }, [active, onActivate]);
  return /* @__PURE__ */ jsx13("div", {
    style: { display: "contents" },
    onMouseEnter: handleMouseEnter,
    role: "group",
    children
  });
}
// src/components/patterns/icon-badge.tsx
import { css as css10, cx as cx10 } from "styled-system/css";
import { jsx as jsx14 } from "react/jsx-runtime";
"use client";
var base2 = css10({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css10({ w: "8", h: "8" }),
  md: css10({ w: "10", h: "10" }),
  lg: css10({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsx14("div", {
    className: cx10(base2, sizes[size], className),
    children: icon
  });
}
// src/components/patterns/icon-picker.tsx
import { icons } from "lucide-react";
import { useMemo as useMemo2, useState as useState3 } from "react";
import { css as css11, cx as cx11 } from "styled-system/css";

// src/components/ui/input.tsx
import { Field } from "@ark-ui/react/field";
import { styled as styled7 } from "styled-system/jsx";
import { input } from "styled-system/recipes";
var Input = styled7(Field.Input, input);

// src/components/ui/popover.tsx
import { ark as ark7 } from "@ark-ui/react/factory";
import { Popover } from "@ark-ui/react/popover";
import { createStyleContext as createStyleContext3 } from "styled-system/jsx";
import { popover } from "styled-system/recipes";
import { PopoverContext } from "@ark-ui/react/popover";
import { jsx as jsx15 } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider3, withContext: withContext3 } = createStyleContext3(popover);
var Root3 = withRootProvider3(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider2 = withRootProvider3(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Anchor = withContext3(Popover.Anchor, "anchor");
var ArrowTip = withContext3(Popover.ArrowTip, "arrowTip");
var Arrow = withContext3(Popover.Arrow, "arrow", {
  defaultProps: { children: /* @__PURE__ */ jsx15(ArrowTip, {}) }
});
var CloseTrigger2 = withContext3(Popover.CloseTrigger, "closeTrigger");
var Content3 = withContext3(Popover.Content, "content");
var Description2 = withContext3(Popover.Description, "description");
var Indicator = withContext3(Popover.Indicator, "indicator");
var Positioner2 = withContext3(Popover.Positioner, "positioner");
var Title2 = withContext3(Popover.Title, "title");
var Trigger2 = withContext3(Popover.Trigger, "trigger");
var Body2 = withContext3(ark7.div, "body");
var Header3 = withContext3(ark7.div, "header");
var Footer3 = withContext3(ark7.div, "footer");

// src/components/patterns/icon-picker.tsx
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
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
var triggerStyle = css11({
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
var gridStyle = css11({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "1",
  maxH: "220px",
  overflowY: "auto"
});
var cellBase = css11({
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
var cellActive = css11({ bg: "teal.a3" });
var labelStyle = css11({ fontSize: "sm", color: "fg.muted" });
var emptyStyle = css11({ fontSize: "sm", color: "fg.subtle", textAlign: "center", py: "4" });
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
  return /* @__PURE__ */ jsxs10(Root3, {
    portalled: true,
    children: [
      /* @__PURE__ */ jsx16(Trigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsxs10("button", {
          type: "button",
          className: cx11(triggerStyle, className),
          children: [
            SelectedIcon && /* @__PURE__ */ jsx16(SelectedIcon, {
              size: 16
            }),
            /* @__PURE__ */ jsx16("span", {
              className: labelStyle,
              children: value
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx16(Positioner2, {
        className: css11({ zIndex: "popover" }),
        children: /* @__PURE__ */ jsxs10(Content3, {
          className: css11({
            w: "280px",
            p: "3",
            bg: "bg.default",
            borderWidth: "1px",
            borderColor: "border.default",
            shadow: "lg",
            rounded: "lg"
          }),
          children: [
            /* @__PURE__ */ jsx16(Input, {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search icons...",
              size: "sm",
              className: css11({ mb: "2" })
            }),
            /* @__PURE__ */ jsx16("div", {
              className: gridStyle,
              children: displayedIcons.map((name) => {
                const Icon = icons[name];
                if (!Icon)
                  return null;
                return /* @__PURE__ */ jsx16("button", {
                  type: "button",
                  title: name,
                  onClick: () => {
                    onChange(name);
                    setSearch("");
                  },
                  className: cx11(cellBase, name === value && cellActive),
                  children: /* @__PURE__ */ jsx16(Icon, {
                    size: 18
                  })
                }, name);
              })
            }),
            displayedIcons.length === 0 && /* @__PURE__ */ jsx16("p", {
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
import { css as css12, cx as cx12 } from "styled-system/css";
import { token } from "styled-system/tokens";
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
"use client";
var styles6 = {
  root: css12({
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
  return /* @__PURE__ */ jsxs11("svg", {
    viewBox: `0 0 ${width} ${height}`,
    className: cx12(styles6.root, className),
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Line chart",
    children: [
      /* @__PURE__ */ jsx17("defs", {
        children: gradientFill && /* @__PURE__ */ jsxs11("linearGradient", {
          id: gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [
            /* @__PURE__ */ jsx17("stop", {
              offset: "0%",
              stopColor: resolvedColor,
              stopOpacity: "0.3"
            }),
            /* @__PURE__ */ jsx17("stop", {
              offset: "100%",
              stopColor: resolvedColor,
              stopOpacity: "0"
            })
          ]
        })
      }),
      showGrid && /* @__PURE__ */ jsx17("g", {
        opacity: "0.2",
        children: [0, 0.25, 0.5, 0.75, 1].map((ratio) => /* @__PURE__ */ jsx17("line", {
          x1: padding.left,
          y1: padding.top + chartHeight * ratio,
          x2: width - padding.right,
          y2: padding.top + chartHeight * ratio,
          stroke: gridColor,
          strokeDasharray: "2,4"
        }, ratio))
      }),
      gradientFill && /* @__PURE__ */ jsx17("path", {
        d: areaPath,
        fill: `url(#${gradientId})`
      }),
      /* @__PURE__ */ jsx17("path", {
        d: linePath,
        fill: "none",
        stroke: resolvedColor,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      pointsVisible && data.map((d, i) => /* @__PURE__ */ jsx17("circle", {
        cx: scaleX(d.x),
        cy: scaleY(d.y),
        r: "3",
        fill: resolvedColor,
        opacity: "0.8"
      }, `${d.x}-${d.y}-${i}`)),
      showAxis && /* @__PURE__ */ jsxs11("g", {
        children: [
          /* @__PURE__ */ jsx17("text", {
            x: padding.left - 4,
            y: padding.top + 4,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMax.toFixed(0)
          }),
          /* @__PURE__ */ jsx17("text", {
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
// src/components/patterns/model-icon-customizer.tsx
import { icons as icons2 } from "lucide-react";
import { css as css13, cx as cx13 } from "styled-system/css";
import { jsx as jsx18, jsxs as jsxs12 } from "react/jsx-runtime";
"use client";
var DEFAULT_ICON_CONFIG = {
  iconName: "Cpu",
  bgColors: ["#5AB8C4", "#9333ea"],
  bgAngle: 135,
  iconColor: "#ffffff"
};
var cardIconBase = css13({
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
  return /* @__PURE__ */ jsx18("div", {
    className: cx13(cardIconBase, className),
    style: {
      width: size,
      height: size,
      background: buildGradientStyle(c.bgColors, c.bgAngle ?? 135)
    },
    children: Icon && /* @__PURE__ */ jsx18(Icon, {
      size: iconSize,
      style: { color: c.iconColor ?? "#ffffff" }
    })
  });
}
var swatchStyle2 = css13({
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
var hiddenInput2 = css13({ opacity: 0, position: "absolute", w: 0, h: 0 });
var rowStyle = css13({ display: "flex", alignItems: "center", gap: "3" });
var rowStartStyle = css13({ display: "flex", alignItems: "flex-start", gap: "3" });
var labelStyle2 = css13({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0 });
var labelTopStyle = css13({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0, pt: "1" });
function ModelIconCustomizer({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxs12("div", {
    className: cx13(css13({ display: "flex", gap: "4", alignItems: "flex-start" }), className),
    children: [
      /* @__PURE__ */ jsx18(ModelCardIcon, {
        config: value,
        size: 56,
        iconSize: 28
      }),
      /* @__PURE__ */ jsxs12("div", {
        className: css13({ display: "flex", flexDir: "column", gap: "3", flex: 1, minW: 0 }),
        children: [
          /* @__PURE__ */ jsxs12("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx18("label", {
                className: labelStyle2,
                children: "Icon"
              }),
              /* @__PURE__ */ jsx18(IconPicker, {
                value: value.iconName,
                onChange: (iconName) => onChange({ ...value, iconName })
              })
            ]
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: rowStartStyle,
            children: [
              /* @__PURE__ */ jsx18("label", {
                className: labelTopStyle,
                children: "Background"
              }),
              /* @__PURE__ */ jsx18(GradientPicker, {
                colors: value.bgColors,
                angle: value.bgAngle ?? 135,
                onColorsChange: (bgColors) => onChange({ ...value, bgColors }),
                onAngleChange: (bgAngle) => onChange({ ...value, bgAngle })
              })
            ]
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx18("label", {
                className: labelStyle2,
                children: "Icon Color"
              }),
              /* @__PURE__ */ jsx18("label", {
                className: swatchStyle2,
                style: { backgroundColor: value.iconColor ?? "#ffffff" },
                children: /* @__PURE__ */ jsx18("input", {
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
// src/components/patterns/page-title.tsx
import { css as css14, cx as cx14 } from "styled-system/css";
import { jsx as jsx19, jsxs as jsxs13 } from "react/jsx-runtime";
"use client";
var titleStyle = css14({
  textStyle: "h2",
  color: "colorPalette.12"
});
var subtitleStyle = css14({
  textStyle: "description",
  color: "fg.muted",
  mt: "1"
});
function PageTitle({ children, subtitle, className }) {
  return /* @__PURE__ */ jsxs13("div", {
    className,
    children: [
      /* @__PURE__ */ jsx19("h1", {
        className: cx14(titleStyle),
        children
      }),
      subtitle && /* @__PURE__ */ jsx19("p", {
        className: subtitleStyle,
        children: subtitle
      })
    ]
  });
}
// src/components/patterns/pricing-card.tsx
import { css as css15, cx as cx15 } from "styled-system/css";
import { jsx as jsx20, jsxs as jsxs14 } from "react/jsx-runtime";
"use client";
var styles7 = {
  root: css15({
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
  highlighted: css15({
    shadow: "md",
    borderColor: "colorPalette.7"
  }),
  badge: css15({
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
  name: css15({
    textAlign: "center",
    fontSize: "xl",
    fontWeight: "semibold",
    color: "colorPalette.11"
  }),
  description: css15({
    textAlign: "center",
    textStyle: "small",
    color: "fg.muted",
    mb: "4"
  }),
  priceArea: css15({
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    mb: "6"
  }),
  price: css15({
    fontSize: "4xl",
    fontWeight: "bold",
    color: "fg.default"
  }),
  interval: css15({
    color: "fg.muted"
  }),
  featureList: css15({
    listStyle: "none",
    p: "0",
    m: "0",
    display: "flex",
    flexDir: "column",
    gap: "2"
  }),
  featureItem: css15({
    display: "flex",
    flexDir: "row",
    alignItems: "center",
    gap: "2",
    textStyle: "small",
    color: "fg.default"
  }),
  checkmark: css15({
    color: "colorPalette.9",
    flexShrink: 0
  }),
  actionWrap: css15({
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
  return /* @__PURE__ */ jsxs14("div", {
    className: cx15(styles7.root, highlight && styles7.highlighted, className),
    children: [
      badge && /* @__PURE__ */ jsx20("span", {
        className: styles7.badge,
        style: {
          ...badgeBg ? { backgroundColor: badgeBg } : {},
          ...badgeColor ? { color: badgeColor } : {}
        },
        children: badge
      }),
      /* @__PURE__ */ jsx20("div", {
        className: styles7.name,
        style: accentColor ? { color: accentColor } : undefined,
        children: name
      }),
      description && /* @__PURE__ */ jsx20("div", {
        className: styles7.description,
        children: description
      }),
      /* @__PURE__ */ jsxs14("div", {
        className: styles7.priceArea,
        children: [
          /* @__PURE__ */ jsx20("span", {
            className: styles7.price,
            children: price
          }),
          interval && /* @__PURE__ */ jsxs14("span", {
            className: styles7.interval,
            children: [
              "/",
              interval
            ]
          })
        ]
      }),
      features && features.length > 0 && /* @__PURE__ */ jsx20("ul", {
        className: styles7.featureList,
        children: features.map((feature) => /* @__PURE__ */ jsxs14("li", {
          className: styles7.featureItem,
          children: [
            /* @__PURE__ */ jsx20("span", {
              className: styles7.checkmark,
              children: "✓"
            }),
            feature
          ]
        }, feature))
      }),
      action && /* @__PURE__ */ jsx20("div", {
        className: styles7.actionWrap,
        children: action
      })
    ]
  });
}
// src/components/patterns/section-header.tsx
import { css as css16, cx as cx16 } from "styled-system/css";
import { jsx as jsx21, jsxs as jsxs15 } from "react/jsx-runtime";
"use client";
var base3 = css16({
  px: "4",
  py: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: "1px"
});
var variants2 = {
  teal: css16({
    bg: "colorPalette.a2",
    borderColor: "colorPalette.4"
  }),
  wheat: css16({
    bg: "colorPalette.2",
    borderColor: "colorPalette.4"
  })
};
var badgeStyle = css16({
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
var titleStyle2 = css16({
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
  return /* @__PURE__ */ jsxs15("div", {
    className: cx16(base3, variants2[variant], className),
    children: [
      /* @__PURE__ */ jsxs15("div", {
        className: css16({ display: "flex", alignItems: "center", gap: "2" }),
        children: [
          icon && /* @__PURE__ */ jsx21("div", {
            className: badgeStyle,
            children: icon
          }),
          /* @__PURE__ */ jsx21("h3", {
            className: titleStyle2,
            children: title
          })
        ]
      }),
      actions && /* @__PURE__ */ jsx21("div", {
        children: actions
      })
    ]
  });
}
// src/components/patterns/stat-card.tsx
import { css as css17, cx as cx17 } from "styled-system/css";
import { jsx as jsx22, jsxs as jsxs16 } from "react/jsx-runtime";
"use client";
var styles8 = {
  root: css17({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    display: "flex",
    alignItems: "flex-start",
    gap: "4"
  }),
  iconWrap: css17({
    flexShrink: 0,
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9"
  }),
  content: css17({
    flex: 1,
    minW: 0
  }),
  title: css17({
    textStyle: "caption",
    color: "fg.muted",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  }),
  value: css17({
    textStyle: "h2",
    color: "fg.default",
    mt: "1"
  }),
  change: css17({
    textStyle: "small",
    mt: "1"
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
  const changeColor = changeType === "positive" ? css17({ color: "fg.success" }) : changeType === "negative" ? css17({ color: "fg.error" }) : css17({ color: "fg.muted" });
  return /* @__PURE__ */ jsxs16("div", {
    className: cx17(styles8.root, className),
    children: [
      icon && /* @__PURE__ */ jsx22("div", {
        className: styles8.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }),
      /* @__PURE__ */ jsxs16("div", {
        className: styles8.content,
        children: [
          /* @__PURE__ */ jsx22("div", {
            className: styles8.title,
            children: title
          }),
          /* @__PURE__ */ jsx22("div", {
            className: styles8.value,
            children: value
          }),
          /* @__PURE__ */ jsxs16("div", {
            className: css17({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
            children: [
              change && /* @__PURE__ */ jsx22("span", {
                className: cx17(styles8.change, changeColor),
                children: change
              }),
              badge && /* @__PURE__ */ jsx22("span", {
                className: css17({
                  textStyle: "small",
                  px: "2",
                  py: "0.5",
                  rounded: "full",
                  fontSize: "xs"
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
// src/components/patterns/step-card.tsx
import { css as css18, cx as cx18 } from "styled-system/css";
import { jsx as jsx23, jsxs as jsxs17 } from "react/jsx-runtime";
"use client";
var styles9 = {
  root: css18({
    display: "flex",
    gap: "4"
  }),
  number: css18({
    w: "8",
    h: "8",
    rounded: "full",
    bg: "colorPalette.9",
    color: "colorPalette.fg",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "label",
    flexShrink: 0
  }),
  content: css18({
    flex: 1,
    minW: 0
  }),
  title: css18({
    textStyle: "label",
    color: "fg.default"
  }),
  description: css18({
    textStyle: "small",
    color: "fg.muted",
    mt: "1"
  })
};
function StepCard({ step, title, description, children, className }) {
  return /* @__PURE__ */ jsxs17("div", {
    className: cx18(styles9.root, className),
    children: [
      /* @__PURE__ */ jsx23("div", {
        className: styles9.number,
        children: step
      }),
      /* @__PURE__ */ jsxs17("div", {
        className: styles9.content,
        children: [
          /* @__PURE__ */ jsx23("div", {
            className: styles9.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx23("div", {
            className: styles9.description,
            children: description
          }),
          children
        ]
      })
    ]
  });
}
// src/components/patterns/streaming-status.tsx
import { css as css19, cx as cx19 } from "styled-system/css";
import { jsx as jsx24, jsxs as jsxs18 } from "react/jsx-runtime";
"use client";
var styles10 = {
  root: css19({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "4"
  }),
  compactRoot: css19({
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm"
  }),
  header: css19({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "3"
  }),
  headerLeft: css19({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  statusLabel: css19({
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.default"
  }),
  statusLabelError: css19({
    color: "fg.error"
  }),
  progressHint: css19({
    textStyle: "xs",
    color: "fg.muted"
  }),
  trackWrap: css19({
    mb: "3"
  }),
  track: css19({
    h: "2",
    bg: "border.muted",
    rounded: "full",
    overflow: "hidden"
  }),
  range: css19({
    h: "full",
    bg: "colorPalette.9",
    transition: "width 0.3s ease-out",
    rounded: "full"
  }),
  errorBox: css19({
    p: "3",
    bg: "bg.error",
    borderWidth: "1px",
    borderColor: "border.error",
    rounded: "l2",
    display: "flex",
    alignItems: "flex-start",
    gap: "2"
  }),
  errorText: css19({
    textStyle: "sm",
    color: "fg.error"
  }),
  successBox: css19({
    p: "3",
    bg: "bg.success",
    borderWidth: "1px",
    borderColor: "border.success",
    rounded: "l2",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }),
  successText: css19({
    textStyle: "sm",
    color: "fg.success"
  }),
  stepsGrid: css19({
    mt: "4",
    display: "grid",
    gap: "2"
  }),
  step: css19({
    textAlign: "center",
    p: "2",
    rounded: "l2",
    borderWidth: "1px",
    transition: "all 0.15s",
    textStyle: "xs"
  }),
  stepActive: css19({
    bg: "colorPalette.2",
    borderColor: "colorPalette.6",
    color: "colorPalette.11"
  }),
  stepDone: css19({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  stepPending: css19({
    bg: "gray.subtle.bg",
    borderColor: "border.muted",
    color: "fg.muted"
  }),
  abortButton: css19({
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
  iconWrap: css19({
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
    return /* @__PURE__ */ jsxs18("div", {
      className: cx19(styles10.compactRoot, className),
      children: [
        isActive && activeIcon && /* @__PURE__ */ jsx24("span", {
          className: styles10.iconWrap,
          children: activeIcon
        }),
        isComplete && completeIcon && /* @__PURE__ */ jsx24("span", {
          className: styles10.iconWrap,
          children: completeIcon
        }),
        error && errorIcon && /* @__PURE__ */ jsx24("span", {
          className: styles10.iconWrap,
          children: errorIcon
        }),
        /* @__PURE__ */ jsx24("span", {
          className: cx19(styles10.statusLabel, error ? styles10.statusLabelError : undefined),
          children: message || status
        }),
        isActive && hasProgress && /* @__PURE__ */ jsxs18("span", {
          className: styles10.progressHint,
          children: [
            "(",
            progress,
            "%)"
          ]
        }),
        onAbort && isActive && /* @__PURE__ */ jsx24("button", {
          type: "button",
          onClick: onAbort,
          className: styles10.abortButton,
          title: "Abort operation",
          children: "×"
        })
      ]
    });
  }
  const stepKeys = steps?.map((s) => s.key) ?? [];
  const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;
  return /* @__PURE__ */ jsxs18("div", {
    className: cx19(styles10.root, className),
    children: [
      /* @__PURE__ */ jsxs18("div", {
        className: styles10.header,
        children: [
          /* @__PURE__ */ jsxs18("div", {
            className: styles10.headerLeft,
            children: [
              isActive && activeIcon && /* @__PURE__ */ jsx24("span", {
                className: styles10.iconWrap,
                children: activeIcon
              }),
              isComplete && completeIcon && /* @__PURE__ */ jsx24("span", {
                className: styles10.iconWrap,
                children: completeIcon
              }),
              error && errorIcon && /* @__PURE__ */ jsx24("span", {
                className: styles10.iconWrap,
                children: errorIcon
              }),
              /* @__PURE__ */ jsxs18("div", {
                children: [
                  /* @__PURE__ */ jsx24("div", {
                    className: cx19(styles10.statusLabel, error ? styles10.statusLabelError : undefined),
                    children: message || status
                  }),
                  isActive && hasProgress && /* @__PURE__ */ jsxs18("div", {
                    className: styles10.progressHint,
                    children: [
                      progress,
                      "% complete"
                    ]
                  })
                ]
              })
            ]
          }),
          onAbort && isActive && /* @__PURE__ */ jsx24("button", {
            type: "button",
            onClick: onAbort,
            className: styles10.abortButton,
            title: "Abort operation",
            children: "×"
          })
        ]
      }),
      isActive && hasProgress && /* @__PURE__ */ jsx24("div", {
        className: styles10.trackWrap,
        children: /* @__PURE__ */ jsx24("div", {
          className: styles10.track,
          children: /* @__PURE__ */ jsx24("div", {
            className: styles10.range,
            style: { width: `${progress}%` }
          })
        })
      }),
      error && /* @__PURE__ */ jsxs18("div", {
        className: styles10.errorBox,
        children: [
          errorIcon && /* @__PURE__ */ jsx24("span", {
            className: styles10.iconWrap,
            children: errorIcon
          }),
          /* @__PURE__ */ jsx24("span", {
            className: styles10.errorText,
            children: error
          })
        ]
      }),
      isComplete && !error && /* @__PURE__ */ jsxs18("div", {
        className: styles10.successBox,
        children: [
          completeIcon && /* @__PURE__ */ jsx24("span", {
            className: styles10.iconWrap,
            children: completeIcon
          }),
          /* @__PURE__ */ jsx24("span", {
            className: styles10.successText,
            children: "Operation completed successfully"
          })
        ]
      }),
      steps && steps.length > 0 && isActive && /* @__PURE__ */ jsx24("div", {
        className: styles10.stepsGrid,
        style: { gridTemplateColumns: `repeat(${steps.length}, 1fr)` },
        children: steps.map((step, idx) => {
          const isCurrent = step.key === currentStep;
          const isDone = currentIdx >= 0 && idx < currentIdx;
          return /* @__PURE__ */ jsx24("div", {
            className: cx19(styles10.step, isCurrent ? styles10.stepActive : isDone ? styles10.stepDone : styles10.stepPending),
            children: step.label
          }, step.key);
        })
      })
    ]
  });
}
export {
  buildGradientStyle,
  StreamingStatus,
  StepCard,
  StatCard,
  SectionHeader,
  PricingCard,
  PageTitle,
  ModelIconCustomizer,
  ModelCardIcon,
  LineChart,
  IconPicker,
  IconBadge,
  HelpTrigger,
  HelpPanel,
  GradientPicker,
  FileTree,
  FeatureCard,
  EmptyState,
  DEFAULT_ICON_CONFIG,
  ConfirmDialog,
  AmountSelector,
  ActionCard,
  AccentLabel
};

//# debugId=A6AFB11C82B71D1B64756E2164756E21
//# sourceMappingURL=index.js.map
