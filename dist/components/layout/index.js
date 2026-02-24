// src/components/layout/dark-section.tsx
import { css, cx } from "styled-system/css";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx("section", {
    id,
    className: cx(base, className),
    children: /* @__PURE__ */ jsx("div", {
      className: inner,
      children
    })
  });
}
// src/components/layout/page-header.tsx
import { css as css2, cx as cx2 } from "styled-system/css";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", {
    className: cx2(styles.root, className),
    children: [
      /* @__PURE__ */ jsxs("div", {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: styles.content,
            children: [
              /* @__PURE__ */ jsx2("h1", {
                className: styles.title,
                children: title
              }),
              badge
            ]
          }),
          subtitle && /* @__PURE__ */ jsx2("p", {
            className: styles.subtitle,
            children: subtitle
          })
        ]
      }),
      action
    ]
  });
}
// src/components/layout/section.tsx
import { css as css3, cx as cx3 } from "styled-system/css";
import { jsx as jsx3 } from "react/jsx-runtime";
var base2 = css3({
  py: { base: "16", md: "24" },
  px: { base: "4", md: "6", lg: "8" },
  maxW: "7xl",
  mx: "auto",
  w: "full"
});
function Section({ children, className, id }) {
  return /* @__PURE__ */ jsx3("section", {
    id,
    className: cx3(base2, className),
    children
  });
}
// src/components/layout/split-section.tsx
import { css as css4, cx as cx4 } from "styled-system/css";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2("section", {
    className: cx4(base3, className),
    children: [
      /* @__PURE__ */ jsx4("div", {
        style: reversed ? { order: 2 } : undefined,
        children: left
      }),
      /* @__PURE__ */ jsx4("div", {
        style: reversed ? { order: 1 } : undefined,
        children: right
      })
    ]
  });
}
export {
  SplitSection,
  Section,
  PageHeader,
  DarkSection
};

//# debugId=2B0365C2349B0E2864756E2164756E21
//# sourceMappingURL=index.js.map
