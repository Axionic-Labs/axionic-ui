import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '../utils';
import { type buttonVariants } from './button';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
	return (
		<nav
			data-slot="pagination"
			role="navigation"
			aria-label="pagination"
			className={cn('mx-auto flex w-full justify-center', className)}
			{...props}
		/>
	);
}

function PaginationContent({
	className,
	...props
}: React.ComponentProps<'ul'>) {
	return (
		<ul
			data-slot="pagination-content"
			className={cn('flex flex-row items-center gap-1', className)}
			{...props}
		/>
	);
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
	return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
	isActive?: boolean;
	size?: 'default' | 'sm' | 'lg' | 'icon';
} & Pick<
	React.ComponentProps<typeof import('./button').Button>,
	'variant'
> &
	React.ComponentProps<'a'>;

function PaginationLink({
	className,
	isActive,
	size = 'icon',
	...props
}: PaginationLinkProps) {
	return (
		<a
			data-slot="pagination-link"
			aria-current={isActive ? 'page' : undefined}
			data-active={isActive}
			className={cn(
				'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 min-w-9 px-3 cursor-pointer',
				isActive
					? 'border border-input bg-background shadow-xs'
					: 'hover:bg-accent hover:text-accent-foreground',
				className,
			)}
			{...props}
		/>
	);
}

function PaginationPrevious({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink
			data-slot="pagination-previous"
			aria-label="Go to previous page"
			size="default"
			className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
			{...props}
		>
			<ChevronLeft className="size-4" />
			<span className="hidden sm:block">Previous</span>
		</PaginationLink>
	);
}

function PaginationNext({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink
			data-slot="pagination-next"
			aria-label="Go to next page"
			size="default"
			className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
			{...props}
		>
			<span className="hidden sm:block">Next</span>
			<ChevronRight className="size-4" />
		</PaginationLink>
	);
}

function PaginationEllipsis({
	className,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="pagination-ellipsis"
			aria-hidden
			className={cn('flex size-9 items-center justify-center', className)}
			{...props}
		>
			<MoreHorizontal className="size-4" />
			<span className="sr-only">More pages</span>
		</span>
	);
}

export {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	PaginationEllipsis,
};
