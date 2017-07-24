// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Cadastros from './Cadastros.vue'

Vue.use(VueFire)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path: '/', redirect: '/app'},
  {path: '/app', component: App},
  {path: '/cadastros', component: Cadastros}
]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
