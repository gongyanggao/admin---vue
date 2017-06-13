import IEcharts from 'vue-echarts-v3'
import Common from '../../../Common/'
import worldMap from 'echarts/map/json/world.json'
import chinaMap from 'echarts/map/json/china.json'
IEcharts.registerMap('world', worldMap)
IEcharts.registerMap('china', chinaMap)

import {
  worldOption,
  chinaOption,
  pie
} from '../../../../constant/'
import {
  getSiteAccess, getChartPie
} from '../../../../service/'
export default {
  name: 'industry-management',
  data() {
    return {
      tableData3: [{
        total: '142794',
        ips: '0',
        sites: '3949',
        compare: '=',
        idcs: '83',
        addr: '武汉市',
      }],
      dialogVisible: false,
      hubeiProv: [],
      hubeiLink: [],
      globalRank: [],
      pieData1: {},
      pieData2: {},
    }
  },
  computed: {
    china: () => {
      let opt = chinaOption()
      opt.series[0].mapType = 'china'
      return opt
    },
    world: () => {
      let opt = worldOption()
      opt.series[0].mapType = 'world'
      return opt
    }
  },
  created() {
    getSiteAccess(16).then((res) => {
      this.hubeiProv = res.data.data.array
    }).catch((err) => {
      console.log(err)
    })
    getSiteAccess(128).then((res) => {
      this.hubeiLink = res.data.data.array
    }).catch((err) => {
      console.log(err)
    })
    getSiteAccess(256).then((res) => {
      this.globalRank = res.data.data.array
    }).catch((err) => {
      console.log(err)
    })
    this.pieData1 = this.getPieData(1)
    this.pieData2 = this.getPieData(4)
  },
  methods: {
    getPieData(id) {
      let opt = pie()
      getChartPie(id).then((res) => {
          opt.series[0].data = res.data.data.array
      }).catch((err) => {
        console.log(err)
      })
      return opt
    },
    onReady(instance) {

    },
    pieClick() {

    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  components: {
    IEcharts
  }
}