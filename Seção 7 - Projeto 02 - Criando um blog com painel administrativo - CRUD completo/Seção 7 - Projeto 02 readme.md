# Anotações praticas do projeto #02 

## Instalando bibliotecas para inciar o projeto

 * **npm:** O Node Package Manager (npm) é um gerenciador de pacotes para o ecossistema do Node.js. Ele permite instalar, compartilhar e gerenciar pacotes ou bibliotecas de código JavaScript para serem usados em projetos.

 * **install:** É o comando usado para instalar pacotes ou bibliotecas do npm. Quando você executa npm install, o npm baixa e instala os pacotes especificados no seu projeto.

 * **--save:** Esta opção foi usada em versões mais antigas do npm para indicar que a dependência deveria ser registrada no arquivo package.json do projeto. No npm 5 e versões posteriores, --save é o comportamento padrão e não é necessário especificá-lo explicitamente.

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

  * Relacionamento Um para Um (1:1): ARTIGO > CATEGORIA

Cada registro em uma tabela está relacionado a apenas um registro em outra tabela, e vice-versa. Este tipo de relacionamento é menos comum, pois geralmente é mais eficiente combinar as tabelas.

  * Relacionamento Um para Muitos (1:N): CATEGORIA > ARTIGO

Um registro em uma tabela está relacionado a vários registros em outra tabela, mas cada registro nesta segunda tabela está relacionado a apenas um registro na primeira tabela. Este é o tipo de relacionamento mais comum.

hasMany - Uma categoria tem muitos artigos
~~~
Category.hasMany(Article);
~~~

belongsTo - Um Artigo pertence a uma categoria
~~~
Article.belongsTo(Category);
~~~

## 81. Cadastro de categorias e Slugify

 * **slugify:** É o nome do pacote que você está instalando. O pacote slugify é uma ferramenta útil para converter strings em "slugs", que são segmentos de texto que geralmente são usados em URLs amigáveis para SEO. Um slug normalmente contém apenas caracteres alfanuméricos em minúsculas, bem como traços (-) para separar palavras.

~~~ 
npm install --save slugify
~~~

 * Ao executar *npm install --save slugify*, você estará instalando o pacote slugify no seu projeto Node.js e garantindo que ele seja listado como uma dependência no arquivo package.json. Isso permite que outras pessoas que trabalham no seu projeto ou que baixem seu projeto saibam quais pacotes são necessários para executá-lo.

 ## 91. Configurando o TinyMCE

  * O TinyMCE é um editor de texto rico em recursos que pode ser incorporado em aplicativos da web para fornecer uma experiência de edição de texto mais avançada. Ele oferece uma ampla variedade de recursos, incluindo formatação de texto, inserção de imagens, links, tabelas e muito mais.

Para integrar o TinyMCE em sua aplicação web, você pode seguir estes passos básicos:

*Download TinyMCE Community*

https://www.tiny.cloud/get-tiny/self-hosted/

Dentro da pasta public descopmpacta os arquivos e deixa *\public\tinymce*

 ## 92. Traduzindo o TinyMCE

https://www.tiny.cloud/get-tiny/language-packages/