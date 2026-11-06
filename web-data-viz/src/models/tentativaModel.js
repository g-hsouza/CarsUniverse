var database = require("../database/config");

function inserirTentativaConhecimento(fkUsuario, acertos, erros) {
    console.log("ACESSEI O MODEL tentativaModel -> inserirTentativaConhecimento", fkUsuario, acertos, erros);
    var instrucaoSql = `
        INSERT INTO tentativa_conhecimento (fk_usuario, acertos, erros) VALUES (${fkUsuario}, ${acertos}, ${erros});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirResultadoTentativa(fkTentativa, categoria, acertos, erros) {
    console.log("ACESSEI O MODEL tentativaModel -> inserirResultadoTentativa", fkTentativa, categoria, acertos, erros);
    var instrucaoSql = `
        INSERT INTO resultado_tentativa (fk_tentativa, categoria, acertos, erros) VALUES (${fkTentativa}, '${categoria}', ${acertos}, ${erros});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirTentativaPersonalidade(fkUsuario, fkPersonagem) {
    console.log("ACESSEI O MODEL tentativaModel -> inserirTentativaPersonalidade", fkUsuario, fkPersonagem);
    var instrucaoSql = `
        INSERT INTO tentativa_personalidade (fk_usuario, fk_personagem) VALUES (${fkUsuario}, ${fkPersonagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirTentativaConhecimento,
    inserirResultadoTentativa,
    inserirTentativaPersonalidade
};
