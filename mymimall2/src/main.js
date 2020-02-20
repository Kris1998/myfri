import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

axios.defaults.baseURL = '/api';

Vue.use(Vueaxios,axios);
Vue.use(VueLazyload, {
  loading: '/images/loading-svg/loading-bubbles.svg'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
