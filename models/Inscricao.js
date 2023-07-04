const {Sequelize, DataTypes} = require('sequelize');

const db = require('../database/conn');

// 
const Aluno = require('../models/Aluno');

const Curso = require('../models/Curso');

const Inscricao = db.define('Inscricao', {
    id: {
        type: DataTypes.INTEGER,

        primaryKey: true,

        autoIncrement: true,
    }, 
    inscrito: {
        type: DataTypes.BOOLEAN,

        defaultValue: true
    },
    alunoId: {
        type: DataTypes.INTEGER,

        allowNull: false,

        references: {
            model: 'Aluno',

            key: 'id'
        }
    },
    cursoId: {
        type: DataTypes.INTEGER,

        allowNull: false,

        references: {
            model: 'Curso',

            key: 'id'
        }    }
});

// fazendo relacionamento com a tabela Aluno pelo ID
Inscricao.belongsTo(Aluno, {foreignKey: 'alunoId'});

// fazendo relacionamento com a tabela Curso pelo ID
Inscricao.belongsTo(Curso, {foreignKey: 'cursoId'});

module.exports = Inscricao;