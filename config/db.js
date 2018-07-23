const mysql = require('mysql')
const db = require('./dev')
const connection = mysql.createConnection({
	host : db.dbinfo.host,
	port : db.dbinfo.port,
	user : db.dbinfo.user,
	password : db.dbinfo.password,
	database : db.dbinfo.database
})

connection.connect(err => {
	if(err) return
	return
})

module.exports = connection