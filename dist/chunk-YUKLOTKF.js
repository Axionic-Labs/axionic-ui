import { Label } from './chunk-3P6SHZNI.js';
import { cn } from './chunk-N2VG7NHQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function FormAlert({ icon, className, children }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "alert",
      className: cn("p-4 rounded-lg flex items-start gap-3", className),
      style: {
        backgroundColor: "rgba(220, 38, 38, 0.06)",
        border: "1px solid rgba(220, 38, 38, 0.2)"
      },
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "shrink-0 mt-0.5", style: { color: "var(--color-error)" }, children: icon }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "var(--color-error)" }, children })
      ]
    }
  );
}
function FormField({ label, htmlFor, error, className, children }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1.5", className), children: [
    /* @__PURE__ */ jsx(Label, { htmlFor, children: label }),
    children,
    error && /* @__PURE__ */ jsx("p", { className: "text-xs mt-1", style: { color: "var(--color-error)" }, children: error })
  ] });
}
var variantStyles = {
  error: {
    backgroundColor: "rgba(220, 38, 38, 0.08)",
    color: "var(--color-error)"
  },
  success: {
    backgroundColor: "rgba(34, 197, 94, 0.08)",
    color: "var(--color-success)"
  },
  info: {
    backgroundColor: "var(--color-badge-teal)",
    color: "var(--color-teal-700)"
  }
};
function FormMessage({ variant = "error", className, children }) {
  const styles = variantStyles[variant];
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: variant === "error" ? "alert" : "status",
      className: cn("px-4 py-3 rounded-lg text-sm", className),
      style: styles,
      children
    }
  );
}

export { FormAlert, FormField, FormMessage };
//# sourceMappingURL=chunk-YUKLOTKF.js.map
//# sourceMappingURL=chunk-YUKLOTKF.js.map