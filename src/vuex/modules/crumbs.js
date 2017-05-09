const CHECH_ROUTER = 'CHECH_ROUTER'

// initial state
const state = {
  //初始值
  crumbs: [{
    path: '',
    label: '后台管理系统'
  }, {
    path: 'overview',
    label: '总览页面'
  }]
}

// getters
const getters = {
  crumbs: state => state.crumbs
}

// actions
const actions = {

}

// mutations
const mutations = {
  [CHECH_ROUTER](state, path) {
    path = path.split('/').shift()
    let len = path.length, i = 0, obj = {}, arr = [];
    if (len) {
        for(i; i<len; i++) {
          obj.path = path[i]
          obj.label = switchToLabel(path[i])
          arr.push(obj)
        }
    }
    state.crumbs = arr
  }
}

const switchToLabel = (path) => {
  let label = ''
  switch (path) {
    case 'overview':
      label = '总览页面'
      break
    case 'viewdetail':
      label = '详情页面'
      break
    case 'tablelist':
      label = '列表数据'
      break
    case 'listdetail':
      label = '单条数据'
      break
    default:
      label = '总览页面'
      break
  }
  return label
}

export default {
  state,
  getters,
  mutations
}