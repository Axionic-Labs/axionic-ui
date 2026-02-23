import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const switchDefaultVariants = {
  "variant": "solid",
  "size": "md"
}
const switchCompoundVariants = []

const switchSlotNames = [
  [
    "root",
    "switch__root"
  ],
  [
    "label",
    "switch__label"
  ],
  [
    "control",
    "switch__control"
  ],
  [
    "thumb",
    "switch__thumb"
  ],
  [
    "indicator",
    "switch__indicator"
  ],
  [
    "root",
    "switch__root"
  ],
  [
    "label",
    "switch__label"
  ],
  [
    "control",
    "switch__control"
  ],
  [
    "thumb",
    "switch__thumb"
  ],
  [
    "indicator",
    "switch__indicator"
  ]
]
const switchSlotFns = /* @__PURE__ */ switchSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, switchDefaultVariants, getSlotCompoundVariant(switchCompoundVariants, slotName))])

const switchFn = memo((props = {}) => {
  return Object.fromEntries(switchSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const switchVariantKeys = [
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...switchDefaultVariants, ...compact(variants) })

export const switch = /* @__PURE__ */ Object.assign(switchFn, {
  __recipe__: false,
  __name__: 'switch',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: switchVariantKeys,
  variantMap: {
  "variant": [
    "solid"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, switchVariantKeys)
  },
  getVariantProps
})