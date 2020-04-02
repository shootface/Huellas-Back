const sq = require('sequelize');
const poo = require('../database');
const Usuario = require('../models/ususario');

async function login(req,res){
    const {
        pk_cedula,
        pass
    } = req.body;
    try {
        const user = await Usuario.usuario.findOne({
            where:{
                pk_cedula
            }
        });
        if(user.c_pass == pass){
            res.status(200).json({
                message: 'logged',
            });
        }
    } catch (error) {
        
    }
};

module.exports.login = login;