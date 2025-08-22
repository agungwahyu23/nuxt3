export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    
    //TAMBAHKAN CODE INI UNTUK MENAMBAHKAN EKSTERNAL JAVASCRIPT
    script: [
      // { src: "/vendor/jquery/jquery.min.js" },
      // { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      // { src: "/vendor/jquery-easing/jquery.easing.min.js" },
      // { src: "/js/sb-admin-2.min.js" }
      { src: "/js/core/popper.min.js" },
      { src: "/js/core/bootstrap.min.js" },
      { src: "/js/plugins/perfect-scrollbar.min.js" },
      { src: "/js/plugins/smooth-scrollbar.min.js" },
      { src: "/js/plugins/chartjs.min.js" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  
  //DAN LOAD FILE CSS DI DALAM ATTRIBUTE INI
  css: [
    // '@/assets/vendor/fontawesome-free/css/all.min.css',
    // '@/assets/css/sb-admin-2.min.css'
    '@/assets/css/argon-dashboard.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/css/nucleo-icons.css',
    '@/assets/css/nucleo-svg.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend () {
    }
  }
}