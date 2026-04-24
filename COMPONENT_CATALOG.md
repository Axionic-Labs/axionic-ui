# Axionic UI Shared Component Catalog

This reference inventories the current shared component exports from:

- `src/components/ui/index.ts`
- `src/components/forms/index.ts`
- `src/components/patterns/index.ts`

It is meant to answer two questions quickly:

1. Which shared component should I start with for this page or interaction?
2. What are the practical props, slots, and item shapes I need to wire it up?

Out of scope:

- `src/components/layout` exports
- design tokens and recipes except where they affect component choice
- generated `dist/` output

## How To Choose The Layer

| Need | Start with | Why |
| --- | --- | --- |
| A recognizable product surface such as a page shell, toolbar, settings section, inspector, picker, or empty state | `@axionic/ui/patterns` | These are the Stitch-aligned/shared product surfaces already present in the package. |
| A labeled form field with helper text or error text | `@axionic/ui/forms` | These remove repeated label/helper/error wiring around primitive controls. |
| A novel interaction or a page-specific composition | `@axionic/ui/primitives` | These stay close to Ark UI / Park UI conventions and give you the most control. |

## Shared Product Surfaces To Reach For First

If you are building one of these shapes, start with a pattern before composing raw primitives:

| Product surface | Recommended exports |
| --- | --- |
| Auth pages | `AuthShell` |
| Authenticated route scaffolding | `WorkspacePage`, `TopToolbar`, `SidebarNav`, `SecondaryNav`, `SettingsSectionNav` |
| Collection and library pages | `CollectionPageHeader`, `ListToolbar`, `SelectionToolbar`, `ActivityTable`, `ResourceList` |
| Reusable route sections | `SectionPanel`, `FormSection`, `DetailPanel`, `InsetPanel`, `HeroPanel`, `SupportPanel`, `UtilityPanel` |
| Modal and slide-over flows | `ConfirmDialog`, `DetailDialog`, `FormDialog`, `SlideOver`, `SearchPickerDialog` |
| Selection and configuration flows | `PickerField`, `SelectionList`, `OptionRow`, `ChoiceSegment`, `ValueField`, `SecretField`, `NumberField`, `ValueSlider`, `AmountSelector` |
| Status, onboarding, and placeholders | `StatusBanner`, `StatusState`, `EmptyState`, `GuidedTourCard`, `DocsHint` |

## API Shape Notes

- Most `ui/*` namespaces mirror Ark UI / Park UI naming. Expect `Root`, `Trigger`, `Content`, `Item`, `Label`, `Control`, and related slot exports.
- The main Axionic convenience APIs in primitives are `Button`, `Tooltip`, `InputGroup`, `Loader`, `DisplayValue`, `FileUpload`, `Pagination.Items`, `SegmentGroup.Items`, `Slider.Marks`, `Slider.Thumbs`, `TagsInput.Items`, and `RatingGroup.Items`.
- Most pattern components prefer content slots such as `title`, `description`, `actions`, `meta`, `footer`, `aside`, and `children` instead of render props.
- Unless called out below, pattern and form components also accept `className`.

## Generic Vs Specialized APIs

These already feel close to common UI libraries and are easy default choices:

- `Button`, `Card`, `Dialog`, `Drawer`, `Tooltip`, `Field`, `Select`, `Combobox`, `NumberInput`
- `ConfirmDialog`, `SearchPickerDialog`, `SelectionList`, `NumberField`, `ValueSlider`, `StatusBanner`

These are intentionally more Axionic-specific shared product surfaces:

- `WorkspacePage`, `CollectionPageHeader`, `SidebarNav`, `SettingsSectionNav`, `CreditPill`
- `SlideOver`, `UtilityPanel`, `HelpPanel`, `AuthShell`, `NamedPromptList`, `ModelIconCustomizer`

## Forms

| Export | Use it for | Practical props | Source |
| --- | --- | --- | --- |
| `FormAlert` | Form-level error or warning block above fields or submit actions. | `children` | `src/components/forms/form-alert.tsx` |
| `FormField` | Standard label + control + helper/error wrapper. Use this before hand-rolling field chrome around primitives. | `label`, `error`, `helperText`, `required`, `children`, plus `Field.RootProps` | `src/components/forms/form-field.tsx` |
| `FormMessage` | Inline feedback message inside a form or panel. | `variant`, `children` | `src/components/forms/form-message.tsx` |

## Patterns

### Shell, Navigation, And Page Structure

