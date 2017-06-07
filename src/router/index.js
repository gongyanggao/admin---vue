import Vue from 'vue'
import Router from 'vue-router'

// UI Element Groups
import routes from '../component/'
import example from './example'
import element from './element'
import industryManagement from './industryManagement'
import informationSecurity from './informationSecurity'
import systemManagement from './systemManagement'
import specialResource from './specialResource'

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
    }, {
      path: '*',
      component: routes.NotFound,
      hidden: true
      
    }]
    .concat(example)
    .concat(element)
    .concat(industryManagement)
    .concat(informationSecurity)
    .concat(systemManagement)
    .concat(specialResource),
  linkActiveClass: 'active'
})