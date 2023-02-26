import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
