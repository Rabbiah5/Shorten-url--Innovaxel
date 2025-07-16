const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const URL = sequelize.define('URL', {
  url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  shortCode: {
    type: DataTypes.STRING(10),
    unique: true,
    allowNull: false
  },
  accessCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: true
});

module.exports = URL;