| Export | Use it for | Practical props and types | Source |
| --- | --- | --- | --- |
| `AuthShell` | Split auth pages with branded copy on one side and a form surface on the other. | `eyebrow`, `brand`, `title`, `description`, `featureList`, `formTitle`, `formDescription`, `formBanner`, `children` | `src/components/patterns/auth-shell.tsx` |
| `CollectionPageHeader` | List-heavy page headers that need intro copy plus search/filter/actions. | `PageIntro` props plus `search`, `filters`, `toolbarMeta`, `toolbarActions`, `children` | `src/components/patterns/collection-page-header.tsx` |
| `PageIntro` | Full route intro block. Good default for top-of-page copy, actions, and metadata. | `eyebrow`, `title`, `description`, `meta`, `actions`, `children` | `src/components/patterns/page-intro.tsx` |
| `PageTitle` | Simple title + subtitle stack when `PageIntro` would be too heavy. | `children`, `subtitle` | `src/components/patterns/page-title.tsx` |
| `TopToolbar` | Authenticated page toolbar with leading, center, trailing, and optional second row. | `leading`, `title`, `subtitle`, `center`, `trailing`, `children` | `src/components/patterns/top-toolbar.tsx` |
| `WorkspacePage` | Default wrapper for authenticated route content and vertical rhythm. | `density` | `src/components/patterns/workspace-page.tsx` |
| `SidebarNav` | Multi-section app sidebar navigation. | `sections: SidebarNavSection[]`, `brand`, `footer`, `showDescriptions`, `showSectionTitles`, `variant`, `renderItem`; item type is `SidebarNavItem` | `src/components/patterns/sidebar-nav.tsx` |
| `SecondaryNav` | Route-level pills or toolbar-style nav below the main toolbar. | `items: SecondaryNavItem[]`, `trailing`, `variant`; each item supports `href`, `active`, `onClick`, `badge`, `dataTourId` | `src/components/patterns/secondary-nav.tsx` |
| `SettingsSectionNav` | Settings-specific section switcher as either sidebar cards or tab-like pills. | `items: SettingsSectionNavItem[]`, `title`, `footer`, `layout`, `showIcons` | `src/components/patterns/settings-section-nav.tsx` |
| `SectionHeader` | Compact section title row with an accent badge and right-side actions. | `title`, `icon`, `variant`, `actions` | `src/components/patterns/section-header.tsx` |

### Panels, Sections, Dialogs, And Overlays

