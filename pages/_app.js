import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.css'

/**
 * initialize page
 *
 *  @type {Function} MyApp
 */
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
