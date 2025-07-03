//Nome dos integrantes:
//Danilo Augusto Martins Frazon
//João Vitor Furquim de Brito 
//Pedro Henrique Silva Melo 

const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.send("Usuário não encontrado");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Senha incorreta");

  req.session.user = user;
  res.redirect("/protected");
};

exports.showProtected = (req, res) => {
  res.render("protected", { user: req.session.user });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
