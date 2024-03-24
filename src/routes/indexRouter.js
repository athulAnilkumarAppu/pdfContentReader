const express = require('express')

const indexRouter = express.Router()

const pdfContentRouter = require('./pdfContentRouter')
const getLotteryResultsRouter = require('./getLotteryResultsRouter')

const addEditTodaysResultsRouter = require('./adminControllerRoutes/addEditTodaysResultRouter')
const loginRoute = require('./adminControllerRoutes/loginRoute')

indexRouter.use('/', pdfContentRouter)
indexRouter.use('/', getLotteryResultsRouter)

indexRouter.use('/', addEditTodaysResultsRouter)
indexRouter.use('/', loginRoute)


module.exports = indexRouter