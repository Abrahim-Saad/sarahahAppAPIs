const app = require('express').Router();
const tokenAuthenticator = require('../middleware/tokenAuthenticator')
const crudOperationsController = require('../controllers/crudOperationsController')


app.post('/sendMessage', tokenAuthenticator.crudOperations, crudOperationsController.sendMessage)

module.exports = app