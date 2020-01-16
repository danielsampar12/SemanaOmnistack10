const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE
/*Tipos de parâmetros:
Query params: request.query(Filtros, ordenação, paginação ...) get*
Route params: request.params(Identificar um recurso na alteração, ou remoção) put ou delete*
Body: request.body (Dados para criação ou alteração de um registro) post ou put*
*/
routes.get('/devs', DevController.index); //listar todos os devs
routes.post('/devs', DevController.store); //cadastrar devs

routes.get('/search', SearchController.index); //listar devs perto e por techs
routes.put('/devs', DevController.update);// atualizar perfil

//routes.delete('/delete', DevController.destroy);//deletar perfil

module.exports = routes;
