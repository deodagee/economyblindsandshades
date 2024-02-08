// C:\Users\User\economyblindsandshadesjs\pages\_app.js


import '../styles/globals.css'
import React from 'react';
import App from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/fonts";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';
import { Provider } from 'react-redux';


class MyApp extends App {
  render() {
    const { Component, pageProps, router, session } = this.props;
    return (
      <>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SessionProvider session={session}>
              <ChakraProvider>
                <Fonts />
                <Component {...pageProps} key={router.route} />
              </ChakraProvider>
            </SessionProvider>
        </PersistGate>
        </Provider>
      </>
    );
  }
}

export default MyApp;
