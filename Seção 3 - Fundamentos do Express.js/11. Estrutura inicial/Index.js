const { error } = require("console");
const express = require ("express"); //importando o Express
const app = express(); //Iniciando o Express

app.get("/",function(req,res){
    res.send("Bem vindo ao guia do Programador")
});

// :artigo? não é um parametro obrigatorio  
app.get("/blog/:artigo?",function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>");
    }else{
        res.send("Bem vindo ao meu blog")
    }
});

app.get("/canal/youtube",function(req,res){
    res.send("Bem vindo ao meu canal")
});

app.get("/ola/:nome/empresa", function(req,res){
    //req são os dados ernviados pelo usuario
    //res é a resposta é a resposta que vai ser enviada para o usuario
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi! " + nome + " do " + empresa + " </h1>");
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso!");
    }
})