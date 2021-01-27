module.exports = {
  modifyWebpackConfig: ({ env: { dev, target }, webpackConfig, webpackObject }) => {
    // Bundle everything into server bundle
    webpackConfig.externals = undefined

    if (target === 'web') {
      webpackConfig.node = { fs: 'empty' } // fix "Cannot find module 'fs'" problem.
    }

    if (target === 'node') {
      webpackConfig.optimization = {
        minimize: false,
      }
    }

    return webpackConfig
  },
}
