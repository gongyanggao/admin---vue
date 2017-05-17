// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App'
import router from './router'
import store from './vuex'
import EventBus from './lib/eventBus.js'
import ElementUi from 'element-ui'
Vue.use(ElementUi);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  store
})
