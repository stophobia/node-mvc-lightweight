var mysql = require('mysql');
var db = require('./dev');
var connection = mysql.createConnection({
	host : db.dbinfo.host,
	port : db.dbinfo.port,
	user : db.dbinfo.user,
	password : db.dbinfo.password,
	database : db.dbinfo.database,
});

connection.connect(function(err){
	if(err){
		// console.error('Error connecting : '+err.stack);
		return;
	}
	// console.log('Connection established.');
	return;
});

module.exports = connection;