const Mock = require('mockjs')

module.exports = {
	api: '/mock/ui/v1/getsummary',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array':
					[{'id': 'net', 'class': 'bg-aqua', 'tittle': '诈骗网站数', 'number|1-100': 100},
					{'id': 'user', 'class': 'bg-aqua', 'tittle': '受骗用户数', 'number|1-100': 100},
					{'id': 'port', 'class': 'bg-aqua', 'tittle': '管控诈骗网站数', 'number|1-100': 100},
					{'id': 'num', 'class': 'bg-aqua', 'tittle': '今日诈骗网站访问量', 'number|1-100': 100}]
			})
		})
	}
}

/*const faker = require('faker')
faker.locale = 'zh_CN'

module.exports = {
  api: '/mock/edu_rest/acquire_school_room/:id',
  response: function (req, res) {
    res.json({
      rlt: 'true',
      msg: 'ok',
      data: [
        { classroom_id: faker.random.uuid(), classroom_name: faker.random.words() },
        { classroom_id: faker.random.uuid(), classroom_name: faker.random.words() },
        { classroom_id: faker.random.uuid(), classroom_name: faker.random.words() }
      ]
    })
  }
}*/