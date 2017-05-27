import * as types from '../mutation-types'

// initial state
const state = {
	//头部当前路由，匹配高亮所用
    headerCurRouter: '',

    //左侧当前路由，匹配高亮所用
    leftCurRouter: ''
}

// getters
const getters = {
  
}

// actions
const actions = {
	set_cur_route: ({ commit }, paths) => {
        commit(types.SET_CUR_ROUTE, paths);
    }
}

// mutations
const mutations = {
  [types.SET_CUR_ROUTE](state, paths) {
        // console.log(paths);
        state.headerCurRouter = paths.rootPath;
        state.leftCurRouter = paths.fullPath;
    }
}

export default {
  state,
  getters,
  mutations,
  actions
}