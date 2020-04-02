const sq = require('sequelize');
const poo = new sq(
    'dcob0pg0rpu7kp',
    'yadoqikftpgvbq',
    'f3b7bbab7a9c03b11a0aa41153e3ef5422498cc9dd6ba263ca7dcf0f750dd80b',
    {
        host: 'ec2-52-207-93-32.compute-1.amazonaws.com',
        dialect: 'postgres',
        dialectOptions: {
            ssl: true
        },
        pool:{
            max:5,
            min:0,
            require: 30000,
            idle: 10000
        },
        logging: false,
    }
);

module.exports = poo;