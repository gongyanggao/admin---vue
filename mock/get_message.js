const Mock = require('mockjs')
module.exports = {
	api: '/mock/ui/v1/getmessage/:ip',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|1-10': [{
					'messageType|+1': ['投诉', '求助'],
					'serviceType|+1': ['机房', '网站', 'IP地址', '审批', '备案'],
					'messageHeader': '@csentence()',
					'createdAt': '@date("yyyy-MM-dd")'
				}]
			})
		})
	}
}