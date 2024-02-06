# O que é HTTP?

O **HTTP (Hypertext Transfer Protocol)** é um protocolo de comunicação utilizado para transferir informações na World Wide Web (WWW). Ele define a maneira pela qual clientes (como navegadores da web) solicitam recursos, como páginas da web, imagens, vídeos, entre outros, de servidores web.

## Funcionamento Básico

* **Pedido (Request)**: Um cliente faz uma solicitação a um servidor web para acessar um recurso específico, enviando um pedido HTTP. Esse pedido inclui informações como método (GET, POST, etc.), URL do recurso e cabeçalhos.
* **Resposta (Response)**: O servidor processa a solicitação e responde com uma mensagem HTTP contendo informações do recurso solicitado, status da requisição (como 200 OK, 404 Not Found), cabeçalhos e opcionalmente o próprio recurso requisitado.

## Métodos HTTP Comuns
* **GET**: Solicita recursos do servidor.
* **POST**: Envia dados para o servidor, frequentemente usado para submissão de formulários.
* **PUT**: Atualiza um recurso no servidor.
* **DELETE**: Remove um recurso do servidor.

## Componentes Chave
* **URL** (Uniform Resource Locator): Endereço que identifica o local de um recurso na web.
* **Cabeçalhos (Headers)**: Metadados enviados com a requisição ou resposta, incluindo informações sobre o tipo de conteúdo, cache, autenticação, entre outros.
* **Corpo da Mensagem (Message Body)**: Contém os dados transmitidos, como conteúdo HTML, JSON, imagens, etc.

## Estado de Resposta HTTP
* **1xx**: Informacional
* **2xx**: Sucesso (ex: 200 OK)
* **3xx**: Redirecionamento
* **4xx**: Erro do cliente (ex: 404 Not Found)
* **5xx**: Erro do servidor (ex: 500 Internal Server Error)

## Importância
HTTP é fundamental para a comunicação entre clientes e servidores na web, permitindo a transferência de dados e recursos. Ele forma a base para a interação entre navegadores web e servidores, possibilitando a exibição de páginas, o envio de formulários e a troca de informações na internet.