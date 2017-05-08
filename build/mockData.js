var express = require('express'),
    app     = express(),
    Mock    = require('mockjs');

/* userinfo */
app.post('/mock/ui/v1/getuser&sid=:sid', function (req, res) {
    var Random = Mock.Random,
    data = Mock.mock({
            'name': '@name',
            'position': 'wuhan',
            'state': {
                'color': '@color',
                'name': 'online'
            },
            'createdAt': '@date("yyyy-MM-dd")'
        });

    res.send( JSON.stringify(data, null, 4) );
});

/* getall */
app.post('/dashboard/v1/message', function (req, res) {
    var Random = Mock.Random,
    data = Mock.mock({
            'list|1-10': [{'id|+1': 1 , 'name': '@name'}]
        });

    res.send( JSON.stringify(data, null, 4) );
});


module.exports = app;