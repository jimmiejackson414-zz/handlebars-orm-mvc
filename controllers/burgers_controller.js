var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var bodyParser = require('body-parser');
var method = require('method-override');

router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burger : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function(req,res) {
	cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	cat.update({'sleepy' : req.body.sleepy}, condition, function(data){
		res.redirect('/burger');
	});
});

router.delete('/burger/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	cat.delete(condition, function(data){
		res.redirect('/burger');
	});
});

module.exports = router;