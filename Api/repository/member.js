const { Member, Book, Borrow } = require('../models');
const error = new Error();

const getMember = async () => {
  const get = await Member.findAll();

  return get;
};

const getMemberId = async (id) => {
  const getMember = await Member.findOne({ where: { id: id } });
  if (!getMember) {
    error.message = 'member not found';
    error.code = 404;
    throw error;
  }
  return getMember;
};

const getTotalBook = async (id) => {
  const getStatusSelesai = await Borrow.count({ where: { member_id: id, status: 'Selesai' } });
  const getStatusPinjam = await Borrow.count({ where: { member_id: id, status: 'Sedang Di Pinjam' } });
  const total = getStatusPinjam - getStatusSelesai;

  return total;
};

module.exports = {
  getMember,
  getMemberId,
  getTotalBook,
};
