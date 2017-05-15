import Vue from 'vue'
import Router from 'vue-router'

// UI Element Groups
import Home from '../pages/Home.vue'
import ContentWrap from '../pages/ContentWrap.vue'
import OverView from '../pages/overview'
import ViewDetail from '../pages/overview/ViewDetail.vue'
import TableList from '../pages/tablelist/TableList.vue'
import ListDetail from '../pages/tablelist/ListDetail.vue'

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
      name: '公共内容',
      component: ContentWrap,
      redirect: '/home/overview',
      children: [{
        path: 'overview',
        name: '反诈展示页',
        component: OverView
      }, {
        path: 'overview/viewdetail',
        name: '诈骗详情页',
        component: ViewDetail
      }, {
        path: 'tablelist',
        name: 'TableList',
        component: TableList
      }, {
        path: 'tablelist/listdetail',
        name: 'ListDetail',
        component: ListDetail
      }]
    }]
  }],
  linkActiveClass: 'active'
})