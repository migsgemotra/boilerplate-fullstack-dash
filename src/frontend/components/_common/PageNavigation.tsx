import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import MuiLink from '@mui/material/Link'
import Paper from '@mui/material/Paper'

interface PageNavigationRoute {
  icon?: ReactElement
  primary?: string
  secondary?: string
  href?: string | { pathname: string; query: { [slug: string]: string } }
}

const PageNavigation = ({ routes = [] }: { routes?: PageNavigationRoute[] }): ReactElement => (
  <List component={Paper} sx={{ mb: 1 }}>
    {routes.map(
      (route: PageNavigationRoute, index: number): ReactElement => (
        <NextLink key={index} href={route.href || ''} passHref>
          <ListItem button disabled={!route.href} component={MuiLink}>
            {route.icon && <ListItemIcon>{route.icon}</ListItemIcon>}
            <ListItemText primary={route.primary} secondary={route.secondary} />
            <ListItemSecondaryAction>
              <NavigateNextIcon />
            </ListItemSecondaryAction>
          </ListItem>
        </NextLink>
      )
    )}
  </List>
)

export default PageNavigation
