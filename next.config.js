/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge"
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
