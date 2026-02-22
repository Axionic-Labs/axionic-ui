import { Card, CardContent } from './chunk-ODOSKQRK.js';
import { cn } from './chunk-N2VG7NHQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var variantStyles = {
  wheat: {
    backgroundColor: "rgba(230, 182, 133, 0.15)",
    color: "var(--color-accent-gold)"
  },
  teal: {
    backgroundColor: "var(--color-badge-teal)",
    color: "var(--color-teal-500)"
  },
  success: {
    backgroundColor: "var(--color-badge-success)",
    color: "var(--color-success)"
  },
  error: {
    backgroundColor: "rgba(220, 38, 38, 0.08)",
    color: "var(--color-error)"
  },
  muted: {
    backgroundColor: "var(--color-page-bg-alt)",
    color: "var(--color-teal-500)"
  }
};
var sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12"
};
function IconBadge({
  icon,
  variant = "wheat",
  size = "md",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center justify-center rounded-lg",
        sizeMap[size],
        className
      ),
      style: variantStyles[variant],
      ...props,
      children: icon
    }
  );
}
function StatCard({
  icon,
  iconBg,
  iconColor,
  label,
  value,
  badge,
  badgeColor,
  badgeBg,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Card,
    {
      className: cn(
        "gap-0 rounded-xl p-5 py-5 shadow-[0_2px_8px_var(--color-shadow-sm)]",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-flex items-center justify-center w-10 h-10 rounded-lg",
              style: { backgroundColor: iconBg, color: iconColor },
              children: icon
            }
          ),
          badge && /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs font-semibold px-2.5 py-1 rounded-full",
              style: { backgroundColor: badgeBg, color: badgeColor },
              children: badge
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold mb-1", style: { color: "var(--color-rich-black)" }, children: value }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "var(--color-teal-700)" }, children: label })
      ] })
    }
  );
}
function ActionCard({
  icon,
  iconBg,
  iconColor,
  title,
  description,
  onClick,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Card,
    {
      role: "button",
      tabIndex: 0,
      onClick,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      },
      className: cn(
        "gap-0 rounded-xl p-5 py-5 text-left cursor-pointer shadow-[0_2px_8px_var(--color-shadow-sm)] transition-all hover:shadow-[0_8px_24px_var(--color-shadow-hover)] hover:-translate-y-0.5",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3",
            style: { backgroundColor: iconBg, color: iconColor },
            children: icon
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-bold mb-1", style: { color: "var(--color-rich-black)" }, children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-relaxed", style: { color: "var(--color-teal-700)" }, children: description })
      ] })
    }
  );
}
function StepCard({
  step,
  title,
  description,
  icon,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("rounded-xl p-6", className),
      style: {
        backgroundColor: "var(--color-white)",
        boxShadow: "0 2px 8px var(--color-shadow-sm)"
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold mb-4",
            style: {
              backgroundColor: "rgba(230, 182, 133, 0.15)",
              color: "var(--color-accent-gold)"
            },
            children: icon ?? step
          }
        ),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "text-xs uppercase tracking-widest mb-1",
            style: { color: "var(--color-teal-300)" },
            children: [
              "Step ",
              step
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "text-base font-bold mb-2",
            style: { color: "var(--color-rich-black)" },
            children: title
          }
        ),
        description && /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-sm leading-relaxed",
            style: { color: "var(--color-teal-700)" },
            children: description
          }
        )
      ]
    }
  );
}
function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "feature-hover rounded-xl p-4 md:p-5 text-center",
        className
      ),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: "mb-3", children: icon }),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "text-sm font-bold mb-1",
            style: { color: "var(--color-rich-black)" },
            children: title
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-xs leading-relaxed",
            style: { color: "var(--color-teal-700)" },
            children: description
          }
        )
      ]
    }
  );
}
function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex flex-col items-center justify-center py-16 text-center", className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx(
          "div",
          {
            className: "mb-4",
            style: { color: "var(--color-teal-300)" },
            children: icon
          }
        ),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "text-lg font-bold mb-2",
            style: { color: "var(--color-rich-black)" },
            children: title
          }
        ),
        description && /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-sm max-w-sm",
            style: { color: "var(--color-teal-700)" },
            children: description
          }
        ),
        action && /* @__PURE__ */ jsx("div", { className: "mt-6", children: action })
      ]
    }
  );
}

export { ActionCard, EmptyState, FeatureCard, IconBadge, StatCard, StepCard };
//# sourceMappingURL=chunk-ARYCMFP5.js.map
//# sourceMappingURL=chunk-ARYCMFP5.js.map