const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota(caminho com o recurso que quero buscar) != Recurso(oq é requisitado para o back-end)
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/Listar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/** 
 * Tipos de Parâmetros
 * 
 * Query: Parâmetros nomeados enviados na rota após o "?" (Usado em: Filtros, paginação)
 * - rquest.query
 * Route: Parâmetros utilizados para identificar recursos (Não posso enviar mais parâmetros do que o esperado)
 * - request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Bancos de Dados:
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Comunicação com o BD
   * 
   * Driver: (Script comum) SELECT * FROM users
   * Query Builder: (SQL no formato de JavaScript) table(users).select(*).where()
   */
  
routes.post('/sessions', SessionController.create)

routes.get('/ongs',  OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index)

module.exports = routes;