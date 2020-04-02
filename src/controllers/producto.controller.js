const sq = require('sequelize');
const poo = require('../database');
const bs = require('bcryptjs');
const Producto = require('../models/productos');

//POST

async function get_productos(req,res){
    try {
        const productos = await Producto.producto.findAll();
        res.json({
            productos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong in getProductos',
            data: error
        });
    }
};

module.exports.get_productos = get_productos;