var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GruposSchema = Schema({
    nombreGrupo: String,
    numIntegrantes: Number,
    genero: String,
    nacionalidad: String,
    añoCreación: Number,
    añoSeparación: Number

});

module.exports = mongoose.model('Grupo', GruposSchema);