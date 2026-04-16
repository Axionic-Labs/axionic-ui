'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export interface AppShellProps {
	sidebar?: ReactNode;
	toolbar?: ReactNode;
	children: ReactNode;
	aside?: ReactNode;
	className?: string;
	bodyClassName?: string;
	mainClassName?: string;
	asideClassName?: string;
}

const styles = {
	root: css({
		minHeight: '100dvh',
		bg: 'app.canvas',
		color: 'app.text',
	}),
	body: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
	}),
	sidebar: css({
		minWidth: 0,
		bg: 'app.nav',
		padding: { base: '4', md: '4.5', lg: '4.5' },
		position: { base: 'relative', lg: 'sticky' },
		top: { base: 'auto', lg: '0' },
		height: { base: 'auto', lg: '100dvh' },
		overflowY: 'auto',
	}),
	toolbar: css({
		position: 'sticky',
		top: '0',
		zIndex: '20',
		bg: 'app.toolbar',
		backdropFilter: 'blur(18px)',
	}),
	main: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '4.5',
	}),
	aside: css({
		minWidth: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
		paddingLeft: { base: '0', xl: '6' },
	}),
};

export function AppShell({
	sidebar,
	toolbar,
	children,
	aside,
	className,
	bodyClassName,
	mainClassName,
	asideClassName,
}: AppShellProps) {
	const rootClassName = css({
		display: 'grid',
		gridTemplateColumns: sidebar ? { base: '1fr', lg: '13rem minmax(0, 1fr)' } : '1fr',
	});

	const contentClassName = css({
		flex: '1',
		display: 'grid',
		gap: '4',
		paddingX: { base: '4', md: '4.5', xl: '5' },
		paddingY: { base: '4', md: '4.5', xl: '4.5' },
		gridTemplateColumns: aside ? { base: '1fr', xl: 'minmax(0, 1fr) 22rem' } : '1fr',
		alignItems: 'start',
	});

	return (
		<div className={cx(styles.root, className)}>
			<div className={rootClassName}>
				{sidebar && <aside className={styles.sidebar}>{sidebar}</aside>}
				<div className={cx(styles.body, bodyClassName)}>
					{toolbar && <div className={styles.toolbar}>{toolbar}</div>}
					<div className={contentClassName}>
						<main className={cx(styles.main, mainClassName)}>{children}</main>
						{aside && <aside className={cx(styles.aside, asideClassName)}>{aside}</aside>}
					</div>
				</div>
			</div>
		</div>
	);
}
