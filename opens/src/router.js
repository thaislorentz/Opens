import Vue from 'vue'
import Router from 'vue-router'
import Landing from './pages/Landing/Landing.vue'
import Menu from './pages/Menu/Menu.vue'
import CheckoutName from './pages/Checkout/CheckoutName.vue'
import CheckoutContact from './pages/Checkout/CheckoutContact.vue'
import CheckoutAddress from './pages/Checkout/CheckoutAddress.vue'

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
        {
            path: '/checkout-1',
            name: 'checkoutName',
            component: CheckoutName
        },
        {
            path: '/checkout-2',
            name: 'checkoutContact',
            component: CheckoutContact
        },
        {
            path: '/checkout-3',
            name: 'checkoutAddress',
            component: CheckoutAddress
        },
        
    ]
})