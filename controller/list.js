const model = require('../model/list.js')

const index_controller = {
    index(req, res) {
        _subject = model.select_index()
        _count = model.count_index()
        if(_subject && _count) {
            res.render('index', {
                subject: _subject,
                count: _count
            })
        }else{
            res.redirect('/')
        }
    },
    insert(req, res) {
        _insert = model.insert_index(req, res)
        _subject = model.select_index()
        _count = model.count_index()
        if(_subject && _count && _insert=='true') {
            res.render('index', {
                subject: _subject,
                count: _count
            })
        }else{
            res.redirect('/')
        }
    }
}

module.exports = index_controller