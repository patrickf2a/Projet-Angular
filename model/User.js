let mongoose = require('mongoose');

var agregatePaginate = require('mongoose-aggregate-paginate-v2');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    id: Number,
    nom: String,
    motdepasse: String,
    isadmin: Boolean,
});



UserSchema.plugin(agregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('user', UserSchema);
