const sq = require('sequelize');
const poo = require('../database');

const usuario = poo.define('usuario',{
    pk_cedula:{
        type: sq.INTEGER,
        primaryKey: true
    },
    c_nombre:{
        type: sq.STRING(30)
    },
    c_pass: {
        type: sq.STRING(30)
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'usuario',
    modelName: 'usuario'
});

module.exports.usuario = usuario;