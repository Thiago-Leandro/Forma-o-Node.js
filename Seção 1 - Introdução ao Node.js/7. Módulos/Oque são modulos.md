# Módulos no Node.js <h1>

No Node.js, os **módulos** são arquivos JavaScript que contêm funcionalidades específicas e podem ser reutilizados em diferentes partes de um programa. Eles ajudam na organização do código, permitindo que você divida seu aplicativo em partes menores e mais gerenciáveis.

Os módulos no Node.js seguem o sistema CommonJS, que define como os módulos são declarados, importados e exportados.

## Exportação de Módulos <h2>

Em um arquivo JavaScript, você pode exportar funções, objetos ou variáveis usando a palavra-chave module.*exports* ou *exports*.

Exemplo de arquivo de módulo (*exemplo.js*):

~~~javascript

// exportando uma função
function soma(a, b) {
  return a + b;
}
module.exports = soma;

// ou exportando diretamente
// exports.soma = soma;
~~~

## Importação de Módulos <h2>

Para utilizar um módulo em outro arquivo JavaScript, você pode importá-lo usando a função *require()*.

Exemplo de utilização do módulo:

~~~javascript
// exemplo de utilização do módulo
const minhaSoma = require('./exemplo'); // caminho relativo do arquivo de módulo

console.log(minhaSoma(2, 3)); // Saída: 5
~~~

O Node.js também fornece a funcionalidade dos **Módulos Nativos**, que são módulos incorporados ao próprio Node.js, como fs (sistema de arquivos), http (para criar servidores *HTTP*), entre outros. Além disso, o ecossistema Node.js possui uma vasta quantidade de pacotes e bibliotecas externas disponíveis no registro npm (Node Package Manager), os quais podem ser instalados e utilizados em projetos com o npm ou o Yarn.

Em resumo, os módulos no Node.js são uma parte essencial para organizar e reutilizar código, permitindo a construção de aplicativos mais escaláveis e fáceis de manter.