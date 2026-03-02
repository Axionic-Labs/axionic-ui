/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface NavbarLinkVariant {
  /**
 * @default false
 */
active: boolean
/**
 * @default false
 */
dropdown: boolean
}

type NavbarLinkVariantMap = {
  [key in keyof NavbarLinkVariant]: Array<NavbarLinkVariant[key]>
}

type NavbarLinkSlot = "trigger" | "chevron" | "trigger" | "chevron"

export type NavbarLinkVariantProps = {
  [key in keyof NavbarLinkVariant]?: NavbarLinkVariant[key] | undefined
}

export interface NavbarLinkRecipe {
  __slot: NavbarLinkSlot
  __type: NavbarLinkVariantProps
  (props?: NavbarLinkVariantProps): Pretty<Record<NavbarLinkSlot, string>>
  raw: (props?: NavbarLinkVariantProps) => NavbarLinkVariantProps
  variantMap: NavbarLinkVariantMap
  variantKeys: Array<keyof NavbarLinkVariant>
  splitVariantProps<Props extends NavbarLinkVariantProps>(props: Props): [NavbarLinkVariantProps, Pretty<DistributiveOmit<Props, keyof NavbarLinkVariantProps>>]
  getVariantProps: (props?: NavbarLinkVariantProps) => NavbarLinkVariantProps
}


export declare const navbarLink: NavbarLinkRecipe