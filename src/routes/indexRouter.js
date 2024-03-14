const express = require('express')

const indexRouter = express.Router()

const pdfContentRouter = require('./pdfContentRouter')

indexRouter.use('/', pdfContentRouter)


module.exports = indexRouter