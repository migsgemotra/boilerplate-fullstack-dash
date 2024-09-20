import App from 'next/app'
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import dynamic from 'next/dynamic'
import theme from "../themes/theme";
import NavBar from "../components/_common/NavBar";
import Footer from "../components/_common/Footer";
import React, { ReactElement } from "react";

import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'
import Box from '@mui/material/Box'

const Notification = dynamic(() => import('../components/_common/Notification'))
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      lat: number
      lng: number
      toggleDarkTheme: VoidFunction
      darkTheme: boolean
      setNotification: (type: string, message: string) => void
    }
  }}


  const mainBodySx = {
    padding: {
      xs: 1,
      sm: 2,
      md: 5
    }
  }

  class MyApp extends App {
    render(): ReactElement {

      const { Component, pageProps } = this.props;
      return (
        <AppCacheProvider {...this.props}>
          <ThemeProvider theme={theme}>
            <NavBar />
            <CssBaseline />
            <ApolloProvider client={client}>
            <Box sx={mainBodySx}>
            <Component {...pageProps} />
            </Box>
            <Notification />
            </ApolloProvider>
            <Footer />
          </ThemeProvider>
        </AppCacheProvider>
      );

    }
  }

  export default MyApp