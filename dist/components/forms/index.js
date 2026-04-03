// src/components/forms/form-alert.tsx
import { AlertCircle } from "lucide-react";
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
      /* @__PURE__ */ jsx(AlertCircle, {
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

//# debugId=7A866DFE379C8D2E64756E2164756E21
//# sourceMappingURL=index.js.map
