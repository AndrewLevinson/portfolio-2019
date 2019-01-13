const pkg = require('./package')
export default {
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}

module.exports = {
  mode: 'universal',
  generate: {
    routes: function() {
      return ['/work']
    }
  },
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,500,600,700|Playfair+Display:400,400i,700,900'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity:
          'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous'
      }
    ],
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
