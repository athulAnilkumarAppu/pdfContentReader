

const express = require('express')



const getLotteryResultsRouter = express.Router()

const {fetchLotteryResultsApi} = require('../controllers/fetchLotteryResults.controller')



getLotteryResultsRouter.post('/getLotteryResults', fetchLotteryResultsApi)

module.exports = getLotteryResultsRouter
