import CInfobox from '../../components/Infobox'
import CSmallbox from '../../components/Smallbox'
import CCarousel from '../../components/Carousel'
import CCollapse from '../../components/CollapsableBox'
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import 'echarts/map/js/world.js'
import IEcharts from 'vue-echarts-v3'
export default {
  name: 'over-view',
  data () {
    return {
      breadcrumb: {
        arr: [{
          label: '后台管理系统',
          path: ''
        }],
        currentLabel: '总览页面'
      },
      infoLst: [{
        color: 'bg-green',
        text: '美国',
        number: '666'
      }, {
        color: 'bg-green',
        text: '英国',
        number: '2333'
      }, {
        color: 'bg-green',
        text: '法国',
        number: '111'
      }, {
        color: 'bg-green',
        text: '日本',
        number: '10086'
      }, {
        color: 'bg-green',
        text: '韩国',
        number: '10010'
      }, {
        color: 'bg-green',
        text: '朝鲜',
        number: '10000'
      }, {
        color: 'bg-green',
        text: '中国',
        number: '12306'
      }],
      summary: [{
        class: 'bg-aqua',
        summary: 30,
        tittle: '诈骗网站数',
        icon: 'ion ion-stats-bars'
      }, {
        class: 'bg-aqua',
        summary: 20,
        tittle: '受骗用户数',
        icon: 'ion ion-stats-bars'
      }, {
        class: 'bg-aqua',
        summary: 10,
        tittle: '管控诈骗网站数',
        icon: 'ion ion-stats-bars'
      }, {
        class: 'bg-aqua',
        summary: 5,
        tittle: '今日诈骗网站访问量',
        icon: 'ion ion-stats-bars'
      }],
      isWorld: true,
      carousel: {
        arrHead: [{tittle:'诈骗类型', class: 'col-md-3'}, {tittle:'网站地址', class: 'col-md-5'}, {tittle:'日期', class: 'col-md-4'}],
        arrData: [{
                  type: '电信诈骗1',
                  addr: 'http://placehold.it/900x500/3c8dbc/',
                  date: '2015-02-06'
            }, {
              type: '电信诈骗2',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗3',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗4',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗5',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗6',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗7',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗8',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗9',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗10',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗11',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }, {
              type: '电信诈骗12',
              addr: 'http://placehold.it/900x500/3c8dbc/',
              date: '2015-02-06'
            }]},
      ec: null,
      china: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        series: [{
          name: '',
          type: 'map',
          mapType: 'china',
          selectedMode : 'multiple',
          label: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: true
              }
          },
          data:[]
        }]
      },
      world: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        series: [{
          name: '',
          type: 'map',
          mapType: 'world',
          selectedMode : 'multiple',
          label: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: true
              }
          },
          data:[]
        }]
      },
      collapse2: {
        class: 'box-info',
        tittle: '诈骗事件统计',
        expand: false
      },
      collapse3: {
        class: 'box-success',
        tittle: '诈骗类型统计分析',
        expand: true
      },
      pie: {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
              name: '诈骗事件统计',
              type: 'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                  {value:335, name:'电信诈骗'},
                  {value:310, name:'金融诈骗'},
                  {value:234, name:'色情诈骗'},
                  {value:135, name:'微信朋友圈'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
            }
        ]
      }
    }
  },
  mounted () {
  	console.log('remounted')
    this.ec = echarts.init(document.getElementById('map'))
    this.ec.setOption(this.world)
  },
  methods: {
    onReady(instance) {
        console.log(instance);
    },
    pieClick() {
      console.log(this);
    },
    changeToChina() {
      this.isWorld = false;
    },
    changeToWorld() {
      this.isWorld = true;
    }
  },
  watch: {
    isWorld(curVal, oldVal) {
      if(this.isWorld === true) {
        this.ec.setOption(this.world)
      } else {
        this.ec.setOption(this.china)
      }
    }
  },
  components: {
    CInfobox, CSmallbox, CCarousel, CCollapse, IEcharts
  }
}