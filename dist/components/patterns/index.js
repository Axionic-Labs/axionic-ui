// src/components/patterns/action-card.tsx
import { css, cx } from "styled-system/css";
import { jsxDEV } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV("div", {
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
      icon && /* @__PURE__ */ jsxDEV("div", {
        className: styles.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("div", {
        className: styles.title,
        children: title
      }, undefined, false, undefined, this),
      description && /* @__PURE__ */ jsxDEV("div", {
        className: styles.description,
        children: description
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/components/patterns/empty-state.tsx
import { css as css2, cx as cx2 } from "styled-system/css";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV2("div", {
    className: cx2(styles2.root, className),
    children: [
      icon && /* @__PURE__ */ jsxDEV2("div", {
        className: styles2.iconWrap,
        children: icon
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV2("h3", {
        className: styles2.title,
        children: title
      }, undefined, false, undefined, this),
      description && /* @__PURE__ */ jsxDEV2("p", {
        className: styles2.description,
        children: description
      }, undefined, false, undefined, this),
      action && /* @__PURE__ */ jsxDEV2("div", {
        className: styles2.action,
        children: action
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/components/patterns/feature-card.tsx
import { css as css3, cx as cx3 } from "styled-system/css";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV3("div", {
    className: cx3(styles3.root, className),
    children: [
      icon && /* @__PURE__ */ jsxDEV3("div", {
        className: styles3.iconWrap,
        children: icon
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("div", {
        className: styles3.title,
        children: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("div", {
        className: styles3.description,
        children: description
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/components/patterns/icon-badge.tsx
import { css as css4, cx as cx4 } from "styled-system/css";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
"use client";
var base = css4({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css4({ w: "8", h: "8" }),
  md: css4({ w: "10", h: "10" }),
  lg: css4({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsxDEV4("div", {
    className: cx4(base, sizes[size], className),
    children: icon
  }, undefined, false, undefined, this);
}
// src/components/patterns/stat-card.tsx
import { css as css5, cx as cx5 } from "styled-system/css";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
"use client";
var styles4 = {
  root: css5({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    display: "flex",
    alignItems: "flex-start",
    gap: "4"
  }),
  iconWrap: css5({
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
  content: css5({
    flex: 1,
    minW: 0
  }),
  title: css5({
    textStyle: "caption",
    color: "fg.muted",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  }),
  value: css5({
    textStyle: "h2",
    color: "fg.default",
    mt: "1"
  }),
  change: css5({
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
  const changeColor = changeType === "positive" ? css5({ color: "{colors.green.11}" }) : changeType === "negative" ? css5({ color: "{colors.red.11}" }) : css5({ color: "fg.muted" });
  return /* @__PURE__ */ jsxDEV5("div", {
    className: cx5(styles4.root, className),
    children: [
      icon && /* @__PURE__ */ jsxDEV5("div", {
        className: styles4.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV5("div", {
        className: styles4.content,
        children: [
          /* @__PURE__ */ jsxDEV5("div", {
            className: styles4.title,
            children: title
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV5("div", {
            className: styles4.value,
            children: value
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV5("div", {
            className: css5({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
            children: [
              change && /* @__PURE__ */ jsxDEV5("span", {
                className: cx5(styles4.change, changeColor),
                children: change
              }, undefined, false, undefined, this),
              badge && /* @__PURE__ */ jsxDEV5("span", {
                className: css5({
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
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/components/patterns/step-card.tsx
import { css as css6, cx as cx6 } from "styled-system/css";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
"use client";
var styles5 = {
  root: css6({
    display: "flex",
    gap: "4"
  }),
  number: css6({
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
  content: css6({
    flex: 1,
    minW: 0
  }),
  title: css6({
    textStyle: "label",
    color: "fg.default"
  }),
  description: css6({
    textStyle: "small",
    color: "fg.muted",
    mt: "1"
  })
};
function StepCard({ step, title, description, children, className }) {
  return /* @__PURE__ */ jsxDEV6("div", {
    className: cx6(styles5.root, className),
    children: [
      /* @__PURE__ */ jsxDEV6("div", {
        className: styles5.number,
        children: step
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV6("div", {
        className: styles5.content,
        children: [
          /* @__PURE__ */ jsxDEV6("div", {
            className: styles5.title,
            children: title
          }, undefined, false, undefined, this),
          description && /* @__PURE__ */ jsxDEV6("div", {
            className: styles5.description,
            children: description
          }, undefined, false, undefined, this),
          children
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
export {
  StepCard,
  StatCard,
  IconBadge,
  FeatureCard,
  EmptyState,
  ActionCard
};

//# debugId=20D4D96526A7EDC964756E2164756E21
//# sourceMappingURL=index.js.map
