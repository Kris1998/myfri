import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'

axios.defaults.baseURL = '/api';
axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) {
    //未登录后台接口返回状态码10
    window.location.href = '/#/login';
  } else {
    //真正的错误
    alert(res.msg);
    return Promise.reject(res);
  }
})

Vue.use(Vueaxios,axios);
Vue.use(VueLazyload, {
  loading: '/images/loading-svg/loading-bubbles.svg'
});
Vue.use(VueCookie);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
