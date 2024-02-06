CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(50),
    idade INT
    );

INSERT INTO usuarios(nome,email, idade) VALUES(
        "Thiago Leandro",
        "Email@teste.com",
        29
);

INSERT INTO usuarios(nome,email, idade) VALUES(
        "Maria Silva",
        "Email12@teste.com",
        25
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 25;

SELECT * FROM usuarios WHERE nome = "Thiago Leandro";

SELECT * FROM usuarios WHERE idade >= 18;

DELETE FROM usuarios WHERE nome = "Thiago Leandro";

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Maria Silva";