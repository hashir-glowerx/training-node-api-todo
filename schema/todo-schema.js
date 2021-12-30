const db = require("../config/db");
const { Sequelize } = require("sequelize");

const TodoSchema = db.define(
  "todo",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = TodoSchema;
