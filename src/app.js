const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', 3000 || process.env.PORT );
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('images'));
app.use(express.urlencoded({extended: false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, authtoken");
    next();
});
// routes
app.use(require('./routes/index'));
app.use('/productos',require('./routes/producto'));
app.use('/usuarios',require('./routes/usuario'));
app.use('/login',require('./routes/login'));

module.exports = app;