'use client';

import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import * as Card from '../ui/card';

export interface AuthShellProps {
	eyebrow?: ReactNode;
	brand?: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	featureList?: ReactNode;
	formTitle: ReactNode;
	formDescription?: ReactNode;
	formBanner?: ReactNode;
	children: ReactNode;
	className?: string;
}

const styles = {
	root: css({
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background:
			'radial-gradient(circle at top, color-mix(in srgb, token(colors.teal.4) 45%, transparent) 0%, transparent 42%), linear-gradient(180deg, #f8f9f9 0%, #f3f4f4 100%)',
		paddingX: { base: '4', md: '6' },
		paddingY: { base: '8', md: '12' },
	}),
	frame: css({
		width: 'full',
		maxWidth: '6xl',
		display: 'grid',
		gridTemplateColumns: { base: '1fr', lg: 'minmax(20rem, 0.98fr) minmax(24rem, 0.82fr)' },
		gap: { base: '6', lg: '10' },
		alignItems: 'stretch',
	}),
	brandPanel: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: { base: '6', md: '7', lg: '8' },
		borderRadius: 'l3',
		borderWidth: '1px',
		borderColor: 'app.border',
		background: 'linear-gradient(180deg, #f6f7f7 0%, #eef1f0 100%)',
		boxShadow: '{shadows.whisper}',
		minHeight: { base: 'auto', lg: '40rem' },
	}),
	copy: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '5',
	}),
	eyebrow: css({
		width: 'fit-content',
	}),
	title: css({
		textStyle: 'h1',
		color: 'app.text',
		maxWidth: '14ch',
	}),
	description: css({
		textStyle: 'body',
		color: 'app.text.muted',
		maxWidth: '34rem',
	}),
	featureList: css({
		display: 'grid',
		gap: '3',
		marginTop: '8',
	}),
	formWrap: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),
	formCard: css({
		width: 'full',
		maxWidth: 'lg',
		boxShadow: '{shadows.whisper}',
		borderColor: 'app.border',
		background: 'rgba(255, 255, 255, 0.94)',
		backdropFilter: 'blur(10px)',
	}),
	formHeader: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '3',
		paddingBottom: '1',
	}),
	formTitle: css({
		textStyle: 'h3',
		color: 'app.text',
	}),
	formDescription: css({
		textStyle: 'body-sm',
		color: 'app.text.muted',
	}),
	formBody: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '6',
	}),
};

export function AuthShell({
	eyebrow,
	brand,
	title,
	description,
	featureList,
	formTitle,
	formDescription,
	formBanner,
	children,
	className,
}: AuthShellProps) {
	return (
		<div className={cx(styles.root, className)}>
			<div className={styles.frame}>
				<section className={styles.brandPanel}>
					<div className={styles.copy}>
						{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
						{brand}
						<div className={styles.title}>{title}</div>
						{description && <div className={styles.description}>{description}</div>}
					</div>
					{featureList && <div className={styles.featureList}>{featureList}</div>}
				</section>

				<div className={styles.formWrap}>
					<Card.Root className={styles.formCard}>
						<Card.Header className={styles.formHeader}>
							<Card.Title className={styles.formTitle}>{formTitle}</Card.Title>
							{formDescription ? (
								<Card.Description className={styles.formDescription}>{formDescription}</Card.Description>
							) : null}
						</Card.Header>
						<Card.Body className={styles.formBody}>
							{formBanner}
							{children}
						</Card.Body>
					</Card.Root>
				</div>
			</div>
		</div>
	);
}
