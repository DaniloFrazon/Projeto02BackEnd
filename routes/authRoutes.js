//Nome dos integrantes:
//Danilo Augusto Martins Frazon
//João Vitor Furquim de Brito 
//Pedro Henrique Silva Melo 

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

function isAuthenticated(req, res, next) {
  if (req.session.user) return next();
  res.redirect("/login");
}

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/protected", isAuthenticated, authController.showProtected);
router.get("/logout", authController.logout);

module.exports = router;
