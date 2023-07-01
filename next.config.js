/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      mdxRs: true,
    },

  swcMinify: true
  }
   
  const withMDX = require('@next/mdx')({
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      //providerImportSource: "@mdx-js/react",
    },
  })


  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  });

  