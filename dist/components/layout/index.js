// src/components/layout/dark-section.tsx
import { css, cx } from "styled-system/css";
import { jsxDEV } from "react/jsx-dev-runtime";
var base = css({
  bg: "colorPalette.9",
  color: "white",
  py: { base: "16", md: "24" },
  px: { base: "4", md: "6", lg: "8" },
  position: "relative",
  overflow: "hidden"
});
var inner = css({
  maxW: "7xl",
  mx: "auto",
  w: "full",
  position: "relative",
  zIndex: 1
});
function DarkSection({ children, className, id }) {
  return /* @__PURE__ */ jsxDEV("section", {
    id,
    className: cx(base, className),
    children: /* @__PURE__ */ jsxDEV("div", {
      className: inner,
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
// src/components/layout/page-header.tsx
import { css as css2, cx as cx2 } from "styled-system/css";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var styles = {
  root: css2({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "4",
    mb: "8"
  }),
  content: css2({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  title: css2({
    textStyle: "h1",
    color: "fg.default"
  }),
  subtitle: css2({
    textStyle: "body",
    color: "fg.muted",
    mt: "1"
  })
};
function PageHeader({ title, subtitle, badge, action, className }) {
  return /* @__PURE__ */ jsxDEV2("div", {
    className: cx2(styles.root, className),
    children: [
      /* @__PURE__ */ jsxDEV2("div", {
        children: [
          /* @__PURE__ */ jsxDEV2("div", {
            className: styles.content,
            children: [
              /* @__PURE__ */ jsxDEV2("h1", {
                className: styles.title,
                children: title
              }, undefined, false, undefined, this),
              badge
            ]
          }, undefined, true, undefined, this),
          subtitle && /* @__PURE__ */ jsxDEV2("p", {
            className: styles.subtitle,
            children: subtitle
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      action
    ]
  }, undefined, true, undefined, this);
}
// src/components/layout/section.tsx
import { css as css3, cx as cx3 } from "styled-system/css";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var base2 = css3({
  py: { base: "16", md: "24" },
  px: { base: "4", md: "6", lg: "8" },
  maxW: "7xl",
  mx: "auto",
  w: "full"
});
function Section({ children, className, id }) {
  return /* @__PURE__ */ jsxDEV3("section", {
    id,
    className: cx3(base2, className),
    children
  }, undefined, false, undefined, this);
}
// src/components/layout/split-section.tsx
import { css as css4, cx as cx4 } from "styled-system/css";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var base3 = css4({
  display: "grid",
  gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
  gap: { base: "8", lg: "16" },
  alignItems: "center",
  py: { base: "16", md: "24" },
  px: { base: "4", md: "6", lg: "8" },
  maxW: "7xl",
  mx: "auto",
  w: "full"
});
function SplitSection({ left, right, className, reversed }) {
  return /* @__PURE__ */ jsxDEV4("section", {
    className: cx4(base3, className),
    children: [
      /* @__PURE__ */ jsxDEV4("div", {
        style: reversed ? { order: 2 } : undefined,
        children: left
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV4("div", {
        style: reversed ? { order: 1 } : undefined,
        children: right
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
export {
  SplitSection,
  Section,
  PageHeader,
  DarkSection
};

//# debugId=583F5A01D880DA3364756E2164756E21
//# sourceMappingURL=index.js.map
