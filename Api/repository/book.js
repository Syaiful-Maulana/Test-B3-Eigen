const { Book } = require('../models');
const getBook = async () => {
  const get = await Book.findAll();

  return get;
};

module.exports = {
  getBook,
};
