var dashboardModel = require("../models/dashboardModel");

function buscarDadosDashboard(req, res) {

    var id = req.query.id;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        Promise.all([
            dashboardModel.buscarTotalQuiz(id),
            dashboardModel.buscarTaxaAcerto(id),
            dashboardModel.buscarUltimoPersonagem(id),
            dashboardModel.buscarTaxaAcertoCategoria(id),
            dashboardModel.buscarEvolucaoTaxaAcerto(id),
        ])

            .then(
                function (resultados) {
                    res.status(200).json({
                        totalQuiz: resultados[0][0],
                        taxaAcerto: resultados[1][0],
                        personagem: resultados[2][0],
                        categorias: resultados[3],
                        evolucao: resultados[4]
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao obter os dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarHistorico(req, res) {

    var id = req.query.id;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        dashboardModel.buscarHistoricoQuiz(id)

            .then(
                function (resultado) {
                    res.status(200).json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao obter os dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarDadosDashboardAdmin(req, res) {

    Promise.all([
        dashboardModel.buscarTotalUsuarios(),
        dashboardModel.buscarUsuarioAtivo(),
        dashboardModel.buscarTotalQuizAdmin(),
        dashboardModel.buscarPersonagens(),
        dashboardModel.buscarTaxaAtividade(),
    ])

        .then(
            function (resultados) {
                res.status(200).json({
                    totalUsuarios: resultados[0][0],
                    usuarioAtivo: resultados[1][0],
                    totalQuizAdmin: resultados[2][0],
                    personagens: resultados[3],
                    taxaAtividade: resultados[4]
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao obter os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarUsuarios(req, res) {


        dashboardModel.buscarUsuarios()

            .then(
                function (resultado) {
                    res.status(200).json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao obter os dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    buscarDadosDashboard,
    buscarHistorico,
    buscarDadosDashboardAdmin,
    buscarUsuarios
}