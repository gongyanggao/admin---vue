import * as types from '../mutation-types'

function set(key, value, fn){
  try {
      value = JSON.stringify(value);
  } catch (e) {
      value = value;
  }

  localStorage.setItem(key, value);

  fn && fn();
}

function get(key, fn){
  if (!key) {
      throw new Error('没有找到key。');
      return;
  }
  if (typeof key === 'object') {
      throw new Error('key不能是一个对象。');
      return;
  }
  var value = localStorage.getItem(key);
  if (value !== null) {
      try {
          value = JSON.parse(value);
      } catch (e) {
          value = value;
      }
  }

  return value;
}

// initial state
const state = {
  userinfo: get('userinfo') ? get('userinfo').userinfo : {},
  remumber_flag: get('remumber_flag') ? true : false
}

// getters
const getters = {
  username: state => {
  	return get('userinfo').userinfo.username
  }
}

// actions
const actions = {
	update_userinfo: ({ commit }, {userinfo}) => {
      commit(types.UPDATE_USERINFO, {userinfo});
  },
  update_remumber: ({ commit }, {remumber_flag}) => {
      commit(types.UPDATE_REMUMBER, {remumber_flag});
  },
  remove_remumber: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(types.REMOVE_REMUMBER);
      resolve()
    });
  },
}

// mutations
const mutations = {
  [types.UPDATE_USERINFO](state, userinfo) {
    state.userinfo = userinfo.userinfo;
    set('userinfo', userinfo);
  },
  [types.UPDATE_REMUMBER](state, remumber_flag) {
    state.remumber_flag = remumber_flag.remumber_flag;
    set('remumber_flag', remumber_flag.remumber_flag);
  },
  [types.REMOVE_REMUMBER](state) {
    localStorage.removeItem('remumber_flag');
    state.remumber_flag = false;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}