const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
/* Without CSS Modules, with PostCSS */
module.exports = withCSS(withSass({
  sassLoaderOptions: {
    includePaths: ["./styles", "./node_modules"]
  }
}))

/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withCSS({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/
