const express = require('express')

const indexRouter = express.Router()

const pdfContentRouter = require('./pdfContentRouter')
const getLotteryResultsRouter = require('./getLotteryResultsRouter')

const addEditTodaysResultsRouter = require('./adminControllerRoutes/addEditTodaysResultRouter')

indexRouter.use('/', pdfContentRouter)
indexRouter.use('/', getLotteryResultsRouter)

indexRouter.use('/', addEditTodaysResultsRouter)


module.exports = indexRouter