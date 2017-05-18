import Vue from 'vue'
import Router from 'vue-router'

// UI Element Groups
import Login from '../pages/login'
import Home from '../pages/Home.vue'
import ContentWrap from '../pages/ContentWrap.vue'
import OverView from '../pages/overview'
import ViewDetail from '../pages/viewdetail'
import ChartPage from '../pages/chartpage'

// forms
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: '登录',
    component: Login
  }, {
    path: '/home',
    name: '首页',
    redirect: '/home/content',
    component: Home,
    children: [{
      path: 'content',
      name: '反诈',
      component: ContentWrap,
      redirect: '/home/content/overview',
      children: [{
        path: 'overview',
        name: '总体信息',
        component: OverView
      }, {
        path: 'viewdetail/:id',
        name: '诈骗详情页',
        component: ViewDetail
      }, {
        path: 'chartpage',
        name: '图表展示',
        component: ChartPage
      }]
    }]
  }],
  linkActiveClass: 'active'
})