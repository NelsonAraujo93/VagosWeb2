'use strict';

//cargar modulos de node
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//ejecutar express

//cargar las rutas
var adminRoutes = require('./routes/admin');

//middlewares algo que se ejecuta antes de las rutas o las url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//CORS para permitir peticiones desde el front

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//prefijos a las rutas

app.use('/vagos', adminRoutes);


//exportar el modulo (fichero actual)

module.exports = app;