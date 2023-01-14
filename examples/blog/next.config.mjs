import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
    images: {
    domains: ['nextrablog.paulapplegate.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true
})