| Export | Use it for | Practical props and types | Source |
| --- | --- | --- | --- |
| `ConfirmDialog` | Controlled confirm/cancel modal for deletes, resets, and one-step confirmations. | `open`, `onOpenChange`, `onConfirm`, `title`, `children`, `confirmLabel`, `cancelLabel`, `confirmVariant`, `destructive`, `size` | `src/components/patterns/confirm-dialog.tsx` |
| `DetailDialog` | Read-heavy modal with optional eyebrow, description, actions, and footer. | `open`, `onOpenChange`, `title`, `description`, `eyebrow`, `actions`, `children`, `footer`, `size` | `src/components/patterns/detail-dialog.tsx` |
| `DetailPanel` | Inspector or summary panel inside a page, side rail, or dialog. | `eyebrow`, `title`, `description`, `icon`, `meta`, `actions`, `children`, `footer`, `chrome` | `src/components/patterns/detail-panel.tsx` |
| `FormDialog` | Shared dialog shell for forms, including optional split-aside layout. | `open`, `onOpenChange`, `title`, `description`, `eyebrow`, `icon`, `aside`, `asideFooter`, `children`, `submitLabel`, `cancelLabel`, `submitting`, `disableSubmit`, `onSubmit`, `onCancel`, `footerHint`, `footer`, `size`, `bodyClassName`, `hideFooter` | `src/components/patterns/form-dialog.tsx` |
| `FormSection` | Reusable section block inside forms and settings screens. | `title`, `description`, `actions`, `children`, `tone`, `chrome` | `src/components/patterns/form-section.tsx` |
| `HelpPanel` | Compound help-drawer surface. Use it when the page owns panel state and content tabs. | `HelpPanel.Root`, `Header`, `TabBar`, `Tab`, `Content`, `Footer`, `SectionHeading`; header supports `icon`, `title`, `subtitle`, `onClose`, `accentBar` | `src/components/patterns/help-panel.tsx` |
| `HelpTrigger` | Trigger shell for floating or docked help affordances. | `active`, `onActivate`, `children` | `src/components/patterns/help-trigger.tsx` |
| `HeroPanel` | High-emphasis intro or onboarding panel with optional media block. | `eyebrow`, `title`, `description`, `actions`, `media`, `footer`, `copyClassName`, `titleClassName`, `descriptionClassName`, `mediaClassName` | `src/components/patterns/hero-panel.tsx` |
| `InsetPanel` | Low-chrome inset container nested inside another surface. | `children`, `tone` | `src/components/patterns/inset-panel.tsx` |
| `SectionPanel` | Default section shell for route panels, settings groups, and form panels. | `eyebrow`, `title`, `description`, `meta`, `actions`, `children`, `footer`, `variant` (`default`, `muted`, `flat`, `workspace`), `density` | `src/components/patterns/section-panel.tsx` |
| `SlideOver` | Drawer-style workflow shell for editors and inspectors. Use this before building custom drawer layouts. | `open`, `onOpenChange`, `title`, `description`, `eyebrow`, `icon`, `actions`, `children`, `layout`, `aside`, `asideFooter`, `asideWidth`, `panelMinWidth`, `panelMaxWidth`, `contentMinWidth`, `contentMaxWidth`, `submitLabel`, `cancelLabel`, `submitting`, `disableSubmit`, `onSubmit`, `onCancel`, `footerHint`, `footer`, `size`, `hideFooter`, `bodyClassName`, `closeButtonTourId` | `src/components/patterns/slide-over.tsx` |
| `SupportPanel` | Support or explanatory panel with optional aside slot. | `eyebrow`, `title`, `description`, `actions`, `aside`, `tone`, `titleClassName`, `descriptionClassName`, `copyClassName` | `src/components/patterns/support-panel.tsx` |
| `UtilityPanel` | Compact utility/tool panel for help drawers, consoles, or side tools. | `title`, `subtitle`, `icon`, `controls`, `children`, `footer`, `draggable` | `src/components/patterns/utility-panel.tsx` |
| `SearchPickerDialog` | Searchable select dialog built on `SelectionList`. | `open`, `onOpenChange`, `title`, `description`, `searchLabel`, `searchPlaceholder`, `value`, `onValueChange`, `items: SearchPickerDialogItem[]`, `emptyTitle`, `emptyDescription`; item type extends `SelectionListItem` with `keywords` | `src/components/patterns/search-picker-dialog.tsx` |

### Selection, Input, And Editor Helpers

| Export | Use it for | Practical props and types | Source |
| --- | --- | --- | --- |
| `AmountSelector` | Credit top-up, billing, and donation-like amount flows. | `presets`, `value`, `customValue`, `onChange`, `onCustomValueChange`, `min`, `max`, `currency`, `loading`, `disabled`, `onSubmit`, `submitLabel` | `src/components/patterns/amount-selector.tsx` |
| `ChoiceSegment` | Compact segmented selector with labels and optional icons. | `value`, `onValueChange`, `items: ChoiceSegmentItem[]`, `size`, `fitted` | `src/components/patterns/choice-segment.tsx` |
| `GradientPicker` | Simple 1-3 stop gradient editor using native color inputs. | `colors`, `angle`, `onColorsChange`, `onAngleChange` | `src/components/patterns/gradient-picker.tsx` |
| `IconPicker` | Lucide icon picker for customizable icon names. | `value`, `onChange` | `src/components/patterns/icon-picker.tsx` |
| `ModelCardIcon` | Render a model icon preview from a `ModelIconConfig`. | `config`, `size`, `iconSize` | `src/components/patterns/model-icon-customizer.tsx` |
| `ModelIconCustomizer` | Compound editor for icon name, gradient background, and icon color. | `value: ModelIconConfig`, `onChange` | `src/components/patterns/model-icon-customizer.tsx` |
| `NamedPromptList` | Editable list of keyed prompt templates/tasks. | `title`, `description`, `items: NamedPromptListItem[]`, `onAdd`, `onRemove`, `onKeyChange`, `onValueChange`, field labels/placeholders, `emptyTitle`, `emptyDescription`, `chrome` | `src/components/patterns/named-prompt-list.tsx` |
| `NumberField` | Labeled numeric input with validation and empty/null handling. | `label`, `value`, `onValueChange`, `min`, `max`, `step`, `formatOptions`, `helperText`, `error`, `placeholder`, `allowEmpty` | `src/components/patterns/number-field.tsx` |
| `OptionRow` | Selectable inline row with leading and trailing slots. | `title`, `description`, `leading`, `trailing`, `selected`, `onClick`, `disabled`, `chrome` | `src/components/patterns/option-row.tsx` |
| `PickerField` | Trigger plus connected dropdown/panel shell for model or provider pickers. | `title`, `description`, `leading`, `badge`, `open`, `onToggle`, `disabled`, `panelLabel`, `panel`, `minWidth`, `size`, `chrome` | `src/components/patterns/picker-field.tsx` |
| `SecretField` | Reveal/copy field for API keys, provider tokens, or generated secrets. | `label`, `description`, `value`, `revealed`, `onToggleReveal`, `onCopy`, `copied`, `actions` | `src/components/patterns/secret-field.tsx` |
| `SelectionList` | Shared selection surface for dropdown panels and option lists. | `items: SelectionListItem[]`, `value`, `onValueChange`, `density`, `chrome`, `layout`; each item supports `label`, `description`, `icon`, `endSlot`, `disabled` | `src/components/patterns/selection-list.tsx` |
| `SelectionToolbar` | Bulk-selection action bar above tables and list views. | `summary`, `description`, `actions`, `chrome` | `src/components/patterns/selection-toolbar.tsx` |
| `ValueField` | Shared labeled value surface for identifiers, endpoints, and summary rows. | `label`, `description`, `value`, `icon`, `actions`, `mono`, `tone`, `chrome` | `src/components/patterns/value-field.tsx` |
| `ValueSlider` | Single-value slider wrapper with inline label and formatted value text. | `value`, `onChange`, `min`, `max`, `step`, `label`, `ariaLabel` (required if `label` is omitted), `hint`, `showValue`, `formatValue`, `tone`, `variant` (`default`, `workspace`) | `src/components/patterns/value-slider.tsx` |

