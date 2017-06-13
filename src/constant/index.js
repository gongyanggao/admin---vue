/* 
 *echarts公共配置项
 */

export function worldOption() {
	return {
		tooltip: {
			trigger: 'item',
			formatter: '{b}'
		},
		series: [{
			name: '',
			type: 'map',
			mapType: '',
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
	}
};

export function chinaOption() {
	return {
		tooltip: {
			trigger: 'item',
			formatter: '{b}'
		},
		series: [{
			name: '',
			type: 'map',
			mapType: '',
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
	}
};

export function pie() {
	return {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	}
};

export function barOption() {
	return {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '直接访问',
			type: 'bar',
			barWidth: '60%',
			data: []
		}]
	}
};

/* 
 *工具栏配置
 */
export const tools =  {
	option: [{
		icon: 'fa fa-mail-reply',
		name: '返回',
		fun: 'back'
	}, {
		icon: 'fa fa-file-code-o',
		name: '版本信息',
		fun: 'editions'
	}, {
		icon: 'fa fa-envelope',
		name: '短信息',
		fun: 'envelope'
	}, {
		icon: 'fa fa-lock',
		name: '修改密码',
		fun: 'editions'
	}, {
		icon: 'fa fa-bar-chart',
		name: '数据统计',
		fun: 'editions'
	}, {
		icon: 'fa fa-ellipsis-v',
		name: 'IP和备案信息',
		fun: 'editions'
	}, {
		icon: 'fa fa-comments',
		name: '站内消息发送',
		fun: 'editions'
	}, {
		icon: 'fa fa-android',
		name: '手机APP下载',
		fun: 'editions'
	}, {
		icon: 'fa fa-tv',
		name: '值班大屏',
		fun: 'editions'
	}]
}