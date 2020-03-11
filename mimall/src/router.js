import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home'
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
                },
                {
                    path: '/product/:id',
                    component: () => import('./pages/product.vue'),
                    name: 'product'
                },
                {
                    path: '/detail/:id',
                    component: () => import('./pages/detail.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('./pages/login.vue'),
            name: 'login'
        },
        {
            path: '/cart',
            component: () => import('./pages/cart.vue'),
            name: 'cart'
        },
        {
            path: '/order',
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'confirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'list',
                    component: () => import('./pages/orderList.vue')
                },
                {
                    path: 'pay',
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    component: () => import('./pages/alipay.vue')
                }
            ]
        }
    ]
})
