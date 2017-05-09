import Vue from 'vue'
import Vuex from 'vuex'
import crumbs from './modules/crumbs'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: { crumbs },
  strict: debug
})
