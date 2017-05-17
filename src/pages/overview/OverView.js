import CInfobox from '../../components/Infobox'
import CSmallbox from '../../components/Smallbox'
import CCarousel from '../../components/Carousel'
import CCollapse from '../../components/CollapsableBox'
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import 'echarts/map/js/world.js'
import IEcharts from 'vue-echarts-v3'
import { getCheatTable, getInfo, getSummary } from '../../service/index'
import { worldMap, chinaMap, pie} from '../../utils/chartOption.js'
export default {
	name: 'over-view',
	data() {
		return {
			breadcrumb: {
				arr: [{
					label: '后台管理系统',
					path: ''
				}],
				currentLabel: '总览页面'
			},
			infoLst: [],
			summary: [],
			isWorld: true,
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
			ec: null,
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
		china: () =>{
			let opt = chinaMap()
			opt.series[0].mapType = 'china'
			return opt
		},
		world: () =>{
			let opt = worldMap()
			opt.series[0].mapType = 'world'
			return opt
		},
		pie: () =>{
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
			if(arr && arr.length) {
				for(let i = 0; i < arr.length; i++){
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
		// this.ec = echarts.init(document.getElementById('map'))
		// this.ec.setOption(this.world)
	},
	methods: {
		onReady(instance) {
			
		},
		pieClick() {
			
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
			if (this.isWorld === true) {
				this.ec.setOption(this.world)
			} else {
				this.ec.setOption(this.china)
			}
		}
	},
	components: {
		CInfobox,
		CSmallbox,
		CCarousel,
		CCollapse,
		IEcharts
	}
}