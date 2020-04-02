const sq = require('sequelize');
const poo = require('../database');

const usuario = poo.define('usuario',{
    PK_CEDULA:{
        type: sq.INTEGER,
        primaryKey: true
    },
    C_NOMBRE:{
        type: sq.STRING(30)
    },
    C_PASS: {
        type: sq.STRING(30)
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Usuario',
    modelName: 'Usuario'
});

module.exports.usuario = usuario;