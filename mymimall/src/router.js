import Vue from 'vue'
import Router from 'vue-router'
import app from './App'
import home from './components/home'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: app,
        children: [
            {
                path: '/home',
                component: home
            }
        ]
    }]
})