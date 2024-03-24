const express = require('express')

const loginRoute = express.Router()

const {loginApi} = require('../../controllers/adminPortalControllers/login.controller')

loginRoute.post('/login', loginApi)


module.exports = loginRoute