import IEcharts from 'vue-echarts-v3'
import Common from '../../../Common/'
import {
	getSparkline,
	getChartLine
} from '../../../../service/'
import {
	barOption
} from '../../../../constant/'
export default {
	name: 'over-view',
	data() {
		return {
			id: 2,
			modalActive: false,
			collapse3: {
				class: 'box-success',
				tittle: '诈骗类型统计分析',
				expand: true
			},
			bar: {},
			sparkBoxes: []
		}
	},
	created() {
		getSparkline().then((res) => {
			this.sparkBoxes = res.data.data.array
		}).catch((err) => {
			console.log(err)
		})
		this.bar = this.getChartsData(this.id)
	},
	computed: {

	},
	methods: {
		openTheModal() {
			this.$refs.theModal.open();
		},
		refreshChart() {
			this.bar = this.getChartsData(3)
		},
		getChartsData(id) {
			let opt = barOption()
			// getChartLine(this.id).then((res) => {
			// 	opt.series[0].data = res.data.data.data
			// }).catch((err) => {
			// 	console.log(err)
			// })
			return opt
		}
	},
	components: {
		IEcharts,
		CCollapse: Common.CCollapse,
		SparkLine: Common.SparkLine,
		SparklineBox: Common.SparklineBox,
		BootstrapModal: Common.BootstrapModal,
		Forms: Common.Forms
	}
}