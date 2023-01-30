import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";

/**
 * initialize page
 *
 *  @type {Function} MyApp
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aforify</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Todos los eventos disponibles" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
