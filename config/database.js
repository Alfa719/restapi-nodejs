const { Sequelize } = require("sequelize");

const db = new Sequelize('dbrestapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;