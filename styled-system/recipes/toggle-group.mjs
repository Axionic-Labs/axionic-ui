import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const toggleGroupDefaultVariants = {
  "size": "md",
  "variant": "outline"
}
const toggleGroupCompoundVariants = []

const toggleGroupSlotNames = [
  [
    "root",
    "toggle-group__root"
  ],
  [
    "item",
    "toggle-group__item"
  ],
  [
    "root",
    "toggle-group__root"
  ],
  [
    "item",
    "toggle-group__item"
  ],
  [
    "root",
    "toggle-group__root"
  ],
  [
    "item",
    "toggle-group__item"
  ]
]
const toggleGroupSlotFns = /* @__PURE__ */ toggleGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toggleGroupDefaultVariants, getSlotCompoundVariant(toggleGroupCompoundVariants, slotName))])

const toggleGroupFn = memo((props = {}) => {
  return Object.fromEntries(toggleGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const toggleGroupVariantKeys = [
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...toggleGroupDefaultVariants, ...compact(variants) })

export const toggleGroup = /* @__PURE__ */ Object.assign(toggleGroupFn, {
  __recipe__: false,
  __name__: 'toggleGroup',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: toggleGroupVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "variant": [
    "ghost",
    "outline"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, toggleGroupVariantKeys)
  },
  getVariantProps
})