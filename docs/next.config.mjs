import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
      images: {
    domains: ['nextra-blog.paulapplegate.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  }
})
