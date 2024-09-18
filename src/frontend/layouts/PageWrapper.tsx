import React, { ReactElement, useState } from 'react'
import { Theme } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const drawerWidth = 300

const PageWrapper = ({
  children
}: {
  children?: ReactElement | ReactElement[]
}): ReactElement => {
  const theme = useTheme()
  const persistent = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true })

  const [open, setOpen] = useState(true)

  const appBarSx = {
    transition: (theme: Theme) =>
      theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
    ...(open && {
      width: {
        xs: '100%',
        md: `calc(100% - ${drawerWidth}px)`
      },
      marginLeft: {
        xs: `${drawerWidth}px`,
        md: 0
      },
      transition: (theme: Theme) =>
        theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
    })
  }

  const mainBodySx = {
    padding: {
      xs: 1,
      sm: 2,
      md: 5
    },
    transition: (theme: Theme) =>
      theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
    ...(open && {
      ml: {
        xs: 0,
        md: `${drawerWidth}px`
      },
      transition: (theme: Theme) =>
        theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
    })
  }

  return (
    <>
      <AppBar position={'fixed'} sx={appBarSx}>
        <Toolbar>
          {!open && (
            <IconButton color={'inherit'} onClick={(): void => setOpen(!open)} sx={{ mr: 2 }} edge={'start'}>
              <MenuIcon />
            </IconButton>
          )}
          <img
            style={{ height: theme.spacing(3), display: 'block' }}
            src={'/pata.png'}
          />
          <div style={{ flex: 1 }} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          'width': drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant={persistent ? 'persistent' : 'temporary'}
        anchor={'left'}
        onClose={(): void => setOpen(false)}
        open={open}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          {open && (
            <IconButton color={'inherit'} onClick={(): void => setOpen(!open)} edge={'start'}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        </Toolbar>
        <Divider />
        {'Input content here'}
      </Drawer>
      <Box sx={mainBodySx}>
        <Toolbar />
        {children}
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.default',
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />
    </>
  )
}

export default PageWrapper
