const db = require('../config/dev')
const mysql = require('mysql')
const conn = mysql.createConnection(db.dbinfo)
conn.connect()
let count
let select

const index_model = {
    select_index() {
        const sql = 'SELECT * FROM board ORDER BY LENGTH(subject), subject, LENGTH(content), content'
        conn.query(sql, (err, results) => {
            if(err) throw err
            select = results
        })
        return select
    },
    count_index() {
        const sql = 'SELECT COUNT(idx) AS count FROM board'
        conn.query(sql, (err, results) => {
            if(err) throw err
            count = results[0].count
        })
        return count
    },
    insert_index(req, res) {
        const sql = 'INSERT INTO board (subject, content) VALUES (?, ?)'
        conn.query(sql, [req.body.subject, req.body.content], (err, results) => {
            if(err) throw err
        })
        return true
    }
}

module.exports = index_model