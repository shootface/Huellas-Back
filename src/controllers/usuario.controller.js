const sq = require('sequelize');
const poo = require('../database');
const Usuario = require('../models/ususario');


async function crear_usuario(req,res){
    const {
        pk_cedula,
        c_nombre,
        c_pass
    } = req.body;
    try {
        let u = await Usuario.usuario.create({
            pk_cedula,
            c_nombre,
            c_pass
        });
        if(u){
            return res.json({
                message: 'Usuario created successfully',
                data: u
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong in crear_usuario',
            data: error
        });
    }
}

module.exports.crear_usuario = crear_usuario;