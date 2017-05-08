import Vue from 'vue'
import Router from 'vue-router'
import DashboardV1 from '../examples/Dashboard.v1.vue'
import DashboardV2 from '../examples/Dashboard.v2.vue'
import InfoBoxExample from '../examples/InfoBoxExample'
import ChartExample from '../examples/ChartExample'
import ChartExample1 from '../examples/ChartExample1'
import AlertExample from '../examples/AlertExample'
import ModalExample from '../examples/ModalExample'
import WidgetsExample from '../examples/WidgetsExample'
import APIExample from '../examples/APIExample'

// UI Element Groups
import General from '../pages/ui-elements/General.vue'
import Icons from '../pages/ui-elements/Icons.vue'
import Buttons from '../pages/ui-elements/Buttons.vue'
import Sliders from '../pages/ui-elements/Sliders.vue'
import Timeline from '../pages/ui-elements/Timeline.vue'
import Modals from '../pages/ui-elements/Modals.vue'

// forms
import GeneralElements from '../pages/forms/GeneralElements.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard/v1'
    },
    {
      path: '/dashboard/v1',
      name: 'DashboardV1',
      component: DashboardV1
    },
    {
      path: '/dashboard/v2',
      name: 'DashboardV2',
      component: DashboardV2
    },
    {
      path: '/infobox',
      name: 'InfoBoxExample',
      component: InfoBoxExample
    },
    {
      path: '/chart',
      name: 'ChartExample',
      component: ChartExample
    },
    {
      path: '/chart1',
      name: 'ChartExample1',
      component: ChartExample1
    },
    {
      path: '/alert',
      name: 'AlertExample',
      component: AlertExample
    },
    {
      path: '/modal',
      name: 'ModalExample',
      component: ModalExample
    },
    {
      path: '/widgets',
      name: 'WidgetsExample',
      component: WidgetsExample
    },
    {
      path: '/api-example',
      name: 'APIExample',
      component: APIExample
    },
    {
      path: '/general',
      name: 'General',
      component: General
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/sliders',
      name: 'Sliders',
      component: Sliders
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/general-elements',
      name: 'GeneralElements',
      component: GeneralElements
    }
  ],
  linkActiveClass: 'active'
})
