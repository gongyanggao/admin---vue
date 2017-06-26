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
			roam: true,
			mapType: '',
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
			roam: true,
			mapType: '',
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

function valFomat(val) {
	// body...
	if (val < 10) {
		return val * 2000
	} else if (val < 100) {
		return 20000 + (val - 10) * 200
		return val * 100
	} else if (val < 1000) {
		return 40000 + (val - 100) * 20
	} else if (val < 10000) {
		return 60000 + (val - 1000) * 2
	} else if (val < 100000) {
		return 80000 + (val - 10000) / 5
	}
}

export function barOption() {
	return {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'item',
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
			type: 'value',
			splitNumber: '6',
			min: 0,
			max: 100000,
			axisLabel: {
				formatter(value, index) {
					
					if (index === 0) {
						return 0
					} else if (index === 1) {
						return 10
					} else if (index === 2) {
						return 100
					} else if (index === 3) {
						return 1000
					} else if (index === 4) {
						return 10000
					} else if (index === 5) {
						return 100000
					} else {
						return ''
					}
				}
			}
		}],
		series: [{
			type: 'bar',
			barWidth: '30%',
			data: [{
				value: valFomat(1200),
				tooltip: {
					formatter(param) {
						console.log(param)
						return 1200
					}
				}
			}, {
				value: valFomat(8),
				tooltip: {
					formatter(param) {
						return 8
					}
				}
			}, {
				value: valFomat(356),
				tooltip: {
					formatter(param) {
						return 356
					}
				}
			}, {
				value: valFomat(76666),
				tooltip: {
					formatter(param) {
						return 76666
					}
				}
			}, {
				value: valFomat(25647),
				tooltip: {
					formatter(param) {
						return 25647
					}
				}
			}, {
				value: valFomat(55),
				tooltip: {
					formatter(param) {
						return 55
					}
				}
			}, {
				value: valFomat(6375),
				tooltip: {
					formatter(param) {
						return 6375
					}
				}
			}]
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