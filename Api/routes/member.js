const express = require('express');
const routes = express.Router();
const { getMember, getMemberId } = require('../controller/memberController');

// welcome
routes.get('/', getMember);
routes.get('/:id', getMemberId);

module.exports = routes;
