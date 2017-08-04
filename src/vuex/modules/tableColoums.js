import * as types from '../mutation-types'

// initial state
const state = {
	tableColoums: [],
	loading: false
}

// getters
const getters = {
  tableColoums: state => {
  	return JSON.parse(window.localStorage.getItem('tableColoums')) || []
  },
  loading: state => {
  	return state.loading
  },
}

// actions
const actions = {
	save_coloums: ({ commit }, arr) => {
    return new Promise((resolve, reject) => {
      commit(types.SAVE_COLOUMS, arr);
      commit(types.LOADING_CHANGE);
      resolve()
    });
  }
}

// mutations
const mutations = {
  [types.SAVE_COLOUMS](state, arr) {
      state.tableColoums = arr;
      window.localStorage.setItem('tableColoums', JSON.stringify(arr))
  },
  [types.LOADING_CHANGE](state) {
      state.loading = true;
        setTimeout(function() {
          state.loading = false;
          console.log(state.loading)
        }, 500)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}