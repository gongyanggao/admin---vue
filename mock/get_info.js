const Mock = require('mockjs')

module.exports = {
	api: '/mock/ui/v1/getinfo',
	response: function(req, res) {
		res.json({
			rlt: 'true',
			data: Mock.mock({
				'array|1-10': [{
					'color': 'bg-green',
					'text': '@county',
					"number|1-100": 100
				}]
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