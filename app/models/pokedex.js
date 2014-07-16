var mongoose = require('mongoose');

var pokedexSchema = mongoose.Schema({
  name: String,
  natDexID, Number
});

var Pokedex = mongoose.model('Pokedex', pokedexSchema);

module.exports = Pokedex;
