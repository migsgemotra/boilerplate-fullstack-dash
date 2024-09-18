import React, { ReactElement, useMemo } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

interface PageHeaderRoute {
  title: string
  href?: string | { pathname: string; query?: { [slug: string]: string } }
}

const PageHeader = ({ title, routes = [] }: { title: string; routes?: PageHeaderRoute[] }): ReactElement => {
  const router = useRouter()

  const pageTitle: string = useMemo(() => {
    const routeTitles: string[] = routes.map((route: PageHeaderRoute): string => route.title)

    return [title].concat(routeTitles.reverse()).join(' - ')
  }, [routes, title])

  return (
    <>
      <Head>{pageTitle}</Head>
      <Breadcrumbs sx={{ mb: 3 }}>
        {routes?.map(
          (route: PageHeaderRoute, index: number): ReactElement => (
            <NextLink key={index} href={route.href} passHref>
              <MuiLink>{route.title}</MuiLink>
            </NextLink>
          )
        )}
        <Typography color={'text.primary'}>{title}</Typography>
      </Breadcrumbs>
      <Typography color={'text.primary'} variant={'h4'} sx={{ mb: 3 }}>
        {title}
      </Typography>
    </>
  )
}

export default PageHeader
