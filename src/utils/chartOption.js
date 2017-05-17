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
};