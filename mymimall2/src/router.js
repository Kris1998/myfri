import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home'
import login from './pages/login'
import index from './pages/index'
import product from './pages/product'
import detail from './pages/detail'
import cart from './pages/cart'

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
                },
                {
                    path: '/product/:id',
                    component: product,
                    name: 'product'
                },
                {
                    path: '/detail/:id',
                    component: detail
                }
            ]
        },
        {
            path: '/login',
            component: login,
            name: 'login'
        },
        {
            path: '/cart',
            component: cart,
            name: 'cart'
        }
    ]
})
