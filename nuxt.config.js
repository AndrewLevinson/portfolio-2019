const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Andrew Levinson | Design & Data',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src: 'smooth.js',
        type: 'text/javascript'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/css/normalize.css', '~/css/typography.css', '~/css/styles.css'],

  /*
  ** Plugins to load before mounting the App
  */

  plugins: ['~/plugins/components.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'EncrplQK9R5bUJhdvuCvswtt',
        cacheProvider: 'memory'
      }
    ],
    ['@nuxtjs/markdownit']
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
