var http = require("http"); //este modulo já vem imprtado do Node.js

http.createServer(function(requisicao,resposta){
    resposta.end ("<h1>Bem vindo ao Site!</h1><h4>Guiadoprogramador.com</h4>");
}).listen(3000); //Criando o servidor local

console.log("Meu servidor esta rodando!"); //mensagem para mostrar o servidor rodando