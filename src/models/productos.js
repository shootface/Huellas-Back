const sq = require('sequelize');
const poo = require('../database');

const producto = poo.define('producto',{
    PK_PRODUCTO:{
        type: sq.INTEGER,
        primaryKey: true
    },
    C_NOMBRE:{
        type: sq.STRING(30)
    },
    K_SUBCATEGORIA:{
        type: sq.INTEGER
    },
    V_NOMBREIMAGEN:{
        type: sq.STRING(300)
    },
    N_CANTIDAD:{
        type: sq.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Producto',
    modelName: 'Producto'
});

module.exports.producto = producto;