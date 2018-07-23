const express = require('express')
const uaCompatible = require('ua-compatible')
const bodyParser = require('body-parser')
const controller = require('./controller/list')

const app = express()
const http = require('http')
app.use(uaCompatible)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use("/static", express.static(`${__dirname}/static`))

app.locals.pretty = true
app.set('port', '3002')
app.set('ip', 'localhost')
app.set('views', './views')
app.set('view engine', 'pug')

const index_controller = require('./controller/list.js')
app.get('/', index_controller.index)
app.post('/', index_controller.insert)

app.get('*', (req, res) => {
    res.render('error')
})

http.createServer(app).listen(app.get('port'), app.get('ip'), () => {
    console.log("Server Listening..")
})