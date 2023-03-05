import Head from 'next/head'
import type { ReactElement } from 'react'

type LayoutProps = {
  readonly children: ReactElement
  meta: any
}

const DefaultLayout = ({ children, meta }: LayoutProps) => {
  return (
    <div className="p-8">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <header>CodeGrid Blog</header>
      <div>{children}</div>
    </div>
  )
}

export default DefaultLayout
