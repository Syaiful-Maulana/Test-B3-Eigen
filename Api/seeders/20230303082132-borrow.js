'use strict';

const { date } = require('joi');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Borrows',
      [
        {
          date_borrow: new Date(2023, 3, 3, 14, 37, 8),
          returned: new Date(2023, 3, 4, 14, 37, 8),
          member_id: 1,
          book_id: 1,
          status: 'selesai',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
