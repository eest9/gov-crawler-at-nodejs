var express = require('express');
var router = express.Router();
const request = require('request');
const crawler = require('../modules/crawler');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/ministerrat', function (req, res) {


    request({
        uri: 'https://www.bka.gv.at/ministerratsprotokolle'
    }, function (err, response, body) {
        res.render('index', {data: crawler.council_of_ministers(err, response, body)})
    })
});
module.exports = router;
