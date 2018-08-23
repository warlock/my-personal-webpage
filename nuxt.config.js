module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Josep Subils - Full Stack Javascript Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'My name is Josep Subils. I am a fullstack professional developer and programmer in JavaScript. Here you can find my personal projects and documentation.' },
      { hid: 'language', name: 'language', content: 'en,ca,es,ru' },
      { hid: 'keywords', name: 'keywords', content: 'javascript,html,tutorial,professional,developer,software,mobile,github,debian,linux,java' },
      { hid: 'author', name: 'author', content: 'Josep Subils' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'cyan' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/es', '/ca', '/ru', '/en']
  }
}

