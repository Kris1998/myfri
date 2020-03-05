import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home'
import login from './pages/login'
import index from './pages/index'
import product from './pages/product'
import detail from './pages/detail'
import cart from './pages/cart'
import order from './pages/order'
import orderConfirm from './pages/orderConfirm'
import orderList from './pages/orderList'
import orderPay from './pages/orderPay'
import alipay from './pages/alipay'

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
        },
        {
            path: '/order',
            component: order,
            children: [
                {
                    path: 'confirm',
                    component: orderConfirm
                },
                {
                    path: 'list',
                    component: orderList
                },
                {
                    path: 'pay',
                    component: orderPay
                },
                {
                    path: 'alipay',
                    component: alipay
                }
            ]
        }
    ]
})