### Cards, Callouts, Data Display, And Status

| Export | Use it for | Practical props and types | Source |
| --- | --- | --- | --- |
| `AccentLabel` | Small accent-tag or eyebrow label with a left accent bar. | `children`, `variant` | `src/components/patterns/accent-label.tsx` |
| `ActionCard` | Clickable action tile for dashboards and landing sections. | `title`, `description`, `icon`, `iconBg`, `iconColor`, `onClick` | `src/components/patterns/action-card.tsx` |
| `ActivityTable` | Product-style data table shell with optional title/actions and scrollable body. | `title`, `description`, `actions`, `columns: ActivityTableColumn[]`, `rows: ActivityTableRow[]`, `emptyState`, `bodyMaxHeight`; row cells are keyed by column key | `src/components/patterns/activity-table.tsx` |
| `CredentialCard` | Provider/account credential summary block with status and footer slots. | `icon`, `title`, `description`, `status`, `children`, `footer` | `src/components/patterns/credential-card.tsx` |
| `CreditPill` | Compact plan/balance/status pill, often for toolbar use. | `label`, `value`, `detail`, `icon`, `tone`, `layout` | `src/components/patterns/credit-pill.tsx` |
| `DocsHint` | Inline “read the docs” affordance. | `label`, `href`, `linkLabel` | `src/components/patterns/docs-hint.tsx` |
| `EmptyState` | Standard empty or placeholder state with optional action. | `icon`, `title`, `description`, `action` | `src/components/patterns/empty-state.tsx` |
| `EntityCard` | Shared grid/list card for models, vectors, behaviors, and other entities. | `icon`, `title`, `description`, `meta`, `actions`, `children`, `footer`, `selected`, `accent`, `density`, `variant`, `onClick` | `src/components/patterns/entity-card.tsx` |
| `ModelCard` | Shared Stitch-aligned card for hosted and trained model summaries with status, fact grid, and optional progress. | `icon`, `title`, `description`, `status`, `meta`, `facts`, `progress`, `footer`, `selected`, `onClick` | `src/components/patterns/model-card.tsx` |
| `FeatureCard` | Marketing or onboarding feature tile. | `title`, `description`, `icon` | `src/components/patterns/feature-card.tsx` |
| `FileTree` | Collapsible file/folder tree. | `nodes: FileTreeNode[]`, `onSelect`, `selectedId`, `defaultExpanded`; each node has `id`, `name`, `type`, optional `children`, optional `icon` | `src/components/patterns/file-tree.tsx` |
| `GuidedTourCard` | Shared tour/onboarding card shell. | `eyebrow`, `title`, `description`, `meta`, `actions` | `src/components/patterns/guided-tour-card.tsx` |
| `IconBadge` | Small icon badge block for cards, callouts, and intros. | `icon`, `size` | `src/components/patterns/icon-badge.tsx` |
| `LineChart` | Lightweight inline SVG line chart. | `data`, `color`, `height`, `showGrid`, `showAxis`, `showPoints`, `gradientFill` | `src/components/patterns/line-chart.tsx` |
| `ListToolbar` | Search/filter/meta/action row for list and library pages. | `search`, `filters`, `meta`, `actions`, `variant` | `src/components/patterns/list-toolbar.tsx` |
| `MetaPill` | Small contextual metadata pill. | `children`, `tone` | `src/components/patterns/meta-pill.tsx` |
| `MetricRail` | Grid wrapper around a list of `StatCardProps`. | `items: StatCardProps[]`, `columns` | `src/components/patterns/metric-rail.tsx` |
| `PricingCard` | Pricing plan or tier presentation card. | `name`, `description`, `price`, `interval`, `badge`, `badgeColor`, `badgeBg`, `accentColor`, `highlight`, `action`, `features` | `src/components/patterns/pricing-card.tsx` |
| `ResourceList` | Structured resources/docs/help list. | `title`, `description`, `actions`, `items: ResourceListItem[]`, `dividers`; each item supports `title`, `description`, `meta`, `icon`, `action`, `href` | `src/components/patterns/resource-list.tsx` |
| `StatCard` | KPI card with optional icon and change state. | `title`, `value`, `change`, `changeType`, `icon`, `iconBg`, `iconColor`, `badge`, `badgeColor`, `badgeBg` | `src/components/patterns/stat-card.tsx` |
| `StatusBanner` | Inline informational, success, warning, or error banner. | `title`, `description`, `icon`, `actions`, `tone` | `src/components/patterns/status-banner.tsx` |
| `StatusState` | Centered page or section state for loading, empty, warning, or error situations. | `title`, `description`, `actions`, `eyebrow`, `tone`, `icon`, `layout`, `panelClassName` | `src/components/patterns/status-state.tsx` |
| `StepCard` | Numbered process step card. | `step`, `title`, `description`, `children`, `endSlot`, plus class hooks for number/title/description | `src/components/patterns/step-card.tsx` |
| `StreamingStatus` | Multi-step progress/status display for long-running async work. | `status`, `progress`, `steps: StreamingStep[]`, `currentStep`, `error`, `message`, `compact`, `onAbort`, `activeIcon`, `completeIcon`, `errorIcon`, `isComplete` | `src/components/patterns/streaming-status.tsx` |

