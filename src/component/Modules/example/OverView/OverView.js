import IEcharts from 'vue-echarts-v3'
import Common from '../../../Common/'
import worldMap from 'echarts/map/json/world.json'
import chinaMap from 'echarts/map/json/china.json'
IEcharts.registerMap('world', worldMap)
IEcharts.registerMap('china', chinaMap)

import {
	getCheatTable,
	getInfo,
	getSummary
} from '../../../../service/'
import {
	worldOption,
	chinaOption,
	pie
} from '../../../../constant/'

export default {
	name: 'over-view',
	data() {
		return {
			infoLst: [],
			summary: [],
			carousel: {
				arrHead: [{
					tittle: '诈骗类型',
					class: 'col-md-3'
				}, {
					tittle: '网站地址',
					class: 'col-md-5'
				}, {
					tittle: '日期',
					class: 'col-md-4'
				}],
				arrData: []
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
			}
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
		},
		pie: () => {
			let opt = pie()
			opt.series[0].name = '诈骗事件统计'
			return opt
		}
	},
	created() {
		getInfo().then((res) => {
			this.infoLst = res.data.data.array
		}).catch((err) => {
			console.log(err)
		})

		getCheatTable().then((res) => {
			this.carousel.arrData = res.data.data.array
		}).catch((err) => {
			console.log(err)
		})

		getSummary().then((res) => {
			let arr = res.data.data.array,
				obj, lst = []
			if (arr && arr.length) {
				for (let i = 0; i < arr.length; i++) {
					obj = {}
					obj.id = arr[i].id
					obj.number = arr[i].number
					obj.tittle = arr[i].tittle
					obj.class = arr[i].class
					lst.push(obj)
				}
			}
			this.summary = lst
		}).catch((err) => {
			console.log(err)
		})
	},
	mounted() {

	},
	methods: {
		onReady(instance) {

		},
		pieClick() {

		}
	},
	watch: {

	},
	components: {
		CInfobox: Common.CInfobox,
		CSmallbox: Common.CSmallbox,
		CCarousel: Common.CCarousel,
		CCollapse: Common.CCollapse,
		IEcharts
	}
}