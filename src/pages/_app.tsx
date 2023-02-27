import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from '@/styles/global'
import theme from '@/styles/theme'
import '@fontsource/inter'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
