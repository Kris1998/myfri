import Router from 'vue-router'
import Vue from 'vue'
import home from './pages/home'
import item from './pages/item'
import score from './pages/score'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path:'/',
            component: home
        },
        {
            path:'/item',
            component: item
        },
        {
            path:'/score',
            component: score
        }
    ]
})