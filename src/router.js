import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { 
        path: '/', redirect: '/login' 
    },
    {
        path: '/login', name: 'Login', component: require('./components/Login.vue').default
    },
    {
        path: '/register', name: 'Register', component: require('./components/Register.vue').default
    },
    {
        path: '/message', name: 'Message', component: require('./components/Message.vue').default
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router