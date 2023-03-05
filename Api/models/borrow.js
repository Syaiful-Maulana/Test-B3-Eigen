'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Borrow.init(
    {
      date_borrow: DataTypes.DATE,
      date_return: DataTypes.DATE,
      returned: DataTypes.DATE,
      member_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Borrow',
    }
  );
  return Borrow;
};
