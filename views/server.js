//Nome dos integrantes:
//Danilo Augusto Martins Frazon
//João Vitor Furquim de Brito 
//Pedro Henrique Silva Melo 

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.use(session({
  secret: "secretoseguro",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/", authRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

