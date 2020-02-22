import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home'
import login from './pages/login'
import index from './pages/index'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    component: index,
                    name: 'index'
                }
            ]
        },
        {
            path: '/login',
            component: login,
            name: 'login'
        }
    ]
})
