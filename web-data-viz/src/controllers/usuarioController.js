var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        fotoPerfil: resultadoAutenticar[0].foto_perfil,
                                        tipo_usuario: resultadoAutenticar[0].tipo_usuario,
                                        ativo: resultadoAutenticar[0].ativo
                                    });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar(req, res) {
    var id = req.body.id;
    var nome = req.body.nomeAtualizado;
    var email = req.body.emailAtualizado;

    var fotoPerfil = null;

    if (req.file) {
        fotoPerfil = req.file.filename;
    }

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (id == undefined){
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizar(id, nome, email, fotoPerfil)
            .then(
                function (resultado) {
                    res.json({
                        resultado: resultado,
                        fotoPerfil: fotoPerfil
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar os dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function alterarSenha(req, res) {
    var id = req.body.id;
    var senhaAtual = req.body.senhaAtual;
    var novaSenha = req.body.novaSenha;

    // Faça as validações dos valores
    if (senhaAtual == undefined) {
        res.status(400).send("Sua senha atual está undefined!");
    } else if (novaSenha == undefined) {
        res.status(400).send("Sua nova senha está undefined!");
    } else if (id == undefined){
        res.status(400).send("Seu id está undefined!");
    } else {

        usuarioModel.buscarSenha(id)
        .then(function (resultado) {

            if (resultado.length == 0) {
                return res.status(404).send("Usuário não encontrado");
            }

            if (senhaAtual != resultado[0].senha) {
                return res.status(401).send("Senha atual incorreta");
            }

            usuarioModel.alterarSenha(id, novaSenha)
                .then(function (resultado) {
                    res.status(200).send("Senha alterada com sucesso!");
                })
                .catch(function (erro) {
                    console.log(erro);
                    res.status(500).send(erro);
                });

        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).send(erro);
        });
    }
}

function desativarUsuario(req, res) {
    var id = req.body.idSelecionado;

    if (id == undefined){
        res.status(400).send("Seu id está undefined!");
    } else {

        usuarioModel.desativarUsuario(id)
            .then(
                function (resultado) {
                    res.json({
                        resultado: resultado,
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao tentar desativar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function ativarUsuario(req, res) {
    var id = req.body.idSelecionado;

    if (id == undefined){
        res.status(400).send("Seu id está undefined!");
    } else {

        usuarioModel.ativarUsuario(id)
            .then(
                function (resultado) {
                    res.json({
                        resultado: resultado,
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao tentar ativar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    alterarSenha,
    desativarUsuario,
    ativarUsuario
}