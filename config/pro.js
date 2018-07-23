const mysql = require('mysql')
const connection = mysql.createConnection({
	host : '',
	port : '',
	user : '',
	password : '',
	database : '',
	multipleStatements : true
})

connection.connect(err => {
	if(err) return
	return
})

module.exports = connection