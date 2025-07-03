//Nome dos integrantes:
//Danilo Augusto Martins Frazon
//João Vitor Furquim de Brito 
//Pedro Henrique Silva Melo 

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("./models/user");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    const hashedPassword = await bcrypt.hash("123456", 10);

    const user = new User({
        username: "admin",
        password: hashedPassword
    });

    await user.save();
    console.log("Usuário admin criado com sucesso!");

    mongoose.disconnect();
}).catch(err => {
    console.error("Erro ao conectar ao MongoDB:", err);
});
