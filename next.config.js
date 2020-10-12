// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
})


const withFonts = require('nextjs-fonts');
module.exports = withFonts();