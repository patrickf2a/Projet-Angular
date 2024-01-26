let mongoose = require('mongoose');

var agregatePaginate = require('mongoose-aggregate-paginate-v2');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur: String,
    note: Number,
    remarques: String,
    matiere: String,
    photoprof:String,
    photomatiere:String,
});

AssignmentSchema.plugin(agregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('assignments', AssignmentSchema);
