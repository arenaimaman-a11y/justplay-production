import { resolve } from 'path'

export default {
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  alias: {
    'images': resolve(__dirname, './assets/images'),
    'style': resolve(__dirname, './assets/style')
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    if (this.$nuxtI18nHead) {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      return {
        title: 'Stream Free Movies & TV Shows',
        htmlAttrs: {
          ...i18nHead.htmlAttrs
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
          ...i18nHead.meta
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
          { rel: 'preconnect', href: '//fonts.googleapis.com' },
          { rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: '' },
          { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' },
          ...i18nHead.link
       ]
      }
    }

    return {
      title: 'Stream Free Movies & TV Shows',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
        { rel: 'preconnect', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' },
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lodash.js',
    '~/plugins/infiniteloading.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
  ],

  i18n: {
    baseUrl: '',
    locales: [
      {
        code: 'bg',
        name: 'Bulgarian',
        iso: 'bg-BG',
        file: 'bg-BG.js'
      },
      {
        code: 'cs',
        name: 'Czech',
        iso: 'cs-CZ',
        file: 'cs-CZ.js'
      },
      {
        code: 'da',
        name: 'Danish',
        iso: 'da-DK',
        file: 'da-DK.js'
      },
      {
        code: 'de',
        name: 'German',
        iso: 'de-DE',
        file: 'de-DE.js'
      },
      {
        code: 'el',
        name: 'Greek',
        iso: 'el-GR',
        file: 'el-GR.js'
      },
      {
        code: 'hu',
        name: 'Hungarian',
        iso: 'hu-HU',
        file: 'hu-HU.js'
      },
      {
        code: 'id',
        name: 'Indonesian',
        iso: 'id-ID',
        file: 'id-ID.js'
      },
      {
        code: 'it',
        name: 'Italian',
        iso: 'it-IT',
        file: 'it-IT.js'
      },
      {
        code: 'ka',
        name: 'Georgian',
        iso: 'ka-GE',
        file: 'ka-GE.js'
      },
      {
        code: 'ko',
        name: 'Korean',
        iso: 'ko-KR',
        file: 'ko-KR.js'
      },
      {
        code: 'nl',
        name: 'Dutch',
        iso: 'nl-NL',
        file: 'nl-NL.js'
      },
      {
        code: 'pl',
        name: 'Polish',
        iso: 'pl-PL',
        file: 'pl-PL.js'
      },
      {
        code: 'pt',
        name: 'Portuguese',
        iso: 'pt-PT',
        file: 'pt-PT.js'
      },
      {
        code: 'ro',
        name: 'Romanian',
        iso: 'ro-RO',
        file: 'ro-RO.js'
      },
      {
        code: 'ru',
        name: 'Russian',
        iso: 'ru-RU',
        file: 'ru-RU.js'
      },
      {
        code: 'sk',
        name: 'Slovak',
        iso: 'sk-SK',
        file: 'sk-SK.js'
      },
      {
        code: 'sr',
        name: 'Serbian (Cyrillic)',
        iso: 'sr-RS',
        file: 'sr-RS.js'
      },
      {
        code: 'sv',
        name: 'Swedish',
        iso: 'sv-SE',
        file: 'sv-SE.js'
      },
      {
        code: 'th',
        name: 'Thai',
        iso: 'th-TH',
        file: 'th-TH.js'
      },
      {
        code: 'tr',
        name: 'Turkish',
        iso: 'tr-TR',
        file: 'tr-TR.js'
      },
      {
        code: 'uk',
        name: 'Ukrainian',
        iso: 'uk-UA',
        file: 'uk-UA.js'
      },
      {
        code: 'uz',
        name: 'Uzbek (Cyrillic)',
        iso: 'uz-UZ',
        file: 'uz-UZ.js'
      },
      {
        code: 'vi',
        name: 'Vietnamese',
        iso: 'vi-VN',
        file: 'vi-VN.js'
      },
      {
        code: 'zh',
        name: 'Chinese (Simplified)',
        iso: 'zh-CN',
        file: 'zh-CN.js'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.js'
      },
      {
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es-ES.js'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr-FR.js'
      }
    ],
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    useCookie: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.themoviedb.org/3',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
  }
}
