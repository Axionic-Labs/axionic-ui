// src/components/layout/app-shell.tsx
import { css, cx } from "styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
"use client";
var styles = {
  root: css({
    minHeight: "100dvh",
    bg: "app.canvas",
    color: "app.text"
  }),
  body: css({
    minWidth: 0,
    display: "flex",
    flexDirection: "column"
  }),
  sidebar: css({
    minWidth: 0,
    bg: "app.nav",
    borderColor: "app.border",
    borderBottomWidth: { base: "1px", lg: "0" },
    borderRightWidth: { base: "0", lg: "1px" },
    padding: { base: "4", md: "5", lg: "6" },
    position: { base: "relative", lg: "sticky" },
    top: { base: "auto", lg: "0" },
    height: { base: "auto", lg: "100dvh" },
    overflowY: "auto"
  }),
  toolbar: css({
    position: "sticky",
    top: "0",
    zIndex: "20",
    borderBottomWidth: "1px",
    borderColor: "app.border",
    bg: "app.toolbar",
    backdropFilter: "blur(18px)"
  }),
  main: css({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6"
  }),
  aside: css({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "5",
    borderColor: "app.border",
    borderLeftWidth: { base: "0", xl: "1px" },
    paddingLeft: { base: "0", xl: "6" }
  })
};
function AppShell({
  sidebar,
  toolbar,
  children,
  aside,
  className,
  bodyClassName,
  mainClassName,
  asideClassName
}) {
  const rootClassName = css({
    display: "grid",
    gridTemplateColumns: sidebar ? { base: "1fr", lg: "15.5rem minmax(0, 1fr)" } : "1fr"
  });
  const contentClassName = css({
    flex: "1",
    display: "grid",
    gap: "5",
    paddingX: { base: "4", md: "6", xl: "6" },
    paddingY: { base: "4", md: "5", xl: "6" },
    gridTemplateColumns: aside ? { base: "1fr", xl: "minmax(0, 1fr) 22rem" } : "1fr",
    alignItems: "start"
  });
  return /* @__PURE__ */ jsx("div", {
    className: cx(styles.root, className),
    children: /* @__PURE__ */ jsxs("div", {
      className: rootClassName,
      children: [
        sidebar && /* @__PURE__ */ jsx("aside", {
          className: styles.sidebar,
          children: sidebar
        }),
        /* @__PURE__ */ jsxs("div", {
          className: cx(styles.body, bodyClassName),
          children: [
            toolbar && /* @__PURE__ */ jsx("div", {
              className: styles.toolbar,
              children: toolbar
            }),
            /* @__PURE__ */ jsxs("div", {
              className: contentClassName,
              children: [
                /* @__PURE__ */ jsx("main", {
                  className: cx(styles.main, mainClassName),
                  children
                }),
                aside && /* @__PURE__ */ jsx("aside", {
                  className: cx(styles.aside, asideClassName),
                  children: aside
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
// src/components/layout/dark-section.tsx
import { css as css2, cx as cx2 } from "styled-system/css";
import { jsx as jsx2 } from "react/jsx-runtime";
var base = css2({
  bg: "colorPalette.9",
  color: "white",
  py: { base: "16", md: "24" },
  px: { base: "4", md: "6", lg: "8" },
  position: "relative",
  overflow: "hidden"
});
var inner = css2({
  maxW: "7xl",
  mx: "auto",
  w: "full",
  position: "relative",
  zIndex: 1
});
function DarkSection({ children, className, id }) {
  return /* @__PURE__ */ jsx2("section", {
    id,
    className: cx2(base, className),
    children: /* @__PURE__ */ jsx2("div", {
      className: inner,
      children
    })
  });
}
// src/components/layout/page-header.tsx
import { css as css3, cx as cx3 } from "styled-system/css";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var styles2 = {
  root: css3({
    display: "flex",
    alignItems: { base: "flex-start", md: "center" },
    justifyContent: "space-between",
    flexDirection: { base: "column", md: "row" },
    gap: "5",
    mb: "10"
  }),
  content: css3({
    display: "flex",
    alignItems: "flex-start",
    gap: "3"
  }),
  title: css3({
    textStyle: "pageTitle",
    color: "app.text"
  }),
  subtitle: css3({
    textStyle: "small",
    color: "app.text.muted",
    mt: "2.5",
    maxW: "2xl"
  })
};
function PageHeader({ title, subtitle, badge, action, className }) {
  return /* @__PURE__ */ jsxs2("div", {
    className: cx3(styles2.root, className),
    children: [
      /* @__PURE__ */ jsxs2("div", {
        children: [
          /* @__PURE__ */ jsxs2("div", {
            className: styles2.content,
            children: [
              /* @__PURE__ */ jsx3("h1", {
                className: styles2.title,
                children: title
              }),
              badge
            ]
          }),
          subtitle && /* @__PURE__ */ jsx3("p", {
            className: styles2.subtitle,
            children: subtitle
          })
        ]
      }),
      action
    ]
  });
}
// src/components/layout/section.tsx
import { css as css4, cx as cx4 } from "styled-system/css";
import { jsx as jsx4 } from "react/jsx-runtime";
var base2 = css4({
  py: { base: "16", md: "24" },
  px: { base: "4", md: "6", lg: "8" },
  maxW: "7xl",
  mx: "auto",
  w: "full"
});
function Section({ children, className, id }) {
  return /* @__PURE__ */ jsx4("section", {
    id,
    className: cx4(base2, className),
    children
  });
}
// src/components/layout/split-section.tsx
import { css as css5, cx as cx5 } from "styled-system/css";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var base3 = css5({
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
  return /* @__PURE__ */ jsxs3("section", {
    className: cx5(base3, className),
    children: [
      /* @__PURE__ */ jsx5("div", {
        style: reversed ? { order: 2 } : undefined,
        children: left
      }),
      /* @__PURE__ */ jsx5("div", {
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
  DarkSection,
  AppShell
};

//# debugId=40F8AF1B32F8793864756E2164756E21
//# sourceMappingURL=index.js.map
