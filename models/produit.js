const mongo = require("mongoose");
const schema = mongo.Schema;

var Produit = new schema({
  nom: String,
  prix_unitaire: String,
  quantite: Number 
});
module.exports = mongo.model("produit", Produit);
