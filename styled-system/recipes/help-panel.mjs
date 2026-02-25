import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const helpPanelDefaultVariants = {}
const helpPanelCompoundVariants = []

const helpPanelSlotNames = [
  [
    "root",
    "help-panel__root"
  ],
  [
    "header",
    "help-panel__header"
  ],
  [
    "headerIcon",
    "help-panel__headerIcon"
  ],
  [
    "tabBar",
    "help-panel__tabBar"
  ],
  [
    "tab",
    "help-panel__tab"
  ],
  [
    "content",
    "help-panel__content"
  ],
  [
    "footer",
    "help-panel__footer"
  ],
  [
    "accentBar",
    "help-panel__accentBar"
  ],
  [
    "root",
    "help-panel__root"
  ],
  [
    "header",
    "help-panel__header"
  ],
  [
    "headerIcon",
    "help-panel__headerIcon"
  ],
  [
    "tabBar",
    "help-panel__tabBar"
  ],
  [
    "tab",
    "help-panel__tab"
  ],
  [
    "content",
    "help-panel__content"
  ],
  [
    "footer",
    "help-panel__footer"
  ],
  [
    "accentBar",
    "help-panel__accentBar"
  ]
]
const helpPanelSlotFns = /* @__PURE__ */ helpPanelSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, helpPanelDefaultVariants, getSlotCompoundVariant(helpPanelCompoundVariants, slotName))])

const helpPanelFn = memo((props = {}) => {
  return Object.fromEntries(helpPanelSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const helpPanelVariantKeys = []
const getVariantProps = (variants) => ({ ...helpPanelDefaultVariants, ...compact(variants) })

export const helpPanel = /* @__PURE__ */ Object.assign(helpPanelFn, {
  __recipe__: false,
  __name__: 'helpPanel',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: helpPanelVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, helpPanelVariantKeys)
  },
  getVariantProps
})