var express = require('express');
var http = require('http');
var router = express.Router();

router.get('/', function(req, res, next){
    res.status(200).send('Hi from raspi server');
});

router.post('/Large', function(req, res) {
    http.get({
        port: 8080,
        hostname: '192.168.2.201',
        path: '/Large'
    }, function (res) {
        console.log('Large Coffee');
    });
    res.status(200).send('Large Coffee');
});
router.post('/Small', function(req, res) {
    http.get({
        port: 8080,
        hostname: '192.168.2.201',
        path: '/Small'
    }, function (res) {
        console.log('Small Coffee');
    });
    res.status(200).send('Small Coffee');
});

module.exports = router;