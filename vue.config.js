const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },

  configureWebpack:  {
    plugins: process.env.NODE_ENV === 'production' ? [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/om', '/jobb', '/massasje', '/fysioterapi', '/osteopati', '/kiropraktor', '/akupunktur', '/fotpleie', '/yoga', '/yinyoga', '/svomming', '/loping', '/jordmor', '/bedrifter'],
        // renderer: new Renderer({
        //   inject: {
        //     foo: 'bar'
        //   },
        //   headless: true,
        //   renderAfterDocumentEvent: 'render-event'
        // })
      }),
      // new BundleAnalyzerPlugin()
    ] : []
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    // ? 'https://innlandethelseogfysioterapi.no/testing/'
    // ? 'C:/xampp/htdocs/ihf/dist/'
    : '/'
}
