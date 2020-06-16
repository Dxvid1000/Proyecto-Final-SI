var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GruposSchema = Schema({
    nombreGrupo: String,
    numIntegrantes: String,
    genero: String,
    nacionalidad: String,
    añoCreación: String,
    añoSeparación: String

});

module.exports = mongoose.model('Grupo', GruposSchema);
