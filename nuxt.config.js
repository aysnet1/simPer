module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'تونيزينا',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ' Virtual Lab tunisina for all and free '
      },
      {
        name: 'keywords',
        content: 'SimPsT, Simulator,تجارب الايقاظ العلمي ,سنة خامسة,سنة سادسة,التعليم في تونس,دروس الايقاظ العلمي سنة خامسة ,دروس الايقاظ العلمي سنة سادسة ,ابتدائية,سنة رابعة,الدرجة الثالثة,دروس,تمارين,التعليم الابتدائي,المدرسة التونسية,المخبر الافتراضي,محاكاة التجارب'
      },
      {
        name: "أيسر جبيلي و ماهر الأحمر",
        content: "أستاذ تعليم ابتدائي"
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/sim-large.ico'
      },

      {
        rel: "stylesheet",
        type: "text/css",
        href: 'https://fonts.googleapis.com/css?family=Amiri'
      },

    ],

    script: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
      }
    ]
  },
  css: [{
      src: 'seman/semantic.rtl.css'
    },

  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],
  i18n: {
      baseUrl: 'http://localhost:3000',
      seo: true,
      sync: false,
      strategy: 'prefix_except_default',
      detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
      locales: [
        {
          code: 'en',
          iso: 'en-AU',
          name: 'English'
        },
        {
          code: 'ar',
          iso: 'ar-AR',
          name: 'العربية'
        },
        {
          code: 'fr',
          iso: 'fr-BE',
          name: 'français'
        }
      ],
      defaultLocale: 'ar',
      vueI18n: {
        fallbackLocale: 'ar',
        messages: {
          ar: require('./lang/ar.json'),
          en: require('./lang/en.json'),
          fr: require('./lang/fr.json')
        },
      silentFallbackWarn: true,
        dateTimeFormats: {
          en: {
            long: { year: 'numeric', month: 'long', day: 'numeric' }
          },
          ar: {
            long: { year: 'numeric', month: 'long', day: 'numeric' }
          },
          fr: {
            long: { year: 'numeric', month: 'long', day: 'numeric' }
          }
        }
      }
    },
  axios: {
    // proxyHeaders: false
  },

  plugins: [{
    src: '~/plugins/vue-particles.js',
    ssr: false
  }],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070',
    height: '4px',
    rtl: true,
    duration: 10000
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extractCSS: true,
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
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
