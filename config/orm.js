var connection = require('../config/connection.js');


var orm = {
	all: function(cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';'
		connection.query(queryString, function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},
	update: function(identify, devoured, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString)
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(burger, devoured, cb){
		var queryString = "INSERT INTO burgers ('burger_name', devoured) VALUES ('" + burger + "', " + devoured + ");";
		connection.query(queryString, function(err, result) {
			cb(result);
		})
	}
}

module.exports = orm;