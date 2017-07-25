// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Form from './Form.vue'
import Cadastros from './Cadastros.vue'

Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/form': {
    component: Form.vue
  },
  '/cadastros': {
    component: Cadastros.vue
  },
})
router.start(App, '#app')
new Vue({
  el: 'app',
  components: { App }
})

