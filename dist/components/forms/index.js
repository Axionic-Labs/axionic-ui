// node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef2, createElement as createElement2 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());

// node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide-react/dist/esm/Icon.js
import { forwardRef, createElement } from "react";

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef(({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  absoluteStrokeWidth,
  className = "",
  children,
  iconNode,
  ...rest
}, ref) => createElement("svg", {
  ref,
  ...defaultAttributes,
  width: size,
  height: size,
  stroke: color,
  strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
  className: mergeClasses("lucide", className),
  ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
  ...rest
}, [
  ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
  ...Array.isArray(children) ? children : [children]
]));

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(({ className, ...props }, ref) => createElement2(Icon, {
    ref,
    iconNode,
    className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
    ...props
  }));
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/circle-alert.js
var __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
var CircleAlert = createLucideIcon("circle-alert", __iconNode);
// src/components/forms/form-alert.tsx
import { css, cx } from "styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
"use client";
var base = css({
  display: "flex",
  alignItems: "flex-start",
  gap: "3",
  px: "4",
  py: "3",
  rounded: "l2",
  bg: "bg.error",
  borderWidth: "1px",
  borderColor: "border.error",
  color: "fg.error",
  textStyle: "small"
});
function FormAlert({ children, className }) {
  return /* @__PURE__ */ jsxs("div", {
    role: "alert",
    className: cx(base, className),
    children: [
      /* @__PURE__ */ jsx(CircleAlert, {
        size: 16,
        "aria-label": "Alert",
        style: { flexShrink: 0, marginTop: "2px" }
      }),
      /* @__PURE__ */ jsx("div", {
        children
      })
    ]
  });
}
// src/components/ui/field.tsx
import { Field } from "@ark-ui/react/field";
import { createStyleContext } from "styled-system/jsx";
import { field } from "styled-system/recipes";
import { FieldContext } from "@ark-ui/react/field";
"use client";
var { withProvider, withContext } = createStyleContext(field);
var Root = withProvider(Field.Root, "root");
var RootProvider = withProvider(Field.RootProvider, "root");
var ErrorText = withContext(Field.ErrorText, "errorText");
var HelperText = withContext(Field.HelperText, "helperText");
var Label = withContext(Field.Label, "label");
var RequiredIndicator = withContext(Field.RequiredIndicator, "requiredIndicator");

// src/components/forms/form-field.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
"use client";
function FormField({
  label,
  error,
  helperText,
  required,
  children,
  ...rootProps
}) {
  return /* @__PURE__ */ jsxs2(Root, {
    invalid: !!error,
    required,
    ...rootProps,
    children: [
      /* @__PURE__ */ jsxs2(Label, {
        children: [
          label,
          required && /* @__PURE__ */ jsx2(RequiredIndicator, {})
        ]
      }),
      children,
      error ? /* @__PURE__ */ jsx2(ErrorText, {
        children: error
      }) : helperText ? /* @__PURE__ */ jsx2(HelperText, {
        children: helperText
      }) : null
    ]
  });
}
// src/components/forms/form-message.tsx
import { css as css2, cx as cx2 } from "styled-system/css";
import { jsx as jsx3 } from "react/jsx-runtime";
"use client";
var base2 = css2({
  display: "flex",
  alignItems: "center",
  gap: "2",
  px: "3",
  py: "2",
  rounded: "l2",
  textStyle: "small"
});
var variants = {
  error: css2({
    bg: "bg.error",
    color: "fg.error",
    borderWidth: "1px",
    borderColor: "border.error"
  }),
  success: css2({
    bg: "bg.success",
    color: "fg.success",
    borderWidth: "1px",
    borderColor: "border.success"
  }),
  warning: css2({
    bg: "bg.warning",
    color: "fg.warning",
    borderWidth: "1px",
    borderColor: "border.warning"
  }),
  info: css2({
    bg: "bg.info",
    color: "fg.info",
    borderWidth: "1px",
    borderColor: "border.info"
  })
};
function FormMessage({ variant, children, className }) {
  return /* @__PURE__ */ jsx3("div", {
    role: variant === "error" ? "alert" : "status",
    className: cx2(base2, variants[variant], className),
    children
  });
}
export {
  FormMessage,
  FormField,
  FormAlert
};

//# debugId=54D1A57E6BD8224164756E2164756E21
//# sourceMappingURL=index.js.map
