const { Router } = require('express')
const routes = Router();
const openBankingController = require('./controller/openBankingController');

routes.get('/get', openBankingController.show);
routes.get('/post', openBankingController.create);
routes.get('/put', openBankingController.path);


 module.exports = routes