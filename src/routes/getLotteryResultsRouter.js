

const express = require('express')



const getLotteryResultsRouter = express.Router()

const {fetchLotteryResultsApi, fetchSingleLotteryByIdApi} = require('../controllers/fetchLotteryResults.controller')



getLotteryResultsRouter.post('/getLotteryResults', fetchLotteryResultsApi)
getLotteryResultsRouter.post('/getLotteryResultsById', fetchSingleLotteryByIdApi)

module.exports = getLotteryResultsRouter
