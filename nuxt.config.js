const pkg = require('./package')
require('dotenv').config()
// const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'universal',
  router: {},
  generate: {
    routes: () => {
      return [
        '/',
        '/work',
        '/blog',
        '/projects/water',
        '/projects/cookies',
        '/projects/ease-energy',
        '/projects/arc',
        // '/projects/sensor',
        '/projects/quakes',
        '/projects/clock',
        '/projects/event-tech',
        '/projects/unbreakable',
        '/projects/pension',
        '/posts/extreme-curiosity-data-viz',
        '/posts/advice-to-intermediate-devs',
        '404'
      ]
    },
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Andrew Levinson | Design & Data',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'author', name: 'author', content: 'Andrew Levinson' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Data Visualization, JavaScript, CSS, WSJ, Design, Data, Developer'
      },

      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Andrew Levinson: Design & Data'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://andrewlevinson.me/'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Andrew Levinson: Design & Data'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/AndrewLevinson/portfolio-2019/master/static/promo.png'
      },
      {
        hid: 'twitter',
        property: 'twitter:card',
        content:
          'https://raw.githubusercontent.com/AndrewLevinson/portfolio-2019/master/static/promo.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,500,700&display=swap'
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
    }
    // plugins: [
    //   new CompressionPlugin({
    //     filename: '[path].gz[query]',
    //     test: /\.js$|\.css$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    //   })
    // ]
  }
}
