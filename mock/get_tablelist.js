const Mock = require('mockjs')
module.exports = {
	api: '/mock/ui/v1/gettablelist/:id',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|1-10': [{
					'id': '@id',
					'name': '@name',
					'city': '@city',
					'createdAt': '@date("yyyy-MM-dd")',
					'tag|+1': ['家', '公司']
				}]
			})
		})
	}
}