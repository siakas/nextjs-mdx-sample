import Head from 'next/head'
import type { ReactElement } from 'react'
import { MDXProvider } from '@mdx-js/react'
import H2Heading from '@/components/H2Heading'

type LayoutProps = {
  readonly children: ReactElement
  meta: any
}

const components = {
  h2: H2Heading,
}

const DefaultLayout = ({ children, meta }: LayoutProps) => {
  return (
    <div className="p-8">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <header>CodeGrid Blog</header>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  )
}

export default DefaultLayout
