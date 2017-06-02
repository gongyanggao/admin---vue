import Vue from 'vue'
import Router from 'vue-router'

// UI Element Groups
import routes from '../component/'
import example from './example'
import element from './element'

// forms
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    hidden: true,
    redirect: '/login'
  }, {
    path: '/login',
    name: '登录',
    hidden: true,
    component: routes.Login
  }]
  .concat(example)
  .concat(element)
  ,
  linkActiveClass: 'active'
})