const express = require('express')
let mongoose = require('mongoose')
const cors = require('cors')

const indexRouter = require('./src/routes/indexRouter')

const port = 3000

const app = express()

app.use(cors())

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: false, parameterLimit: '50000'}))

// mongoose.connect('mongodb://127.0.0.1:27017/')

// const db = mongoose.connection
// db.on('error', console.log('connection error'))
// db.once('open', console.log('db connected'))




app.use('/', indexRouter)

app.listen(port, ()=> {
    console.log('listening to port' + port)
})

module.exports = app