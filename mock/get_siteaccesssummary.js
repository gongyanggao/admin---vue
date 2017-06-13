const Mock = require('mockjs')
module.exports = {
	api: '/mock/ui/v1/getsiteaccess/:id',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|10': [{
					'domain': '@url',
					'website|+1': ['淘宝兄', '京东热', 'A站屌', '亡者毒', '知夫混'],
					"summary|1-100": 100,
					'trend|+1': ['=', '>', '<']
				}]
			})
		})
	}
}