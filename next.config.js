/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },

  // MDX 利用のために追加
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

// MDX 利用のために追加
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // `MDXProvider` を使う場合はコメントを外すこと
    // providerImportSource: "@mdx-js/react",
  },
})

// MDX 利用のための module.exports に変更
// module.exports = nextConfig
module.exports = withMDX(nextConfig)
