import * as types from '../mutation-types'

// initial state
const state = {
	//头部当前背景色
    theme_class: localStorage.getItem('theme_class') || 'sidebar-mini skin-blue-light'
}

// getters
const getters = {
  
}

// actions
const actions = {
	set_theme: ({ commit }, theme_class) => {
        commit(types.SET_THEME, theme_class);
    }
}

// mutations
const mutations = {
  [types.SET_THEME](state, theme_class) {
        state.theme_class = theme_class.bg;
        localStorage.setItem('theme_class', theme_class.bg);
    }
}

export default {
  state,
  getters,
  mutations,
  actions
}