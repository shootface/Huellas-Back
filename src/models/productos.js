const sq = require('sequelize');
const poo = require('../database');

const producto = poo.define('producto',{
    pk_producto:{
        type: sq.INTEGER,
        primaryKey: true
    },
    c_nombre:{
        type: sq.STRING(30)
    },
    k_subcategoria:{
        type: sq.INTEGER
    },
    v_nombreimagen:{
        type: sq.STRING(300)
    },
    n_cantidad:{
        type: sq.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'producto',
    modelName: 'Producto'
});

module.exports.producto = producto;