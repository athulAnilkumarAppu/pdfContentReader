const express = require('express')

const indexRouter = express.Router()

const pdfContentRouter = require('./pdfContentRouter')
const getLotteryResultsRouter = require('./getLotteryResultsRouter')

indexRouter.use('/', pdfContentRouter)
indexRouter.use('/', getLotteryResultsRouter)


module.exports = indexRouter