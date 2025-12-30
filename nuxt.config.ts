// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8000'
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'admin-lte/dist/css/adminlte.min.css',
  ],
  app: {
    head: {
      title: 'My App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Deskripsi aplikasi' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { src: '/js/jquery.min.js' },
        { src: '/js/bootstrap.bundle.min.js' },
        { src: '/js/adminlte.min.js' }
      ]
    }
  },
  modules: [
    '@nuxt/ui'
  ]
})
