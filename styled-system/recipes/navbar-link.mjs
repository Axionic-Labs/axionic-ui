import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const navbarLinkDefaultVariants = {
  "active": false,
  "dropdown": false
}
const navbarLinkCompoundVariants = [
  {
    "active": true,
    "dropdown": true,
    "css": {
      "trigger": {
        "_open": {
          "_after": {
            "width": "100%",
            "left": "0"
          }
        }
      }
    }
  },
  {
    "active": true,
    "dropdown": true,
    "css": {
      "trigger": {
        "_open": {
          "_after": {
            "width": "100%",
            "left": "0"
          }
        }
      }
    }
  }
]

const navbarLinkSlotNames = [
  [
    "trigger",
    "navbar-link__trigger"
  ],
  [
    "chevron",
    "navbar-link__chevron"
  ],
  [
    "trigger",
    "navbar-link__trigger"
  ],
  [
    "chevron",
    "navbar-link__chevron"
  ]
]
const navbarLinkSlotFns = /* @__PURE__ */ navbarLinkSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, navbarLinkDefaultVariants, getSlotCompoundVariant(navbarLinkCompoundVariants, slotName))])

const navbarLinkFn = memo((props = {}) => {
  return Object.fromEntries(navbarLinkSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const navbarLinkVariantKeys = [
  "active",
  "dropdown"
]
const getVariantProps = (variants) => ({ ...navbarLinkDefaultVariants, ...compact(variants) })

export const navbarLink = /* @__PURE__ */ Object.assign(navbarLinkFn, {
  __recipe__: false,
  __name__: 'navbarLink',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: navbarLinkVariantKeys,
  variantMap: {
  "active": [
    "true"
  ],
  "dropdown": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, navbarLinkVariantKeys)
  },
  getVariantProps
})