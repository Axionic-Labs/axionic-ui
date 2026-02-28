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
  bg: "red.a2",
  borderWidth: "1px",
  borderColor: "red.a5",
  color: "red.11",
  textStyle: "small"
});
function FormAlert({ children, className }) {
  return /* @__PURE__ */ jsxs("div", {
    role: "alert",
    className: cx(base, className),
    children: [
      /* @__PURE__ */ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-label": "Alert",
        style: { flexShrink: 0, marginTop: "2px" },
        children: [
          /* @__PURE__ */ jsx("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }),
          /* @__PURE__ */ jsx("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
          }),
          /* @__PURE__ */ jsx("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
          })
        ]
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
    bg: "red.a2",
    color: "red.11",
    borderWidth: "1px",
    borderColor: "red.a5"
  }),
  success: css2({
    bg: "green.a2",
    color: "green.11",
    borderWidth: "1px",
    borderColor: "green.a5"
  }),
  warning: css2({
    bg: "yellow.a2",
    color: "yellow.11",
    borderWidth: "1px",
    borderColor: "yellow.a5"
  }),
  info: css2({
    bg: "blue.a2",
    color: "blue.11",
    borderWidth: "1px",
    borderColor: "blue.a5"
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

//# debugId=05A126851AD98A4A64756E2164756E21
//# sourceMappingURL=index.js.map
