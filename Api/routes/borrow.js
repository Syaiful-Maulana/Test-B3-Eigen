const express = require('express');
const routes = express.Router();
const { addBorrow, returnBook } = require('../controller/borrowController');

routes.post('/', addBorrow);
routes.put('/:id', returnBook);

module.exports = routes;