### Exported Pattern Helpers

| Export | Use it for | Source |
| --- | --- | --- |
| `buildGradientStyle` | Turn 1-3 colors plus an angle into a CSS background string. Useful alongside `GradientPicker` and `ModelCardIcon`. | `src/components/patterns/gradient-picker.tsx` |
| `DEFAULT_ICON_CONFIG` | Default `ModelIconConfig` for `ModelCardIcon` and `ModelIconCustomizer`. | `src/components/patterns/model-icon-customizer.tsx` |

## Primitives

All primitives come from `@axionic/ui/primitives`. Compound exports follow Ark-style namespaces unless noted otherwise.

### Typography, Layout, And Display Primitives

| Export | Use it for | Practical props and slots | Source |
| --- | --- | --- | --- |
| `AbsoluteCenter` | Center one child within a relatively positioned parent. Good for spinner overlays and centered badges. | Standard absolute-positioned box props from the styled primitive | `src/components/ui/absolute-center.tsx` |
| `Badge` | Short status or category pill. | Recipe props from the shared badge styling | `src/components/ui/badge.tsx` |
| `Code` | Inline code token or short code fragment. | Styled inline code props | `src/components/ui/code.tsx` |
| `DisplayValue` | Render values that may be empty without sprinkling `?? '—'` everywhere. | `value`, `formatValue`; outputs an em dash with accessible fallback when empty | `src/components/ui/display-value.tsx` |
| `Group` | General-purpose flex grouping. Use when `ButtonGroup` is too specific. | Group layout props | `src/components/ui/group.tsx` |
| `Heading` | Shared heading primitive. | Semantic heading tag plus recipe props | `src/components/ui/heading.tsx` |
| `Icon` | Generic icon wrapper around SVG/Lucide content. | Icon sizing and style props | `src/components/ui/icon.tsx` |
| `Image` | Styled `img` with object-fit helpers. | `fit`, `align`, plus native image props | `src/components/ui/image.tsx` |
| `Kbd` | Keyboard shortcut token. | Content only in most cases | `src/components/ui/kbd.tsx` |
| `Link` | Styled anchor. | Anchor props plus recipe styling | `src/components/ui/link.tsx` |
| `Separator` | Divider between controls or sections. | Orientation and decorative props from Ark/Park | `src/components/ui/separator.tsx` |
| `Span` | Inline text or wrapper span with shared styling tokens. | Span style props | `src/components/ui/span.tsx` |
| `Text` | Shared body or utility text primitive. | Text recipe props | `src/components/ui/text.tsx` |

