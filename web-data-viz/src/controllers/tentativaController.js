var tentativaModel = require("../models/tentativaModel");

function registrarTentativaConhecimento(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var desempenho = req.body.desempenho; // objeto com categorias

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined");
        return;
    }

    if (acertos == undefined || erros == undefined) {
        res.status(400).send("acertos e/ou erros estão undefined");
        return;
    }

    tentativaModel.inserirTentativaConhecimento(fkUsuario, acertos, erros)
        .then(function (resultado) {
            // resultado.insertId deve conter o id da tentativa criada
            var idTentativa = resultado.insertId;
            console.log("Tentativa inserida com id: ", idTentativa);

            // se houver desempenho por categoria, insere os registros
            var promessas = [];
            if (desempenho && typeof desempenho === 'object') {
                Object.keys(desempenho).forEach(function (categoria) {
                    var cat = categoria;
                    var certas = desempenho[categoria].certas || 0;
                    var erradas = desempenho[categoria].erradas || 0;
                    promessas.push(tentativaModel.inserirResultadoTentativa(idTentativa, cat, certas, erradas));
                });
            }

            Promise.all(promessas)
                .then(function (resultadosInsercao) {
                    res.status(201).json({ mensagem: 'Tentativa e resultados registrados', idTentativa: idTentativa });
                })
                .catch(function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage || erro);
                });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

module.exports = {
    registrarTentativaConhecimento
};
