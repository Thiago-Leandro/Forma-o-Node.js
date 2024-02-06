const Sequelize = require("sequelize");
const connection = require("./database");
const { response } = require("express");

const Resposta = connection.define("respostas",{
    corpo: {
        type: Sequelize.TEXT,
        allowNulll: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNulll: false
    }
});

Resposta.sync({force: false});

module.exports = Resposta;