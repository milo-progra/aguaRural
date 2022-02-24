'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = Schema({
    mes:String,
    consumo:String,
    precio:String
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects ---> guarda los document en la coleccion
//se escribe project por que le sistema prulariza el nombre de la coleccion


