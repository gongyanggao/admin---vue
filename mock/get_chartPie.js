const Mock = require('mockjs')
module.exports = {
	api: '/mock/ui/v1/getchartpie',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|3-8': [{
					'name|+1': ['医疗保健', '电子公告服务', '文化', '药品和医疗器械',
					'广播电影电视节目', '出版', '新闻', '教育'],
					"value|1-100": 100
				}]
			})
		})
	}
}