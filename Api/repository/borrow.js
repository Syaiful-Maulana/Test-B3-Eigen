const { Borrow, Book, Penalized } = require('../models');
const error = new Error();

const addBorrow = async (input) => {
  error.code = 400;

  // cek member
  const count = await Borrow.count({
    where: { member_id: input.member_id },
  });
  const status = await Borrow.count({
    where: { member_id: input.member_id, status: 'Selesai' },
  });
  var total = count - status;

  if (total >= 2) {
    error.message = 'members have borrowed more than 2 books';
    error.code = 404;
    throw error;
  }

  //cari buku
  const books = await Book.findOne({ where: { id: input.book_id } });
  var stockBooks = books.stock - 1;

  if (books.stock == 0) {
    error.message = 'book has been borrowed';
    error.code = 404;
    throw error;
  }
  const getBorrow = await Borrow.findAll({
    where: { member_id: input.member_id },
  });
  // cek dihukum / tidak
  const penalized = await Penalized.findOne({ where: { user_id: input.member_id } });
  if (!penalized) {
    getBorrow.forEach(async (element) => {
      if (element.status != 'Selesai') {
      } else {
      }
    });
    // simpan pinjam buku
    const created = await Borrow.create(input);

    if (created) {
      await Book.update(
        {
          stock: stockBooks,
        },
        { where: { id: input.book_id } }
      );
      return input;
    } else {
      error.message = 'book has been borrowed';
      throw error;
    }
  } else {
    error.message = 'members are being punished';
    throw error;
  }
};

const returnBook = async (id) => {
  const borrow = await Borrow.findOne({
    where: { id: id },
  });
  //set date
  const dateNow = new Date();

  if (borrow.date_return >= dateNow) {
    await Penalized.create({
      user_id: borrow.member_id,
      status: 'Di Hukum',
    });
  }

  if (borrow.status != 'Selesai') {
    if (!borrow) {
      error.message = 'book not found';
      error.code = 404;
      throw error;
    }

    // update stock
    const updated = await Borrow.update(
      {
        status: 'Selesai',
        book_id: null,
        returned: dateNow,
      },
      { where: { id: id } }
    );

    // update books
    const getBook = await Book.findOne({ where: { id: borrow.book_id } });
    var stockBooks = getBook.stock + 1;
    await Book.update(
      {
        stock: stockBooks,
      },
      {
        where: {
          id: borrow.book_id,
        },
      }
    );

    return updated;
  } else {
    error.message = 'finish borrow';
    error.code = 400;
    throw error;
  }
};

module.exports = {
  addBorrow,
  returnBook,
};
