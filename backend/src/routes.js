const express = require('express');
const CustomerController = require('./controllers/CustomerController');

const routes = express.Router();

routes.get('/register', CustomerController.index);
routes.post('/register', CustomerController.store);
routes.put('/register/:id', CustomerController.update);
routes.delete('/register/:id', CustomerController.delete);


module.exports = routes;