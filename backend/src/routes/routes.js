const express = require('express');

const { incidentsCreateValidator, incidentsDeleteValidator } = require('../validators/IncidentsValidator');
const { profileValidator } = require('../validators/ProfileValidator');


const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const ProfileController = require('../controllers/ProfileController');
const SessionController = require('../controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index); //lista
routes.post("/ongs", OngController.create); //cria

routes.get("/profile", profileValidator,ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post("/incidents", incidentsCreateValidator, IncidentController.create);
routes.delete("/incidents/:id", incidentsDeleteValidator, IncidentController.delete);

module.exports = routes;