### Actions, Feedback, And Notification Primitives

| Export | Use it for | Practical props and slots | Source |
| --- | --- | --- | --- |
| `Alert` | Inline alert blocks with title, description, and indicator. | `Root`, `Indicator`, `Title`, `Description`, `Content` | `src/components/ui/alert.tsx` |
| `Avatar` | User/model avatar with image and fallback content. | `Root`, `Image`, `Fallback` | `src/components/ui/avatar.tsx` |
| `Button` | Default action primitive. | `variant`, `size`, `loading`, `loadingText`, `spinner`, `spinnerPlacement`; `ButtonGroup` shares variant props across children; custom variants include `wheat`, `dark`, `oauth`, `outline-brand`, `light`, `ghost-dark`, `brand`, `danger`, `pill`, `pill-active` | `src/components/ui/button.tsx` |
| `Clipboard` | Copy-to-clipboard interaction with input, trigger, and status indicator. | `Root`, `Control`, `Input`, `Label`, `Trigger`, `Indicator`, `CopyText` | `src/components/ui/clipboard.tsx` |
| `CloseButton` | Standard close affordance. | Same props as `IconButton` | `src/components/ui/close-button.tsx` |
| `IconButton` | Icon-only button. | Same props as `Button` | `src/components/ui/icon-button.tsx` |
| `Loader` | Inline loading helper used inside buttons or labels. | `visible`, `spinner`, `spinnerPlacement`, `text`, `children` | `src/components/ui/loader.tsx` |
| `Progress` | Linear or circular progress display. | `Root`, `Track`, `Range`, `ValueText`, `Circle`, `CircleTrack`, `CircleRange`, `Label`, `View` | `src/components/ui/progress.tsx` |
| `Skeleton` | Loading placeholders. | `Skeleton`, `SkeletonCircle`, `SkeletonText` | `src/components/ui/skeleton.tsx` |
| `Spinner` | Standalone spinner. | Size, color, and stroke props | `src/components/ui/spinner.tsx` |
| `Toaster` / `toaster` | Global toast system. Mount `Toaster` once and trigger toasts from app logic with the shared `toaster` singleton. | `Toaster` component plus exported `toaster` instance | `src/components/ui/toast.tsx` |

### Overlay, Navigation, And Disclosure Primitives

