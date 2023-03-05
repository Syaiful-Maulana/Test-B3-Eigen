const express = require('express');
const routes = express.Router();
const member = require('./member');
const book = require('./book');
const borrow = require('./borrow');

// welcome
routes.get('/', (req, res) => {
  res.respondGet(null, 'welcome to new app!');
});

routes.use('/member', member);
routes.use('/book', book);
routes.use('/borrow', borrow);

module.exports = routes;
