var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '',
	port : '',
	user : '',
	password : '',
	database : '',
	multipleStatements : true
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