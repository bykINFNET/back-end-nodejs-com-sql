const {Sequelize, DataTypes} = require('sequelize');

const db = require('../database/conn');

const bcrypt = require('bcrypt');


const Aluno = db.define('Aluno', {
    id: { // id ou numero de matricula
        type: DataTypes.INTEGER,

        primaryKey: true,

        autoIncrement: true,
    },
    username: { // nome do usuario
        type: DataTypes.STRING,

        allowNull: false,

        unique: true
    },
    password: { 
        type: DataTypes.STRING,

        allowNull: false
    },
    nameAluno: {
        type: DataTypes.STRING,

        allowNull: false,

        unique: true,
    },
    email: {
        type: DataTypes.STRING,

        allowNull: false,

        unique: true,

        validate: {
            isEmail: true
        }
    },
    gender: {
        type: DataTypes.CHAR,

        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,

        allowNull: false,

        validate: {
            isDate: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,

        allowNull: true
    },
    address: {
        type: DataTypes.STRING,

        allowNull: true
    }
});

Aluno.beforeCreate(async (aluno) => {
    const passwordHash = await bcrypt.hash(aluno.password, 10);
    
    aluno.password = passwordHash;
});


module.exports = Aluno;