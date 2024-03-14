const express = require('express')



const pdfContentRouter = express.Router()

const {readPdfcontentApi} = require('../controllers/pdfReader.controller')



pdfContentRouter.post('/pdfReader', readPdfcontentApi)

module.exports = pdfContentRouter

