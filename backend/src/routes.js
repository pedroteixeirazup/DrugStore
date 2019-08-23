const express = require('express');
const CustomerController = require('./app/controllers/CustomerController');
const ProjectController = require('./app/controllers/ProjectController');
const authMiddleware = require('./app/middlewares/auth');

const routes = express.Router();

routes.use(authMiddleware);

routes.get('/register', CustomerController.index);
routes.post('/register', CustomerController.store);
routes.put('/register/:id', CustomerController.update);
routes.delete('/register/:id', CustomerController.delete);
routes.post('/login', CustomerController.login);
routes.get('/projects', ProjectController.index);
routes.post('/forgot_password', CustomerController.forgot);
routes.post('/reset_password', CustomerController.reset_password);


module.exports = routes;