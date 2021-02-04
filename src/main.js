import Vue from 'vue'
import App from './App.vue'

// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

// socket io
// import io from 'socket.io-client'
// Vue.prototype.$socket = io('localhost:5000')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
