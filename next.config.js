// next.config.js



module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./contrib/generateSiteMap')
    }

    return config
  }
}