const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOSTNAME,
    dialect: "mysql",
    logging: false,
  }
);
sequelize.sync({ alter: true });
module.exports = sequelize;
