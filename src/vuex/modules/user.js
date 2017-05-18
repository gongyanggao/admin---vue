import * as types from '../mutation-types'

// initial state
const state = {
	username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
}

// getters
const getters = {
  username: state => {
  	return state.username
  }
}

// actions
const actions = {
	set_user: ({ commit }, username) => {
        commit(types.SET_USER, username);
    },
}

// mutations
const mutations = {
  [types.SET_USER](state, username) {
    state.username = username
    localStorage.setItem('username', username)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}