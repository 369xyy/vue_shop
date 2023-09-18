import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '../src/assets/global.css'

import axios from 'axios'
import './registerServiceWorker'
axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


