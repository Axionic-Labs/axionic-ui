/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SwitchVariant {
  /**
 * @default "solid"
 */
variant: "solid"
/**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg"
}

type SwitchVariantMap = {
  [key in keyof SwitchVariant]: Array<SwitchVariant[key]>
}

type SwitchSlot = "root" | "label" | "control" | "thumb" | "indicator"

export type SwitchVariantProps = {
  [key in keyof SwitchVariant]?: ConditionalValue<SwitchVariant[key]> | undefined
}

export interface SwitchRecipe {
  __slot: SwitchSlot
  __type: SwitchVariantProps
  (props?: SwitchVariantProps): Pretty<Record<SwitchSlot, string>>
  raw: (props?: SwitchVariantProps) => SwitchVariantProps
  variantMap: SwitchVariantMap
  variantKeys: Array<keyof SwitchVariant>
  splitVariantProps<Props extends SwitchVariantProps>(props: Props): [SwitchVariantProps, Pretty<DistributiveOmit<Props, keyof SwitchVariantProps>>]
  getVariantProps: (props?: SwitchVariantProps) => SwitchVariantProps
}


export declare const switchSlotRecipe: SwitchRecipe