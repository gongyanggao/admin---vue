import * as types from '../mutation-types'

// initial state
const state = {
	dialogIndex: -1
}

// getters
const getters = {
  dialogIndex: state => {
  	return state.dialogIndex
  }
}

// actions
const actions = {
	open_dialog: ({ commit }, index) => {
        commit(types.OPEN_DIALOG, index);
    }
}

// mutations
const mutations = {
  [types.OPEN_DIALOG](state, index) {
        state.dialogIndex = index.index;
    }
}

export default {
  state,
  getters,
  mutations,
  actions
}