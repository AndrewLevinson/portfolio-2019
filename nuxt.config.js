const pkg = require('./package')
require('dotenv').config()
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'universal',
  router: {
    // scrollBehavior: async (to, from, savedPosition) => {
    //   if (savedPosition) {
    //     return savedPosition
    //   }
    //   const findEl = async (hash, x) => {
    //     return (
    //       document.querySelector(hash) ||
    //       new Promise((resolve, reject) => {
    //         if (x > 50) {
    //           return resolve()
    //         }
    //         setTimeout(() => {
    //           resolve(findEl(hash, ++x || 1))
    //         }, 800)
    //       })
    //     )
    //   }
    //   if (to.hash) {
    //     let el = await findEl(to.hash)
    //     if ('scrollBehavior' in document.documentElement.style) {
    //       return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    //     } else {
    //       return window.scrollTo(0, el.offsetTop)
    //     }
    //   }
    //   return { x: 0, y: 0 }
    // }

    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  generate: {
    routes: () => {
      return [
        '/work',
        '/blog',
        '/projects/water',
        '/projects/cookies',
        '/projects/ease-energy',
        '/projects/arc',
        '/projects/sensor',
        '/projects/quakes',
        '/projects/clock',
        '/projects/event-tech',
        '/projects/unbreakable',
        '/projects/pension',
        '404'
      ]
    },
    fallback: true
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,500,600,700|Playfair+Display:400,400i,700,900'
      // },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin:300,400,500,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity:
          'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'hsl(300, 60%, 25%)',
    continuous: true,
    height: '3px'
  },

  /*
  ** Global CSS
  */
  css: ['~/css/normalize.css', '~/css/typography.css', '~/css/styles.css'],

  /*
  ** Plugins to load before mounting the App
  */

  plugins: ['~/plugins/components.js', '~/plugins/filters.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
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
    },
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}
