const memberRepository = require('../repository/member');

const getMember = async (req, res) => {
  try {
    const get = await memberRepository.getMember();

    return res.respondGet(get);
  } catch (err) {
    return res.respondServerError(err.message);
  }
};

const getMemberId = async (req, res) => {
  try {
    const id = req.params.id;
    const getMember = await memberRepository.getMemberId(id);

    const total = await memberRepository.getTotalBook(id);

    return res.respondGet({ 'Data Member': getMember, 'Total Pinjam Buku': total });
  } catch (err) {
    return res.respondServerError(err.message);
  }
};

module.exports = {
  getMember,
  getMemberId,
};
