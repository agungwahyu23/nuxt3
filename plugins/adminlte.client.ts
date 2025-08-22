// plugins/adminlte.client.ts
import jQuery from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.min.js'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      $: jQuery
    }
  }
})