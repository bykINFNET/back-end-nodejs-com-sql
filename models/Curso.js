const {Sequelize, DataTypes} = require('sequelize');

const db = require('../database/conn');

const Curso = db.define('Curso', {
    id: {
        type: DataTypes.INTEGER,

        primaryKey: true,

        autoIncrement: true,
    },
    nameCurso: {
        type: DataTypes.STRING,

        allowNull: false,

        unique: true
    },
    description: {
        type: DataTypes.STRING,

        allowNull: true
    },
    startDate: {
        type: DataTypes.DATEONLY,

        validate: {
            isDate: true
        }
    },
    maxParticipants: {
        type: DataTypes.INTEGER,

        allowNull: false
    },
    enrolledParticipants: {

        type: DataTypes.INTEGER,

        allowNull: false,

        defaultValue: 0
    }
})

module.exports = Curso;