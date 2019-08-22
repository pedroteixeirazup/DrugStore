const express = require('express');
const CustomerController = require('./controllers/CustomerController');
const ProjectController = require('./controllers/ProjectController');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.use(authMiddleware);

routes.get('/register', CustomerController.index);
routes.post('/register', CustomerController.store);
routes.put('/register/:id', CustomerController.update);
routes.delete('/register/:id', CustomerController.delete);
routes.post('/login', CustomerController.login);
routes.get('/projects', ProjectController.index);


module.exports = routes;