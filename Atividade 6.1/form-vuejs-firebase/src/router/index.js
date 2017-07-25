import Vue from 'vue'
import Router from 'vue-router'
import App from './Form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: './src/Form.vue',
      name: 'Form',
      component: App.vue
    }
  ]
})
