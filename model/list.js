var db = require('../config/dev');
var mysql = require('mysql');
var conn = mysql.createConnection(db.dbinfo);
conn.connect();
var count;
var select;

var index_model = {
    select_index : function() {
        var sql = 'SELECT * FROM board ORDER BY LENGTH(subject), subject, LENGTH(content), content';
        conn.query(sql, function(err, results){
            if(err) throw err;
            select = results;
        });
        return select;
    },
    count_index : function() {
        var sql = 'SELECT COUNT(idx) AS count FROM board';
        conn.query(sql, function(err, results){
            if(err) throw err;
            count = results[0].count;
        });
        return count;
    },
    insert_index: function(req, res) {
        var sql = 'INSERT INTO board (subject, content) VALUES (?, ?)';
        conn.query(sql, [req.body.subject, req.body.content], function(err,results){
            if(err) throw err;
        });
        return true;
    }
};

module.exports = index_model;