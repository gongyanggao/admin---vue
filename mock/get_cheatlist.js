const Mock = require('mockjs')
module.exports = {
	api: '/mock/ui/v1/getcheatlist',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|20-50': [{
					'type': '电信诈骗',
					'addr': '@url',
					'date': '@date("yyyy-MM-dd")'
				}]
			})
		})
	}
}