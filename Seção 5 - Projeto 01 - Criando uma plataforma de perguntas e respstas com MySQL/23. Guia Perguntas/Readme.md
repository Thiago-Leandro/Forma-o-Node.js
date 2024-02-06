## Instalações Iniciais

~~~
npm install express --save
~~~

~~~
npm install ejs --save
~~~

## Para verificar a aplicação enquando trabalha 

~~~
nodemon Index.js
~~~

## Bootstrap

### Compiled CSS and JS

#### Realizar o download no projeto

[Site official do Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/download/)

### Se você estiver usando nosso JavaScript compilado e preferir incluir Popper.js separadamente, adicione Popper.js antes de nosso JS, de preferência por meio de um CDN

~~~
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
~~~

~~~
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
~~~

## Nova forma de utilizar partials - correção de erro

#### antes 
~~~
<%- include partials/header.ejs %>
~~~

#### depois 
~~~
<%- include ('partials/header.ejs'); %>
~~~

## Instalando a biblioteca

~~~
npm install body-parser --save
~~~

#### Ultilizando a biblioteca
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

## Instalar o MySQL Workbench 

https://www.mysql.com/products/workbench/

#### ultilizar a senha da sua instalação 
* Password: 1234

## Instalar o Sequelize

~~~
npm install --save sequelize
~~~

#### Biblioteca adicional 

~~~
npm install --save mysql2
~~~

### oque é o sequelize?

O Sequelize é um ORM (Object-Relational Mapping) para Node.js, que facilita a interação com bancos de dados relacionais. Um ORM é uma técnica de programação que permite mapear objetos da linguagem de programação para tabelas em um banco de dados relacional e vice-versa. Com o Sequelize, você pode interagir com bancos de dados como o MySQL, PostgreSQL, SQLite e MSSQL de uma maneira mais orientada a objetos, usando JavaScript.

Principais recursos do Sequelize:

 - Mapeamento de Objetos para Tabelas: O Sequelize permite que você defina modelos de dados em JavaScript que são então mapeados para tabelas no banco de dados.

 - Migrações: Facilita a evolução do esquema do banco de dados ao longo do tempo por meio de migrações controladas por código.

 - Consultas e Transações: Oferece uma API rica para realizar consultas e transações no banco de dados usando JavaScript ou tipos de dados específicos do Sequelize.

 - Relacionamentos: Suporta a definição e utilização de relacionamentos entre modelos, como associações de um-para-um, um-para-muitos e muitos-para-muitos.

 - Hooks e Validations: Permite a definição de gatilhos (hooks) para execução de código antes ou depois de operações no banco de dados

  - Suporte Multi-Banco: Oferece suporte para diferentes tipos de bancos de dados relacionais, permitindo a troca fácil entre eles sem modificar significativamente o código da aplicação.

A utilização do Sequelize pode simplificar o código relacionado a bancos de dados e fornecer uma abstração mais amigável para desenvolvedores Node.js que estão acostumados a trabalhar com JavaScript.

https://sequelize.org/docs/v6/getting-started/

## 