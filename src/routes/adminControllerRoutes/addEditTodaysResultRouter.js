const express = require('express')

const addEditTodaysResultsRouter = express.Router()


const {addTodaysResultsApi, getAllResultsAdminPortalApi, updateResultsAdminPortalApi, deleteResultsAdminPortalApi} = require('../../controllers/adminPortalControllers/addEditResults.controller')


addEditTodaysResultsRouter.post('/addTodaysResult', addTodaysResultsApi)
addEditTodaysResultsRouter.post('/getAllAdminResults', getAllResultsAdminPortalApi)
addEditTodaysResultsRouter.post('/updateResultById', updateResultsAdminPortalApi)
addEditTodaysResultsRouter.post('/deleteResultById', deleteResultsAdminPortalApi)


module.exports = addEditTodaysResultsRouter