| Export | Use it for | Practical props and slots | Source |
| --- | --- | --- | --- |
| `Accordion` | Expand/collapse sections with one or many open items. | `Root`, `Item`, `ItemTrigger`, `ItemIndicator`, `ItemContent`, `ItemBody` | `src/components/ui/accordion.tsx` |
| `Breadcrumb` | Hierarchical path navigation. | `Root`, `List`, `Item`, `Link`, `Ellipsis`, `Separator` | `src/components/ui/breadcrumb.tsx` |
| `Card` | Base card surface for custom compositions. | `Root` variants include `variant`, `hover`, `dashed`, `accent`, `gradient`; slots are `Header`, `Body`, `Footer`, `Title`, `Description` | `src/components/ui/card.tsx` |
| `Carousel` | Carousel or hero slider with built-in triggers and indicators. | `Root`, `ItemGroup`, `Item`, `Control`, `PrevTrigger`, `NextTrigger`, `IndicatorGroup`, `Indicator`, `AutoplayTrigger` | `src/components/ui/carousel.tsx` |
| `Collapsible` | One-off expandable content without full accordion semantics. | `Root`, `Trigger`, `Indicator`, `Content` | `src/components/ui/collapsible.tsx` |
| `Dialog` | Base modal primitive. Prefer `ConfirmDialog`, `FormDialog`, or `DetailDialog` when the structure matches. | Root props cover `open`, `onOpenChange`, `size`, `placement`, `motionPreset`, `scrollBehavior`, `accent`; slots are `Backdrop`, `Positioner`, `Content`, `Header`, `Body`, `Footer`, `Title`, `Description`, `CloseTrigger`, `ActionTrigger`, `Trigger` | `src/components/ui/dialog.tsx` |
| `Drawer` | Side or bottom overlay primitive. Prefer `SlideOver` when you need the shared Axionic editor shell. | `Root`, `Backdrop`, `Positioner`, `Content`, `Header`, `Body`, `Footer`, `Title`, `Description`, `CloseTrigger`, `Trigger` | `src/components/ui/drawer.tsx` |
| `HoverCard` | Preview content on hover/focus. | `Root`, `Trigger`, `Positioner`, `Content`, `Arrow`, `ArrowTip` | `src/components/ui/hover-card.tsx` |
| `Menu` | Action menus and context menus. | `Trigger`, `Content`, `Item`, `CheckboxItem`, `RadioItem`, `RadioItemGroup`, `Separator`, `ItemGroup`, `ItemGroupLabel`, `TriggerItem`, `ContextTrigger`, `ItemIndicator`, `Arrow` | `src/components/ui/menu.tsx` |
| `Pagination` | Paged navigation controls. | `Root`, `PrevTrigger`, `NextTrigger`, `Item`, `Ellipsis`, `Items` helper | `src/components/ui/pagination.tsx` |
| `Popover` | Anchored floating content. | `Root`, `Anchor`, `Trigger`, `Positioner`, `Content`, `Header`, `Body`, `Footer`, `Title`, `Description`, `CloseTrigger`, `Indicator`, `Arrow`, `ArrowTip` | `src/components/ui/popover.tsx` |
| `ScrollArea` | Styled scrollable viewport. | `Root`, `Viewport`, `Scrollbar`, `Thumb`, `Corner`, `Content` | `src/components/ui/scroll-area.tsx` |
| `Splitter` | Resizable multi-pane layout. | `Root`, `Panel`, `ResizeTrigger` | `src/components/ui/splitter.tsx` |
| `Tabs` | Tabbed navigation/content. | `Root`, `List`, `Trigger`, `Content`, `Indicator` | `src/components/ui/tabs.tsx` |
| `Tooltip` | Simplified tooltip wrapper around any child trigger. | `content`, `showArrow`, `portalled`, `portalRef`, `disabled`, plus base tooltip root props | `src/components/ui/tooltip.tsx` |

### Form Controls, Selection, And Input Composition

