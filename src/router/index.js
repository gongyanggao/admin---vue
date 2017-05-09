import Vue from 'vue'
import Router from 'vue-router'

// UI Element Groups
import OverView from '../pages/overview/OverView.vue'
import ViewDetail from '../pages/overview/ViewDetail.vue'
import TableList from '../pages/tablelist/TableList.vue'
import ListDetail from '../pages/tablelist/ListDetail.vue'

// forms
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/overview'
    },
    {
      path: '/overview',
      name: 'OverView',
      component: OverView
    },
    {
      path: '/overview/viewdetail',
      name: 'ViewDetail',
      component: ViewDetail
    },
    {
      path: '/tablelist',
      name: 'TableList',
      component: TableList
    },
    {
      path: '/tablelist/listdetail',
      name: 'ListDetail',
      component: ListDetail
    }],
  linkActiveClass: 'active'
})
