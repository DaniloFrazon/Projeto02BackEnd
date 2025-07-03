//Nome dos integrantes:
//Danilo Augusto Martins Frazon
//João Vitor Furquim de Brito 
//Pedro Henrique Silva Melo 

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
