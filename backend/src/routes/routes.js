const express = require('express');
const OngController = require('../controllers/OngController');
const routes = express.Router();

routes.get('/ongs', OngController.index); //lista
routes.post("/ongs", OngController.create); //cria

module.exports = routes;
