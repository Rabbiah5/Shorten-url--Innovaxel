const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('url_shortener', 'root', 'rabbiah5qamar', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;