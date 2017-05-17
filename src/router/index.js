import Vue from 'vue'
import Router from 'vue-router'

// UI Element Groups
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
    redirect: '/home',
    component: Home,
    children: [{
      path: 'home',
      name: '反诈',
      component: ContentWrap,
      redirect: '/home/overview',
      children: [{
        path: 'overview',
        name: '总体信息',
        component: OverView
      }, {
        path: 'overview/viewdetail/:id',
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