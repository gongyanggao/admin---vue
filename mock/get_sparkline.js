const Mock = require('mockjs')
const Random = Mock.Random
module.exports = {
	api: '/mock/ui/v1/getsparkline',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|2-4': [{
					'type|+1': ['bar', 'line', 'pie'],
					'class|+1': ['bg-red', 'bg-aqua', 'bg-green', 'bg-yellow'],
					'comments': '@cword(2)',
					'number': '@integer(1000,10000)',
					'description': '@csentence()',
					'data|3-10': ['@integer(1,20)']
				}]
			})
		})
	}
}