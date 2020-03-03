import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

axios.defaults.baseURL = '/api';
axios.interceptors.response.use(function(response){
  let res = response.data;
  // let path = location.hash;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) {
    //未登录后台接口返回状态码10
    // if(path != '#/index')
    // {
    //   window.location.href = '/#/login';
    // }
    //把这一部分内容放进catch
    return Promise.reject(res);
  } else {
    //真正的错误
    Message.warning(res.msg);
    return Promise.reject(res);
  }
})

Vue.use(Vueaxios,axios);
Vue.use(VueLazyload, {
  loading: '/images/loading-svg/loading-bubbles.svg'
});
Vue.use(VueCookie);
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
