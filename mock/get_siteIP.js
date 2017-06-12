const Mock = require('mockjs')
module.exports = {
	api: '/mock/ui/v1/getsiteip/:domain',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|1-10': [{
					'domain': '@domain',
					'status|+1': ['未备案', '已备案'],
					'siteName|+1': ['淘宝兄', '京东热', 'A站屌', '亡者毒', '知夫混'],
					'siteRecord': '@id',
					'ip': '@ip',
					'company|+1': ['中国一动', '中国连通', '中国典型'],
					'domainCompany|+1':['.GDN', '.EU', '.BIZ', '.CO', '.IN'],
					'isOpennable|1': true 
				}]
			})
		})
	}
}