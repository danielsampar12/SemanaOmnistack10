const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE
/*Tipos de parâmetros:
Query params: request.query(Filtros, ordenação, paginação ...) get*
Route params: request.params(Identificar um recurso na alteração, ou remoção) put ou delete*
Body: request.body (Dados para criação ou alteração de um registro) post ou put*
*/
routes.post('/devs', DevController.store);

module.exports = routes;
