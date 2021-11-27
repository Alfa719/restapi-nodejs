const sequelize = require('sequelize');
const db = require('../config/database');

const { DataTypes } = sequelize;

const Mahasiswa = db.define('mahasiswa', {
    sin: {
        type: DataTypes.CHAR
    },
    name: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.BOOLEAN(['Male', 'Female'])
    },
    address: {
        type: DataTypes.TEXT
    },
    birth_date: {
        type: DataTypes.DATE
    }
},{
    tableName: 'mahasiswa'
})

module.exports = Mahasiswa;