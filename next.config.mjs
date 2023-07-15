/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      mdxRs: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },

  swcMinify: true,
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
  }
   
export default nextConfig
 

  