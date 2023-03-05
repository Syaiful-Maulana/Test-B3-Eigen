const express = require('express');
const routes = express.Router();
const { getBook } = require('../controller/bookController');

// welcome
routes.get('/', getBook);

module.exports = routes;
