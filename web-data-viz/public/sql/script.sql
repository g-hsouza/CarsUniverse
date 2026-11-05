CREATE DATABASE carsUniverse;

USE carsUniverse;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    foto_perfil VARCHAR(255),
    ativo TINYINT NOT NULL DEFAULT 1
);

CREATE TABLE tentativa_conhecimento (
	id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    acertos INT NOT NULL,
    erros INT NOT NULL,
    data_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario (id)
);

CREATE TABLE resultado_tentativa (
	id INT PRIMARY KEY AUTO_INCREMENT,
    fk_tentativa INT NOT NULL,
    categoria VARCHAR(45) NOT NULL,
    acertos INT NOT NULL,
    erros INT NOT NULL,
    UNIQUE(fk_tentativa, categoria),
    FOREIGN KEY (fk_tentativa) REFERENCES tentativa_conhecimento (id)
);

CREATE TABLE personagem (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    caracteristica VARCHAR(45) NOT NULL,
    foto VARCHAR(255) NOT NULL
);

CREATE TABLE tentativa_personalidade (
	id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    fk_personagem INT NOT NULL,
    data_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario (id),
    FOREIGN KEY (fk_personagem) REFERENCES personagem (id)
);

