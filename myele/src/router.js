import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import mainpage from './pages/mainpage'
import my from './pages/my'
import order from './pages/order'
import login from './pages/login'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '',
                    redirect: '/mainpage'
                },
                {
                    path: '/mainpage',
                    name: 'mainpage',
                    component: mainpage
                },
                {
                    path: '/order',
                    name: 'order',
                    component: order
                },
                {
                    path: '/my',
                    name: 'my',
                    component: my
                },
                {
                    path: '/login',
                    name: 'login',
                    component: login
                }
            ]
        }
    ]
})