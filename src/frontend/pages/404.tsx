import { NextPage } from 'next'
import { Typography } from '@mui/material'
import React, { ReactElement } from 'react'

const NotFoundPage: NextPage = (): ReactElement => {
  return (
    <>
      <Typography
        color={'textPrimary'}
        variant={'h4'}
        sx={{
          padding: (theme) => ({
            marginBottom: theme.spacing()
          })
        }}
      >
        {'Error 404: Page Not Found'}
      </Typography>
    </>
  )
}

export default NotFoundPage
