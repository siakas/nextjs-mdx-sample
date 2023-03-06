import type { GetStaticPropsContext, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { promises as fs } from 'node:fs'
import DefaultLayout from '@/layouts/DefaultLayout'

type Props = {
  slug: string
  meta: {
    title: string
  }
}

export const getStaticPaths = async () => {
  const dataDir = 'src/articles'
  const fileNames = await fs.readdir(dataDir)
  const files = fileNames.map((fileName) => {
    return {
      fileName,
    }
  })

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.fileName.replace(/\.mdx$/, ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug
  const data = await import(`@/articles/${slug}.mdx`)

  return {
    props: {
      slug,
      meta: data.meta,
    },
  }
}

const Page: NextPage<Props> = ({ slug, meta }) => {
  const Content = dynamic(import(`@/articles/${slug}.mdx`))

  return (
    <DefaultLayout meta={meta}>
      <Content />
    </DefaultLayout>
  )
}

export default Page
