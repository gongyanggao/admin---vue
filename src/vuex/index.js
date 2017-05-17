import Vue from 'vue'
import Vuex from 'vuex'
import chartOption from './modules/chartOption'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: { chartOption },
  strict: debug
})
