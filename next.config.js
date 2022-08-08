/**
 * @type {import('next').NextConfig}
 */
const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,

  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
