const express = require('express');
const mongoose = require('mongoose');
//MongoDB (Não relacional)
mongoose.connect('mongodb+srv://dgsampar:@Root@clustersemanaomnistack-pvlxj.mongodb.net/SemanaOmnistack10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(express.json());


//Métodos HTTP: GET, POST, PUT, DELETE
/*Tipos de parâmetros:
Query params: request.query(Filtros, ordenação, paginação ...) get*
Route params: request.params(Identificar um recurso na alteração, ou remoção) put ou delete*
Body: request.body (Dados para criação ou alteração de um registro) post ou put*
*/

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({message: 'Hello World'});
});

app.listen(3333);