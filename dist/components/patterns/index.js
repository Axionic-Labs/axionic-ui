// src/components/patterns/action-card.tsx
import { css, cx } from "styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
"use client";
var styles = {
  root: css({
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
  iconWrap: css({
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
  title: css({
    textStyle: "label",
    color: "fg.default"
  }),
  description: css({
    textStyle: "small",
    color: "fg.muted",
    mt: "1"
  })
};
function ActionCard({ title, description, icon, iconBg, iconColor, onClick, className }) {
  return /* @__PURE__ */ jsxs("div", {
    role: "button",
    tabIndex: 0,
    className: cx(styles.root, className),
    onClick,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    },
    children: [
      icon && /* @__PURE__ */ jsx("div", {
        className: styles.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }),
      /* @__PURE__ */ jsx("div", {
        className: styles.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx("div", {
        className: styles.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/empty-state.tsx
import { css as css2, cx as cx2 } from "styled-system/css";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
"use client";
var styles2 = {
  root: css2({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    py: "16",
    px: "6"
  }),
  iconWrap: css2({
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
  title: css2({
    textStyle: "h3",
    color: "fg.default"
  }),
  description: css2({
    textStyle: "body",
    color: "fg.muted",
    mt: "2",
    maxW: "md"
  }),
  action: css2({
    mt: "6"
  })
};
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs2("div", {
    className: cx2(styles2.root, className),
    children: [
      icon && /* @__PURE__ */ jsx2("div", {
        className: styles2.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx2("h3", {
        className: styles2.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx2("p", {
        className: styles2.description,
        children: description
      }),
      action && /* @__PURE__ */ jsx2("div", {
        className: styles2.action,
        children: action
      })
    ]
  });
}
// src/components/patterns/feature-card.tsx
import { css as css3, cx as cx3 } from "styled-system/css";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
"use client";
var styles3 = {
  root: css3({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    transition: "border-color 0.2s ease",
    _hover: { borderColor: "colorPalette.7" }
  }),
  iconWrap: css3({
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
  title: css3({
    textStyle: "label",
    color: "fg.default",
    mb: "2"
  }),
  description: css3({
    textStyle: "small",
    color: "fg.muted"
  })
};
function FeatureCard({ title, description, icon, className }) {
  return /* @__PURE__ */ jsxs3("div", {
    className: cx3(styles3.root, className),
    children: [
      icon && /* @__PURE__ */ jsx3("div", {
        className: styles3.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx3("div", {
        className: styles3.title,
        children: title
      }),
      /* @__PURE__ */ jsx3("div", {
        className: styles3.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/file-tree.tsx
import { useCallback, useState } from "react";
import { css as css4, cx as cx4 } from "styled-system/css";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
"use client";
var styles4 = {
  root: css4({
    overflow: "auto"
  }),
  node: css4({
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
  nodeSelected: css4({
    bg: "colorPalette.2",
    color: "colorPalette.11",
    _hover: {
      bg: "colorPalette.3"
    }
  }),
  chevron: css4({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted"
  }),
  chevronPlaceholder: css4({
    flexShrink: 0,
    w: "3.5"
  }),
  folderIcon: css4({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "colorPalette.9"
  }),
  fileIcon: css4({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "fg.muted"
  }),
  label: css4({
    truncate: true
  }),
  children: css4({})
};
function ChevronIcon({ open }) {
  return /* @__PURE__ */ jsx4("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: styles4.chevron,
    style: { transform: open ? "rotate(90deg)" : undefined, transition: "transform 0.15s" },
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx4("path", {
      d: "M6 4l4 4-4 4"
    })
  });
}
function FolderIcon({ open }) {
  return /* @__PURE__ */ jsx4("svg", {
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className: styles4.folderIcon,
    "aria-hidden": "true",
    children: open ? /* @__PURE__ */ jsx4("path", {
      d: "M1 3.5A1.5 1.5 0 012.5 2h3.172a1.5 1.5 0 011.06.44l.828.828a.5.5 0 00.354.146H13.5A1.5 1.5 0 0115 4.914V5H2.5A1.5 1.5 0 001 6.5V3.5zM1.059 6A1.5 1.5 0 012.5 5h11a1.5 1.5 0 011.441 1.91l-1.2 4.2A1.5 1.5 0 0112.3 12H3.7a1.5 1.5 0 01-1.441-1.089l-1.2-4.2A1.5 1.5 0 011.059 6z"
    }) : /* @__PURE__ */ jsx4("path", {
      d: "M2.5 2A1.5 1.5 0 001 3.5v9A1.5 1.5 0 002.5 14h11a1.5 1.5 0 001.5-1.5V5.414a1.5 1.5 0 00-1.5-1.5H8.414a.5.5 0 01-.354-.146l-.828-.828A1.5 1.5 0 006.172 2.5H2.5z"
    })
  });
}
function FileIcon() {
  return /* @__PURE__ */ jsx4("svg", {
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className: styles4.fileIcon,
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx4("path", {
      d: "M4 1.5A1.5 1.5 0 015.5 0h4.586a.5.5 0 01.354.146l3.414 3.414a.5.5 0 01.146.354V14.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 014 14.5V1.5zM5.5 1a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V4.5H10.5A1.5 1.5 0 019 3V1H5.5z"
    })
  });
}
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
  return /* @__PURE__ */ jsxs4("div", {
    children: [
      /* @__PURE__ */ jsxs4("div", {
        className: cx4(styles4.node, isSelected && styles4.nodeSelected),
        style: { paddingLeft: `${depth * 20 + 8}px` },
        onClick: handleClick,
        role: "treeitem",
        "aria-selected": isSelected,
        "aria-expanded": isFolder ? isExpanded : undefined,
        children: [
          isFolder ? /* @__PURE__ */ jsx4(ChevronIcon, {
            open: isExpanded
          }) : /* @__PURE__ */ jsx4("span", {
            className: styles4.chevronPlaceholder
          }),
          node.icon ? /* @__PURE__ */ jsx4("span", {
            className: isFolder ? styles4.folderIcon : styles4.fileIcon,
            children: node.icon
          }) : isFolder ? /* @__PURE__ */ jsx4(FolderIcon, {
            open: isExpanded
          }) : /* @__PURE__ */ jsx4(FileIcon, {}),
          /* @__PURE__ */ jsx4("span", {
            className: styles4.label,
            children: node.name
          })
        ]
      }),
      isFolder && isExpanded && node.children && /* @__PURE__ */ jsx4("div", {
        className: styles4.children,
        role: "group",
        children: node.children.map((child) => /* @__PURE__ */ jsx4(TreeNode, {
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
  const [expandedIds, setExpandedIds] = useState(() => new Set(defaultExpanded));
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
  return /* @__PURE__ */ jsx4("div", {
    className: cx4(styles4.root, className),
    role: "tree",
    children: nodes.map((node) => /* @__PURE__ */ jsx4(TreeNode, {
      node,
      depth: 0,
      selectedId,
      expandedIds,
      onToggle: handleToggle,
      onSelect
    }, node.id))
  });
}
// src/components/patterns/help-panel.tsx
import { forwardRef } from "react";
import { css as css5, cx as cx5 } from "styled-system/css";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var Root = forwardRef(({ children, className }, ref) => /* @__PURE__ */ jsx5("div", {
  ref,
  className: cx5(css5({
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: 40,
    h: "full",
    w: "96",
    bgGradient: "to-b",
    gradientFrom: "bg.subtle",
    gradientTo: "bg.default",
    borderLeftWidth: "1px",
    borderColor: "border.default",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2xl",
    overflow: "hidden",
    animation: "slide-in-right 200ms ease-out"
  }), className),
  children
}));
Root.displayName = "HelpPanel.Root";
var Header = forwardRef(({ icon, title, subtitle, onClose, closeIcon, accentBar = true, className }, ref) => /* @__PURE__ */ jsxs5("div", {
  ref,
  className: cx5(css5({
    position: "relative",
    px: "4",
    py: "3",
    borderBottomWidth: "1px",
    borderColor: "border.default",
    bg: "bg.default"
  }), className),
  children: [
    accentBar && /* @__PURE__ */ jsx5("div", {
      className: css5({
        position: "absolute",
        insetInline: "0",
        top: "0",
        h: "0.5",
        bgGradient: "to-r",
        gradientFrom: "colorPalette.7",
        gradientVia: "colorPalette.9",
        gradientTo: "colorPalette.11"
      })
    }),
    /* @__PURE__ */ jsxs5("div", {
      className: css5({ display: "flex", alignItems: "center", justifyContent: "space-between" }),
      children: [
        /* @__PURE__ */ jsxs5("div", {
          className: css5({ display: "flex", alignItems: "center", gap: "3" }),
          children: [
            icon && /* @__PURE__ */ jsx5("div", {
              className: css5({
                w: "8",
                h: "8",
                borderRadius: "l2",
                bg: "colorPalette.a3",
                borderWidth: "1px",
                borderColor: "colorPalette.8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "colorPalette.11"
              }),
              children: icon
            }),
            /* @__PURE__ */ jsxs5("div", {
              children: [
                /* @__PURE__ */ jsx5("h2", {
                  className: css5({
                    fontSize: "sm",
                    fontWeight: "semibold",
                    color: "fg.default",
                    letterSpacing: "wide"
                  }),
                  children: title
                }),
                subtitle && /* @__PURE__ */ jsx5("p", {
                  className: css5({ fontSize: "xs", color: "fg.subtle" }),
                  children: subtitle
                })
              ]
            })
          ]
        }),
        onClose && /* @__PURE__ */ jsx5("button", {
          onClick: onClose,
          type: "button",
          className: css5({
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
          children: closeIcon ?? /* @__PURE__ */ jsxs5("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ jsx5("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              /* @__PURE__ */ jsx5("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ]
          })
        })
      ]
    })
  ]
}));
Header.displayName = "HelpPanel.Header";
var TabBar = forwardRef(({ children, className }, ref) => /* @__PURE__ */ jsx5("div", {
  ref,
  className: cx5(css5({
    px: "2",
    py: "2",
    bg: "bg.default",
    borderBottomWidth: "1px",
    borderColor: "border.default/50"
  }), className),
  children: /* @__PURE__ */ jsx5("div", {
    className: css5({ display: "flex", flexWrap: "wrap", gap: "1" }),
    children
  })
}));
TabBar.displayName = "HelpPanel.TabBar";
var Tab = forwardRef(({ active, icon, label, onClick, title, className }, ref) => /* @__PURE__ */ jsxs5("button", {
  ref,
  type: "button",
  onClick,
  title,
  "data-selected": active ? "" : undefined,
  className: cx5(css5({
    display: "flex",
    alignItems: "center",
    gap: "1.5",
    px: "2.5",
    py: "1.5",
    borderRadius: "l2",
    fontSize: "xs",
    fontWeight: "medium",
    transition: "all",
    borderWidth: "1px",
    cursor: "pointer",
    color: "fg.subtle",
    borderColor: "transparent",
    _hover: {
      color: "fg.default",
      bg: "bg.emphasized"
    },
    "&[data-selected]": {
      bg: "colorPalette.a3",
      color: "colorPalette.11",
      borderColor: "colorPalette.8"
    }
  }), className),
  children: [
    icon,
    /* @__PURE__ */ jsx5("span", {
      className: css5({ display: { base: "none", sm: "inline" } }),
      children: label
    })
  ]
}));
Tab.displayName = "HelpPanel.Tab";
var Content = forwardRef(({ children, className }, ref) => /* @__PURE__ */ jsx5("div", {
  ref,
  className: cx5(css5({ flex: "1", overflowY: "auto" }), className),
  children
}));
Content.displayName = "HelpPanel.Content";
var Footer = forwardRef(({ hint, shortcutKey, accentBar = true, children, className }, ref) => /* @__PURE__ */ jsxs5("div", {
  ref,
  className: cx5(css5({
    position: "relative",
    px: "4",
    py: "2.5",
    borderTopWidth: "1px",
    borderColor: "border.default",
    bg: "bg.default"
  }), className),
  children: [
    accentBar && /* @__PURE__ */ jsx5("div", {
      className: css5({
        position: "absolute",
        insetInline: "0",
        bottom: "0",
        h: "0.5",
        bgGradient: "to-r",
        gradientFrom: "colorPalette.7",
        gradientVia: "colorPalette.9",
        gradientTo: "colorPalette.11",
        opacity: 0.3
      })
    }),
    children ?? /* @__PURE__ */ jsxs5("div", {
      className: css5({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "xs",
        color: "fg.subtle"
      }),
      children: [
        hint && /* @__PURE__ */ jsx5("span", {
          children: hint
        }),
        shortcutKey && /* @__PURE__ */ jsx5("kbd", {
          className: css5({
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
Footer.displayName = "HelpPanel.Footer";
function SectionHeading({ label, dotColor, className }) {
  return /* @__PURE__ */ jsxs5("h4", {
    className: cx5(css5({
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
      /* @__PURE__ */ jsx5("span", {
        className: css5({
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
  Root,
  Header,
  TabBar,
  Tab,
  Content,
  Footer,
  SectionHeading
};
// src/components/patterns/help-trigger.tsx
import { useCallback as useCallback2 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
"use client";
function HelpTrigger({ active, onActivate, children }) {
  const handleMouseEnter = useCallback2(() => {
    if (active) {
      onActivate();
    }
  }, [active, onActivate]);
  return /* @__PURE__ */ jsx6("div", {
    style: { display: "contents" },
    onMouseEnter: handleMouseEnter,
    role: "group",
    children
  });
}
// src/components/patterns/icon-badge.tsx
import { css as css6, cx as cx6 } from "styled-system/css";
import { jsx as jsx7 } from "react/jsx-runtime";
"use client";
var base = css6({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css6({ w: "8", h: "8" }),
  md: css6({ w: "10", h: "10" }),
  lg: css6({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsx7("div", {
    className: cx6(base, sizes[size], className),
    children: icon
  });
}
// src/components/patterns/line-chart.tsx
import { useRef } from "react";
import { css as css7, cx as cx7 } from "styled-system/css";
import { token } from "styled-system/tokens";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
"use client";
var styles5 = {
  root: css7({
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
  return /* @__PURE__ */ jsxs6("svg", {
    viewBox: `0 0 ${width} ${height}`,
    className: cx7(styles5.root, className),
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Line chart",
    children: [
      /* @__PURE__ */ jsx8("defs", {
        children: gradientFill && /* @__PURE__ */ jsxs6("linearGradient", {
          id: gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [
            /* @__PURE__ */ jsx8("stop", {
              offset: "0%",
              stopColor: resolvedColor,
              stopOpacity: "0.3"
            }),
            /* @__PURE__ */ jsx8("stop", {
              offset: "100%",
              stopColor: resolvedColor,
              stopOpacity: "0"
            })
          ]
        })
      }),
      showGrid && /* @__PURE__ */ jsx8("g", {
        opacity: "0.2",
        children: [0, 0.25, 0.5, 0.75, 1].map((ratio) => /* @__PURE__ */ jsx8("line", {
          x1: padding.left,
          y1: padding.top + chartHeight * ratio,
          x2: width - padding.right,
          y2: padding.top + chartHeight * ratio,
          stroke: gridColor,
          strokeDasharray: "2,4"
        }, ratio))
      }),
      gradientFill && /* @__PURE__ */ jsx8("path", {
        d: areaPath,
        fill: `url(#${gradientId})`
      }),
      /* @__PURE__ */ jsx8("path", {
        d: linePath,
        fill: "none",
        stroke: resolvedColor,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      pointsVisible && data.map((d, i) => /* @__PURE__ */ jsx8("circle", {
        cx: scaleX(d.x),
        cy: scaleY(d.y),
        r: "3",
        fill: resolvedColor,
        opacity: "0.8"
      }, `${d.x}-${d.y}-${i}`)),
      showAxis && /* @__PURE__ */ jsxs6("g", {
        children: [
          /* @__PURE__ */ jsx8("text", {
            x: padding.left - 4,
            y: padding.top + 4,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMax.toFixed(0)
          }),
          /* @__PURE__ */ jsx8("text", {
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
// src/components/patterns/stat-card.tsx
import { css as css8, cx as cx8 } from "styled-system/css";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
"use client";
var styles6 = {
  root: css8({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    display: "flex",
    alignItems: "flex-start",
    gap: "4"
  }),
  iconWrap: css8({
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
  content: css8({
    flex: 1,
    minW: 0
  }),
  title: css8({
    textStyle: "caption",
    color: "fg.muted",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  }),
  value: css8({
    textStyle: "h2",
    color: "fg.default",
    mt: "1"
  }),
  change: css8({
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
  const changeColor = changeType === "positive" ? css8({ color: "{colors.green.11}" }) : changeType === "negative" ? css8({ color: "{colors.red.11}" }) : css8({ color: "fg.muted" });
  return /* @__PURE__ */ jsxs7("div", {
    className: cx8(styles6.root, className),
    children: [
      icon && /* @__PURE__ */ jsx9("div", {
        className: styles6.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }),
      /* @__PURE__ */ jsxs7("div", {
        className: styles6.content,
        children: [
          /* @__PURE__ */ jsx9("div", {
            className: styles6.title,
            children: title
          }),
          /* @__PURE__ */ jsx9("div", {
            className: styles6.value,
            children: value
          }),
          /* @__PURE__ */ jsxs7("div", {
            className: css8({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
            children: [
              change && /* @__PURE__ */ jsx9("span", {
                className: cx8(styles6.change, changeColor),
                children: change
              }),
              badge && /* @__PURE__ */ jsx9("span", {
                className: css8({
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
import { css as css9, cx as cx9 } from "styled-system/css";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
"use client";
var styles7 = {
  root: css9({
    display: "flex",
    gap: "4"
  }),
  number: css9({
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
  content: css9({
    flex: 1,
    minW: 0
  }),
  title: css9({
    textStyle: "label",
    color: "fg.default"
  }),
  description: css9({
    textStyle: "small",
    color: "fg.muted",
    mt: "1"
  })
};
function StepCard({ step, title, description, children, className }) {
  return /* @__PURE__ */ jsxs8("div", {
    className: cx9(styles7.root, className),
    children: [
      /* @__PURE__ */ jsx10("div", {
        className: styles7.number,
        children: step
      }),
      /* @__PURE__ */ jsxs8("div", {
        className: styles7.content,
        children: [
          /* @__PURE__ */ jsx10("div", {
            className: styles7.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx10("div", {
            className: styles7.description,
            children: description
          }),
          children
        ]
      })
    ]
  });
}
// src/components/patterns/streaming-status.tsx
import { css as css10, cx as cx10 } from "styled-system/css";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
"use client";
var styles8 = {
  root: css10({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "4"
  }),
  compactRoot: css10({
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm"
  }),
  header: css10({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "3"
  }),
  headerLeft: css10({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  statusLabel: css10({
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.default"
  }),
  statusLabelError: css10({
    color: "{colors.red.11}"
  }),
  progressHint: css10({
    textStyle: "xs",
    color: "fg.muted"
  }),
  trackWrap: css10({
    mb: "3"
  }),
  track: css10({
    h: "2",
    bg: "border.muted",
    rounded: "full",
    overflow: "hidden"
  }),
  range: css10({
    h: "full",
    bg: "colorPalette.9",
    transition: "width 0.3s ease-out",
    rounded: "full"
  }),
  errorBox: css10({
    p: "3",
    bg: "{colors.red.2}",
    borderWidth: "1px",
    borderColor: "{colors.red.6}",
    rounded: "l2",
    display: "flex",
    alignItems: "flex-start",
    gap: "2"
  }),
  errorText: css10({
    textStyle: "sm",
    color: "{colors.red.11}"
  }),
  successBox: css10({
    p: "3",
    bg: "{colors.green.2}",
    borderWidth: "1px",
    borderColor: "{colors.green.6}",
    rounded: "l2",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }),
  successText: css10({
    textStyle: "sm",
    color: "{colors.green.11}"
  }),
  stepsGrid: css10({
    mt: "4",
    display: "grid",
    gap: "2"
  }),
  step: css10({
    textAlign: "center",
    p: "2",
    rounded: "l2",
    borderWidth: "1px",
    transition: "all 0.15s",
    textStyle: "xs"
  }),
  stepActive: css10({
    bg: "colorPalette.2",
    borderColor: "colorPalette.6",
    color: "colorPalette.11"
  }),
  stepDone: css10({
    bg: "{colors.green.2}",
    borderColor: "{colors.green.6}",
    color: "{colors.green.11}"
  }),
  stepPending: css10({
    bg: "gray.subtle.bg",
    borderColor: "border.muted",
    color: "fg.muted"
  }),
  abortButton: css10({
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
  iconWrap: css10({
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
    return /* @__PURE__ */ jsxs9("div", {
      className: cx10(styles8.compactRoot, className),
      children: [
        isActive && activeIcon && /* @__PURE__ */ jsx11("span", {
          className: styles8.iconWrap,
          children: activeIcon
        }),
        isComplete && completeIcon && /* @__PURE__ */ jsx11("span", {
          className: styles8.iconWrap,
          children: completeIcon
        }),
        error && errorIcon && /* @__PURE__ */ jsx11("span", {
          className: styles8.iconWrap,
          children: errorIcon
        }),
        /* @__PURE__ */ jsx11("span", {
          className: cx10(styles8.statusLabel, error ? styles8.statusLabelError : undefined),
          children: message || status
        }),
        isActive && hasProgress && /* @__PURE__ */ jsxs9("span", {
          className: styles8.progressHint,
          children: [
            "(",
            progress,
            "%)"
          ]
        }),
        onAbort && isActive && /* @__PURE__ */ jsx11("button", {
          onClick: onAbort,
          className: styles8.abortButton,
          title: "Abort operation",
          children: "×"
        })
      ]
    });
  }
  const stepKeys = steps?.map((s) => s.key) ?? [];
  const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;
  return /* @__PURE__ */ jsxs9("div", {
    className: cx10(styles8.root, className),
    children: [
      /* @__PURE__ */ jsxs9("div", {
        className: styles8.header,
        children: [
          /* @__PURE__ */ jsxs9("div", {
            className: styles8.headerLeft,
            children: [
              isActive && activeIcon && /* @__PURE__ */ jsx11("span", {
                className: styles8.iconWrap,
                children: activeIcon
              }),
              isComplete && completeIcon && /* @__PURE__ */ jsx11("span", {
                className: styles8.iconWrap,
                children: completeIcon
              }),
              error && errorIcon && /* @__PURE__ */ jsx11("span", {
                className: styles8.iconWrap,
                children: errorIcon
              }),
              /* @__PURE__ */ jsxs9("div", {
                children: [
                  /* @__PURE__ */ jsx11("div", {
                    className: cx10(styles8.statusLabel, error ? styles8.statusLabelError : undefined),
                    children: message || status
                  }),
                  isActive && hasProgress && /* @__PURE__ */ jsxs9("div", {
                    className: styles8.progressHint,
                    children: [
                      progress,
                      "% complete"
                    ]
                  })
                ]
              })
            ]
          }),
          onAbort && isActive && /* @__PURE__ */ jsx11("button", {
            onClick: onAbort,
            className: styles8.abortButton,
            title: "Abort operation",
            children: "×"
          })
        ]
      }),
      isActive && hasProgress && /* @__PURE__ */ jsx11("div", {
        className: styles8.trackWrap,
        children: /* @__PURE__ */ jsx11("div", {
          className: styles8.track,
          children: /* @__PURE__ */ jsx11("div", {
            className: styles8.range,
            style: { width: `${progress}%` }
          })
        })
      }),
      error && /* @__PURE__ */ jsxs9("div", {
        className: styles8.errorBox,
        children: [
          errorIcon && /* @__PURE__ */ jsx11("span", {
            className: styles8.iconWrap,
            children: errorIcon
          }),
          /* @__PURE__ */ jsx11("span", {
            className: styles8.errorText,
            children: error
          })
        ]
      }),
      isComplete && !error && /* @__PURE__ */ jsxs9("div", {
        className: styles8.successBox,
        children: [
          completeIcon && /* @__PURE__ */ jsx11("span", {
            className: styles8.iconWrap,
            children: completeIcon
          }),
          /* @__PURE__ */ jsx11("span", {
            className: styles8.successText,
            children: "Operation completed successfully"
          })
        ]
      }),
      steps && steps.length > 0 && isActive && /* @__PURE__ */ jsx11("div", {
        className: styles8.stepsGrid,
        style: { gridTemplateColumns: `repeat(${steps.length}, 1fr)` },
        children: steps.map((step, idx) => {
          const isCurrent = step.key === currentStep;
          const isDone = currentIdx >= 0 && idx < currentIdx;
          return /* @__PURE__ */ jsx11("div", {
            className: cx10(styles8.step, isCurrent ? styles8.stepActive : isDone ? styles8.stepDone : styles8.stepPending),
            children: step.label
          }, step.key);
        })
      })
    ]
  });
}
export {
  StreamingStatus,
  StepCard,
  StatCard,
  LineChart,
  IconBadge,
  HelpTrigger,
  HelpPanel,
  FileTree,
  FeatureCard,
  EmptyState,
  ActionCard
};

//# debugId=C5FC22BD49072C5664756E2164756E21
//# sourceMappingURL=index.js.map
