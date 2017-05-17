const CHECH_ROUTER = 'CHECH_ROUTER'

// initial state
const state = {
  //初始值
  map: {
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
    },
    series: [{
      name: '',
      type: 'map',
      mapType: 'world',
      selectedMode: 'multiple',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: []
    }]
  },
  pie: {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
      name: '诈骗事件统计',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [{
        value: 335,
        name: '电信诈骗'
      }, {
        value: 310,
        name: '金融诈骗'
      }, {
        value: 234,
        name: '色情诈骗'
      }, {
        value: 135,
        name: '微信朋友圈'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }
}

// getters
const getters = {
  map: state => state.map,
  pie: state => state.pie
}

/*// actions
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
}*/

export default {
  state,
  getters
}