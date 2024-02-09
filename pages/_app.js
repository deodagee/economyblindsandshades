// C:\Users\User\economyblindsandshadesjs\pages\_app.js
import '../styles/globals.css';
import React from 'react';
import App from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/fonts";
import { SessionProvider } from "next-auth/react";
import { DataProvider } from '../utils/DataContext';

class MyApp extends App {
  render() {
    const { Component, pageProps, router, session } = this.props;
    return (
      <>

      <DataProvider>
        <SessionProvider session={session}>
          <ChakraProvider>
            <Fonts />
            <Component {...pageProps} key={router.route} />
          </ChakraProvider>
        </SessionProvider>
        </DataProvider>
      </>
    );
  }
}

export default MyApp;
