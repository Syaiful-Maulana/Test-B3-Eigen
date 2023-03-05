const bookRepository = require('../repository/book');

const getBook = async (req, res) => {
  try {
    const get = await bookRepository.getBook();

    return res.respondGet(get);
  } catch (err) {
    return res.respondServerError(err.message);
  }
};

module.exports = {
  getBook,
};
