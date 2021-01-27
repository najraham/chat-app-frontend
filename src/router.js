import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { 
        path: '/', redirect: '/login' 
    },
    {
        path: '/login', name: 'showLogin', component: require('./components/Login.vue').default
    },
    {
        path: '/register', name: 'showRegister', component: require('./components/Register.vue').default
    },
    {
        path: '/messages', name: 'showMessages', component: require('./components/Messages.vue').default
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router