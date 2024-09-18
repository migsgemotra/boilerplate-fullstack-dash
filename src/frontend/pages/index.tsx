import { NextPage } from 'next'
import { Typography, Box } from '@mui/material'
import React, { ReactElement } from 'react'
import AppBarComponent from '../layouts/moduleViewer/AppBarComponent'
import TestComponent from 'frontend/components/testComponent'
import Image from "next/image";
import pata from '../public/static/pata.png'

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <AppBarComponent title={'Project Boilerplate'} />
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
        {'Hello, World!'}
      </Typography>
    </>
  )
}

export default Home
