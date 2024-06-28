/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/music-sheets/' : '',
  basePath: isProd ? '/music-sheets' : '',
}

module.exports = nextConfig
