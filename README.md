# @axionic/ui

Shared React component library for Axionic Labs web applications. Built on Radix UI primitives (via shadcn/ui) and Tailwind CSS 4, with a branded design token system.

## Install

This package is installed as a GitHub git dependency. Add it to your `package.json`:

```json
{
  "dependencies": {
    "@axionic/ui": "Axionic-Labs/axionic-ui"
  }
}
```

**Peer dependencies:** `react` (18 or 19), `react-dom` (18 or 19), `tailwindcss` (^4.0.0).

## Setup

### 1. Import CSS

In your main stylesheet, import the design system CSS **before** any app-specific styles:

```css
@import "tailwindcss";
@source "../node_modules/@axionic/ui";
@import "@axionic/ui/css/index.css";
```

The `@source` directive tells Tailwind 4 to scan the package for class usage. Requires `@tailwindcss/vite` or `@tailwindcss/postcss` in your build pipeline.

### 2. Load the Mulish font

Add to your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
```

### 3. Wrap with TooltipProvider

If using Tooltip components, wrap your app root:

```tsx
import { TooltipProvider } from '@axionic/ui/primitives';

<TooltipProvider>
  <App />
</TooltipProvider>
```

## Import Paths

| Path | Contents |
|------|----------|
| `@axionic/ui` | Everything (re-exports all JS modules below) |
| `@axionic/ui/primitives` | 40 shadcn/Radix UI components |
| `@axionic/ui/layout` | Section, DarkSection, SplitSection, PageHeader |
| `@axionic/ui/patterns` | FeatureCard, IconBadge, StatCard, ActionCard, StepCard, EmptyState |
| `@axionic/ui/forms` | FormField, FormMessage, FormAlert |
| `@axionic/ui/utils` | `cn()` class merge utility (clsx + tailwind-merge) |
| `@axionic/ui/css/index.css` | All CSS (barrel import for all sheets below) |
| `@axionic/ui/css/tokens.css` | Brand color palette, typography scale, gradients, shadows |
| `@axionic/ui/css/theme.css` | Tailwind 4 `@theme` registration for semantic tokens |
| `@axionic/ui/css/base.css` | Base layer defaults (border, outline, body bg/text) |
| `@axionic/ui/css/animations.css` | Keyframes: accordion, fade-up, fade-in, scale-in |
| `@axionic/ui/css/components.css` | Utility classes: btn-wheat, btn-dark, card-hover, nav-link, sidebar-link, etc. |

## Components

### Primitives (40)

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, Collapsible, Command, ContextMenu, Dialog, DropdownMenu, HoverCard, Input, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, ScrollArea, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip, Toaster (sonner).

**Button variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `wheat`, `dark`, `oauth`, `outline-brand`, `ghost-dark`.
**Button sizes:** `default`, `sm`, `lg`, `icon`.

**Badge variants:** `default`, `secondary`, `destructive`, `outline`.

NavigationMenu also exports `navigationMenuTriggerStyle` for custom trigger styling.

### Layout

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Section` | Centered section with consistent padding | `size` (`sm` / `md` / `lg`), `noPadding` |
| `DarkSection` | Section that pins light-mode brand tokens on a dark background | Same as Section |
| `SplitSection` | Two-column responsive grid | `left`, `right`, `ratio` (`1:3` / `2:3` / `1:1` / `2:5`), `reverse`, `gap` |
| `PageHeader` | Section header with label, title, subtitle | `label`, `title`, `subtitle`, `align` (`center` / `left`), children slot |

### Patterns

| Component | Description |
|-----------|-------------|
| `FeatureCard` | Icon + title + description card with hover effect |
| `IconBadge` | Icon in colored rounded background. Variants: `wheat`, `teal`, `success`, `error`, `muted`. Sizes: `sm`, `md`, `lg` |
| `StatCard` | Metric display with icon, value, label, optional trend badge |
| `ActionCard` | Interactive card with click handler and keyboard accessibility |
| `StepCard` | Numbered step indicator with title and description |
| `EmptyState` | Centered placeholder with icon, title, description, optional CTA |

### Forms

| Component | Description |
|-----------|-------------|
| `FormField` | Label + children + optional error message wrapper. Props: `label`, `htmlFor?`, `error?`, `children` |
| `FormMessage` | Inline feedback banner with colored background. Props: `variant?` (`error` / `success` / `info`), `children` |
| `FormAlert` | Prominent alert with icon and error-tinted border. Props: `icon?`, `children` |

## Design Tokens

### Color Palette

CSS custom properties defined in `:root`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-rich-black` | `#003E44` | Primary brand color, backgrounds |
| `--color-wheat` | `#E6B685` | Accent, CTAs, highlights |
| `--color-snow` | `#E3FDFF` | Light text on dark backgrounds |
| `--color-teal-900` to `--color-teal-100` | 5-step teal scale | UI surfaces, borders, hover states |
| `--color-cream` | -- | Warm background alternative |
| `--color-error`, `--color-success` | -- | Functional status colors |
| `--color-navbar-bg`, `--color-page-bg-alt` | -- | Layout surfaces |
| `--color-shadow` through `--color-shadow-lg` | -- | Elevation shadows |

### Typography

Font families `--font-body` and `--font-display` (both Mulish). Type scale from `--text-display` (largest) down to `--text-label` (smallest).

### shadcn Semantic Tokens

Standard shadcn/ui variables mapped to the brand palette: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent` (wheat), `--muted`, `--destructive`, `--border`, `--input`, `--ring`, `--radius`, and `sidebar-*` variants.

### Dark Mode

Supported via both `@media (prefers-color-scheme: dark)` and the `.dark` class. All token values are redefined automatically.

**Section overrides:** Apply `.dark-section` or `.light-section` classes to pin tokens to dark or light values regardless of the system theme. Useful for hero banners, CTAs, and footers that should always render on a dark background.

## Utility Classes

Defined in `components.css` and available globally after importing the CSS:

**Buttons:** `btn-wheat`, `btn-dark`, `btn-oauth`, `btn-logout`, `btn-scroll-top`, `btn-tab` (with `.active`).

**Navigation:** `nav-link` (with `.active`), `sidebar-link` (with `.active` and `.placeholder`), `footer-link`.

**Cards and surfaces:** `card-hover`, `card-dashed`, `feature-hover`.

**Form inputs:** `input-field`.

**Misc:** `chip`, `social-icon`, `arrow-circle`, `pipeline-step`, `pipeline-arrow`.

**Animations:** `animate-fade-up`, `animate-fade-in`, `animate-scale-in`.

## Development

```bash
yarn install       # Install dependencies
yarn build         # Build with tsup -> dist/ (ESM + declarations)
yarn dev           # Watch mode (tsup --watch)
yarn typecheck     # Type-check without emitting (tsc --noEmit)
yarn lint          # Lint with Biome
yarn lint:fix      # Auto-fix lint and formatting issues
yarn format        # Format with Biome
```

**Important:** The `dist/` directory is committed to the repository. Yarn v1 does not reliably execute `prepare` scripts for git dependencies, so consumers depend on pre-built output. After any source changes, run `yarn build` and commit the updated `dist/` directory.
