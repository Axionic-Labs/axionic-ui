import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'

export type LabelProps = ComponentProps<typeof Label>
export const Label = styled(ark.label, {
	base: { fontWeight: 'medium', fontSize: 'sm', color: 'fg.default' },
})
