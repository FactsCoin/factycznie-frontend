// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vue.http.options.credentials = true;

// Vue.http.options.xhr = {
//   withCredentials: true
// }
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
Vue.http.options.crossOrigin = true

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
// Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
