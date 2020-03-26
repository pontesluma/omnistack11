const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

// login

routes.post('/sessions', SessionController.create);



// Create ONG
routes.post('/ongs', OngController.create);


// List ONGs
routes.get('/ongs', OngController.index);

// Create caso
routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;
