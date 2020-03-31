const express = require('express');
const routes = require('./routes/routes');
const app = express();


app.use(express.json()); //informa que as requisicoes do body serao passadas no formato json
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Servidor iniciou na porta ${PORT}`));

/*
Rotas/recursos

Metodos HTTP
GET: buscar/listar informacao do backend
POST: criar innformacao no backend
PUT: alterar informacao no backend
DELETE: apagr informacao do backend

Tipos de Parametros
query params: tipos de parametros enviados na rota apos o "?" (fltros, paginaacao)
routes params: parametros usados para identificar recursos
body params: corpo da requisicao: parametros sados para criar ou alterar recursos

tipos de BD
SQL: MYSQL, SQL LITE, MS SQL SERVER, PSTGRESQL, ETC
NOSQL: MongoDB, couchDb, etc

depedencias/ comnados essenciais
/git flow init
npm init 
npm install create-react-app 
npx  create-react-app frontend
npm i nodemon -D   
npm i knex
npm i sqlite3
npx knex init
npx knex migrate:make create_ong  
npx knex migrate:latest
*/