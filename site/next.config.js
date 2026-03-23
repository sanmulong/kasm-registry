/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Idazi AI',
    description: 'The Un official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://sanmulong.github.io/kasm-registry/',
    contactUrl: 'https://idazi.xyz/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
