import { defineSlotRecipe } from '@pandacss/dev';

export const table = defineSlotRecipe({
	className: 'table',
	slots: ['root', 'body', 'cell', 'foot', 'head', 'header', 'row', 'caption'],
	base: {
		root: {
			borderCollapse: 'collapse',
			fontVariantNumeric: 'lining-nums tabular-nums',
			textAlign: 'start',
			verticalAlign: 'top',
			width: 'full',
		},
		cell: {
			alignItems: 'center',
			color: 'app.text.muted',
			textAlign: 'start',
			textOverflow: 'ellipsis',
			textStyle: 'sm',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			boxShadow: 'inset 0 -1px 0 0 var(--shadow-color)',
			shadowColor: 'app.border',
			_pinned: {
				bg: 'inherit',
				boxShadow: 'inset 0 -1px 0 0 var(--shadow-color)',
				overflow: 'unset',
				position: 'sticky',
				shadowColor: 'app.border',
				zIndex: 1,
			},
		},
		row: {
			transition: 'background-color 160ms ease',
			_last: { '& td': { boxShadow: 'none' } },
		},
		header: {
			textAlign: 'left',
			verticalAlign: 'middle',
			boxShadow: 'inset 0 -1px 0 0 var(--shadow-color)',
			shadowColor: 'app.border',
			_pinned: {
				position: 'sticky',
				bg: 'inherit',
				zIndex: 2,
			},
		},
		head: {
			color: 'app.text.subtle',
			fontWeight: '700',
			textAlign: 'start',
			whiteSpace: 'nowrap',
			textStyle: 'xs',
			letterSpacing: '0.08em',
			textTransform: 'uppercase',
		},
		caption: {
			color: 'app.text.subtle',
			fontWeight: 'medium',
		},
		foot: {
			fontWeight: 'medium',
			'& td': { boxShadow: 'inset 0 1px 0 0 var(--shadow-color)!', shadowColor: 'app.border' },
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'plain',
	},
	variants: {
		variant: {
			surface: {
				header: { bg: 'app.surface.muted' },
				row: { bg: 'app.surface' },
			},
			plain: {},
		},
		striped: {
			true: {
				row: { '&:nth-of-type(odd) td': { bg: 'app.surface.muted' } },
			},
		},
		interactive: {
			true: {
				body: { '& tr': { _hover: { bg: 'app.surface.muted' } } },
			},
		},
		columnBorder: {
			true: {
				header: { '&:not(:last-of-type)': { borderInlineEndWidth: '1px' } },
				cell: { '&:not(:last-of-type)': { borderInlineEndWidth: '1px' } },
			},
		},
		stickyHeader: {
			true: {
				head: {
					'& :where(tr)': {
						top: 'var(--table-sticky-offset, 0)',
						position: 'sticky',
						zIndex: 2,
					},
				},
			},
		},
		size: {
			md: {
				root: { textStyle: 'sm' },
				header: { px: '3', py: '3' },
				cell: { px: '3', py: '3' },
			},
		},
	},
});
