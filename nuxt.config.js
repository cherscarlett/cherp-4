require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Cher Scarlett || Code Hitchhiker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Personal website of Cher Scarlett. Resume, photos, and writing.'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@codehitchhiker'
      },
      {
        name: 'twitter:creator',
        content: '@codehitchhiker'
      },
      {
        name: 'twitter:image',
        content: 'http://cherp.tv/thumb.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: '/typography.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vue-lazy-load', '~/plugins/vue-modal'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  env: {
    spotifyId: process.env.SPOTIFY_CLIENT_ID,
    spotifySecret: process.env.SPOTIFY_CLIENT_SECRET,
    mLabKey: process.env.MLAB_API_KEY,
    mLabDB: process.env.MLAB_DB
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
  },
  serverMiddleware: ['~/api']
}
