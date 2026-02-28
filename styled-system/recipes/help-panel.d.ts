/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface HelpPanelVariant {
  
}

type HelpPanelVariantMap = {
  [key in keyof HelpPanelVariant]: Array<HelpPanelVariant[key]>
}

type HelpPanelSlot = "root" | "header" | "headerIcon" | "tabBar" | "tab" | "content" | "footer" | "accentBar" | "root" | "header" | "headerIcon" | "tabBar" | "tab" | "content" | "footer" | "accentBar"

export type HelpPanelVariantProps = {
  [key in keyof HelpPanelVariant]?: ConditionalValue<HelpPanelVariant[key]> | undefined
}

export interface HelpPanelRecipe {
  __slot: HelpPanelSlot
  __type: HelpPanelVariantProps
  (props?: HelpPanelVariantProps): Pretty<Record<HelpPanelSlot, string>>
  raw: (props?: HelpPanelVariantProps) => HelpPanelVariantProps
  variantMap: HelpPanelVariantMap
  variantKeys: Array<keyof HelpPanelVariant>
  splitVariantProps<Props extends HelpPanelVariantProps>(props: Props): [HelpPanelVariantProps, Pretty<DistributiveOmit<Props, keyof HelpPanelVariantProps>>]
  getVariantProps: (props?: HelpPanelVariantProps) => HelpPanelVariantProps
}


export declare const helpPanel: HelpPanelRecipe