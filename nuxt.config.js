import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Confido.',
    title: 'Make critical Tech or Product hires and scale your startup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: "We scale Tech for Good startups. If you need to make critical Tech or Product hires, build core teams or scale up squads, we're here for you." },

      { hid: 'og:title', property: 'og:title', content: 'Make critical Tech or Product hires and scale your startup | Confido.'},
      { hid: 'og:image', property: 'og:image', content: "/images/meta/home.png"},
      { hid: 'og:url', property: 'og:url', content: "https://confidotalent.com"},
      { hid: 'og:description', property: 'og:description', content: "We scale Tech for Good startups. If you need to make critical Tech or Product hires, build core teams or scale up squads, we're here for you."},

      { name: "twitter:site", content: "@confidotalent" },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Make critical Tech or Product hires and scale your startup | Confido.'},
      { hid: 'twitter:description', property: 'twitter:description', content: "We scale Tech for Good startups. If you need to make critical Tech or Product hires, build core teams or scale up squads, we're here for you."},
      { hid: 'twitter:url', property: 'twitter:url', content: "https://confidotalent.com"},
      { hid: 'twitter:image', property: 'twitter:image', content: "/images/meta/home.png"},
      { hid: 'twitter:label1', property: 'twitter:label1', content: 'Make critical Tech or Product hires and scale your startup | Confido.'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'canonical', rel: 'canonical', href: "https://confidotalent.com"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap',

    "@nuxtjs/axios",
    "@nuxtjs/apollo"
  ],

  // GTM
  gtm: {
    id: 'GTM-M5TFCP2'
  },

  // Sitemap
  sitemap: {
    hostname: 'https://confidotalent.com',
    gzip: true,
  },

  //apollo
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://graphql.cosmicjs.com/v2"
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true, // makes dev slow...! but needed to render custum styling
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#000151", 
          secondary: "#FF65BD", 
          accent: "#7B7DF6",
          success: "#3EC1B9"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(queries|node_modules)/
        })
      }
    }
  }
}
