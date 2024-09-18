import { NextPage } from 'next'
import { Typography, Box } from '@mui/material'
import React, { ReactElement } from 'react'
import pata from '../public/static/pata.png'
import PageNavigation from 'frontend/components/_common/PageNavigation'
import { Edit } from '@mui/icons-material'
import layout from 'frontend/layouts/layout';
import Image from "next/image";

const Home: NextPage = (): ReactElement => {
  return (
    <>
    <Box
      component={Image}
      height={"100px"}
      width={"auto"}
      alt={""}
      src={pata}
    />
      <Typography
        color={'textPrimary'}
        variant={'h4'}
        sx={{
          padding: (theme) => ({
            marginBottom: theme.spacing()
          })
        }}
      >
        {'Hello world!'}
      </Typography>
      <PageNavigation
        routes={[
          {
            primary: 'Create Note',
            secondary: 'Create a note',
            icon: <Edit />,
            href: {
              pathname: '/notes/create',
              query: {}
            }
          }
        ]}
      />
    </>
  )
}

export default Home
