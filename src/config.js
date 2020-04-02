const qe = require('querystring');
//const key = qe.generate(2048);
module.exports = {
    port: 3000 || process.env.PORT  ,
    db: process.env.DATABASE_URL || 'postgres://yadoqikftpgvbq:f3b7bbab7a9c03b11a0aa41153e3ef5422498cc9dd6ba263ca7dcf0f750dd80b@ec2-52-207-93-32.compute-1.amazonaws.com:5432/dcob0pg0rpu7kp',
    dbdavid: 'postgres://osvscqwomjmdkr:513517adc582b816705a1c38c932f4e4a43e7c856e0080340c5d7249bf3f0ccd@ec2-23-21-186-85.compute-1.amazonaws.com:5432/d7q5fo2h3d7eqe',
    token_secret: 'motherFucker'
    //k_public: key.public
}