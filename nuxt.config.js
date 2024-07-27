import colors from 'vuetify/es5/util/colors'
import client from './components/search/client.js'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    routes () {
      return client.collections('songs')
        .documents()
        .export({
          include_fields: 'id'
        })
        .then((res) => {
          const items = JSON.parse(`[${res}]`.replace(/\n/g, ','))
          return items.map((item) => {
            return `/songs/${item.id}/`
          })
        })
    }
  },

  router: {
    prefetchLinks: true,
    base: '/ethnoby-nuxt-test/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ethnoby',
    title: 'ethnoby',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/youtube.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyA4ztBwG6EThS8jK1r0vgZXaab7VeLuOy8',
          authDomain: 'vue-firebase-auth-f4de9.firebaseapp.com',
          databaseURL: 'https://vue-firebase-auth-f4de9.firebaseio.com',
          projectId: 'vue-firebase-auth-f4de9',
          storageBucket: 'vue-firebase-auth-f4de9.appspot.com',
          messagingSenderId: '826543119473',
          appId: '1:826543119473:web:baadccd4006005e2250fd0',
          measurementId: 'G-ZW5DG7RT3J'
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
              // onAuthStateChangedAction: 'onAuthStateChangedAction'
            }
          }
        }
      }
    ],

    'nuxt-leaflet',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  loading: {
    color: '#8d1802',
    height: '5px'
  },

  loadingIndicator: {
    name: 'pulse',
    color: '#8d1802',
    background: '#fff'
    // background: '#121212'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Ethnoby App',
      display: 'standalone',
      lang: 'en',
      theme_color: '#8d1802',
      background_color: '#121212'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.red.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#8d1802'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
