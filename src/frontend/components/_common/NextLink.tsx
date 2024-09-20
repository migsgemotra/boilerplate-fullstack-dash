import * as React from 'react'
import Link, { LinkProps as NextLinkProps } from 'next/link'
import { styled } from '@mui/material/styles'

/** *
 * Note: This file was copied from Material UI's Documentation.
 * The purpose of this file is to handle NextJS Internal Links cleanly
 */

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({})

interface NextLinkComposedProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
		Omit<NextLinkProps, 'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'> {
	to: NextLinkProps['href']
	newTab?: boolean
}

const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(function NextLinkComposed(props, ref) {
	const {
		to: href,
		replace,
		scroll,
		shallow,
		prefetch,
		legacyBehavior = true,
		locale,
		newTab = false,
		...other
	} = props

	return (
		<Link
			href={href}
			prefetch={prefetch}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			passHref
			locale={locale}
			legacyBehavior={legacyBehavior}
		>
			<Anchor target={newTab ? '_blank' : '_self'} ref={ref} {...other} />
		</Link>
	)
})

export default NextLink