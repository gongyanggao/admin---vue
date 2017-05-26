const Mock = require('mockjs')
const Random = Mock.Random
module.exports = {
	api: '/mock/ui/v1/getchartline',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'data|7': ['@integer(1,500)']
			})
		})
	}
}