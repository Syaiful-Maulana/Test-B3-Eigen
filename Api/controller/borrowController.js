const borrowRepository = require('../repository/borrow');

const addBorrow = async (req, res) => {
  try {
    const { member_id, book_id } = req.body;

    //set date
    const dateNow = new Date();
    const date7DaysAgo = new Date(dateNow);
    date7DaysAgo.setUTCDate(dateNow.getUTCDate() + 7);

    const response = await borrowRepository.addBorrow({
      date_borrow: dateNow,
      date_return: date7DaysAgo,
      member_id: member_id,
      book_id: book_id,
      status: 'Sedang Di Pinjam',
    });
    return res.respondCreated(response, 'successfully');
  } catch (err) {
    return res.respond(null, err.message, err.code);
  }
};

const returnBook = async (req, res) => {
  try {
    const id = req.params.id;

    // const { book_id } = req.body;
    // update stock book
    // const updatedStock = await borrowRepository.stockBook(book_id);

    // update status
    const updateStatus = await borrowRepository.returnBook(id);

    return res.respondUpdated(updateStatus, 'successfully');
  } catch (err) {
    return res.respond(null, err.message, err.code);
  }
};

module.exports = {
  addBorrow,
  returnBook,
};