| Export | Use it for | Practical props and slots | Source |
| --- | --- | --- | --- |
| `Checkbox` | Checkbox inputs and checkbox groups. | `Root`, `Control`, `Indicator`, `Label`, `HiddenInput`, `Group` | `src/components/ui/checkbox.tsx` |
| `ColorPicker` | Full color selection UI beyond a native color input. | `Root`, `Control`, `Trigger`, `Content`, `Positioner`, `Area`, `ChannelInput`, `ChannelSlider*`, `FormatSelect`, `SwatchGroup`, `SwatchTrigger`, `ValueSwatch`, `ValueText`, `HiddenInput` | `src/components/ui/color-picker.tsx` |
| `Combobox` | Searchable, text-enterable selection. | `Root`, `Input`, `Trigger`, `Content`, `List`, `Item`, `ItemText`, `Empty`, `ClearTrigger`, `ItemIndicator` | `src/components/ui/combobox.tsx` |
| `DatePicker` | Date picking with calendar grid and month/year controls. | `Root`, `Input`, `Trigger`, `Content`, `Positioner`, `Table*`, `MonthSelect`, `YearSelect`, `PrevTrigger`, `NextTrigger`, `RangeText`, `View*`, `PresetTrigger`, `ClearTrigger` | `src/components/ui/date-picker.tsx` |
| `Editable` | Inline edit/view surface. | `Root`, `Preview`, `Input`, `EditTrigger`, `SubmitTrigger`, `CancelTrigger`, `Control` | `src/components/ui/editable.tsx` |
| `Field` | Primitive field wrapper for label/helper/error state. | `Root`, `Label`, `HelperText`, `ErrorText`, `RequiredIndicator` | `src/components/ui/field.tsx` |
| `Fieldset` | Group related controls under one legend. | `Root`, `Legend`, `HelperText`, `ErrorText`, `Content`, `Control` | `src/components/ui/fieldset.tsx` |
| `FileUpload` | File selection, drag/drop, and selected-file list flows. | `Root`, `Dropzone`, `Trigger`, `Label`, `HiddenInput`, `Item`, `ItemPreview`, `ItemName`, `ItemSizeText`, `ItemDeleteTrigger`, plus `Items`, `List`, `FileText` helpers | `src/components/ui/file-upload.tsx` |
| `Input` | Standard single-line text input. | Styled field input props | `src/components/ui/input.tsx` |
| `InputAddon` | Low-level add-on surface attached to an input edge. | Styled div props | `src/components/ui/input-addon.tsx` |
| `InputGroup` | Input wrapper with inline leading and trailing elements. | `startElement`, `endElement` | `src/components/ui/input-group.tsx` |
| `Label` | Standalone label primitive when `Field` is not needed. | Label props | `src/components/ui/label.tsx` |
| `NumberInput` | Numeric input with steppers and scrubber support. | `Root`, `Input`, `Control`, `IncrementTrigger`, `DecrementTrigger`, `Scrubber`, `ValueText`, `Label` | `src/components/ui/number-input.tsx` |
| `PinInput` | One-time code or segmented character input. | `Root`, `Control`, `Input`, `HiddenInput`, `Label` | `src/components/ui/pin-input.tsx` |
| `RadioCardGroup` | Card-style radio options. | `Root`, `Item`, `ItemControl`, `ItemText`, `ItemHiddenInput`, `Indicator`, `Label` | `src/components/ui/radio-card-group.tsx` |
| `RadioGroup` | Standard radio options. | `Root`, `Item`, `ItemControl`, `ItemText`, `ItemHiddenInput`, `Indicator`, `Label` | `src/components/ui/radio-group.tsx` |
| `RatingGroup` | Star or rating input. | `Root`, `Control`, `Item`, `ItemIndicator`, `HiddenInput`, `Label`, `Items` helper | `src/components/ui/rating-group.tsx` |
| `Select` | Standard select/listbox. | `Root`, `Trigger`, `Content`, `Positioner`, `List`, `Item`, `ItemText`, `ValueText`, `Indicator`, `HiddenSelect`, `ClearTrigger`, `ItemIndicator` | `src/components/ui/select.tsx` |
| `SegmentGroup` | Segmented control. | `Root`, `Item`, `ItemControl`, `ItemText`, `ItemHiddenInput`, `Indicator`, `Label`, `Items` helper | `src/components/ui/segment-group.tsx` |
| `Slider` | One- or multi-thumb slider. | `Root`, `Track`, `Range`, `Thumb`, `ValueText`, `HiddenInput`, `Marks`, `Thumbs` | `src/components/ui/slider.tsx` |
| `Switch` | Boolean switch/toggle. | `Root`, `Control`, `Thumb`, `Indicator`, `ThumbIndicator`, `Label`, `HiddenInput` | `src/components/ui/switch.tsx` |
| `TagsInput` | Tokenized free-text input. | `Root`, `Control`, `Input`, `Item`, `ItemText`, `ItemDeleteTrigger`, `ItemInput`, `ItemPreview`, `HiddenInput`, `ClearTrigger`, `Items` helper | `src/components/ui/tags-input.tsx` |
| `Textarea` | Multiline text input. | Styled textarea props | `src/components/ui/textarea.tsx` |
| `ToggleGroup` | Grouped toggle buttons. | `Root`, `Item` | `src/components/ui/toggle-group.tsx` |

### Data And Table Structure

| Export | Use it for | Practical props and slots | Source |
| --- | --- | --- | --- |
| `Table` | Base table composition when `ActivityTable` would be too opinionated. | `Root`, `Head`, `Body`, `Row`, `Header`, `Cell`, `Caption`, `Foot` | `src/components/ui/table.tsx` |

## Practical Selection Rules

- Use `SectionPanel`, `FormSection`, `DetailPanel`, or `SlideOver` before composing your own panel chrome.
- Use `SelectionList`, `PickerField`, `SearchPickerDialog`, and `ChoiceSegment` before making route-local pickers.
- Use `ValueField`, `SecretField`, and `NumberField` before inventing one-off “label over control/value” layouts.
- Use `ActivityTable`, `ResourceList`, `StatusBanner`, `StatusState`, and `EmptyState` before hand-rolling table and status shells.
- Drop to primitives when the page needs a new composition pattern, but prefer existing shared variants and slots over route-local styling.
