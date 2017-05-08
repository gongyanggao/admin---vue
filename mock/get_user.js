const Mock = require('mockjs')

module.exports = {
	api: '/mock/ui/v1/getuser',
	response: function(req, res) {
		res.json({
			data: Mock.mock({
				'name': '@name',
				'position': 'wuhan',
				'state': {
					'color': '@color',
					'name': 'online'
				},
				'createdAt': '@date("yyyy-MM-dd")'
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