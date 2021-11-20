import Vue from 'vue'
import Router from 'vue-router'
import Landing from './pages/Landing/Landing.vue'
import Menu from './pages/Menu/Menu.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        
    ]
})