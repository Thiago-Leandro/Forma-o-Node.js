## instalando bibliotecas para inciar o projeto

~~~ 
npm init

npm install --save express

npm install --save sequelize

npm install --save mysql2

npm install --save body-parser

npm install --save ejs
~~~

## Para rodar a aplicação enquanto esta codando.
~~~
nodemon index.js
~~~

## Ultilizar a senha da sua instalação do banco de dados
* Password: 1234

## 77. Relacionamentos na nossa aplicação

  * Relacionamento Um para Um (1:1):

Cada registro em uma tabela está relacionado a apenas um registro em outra tabela, e vice-versa. Este tipo de relacionamento é menos comum, pois geralmente é mais eficiente combinar as tabelas.

  * Relacionamento Um para Muitos (1:N):

Um registro em uma tabela está relacionado a vários registros em outra tabela, mas cada registro nesta segunda tabela está relacionado a apenas um registro na primeira tabela. Este é o tipo de relacionamento mais comum.