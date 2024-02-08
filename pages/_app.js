// pages/_app.js
import '../styles/globals.css'
import React from 'react';
import App from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/fonts";
import { SessionProvider } from "next-auth/react";
import { StateProvider } from './components/StateContext';


class MyApp extends App {
  render() {
    const { Component, pageProps, router, session } = this.props;
    return (
      <>
      <StateProvider>
        <SessionProvider session={session}>
          <ChakraProvider>
            <Fonts />
              <Component {...pageProps} key={router.route} /> 
          </ChakraProvider>
        </SessionProvider>
        </StateProvider>
      </>
    );
  }
}

export default MyApp;
