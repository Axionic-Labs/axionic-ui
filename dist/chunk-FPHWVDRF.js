import { cn } from './chunk-N2VG7NHQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl"
};
function Section({
  children,
  className,
  size = "lg",
  noPadding = false,
  ...props
}) {
  return /* @__PURE__ */ jsx("section", { className: cn(!noPadding && "py-20 md:py-28", className), ...props, children: /* @__PURE__ */ jsx("div", { className: cn("mx-auto px-6 lg:px-8", sizeMap[size]), children }) });
}
var sizeMap2 = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl"
};
function DarkSection({
  children,
  className,
  size = "lg",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: cn("dark-section py-20 md:py-28", className),
      style: { backgroundColor: "var(--color-rich-black)" },
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn("mx-auto px-6 lg:px-8", sizeMap2[size]), children })
    }
  );
}
var ratioMap = {
  "1:3": "lg:grid-cols-[1fr_3fr]",
  "2:3": "lg:grid-cols-[2fr_3fr]",
  "1:1": "lg:grid-cols-2",
  "2:5": "lg:grid-cols-[2fr_5fr]"
};
function SplitSection({
  left,
  right,
  ratio = "1:1",
  reverse = false,
  gap,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "grid grid-cols-1",
        ratioMap[ratio],
        gap ?? "gap-8 lg:gap-12",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: cn(reverse && "order-2 lg:order-1"), children: left }),
        /* @__PURE__ */ jsx("div", { className: cn(reverse && "order-1 lg:order-2"), children: right })
      ]
    }
  );
}
function PageHeader({
  label,
  title,
  subtitle,
  align = "center",
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      ),
      ...props,
      children: [
        label && /* @__PURE__ */ jsx(
          "span",
          {
            className: "mb-4 inline-block text-xs font-semibold tracking-widest uppercase",
            style: { color: "var(--color-wheat)" },
            children: label
          }
        ),
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "font-bold",
            style: {
              font: "var(--text-h2)",
              color: "var(--color-rich-black)"
            },
            children: title
          }
        ),
        subtitle && /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "mt-4",
              align === "center" && "mx-auto max-w-2xl"
            ),
            style: {
              font: "var(--text-body)",
              color: "var(--color-teal-700)"
            },
            children: subtitle
          }
        ),
        children && /* @__PURE__ */ jsx("div", { className: "mt-6", children })
      ]
    }
  );
}

export { DarkSection, PageHeader, Section, SplitSection };
//# sourceMappingURL=chunk-FPHWVDRF.js.map
//# sourceMappingURL=chunk-FPHWVDRF.js.map