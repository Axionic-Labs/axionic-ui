import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '../utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=size-])]:size-4 shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20',
				outline:
					'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				wheat:
					'bg-[var(--color-wheat)] text-[var(--color-rich-black)] shadow-xs hover:bg-[var(--color-snow)] hover:text-[var(--color-rich-black)] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(230,182,133,0.2)] disabled:bg-[var(--color-teal-300)] disabled:text-[var(--color-teal-100)] disabled:translate-y-0 disabled:shadow-none',
				dark: 'bg-[var(--color-rich-black)] text-[var(--color-white)] hover:bg-[var(--color-snow)] hover:text-[var(--color-rich-black)] disabled:bg-[var(--color-teal-300)] disabled:text-[var(--color-teal-100)]',
				oauth:
					'border border-[var(--color-teal-100)] text-[var(--color-rich-black)] bg-[var(--color-white)] hover:bg-[var(--color-snow)]',
				'outline-brand':
					'border border-[var(--color-rich-black)] text-[var(--color-rich-black)] bg-transparent hover:bg-[var(--color-snow)] disabled:border-[var(--color-teal-100)] disabled:text-[var(--color-teal-100)]',
				'ghost-dark':
					'border border-white/30 text-white bg-transparent hover:bg-white/[0.08] hover:border-white/50',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-6',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
